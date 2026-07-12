---
title: Legal Proceeding Workflow -- Full Map
status: draft
source: larry-session
date: 2026-07-01
section: problem-definition
participants: Mordi Verzberger, Larry
---

# Legal Proceeding Workflow -- Full Map

## The Proceeding Structure

A land registration proceeding before the committee involves four stages:

1. **תצהירים** -- Affidavits submitted by all parties with supporting documents
2. **דיון הוכחות** -- Evidence hearing: cross-examination of affiants + expert witnesses
3. **עדים מומחים** -- Two expert types:
   - כתבי יד ואותנטיות -- Handwriting and document authenticity experts
   - מומחים לפיענוח תצ"א -- Aerial photo interpretation experts (testify on cultivation extent over time)
4. **סיכומים** -- Final summations
5. **החלטה** -- Decision based on all collected material

---

## The Three Legal Questions (Framework for HaMuzim)

The committee must rule on three distinct questions. Each maps to a product module.

---

### Question 1: רכישה -- Legal Acquisition (Module 1)

**The question:** Does the applicant present a lawful basis for holding the land under equity law?

**Standard of proof:**
- Jordan-era property tax record (נסח מס רכוש) showing historical holder in the 1950s-60s
- Chain of title from that holder to the current applicant:
  - Purchase agreements (הסכמי מכר)
  - Powers of attorney (יפויי כח)
  - Inheritance orders (צווי ירושה)

**Common failure modes:**
- Long, complex chains with multiple heirs (ריבוי יורשים)
- Double sale claims (מכירה כפולה) -- same parcel sold twice by same seller
- Missing links in the documentary chain

**This is the most frequent failure point.** A significant percentage of cases collapse here.

**HaMuzim Module 1:**
- OCR and parse Ottoman/Jordanian-era documents automatically
- Build visual chain-of-title graph: who held, when, what transferred the right
- Detect contradictions automatically (double sale = same seller, same parcel, two transactions)
- Output: structured timeline replacing a pile of documents

---

### Question 2: מיקום -- Physical Location (Module 2)

**The question:** Where exactly is this parcel in space, and does it match what the tax record describes?

**Standard of proof:**
- The property tax record cites a מווקע -- a large area containing many parcels (gives general orientation)
- Applicant must prove the specific parcel with its claimed boundaries corresponds to the מווקע entry
- Evidence used:
  - Neighbor testimonies
  - Mukhtar certificates (תעודות מוכתאר)
  - Historical maps
  - Field inspection and boundary survey (הליך כשף)

**Common failure modes:**
- Cannot coherently locate the parcel boundaries in space
- Mismatch between the מווקע description and the claimed physical location

**HaMuzim Module 2:**
- Convert מווקע name + textual boundary descriptions → coordinates (Text → Geo)
- Cross-reference historical maps with current orthophotos
- Neighbor testimony corroborated against spatial evidence
- This is the exact bidirectional Text↔Geo bridge already in the architecture

---

### Question 3: עיבוד וחזקה -- Cultivation and Possession (Module 3)

**The question:** Has the applicant cultivated and possessed the land for 10 continuous years?
(Required under Section 78, Ottoman Land Law)

**Standard of proof:**
- Aerial photo interpretation expert (מומחה לפיענוח תצ"א)
- Testifies on cultivation evidence visible in historical aerial photography
- Field visits, witness testimony on possession

**Common failure modes:**
- Cannot produce temporal aerial evidence of continuous cultivation
- Expert opinion is challengeable under cross-examination (subjective interpretation)
- Recurring pattern seen in practice: applicant has witnesses, document expert, and testimony -- but cannot prove 10 years of continuous cultivation. Lost.

**HaMuzim Module 3:**
- Automated aerial photo time series: 1959 → 1967 → 1972 → 1984 → ... → 2024
- Cultivation detection per year with confidence scoring
- Replaces expert opinion with provenance-traced evidence
- Expert opinion = challengeable. Provenance-traced observation = exhibit.

---

## The Integration Insight

The three modules are not independent. The most powerful use case is cross-module resolution:

**Double sale scenario:** Module 1 detects contradiction (same seller, two buyers).
Module 3 resolves it: who was actually on the land? Who cultivated? Who built the fence?
Geography adjudicates what the documents cannot.

**The product does not solve three separate questions.
It resolves the contradictions BETWEEN the questions.**

---

## The Market Insight

**"A significant percentage of cases ends without registration due to evidentiary difficulties."**

This is not inefficiency. It is a permanent, irreversible outcome:
- Without registration → land defaults to state ownership
- Private claimant loses everything, even if the underlying claim is legitimate

HaMuzim does not make the process faster.
**It changes outcomes.** Cases that today end in "no registration" may end differently.

---

## Product Physical Description

**One screen. Three zones.**

**Left -- Evidence Timeline:**
Selected parcel. System displays available sources by year:
1959 ✓ / 1967 ✓ / 1972 ✓ / 1984 ✓ / 2003 ✓ / 2024 ✓
Each year: source, confidence level, detected features.

**Center -- Map:**
Current satellite/orthophoto as ground truth.
Historical evidence as overlay layers: vanished fences, olive trees, structures, cultivation marks.
Each layer tagged to year and source.

**Right -- Observation List:**
"1967, aerial survey from Survey Institute archive -- olive trees visible in northern three-quarters. Confidence: high."
"1984, Landsat satellite -- active cultivation marks. Confidence: medium."

**Output -- Legal Exhibit:**
One click → PDF with full timeline, all sources, all findings, complete provenance chain.
Ready for court submission.

---

## Open Items

- [ ] Pick a suitable anchor case with the user for PoC/demo work (do not default to a previously-discussed case -- standing constraint, `.context/rejection-log.md`, 2026-07-12)
- [ ] Quantify: how many cases per year end without registration across all committees in Judea and Samaria?
- [ ] Define MVP scope: which module is the entry point for the first demo?
- [ ] Pricing model for private claimant segment
- [ ] MVP pitch to סגן רמ"א: defined next session
