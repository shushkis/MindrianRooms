---
title: PoC Concept -- Reconstruction from Public Digital Archives Only
status: draft
source: larry-session
date: 2026-07-12
section: solution-design
---

# PoC Concept -- Rebuilt from Public Data Only

## The One-Line Pitch

Take a case where a real committee/court proceeding failed for lack of
continuous-cultivation evidence, and show that the missing evidence type can
be reconstructed today using only the public-tier digital archives mapped in
`data-inventory.md` -- no restricted case files, no committee access,
nothing that requires being a party to the case. If the public layer answers
the question the original proceeding couldn't, that is simultaneously the
demo, the pitch, and the proof.

**Note on case selection:** this document intentionally does not name or
anchor to any specific real case. Per standing constraint (see
`.context/rejection-log.md`, 2026-07-12), no named prior case should be used
as a demo/PoC target or case study -- narrow, non-representative facts and
confidentiality both cut against it. When it's time to run this PoC for
real, ask the user for a suitable anchor case (or use a constructed/composite
example) rather than defaulting to any previously-discussed case.

## Why This Shape of PoC

- A public verdict (not a sealed committee file) keeps the target case
  itself citable without exposure risk.
- A narrow, known failure reason -- e.g. "witnesses and a document expert
  existed, but continuous N-year cultivation could not be proven" -- is
  exactly what a PoC needs: it lets the demo answer one sharp question
  instead of trying to solve the whole product at once.
- The general *logic* of committee rulings (what standard of proof is
  applied, which failure modes recur, how cross-module contradictions get
  resolved) is what's reusable and worth learning from any past case --
  the specific facts and names are not.

## Evidence Gap -> Public Archive -> What It Proves

| Evidence needed | Public archive (from data-inventory.md) | Access reality | What it would show |
|---|---|---|---|
| Where exactly is the parcel | Palestine Open Maps (British Mandate 1940s survey, 1:20,000) | **PUBLIC, downloadable now** | Historical parcel boundaries, pre-1948, georeferenced |
| Present-day ground truth to anchor historical layers | OpenStreetMap / current orthophoto | **PUBLIC, downloadable now** | Current boundaries and features to register historical maps against |
| Cultivation signal, year by year across the required window | MAPI National Aerial Photo Archive | **PUBLIC but paid, order-per-photo** -- the real friction point | Visible cultivation marks (olive rows, plowed fields, structures) at each available capture year |
| Corroborating historical maps / boundary descriptions | National Library of Israel -- Eran Laor Map Collection | **PUBLIC (partial), depth per area unverified** | Secondary confirmation of boundary/feature claims from a second, independent map source |
| Institutional/legal framing (why this matters to the buyer) | State Comptroller reports on the Custodian of Government Property unit | **PUBLIC** | Context only -- explains the buyer's incentive, not case evidence |

**The honest gap in this table:** the single most decisive evidence type
(continuous-cultivation aerial imagery across a multi-year span) sits behind
the one archive that is public in principle but not bulk-accessible in
practice. MAPI's archive is majority physical negatives, ordered one photo
at a time, with a cost per order. A PoC that needs 6-10 photos across
different years for one parcel is a manageable, bounded ask. A production
product that needs this for thousands of parcels is not -- that gap is
itself worth surfacing to the state as the case for why a bulk-access
relationship with MAPI is part of what's being sold, not just the analysis
software.

## Workflow (What the PoC Actually Does)

1. **Locate** -- Take the target parcel's location description (מווקע +
   boundary text) and pin it to coordinates using the Palestine Open Maps
   historical sheet + current OSM base layer.
2. **Order** -- Submit a manual order to MAPI for available aerial photo
   years covering that specific parcel (bounded, small request -- this is
   the one step that is not "instant public access" and should be flagged
   as such rather than glossed over).
3. **Overlay** -- Georeference each returned photo against the modern base
   layer; mark cultivation-consistent features per year (olive rows,
   plowed-field texture, structures) with a confidence note per observation
   -- same format already designed in `problem-definition/legal-workflow-analysis.md`
   ("Product Physical Description" -- Evidence Timeline / Map / Observation List).
4. **Cross-check** -- Confirm boundary/feature claims against the NLI map
   collection as a second source where coverage exists.
5. **Assemble** -- Produce the same one-click exhibit format already speced
   in this room: timeline + map + observation list + full provenance chain,
   as a PDF.
6. **Compare** -- Lay the assembled package next to what the original
   proceeding actually had, and name explicitly what's new: coverage the
   original filing didn't have.

## Success Criteria

The PoC succeeds if it can answer, with named public sources and stated
confidence per year, the exact question the target proceeding could not
answer. It does not need to be legally dispositive on its own; it needs to
demonstrate that public-only reconstruction changes what's answerable, which
is the entire commercial thesis.

It fails as a PoC (regardless of overall venture health) if MAPI coverage
for the chosen parcel turns out to be too sparse to bridge the required
window -- in which case the fallback is to pick a different anchor case with
fuller public evidence coverage.

## Effort & Timeline (Rough)

| Step | Blocking dependency | Rough effort |
|---|---|---|
| Pick an anchor case (ask the user; do not default to any prior case) | User decision | Unblocked once chosen |
| Pin the parcel via Palestine Open Maps + OSM | None -- can start once a case is picked | 1-2 days |
| Order relevant MAPI aerial photos | Payment + MAPI turnaround time (unknown -- needs a direct check) | Unknown, likely the critical path |
| Overlay + confidence scoring | Aerial photos in hand | 3-5 days |
| NLI cross-check | None -- parallel track | 1-2 days |
| Assemble exhibit + comparison narrative | All of the above | 2-3 days |

**Single biggest unknown:** MAPI order turnaround time and real per-photo
cost for a ~6-10 photo request. This should be checked directly with MAPI
before committing to a PoC timeline publicly (e.g., to the state or in class).

## Open Items

- [ ] Pick a suitable anchor case with the user -- do not default to any
      previously-discussed case (standing constraint, 2026-07-12)
- [ ] Confirm MAPI order turnaround + cost for a bounded, ~6-10 photo request
- [ ] Verify NLI Eran Laor Collection's actual depth of coverage for the chosen area
- [ ] Decide who does the georeferencing/overlay work -- Elli's stated domain
