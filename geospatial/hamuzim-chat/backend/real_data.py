"""GroundTruth -- real, live data sources (as opposed to mock_data.py's
fictional demo parcels).

First one: OpenStreetMap, via its public Nominatim geocoding API. Confirmed
real and free (checked directly against OSM/Nominatim documentation, not
assumed) -- no API key needed, but Nominatim's usage policy requires a
descriptive User-Agent identifying the calling application, and asks for a
contact point. Rate limit on the public instance is ~1 request/second;
this is a low-volume demo, not a bulk client, so that's not a constraint
here, but don't loop this in a script.

This is intentionally NOT wired into the rule-based/offline fallback paths
(_mock_chat_reply in main.py, mockChatReply in the frontend) -- those
exist specifically so the demo still works with no network dependency at
all. Adding a live HTTP call to Nominatim into the "works offline" fallback
would defeat the point of having a fallback. Real-data lookups only happen
on the live Gemini path, and only when Gemini decides to call this tool.

Everything else in `data-inventory.md`'s "Public Layer" table (Palestine
Open Maps, MAPI aerial photos, NLI Eran Laor collection) is confirmed
public-domain/public-access in principle, but none of them expose a live
queryable API the way OSM does -- they're browse-and-download resources
(PalOpenMaps, NLI) or literally order-per-photo with no API at all (MAPI).
Wiring those in means a one-time data-prep pass (download + embed specific
files) or, for MAPI, an actual archive order with real cost and turnaround
-- see public-archive-poc-concept.md. Not something this function fakes.
"""

import requests

NOMINATIM_URL = "https://nominatim.openstreetmap.org/search"

# Nominatim's usage policy requires a real, descriptive User-Agent that
# identifies the app -- update the contact detail if this ever runs beyond
# a class demo.
_USER_AGENT = "HaMuzimChat-ClassDemo/0.1 (educational prototype, IRIS 2026 program)"


def query_openstreetmap(query: str) -> list[dict]:
    """Look up a real place/address/location by name via OpenStreetMap's
    live public Nominatim API. Returns REAL, current-day geographic data --
    NOT part of the fictional demo parcel universe in mock_data.py. Bias
    results toward the West Bank / Israel region since that's this room's
    actual area of interest, without hard-restricting to it (a bounding-box
    hint, not a filter, so a query outside the region still returns
    something rather than nothing).
    """
    if not query or not query.strip():
        return []

    resp = requests.get(
        NOMINATIM_URL,
        params={
            "q": query.strip(),
            "format": "jsonv2",
            "addressdetails": 1,
            "limit": 3,
            # Loose viewbox over Israel/West Bank as a soft ranking hint,
            # not a hard filter (bounded=0 leaves it a hint, not exclusion).
            "viewbox": "34.2,33.4,35.9,29.4",
            "bounded": 0,
        },
        headers={"User-Agent": _USER_AGENT},
        timeout=8,
    )
    resp.raise_for_status()
    results = resp.json()

    return [
        {
            "display_name": r.get("display_name"),
            "lat": r.get("lat"),
            "lon": r.get("lon"),
            "place_type": r.get("type"),
            "class": r.get("class"),
            "address": r.get("address", {}),
            "osm_id": r.get("osm_id"),
            "source": "OpenStreetMap (Nominatim, live) -- real, current-day data, not part of the demo evidence set",
        }
        for r in results
    ]
