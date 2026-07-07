---
framework: mullins-7-domains
generated: 2026-07-01
participants: Mordi Verzberger, Elli Eidelman, Larry
overall_verdict: GO
weakest_domain: 6
weakest_domain_resolved: true
---

# Mullins 7 Domains -- HaMuzim

## Well-Defined Problems

**Big Market:**
How can we help land registration authorities reach a legally defensible verdict, under circumstances where historical evidence is fragmented across disconnected archives unlinked to geographic coordinates, in order to resolve the disputed parcels that today default to the state by procedural failure rather than by fact?

**MVP:**
How can we help the state identify parcels where private ownership cannot be proven, under circumstances where 70% of West Bank land is unregistered and historical records are disconnected from geographic coordinates, in order to systematically establish state ownership over unregistered land?

---

## Verdict

**GO** -- All 7 domains GREEN. No blockers. Ottoman document NLP gap identified and resolved in-session: existing OCR tooling + small fine-tuned LLM is an engineering task, not a research problem.

---

## Score Card

| # | Domain | Score | Status | Evidence |
|---|--------|-------|--------|----------|
| 1 | Target Segment Benefits | 5/5 | GREEN | Pain is irreversible. Land worth millions vs. 20-50K NIS report. JTBD gap 8/10 -- among the highest possible. |
| 2 | Market Attractiveness (Macro) | 4/5 | GREEN | 70% of West Bank parcels unregistered. Government mandate + hundreds of millions NIS budget. Adjacent verticals: energy, agriculture, fire, infrastructure -- same engine, different output. |
| 3 | Industry Attractiveness | 4/5 | GREEN | Supplier power LOW (public data). Substitutes = doing nothing. Zero direct rivals in niche. High barrier to entry once assembled layer exists. |
| 4 | Sustainable Advantage | 4/5 | GREEN | Assembled layer is the moat -- every case enriches all prior cases. Technical network effect, not strategic claim. Mordi is founder + first customer + distribution channel simultaneously. |
| 5 | Mission & Risk | 4/5 | GREEN | Mordi: "can't sleep because the problem keeps him up." Elli: owns the technical challenge. Clean role split. Legal/IP coverage on founding team is rare at this stage. |
| 6 | Ability to Execute on CSFs | 4/5 | GREEN | ✓ Georeferencing/CV: Elli (11 years sensor fusion). ✓ Legal admissibility: Mordi. ✓ Gov procurement: Mordi (existing relationships). ✓ Ottoman OCR/NLP: existing models (Osmanlica.com 88-97% accuracy) + fine-tune small LLM -- engineering task, not research. |
| 7 | Connectedness | 4/5 | GREEN | Upstream: Survey Institute + PalOpenMaps (public). Downstream: Mordi IS the buyer and channel. Across: ISA validated unprompted ("missing textual layers on GIS"). Regulators: Mordi knows the landscape from the inside. |

---

## Weakest Domain (Resolved)

**Domain 6: Ability to Execute -- Ottoman Arabic OCR/NLP**

Initially flagged as YELLOW. Resolved in-session:
- Active research community with dedicated Ottoman Turkish OCR models
- Osmanlica.com: 88-97% character accuracy on Ottoman script
- LLMs (including Claude) tested for OCR error correction on Ottoman text: 1.16% character error rate
- Elli's approach: existing OCR as base + small fine-tuned LLM for correction and structuring
- Assessment: standard engineering task with known tooling, not a research gap

Upgraded to 4/5 GREEN.

---

## Competitive Watch -- Orhitec (checked 2026-07-07)

Flagged by Mordi: found a product from Orhitec GIS Ltd (Israel, founded 1999, ~140 government/municipal clients) that "does similar things."

**Checked against Domains 3, 4, 7:**
- Product scope: real-time land registry, building permits, property tax, land-use enforcement -- current administrative GIS/ERP for local authorities. No historical aerial imagery, no georeferencing of archival photos, no legal-admissibility evidence chain.
- Searched specifically for ties to Israel Land Authority (רשות/מנהל מקרקעי ישראל), the Custodian of Government Property (ממונה על הרכוש הממשלתי), Ottoman-era records, and unregistered-land/cadastre work -- no documented connection found.
- **Domain 3 (Industry Attractiveness) and Domain 4 (Sustainable Advantage): unchanged.** Orhitec is not in the historical-evidence/disputed-ownership niche; "zero direct rivals" stands.
- **Domain 7 (Connectedness): watch item, not a downgrade.** Orhitec already sits inside the government/municipal procurement relationships this venture needs to break into (27 years of institutional trust). Not a capability threat today -- a distribution-speed risk if they ever extend from "manage current records" to "reconstruct historical ones." Track for re-check if they move toward archival/cadastral or ILA-adjacent products.

---

## Strongest Domain

**Domain 1: Target Segment Benefits -- 5/5**

The pain is irreversible and the economics are clear. When a parcel defaults to the state, the private claimant loses everything permanently. A system that changes that outcome -- even probabilistically -- has a near-unlimited willingness-to-pay ceiling relative to its cost. No other domain in this analysis has this property.

---

## Buyer Segments

| Buyer | Motivation | Path | Stage |
|-------|------------|------|-------|
| ממונה רכוש ממשלתי | Identify unregistered land → establish state ownership | B2G | **MVP** |
| סגן רמ"א (Deputy Head, ILA) | Operational efficiency, fewer appeals | B2G | MVP / Scale |
| Private claimant / developer | Prove ownership and win registration | B2B via law firms | Big Market expansion |

**Corrected sequence:** State is the primary MVP customer. Private claimant segment addressed in the big market expansion phase.

---

## Recommendations

1. **Move immediately to Biti Hills PoC.** Public data only. Reconstruct the missing cultivation evidence retroactively. If the public layer answers what the court couldn't answer -- that is the demo, the pitch, and the proof simultaneously.

2. **MVP customer: the state (ממונה על הרכוש הממשלתי).** The system scans unregistered parcels, finds land with no provable private owner, and surfaces it for state registration. Mordi has the working relationship. PoC triggers the conversation.

3. **Ottoman NLP: don't build from scratch.** Evaluate Osmanlica.com and TrOCR-based models as base. Fine-tune on a small labeled corpus of Jordanian-era property tax records (נסחי מס רכוש). This is a 2-3 month engineering sprint, not a research program.

4. **Big market expansion: private claimants.** Once the state-side product is proven, address the inverse use case -- helping private parties prove ownership. Same engine, opposite query direction. This is the larger long-term market.

---

## Sources

- Ottoman Turkish OCR: [Osmanlica.com deep learning model](https://www.researchgate.net/publication/376091048_A_Deep_Learning_Based_Offline_Optical_Character_Recognition_Model_for_Printed_Ottoman_Turkish)
- LLM + Ottoman text: [Medium -- Can LLMs help with Ottoman Text Recognition?](https://medium.com/@kavaniniosmaniyye/2024-can-llms-help-with-ottoman-text-recognition-and-latinization-39e6d705d849)
- Automatic transcription: [Springer -- Automatic Transcription of Ottoman Documents](https://link.springer.com/chapter/10.1007/978-3-031-70442-0_26)
