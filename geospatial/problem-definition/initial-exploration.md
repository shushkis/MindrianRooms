---
source: new-project exploration
date: 2026-06-22
---

# The Evidence Gap in Geospatial Dispute Resolution

The core problem: historical aerial photos and maps are not spatial data until georeferenced. Mordi (co-founder, land dispute lawyer) currently does this process by hand -- registering scanned historical imagery to present-day orthophotos using ground control points, correcting for terrain and camera tilt.

## Why the Problem Is Hard

- Pre-alignment search space is larger than modern image registration because features have changed over time
- Sources are heterogeneous: aerial photos, cadastral records, satellite imagery, testimony -- wildly different types and quality
- Joint registration across multiple years is more robust than one-at-a-time (documented in WWII UXO mapping workflows)

## The Pre-Decision Value

Mordi's colleagues confirmed: the system doesn't just speed up the dispute decision -- it answers the earlier question of whether to take the case at all. A fast, low-cost historical evidence scan as a case intake filter has distinct commercial value separate from full dispute support.

## Epistemic Architecture (Critical Design Decision)

Two paths for the output layer:
- **Descriptive (chosen):** current imagery as ground truth, historical evidence as annotation overlays. Each annotation traces to a source with documented methodology.
- **Generative/normative (rejected):** synthesize a new image of "how it should look." Rejected because generative hallucinations in legal contexts undermine trust and admissibility; synthesized images become expert opinion requiring cross-examination rather than auditable exhibits.

The descriptive path produces a provenance chain -- every annotation is traceable to its source. That chain is what makes output an exhibit, not an interpretation.
