"""HaMuzim Chat -- FastAPI backend.

Sibling prototype to hamuzim-app. Where HaMuzim proves "draw a parcel, get a
timeline," this proves "ask a question, get a cited answer across cases."

Everything is mocked (see mock_data.py): six fictional demo parcels, no real
database, no real satellite/document pipeline. The one real piece of
engineering is the retrieval contract: every answer must be backed by
`search_parcels()` results, and the frontend renders those results as
evidence cards next to the reply -- so the chat can never state a finding
without a parcel ID and observation year to point at.

If ANTHROPIC_API_KEY is set, /api/chat runs an actual Claude tool-calling
loop against `search_parcels`. If it isn't, a small rule-based parser reads
the message for signal-type / date / keyword cues and calls the same
`search_parcels()` directly -- so the demo still runs standalone, and the
"mock" path is exercising the real filter, not just returning canned text.
"""

import json
import os
import re

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from mock_data import PARCELS, SIGNAL_TYPES, search_parcels

load_dotenv()

app = FastAPI(title="HaMuzim Chat API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # demo app -- tighten before any real deployment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------- schemas ----------

class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str
    history: list[ChatMessage] = []


# ---------- routes ----------

@app.get("/api/health")
def health():
    return {"status": "ok", "service": "hamuzim-chat-backend"}


@app.get("/api/parcels")
def list_parcels():
    """Debug/demo helper -- not used by the chat flow itself, lets you see
    the full mock universe the assistant is grounded against."""
    return {"parcels": PARCELS}


@app.post("/api/chat")
def chat(req: ChatRequest):
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        return _mock_chat_reply(req.message)

    try:
        return _claude_chat_reply(req.message, req.history, api_key)
    except Exception as exc:  # noqa: BLE001 -- demo fallback, any failure -> mock
        fallback = _mock_chat_reply(req.message)
        fallback["error"] = str(exc)
        return fallback


# ---------- Claude tool-calling path ----------

SYSTEM_PROMPT = (
    "You are the HaMuzim Chat assistant, answering questions about a small "
    "set of land parcels using only the search_parcels tool. Rules:\n"
    "1. Always call search_parcels to find evidence before answering a "
    "factual question -- never answer from memory.\n"
    "2. Every claim in your answer must cite a parcel ID (e.g. P-004) and "
    "an observation year. If you cannot cite it, do not state it.\n"
    "3. If search_parcels returns nothing, say so plainly -- do not "
    "speculate or invent a finding.\n"
    "4. Keep answers concise (3-6 sentences) and evidentiary in tone: this "
    "supports legal exhibits, not casual chat."
)

TOOLS = [
    {
        "name": "search_parcels",
        "description": (
            "Search the mock parcel evidence database. Filter by signal "
            "type, a year range, and/or a free-text keyword. Returns every "
            "parcel with at least one observation matching all supplied "
            "filters, including the matching observation records."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "signal_type": {
                    "type": "string",
                    "enum": SIGNAL_TYPES,
                    "description": "Restrict to observations tagged with this signal type.",
                },
                "date_from": {
                    "type": "integer",
                    "description": "Earliest observation year to include (inclusive).",
                },
                "date_to": {
                    "type": "integer",
                    "description": "Latest observation year to include (inclusive).",
                },
                "keyword": {
                    "type": "string",
                    "description": "Free-text keyword matched against the parcel name and observation findings.",
                },
            },
        },
    }
]


def _claude_chat_reply(message: str, history: list[ChatMessage], api_key: str) -> dict:
    import anthropic

    client = anthropic.Anthropic(api_key=api_key)
    messages = [{"role": h.role, "content": h.content} for h in history]
    messages.append({"role": "user", "content": message})

    evidence: list[dict] = []
    response = client.messages.create(
        model="claude-sonnet-4-5",
        max_tokens=800,
        system=SYSTEM_PROMPT,
        tools=TOOLS,
        messages=messages,
    )

    # Tool-calling loop: Claude may call search_parcels one or more times
    # before it has enough grounding to answer.
    max_turns = 4
    turns = 0
    while response.stop_reason == "tool_use" and turns < max_turns:
        turns += 1
        assistant_content = [block.model_dump() for block in response.content]
        messages.append({"role": "assistant", "content": assistant_content})

        tool_results = []
        for block in response.content:
            if block.type == "tool_use" and block.name == "search_parcels":
                result = search_parcels(**block.input)
                evidence.extend(result)
                tool_results.append(
                    {
                        "type": "tool_result",
                        "tool_use_id": block.id,
                        "content": json.dumps(result),
                    }
                )
        messages.append({"role": "user", "content": tool_results})

        response = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=800,
            system=SYSTEM_PROMPT,
            tools=TOOLS,
            messages=messages,
        )

    text = "".join(block.text for block in response.content if getattr(block, "type", None) == "text")
    return {
        "reply": text.strip() or "No answer produced -- try rephrasing the question.",
        "evidence": _dedupe_evidence(evidence),
        "source": "claude",
    }


# ---------- rule-based fallback path (no API key) ----------

_SIGNAL_KEYWORDS = {
    # Order matters: checked top-to-bottom, first match wins. More specific
    # signals go first so e.g. "cultivation loss" resolves to abandonment
    # rather than the generic "cultivation" keyword winning by coincidence.
    "abandonment": ["abandon", "unmanaged", "decline", "loss"],
    "construction": ["construct", "building", "structure", "encroach"],
    "document": ["document", "cadastral", "registry", "record"],
    "dispute": ["dispute", "claim", "overlapping"],
    "cultivation": ["cultivat", "farm", "agricultur", "grove"],
}


def _naive_parse_query(text: str) -> dict:
    lower = text.lower()
    filters: dict = {}

    for signal, keywords in _SIGNAL_KEYWORDS.items():
        if any(kw in lower for kw in keywords):
            filters["signal_type"] = signal
            break

    since_match = re.search(r"(?:since|after|from)\s+(\d{4})", lower)
    if since_match:
        filters["date_from"] = int(since_match.group(1))

    before_match = re.search(r"(?:before|until|up to)\s+(\d{4})", lower)
    if before_match:
        filters["date_to"] = int(before_match.group(1))

    between_match = re.search(r"between\s+(\d{4})\s+and\s+(\d{4})", lower)
    if between_match:
        filters["date_from"] = int(between_match.group(1))
        filters["date_to"] = int(between_match.group(2))

    return filters


def _mock_chat_reply(message: str) -> dict:
    filters = _naive_parse_query(message)
    matches = search_parcels(**filters)

    if not matches:
        reply = (
            "No mock parcels matched that query (source: rule-based fallback, "
            "no ANTHROPIC_API_KEY set). Try asking about cultivation, "
            "construction, abandonment, or document signals, optionally "
            "with a year range, e.g. \"cultivation loss since 2015\"."
        )
    else:
        lines = [
            f"Found {len(matches)} parcel(s) matching your query "
            "(source: rule-based fallback, no ANTHROPIC_API_KEY set):"
        ]
        for m in matches:
            years = ", ".join(str(o["year"]) for o in m["matching_observations"])
            lines.append(f"- {m['parcel_name']} ({m['parcel_id']}): matching observations in {years}.")
        reply = "\n".join(lines)

    return {"reply": reply, "evidence": matches, "source": "mock"}


def _dedupe_evidence(evidence: list[dict]) -> list[dict]:
    """Merge repeated tool calls that returned the same parcel, unioning
    their matching observations so the frontend renders one card per parcel."""
    by_id: dict[str, dict] = {}
    for item in evidence:
        pid = item["parcel_id"]
        if pid not in by_id:
            by_id[pid] = {**item, "matching_observations": list(item["matching_observations"])}
        else:
            seen_years = {o["year"] for o in by_id[pid]["matching_observations"]}
            for obs in item["matching_observations"]:
                if obs["year"] not in seen_years:
                    by_id[pid]["matching_observations"].append(obs)
                    seen_years.add(obs["year"])
    return list(by_id.values())
