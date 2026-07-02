"""HaMuzim backend -- FastAPI.

All data is hardcoded mock JSON. There is no real database. Any polygon
submitted to /api/query returns the same demo-parcel observation set --
the point of this build is to prove out the UX/report flow, not real
geospatial analysis.
"""

import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from pydantic import BaseModel

from mock_data import DEMO_PARCEL, MOCK_AI_SUMMARY, OBSERVATIONS
from pdf_export import build_exhibit_pdf

load_dotenv()

app = FastAPI(title="HaMuzim API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # demo app -- tighten before any real deployment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------- schemas ----------

class Polygon(BaseModel):
    type: str = "Polygon"
    coordinates: list


class QueryRequest(BaseModel):
    polygon: dict | None = None


class SummaryRequest(BaseModel):
    observations: list | None = None
    parcel: dict | None = None


class ExportRequest(BaseModel):
    parcel: dict
    observations: list
    summary: str


# ---------- routes ----------

@app.get("/api/health")
def health():
    return {"status": "ok", "service": "hamuzim-backend"}


@app.post("/api/query")
def query_polygon(req: QueryRequest):
    """Any drawn polygon returns the same mock demo-parcel dataset."""
    return {
        "parcel": DEMO_PARCEL,
        "observations": OBSERVATIONS,
    }


@app.post("/api/summary")
def generate_summary(req: SummaryRequest):
    """Generate the AI summary. Uses the Claude API if ANTHROPIC_API_KEY is
    set in the environment, otherwise returns the hardcoded mock summary."""
    api_key = os.environ.get("ANTHROPIC_API_KEY")

    if not api_key:
        return {"summary": MOCK_AI_SUMMARY, "source": "mock"}

    try:
        import anthropic

        client = anthropic.Anthropic(api_key=api_key)
        observations = req.observations or OBSERVATIONS
        obs_text = "\n".join(
            f"- {o['year']} ({o['source']}, {o['type']}, confidence={o['confidence']}): {o['finding']}"
            for o in observations
        )
        prompt = (
            "You are drafting the AI Summary section of a land-use spatial evidence "
            "report for a legal exhibit. Given the following chronological observation "
            "record for a single parcel, write a concise (4-6 sentence) evidentiary "
            "summary: note the overall pattern, address any gaps or anomalies "
            "sympathetically if there is a plausible non-adverse explanation, cite "
            "supporting document evidence, state an evidentiary strength rating "
            "(HIGH/MEDIUM/LOW), and a recommended next action.\n\n"
            f"Observation record:\n{obs_text}"
        )
        message = client.messages.create(
            model="claude-sonnet-4-5",
            max_tokens=500,
            messages=[{"role": "user", "content": prompt}],
        )
        text = "".join(
            block.text for block in message.content if getattr(block, "type", None) == "text"
        )
        return {"summary": text.strip(), "source": "claude"}
    except Exception as exc:  # noqa: BLE001 -- demo fallback, any failure -> mock
        return {"summary": MOCK_AI_SUMMARY, "source": "mock", "error": str(exc)}


@app.post("/api/export-pdf")
def export_pdf(req: ExportRequest):
    pdf_bytes = build_exhibit_pdf(req.parcel, req.observations, req.summary)
    return Response(
        content=pdf_bytes,
        media_type="application/pdf",
        headers={"Content-Disposition": "attachment; filename=hamuzim-exhibit.pdf"},
    )
