---
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

**Role:** Party claiming rights to a disputed parcel (Biti Hills archetype)

**Motivation:** Win the case
- Biti Hills lost -- not because the truth was absent, but because the evidence was not found
- Land value: several million NIS per typical parcel
- A 20,000-50,000 NIS report that changes the outcome is not an expense -- it is the cheapest bet available

**Procurement path:** B2B -- law firm pays, no procurement process, fast
**Revenue speed:** FASTEST path to first revenue
**Pitch logic:** "You paid the lawyer, the surveyor, the architect. You haven't paid the one person who can prove the land is yours."

---

## Comparative Table

| Buyer | Motivation | Procurement | Revenue Speed | Pitch Anchor |
|-------|------------|-------------|---------------|--------------|
| סגן רמ"א | Operational efficiency | B2G, slow | Slow | Reduce appeals |
| ממונה רכוש | Asset identification | B2G, slow | Slow | State land portfolio |
| יזם / צד פרטי | Win the dispute | B2B, fast | **Fast** | ROI on case value |

---

## Economics (Private Claimant Segment)

- Typical parcel value in Biti Hills area: several million NIS
- Willingness to pay: 1-2% of asset value = 20,000-50,000 NIS per case report
- Reference: claimant already pays lawyers, surveyors, expert witnesses
- Biti Hills outcome: lost because temporal aerial evidence of continuous cultivation was unavailable -- exactly what HaMuzim produces

---

## Biti Hills as Case Study (Confirmed)

Mordi confirmed Biti Hills is the ideal case study. Decisions to be filed when received.

Why it works as a demo:
- Case is public record
- Failure mode is known and specific: could not prove 10 years of continuous cultivation
- Public aerial data layer may be sufficient to reconstruct the missing evidence retroactively
- If the public layer answers what the court could not answer -- that IS the demo

Planned use:
1. Technical PoC: reconstruct missing evidence using public data only
2. Pitch to סגן רמ"א: "Here is a case your system closed with the wrong outcome. Here is what was missing."
3. Pitch to private claimants: "Here is what losing a case looks like when the evidence existed but was not found."

---

## Open Items

- [ ] Biti Hills court decisions to be filed (Mordi to send)
- [ ] Size the total addressable volume: how many cases per year come before committees like Mordi's, across all of Judea and Samaria?
- [ ] Define MVP scope: what is the minimum output that gets סגן רמ"א into a serious conversation?
- [ ] Pricing model for private claimant segment (per-case vs. subscription for law firms)
