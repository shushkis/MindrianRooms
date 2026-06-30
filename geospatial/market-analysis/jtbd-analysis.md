---
methodology: analyze-needs
created: 2026-06-24
depth: quick
problem_type: ill-defined -> well-defined
venture_stage: Pre-Opportunity
room_section: market-analysis
---

# Jobs To Be Done -- Geospatial Legal Intelligence

## Customer

Mordi. Chairman of a juridical committee adjudicating land disputes. On a Tuesday he has two parties in front of him, each holding documents claiming ownership of the same parcel. He needs to evaluate both sets of competing evidence against an independent spatial baseline -- and produce a verdict with precisely determined boundaries.

He is not an advocate. He is an adjudicator. His credibility depends on ruling accurately, not winning.

## Job Statement

When two parties present competing ownership claims over a piece of land with disputed or vanished historical markers, I want to evaluate both claims against an independent historical spatial record with full provenance, so I can issue a legally defensible verdict with precisely mapped boundaries that the Israel Survey Authority can authorize.

## Job Steps

| Step | Description | Importance (1-10) | Satisfaction (1-10) | Gap |
|------|-------------|-------------------|---------------------|-----|
| Define | Understand the dispute: which boundary, which historical period, what claims | 8 | 6 | 2 |
| Locate | Find the right historical aerial photos, cadastral records, legal docs for that era | 9 | 3 | **6** |
| Prepare | Digitize, georeference, calibrate old imagery against current orthophotos | 9 | 2 | **7** |
| Execute | Compare historical vs. current -- identify vanished markers, reconstruct boundary | 10 | 2 | **8** |
| Monitor | Cross-check against legal standards, opposing evidence, client claims | 8 | 4 | 4 |
| Modify | Adjust interpretation under challenge or new evidence from opposing counsel | 7 | 5 | 2 |
| Conclude | Produce legally admissible expert report with full provenance chain | 9 | 5 | 4 |

## Blocked Steps

| Step | Blocker Type | Specific Moment | Current Workaround |
|------|-------------|-----------------|-------------------|
| Locate | Functional | Knowing which archive holds the right vintage photo for a specific parcel | Manual archive search, phone calls, depends on personal contacts |
| Prepare | Functional + Emotional | Georeferencing scanned historical imagery by hand using ground control points | Manual GCP placement in GIS software -- hours per image, error-prone |
| Execute | Functional + Social | Comparing features that no longer exist (vanished trees, moved fences) across time periods | Side-by-side manual inspection; interpretation is subjective and challengeable |

## Opportunity Clusters

| Cluster | Blocked Steps | Job Dimensions | Size Estimate |
|---------|--------------|----------------|---------------|
| Historical evidence pipeline | Locate + Prepare | Functional: can't get usable spatial data fast enough | Every land lawyer handling historical disputes; UXO mapping; infrastructure inspection |
| Boundary reconstruction engine | Execute | Functional + Social: output must be admissible, not just accurate | Legal market wedge; agricultural change detection; insurance claims |
| Provenance chain generator | Conclude | Social: the chain of custody IS the product | Any domain where spatial evidence enters adversarial proceedings |

## Key Architecture Decision (Filed)

The system is DESCRIPTIVE, not GENERATIVE.
- Current imagery = ground truth
- Historical evidence = annotation overlays on current imagery
- Each annotation tagged to: source document + date + methodology + confidence
- Generative synthesis explicitly rejected: a synthesized boundary image becomes expert opinion subject to cross-examination; an annotated provenance chain is an exhibit

## Pre-Decision Value (Identified)

The system answers Mordi's earlier question: should we take this case at all?
Fast, low-cost historical evidence scan as case intake filter -- distinct commercial value
before full dispute support is needed.

## Legal Default -- State Ownership (Critical Commercial Fact)

Israeli law: if ownership cannot be proved, the land defaults to the state.
Implication: the government is the largest single beneficiary of unresolved or unprovable claims.
The Israel Survey Authority has direct financial and institutional interest in accurate, fast dispute resolution.

## Customer Stack (Updated)

| Customer | Role | Relationship to System |
|----------|------|------------------------|
| Mordi's committee | Proof of concept user | Validates system works; first use case |
| Israel Survey Authority | Institutional buyer | Produces authorized maps post-verdict; already identified as potential customer by Mordi; government scale |
| Road planners, infrastructure authorities | Platform expansion | Query land ownership corpus once built; do not require legal verdict workflow |

## Workflow Position

Mordi's committee rules → Israel Survey Authority draws the authorized map → map becomes legal record.
This system sits UPSTREAM of ISA's entire map production process.
ISA is not a competitor. They are the body that formalizes what this system produces.

## Homework

Talk to the ISA contact Mordi interviewed. Three questions:
1. What does their current process look like when a verdict arrives without adequate spatial evidence?
2. What does it cost them (time, money, appeals) when a boundary determination gets challenged?
3. Would they pay for better pre-verdict spatial intelligence, or does that have to come through the committee?
