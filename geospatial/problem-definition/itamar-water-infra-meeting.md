---
source: meeting-transcript
date: 2026-07-07
participants: Ron, Eli (venture team), Itamar (water infrastructure engineer, Yehuda and Shomron)
filed-by: larry
note: "Hebrew-language transcript, machine-transcribed (TurboScribe), no speaker diarization. Original file: 7 Jul at 21-57.txt. This entry is a distilled synthesis, not a verbatim transcript -- the source audio/text is the primary record if verbatim quotes are ever needed for a deck or filing."
---

# Meeting: Itamar -- Water Infrastructure Engineer, Customer Discovery

## Context

First customer-discovery interview conducted under discipline: don't present
the product before asking about the interviewee's world today (explicit
instruction the team gave itself going in, credited in the recording to
"what Claude told me"). They broke the rule once early on, course-corrected,
and asked Itamar to answer as if he hadn't heard the pitch yet.

## What Was Validated

Itamar independently re-derived the core problem without being shown the
product:
- Every parcel case starts from zero -- neighbors, boundaries, ownership,
  cultivation status are all re-investigated per case.
- Findings from one case (who the neighbors are, whether they contest a
  boundary, cultivation status) are never carried forward to adjacent
  parcels in the same block (גוש), even though a fuller cross-case picture
  would let a committee predict likely objectors before a new case opens.
- This is a direct, unprompted match to the room's existing problem
  statement (see `legal-workflow-analysis.md`).

## The Sharpest Finding: Two Different Buyers Inside "Infrastructure"

Itamar gave two answers that look contradictory but aren't -- they reveal a
segmentation the room didn't have before this call:

**As a field/execution engineer:** land-ownership ambiguity is often
*convenient*. He doesn't investigate ownership beyond "is this state land
or not" -- that's the only cut that matters for his go/no-go. In a
court-petition scenario, he'd sometimes rather not know who is behind a
claim, because knowing complicates his position. Ambiguity, for him, is
a usable asset, not a gap to close.

**As the person who signed off on a macro plan:** the region just approved
a Water Master Plan through 2075 that he calls "speculative," because it's
built on land arrangements (הסדרים) that haven't happened yet. At that
level, he says a macro risk/probability layer -- exactly what the room's
product proposes -- is "an excellent tool," both for risk management and
for macro policy decisions.

**Implication for the room:** the ICP is not "infrastructure people" as a
single persona. It's the macro/policy layer that owns long-horizon risk
exposure (regional planning, ענף תשתית, רמ"א-adjacent roles) -- not the
field engineer executing a specific project, who may have limited or even
negative interest in ownership certainty. This should inform
`business-model` (currently empty) and the "who writes the first check"
question already open in `competitive-analysis/competitive-landscape.md`.

## Concrete Example: The Road 5 / Mekorot Case

Itamar described a real mechanism his office built: for a 42" water main
relocation where the land's ownership status was contested and Mekorot
(the national water company) had no proven right to the land, his office
would not advance planning approval until the ownership question was
resolved -- inverting the normal right-of-way logic (where the party with
land rights gets compensated to allow relocation, not the other way
around). This is a live example of land-ownership ambiguity being
*operationally load-bearing*, not just a nuisance -- it shows the product's
value isn't only "resolve uncertainty," it's "make uncertainty visible and
actionable as a risk-management lever," including in negotiating positions
between agencies.

## Technology Validation: The Chat-Interface Bet

Unprompted, Itamar volunteered that he thinks GIS-as-licensed-product
(naming Esri/ArcGIS) is a dying model, being displaced by natural-language,
prompt-driven mapping. He described a real, recent instance of using an
LLM conversationally to plan a water-line route to a specific site,
getting route/cost comparisons and a generated map back -- without opening
a GIS application at all.

This is an independent, external data point supporting the interaction
model chosen this session for the sibling `hamuzim-chat` app (see
`solution-design/hamuzim-chat-decision.md`): query in natural language,
not another map-drawing tool.

## Sharper Problem Definition: Evidence Outside the Polygon

Itamar defined the "geographic entity" in his world precisely: the
surveyed, registered polygon (produced by the survey company, מפ"י),
tied to a case-file number. But he flagged that a large amount of
relevant evidence exists *outside* that polygon boundary while still
bearing on it -- his example: testimony that a family has cultivated and
held land along a parcel's eastern boundary for generations. That
testimony exists only as text inside an application file. It is never
digitized, never given spatial representation, and is invisible to any
future case on an adjacent parcel.

This sharpens the room's existing "evidence gets lost between cases"
framing (`initial-exploration.md`) into something more specific and
buildable: **evidence adjacent to a polygon, not just evidence produced
about the polygon itself, currently has no spatial home at all.**

## Open Items Raised

- Legal regime differences between Israel proper and Yehuda/Shomron
  (e.g. no right-of-way concept in the latter; presence/absence of formal
  land registration is closer to binary) -- relevant to how Module 1/2
  legal-acquisition logic (`legal-workflow-analysis.md`) should be scoped
  regionally, not treated as one uniform legal model.
- Itamar suggested vector-based (point/line/polygon with X/Y/Z + arbitrary
  attribute fields) as the practical starting data model for anyone
  building a geographic layer from scratch -- consistent with, not new
  information for, the room's existing data-fusion approach.
- No product recommendation or competitor name volunteered when asked
  directly what platform should host this -- worth a direct follow-up
  question in a future conversation.

## Where This Leaves the Room

Itamar's segmentation finding (field exec vs. macro/policy buyer) is the
single most actionable output of this call and should be tested against
the "First Check" question in `competitive-analysis/competitive-landscape.md`
before the next customer conversation.
