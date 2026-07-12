---
source: larry-session
date: 2026-07-08
section: solution-design
decision: founder-approved
supersedes_note: none -- new sibling artifact, does not replace hamuzim-app or product-scope-data-fusion.md
---

# Product Decision -- HaMuzim Chat: A Conversational Sibling to HaMuzim

## The Decision

Build a second, separate prototype -- `hamuzim-chat/` -- alongside the
existing `hamuzim-app/`. Not a chat tab bolted onto HaMuzim's map UI: a
standalone app with its own frontend, sharing the same demo data
universe (the Gush Etzion parcel used by hamuzim-app, plus five new
fictional demo parcels for cross-case coverage).

## Why a Separate App, Not a Feature

HaMuzim's interaction model is spatial: draw a shape, the system shows
what's there. The new app's interaction model is conversational: ask a
question in natural language, get an answer grounded in evidence across
every case at once. These are different products -- browsing vs.
reasoning-on-demand -- not one UI with two skins. The decision sequence
(recorded across this session):
1. Confirmed the product should be "an LLM to query this data," not
   another GIS-with-layers tool.
2. Confirmed cross-case search (not single-parcel-only) as the query
   scope -- directly reinforced afterward by Itamar's macro-risk-layer
   feedback (see `problem-definition/itamar-water-infra-meeting.md`).
3. Confirmed grounding is mandatory: every answer must cite a parcel ID
   and observation year, or say it can't answer -- no claim without a
   citable source.
4. Confirmed visual output stays secondary: chat is primary, evidence
   renders as inline cards, no map required to use the product.
5. Confirmed sibling-app structure reusing hamuzim-app's demo data,
   rather than a clean-room rebuild.

## Architecture Built This Session

- **Data:** `backend/mock_data.py` -- six fictional parcels (P-001 through
  P-006), each with a tagged observation history (`signal_tags`:
  cultivation / construction / abandonment / document / dispute). P-001 is
  byte-identical to hamuzim-app's existing demo parcel so both prototypes
  share a common case.
- **Backend (FastAPI):** one real endpoint, `POST /api/chat`. With
  `ANTHROPIC_API_KEY` set, Claude gets exactly one tool
  (`search_parcels(signal_type?, date_from?, date_to?, keyword?)`) and is
  instructed to call it before answering and to cite every claim by
  parcel ID + observation year. Without a key, a rule-based parser reads
  the same cues from the message and calls the identical `search_parcels`
  function directly -- the fallback exercises real filtering, not canned
  text.
- **Frontend (React + Vite):** plain chat thread, no map, no draw tools.
  Every grounded reply renders inline evidence cards (parcel ID, primary
  signal, matching observations) directly under the message.
- Verified end-to-end this session: backend installs and runs clean,
  `/api/chat` tested against multiple real queries (construction-since-date,
  cultivation-loss-since-date, dispute search), frontend `npm install` +
  `npm run build` clean.

## Known Gaps (disclosed, not hidden)

- `frontend/src/mockData.js` is a hand-maintained mirror of the Python
  mock data for the offline fallback path -- no shared source of truth
  between the two languages in this prototype.
- No EN/HE toggle yet (matches hamuzim-app's existing stub gap).
- No conversation persistence -- history lives in React state only.
- The Claude tool-calling path (the "real" grounded-LLM path, as opposed
  to the rule-based fallback) has not yet been exercised with a live
  `ANTHROPIC_API_KEY` in this session -- verified only via the fallback
  path so far.

## Where This Lives

`geospatial/hamuzim-chat/` (backend on port 8001, frontend on port 5174,
so it can run alongside hamuzim-app's 8000/5173). Full setup and
architecture rationale in `hamuzim-chat/README.md`.
