# HaMuzim Chat -- Mock data layer
#
# No real database, no real satellite/document pipeline. This is a small,
# fully fictional set of parcels (all clearly labeled "Demo") used to prove
# out cross-case, cited natural-language search. Parcel P-001 is the exact
# same "Demo Parcel - Gush Etzion" dataset used by the sibling hamuzim-app,
# so the two prototypes agree on at least one shared case. Parcels P-002
# through P-006 are invented purely to give the search tool something to
# differentiate between -- they are NOT modeled on any specific real site.
#
# Each observation carries `signal_tags` so the search tool can filter by
# signal type (cultivation / construction / abandonment / document) without
# any NLP -- it's a plain list-comprehension filter, not real IR.

PARCELS = [
    {
        "id": "P-001",
        "name": "Demo Parcel - Gush Etzion",
        "coordinates": [
            [35.1180, 31.6520],
            [35.1235, 31.6520],
            [35.1235, 31.6478],
            [35.1180, 31.6478],
            [35.1180, 31.6520],
        ],
        "center": [35.12075, 31.6499],
        "primary_signal": "cultivation",
        "observations": [
            {
                "year": 1959,
                "source": "Israeli Survey Institute",
                "type": "aerial",
                "finding": "Terraced agricultural land visible. Stone boundary walls present.",
                "confidence": "high",
                "cultivation_pct": 62,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1967,
                "source": "Israeli Survey Institute",
                "type": "aerial",
                "finding": "Olive grove in northern section. Active cultivation marks in southern section.",
                "confidence": "high",
                "cultivation_pct": 70,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1972,
                "source": "Israeli Survey Institute",
                "type": "aerial",
                "finding": "Continued cultivation. Boundary consistent with 1967 survey.",
                "confidence": "high",
                "cultivation_pct": 69,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1984,
                "source": "Landsat 4",
                "type": "satellite",
                "finding": "NDVI signal indicates active vegetation. 68% of polygon cultivated.",
                "confidence": "medium",
                "cultivation_pct": 68,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1993,
                "source": "PalOpenMaps cadastral record",
                "type": "document",
                "finding": "Parcel referenced in Ottoman-era mawat classification. Boundary description matches current claim.",
                "confidence": "medium",
                "cultivation_pct": 55,
                "signal_tags": ["document"],
            },
            {
                "year": 2003,
                "source": "Landsat 7",
                "type": "satellite",
                "finding": "Reduced cultivation signal. Consistent with olive grove dormancy cycle, not abandonment.",
                "confidence": "medium",
                "cultivation_pct": 41,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2012,
                "source": "Sentinel-2",
                "type": "satellite",
                "finding": "Active agricultural signal resumed. 74% of polygon shows cultivation markers.",
                "confidence": "high",
                "cultivation_pct": 74,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2024,
                "source": "Sentinel-2",
                "type": "satellite",
                "finding": "Current orthophoto: parcel shows active land use. Boundary features intact.",
                "confidence": "high",
                "cultivation_pct": 78,
                "signal_tags": ["cultivation"],
            },
        ],
    },
    {
        "id": "P-002",
        "name": "Parcel B - North Ridge (Demo)",
        "coordinates": [
            [35.1290, 31.6560],
            [35.1340, 31.6560],
            [35.1340, 31.6522],
            [35.1290, 31.6522],
            [35.1290, 31.6560],
        ],
        "center": [35.1315, 31.6541],
        "primary_signal": "cultivation",
        "observations": [
            {
                "year": 1965,
                "source": "Israeli Survey Institute",
                "type": "aerial",
                "finding": "Uniform grove pattern across the full polygon, no gaps.",
                "confidence": "high",
                "cultivation_pct": 81,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1990,
                "source": "Landsat 5",
                "type": "satellite",
                "finding": "Cultivation signal stable relative to 1965 baseline.",
                "confidence": "medium",
                "cultivation_pct": 79,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2010,
                "source": "Sentinel-2",
                "type": "satellite",
                "finding": "Continuous cultivation, no interruption detected across the full record.",
                "confidence": "high",
                "cultivation_pct": 83,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2023,
                "source": "Sentinel-2",
                "type": "satellite",
                "finding": "Cultivation signal remains strong. No structures detected.",
                "confidence": "high",
                "cultivation_pct": 85,
                "signal_tags": ["cultivation"],
            },
        ],
    },
    {
        "id": "P-003",
        "name": "Parcel C - Terrace Cluster (Demo)",
        "coordinates": [
            [35.1150, 31.6455],
            [35.1195, 31.6455],
            [35.1195, 31.6420],
            [35.1150, 31.6420],
            [35.1150, 31.6455],
        ],
        "center": [35.11725, 31.64375],
        "primary_signal": "construction",
        "observations": [
            {
                "year": 1970,
                "source": "Israeli Survey Institute",
                "type": "aerial",
                "finding": "Open terraced land, no structures present.",
                "confidence": "high",
                "cultivation_pct": 58,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2000,
                "source": "Landsat 7",
                "type": "satellite",
                "finding": "Cultivation signal steady, no built structures visible.",
                "confidence": "medium",
                "cultivation_pct": 52,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2016,
                "source": "Sentinel-2",
                "type": "satellite",
                "finding": "New rectangular structure footprint detected in southeast corner of polygon.",
                "confidence": "high",
                "cultivation_pct": 40,
                "signal_tags": ["construction"],
            },
            {
                "year": 2021,
                "source": "Sentinel-2",
                "type": "satellite",
                "finding": "Structure footprint expanded. Access track visible connecting to nearby road.",
                "confidence": "high",
                "cultivation_pct": 30,
                "signal_tags": ["construction"],
            },
        ],
    },
    {
        "id": "P-004",
        "name": "Parcel D - Valley Access (Demo)",
        "coordinates": [
            [35.1080, 31.6480],
            [35.1120, 31.6480],
            [35.1120, 31.6448],
            [35.1080, 31.6448],
            [35.1080, 31.6480],
        ],
        "center": [35.11, 31.6464],
        "primary_signal": "abandonment",
        "observations": [
            {
                "year": 1968,
                "source": "Israeli Survey Institute",
                "type": "aerial",
                "finding": "Active cultivation across most of the polygon.",
                "confidence": "high",
                "cultivation_pct": 66,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1996,
                "source": "Landsat 5",
                "type": "satellite",
                "finding": "Cultivation signal declining relative to 1968 baseline.",
                "confidence": "medium",
                "cultivation_pct": 44,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2015,
                "source": "Sentinel-2",
                "type": "satellite",
                "finding": "Cultivation signal further reduced. No dormancy-cycle pattern -- decline is monotonic across the record.",
                "confidence": "medium",
                "cultivation_pct": 22,
                "signal_tags": ["abandonment"],
            },
            {
                "year": 2020,
                "source": "Sentinel-2",
                "type": "satellite",
                "finding": "Minimal cultivation signal remaining. Vegetation pattern consistent with unmanaged scrubland.",
                "confidence": "medium",
                "cultivation_pct": 9,
                "signal_tags": ["abandonment"],
            },
            {
                "year": 2024,
                "source": "Sentinel-2",
                "type": "satellite",
                "finding": "No recovery observed. Cultivation signal remains negligible.",
                "confidence": "high",
                "cultivation_pct": 6,
                "signal_tags": ["abandonment"],
            },
        ],
    },
    {
        "id": "P-005",
        "name": "Parcel E - East Slope (Demo)",
        "coordinates": [
            [35.1260, 31.6470],
            [35.1300, 31.6470],
            [35.1300, 31.6440],
            [35.1260, 31.6440],
            [35.1260, 31.6470],
        ],
        "center": [35.128, 31.6455],
        "primary_signal": "document",
        "observations": [
            {
                "year": 1962,
                "source": "Israeli Survey Institute",
                "type": "aerial",
                "finding": "Partial cultivation, boundary markers unclear in aerial imagery.",
                "confidence": "low",
                "cultivation_pct": 35,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1991,
                "source": "PalOpenMaps cadastral record",
                "type": "document",
                "finding": "Two overlapping cadastral claims reference this polygon. Boundary description ambiguous.",
                "confidence": "low",
                "cultivation_pct": None,
                "signal_tags": ["document", "dispute"],
            },
            {
                "year": 2008,
                "source": "Landsat 7",
                "type": "satellite",
                "finding": "Mixed-use signal, part cultivated, part bare ground.",
                "confidence": "medium",
                "cultivation_pct": 38,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2022,
                "source": "District land registry filing",
                "type": "document",
                "finding": "Registry filing notes unresolved boundary dispute between two claimants.",
                "confidence": "low",
                "cultivation_pct": None,
                "signal_tags": ["document", "dispute"],
            },
        ],
    },
    {
        "id": "P-006",
        "name": "Parcel F - Boundary Strip (Demo)",
        "coordinates": [
            [35.1210, 31.6540],
            [35.1250, 31.6540],
            [35.1250, 31.6515],
            [35.1210, 31.6515],
            [35.1210, 31.6540],
        ],
        "center": [35.123, 31.65275],
        "primary_signal": "construction",
        "observations": [
            {
                "year": 1975,
                "source": "Israeli Survey Institute",
                "type": "aerial",
                "finding": "Narrow cultivated strip along the parcel boundary.",
                "confidence": "medium",
                "cultivation_pct": 48,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2005,
                "source": "Landsat 7",
                "type": "satellite",
                "finding": "Cultivation signal steady along boundary strip.",
                "confidence": "medium",
                "cultivation_pct": 45,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2019,
                "source": "Sentinel-2",
                "type": "satellite",
                "finding": "Small structure footprint detected encroaching on the boundary strip.",
                "confidence": "high",
                "cultivation_pct": 33,
                "signal_tags": ["construction"],
            },
            {
                "year": 2024,
                "source": "Sentinel-2",
                "type": "satellite",
                "finding": "Structure footprint unchanged since 2019. Boundary encroachment unresolved.",
                "confidence": "high",
                "cultivation_pct": 33,
                "signal_tags": ["construction"],
            },
        ],
    },
    {
        "id": "P-007",
        "name": "Biti Hills -- Demo Reconstruction (inspired by the real committee case; details fictionalized for this prototype)",
        "coordinates": [
            [35.1050, 31.6600],
            [35.1095, 31.6600],
            [35.1095, 31.6565],
            [35.1050, 31.6565],
            [35.1050, 31.6600],
        ],
        "center": [35.10725, 31.65825],
        "primary_signal": "dispute",
        "observations": [
            {
                "year": 1958,
                "source": "Israeli Survey Institute",
                "type": "aerial",
                "finding": "Sparse cultivation visible in the eastern section only. Western section unclear -- low image resolution.",
                "confidence": "medium",
                "cultivation_pct": 25,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1965,
                "source": "Israeli Survey Institute",
                "type": "aerial",
                "finding": "Cultivation extended westward. Young olive saplings visible in western section.",
                "confidence": "high",
                "cultivation_pct": 45,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1984,
                "source": "Landsat 4",
                "type": "satellite",
                "finding": "Mature olive grove visible across most of the polygon. Full historical extent not determinable from this image alone.",
                "confidence": "low",
                "cultivation_pct": 50,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1991,
                "source": "Applicant-submitted witness testimony",
                "type": "document",
                "finding": "Testimony claims continuous family cultivation since 1958. No aerial or satellite imagery exists in this archive for 1966-1983 to corroborate the claimed continuity.",
                "confidence": "low",
                "cultivation_pct": None,
                "signal_tags": ["document", "dispute"],
            },
            {
                "year": 1996,
                "source": "Landsat 5",
                "type": "satellite",
                "finding": "Cultivation signal stable relative to 1984 baseline.",
                "confidence": "medium",
                "cultivation_pct": 55,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2003,
                "source": "Committee ruling (demo reconstruction)",
                "type": "document",
                "finding": "Committee found cultivation evidence at both endpoints (1965, 1984) but could not establish the continuous 10-year window required under Section 78 due to the 1966-1983 imagery gap. Registration denied; parcel classified as state land.",
                "confidence": "high",
                "cultivation_pct": None,
                "signal_tags": ["document", "dispute"],
            },
        ],
    },
]

SIGNAL_TYPES = ["cultivation", "construction", "abandonment", "document", "dispute"]


def search_parcels(signal_type=None, date_from=None, date_to=None, keyword=None):
    """Filter PARCELS by signal type / date range / keyword.

    This is the one and only "retrieval" step in the whole prototype: a plain
    list comprehension over hardcoded JSON. No embeddings, no SQL, no real
    index -- proves the grounded-chat UX, not a real retrieval pipeline.
    Returns a list of {parcel_id, parcel_name, center, primary_signal,
    matching_observations} for every parcel with at least one observation
    that passes all supplied filters.

    No filters supplied is treated as "no query," not "match everything" --
    an off-topic or unparseable question (e.g. "how's the weather") must
    never come back as all 7 parcels. If you actually want the full mock
    universe, use the /api/parcels debug route, not this function.
    """
    if not any([signal_type, date_from, date_to, keyword]):
        return []

    kw = keyword.lower() if keyword else None
    matches = []
    for parcel in PARCELS:
        hits = []
        for obs in parcel["observations"]:
            if signal_type and signal_type not in obs.get("signal_tags", []):
                continue
            if date_from and obs["year"] < date_from:
                continue
            if date_to and obs["year"] > date_to:
                continue
            if kw and kw not in obs["finding"].lower() and kw not in parcel["name"].lower():
                continue
            hits.append(obs)
        if hits:
            matches.append(
                {
                    "parcel_id": parcel["id"],
                    "parcel_name": parcel["name"],
                    "center": parcel["center"],
                    "primary_signal": parcel["primary_signal"],
                    "matching_observations": hits,
                }
            )
    return matches
