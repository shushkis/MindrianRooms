---
title: Buyer Analysis -- Three-Segment Map
status: draft
source: larry-session
date: 2026-07-01
section: market-analysis
participants: Mordi Verzberger, Larry
---

# Buyer Analysis -- Three-Segment Map

## Session Summary

Three distinct buyer segments identified with confirmed budget authority and motivation.
Each has a different procurement path and willingness-to-pay logic.

---

## Buyer 1: סגן רמ"א (Deputy Head, Israel Land Authority)

**Role:** Responsible for the entire budget of the מנהל האזרחי (Civil Administration)

**Motivation:** Operational efficiency
- Reduce dispute resolution time
- Reduce appeals caused by insufficient spatial evidence
- Faster land registration (הסדרה) at scale

**Procurement path:** B2G -- formal process, slow
**Relationship status:** Mordi has direct working relationship. Will approach once a serious demo exists.
**Pitch logic:** "Here is what unresolved disputes cost you operationally. Here is what changes."

---

## Buyer 2: ממונה על הרכוש הממשלתי (Government Property Custodian)

**Role:** Representative of רמ"י in יהודה ושומרון

**Motivation:** Asset identification -- every unproved private claim defaults to state ownership (Israeli law)
- Direct financial incentive: more land resolved = more state assets confirmed
- More aggressive motivation than Buyer 1

**Procurement path:** B2G -- formal process, slow
**Neutrality question (resolved):** System is descriptive, not generative. Presents evidence, does not decide outcomes. Buyer cannot cause the system to suppress contrary evidence. Neutrality is preserved by architecture.
**Pitch logic:** "Every unregistered parcel is a potential state asset. This finds the evidence."

---

## Buyer 3: היזם / הצד הפרטי (Private Developer / Land Claimant)

**Role:** Party claiming rights to a disputed parcel

**Motivation:** Win the case
- The recurring pattern: cases are lost not because the truth was absent, but because the evidence was not found
- Land value: several million NIS per typical parcel
- A 20,000-50,000 NIS report that changes the outcome is not an expense -- it is the cheapest bet available

**Procurement path:** B2B via law firms -- no procurement process
**Stage:** Big Market expansion (not MVP)
**Pitch logic:** "You paid the lawyer, the surveyor, the architect. You haven't paid the one person who can prove the land is yours."

---

## Comparative Table

| Buyer | Motivation | Procurement | Stage | Pitch Anchor |
|-------|------------|-------------|-------|--------------|
| ממונה רכוש ממשלתי | Identify unregistered land → state ownership | B2G | **MVP** | Every unregistered parcel is a potential state asset |
| סגן רמ"א | Operational efficiency, fewer appeals | B2G | MVP / Scale | Reduce unresolved caseload |
| יזם / צד פרטי | Prove ownership, win registration | B2B via law firms | Big Market expansion | ROI on case value |

**Corrected sequence (2026-07-01):** State is the primary MVP customer. Private claimant is the big market expansion -- same engine, opposite query direction.

---

## Economics (Private Claimant Segment)

- Typical parcel value in a representative disputed-land area: several million NIS
- Willingness to pay: 1-2% of asset value = 20,000-50,000 NIS per case report
- Reference: claimant already pays lawyers, surveyors, expert witnesses
- Recurring loss pattern: cases lost because temporal aerial evidence of continuous cultivation was unavailable -- exactly what HaMuzim produces

---

## Anchor Case for PoC/Demo (Pending Selection)

**Standing constraint (2026-07-12, see `.context/rejection-log.md`):** no
previously-discussed case should be defaulted to as the PoC/demo anchor --
narrow, non-representative facts and confidentiality both cut against it.
The full PoC workup lives in `solution-design/public-archive-poc-concept.md`;
an anchor case still needs to be picked with the user before execution.

What makes a case work as a demo (general criteria, not tied to any specific
prior case):
- Case is public record (verdict, not a sealed committee file)
- Failure mode is known and specific: could not prove N years of continuous cultivation
- Public aerial data layer may be sufficient to reconstruct the missing evidence retroactively
- If the public layer answers what the original proceeding could not -- that IS the demo

Planned use, once a case is chosen:
1. Technical PoC: reconstruct missing evidence using public data only
2. Pitch to סגן רמ"א: "Here is a case your system closed with the wrong outcome. Here is what was missing."
3. Pitch to private claimants: "Here is what losing a case looks like when the evidence existed but was not found."

---

## Open Items

- [ ] Pick a suitable anchor case with the user (do not default to a previously-discussed case)
- [ ] Size the total addressable volume: how many cases per year come before committees like Mordi's, across all of Judea and Samaria?
- [ ] Define MVP scope: what is the minimum output that gets סגן רמ"א into a serious conversation?
- [ ] Pricing model for private claimant segment (per-case vs. subscription for law firms)
