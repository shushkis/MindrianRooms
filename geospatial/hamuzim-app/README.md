# HaMuzim

Spatial evidence platform prototype -- draw a parcel on a satellite map, pull
historical aerial/satellite/document evidence for it, generate an AI summary,
and export a legal exhibit PDF.

Everything is mocked. There is no database and the query endpoint always
returns the same hardcoded "demo parcel" (Gush Etzion) dataset regardless of
which polygon you draw. This build proves the UX and report pipeline, not a
real geospatial pipeline.

## Stack

- Frontend: React + Vite + Leaflet + Leaflet.draw, Esri World Imagery satellite
  tiles (free, no signup, no API key -- swap for a licensed provider like
  Mapbox before any real traffic)
- Backend: FastAPI (Python), reportlab for PDF export
- AI Summary: Claude API if `ANTHROPIC_API_KEY` is set, otherwise a
  hardcoded mock summary is returned

## Setup

### Backend

```bash
cd backend
python -m venv .venv
.venv/Scripts/activate   # Windows; use `source .venv/bin/activate` on macOS/Linux
pip install -r requirements.txt
cp .env.example .env     # optionally add ANTHROPIC_API_KEY
uvicorn main:app --reload --port 8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

No API key or signup needed for the map -- Esri's World Imagery tile
service is used unauthenticated.

Open http://localhost:5173. The Vite dev server proxies `/api/*` to the
FastAPI backend on port 8000.

## Using it

1. Use the polygon or rectangle draw tool (top-left of the map) to outline any parcel.
2. The Evidence Timeline (left) and Observations (right) panels populate with
   the demo parcel's 8-year observation record (1959-2024).
3. Click a year in either panel to highlight it on the map and update the
   cultivation-signal overlay.
4. Toggle the overlay on/off with the map's bottom control.
5. Click "Generate Summary" for the AI-written evidentiary summary.
6. Click "Export Legal Exhibit" to download a PDF exhibit with the parcel
   coordinates, full observation table, and AI summary.

## Notes

- The satellite basemap is Esri World Imagery, used without an API key. It's
  fine for a demo/prototype; Esri's terms expect a licensed account for
  production-volume traffic, so swap providers before shipping this for real.
- If the backend is unreachable, the frontend falls back to an identical
  client-side mock dataset (`src/mockData.js`) so the demo still runs standalone.
- The EN / עב language toggle in the header is a stub -- it only tracks UI
  state for now, no translated strings yet.
