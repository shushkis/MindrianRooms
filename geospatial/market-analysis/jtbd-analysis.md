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

Mordi. Land dispute lawyer. On a Tuesday he has a client sitting across from him holding a document that says "from the oak tree to the hill" -- and the oak tree no longer exists. He needs to figure out where that line is today, with enough rigor to hold up in court.

## Job Statement

When a client presents a historical land description with vanished markers, I want to translate that description into current spatial coordinates with full provenance, so I can produce legally admissible evidence of the boundary.

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

## Homework

Interview one lawyer who lost a land dispute case. Don't ask what tool they wanted --
ask what evidence they couldn't produce, and what it cost them.
