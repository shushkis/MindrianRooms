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
How can we help land claimants prove historical ownership, under circumstances where the evidence exists but is scattered across disconnected archives unlinked to geographic coordinates, in order to secure land registration before the state claims it by default?

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

## Strongest Domain

**Domain 1: Target Segment Benefits -- 5/5**

The pain is irreversible and the economics are clear. When a parcel defaults to the state, the private claimant loses everything permanently. A system that changes that outcome -- even probabilistically -- has a near-unlimited willingness-to-pay ceiling relative to its cost. No other domain in this analysis has this property.

---

## Buyer Segments

| Buyer | Motivation | Path | Revenue Speed |
|-------|------------|------|---------------|
| סגן רמ"א (Deputy Head, ILA) | Operational efficiency, fewer appeals | B2G, slow | Slow |
| ממונה רכוש ממשלתי | State land asset identification | B2G, slow | Slow |
| Private claimant / developer | Win the case | B2B via law firms, fast | **Fast** |

First revenue: private claimant segment. No procurement process. Law firm pays.

---

## Recommendations

1. **Move immediately to Biti Hills PoC.** Public data only. Reconstruct the missing cultivation evidence retroactively. If the public layer answers what the court couldn't answer -- that is the demo, the pitch, and the proof simultaneously.

2. **First revenue target: private claimant segment.** Approach land dispute law firms in Mordi's network. Per-case pricing at 1-2% of asset value (20-50K NIS). No procurement required.

3. **Ottoman NLP: don't build from scratch.** Evaluate Osmanlica.com and TrOCR-based models as base. Fine-tune on a small labeled corpus of Jordanian-era property tax records (נסחי מס רכוש). This is a 2-3 month engineering sprint, not a research program.

4. **Government approach: sequence after PoC.** סגן רמ"א has the relationship (Mordi). The trigger is "something serious to present." The PoC IS that something.

---

## Sources

- Ottoman Turkish OCR: [Osmanlica.com deep learning model](https://www.researchgate.net/publication/376091048_A_Deep_Learning_Based_Offline_Optical_Character_Recognition_Model_for_Printed_Ottoman_Turkish)
- LLM + Ottoman text: [Medium -- Can LLMs help with Ottoman Text Recognition?](https://medium.com/@kavaniniosmaniyye/2024-can-llms-help-with-ottoman-text-recognition-and-latinization-39e6d705d849)
- Automatic transcription: [Springer -- Automatic Transcription of Ottoman Documents](https://link.springer.com/chapter/10.1007/978-3-031-70442-0_26)
