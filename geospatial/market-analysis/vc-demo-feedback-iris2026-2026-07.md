---
title: "VC Demo Feedback -- Iris 2026 Cohort, Land Rights Track"
status: active
source: larry-session
date: 2026-07-20
section: market-analysis
supersedes_note: "Pulled from https://mindrian-workroom.vercel.app/room/iris2026/cohort/land-rights. Session 6 score: 25/35. Session 7: still strong (Problem 5, Solution 5)."
---

# VC Demo Feedback -- Iris 2026

## What Landed

- **Prior art research called out as best in the cohort** -- "manual, line
  by line, inside the actual state of the art."
- **Technical execution validated the architecture choice.** The live
  demo showing the system say "no source found" rather than hallucinating
  is a direct payoff of the standing "descriptive, not generative" design
  decision (`solution-design/initial-exploration.md`) -- this is a judge
  independently noticing the thing the room already decided was
  legally/architecturally important, for a different (also good) reason.
- **Data-moat framing landed.** A judge (also named Lawrence -- not this
  Larry) said "getting the data is a critical issue and it's not going to
  be on ChatGPT." That's an outside, independent echo of Mullins Domain 4
  ("the assembled layer is the moat -- every case enriches all prior
  cases").
- **Market sizing read as credible, not inflated** -- consistent with
  this room's own sourcing discipline (cite or flag, never invent).

## The Gaps -- and Where This Room Already Has Material

### 1. "No first customer identified despite clear problem definition"

This is now sharper than it reads on its own. As of last night
(`legal-ip/conflict-of-interest-mordi-2026-07.md`), the reason there's no
locked-in first customer isn't just sales-cycle slowness -- Mordi's own
office (the presumed MVP buyer) requires a conflict-of-interest
resolution before any commercial contact. That's not a fact to volunteer
loosely in a pitch, but it does mean **Buyer 1 (סגן רמ"א / ISA)**, already
on file in `buyer-analysis.md` as the second government segment, may
become the cleaner near-term answer to this exact question -- a real
target with no personal-conflict complication, not a fallback.

### 2. "Defensibility weakness -- the answer about early government relationships was weaker than expected"

This is the most important connection to make. The pitch's defensibility
answer leaned on **Mordi's personal relationships** -- which is precisely
the thing now under legal review, and which was always a single-person,
single-relationship dependency, not a structural moat. The room already
has a stronger, more durable answer that doesn't carry that risk: the
**assembled-evidence-layer moat** (Mullins Domain 4, independently
echoed by the VC judge's own "data moat" comment above). Future pitches
should lead with the data/architecture moat, not the relationships moat --
not because the relationships aren't real, but because they're fragile
and currently legally encumbered in a way the data moat isn't.

### 3. "Lacking concrete tools to evaluate market size" (Jonathan's challenge)

Partially addressed already -- see `tam-pricing-gap-closure-2026-07.md`
(2026-07-19). That pass corroborated pricing and found, honestly, that no
independent case-volume TAM exists publicly, anchoring instead to the
$79M LTSA budget as a credibility signal. Worth presenting *that
methodology itself* as the answer to "concrete tools" -- showing the
sizing attempt and where it hit real walls is more credible to a VC than
a single invented number, but it needs to be built into a dedicated
slide, not left as a room artifact only Larry and the founders have seen.

### 4. "Pick a second vertical market with concrete enough specifics to feel real"

Already researched, not yet packaged: the Italy heir-fragmentation /
"1 Euro Houses" analog (`persona-research-2026-07.md`) is real, confirmed,
commercially active, and structurally the same job (reconstruct
fragmented/lost chain-of-title) in a different failure mode. This is the
concrete second vertical -- it needs a slide, not new research.

### 5. "Present the actual data-access mechanism as a dedicated slide, not just domain expertise"

Reinforces #2 -- material already exists in `solution-design/data-inventory.md`
and the Ottoman OCR/NLP approach in `business-model/mullins-7-domains/mullins-7-domains.md`
(Domain 6). Needs packaging into a slide, not new work.

## What This Means, Net

Three of the five gaps VCs flagged already have real material sitting in
this room -- they weren't researched *for* the pitch, so they didn't make
it into the deck. The genuinely new gap is #1/#2: the defensibility story
leaned on the one relationship now under legal review, and needs to lead
with the data moat instead going forward.

## Open Items

- [ ] Build the TAM-methodology slide from `tam-pricing-gap-closure-2026-07.md`
- [ ] Build the Italy second-vertical slide from `persona-research-2026-07.md`
- [ ] Build the data-access-mechanism slide from `data-inventory.md` +
      the Ottoman OCR approach
- [ ] Rewrite the defensibility answer to lead with the assembled-evidence
      moat, not government relationships, pending the COI resolution
- [ ] Re-pitch "first customer" as Buyer 1 (ISA) if the legal advisor's
      answer points that direction
