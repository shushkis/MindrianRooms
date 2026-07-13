---
title: "Meeting: Orit -- District Appraiser (Judea & Samaria), Customer Discovery"
status: active
source: meeting-transcript
date: 2026-07-09
participants: Mordi (venture team), Orit (District Appraiser, Judea and Samaria)
filed-by: larry
note: "Hebrew-language audio, transcribed locally with faster-whisper (medium model, CPU, no cloud service used per explicit instruction). No speaker diarization -- speaker attribution below is inferred from content and may be imperfect in a few places. Original file: '9 ביולי, 13.23_ שמאי מחוזי יוש הקלטה למינדרין.m4a'. This entry is a distilled synthesis, not a verbatim transcript -- the source audio is the primary record if verbatim quotes are ever needed."
---

# Meeting: Orit -- District Appraiser, Customer Discovery

## Context

Second customer-discovery interview (after `itamar-water-infra-meeting.md`),
this time with a District Appraiser for Judea and Samaria. Orit holds three
overlapping roles: she personally appraises first-objection cases (השגה
ראשונה), she acts as the intermediary between commissioning government
bodies and independent contract appraisers (שמאי הגר) who work under the
Chief Government Appraiser, and she is a working appraiser herself. Mordi
walked her through the Mullins deck (product referred to by its working
name only -- see standing constraint on case naming) before opening up the
conversation on her day-to-day workflow.

## What Was Validated

**The core "dozens of disconnected databases" pain is real and self-reported
in detail, unprompted.** Asked what data sources she touches per appraisal,
Orit rattled off more than a dozen by name: GovMap (layers + a transactions
layer tied to Tax Authority data), the Israel Land Authority site (tenders +
planning status), Mnhal LeTichnun (planning status), the Ministry of
Justice's Tabu-extract portal, Yad2, Madlan, Bezeq real-estate brokerage,
periodic housing-price surveys, RMI council decisions, a system called
"Keshet" (אגף שומת מקרקעין's internal appraisal repository), FRS appraisals,
and more -- managed as a personal bookmarks folder in her browser. She
confirmed directly: yes, she works across "dozens of databases in parallel"
and has to know, case by case, which ones are relevant.

**She is already trying to solve this herself with AI -- and so is at least
one colleague.** Orit described building her own assistant inside Gemini
(explicitly not ChatGPT, for confidentiality reasons -- she avoids putting
case data into ChatGPT because "it's exposed"), fed manually with
per-case context (aerial photos, comparables she collects) so it "knows
what file I'm talking about." She flagged its real limits: it doesn't
reach into closed databases, and it sometimes "talks nonsense" -- she does
not treat its output as trustworthy without checking. Separately, and
unprompted, she mentioned that an appraiser inside the Chief Appraiser's
own office has independently started building a similar personal agent and
might eventually roll it out more broadly. This is a live buy-vs-build
signal: the need is validated enough that a potential buyer-side user is
already self-building a version of it.

## The Sharpest Finding: She Doesn't Want the Layer-Aggregator -- She Wants Precedent

This is the most important correction to the room's existing product
framing. When asked directly whether she'd want an agent that pulls
together map/planning/comparables layers into one panel, Orit was explicit:
**no** -- that workflow (juggling map sites, planning sites, comparables
sites) is not her actual pain point; she already has it down. What she
described wanting instead is narrower and sharper: an agent scoped
specifically to **regional Objections Committee (ועדה מחוזית) reasoning and
precedent** -- something that knows what a committee already decided on a
similar fact pattern (e.g. a specific "מועד קובע" / operative-date question
for expropriation compensation) so she isn't manually re-searching her own
archive of past committee decisions, which she described as a folder of
files she "hopes to read someday."

**Implication for the room:** the product's most validated wedge, per this
interview, may not be the general multi-layer GIS fusion panel currently
described in `solution-design/`, but a narrower "committee precedent /
judgment-support" feature -- closer to case-law search than to GIS. This
should be weighed against the existing Module 1/2/3 framing in
`legal-workflow-analysis.md` rather than assumed to be additive; it may be
a sharper MVP entry point than the current one.

## A Concrete, Buildable Feature She Named Herself

Orit independently described a feature the room hasn't specified yet: if
completed appraisals from her office were fed into a system, they should
automatically become a reusable layer -- so that a *new* appraisal on a
nearby or comparable parcel doesn't start from zero. This is effectively
"precedent built from her own team's completed work," distinct from
external committee-decision precedent, and is narrower and more immediately
buildable than either.

## What She Explicitly Does NOT Want

Asked about access to Rimon (the underlying land-registry system, analogous
to Tabu), she declined: "what's registered is already registered" -- she
is not interested in the confirmed-registration layer. She wants the layer
that *precedes* registration -- the contested, unresolved evidence layer --
because that's where her actual work sits, and because roughly 70% of the
relevant land area has not been through final registration. **This is
strong, but not fully independent, confirmation of the room's core thesis**
(the closed first-registration layer is the real target, not the
registered-land layer): the "70%" figure matches what's already in the
room's own Mullins deck, and this discussion happened *after* Mordi walked
her through that deck. With no speaker diarization on this transcript, it
can't be ruled out that she was echoing a number she'd just been shown
rather than recalling it cold from her own professional knowledge -- she'd
plausibly know it either way, but it should be treated as corroborating,
not as a clean independent data point, until checked against a source that
wasn't just primed by the pitch.

## Legal Ambiguity Signal (New)

Near the end of the conversation, Orit surfaced a structural gap the room
hadn't captured: there is no single, unified legal instrument establishing
the authority she operates under in Judea and Samaria ("מכוח מה אני עובדת
בכלל" -- "what authority am I even operating under, really"). Specific
legal questions (e.g. the operative date for expropriation-compensation
valuation) get resolved case by case via referral to legal counsel
(יועמ"ש), not by a standing rule. She mentioned a pending legal opinion
involving the Ministry of Defense's legal counsel that she hopes will
produce a general rule instead of repeated case-by-case answers. This is a
second, independent evidentiary/process gap alongside the aerial-cultivation
gap already on file -- worth its own line in `legal-workflow-analysis.md`
if it recurs in future interviews.

## Adjacent Market Mentioned (Unconfirmed, Worth a Follow-Up)

Orit raised, unprompted, an analogy to aging rural villages in Portugal and
Italy: properties left behind by deceased owners with no clear heirs,
where (per her understanding, not independently verified) a custodian-type
body proactively searches for and contacts potential heirs. She was
speculating, not reporting confirmed knowledge -- flagging this as a
possible cross-domain analogy (heir-search + unregistered/heirless
property) worth a `find-analogies` pass later, not as validated market
data.

## Technology Validation: "What GPT Did to Google, We Want to Do to GIS"

Mordi's framing of the product vision during the deck walkthrough (a
single conversational panel replacing manual navigation across dozens of
open layers) is what prompted Orit's strongest agreement signal ("לפי
דעתי ממש כן" -- she believes demand is real, partly because multiple
government offices each maintain their own siloed system and would welcome
something that unifies them). This is a second independent data point (after
Itamar's unprompted "GIS licensed-product is dying" comment) supporting the
conversational/agent interaction model over a traditional GIS panel.

## Open Items Raised

- ~~Test whether "committee precedent / judgment-support" should become the
  primary MVP wedge~~ **Resolved 2026-07-13:** deferred as an optional
  future vertical, not adopted as MVP wedge. See
  `solution-design/appraiser-vertical-sequencing-decision.md` for the
  decision and revisit triggers. Core tool (Module 1/2/3, government-buyer
  MVP) stays the focus.
- Follow up on the internally-built appraiser agent inside the Chief
  Appraiser's office -- a real buy-vs-build competitive signal, not
  hypothetical.
- The "auto-layer from completed appraisals" feature is concrete enough to
  scope as a standalone MVP candidate.
- The legal-authority ambiguity ("מכוח מה אני עובדת") is a second
  process-level gap worth tracking alongside the evidentiary gap already on
  file -- watch for recurrence in future interviews before treating it as a
  pattern.
- Heir-search / heirless-property analogy (Portugal/Italy) is unconfirmed
  and speculative on Orit's part -- worth an independent check before
  citing it as market evidence anywhere.

## Where This Leaves the Room

The interview's single most actionable finding is the correction from
"layer aggregator" to "precedent / judgment-support agent" as the sharper
wedge -- this should be weighed directly against the existing Module 1/2/3
framing before the next customer conversation, the same way Itamar's
buyer-segmentation finding was flagged for testing in the prior meeting
note.
