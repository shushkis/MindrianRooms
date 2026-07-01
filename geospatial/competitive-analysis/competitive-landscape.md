---
source: larry-analysis
date: 2026-06-24
based-on: mordi-verdict, yonatan-meeting, jtbd-analysis
---

# Competitive Landscape -- Geospatial Intelligence Platform

## What You Actually Replace (Wedge: Legal Disputes)

### Option 3 confirmed: Mordi does it himself in ArcGIS
Current workflow:
- Manual georeferencing of scanned historical photos using ground control points
- Hours per image, error-prone, subjective interpretation
- Output is challengeable in court because it is expert opinion, not provenance chain

You replace: Mordi's manual labor + the risk of subjective interpretation
You keep: Mordi as domain expert and first customer

## The Four Competitive Realities

### 1. No spatial evidence used at all (most common)
The Biti Hills verdict is the proof: the applicant had witnesses, testimony,
an expert document examiner -- and no temporal aerial evidence.
They could not prove 10 years of continuous cultivation.
The committee said: we can see olive trees. We cannot determine who tended them when.

THIS IS YOUR PRIMARY COMPETITION: doing nothing.
You are not replacing a tool. You are creating a category of evidence.

### 2. GIS Contractors (price + turnaround competition)
Exist for large infrastructure projects.
Not accessible for single land dispute cases -- too expensive, too slow.
Do not specialize in historical multi-source fusion.
Do not produce legal provenance chains.

### 3. Licensed Surveyors (credential competition)
Hold legal standing for cadastral surveys.
Cannot analyze historical aerial imagery at scale.
You arm them, you do not replace them.
Potential channel partner, not competitor.

### 4. Enterprise GIS Platforms (Esri ArcGIS, Bentley, etc.)
Tools, not solutions. Require expert operators.
Do not fuse heterogeneous historical sources automatically.
Do not produce provenance-traced legal exhibits.
Mordi uses ArcGIS today -- it is what you replace at the workflow layer.

## Platform Competitive Landscape (Future)

### Agriculture / Change Detection
- Planet Labs (satellite imagery subscription)
- Climate Corp / Bayer (precision ag)
- EOS Crop Monitoring
These are data providers. You are a fusion + inference layer.
They could be inputs to your system, not competitors.

### Infrastructure / Utility GIS
- Esri ArcGIS Utility Network
- Bentley OpenUtilities
- Various national cadastre systems
These solve the present. None solve the historical reconstruction problem.
70% of West Bank land parcels are not registered anywhere.
Same pattern in most developing nations.

### OSINT / Intelligence Platforms
- Palantir (defense, not commercial)
- Maxar (satellite, not fusion)
- Synthesio / Brandwatch (social OSINT, not spatial)
No direct competitor in spatial-temporal open-source fusion for civilian use.

## Your Moat

Not the algorithm. Esri can build the algorithm.
Not the data. Planet can sell the data.

The moat is the ASSEMBLED LAYER:
- Historical aerial photos georeferenced and indexed
- Court decisions parsed and spatially tagged
- Ottoman-era land records digitized and fused
- Testimony corroborated with spatial coordinates
- Provenance chain from 1959 document to 2024 satellite image

Once assembled, this layer has compounding value.
Each new case adds evidence. Each new source strengthens every other case.
Network effect: the base layer becomes more valuable with every dispute resolved.

## First Check

Who writes the first check?
- Mordi's firm: internal efficiency gain (hours saved per case)
- Mordi's network: other land dispute lawyers in Israel (referral)
- Israel Land Authority / Civil Administration: regulatory use case
- Survey Institute partnership: data exchange, not cash (deferred)

Fastest path to revenue: law firms handling land disputes in Judea and Samaria.
Mordi has the network. He IS the channel.

## The Yonatan Insight on Liability

IFF has a liability problem: system kills wrong person, who is responsible?
Geospatial exhibits do NOT have this problem.
The system does not decide ownership. It produces evidence.
The judge decides. The lawyer decides. The system provides the provenance chain.
Liability stays with the human decision-maker.
This is why the descriptive (not generative) architecture was the right call.
