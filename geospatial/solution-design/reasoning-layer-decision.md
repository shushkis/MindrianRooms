---
source: larry-session
date: 2026-07-08
section: solution-design
decision: founder-approved
supersedes_note: "Refines and replaces the 2026-07-08 Macro Risk Layer draft as the lead solution concept. Does not replace hamuzim-app or hamuzim-chat -- both remain the built backup, and this layer is designed to sit on top of the same Observation engine they already use."
---

# Product Decision -- Reasoning Layer: Mordi's Judgment, Deployable

## The Decision

The lead concept is no longer a passive risk dashboard (the original Macro
Risk Layer draft). It is a **gated reasoning layer**: Mordi's adjudication
judgment, codified into an explicit, auditable ruleset, applied by an LLM
to propose analysis on new cases -- always surfaced to a human adjudicator
for review and sign-off before anything becomes a filed exhibit or verdict.
Modeled explicitly on how Larry/MindrianOS itself works: the model reasons,
pattern-matches, and proposes; the human holds the gate; the artifact that
gets filed is what the human approved, never what the model asserted
unilaterally.

## Why This, Not The Original Macro Risk Layer Draft

The dashboard version served the macro/policy buyer (סגן רמ"א) with an
aggregate risk surface. This version serves the same buyer with something
sharper: their own stated motivation is fewer appeals and faster resolution
*at scale* -- not just visibility into risk, but Mordi-quality judgment
available to every committee member, not only his own. That is a stronger,
more literal answer to the WDP's WHO than a dashboard is.

## Why This Does Not Reopen The Generative-Architecture Risk

The room's standing decision (`initial-exploration.md`) rejected generative
synthesis because a model-generated determination becomes expert opinion
subject to cross-examination, not an auditable exhibit. This decision does
not overturn that -- it adds a discipline on top of it:

- The reasoning layer **proposes**: a pattern match to prior cases, flagged
  contradictions, a draft finding -- always citing the Observations and
  precedent cases it drew from.
- It never **asserts**: no proposal becomes a filed verdict or exhibit
  without an explicit human sign-off at that gate.
- If the gate discipline is ever weakened -- a proposal auto-accepted under
  time pressure without real review -- the system is back in the rejected
  generative-liability posture. The gate is not a UI nicety, it is the
  entire legal defensibility of this decision.

## The Real Technical Bottleneck (Named Honestly)

Larry-style reasoning works because Aronhime's frameworks were codified
into explicit, written rules *before* any model could apply them. The
equivalent extraction has only barely started for Mordi:
`legal-workflow-analysis.md` already contains a first pass -- the three
legal questions, standards of proof, common failure modes, double-sale
detection logic -- but turning 20 years of tacit adjudication judgment into
an explicit, citable ruleset a model can apply and a lawyer can audit is
unproven, slow, and likely the hardest problem in this build. It is not a
data problem or a fusion-engineering problem. It is a knowledge-elicitation
problem, and no one has scoped how long it takes or whether it converges.

## What Changes In The Room

- Solution Pathway 1 (formerly Macro Risk Layer) is renamed and
  re-scoped to this reasoning layer.
- Road Test domain 4 (Competitive Advantage): moat strengthens -- it is now
  the assembled evidence layer *plus* a codified expert-judgment layer,
  which is far harder to copy than a fusion algorithm.
- Road Test domain 6 (Ability to Execute / CSFs): a new, likely-hardest CSF
  is added -- codifying Mordi's tacit judgment into an explicit, auditable
  ruleset.
- Road Test domain 8 (Validation): a new open item -- validating that the
  codified ruleset actually matches Mordi's real judgment, not just that
  the reconstruction pipeline works (the existing Biti Hills PoC item is
  necessary but no longer sufficient).

## Open Items

- [ ] Has any part of Mordi's actual case-resolution reasoning been written
      down at a granularity finer than `legal-workflow-analysis.md`'s
      three-question framework?
- [ ] Who reviews/signs off on proposals in the deployed version -- only
      Mordi, or any committee member? This determines whether the product
      scales past one office or stays a personal accelerant.
- [ ] Define what "the gate" looks like in product terms: does the
      adjudicator see the model's reasoning trace, or only its conclusion
      and citations?
