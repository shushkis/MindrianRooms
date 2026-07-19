---
title: "Jobs To Be Done -- Full List Across Validated Segments"
status: active
source: larry-session
date: 2026-07-19
section: market-analysis
supersedes_note: "Extends jtbd-analysis.md (2026-06-24, single-customer Mordi-centric) to the full buyer map that's emerged since: buyer-analysis.md's three segments, Itamar's field-engineer split, and Orit's appraiser angle (adjacent, deferred per appraiser-vertical-sequencing-decision.md). Does not replace the original -- its architecture decision (descriptive not generative) and Mordi proof-of-concept framing still stand."
---

# Jobs To Be Done -- Full List

Five jobs, five people, one underlying evidentiary gap. Ordered by current
product priority, not by size -- MVP focus first, adjacent/deferred last.

## 1. Government Property Custodian (ממונה על הרכוש הממשלתי) -- PRIMARY MVP BUYER

**Functional job:** When reviewing a claimed-private parcel that has never
completed first registration, I want to determine, with defensible
evidence, whether the claim is provable or the land defaults to state
ownership, so I can close the case correctly instead of leaving it open
indefinitely or ruling on incomplete evidence.

**Emotional job:** I want confidence that a ruling won't be reversed on
appeal for evidentiary reasons I could have caught, and I want to close a
growing backlog without becoming the reason a legitimate claim was wrongly
denied.

**Social job:** I want to be seen (by my institution, by oversight bodies
like the State Comptroller) as running a rigorous, defensible process --
not a rubber stamp that defaults everything to the state by exhaustion.

**Current alternative:** Whatever spatial/documentary evidence is
manually assembled per case, at whatever pace committee staff and outside
experts can produce it -- see `buyer-analysis.md` and
`legal-workflow-analysis.md`.

**Why this job wins the MVP slot:** direct financial incentive (every
resolved-to-state parcel is a confirmed asset), institutional mandate,
and it's the segment the room's own Mullins scoring and public-archive PoC
concept are built around.

## 2. Deputy Head, Israel Land Authority (סגן רמ"א) -- MVP / SCALE BUYER

**Functional job:** When I look at the regional caseload of unresolved
first-registration disputes, I want to reduce average time-to-resolution
and appeal rate across the whole portfolio, so I can report operational
improvement, not just close individual cases faster.

**Emotional job:** I want to stop being the person whose office is
synonymous with an intractable, decades-deep backlog.

**Social job:** I want a credible answer when asked (by the Knesset, by
the Civil Administration, by the public) why registration in Judea and
Samaria remains ~70% incomplete decades after 1967 (see market-sizing
research below for what's actually verifiable about that figure).

**Current alternative:** Case-by-case resolution at whatever rate
individual committees can sustain -- no portfolio-level acceleration
lever currently exists.

## 3. Private Claimant / Land-Dispute Lawyer's Client -- BIG-MARKET EXPANSION

**Functional job:** When I believe I have a legitimate ownership claim
but lack the historical evidence to prove continuous cultivation/
possession, I want to reconstruct that evidence before I file or argue my
case, so I don't lose on an evidentiary technicality when the underlying
claim is true.

**Emotional job:** I want to not repeat Biti-Hills-shaped outcomes --
losing not because the claim was false, but because the proof didn't
exist in a form the committee could accept. (Referencing the *pattern*,
per the room's standing constraint against naming that case as a demo
anchor -- the pattern itself remains legitimate market context.)

**Social job:** I want my lawyer to be able to say the claim was tested
properly, win or lose -- not that it collapsed for lack of a service that
should have existed.

**Current alternative:** Ad hoc expert witnesses, land surveyors,
inconsistent availability of historical imagery -- see `buyer-analysis.md`
economics (20,000-50,000 NIS willingness-to-pay per case, 1-2% of typical
asset value).

## 4. Field/Execution Engineer (Itamar-type) -- LOW PRIORITY, NOTE ONLY

**Functional job:** When planning where infrastructure can be built
without delay, I want the fastest possible go/no-go on whether land is
state or contested, so I can proceed or reroute quickly.

**Emotional job:** Ambiguity is *convenient*, not painful, for this
persona -- he explicitly prefers not knowing who's behind a contested
claim in a court-petition scenario (see `itamar-water-infra-meeting.md`).

**Social job:** None strongly expressed -- this is a low-engagement,
transactional job, not an identity-linked one.

**Why this job doesn't drive product priority:** the person closest to
the day-to-day field decision has the *least* motivation to resolve
ambiguity. This is the segmentation insight Itamar surfaced unprompted --
worth remembering so the product isn't pitched to the wrong buyer inside
"infrastructure."

## 5. District Appraiser (Orit-type) -- VALIDATED, ADJACENT, DEFERRED

**Functional job:** When valuing a parcel for an Objections Committee
case, I want to find what a committee already decided on a similar fact
pattern (e.g. the same operative-date question), so I don't manually
re-search my own archive of past decisions "hoping to read someday."

**Functional job (second, self-named):** When my office completes a new
appraisal, I want it to automatically become a reusable reference layer
for the next comparable parcel, so institutional knowledge compounds
instead of resetting per case.

**Emotional job:** I want an assistant I can trust with case data without
confidentiality exposure -- she already avoids ChatGPT for this reason
and self-built a private Gemini-based workaround.

**Social job:** Institutional credibility of her office's appraisals
holding up under committee scrutiny.

**Current alternative:** A personal, self-built Gemini assistant fed
manually per case, plus (per her account) at least one colleague inside
the Chief Appraiser's office independently building something similar --
a live buy-vs-build signal, not hypothetical.

**Why this stays deferred, not adopted:** one interview, not yet
corroborated by a second; a genuinely different job (precedent/case-law
search) from the core evidentiary-reconstruction job the MVP is built
around. See `solution-design/appraiser-vertical-sequencing-decision.md`
for the full reasoning and revisit triggers.

## Cross-Cutting Pattern

Every job above -- MVP-focus or deferred -- traces back to the same root
cause: **historical spatial/documentary evidence is scattered, siloed, and
requires either personal expertise or personal risk tolerance to
assemble.** The buyer differs (adjudicator, policy owner, claimant,
appraiser); the underlying gap does not. This is the strongest single
argument for the "GIS's ChatGPT moment" platform thesis -- and the
strongest reason to resist prematurely specializing the product around
any one buyer's specific workflow.
