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

## Core Architecture: Bidirectional Bridge (Filed 2026-06-30)

Validated by ISA contact interview (via Mordi). ISA has GIS. ISA has documents. They are missing the bridge between them.

### The Two Translation Directions

**Text → Geo:**
Historical deeds, Ottoman records, court verdicts, testimonies contain geographic descriptions in natural language ("from the oak tree to the hill"). The system extracts these references and grounds them to spatial coordinates. Textual evidence becomes an Observation in geographic space.

**Geo → Text:**
Given a parcel, coordinate, or bounding area -- retrieve all textual evidence in the corpus that references that location. Geography becomes a query into the document layer. A judge can ask "what does the record say about this area?" from a map interface.

### Cross-Modal Layer (Between the Two Spaces)
Aerial imagery, satellite, historical maps, drone footage. These are neither pure text nor pure coordinates. They corroborate or contradict what the two spaces say about each other. The decision-level fusion architecture handles this: each modality votes independently, reconciled at the Observation level.

### Why the Observation Is the Bridge
An Observation has a location (geographic) AND a textual claim with a source (textual). It lives in both spaces simultaneously. It is the atomic unit because it is the unit of translation between spaces.

### ISA Contact Signal
"Missing many layers on top of GIS -- textual data related to the geographical area."
This is the exact product described above. Validated from buyer side, unprompted.

## Atomic Unit Decision (Filed 2026-06-30)

**The atomic unit of the system is the Observation.**

Shape: `(location, time, condition, source, confidence)`

An Observation is a spatiotemporal claim -- something that was true at a specific location, at a specific time, as evidenced by a specific source with a defined confidence level.

Every piece of data the system ingests produces Observations:
- A historical aerial photo → dozens of Observations (fence lines, trees, structures visible at that date)
- A court verdict → Observations (legal findings about what existed when and where)
- An Ottoman land record → Observations (boundary descriptions converted to coordinates)
- Witness testimony → Observations (lower confidence, corroborating role only)

**Why not Parcel:** The parcel boundary is what is contested in a dispute -- indexing on it creates a circular dependency. Also, 70% of West Bank parcels are unregistered.

**Why not Coordinate alone:** Coordinates are correct but insufficient -- the temporal dimension is load-bearing. The same coordinate means different things in 1959 and 2024.

**The translation layer:** Mordi queries by parcel. The engine stores by Observation. The layer that converts a parcel query into a spatiotemporal bounding box query is part of the product.

**Compounding effect:** Every new document ingested produces new Observations that enrich all prior cases touching the same area. This is the network effect -- not a strategy claim, a technical inevitability of the data model.
