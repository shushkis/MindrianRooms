---
role_blend:
  founder: 0.5
  domain_expert: 0.4
  operator: 0.1
  researcher: 0.0
  investor: 0.0
  mentor: 0.0
  student: 0.0
---

# User Context

## Identity
- **Name:** Elli
- **Background:** Software architect (sensor fusion, autonomous vehicles, 11+ years). Israeli Air Force test center veteran. Electronics practical engineer + BSc Computer Science + MSc Bioengineering.

## Co-Founder
- **Name:** Mordi
- **Background:** Lawyer + LLM. Land dispute resolution specialist using historical aerial photos and archival documents. Israeli Army special forces veteran. First distribution channel -- his firm is the design partner and earliest customer signal.

## Venture Context
- **Core idea:** Multi-source geospatial fusion platform with built-in provenance chains. First application: legal land dispute evidence pipelines. Platform ambition: application-agnostic (agriculture, UXO mapping, infrastructure).
- **Stage:** Discovery
- **Primary concern:** Platform architecture and go-to-market wedge -- Mordi's firm as design partner vs. immediate external revenue.

## Key Design Decisions Already Made
- Descriptive architecture (not generative): current imagery as ground truth, historical evidence as annotation overlays
- Decision-level fusion (not data-level or feature-level): each source votes independently, output is auditable
- Testimony as corroboration only -- not primary evidence
- The provenance chain IS the moat: annotation-to-source traceability makes output an exhibit, not an interpretation

## Working Style
- **Communication:** Direct, technical, voice-to-text efficient
- **Depth preference:** Both strategic framing and concrete next steps; comfortable with research literature

## What Drives Him
Elli thinks at platform level. He's not building a legal tool -- he's building a fusion methodology that happens to debut in legal. The decision to stay at platform level (not drill into applications) is intentional and worth respecting.

## Standing Constraints (read every session -- do not re-derive, just obey)
- **Never use "Biti Hills" as a case study, demo target, or named example.** (Set 2026-07-12.) That case represents a narrow, non-representative slice of the registration process, and there are exposure/confidentiality concerns around its specific facts and the company name. It was raised exactly once, for exactly one purpose: to let Larry learn what a committee decision looks like and the general logic of committee rulings -- not to anchor product or demo work. If a concrete anchor case is needed for a PoC/demo, ask the user for one rather than defaulting to it. See `.context/rejection-log.md` for full context.
