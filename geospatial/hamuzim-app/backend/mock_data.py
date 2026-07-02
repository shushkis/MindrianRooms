# HaMuzim - Mock data layer
# No real database. Every polygon query returns this single hardcoded
# "demo parcel" dataset, located in the Gush Etzion area.

DEMO_PARCEL = {
    "name": "Demo Parcel - Gush Etzion",
    "coordinates": [
        [35.1180, 31.6520],
        [35.1235, 31.6520],
        [35.1235, 31.6478],
        [35.1180, 31.6478],
        [35.1180, 31.6520],
    ],
    "center": [35.12075, 31.6499],
}

OBSERVATIONS = [
    {
        "year": 1959,
        "source": "Israeli Survey Institute",
        "type": "aerial",
        "finding": "Terraced agricultural land visible. Stone boundary walls present.",
        "confidence": "high",
        "cultivation_pct": 62,
    },
    {
        "year": 1967,
        "source": "Israeli Survey Institute",
        "type": "aerial",
        "finding": "Olive grove in northern section. Active cultivation marks in southern section.",
        "confidence": "high",
        "cultivation_pct": 70,
    },
    {
        "year": 1972,
        "source": "Israeli Survey Institute",
        "type": "aerial",
        "finding": "Continued cultivation. Boundary consistent with 1967 survey.",
        "confidence": "high",
        "cultivation_pct": 69,
    },
    {
        "year": 1984,
        "source": "Landsat 4",
        "type": "satellite",
        "finding": "NDVI signal indicates active vegetation. 68% of polygon cultivated.",
        "confidence": "medium",
        "cultivation_pct": 68,
    },
    {
        "year": 1993,
        "source": "PalOpenMaps cadastral record",
        "type": "document",
        "finding": "Parcel referenced in Ottoman-era mawat classification. Boundary description matches current claim.",
        "confidence": "medium",
        "cultivation_pct": 55,
    },
    {
        "year": 2003,
        "source": "Landsat 7",
        "type": "satellite",
        "finding": "Reduced cultivation signal. Consistent with olive grove dormancy cycle, not abandonment.",
        "confidence": "medium",
        "cultivation_pct": 41,
    },
    {
        "year": 2012,
        "source": "Sentinel-2",
        "type": "satellite",
        "finding": "Active agricultural signal resumed. 74% of polygon shows cultivation markers.",
        "confidence": "high",
        "cultivation_pct": 74,
    },
    {
        "year": 2024,
        "source": "Sentinel-2",
        "type": "satellite",
        "finding": "Current orthophoto: parcel shows active land use. Boundary features intact.",
        "confidence": "high",
        "cultivation_pct": 78,
    },
]

MOCK_AI_SUMMARY = (
    "Based on aerial and satellite evidence spanning 1959 to 2024, this parcel shows "
    "continuous agricultural activity across 65 years. Cultivation signals are present "
    "in 6 of 8 observation periods. The 2003 signal reduction is consistent with olive "
    "grove dormancy rather than abandonment -- a pattern confirmed by the 2012 recovery. "
    "Ottoman-era cadastral records support the boundary description provided by the "
    "applicant. Evidentiary strength: HIGH. Recommended action: proceed to full "
    "registration proceeding."
)
