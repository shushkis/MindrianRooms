---
title: Data Source Inventory -- MVP Layer Map
status: draft
source: larry-session
date: 2026-07-12
section: solution-design
---

# Data Source Inventory -- MVP Layer Map

## Archive Census -- Land Registration Evidence Sources (2026-07-12 research pass)

Researched and sourced below. Chip meaning: **PUBLIC** = a private party can access without being party to the specific case. **CLOSED** = access requires standing (party/lawyer/authorized requester) or government role. **VERIFY** = found via search, not independently confirmed -- treat as a lead, not a fact, until checked directly with the institution.

### 1. Registry / Tax Records

| Source | Physical / Digitized | Access | Notes |
|--------|----------------------|--------|-------|
| Israel Land Authority (רמ"י) online property database | Digitized | **PUBLIC** (partial) | Public info request system under the RMI Law 1960 + Data Regs 2004. **Explicitly excludes Judea & Samaria properties and agricultural/moshav land** -- confirmed on the RMI service page. Not usable for HaMuzim's core geography. |
| Ministry of Justice "מקרקעין ברשת" / Tabu extract (נסח טאבו) | Digitized | **PUBLIC** | Covers registered land inside the Green Line. Historical extract option shows past computerized activity. Irrelevant to *unregistered* parcels, which is HaMuzim's whole market -- but useful as a negative-check ("is this parcel already registered elsewhere?"). |
| Judea & Samaria first-registration committee files (ועדת הרישום הראשון, under Jordanian Law No. 6/1964) | **Physical, handwritten, Arabic** | **CLOSED** | Confirmed via Civil Administration sourcing: conducted like the Israeli registry but handwritten, in Arabic, **not computerized, and not open for public inspection.** This is the actual adjudication record HaMuzim ultimately feeds -- and it is the one layer the product cannot ingest directly. Reinforces the room's existing PoC strategy: reconstruct evidence from *outside* this closed file, then hand the state/court a package that stands on its own. |
| Custodian of Government Property (ממונה על הרכוש הממשלתי) records | Physical (internal) | **CLOSED** | Manages state/abandoned land declarations in J&S since 1980. No public database found; State Comptroller reports about the unit exist publicly (oversight-level detail, not case-level data) -- see library.mevaker.gov.il report cited below. |
| Jordanian Dept. of Lands and Survey (Amman) historical registry (pre-1967, unified E/W Bank 1951-52) | Physical, partial digitization (Jordan side) | **VERIFY** | Jordan's DLS holds the pre-1967 unified registry lineage HaMuzim's chain-of-title work traces back to. No confirmed public online access path for West Bank-era records specifically -- needs a direct inquiry, not assumed from Jordan's domestic e-services portal. |
| Jordanian property tax record (נסח מס רכוש) -- the 1950s-60s "historical holder" document central to Module 1 | Physical | **VERIFY** | No public digitized index found. This is held by claimants/heirs as personal documents, or referenced inside the closed committee files above -- not a standalone public archive. |

### 2. Maps & Cadastral Survey Archives

| Source | Physical / Digitized | Access | Notes |
|--------|----------------------|--------|-------|
| **Palestine Open Maps** (palopenmaps.org) | Digitized | **PUBLIC** | British Mandate 1940s survey sheets (up to 1:20,000), searchable/downloadable, public domain (UK Copyright, Designs & Patents Act 1988). Shows property boundaries, population centers, topography pre-1948. Already flagged high-value in this room -- confirmed. |
| National Library of Israel -- Eran Laor Map Collection | Digitized (partial) | **PUBLIC** | ~1,500 maps of the Land of Israel/Jerusalem, searchable via nli.org.il. Depth of West Bank-specific coverage not yet verified. |
| Hebrew University Geography Dept. -- map & aerial photo collection | Physical + some digitized | **VERIFY** (likely research-access, not fully open) | geography.huji.ac.il hosts a dedicated maps/aerial-photo archive page; access terms for external (non-university) requesters unconfirmed. |
| Digital Archive of the Middle East (Exeter) -- Survey of Palestine map sheets | Digitized | **PUBLIC** | 39 digitized Jerusalem-area sheets from the British Mandate Survey of Palestine, sourced partly from the Israeli National Library and David Rumsey collection. |
| Jordan DLS cadastral maps (1:2,500 -- 1:20,000 scale, produced post-1952 unification) | Physical | **CLOSED/VERIFY** | Same access gap as the registry records above. |
| OpenStreetMap extract (Geofabrik) | Digitized | **PUBLIC** | Current-day only, no historical value, but useful as the present-day ground-truth base layer under historical overlays. |

### 3. Aerial Photography

| Source | Physical / Digitized | Access | Notes |
|--------|----------------------|--------|-------|
| Survey of Israel (מפ"י) National Aerial Photo Archive | **Physical (negatives) + partial digitization** | **PUBLIC, but paid/order-based** | This is the big one: ~850,000-1,000,000+ aerial photos, 1917-2018. ~600,000 B/W scanned to digital; ~18,500 pre-1948 photos scanned at 600dpi in the last decade. Order via gov.il "Ordering Aerial Photography Products" service -- **confirmed West Bank/Gaza area coverage** per MAPI's own scope description. This is the primary evidence source for HaMuzim Module 3 (cultivation/possession timeline). Majority of the archive is still physical negatives, not yet digitized -- a real bottleneck if HaMuzim needs bulk/API access rather than one-parcel-at-a-time ordering. |
| Hebrew University Geography Dept. aerial photo archive | Physical | **VERIFY** | Possible secondary/overlapping source to MAPI; access terms unconfirmed. |

### 4. State & Institutional Archives (context, not raw geo-evidence)

| Source | Physical / Digitized | Access | Notes |
|--------|----------------------|--------|-------|
| Israel State Archives (ארכיון המדינה) | Physical, active digitization project (selected high-value collections) | **PUBLIC** (digitized portion) + reading room for the rest | General national archive; digitization is selective/curated, not a bulk land-records dump. Useful for institutional/policy corroboration, not parcel-level evidence. |
| State Comptroller reports on the Custodian of Government Property unit (J&S) | Digitized | **PUBLIC** | library.mevaker.gov.il -- oversight-level detail on how the Custodian's unit operates; helpful for understanding the buyer's internal process, not a data source for the product itself. |

### 5. Ottoman-Era Records -- Important Caveat

Searched Turkey's TARBİS system (Tapu ve Kadastro Genel Müdürlüğü) -- **~3M digitized Ottoman-script title deed records, publicly accessible to citizens and lawyers.** This looked promising but **does not appear to cover the Palestine/West Bank region**: TARBİS digitizes records held *within Turkey's own land registry archive* (Ankara/Istanbul), for land inside modern Turkey's borders. The Ottoman-era records relevant to West Bank parcels would historically sit in the Ottoman Imperial Archives (İstanbul, Devlet Arşivleri -- Tapu Tahrir Defterleri covering the whole empire including the Palestine sancaks) or were inherited into the Jordanian/British Mandate successor registries already listed above. **This needs a direct verification query to the Turkish state archives** before treating it as a usable source -- flagging as unconfirmed rather than filing it as fact.

## The Strategic Read

The layer HaMuzim ultimately has to satisfy -- the first-registration committee file itself -- is **closed by design**: handwritten, Arabic-only, not computerized, not open to public inspection. That is not a gap to route around opportunistically; it is the permanent shape of the problem. HaMuzim's public-data PoC strategy (reconstruct evidence *outside* the closed file, hand the state/court a package that stands on its own) is the only architecture that works given this constraint -- this research confirms rather than merely assumes it.

The one archive that both matters most and is least accessible in bulk today is the **MAPI aerial photo archive**: publicly orderable, but still majority physical negatives and order-per-photo rather than API/bulk access. That is the real MVP infrastructure risk, not the Ottoman OCR question already resolved in the Mullins session.

## Public Layer (Build Now, No Permission Required)

| Source | Type | Coverage | Notes |
|--------|------|----------|-------|
| Survey of Israel (MAPI) aerial photo archive | Aerial / orthophoto | 1917-present, partial digitization, order-based | Confirmed West Bank coverage; primary Module 3 source |
| PalOpenMaps.org | Historical cadastral maps | British Mandate 1940s + earlier | Confirmed public domain, searchable/downloadable |
| National Library of Israel -- Eran Laor Map Collection | Historical maps | ~1,500 maps, depth for J&S unverified | |
| Court decisions + land records | Legal corpus | Israeli courts | Public filings; spatial tagging needed |
| Open satellite imagery | Raster | Current + recent historical | Sentinel-2, Landsat, others |
| OpenStreetMap (Geofabrik extract) | Vector | Current only | Ground-truth base layer |

## Restricted / Closed Layer (Permission Request Required, or Structurally Closed)

| Source | Type | Holder | Status |
|--------|------|--------|--------|
| J&S first-registration committee files | Case-level legal/evidentiary record | Land Registration Officer, Civil Administration | **Structurally closed** -- not a permission problem, an access-model problem |
| Custodian of Government Property records | State-land declarations | Civil Administration | Closed; oversight reports only |
| Mordi's case files | Legal case evidence | Mordi Verzberger | Requires Mordi authorization + client consent |
| Jordan DLS pre-1967 archive | Registry + cadastral maps | Jordan Dept. of Lands and Survey | Access path unconfirmed -- needs direct inquiry |

## Key Insight: Biti Hills PoC May Not Require Restricted Layer

The Biti Hills verdict is public. The missing evidence in that case was temporal aerial proof of continuous cultivation -- which falls in the public layer (Survey Institute aerials + PalOpenMaps historical cadastral).

**PoC hypothesis:** Reconstruct the missing evidence retroactively using public data only.
If the public layer answers the question the court couldn't answer -- that IS the demo.
No restricted data needed to prove the system.

## MVP Scope Decision (Pending)

- Phase 1: Build fusion pipeline on public layer only
- Phase 2: Request access to restricted archives once working system exists
  - Stronger ask: "Here is what the system produces on public data. Access unlocks X more."
- Fallback: If public layer is insufficient for Biti Hills, identify alternative case with full public evidence coverage

## Next Step: Enumerate GIS Layers

"Several GIS layers" needs to become a specific list with coverage areas and access terms.
Which layers are in scope?
