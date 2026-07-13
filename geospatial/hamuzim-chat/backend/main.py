"""HaMuzim Chat -- FastAPI backend.

Sibling prototype to hamuzim-app. Where HaMuzim proves "draw a parcel, get a
timeline," this proves "ask a question, get a cited answer across cases."

The case-evidence layer is mocked (see mock_data.py): fictional demo
parcels, no real database, no real satellite/document pipeline. The one
real piece of engineering on that side is the retrieval contract: every
answer must be backed by `search_parcels()` results, and the frontend
renders those results as evidence cards next to the reply -- so the chat
can never state a finding without a parcel ID and observation year to
point at.

Added 2026-07-13: a second tool, `query_openstreetmap` (see real_data.py),
is genuinely real -- a live call to OpenStreetMap's public Nominatim API,
not mocked at all. It answers real current-day geography questions
completely separately from the fictional parcel evidence, and the system
prompt tells the model not to blend the two.

If GEMINI_API_KEY is set, /api/chat runs an actual Gemini function-calling
loop (google-genai SDK, Interactions API) against `search_parcels`. If it
isn't, a small rule-based parser reads the message for signal-type / date /
keyword cues and calls the same `search_parcels()` directly -- so the demo
still runs standalone, and the "mock" path is exercising the real filter,
not just returning canned text.

Switched from Anthropic to Gemini for cost: Gemini's Flash-Lite tier has a
free-tier quota generous enough for a live class demo, no billing needed.
"""

import json
import os
import re

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from mock_data import PARCELS, SIGNAL_TYPES, search_parcels
from real_data import query_openstreetmap

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
    lang: str = "en"  # "en" or "he" -- drives fallback message language and
    # is passed to Gemini as a hint; Gemini also just reads the query
    # language directly, this is a backstop for a Hebrew UI + English query.


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
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        return _mock_chat_reply(req.message, req.lang)

    try:
        return _gemini_chat_reply(req.message, req.history, api_key, req.lang)
    except Exception as exc:  # noqa: BLE001 -- demo fallback, any failure -> mock
        fallback = _mock_chat_reply(req.message, req.lang)
        fallback["error"] = str(exc)
        return fallback


# ---------- Gemini function-calling path ----------

SYSTEM_PROMPT = (
    "You are the HaMuzim Chat assistant. You have two tools, and they are "
    "NOT interchangeable:\n"
    "- search_parcels: the FICTIONAL demo evidence set (parcels P-001..P-007). "
    "Use this for anything about the case-evidence parcels -- cultivation, "
    "construction, abandonment, documents, disputes.\n"
    "- query_openstreetmap: REAL, live, current-day geographic data from "
    "OpenStreetMap. Use this for genuine location/geography questions (where "
    "is X, what's near Y). Its coverage is uneven: major Palestinian cities "
    "(e.g. Bethlehem) resolve well; specific Israeli settlement names in the "
    "West Bank (e.g. Efrat, Gush Etzion) often return nothing, or -- worse -- "
    "can match an unrelated street with the same name elsewhere in Israel. "
    "Sanity-check the returned address/region against what was asked before "
    "trusting it.\n\n"
    "Rules:\n"
    "1. Always call the relevant tool to find evidence before answering a "
    "factual question -- never answer from memory.\n"
    "2. Every claim about a demo parcel must cite a parcel ID (e.g. P-004) "
    "and an observation year. Every claim about a real place must be "
    "attributed to OpenStreetMap and clearly marked as real, current-day "
    "data -- never blend it with the fictional parcel evidence as if it "
    "were the same kind of source.\n"
    "3. If a tool returns nothing, or returns a result that looks like the "
    "wrong place (wrong region/country for what was asked), say so plainly "
    "-- do not speculate or invent a finding, and do not present a "
    "mismatched result as if it answered the question.\n"
    "4. Keep answers concise (3-6 sentences) and evidentiary in tone: this "
    "supports legal exhibits, not casual chat.\n"
    "5. If the question has nothing to do with parcels, land evidence, this "
    "case data, or real-world geography (e.g. weather, small talk, general "
    "knowledge), do not call either tool -- say plainly that you can only "
    "answer questions about the parcel evidence or real geographic lookups "
    "in this system.\n"
    "6. Respond in the same language the user's message is written in. If "
    "they write in Hebrew, answer in Hebrew (use the finding_he/name_he "
    "fields from search results when present), citations still use the "
    "parcel ID and year exactly as given. If the interface language hint "
    "says Hebrew but the message itself is in English, still answer in "
    "English -- the message's actual language wins."
)

# Cheapest current Flash-Lite model with a workable free tier as of this
# writing (2026-07) -- verified against ai.google.dev/gemini-api/docs/models,
# not assumed from memory, since Google deprecates model IDs on a matter of
# months (gemini-2.0-flash was retired 2026-06-01). If this ever 404s,
# check that page again before assuming the code is broken.
GEMINI_MODEL = "gemini-3.1-flash-lite"

GEMINI_TOOL = {
    "type": "function",
    "name": "search_parcels",
    "description": (
        "Search the mock parcel evidence database. Filter by signal "
        "type, a year range, and/or a free-text keyword. Returns every "
        "parcel with at least one observation matching all supplied "
        "filters, including the matching observation records."
    ),
    "parameters": {
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
            "parcel_id": {
                "type": "string",
                "description": "Exact parcel ID (e.g. \"P-004\") when the user names a specific parcel by ID. Prefer this over keyword when an ID is given directly.",
            },
        },
    },
}

OSM_TOOL = {
    "type": "function",
    "name": "query_openstreetmap",
    "description": (
        "Look up a REAL place, address, or location by name using OpenStreetMap's "
        "live public Nominatim API. Returns real, current-day geographic data -- "
        "coordinates, place type, address -- completely separate from the "
        "fictional demo parcel evidence in search_parcels. Coverage is uneven "
        "for this region: major Palestinian cities resolve well; specific "
        "Israeli West Bank settlement names often return nothing or the wrong "
        "place (a same-named street elsewhere in Israel). Always check the "
        "returned address/region matches what was actually asked."
    ),
    "parameters": {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "Place name, address, or location description to look up.",
            },
        },
        "required": ["query"],
    },
}

TOOLS = [GEMINI_TOOL, OSM_TOOL]


def _gemini_chat_reply(message: str, history: list[ChatMessage], api_key: str, lang: str = "en") -> dict:
    from google import genai

    client = genai.Client(api_key=api_key)
    evidence: list[dict] = []

    # The Interactions API manages multi-turn state server-side via
    # previous_interaction_id, but the frontend sends a flat history array
    # per request (no interaction_id tracked client-side) -- same "no real
    # conversation persistence" limitation already documented for this whole
    # prototype, so we just fold prior turns into the input text instead of
    # wiring true server-side session tracking.
    convo = "".join(f"{h.role}: {h.content}\n" for h in history)
    lang_hint = "[interface language: Hebrew] " if lang == "he" else ""
    full_input = f"{convo}user: {lang_hint}{message}" if convo else f"{lang_hint}{message}"

    interaction = client.interactions.create(
        model=GEMINI_MODEL,
        system_instruction=SYSTEM_PROMPT,
        input=full_input,
        tools=TOOLS,
    )

    # Function-calling loop: Gemini may call search_parcels and/or
    # query_openstreetmap, one or more times, before it has enough grounding
    # to answer. Only search_parcels results feed `evidence` (the parcel-
    # shaped evidence cards the frontend renders) -- OSM results are a
    # different shape and get described in the reply text instead, not
    # rendered as a fictional-parcel evidence card.
    max_turns = 4
    turns = 0
    while turns < max_turns:
        fc_steps = [s for s in interaction.steps if s.type == "function_call"]
        if not fc_steps:
            break
        turns += 1

        results = []
        for step in fc_steps:
            if step.name == "query_openstreetmap":
                result = query_openstreetmap(**step.arguments)
            else:
                result = search_parcels(**step.arguments)
                evidence.extend(result)
            results.append(
                {
                    "type": "function_result",
                    "name": step.name,
                    "call_id": step.id,
                    "result": [{"type": "text", "text": json.dumps(result)}],
                }
            )

        interaction = client.interactions.create(
            model=GEMINI_MODEL,
            system_instruction=SYSTEM_PROMPT,
            input=results,
            tools=TOOLS,
            previous_interaction_id=interaction.id,
        )

    text = getattr(interaction, "output_text", "") or ""
    return {
        "reply": text.strip() or "No answer produced -- try rephrasing the question.",
        "evidence": _dedupe_evidence(evidence),
        "source": "gemini",
    }


# ---------- rule-based fallback path (no API key) ----------

_SIGNAL_KEYWORDS = {
    # Order matters: checked top-to-bottom, first match wins. More specific
    # signals go first so e.g. "cultivation loss" resolves to abandonment
    # rather than the generic "cultivation" keyword winning by coincidence.
    # Hebrew keys added 2026-07-11, same ordering discipline -- this is
    # still substring matching, not real morphology, so it won't catch
    # every inflected form, only the common ones.
    "abandonment": ["abandon", "unmanaged", "decline", "loss", "נטיש", "נטישה", "ירידה"],
    "construction": ["construct", "building", "structure", "encroach", "בני", "מבנה", "חדיר"],
    "document": ["document", "cadastral", "registry", "record", "מסמך", "קדסטר", "רישום"],
    "dispute": ["dispute", "claim", "overlapping", "מחלוקת", "תביע", "חופפ"],
    "cultivation": ["cultivat", "farm", "agricultur", "grove", "עיבוד", "חקלא", "מטע"],
}


def _parcel_name_fragments() -> list[tuple[str, str]]:
    """(lowercased searchable fragment, original-cased fragment) pairs derived
    from each parcel's name, so a free-text query can match a parcel by name
    even though this fallback has no real NLP. Strips the boilerplate
    "Parcel X - " prefix and any "(Demo...)" suffix so e.g. "Evidentiary Gap"
    and "North Ridge" are both matchable, not just the full formal name."""
    fragments = []
    for parcel in PARCELS:
        name = re.sub(r"^Demo Parcel\s*-\s*", "", parcel["name"])
        name = re.sub(r"^Parcel\s+[A-Z]\s*-\s*", "", name)
        # Cut at the first "(", or " -- ", whichever comes first -- both are
        # boilerplate separators (" (Demo)" / " -- Demo Reconstruction (...)")
        # that would otherwise stay glued to the real name and stop it
        # matching a short natural query like "evidentiary gap".
        name = re.split(r"\s+--\s+|\s*\(", name)[0].strip()
        if name:
            fragments.append((name.lower(), name))

        name_he = parcel.get("name_he")
        if name_he:
            name_he = re.split(r"\s+--\s+|\s*\(", name_he)[0].strip()
            # Strip a leading "חלקה X - " / "חלקת ... - " prefix, mirroring
            # the English "Parcel X - " strip, so e.g. "רכס צפוני" matches
            # on its own rather than needing the full "חלקה ב' - רכס צפוני".
            name_he = re.sub(r"^חלק(?:ה|ת)[^-]*-\s*", "", name_he).strip()
            if name_he:
                fragments.append((name_he.lower(), name_he))
    return fragments


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

    # Direct parcel-ID lookup: "tell me about P-001" has no signal/date/
    # keyword cue either -- found this the hard way testing the PEF-1880
    # addition, where a bare ID query silently came back empty even on the
    # real Gemini path, because the tool had no parcel_id parameter at all.
    id_match = re.search(r"\bP-0*(\d+)\b", text, re.IGNORECASE)
    if id_match:
        filters["parcel_id"] = f"P-{int(id_match.group(1)):03d}"

    # Free-text name match: "tell me about the evidentiary gap parcel" has no
    # signal-type or date cue at all, so without this the fallback would
    # come back empty
    # even though the parcel exists -- try each known parcel name fragment
    # as a keyword before giving up.
    if "keyword" not in filters and "parcel_id" not in filters:
        for fragment_lower, fragment_original in _parcel_name_fragments():
            if fragment_lower in lower:
                filters["keyword"] = fragment_original
                break

    return filters


def _mock_chat_reply(message: str, lang: str = "en") -> dict:
    filters = _naive_parse_query(message)
    matches = search_parcels(**filters)
    he = lang == "he"

    if not matches:
        reply = (
            "לא נמצאו חלקות התואמות לשאילתה (מקור: גיבוי מבוסס-כללים, "
            "GEMINI_API_KEY לא מוגדר). נסו לשאול על עיבוד, בנייה, נטישה או "
            "מסמכים, ואפשר עם טווח שנים, למשל \"אובדן עיבוד מאז 2015\"."
            if he
            else "No mock parcels matched that query (source: rule-based fallback, "
            "no GEMINI_API_KEY set). Try asking about cultivation, "
            "construction, abandonment, or document signals, optionally "
            "with a year range, e.g. \"cultivation loss since 2015\"."
        )
    else:
        lines = [
            f"נמצאו {len(matches)} חלקות התואמות לשאילתה "
            "(מקור: גיבוי מבוסס-כללים, GEMINI_API_KEY לא מוגדר):"
            if he
            else f"Found {len(matches)} parcel(s) matching your query "
            "(source: rule-based fallback, no GEMINI_API_KEY set):"
        ]
        for m in matches:
            years = ", ".join(str(o["year"]) for o in m["matching_observations"])
            name = m.get("parcel_name_he", m["parcel_name"]) if he else m["parcel_name"]
            lines.append(
                f"- {name} ({m['parcel_id']}): תצפיות תואמות בשנים {years}."
                if he
                else f"- {name} ({m['parcel_id']}): matching observations in {years}."
            )
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
