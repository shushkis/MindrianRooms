# GroundTruth

(Formerly "HaMuzim Chat" -- renamed 2026-07-13, same app, same folder.)

Sibling prototype to `../hamuzim-app`. Where HaMuzim proves "draw a parcel,
get a timeline," this proves "ask a question, get a cited answer across
cases." No map is required to use it -- the interaction is a chat thread.

Everything is mocked. There is no database. The "corpus" is six fictional
demo parcels hardcoded in `backend/mock_data.py` (one of them -- P-001,
"Demo Parcel - Gush Etzion" -- is the same dataset used by hamuzim-app, so
the two prototypes share at least one case). This build proves the
grounded-chat UX -- ask in natural language, search across cases, get an
answer that cites its sources -- not a real retrieval pipeline.

## Why a separate app instead of a chat tab on HaMuzim

HaMuzim's interaction model is spatial: draw a shape, the system shows you
what's there. This app's interaction model is conversational: ask a
question, the system tells you what it means, across every case at once.
Those are different products, not one UI with two skins -- see the
project's chat history for the reasoning. They share a room and a demo
corpus; they don't share a frontend.

## The grounding contract

This is the one rule the whole build exists to prove out: **every factual
claim in an answer must cite a parcel ID and an observation year.** The
backend never lets the model answer from memory --

- When `ANTHROPIC_API_KEY` is set, Claude is given exactly one tool,
  `search_parcels(signal_type?, date_from?, date_to?, keyword?)`, and is
  instructed to call it before answering and to cite every claim. The raw
  tool results are returned to the frontend as `evidence` alongside the
  reply text.
- When no key is set, a small rule-based parser (`_naive_parse_query` in
  `main.py`) reads the same cues out of the message (signal keywords, "since
  YYYY", "before YYYY", "between YYYY and YYYY") and calls the exact same
  `search_parcels()` directly. The reasoning is templated, but the
  filtering is real -- the "mock" path exercises the real retrieval, not
  canned text.

Either way, the frontend renders `evidence` as inline cards under the
reply, each showing the parcel ID, its primary signal, and every matching
observation (year, source, finding). There is no way for the UI to show a
claim without a card backing it.

## Stack

- Frontend: React + Vite, plain chat UI (no map, no draw tools)
- Backend: FastAPI (Python) -- `/api/chat` is the only endpoint that
  matters; `/api/parcels` is a debug helper that dumps the full mock corpus
- AI: Claude tool-calling if `ANTHROPIC_API_KEY` is set, otherwise the
  rule-based fallback described above

## Setup

Runs alongside `hamuzim-app` on different ports (8001 / 5174 instead of
8000 / 5173) so both prototypes can be up at once.

### Backend

```bash
cd backend
python -m venv .venv
.venv/Scripts/activate   # Windows; use `source .venv/bin/activate` on macOS/Linux
pip install -r requirements.txt
cp .env.example .env     # optionally add ANTHROPIC_API_KEY
uvicorn main:app --reload --port 8001
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5174. The Vite dev server proxies `/api/*` to the
FastAPI backend on port 8001.

## Using it

Type a question, or click one of the suggestion chips:

- "Which parcels show construction after 2015?"
- "Show me cultivation loss since 2015."
- "Are there any boundary disputes?"
- "What's the evidence record for P-001?"

Each assistant reply shows a source tag (Claude tool-calling / rule-based
fallback / offline fallback) and, if the query matched anything, one
evidence card per parcel it drew from.

## Notes / known gaps

- `frontend/src/mockData.js` is a hand-maintained mirror of
  `backend/mock_data.py` for the offline (backend-unreachable) fallback
  path -- there is no shared source of truth between the two languages in
  this prototype, so a change to one needs the same change in the other.
- No EN/HE language toggle yet (HaMuzim's is a stub too, so this isn't a
  regression, just not built).
- No conversation persistence -- history lives in React state and resets
  on reload.
- The six parcels are entirely fictional beyond the shared P-001 case;
  they're deliberately generic ("Parcel B - North Ridge (Demo)", etc.)
  rather than tied to additional named real locations, since the point is
  to exercise cross-case search, not to fabricate site-specific findings.
