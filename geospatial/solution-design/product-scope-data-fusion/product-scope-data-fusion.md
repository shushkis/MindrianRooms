---
source: larry-session
date: 2026-07-07
section: solution-design
decision: founder-locked
supersedes_note: "Corrects the 'forensics/document-authenticity capability' direction floated earlier in this same session -- founder scoped it out explicitly."
---

# Product Scope Decision -- Data Fusion for Operational Conclusions, Not Document Forensics

## The Decision (founder, verbatim intent)

HaMuzim will **not** build or offer document forensics (ink/paper dating, handwriting authentication, forgery detection) at this stage. That is a separate expertise domain and a deliberate non-goal, to avoid diluting focus.

The product instead focuses on **aggregating data from as many registries/repositories as possible**, to derive **operational conclusions** about:
- parcel boundaries
- neighbor location/identity
- ownership
- in the space of cultivation and possession of land

...based on **cross-referencing the different data sources** against each other.

## Why This Is a Clean Boundary, Not a Compromise

Real case evidence (two matched documents reviewed this session -- first-registration decision 9252, Bituach El committee, and the appeal 2728/22 against it) showed the underlying dispute fails on two independent axes:
1. **Document authenticity** (were the 1966 sale contracts genuine or backdated?) -- a forensic/legal-expert judgment call.
2. **Spatial/documentary evidentiary rigor** (does the aerial photo actually match the parcel; is possession/cultivation continuous and comparatively intense enough; is the title chain complete?) -- a data-fusion and analysis problem.

HaMuzim owns axis 2. Axis 1 stays explicitly with the lawyer / registration officer / court-appointed expert. This is a division of labor, not a gap to quietly ignore -- **the product's outputs must be positioned as "data-fusion-derived evidence," not a complete evidentiary verdict**, so no future customer conversation discovers this boundary as a surprise.

## Data Sources to Cross-Reference

Building on `data-inventory.md` (Public / Restricted layer map), the following registries are the fusion inputs:

| Source | What it contributes |
|--------|---------------------|
| Historical aerial photos + current orthophoto (Survey of Israel / מפ"י) | Spatial/temporal cultivation and possession signal |
| Ottoman + Jordanian property tax registries ("ספרי רשומות מס רכוש") | Historical ownership/holder indicators |
| Tabu / land registry records | Existing registered rights, prior transactions |
| Custodian of Government Property internal registry ("ימאליה") | State-side property tracking |
| PalOpenMaps.org (Ottoman + British Mandate cadastral maps) | Historical boundary layer |
| **Prior first-registration and appeal decisions** (e.g., the two documents reviewed this session) | Not just legal precedent -- a structured DATA source: parcel boundaries, adjudicated neighbor outcomes, and committee findings on cultivation/possession patterns, minable across cases |

## Operational Conclusions the System Derives (not judgments)

- Precise parcel boundaries over time, including translation between historical and current numbering (e.g., "מהלייה" survey-block renumbering seen in both reviewed cases)
- Identity and documentary basis of neighboring parcel holders
- Possession/cultivation pattern over a time series, compared **relatively** to neighboring parcels (not just presence/absence in a single photo)
- Automated flags where sources disagree (e.g., registry boundary contradicts photographic evidence) -- surfaced for human review, never auto-resolved

## The Added-Value Insight (this session)

Both reviewed decisions cite dozens of prior rulings with parallel fact patterns. Treating the decision corpus itself as a structured, minable data source (not just legal citation text) turns HaMuzim from a bespoke one-off analysis service (the GEOward model) into a **compounding data-fusion engine** -- it gets more valuable per case processed. This is the differentiation lever against GEOward and Orhitec both.

## Reference Case Documents

- First registration decision, file 9252, Committee for First Registration of Land with No Registered Deed -- Bituach El, 23.03.2022 (rejected Nachala Company's registration bid)
- Appeal 2728/22 against Decision 9252, Military Appeals Committee, 31.07.2024 (appeal dismissed, state registration upheld)

Both on file locally (not committed to git -- confirm before filing if these should be copied into the room or referenced by path only, given they contain named third-party legal parties).
