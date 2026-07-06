---
source: web-research
date: 2026-07-06
based-on: multi-query web search (satellite/aerial legal evidence, historical
  cultivation proof, land restitution tech, forensic geospatial, West Bank
  aerial survey practice)
relates-to: competitive-landscape.md, orhitec-review.md
trigger: founder asked "am I alone in this field" after the Orhitec review
---

# Global Deep Dive -- Who Else Touches This Problem

Prompted by a real question: after seeing one adjacent-but-different
company (Orhitec), is this space actually crowded? Short answer: the
*general activity* (satellite/aerial imagery as legal evidence) is a
mature, ~20-year-old practice. The *specific product shape* HaMuzim is
building -- self-serve, multi-decade multi-source fusion, AI narrative,
instant exhibit export -- has no direct match found. Detail below.

## Category A -- Bespoke satellite-evidence report services (closest analogs)

### OnGeo Intelligence (Poland)
Sells court-ready satellite imagery reports: certified capture dates,
visual highlights, metrical data, prepared by human geospatial experts.
Real case studies cited: property division, a right-of-way dispute
reconstructed from 15 years of imagery, illegal-construction timelines.
This is the single closest public example of "satellite imagery packaged
as legal evidence" -- but it is an **order-a-report service**: a client
requests imagery/analysis, an expert prepares it, delivery takes time.
No self-serve tool, no automatic multi-source fusion (aerial + document +
satellite in one provenance chain), no AI-generated narrative.

### Innoter (Russia, since 2014)
Judicial expertise service based on satellite imaging; claims access to
60+ satellites' archives since the 1970s, each image with a "passport"
of metadata. Primary use case: dating construction (was this structure
built before or after date X). Same shape as OnGeo -- order a bespoke
expert report, not a product you operate yourself.

### Grain Data Solutions
"Case-ready packages" with evidentiary overlays (parcel lines, water
zones, administrative borders) built for court, adjusters, or expert
witnesses. Same service-business shape as the above two.

**Pattern across all three**: real, paying market for "satellite imagery
as legal evidence" -- confirms the category exists and courts accept it.
None of them are software you run yourself, none fuse historical sources
across decades automatically, none generate a written evidentiary
narrative, none are priced/timed for a single small land-dispute case at
the speed a self-serve tool would offer. This is the "GIS Contractors"
bucket in `competitive-landscape.md` (#2) -- confirmed, not new.

## Category B -- Advocacy / human-rights spatial investigation

### Forensic Architecture (Goldsmiths, University of London)
Founded by Eyal Weizman. Multidisciplinary group reconstructing
physical/temporal evidence (imagery, metadata, testimony, video) for
human-rights and land-dispossession cases; has directly supported land
restitution claims for displaced communities. Methodologically the
closest thing to HaMuzim's fusion approach found anywhere -- multi-source,
provenance-conscious, presentation-grade output.
Structurally different: non-commercial, project-based investigations
(each case is bespoke research, not a repeatable product), mission is
public accountability/advocacy rather than serving an individual
applicant's registration case. Not a company you compete with commercially,
but the clearest proof that the *methodology* is credible and already
used in serious legal/political contexts.

### Kerem Navot / Bimkom (Israeli NGOs)
Already do exactly the domain-specific analysis -- comparing historical
aerial photographs to document Palestinian cultivation in the West Bank
back to 1980, for advocacy reporting. Confirms this exact evidentiary
question (was this land cultivated, since when) is already being
litigated in public discourse with aerial-photo comparison as the method.
Not a commercial competitor -- an advocacy practice, likely arguing a
specific side of these disputes rather than offering a neutral tool to
any applicant. Worth knowing as a source of technique and precedent, not
as a company to benchmark against.

## Category C -- Government-run programs (the adjudicator side, not vendors)

### Israel Civil Administration (the actual counterparty in these cases)
Per public reporting: Civil Administration mapping personnel already
examine aerial photographs internally to determine whether land was
cultivated, and classify uncultivated/unregistered land as state land
(the mawat/miri framework already noted in `competitive-landscape.md`).
This is the critical finding: **the state itself already runs this
exact kind of historical-aerial-cultivation analysis** to decide against
claimants. HaMuzim isn't inventing a new evidentiary category -- it's
giving private applicants and their lawyers a way to answer the
government's own method with equivalent (or better-documented) evidence.
That's a sharper version of the existing thesis, not a new risk.

### Colombia Land Restitution Unit / Kenya KISIP
National-scale government programs using satellite + aerial + GPS
fieldwork to reconstruct historical land ownership for restitution
(Colombia, post-conflict displaced persons) and to formalize informal
settlements (Kenya, with World Bank backing). Same underlying idea --
historical multi-source spatial evidence resolves land claims -- proven
at national-policy scale, just not packaged as commercial software
available to a single case's lawyer. Reinforces "70% of parcels
unregistered" is a global pattern, not a local one (already in
`competitive-landscape.md`).

## Category D -- Emerging research, not yet shipped

Found active 2025-era academic/legal writing on AI-enhanced satellite
imagery as courtroom evidence (Opinio Juris, "From Space to the
Courtroom"; a Strathclyde paper on transformer models for classifying
satellite imagery for legal analysis). Signals the AI+satellite+legal
intersection is a live research question right now -- nobody has shipped
the productized version. Timing read: early, not late.

## Verdict

Not alone in the general activity -- satellite/aerial imagery as legal
evidence is a ~20-year-old, court-tested practice with real paying
demand (OnGeo, Innoter, Grain Data). But every real example found is one
of: a slow bespoke expert-report service, a non-commercial advocacy
investigation, or an internal government process -- never a self-serve
tool that (1) fuses aerial + satellite + document sources across
decades automatically, (2) writes an AI evidentiary narrative, and
(3) exports a court-ready exhibit in minutes instead of weeks.

That gap is narrower and better-evidenced than "no one has thought of
this" -- it's "the market already proved people will pay for this kind
of evidence; nobody has made the tool that produces it fast and
cheap enough for a single small case." That is a stronger position to
build from, not a weaker one: demand is proven, the specific wedge
(speed + automation + self-serve + AI narrative) is still open.

## What would actually kill this

Not "someone else already built it" -- nobody has, per this search.
The real risks are:
- OnGeo/Innoter-style firms productizing their service into self-serve
  software (they have the imagery access and legal credibility; they'd
  need to build the fusion + AI layer).
- Whether courts/committees in this specific jurisdiction (Israeli
  land-dispute committees, per the Biti Hills precedent already on file)
  will accept an AI-generated summary the same way they accept a named
  expert's signed report -- an evidentiary-weight question, not a
  technology question.
