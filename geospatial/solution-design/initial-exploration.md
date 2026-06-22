---
source: new-project exploration
date: 2026-06-22
---

# Platform Architecture: Multi-Source Fusion with Provenance

## Core Design Decisions Reached

### Fusion Level: Decision-Level (not data-level or feature-level)
Three-level hierarchy from remote sensing literature:
- Data-level: overlay raw rasters -- simple, sensitive to misregistration
- Feature-level: extract features from each source, combine -- robust when sources disagree
- **Decision-level (selected):** each source independently votes on a boundary/feature, then reconcile

Decision-level is chosen because it keeps each piece of evidence auditable. In an adversarial dispute context, "correct output" means defensible output. Each source's contribution remains inspectable.

### Output Layer: Annotation over Current Imagery
- Current satellite/drone imagery = ground truth
- Historical evidence = overlay annotations (old fence lines, vanished features, testimony markers)
- Each annotation tagged to: source document + date + methodology + confidence

### Testimony Integration: Corroboration, Not Foundation
Participatory GIS (PGIS) literature finding: testimony enriches and corroborates spatial evidence but rarely stands alone as a boundary determinant in legal settings. Testimony points are filed as annotations with explicit epistemic weight -- never as primary evidence.

### What the System Is NOT
Not a generative/normative system. Does not synthesize "where things should be." A synthesized authoritative-looking boundary image is the worst artifact to introduce in a dispute -- it encodes model guesses as visual authority.

## Platform Ambition
The fusion methodology is application-agnostic. Legal exhibits today. Agricultural change detection, infrastructure inspection, UXO mapping -- same engine, different output packaging. The platform is the moat; the legal application is the wedge.
