# GroundTruth

(Formerly "HaMuzim Chat" -- renamed 2026-07-13, same app, same folder:
`hamuzim-chat/`. This README was last brought fully in sync with the code
on 2026-07-13.)

Sibling prototype to `../hamuzim-app`. Where HaMuzim proves "draw a parcel,
get a timeline," this proves "ask a question, get a cited answer across
cases." No map is required to use it -- the interaction is a chat thread.

The case-evidence layer is mocked. There is no database. The "corpus" is
seven fictional demo parcels hardcoded in `backend/mock_data.py`:

- P-001, "Demo Parcel - Gush Etzion" -- the same dataset used by
  hamuzim-app, so the two prototypes share at least one case. Also carries
  one genuinely REAL entry: a 1880 Survey of Western Palestine (PEF)
  citation, confirmed public domain, sourced from the National Library of
  Israel / Wikimedia Commons -- not from any site of unconfirmed reproduction
  rights. It's deliberately incomplete (`confidence: "unverified"`, not
  high/medium/low) because the exact sheet and what it shows for this
  parcel have not been visually verified -- it's a real, cited lead, not a
  fabricated finding.
- P-002 through P-006 -- entirely fictional, generic names ("Parcel B -
  North Ridge (Demo)", etc.), invented purely to give the search tool
  something to differentiate between.
- P-007, "Parcel G - Evidentiary Gap (Demo)" -- a fictional cultivation-gap
  scenario (temporal imagery gap prevents proving continuous cultivation,
  Section 78-style). Originally modeled with a real prior case's name;
  renamed 2026-07-13 to a generic label per a standing constraint logged in
  `../.context/rejection-log.md` -- no named prior case should anchor
  demo/PoC work going forward.

This build proves the grounded-chat UX -- ask in natural language, search
across cases, get an answer that cites its sources -- not a real retrieval
pipeline.

A second, genuinely real source also exists: `backend/real_data.py` calls
OpenStreetMap's live public Nominatim API for real current-day geography
questions, completely separate from the fictional parcel evidence (see
"The AI layer" below). Its coverage is uneven for this region -- see Known
gaps.

## Why a separate app instead of a chat tab on HaMuzim

HaMuzim's interaction model is spatial: draw a shape, the system shows you
what's there. This app's interaction model is conversational: ask a
question, the system tells you what it means, across every case at once.
Those are different products, not one UI with two skins -- see the
project's chat history for the reasoning. They share a room and a demo
corpus; they don't share a frontend.

## The grounding contract

This is the one rule the whole build exists to prove out: **every factual
claim in an answer must cite a parcel ID and an observation year -- or, for
real-world geography, must be attributed to OpenStreetMap and clearly
marked as real, not blended with the fictional parcel evidence.** The
backend never lets the model answer from memory:

- When `GEMINI_API_KEY` is set, Gemini (`gemini-3.1-flash-lite` --
  check `ai.google.dev/gemini-api/docs/models` before assuming this model ID
  still exists; Google deprecates them on a matter of months) is given two
  tools via the google-genai SDK's Interactions API:
  `search_parcels(signal_type?, date_from?, date_to?, keyword?, parcel_id?)`
  for the fictional evidence set, and `query_openstreetmap(query)` for real
  current-day places. It's instructed to call the right tool before
  answering, cite every claim, and never present a mismatched or missing
  result as an answer. The raw tool results are returned to the frontend as
  `evidence` alongside the reply text (OSM results are described in the
  reply text only -- they don't render as fictional-parcel evidence cards).
- When no key is set, a small rule-based parser (`_naive_parse_query` in
  `main.py`) reads the same cues out of the message (signal keywords in
  English and Hebrew, "since YYYY", "before YYYY", "between YYYY and YYYY",
  a bare parcel ID like "P-001", or a known parcel name fragment) and calls
  the exact same `search_parcels()` directly. The reasoning is templated,
  but the filtering is real. This fallback path never calls OpenStreetMap --
  it exists specifically to work with zero network dependency, and a live
  HTTP call would defeat that.

Either way, the frontend renders `evidence` as inline cards under the
reply, each showing the parcel ID, its primary signal, and every matching
observation (year, source, finding, and a confidence badge -- including the
"unverified" badge for the one deliberately-incomplete real citation).
There is no way for the UI to show a parcel-evidence claim without a card
backing it.

## Stack

- Frontend: React + Vite, plain chat UI (no map, no draw tools), full EN/HE
  toggle (`src/translations.js`), RTL layout via `[dir="rtl"]`-scoped CSS
- Backend: FastAPI (Python) -- `/api/chat` is the only endpoint that
  matters; `/api/parcels` is a debug helper that dumps the full mock corpus
- AI: Gemini function-calling if `GEMINI_API_KEY` is set (free-tier
  friendly -- this was switched from Anthropic Claude on 2026-07-13
  specifically for cost), otherwise the rule-based fallback described above

## Setup

Runs alongside `hamuzim-app` on different ports (8001 / 5174 instead of
8000 / 5173) so both prototypes can be up at once.

### Backend

```bash
cd backend
python -m venv .venv
.venv/Scripts/activate   # Windows; use `source .venv/bin/activate` on macOS/Linux
pip install -r requirements.txt
cp .env.example .env     # optionally add GEMINI_API_KEY -- get one free at
                          # https://aistudio.google.com/apikey
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
- "Tell me about the evidentiary gap parcel."

Or ask a real-world geography question ("Where is Bethlehem?") to exercise
the OpenStreetMap tool instead of the fictional evidence set.

Each assistant reply shows a source tag (Gemini function-calling /
rule-based fallback / offline fallback) and, if the query matched a
fictional parcel, one evidence card per parcel it drew from.

## Notes / known gaps

- `frontend/src/mockData.js` is a hand-maintained mirror of
  `backend/mock_data.py` for the offline (backend-unreachable) fallback
  path -- there is no shared source of truth between the two languages in
  this prototype, so a change to one needs the same change in the other.
- The rule-based fallback's keyword/name matching (both languages) is
  substring matching, not real NLP or Hebrew morphology -- it won't catch
  every inflected form or phrasing, only the ones already tested.
- OpenStreetMap's coverage is uneven for this region, confirmed by testing,
  not assumed: major Palestinian cities (e.g. Bethlehem) resolve correctly;
  specific Israeli West Bank settlement names (e.g. Efrat, "Gush Etzion
  Regional Council") often return nothing, and a bare "Gush Etzion" query
  can match an unrelated street of the same name in central Israel. The
  system prompt tells the model to sanity-check this rather than trust it
  blindly, but it's a real limitation of the source, not just the prompt.
- No conversation persistence -- history lives in React state and resets
  on reload. The Gemini Interactions API supports server-side multi-turn
  state via `previous_interaction_id`, but this app doesn't wire that up --
  history is folded into the input text per-request instead, to match the
  frontend's existing flat-history-array contract without adding session
  tracking.
- The demo parcels are entirely fictional except for the one real 1880
  citation on P-001 -- see above. No other real evidentiary data has been
  added yet.
