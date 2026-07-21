---
title: "Source Verification Audit -- Dual-Use Market Table Numbers"
status: active
source: larry-session
date: 2026-07-21
section: market-analysis
priority: high
supersedes_note: "Audits every numerical claim used in the dual-use market-definition table drafted this session. Distinguishes room-internal sourced facts, freshly-verified facts, corroborated-but-not-confirmed figures, and pure domain assumptions. One figure (PCBS/B'Tselem 326K/1.8M dunams) failed to reproduce on a fresh check -- flagged, not silently kept."
---

# Source Verification Audit

## Verified -- External, Linked Sources Already in the Room

| # | Claim | Sources |
|---|---|---|
| 1 | ₪244.1M (~$79M) government budget for the Land Title Settlement Administration, 2026-2030 | [UPI](https://www.upi.com/Top_News/World-News/2026/02/16/west-bank-land-registration-advances/2611771256675/), [Times of Israel](https://www.timesofisrael.com/cabinet-oks-new-west-bank-land-registration-process-critics-decry-de-facto-annexation/), [Peace Now](https://peacenow.org.il/en/government-decision-land-registration), [Al Jazeera](https://www.aljazeera.com/news/2026/2/16/israel-to-restart-land-registration-in-west-bank-what-that-means), [FMEP](https://fmep.org/resource/settlement-annexation-report-february-20-2026/) |
| 2 | Area C = ~3.3M dunams total; ~1.9M (~58%) unregistered; target = 15% of unregistered in 5 years (~290,000 dunams) | Same 5 sources as above |
| 3 | LTSA mechanism itself takes ~18 months to establish; each individual plot ~1.5+ years | Same 5 sources as above |

## Freshly Verified This Pass (were previously uncited in the room)

| # | Claim | What I checked | Result |
|---|---|---|---|
| 4 | Ottoman Land Code Article 78 -- 10 years' continuous possession/cultivation of miri or waqf land confers possession right | Fresh WebSearch against [Ottoman Land Code of 1858 -- Wikipedia](https://en.wikipedia.org/wiki/Ottoman_Land_Code_of_1858) and corroborating legal-history sources | **Confirmed.** The room's legal framework claim (Module 3 / Question 3) is accurate. Note: applies to miri/waqf land specifically, not all land categories -- worth keeping that scope caveat in any external-facing material. |
| 5 | BlackSky total funding ~$440M | Fresh WebSearch, Crunchbase-style aggregators | **Confirmed** -- $440.4M, matches closely. |

## Partially Verified -- Corroborating Source Exists, But Doesn't Match the Precise Claim

| # | Claim | What's actually sourced | Gap |
|---|---|---|---|
| 6 | Private-claimant willingness-to-pay: 20,000-50,000 NIS/case | [Israeli Lawyer Price List](https://israelcrossborderfamilylaw.com/israeli-lawyer-price-list-a-2026-guide-to-legal-fees-costs/) and [pz-law.co.il](https://pz-law.co.il/en/blog-en/how-much-do-israeli-lawyers-charge/) show **30,000-100,000 NIS** for "especially difficult" real-estate registration cases | That's a *general legal fee* bracket, not a quote for an evidentiary-reconstruction report. It's directional support (this room's figure sits below it, which is the conservative direction), not proof of willingness-to-pay for *this specific service*. The 20-50K figure itself remains Mordi/Avi's domain estimate. |
| 7 | Planet Labs total funding ~$1B | Fresh WebSearch: Crunchbase-style trackers show **~$602M** in venture funding; a different tracker ([space-startups.org](https://www.space-startups.org/startup/planet/)) lists **$1B**, likely including post-2021 SPAC/IPO proceeds | Directionally right only if public-market capital is included. If citing this externally, say "~$600M in venture funding, ~$1B including its 2021 public listing" rather than a flat $1B. |

## Not Verified -- No External Source Found, or a Fresh Check Failed to Reproduce the Number

| # | Claim | Status |
|---|---|---|
| 8 | "Palestinians farm ~326,000 of ~1.8M accessible dunams in Area C" (attributed to "PCBS and B'Tselem data") | **Could not reproduce.** The room file that states this (`tam-pricing-gap-closure-2026-07.md`) gives no URL. A fresh search surfaced *different* PCBS/B'Tselem-adjacent figures instead: ~931,500 dunams of high/medium agricultural value actually farmed by Palestinians (of 2,072,000 dunams so classified, per PCBS Land Day reporting) -- roughly 17% of the whole West Bank, not the 326K/1.8M pairing in the room. Also found: ~1.2M dunams of declared state land in Area C (36.5% of Area C), and a B'Tselem 2010 figure of 119,500 dunams stranded west of the separation barrier. **None of these match the room's 326,000/1.8M figure.** Recommend either finding the original source that produced 326K/1.8M, or replacing it with one of the figures that *does* have a live citation above. Do not carry 326,000/1.8M forward into external material until this is resolved. |
| 9 | "Several million NIS" typical disputed-parcel value | Pure domain assertion (Mordi/Avi). No external source attempted or found -- flagged as internal judgment, not market data. |
| 10 | Annual case volume at Objections Committees / property-custodian office (the actual SAM input) | Explicitly **not found**, after three independent room research passes (`tam-pricing-gap-closure-2026-07.md`, `market-analyst-report-2026-07.md`, `competitive-refresh-2026-07.md`). Not a new gap -- already correctly flagged in the room as requiring a direct phone call, not more search. |
| 11 | "18 startups raising [in earth observation] in the last 12 months" | Attributed only to "one industry tracker," unnamed, no link, in both `market-analyst-report-2026-07.md` and `competitive-refresh-2026-07.md`. Could not independently confirm this count in this pass. |

## Net Read

Three genuinely load-bearing numbers -- the ₪244.1M government budget, the Area C size/registration-target figures, and the Ottoman Land Law 10-year rule -- are solid: either already well-sourced or now freshly confirmed. The private-claimant pricing (20-50K NIS) is a reasonable, conservatively-positioned estimate but still Mordi/Avi's judgment, not market data. The one number that should stop being repeated as-is is the PCBS/B'Tselem 326,000/1.8M dunam figure -- it did not reproduce on a direct check, and better-sourced alternatives already exist above.

## Open Items

- [ ] Find the original source for the 326,000/1.8M dunam figure, or retire it in favor of a cited alternative
- [ ] Decide whether to cite Planet's funding as ~$602M (venture) or ~$1B (incl. public listing) depending on the audience
- [ ] The private-claimant 20-50K NIS figure still needs a real claimant/law-firm conversation to move from "reasonable estimate" to "verified" -- flagged already in `buyer-analysis.md`, unchanged by this audit
