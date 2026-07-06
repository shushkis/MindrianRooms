---
source: web-research
date: 2026-07-06
based-on: orhitec.com, web-search
relates-to: competitive-landscape.md (category 4 -- Enterprise GIS Platforms)
---

# Competitor Review -- Orhitec GIS Group

## What they are

Israeli GIS/ERP vendor, founded 1999 by Barry Cohen. ~$7M annual revenue.
Sells "ERPGIS" smart-city management systems to 140+ governments and
municipalities across multiple countries. Also runs adjacent Aerospace &
Aviation and Cyber/defense groups serving Israeli security organizations.

Core product: one integrated geographic + alphanumeric database shared
across every municipal department -- building permits, land designations,
land/property tax, infrastructure, traffic, waste collection, crisis
management. Land-registry module handles the building-permit lifecycle
(application through Authority approval) and land-use/city-plan management.
Sold on multi-year implementation + maintenance contracts to city halls,
not individual applicants or law firms.

## Verdict: not a competitor, adjacent infrastructure

Orhitec sells municipal administrative workflow software. HaMuzim produces
a single evidentiary artifact (historical cultivation proof for a legal
dispute or registration proceeding). Different buyer, different unit of
value, different sales motion:

| | Orhitec | HaMuzim |
|---|---|---|
| Buyer | City hall / national government IT budget | Land-dispute lawyer / applicant |
| Unit sold | Multi-year ERP/GIS implementation | Per-case evidence exhibit |
| Core capability | Cross-department workflow + data integration | Historical multi-source fusion + provenance chain |
| Output | Permit records, tax rolls, infrastructure maps | Court-ready PDF exhibit with AI summary |
| Handles historical imagery fusion? | No evidence of this | Core function |

This confirms the existing "Enterprise GIS Platforms" bucket in
`competitive-landscape.md`: Orhitec is a tool operator's platform, not a
provenance-chain evidence generator. Same shape of gap as Esri/Bentley --
no fusion of heterogeneous historical sources, no legal exhibit output.

## Where it actually matters

Orhitec's land-registry client base **is** the government/registration
authority side of the workflow HaMuzim's exhibits eventually feed into.
Two live implications:

1. **Interoperability, not competition.** If a registration authority runs
   an Orhitec-style ERPGIS backend, a HaMuzim exhibit needs to be
   consumable by whatever intake process that system expects (PDF today is
   fine; a future structured-data handoff might not be).
2. **Partnership signal, not urgent.** Not a channel to pursue now --
   Mordi's law-firm network is still the fastest path to revenue per the
   existing analysis. Worth revisiting once/if the wedge expands toward
   government-side adoption (Israel Land Authority / Civil Administration,
   noted in competitive-landscape.md as a "First Check" candidate).

## Open question this touches

Answers part of the open question in `ROOM.md`: "Is there any
legal-specific geospatial tooling... that includes provenance chain
export?" -- Orhitec is the closest named example of a mature cadastral/land
GIS vendor, and it does **not** do provenance-chain evidence export. The
gap holds.

Sources:
- https://www.orhitec.com/
- https://www.orhitec.com/about-us/
- https://www.orhitec.com/gis-systems/land-registry-construction-and-planning/
- https://www.orhitec.com/gis-systems/solutions-for-defence/
