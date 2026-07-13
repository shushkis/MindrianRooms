---
title: "Product Decision -- Appraiser Precedent Vertical Deferred, Not Dropped"
status: active
source: larry-session
date: 2026-07-13
section: solution-design
decision: founder-approved
supersedes_note: "Resolves the open question raised in problem-definition/orit-district-appraiser-meeting.md and the follow-up discussion: does the committee-precedent / judgment-support angle become a parallel or replacement MVP wedge?"
---

# Product Decision -- Appraiser Precedent Vertical: Optional, Later

## The Decision

The committee-precedent / judgment-support angle surfaced in the Orit
interview (`problem-definition/orit-district-appraiser-meeting.md`) is
**not** becoming a parallel or replacement MVP wedge. It is logged as an
**optional future vertical**. Development stays focused on the core tool
-- the existing Module 1/2/3 evidence-reconstruction pipeline and the
MVP customer already on record (the government body responsible for state
land assets).

## Why This Is the Right Call, Not Just the Comfortable One

- One interview is one data point. The appraiser-precedent signal is real
  and worth having on file, but it hasn't been tested against a second or
  third conversation the way the core evidentiary thesis has (Itamar,
  Orit, the room's own Mullins analysis, and the public-archive research
  pass all converge on the same core problem independently).
- Splitting focus across two wedges before either is proven is a classic
  way to end up with two half-built things instead of one working thing.
  The core tool already has a scored Mullins verdict (GO), a named MVP
  buyer, and a concrete PoC concept (`public-archive-poc-concept.md`) ready
  to execute. The appraiser angle has none of that yet -- it's a hypothesis
  worth revisiting, not a validated roadmap item.
- The buy-vs-build risk flagged earlier (an appraiser already self-building
  a similar tool) is real, but it argues for *watching* that vertical, not
  for building it now -- there's no evidence yet that the risk is
  time-critical enough to justify diverting from the core build.

## What Stays in Scope Now

- Module 1/2/3 evidence-reconstruction pipeline (`legal-workflow-analysis.md`)
- Public-archive PoC execution (`public-archive-poc-concept.md`)
- MVP customer: the government body responsible for state land assets

## What's Deferred, Not Discarded

- Committee-precedent / judgment-support agent for appraisers
  (`orit-district-appraiser-meeting.md`)
- The "auto-layer from completed appraisals" feature she proposed herself
- Revisit trigger: either (a) a second independent interview corroborates
  the same precedent-over-data-fusion preference, or (b) the core tool
  reaches a stage where a second vertical is additive rather than a
  distraction, or (c) new evidence that the internal appraiser-built agent
  is moving fast enough to change the buy-vs-build timeline.
