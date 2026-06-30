---
source: larry-session
date: 2026-06-30
section: solution-design
---

# Data Source Inventory -- MVP Layer Map

## Public Layer (Build Now, No Permission Required)

| Source | Type | Coverage | Notes |
|--------|------|----------|-------|
| Israeli Survey Institute | Aerial / orthophoto | Historical + current | Public archive; coverage depth TBD |
| Court decisions + land records | Legal corpus | Israeli courts | Public filings; spatial tagging needed |
| Open satellite imagery | Raster | Current + recent historical | Sentinel-2, Landsat, others |
| GIS layers (various) | Vector + raster | TBD per layer | Need to enumerate specific layers |
| PalOpenMaps.org | Historical cadastral maps | Ottoman + British Mandate era | **High value** -- exactly the historical boundary layer needed for West Bank disputes |

## Restricted Layer (Permission Request Required)

| Source | Type | Holder | Status |
|--------|------|--------|--------|
| Mordi's case files | Legal case evidence | Mordi Verzberger | Requires Mordi authorization + client consent |

## Key Insight: Biti Hills PoC May Not Require Restricted Layer

The Biti Hills verdict is public. The missing evidence in that case was temporal aerial proof of continuous cultivation -- which falls in the public layer (Survey Institute aerials + PalOpenMaps historical cadastral).

**PoC hypothesis:** Reconstruct the missing evidence retroactively using public data only.
If the public layer answers the question the court couldn't answer -- that IS the demo.
No restricted data needed to prove the system.

## MVP Scope Decision (Pending)

- Phase 1: Build fusion pipeline on public layer only
- Phase 2: Request access to restricted archives once working system exists
  - Stronger ask: "Here is what the system produces on public data. Access unlocks X more."
- Fallback: If public layer is insufficient for Biti Hills, identify alternative case with full public evidence coverage

## Next Step: Enumerate GIS Layers

"Several GIS layers" needs to become a specific list with coverage areas and access terms.
Which layers are in scope?
