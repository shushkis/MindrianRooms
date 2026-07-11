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
#
# Bilingual (2026-07-11): every parcel/observation carries an `_he` sibling
# field (name_he, source_he, finding_he) alongside the English original.
# `signal_tags`, `confidence`, `type`, and the id/coordinates stay as
# internal English enum values regardless of display language -- only
# human-facing text gets translated. The API layer (main.py) picks which
# field to surface based on the request's `lang`.

PARCELS = [
    {
        "id": "P-001",
        "name": "Demo Parcel - Gush Etzion",
        "name_he": "חלקת הדגמה - גוש עציון",
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
                "source_he": "מרכז למיפוי ישראל (מפ\"י)",
                "type": "aerial",
                "finding": "Terraced agricultural land visible. Stone boundary walls present.",
                "finding_he": "נראית קרקע חקלאית מדורגת. קירות גבול מאבן קיימים.",
                "confidence": "high",
                "cultivation_pct": 62,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1967,
                "source": "Israeli Survey Institute",
                "source_he": "מרכז למיפוי ישראל (מפ\"י)",
                "type": "aerial",
                "finding": "Olive grove in northern section. Active cultivation marks in southern section.",
                "finding_he": "מטע זיתים בחלק הצפוני. סימני עיבוד פעילים בחלק הדרומי.",
                "confidence": "high",
                "cultivation_pct": 70,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1972,
                "source": "Israeli Survey Institute",
                "source_he": "מרכז למיפוי ישראל (מפ\"י)",
                "type": "aerial",
                "finding": "Continued cultivation. Boundary consistent with 1967 survey.",
                "finding_he": "עיבוד נמשך. הגבול תואם לסקר 1967.",
                "confidence": "high",
                "cultivation_pct": 69,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1984,
                "source": "Landsat 4",
                "source_he": "Landsat 4",
                "type": "satellite",
                "finding": "NDVI signal indicates active vegetation. 68% of polygon cultivated.",
                "finding_he": "אות NDVI מצביע על צמחייה פעילה. 68% מהחלקה מעובדים.",
                "confidence": "medium",
                "cultivation_pct": 68,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1993,
                "source": "PalOpenMaps cadastral record",
                "source_he": "רישום קדסטרי - PalOpenMaps",
                "type": "document",
                "finding": "Parcel referenced in Ottoman-era mawat classification. Boundary description matches current claim.",
                "finding_he": "החלקה מוזכרת בסיווג מוואת מהתקופה העות'מאנית. תיאור הגבול תואם לתביעה הנוכחית.",
                "confidence": "medium",
                "cultivation_pct": 55,
                "signal_tags": ["document"],
            },
            {
                "year": 2003,
                "source": "Landsat 7",
                "source_he": "Landsat 7",
                "type": "satellite",
                "finding": "Reduced cultivation signal. Consistent with olive grove dormancy cycle, not abandonment.",
                "finding_he": "אות עיבוד מופחת. תואם למחזור תרדמה של מטע זיתים, לא נטישה.",
                "confidence": "medium",
                "cultivation_pct": 41,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2012,
                "source": "Sentinel-2",
                "source_he": "Sentinel-2",
                "type": "satellite",
                "finding": "Active agricultural signal resumed. 74% of polygon shows cultivation markers.",
                "finding_he": "אות חקלאי פעיל התחדש. 74% מהחלקה מציגה סימני עיבוד.",
                "confidence": "high",
                "cultivation_pct": 74,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2024,
                "source": "Sentinel-2",
                "source_he": "Sentinel-2",
                "type": "satellite",
                "finding": "Current orthophoto: parcel shows active land use. Boundary features intact.",
                "finding_he": "אורתופוטו נוכחי: החלקה מציגה שימוש קרקע פעיל. מאפייני הגבול שלמים.",
                "confidence": "high",
                "cultivation_pct": 78,
                "signal_tags": ["cultivation"],
            },
        ],
    },
    {
        "id": "P-002",
        "name": "Parcel B - North Ridge (Demo)",
        "name_he": "חלקה ב' - רכס צפוני (הדגמה)",
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
                "source_he": "מרכז למיפוי ישראל (מפ\"י)",
                "type": "aerial",
                "finding": "Uniform grove pattern across the full polygon, no gaps.",
                "finding_he": "דפוס מטע אחיד לאורך כל החלקה, ללא פערים.",
                "confidence": "high",
                "cultivation_pct": 81,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1990,
                "source": "Landsat 5",
                "source_he": "Landsat 5",
                "type": "satellite",
                "finding": "Cultivation signal stable relative to 1965 baseline.",
                "finding_he": "אות עיבוד יציב ביחס לבסיס 1965.",
                "confidence": "medium",
                "cultivation_pct": 79,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2010,
                "source": "Sentinel-2",
                "source_he": "Sentinel-2",
                "type": "satellite",
                "finding": "Continuous cultivation, no interruption detected across the full record.",
                "finding_he": "עיבוד רציף, לא זוהתה הפרעה לאורך כל הרשומה.",
                "confidence": "high",
                "cultivation_pct": 83,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2023,
                "source": "Sentinel-2",
                "source_he": "Sentinel-2",
                "type": "satellite",
                "finding": "Cultivation signal remains strong. No structures detected.",
                "finding_he": "אות העיבוד נותר חזק. לא זוהו מבנים.",
                "confidence": "high",
                "cultivation_pct": 85,
                "signal_tags": ["cultivation"],
            },
        ],
    },
    {
        "id": "P-003",
        "name": "Parcel C - Terrace Cluster (Demo)",
        "name_he": "חלקה ג' - אשכול מדרגות (הדגמה)",
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
                "source_he": "מרכז למיפוי ישראל (מפ\"י)",
                "type": "aerial",
                "finding": "Open terraced land, no structures present.",
                "finding_he": "קרקע מדורגת פתוחה, ללא מבנים.",
                "confidence": "high",
                "cultivation_pct": 58,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2000,
                "source": "Landsat 7",
                "source_he": "Landsat 7",
                "type": "satellite",
                "finding": "Cultivation signal steady, no built structures visible.",
                "finding_he": "אות עיבוד יציב, לא נראים מבנים בנויים.",
                "confidence": "medium",
                "cultivation_pct": 52,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2016,
                "source": "Sentinel-2",
                "source_he": "Sentinel-2",
                "type": "satellite",
                "finding": "New rectangular structure footprint detected in southeast corner of polygon.",
                "finding_he": "זוהתה טביעת מבנה מלבנית חדשה בפינה הדרום-מזרחית של החלקה.",
                "confidence": "high",
                "cultivation_pct": 40,
                "signal_tags": ["construction"],
            },
            {
                "year": 2021,
                "source": "Sentinel-2",
                "source_he": "Sentinel-2",
                "type": "satellite",
                "finding": "Structure footprint expanded. Access track visible connecting to nearby road.",
                "finding_he": "טביעת המבנה התרחבה. נראה שביל גישה המחבר לכביש סמוך.",
                "confidence": "high",
                "cultivation_pct": 30,
                "signal_tags": ["construction"],
            },
        ],
    },
    {
        "id": "P-004",
        "name": "Parcel D - Valley Access (Demo)",
        "name_he": "חלקה ד' - גישת עמק (הדגמה)",
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
                "source_he": "מרכז למיפוי ישראל (מפ\"י)",
                "type": "aerial",
                "finding": "Active cultivation across most of the polygon.",
                "finding_he": "עיבוד פעיל ברוב החלקה.",
                "confidence": "high",
                "cultivation_pct": 66,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1996,
                "source": "Landsat 5",
                "source_he": "Landsat 5",
                "type": "satellite",
                "finding": "Cultivation signal declining relative to 1968 baseline.",
                "finding_he": "אות עיבוד יורד ביחס לבסיס 1968.",
                "confidence": "medium",
                "cultivation_pct": 44,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2015,
                "source": "Sentinel-2",
                "source_he": "Sentinel-2",
                "type": "satellite",
                "finding": "Cultivation signal further reduced. No dormancy-cycle pattern -- decline is monotonic across the record.",
                "finding_he": "אות עיבוד מופחת נוסף. אין דפוס מחזור תרדמה -- הירידה מונוטונית לאורך הרשומה.",
                "confidence": "medium",
                "cultivation_pct": 22,
                "signal_tags": ["abandonment"],
            },
            {
                "year": 2020,
                "source": "Sentinel-2",
                "source_he": "Sentinel-2",
                "type": "satellite",
                "finding": "Minimal cultivation signal remaining. Vegetation pattern consistent with unmanaged scrubland.",
                "finding_he": "אות עיבוד מינימלי נותר. דפוס הצמחייה תואם לשטח בור לא מנוהל.",
                "confidence": "medium",
                "cultivation_pct": 9,
                "signal_tags": ["abandonment"],
            },
            {
                "year": 2024,
                "source": "Sentinel-2",
                "source_he": "Sentinel-2",
                "type": "satellite",
                "finding": "No recovery observed. Cultivation signal remains negligible.",
                "finding_he": "לא נצפתה התאוששות. אות העיבוד נותר זניח.",
                "confidence": "high",
                "cultivation_pct": 6,
                "signal_tags": ["abandonment"],
            },
        ],
    },
    {
        "id": "P-005",
        "name": "Parcel E - East Slope (Demo)",
        "name_he": "חלקה ה' - מדרון מזרחי (הדגמה)",
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
                "source_he": "מרכז למיפוי ישראל (מפ\"י)",
                "type": "aerial",
                "finding": "Partial cultivation, boundary markers unclear in aerial imagery.",
                "finding_he": "עיבוד חלקי, סימוני גבול לא ברורים בצילום האווירי.",
                "confidence": "low",
                "cultivation_pct": 35,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1991,
                "source": "PalOpenMaps cadastral record",
                "source_he": "רישום קדסטרי - PalOpenMaps",
                "type": "document",
                "finding": "Two overlapping cadastral claims reference this polygon. Boundary description ambiguous.",
                "finding_he": "שתי תביעות קדסטריות חופפות מתייחסות לחלקה זו. תיאור הגבול אינו חד-משמעי.",
                "confidence": "low",
                "cultivation_pct": None,
                "signal_tags": ["document", "dispute"],
            },
            {
                "year": 2008,
                "source": "Landsat 7",
                "source_he": "Landsat 7",
                "type": "satellite",
                "finding": "Mixed-use signal, part cultivated, part bare ground.",
                "finding_he": "אות שימוש מעורב, חלק מעובד, חלק קרקע חשופה.",
                "confidence": "medium",
                "cultivation_pct": 38,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2022,
                "source": "District land registry filing",
                "source_he": "רישום במרשם המקרקעין המחוזי",
                "type": "document",
                "finding": "Registry filing notes unresolved boundary dispute between two claimants.",
                "finding_he": "רישום רשות המקרקעין מציין מחלוקת גבול בלתי פתורה בין שני תובעים.",
                "confidence": "low",
                "cultivation_pct": None,
                "signal_tags": ["document", "dispute"],
            },
        ],
    },
    {
        "id": "P-006",
        "name": "Parcel F - Boundary Strip (Demo)",
        "name_he": "חלקה ו' - רצועת גבול (הדגמה)",
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
                "source_he": "מרכז למיפוי ישראל (מפ\"י)",
                "type": "aerial",
                "finding": "Narrow cultivated strip along the parcel boundary.",
                "finding_he": "רצועה חקלאית צרה לאורך גבול החלקה.",
                "confidence": "medium",
                "cultivation_pct": 48,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2005,
                "source": "Landsat 7",
                "source_he": "Landsat 7",
                "type": "satellite",
                "finding": "Cultivation signal steady along boundary strip.",
                "finding_he": "אות עיבוד יציב לאורך רצועת הגבול.",
                "confidence": "medium",
                "cultivation_pct": 45,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2019,
                "source": "Sentinel-2",
                "source_he": "Sentinel-2",
                "type": "satellite",
                "finding": "Small structure footprint detected encroaching on the boundary strip.",
                "finding_he": "זוהתה טביעת מבנה קטנה החודרת לרצועת הגבול.",
                "confidence": "high",
                "cultivation_pct": 33,
                "signal_tags": ["construction"],
            },
            {
                "year": 2024,
                "source": "Sentinel-2",
                "source_he": "Sentinel-2",
                "type": "satellite",
                "finding": "Structure footprint unchanged since 2019. Boundary encroachment unresolved.",
                "finding_he": "טביעת המבנה ללא שינוי מאז 2019. חדירת הגבול נותרה בלתי פתורה.",
                "confidence": "high",
                "cultivation_pct": 33,
                "signal_tags": ["construction"],
            },
        ],
    },
    {
        "id": "P-007",
        "name": "Biti Hills -- Demo Reconstruction (inspired by the real committee case; details fictionalized for this prototype)",
        "name_he": "גבעות ביתי -- שחזור הדגמה (בהשראת המקרה האמיתי בוועדה; הפרטים בדויים לצורך האב-טיפוס)",
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
                "source_he": "מרכז למיפוי ישראל (מפ\"י)",
                "type": "aerial",
                "finding": "Sparse cultivation visible in the eastern section only. Western section unclear -- low image resolution.",
                "finding_he": "עיבוד דליל נראה בחלק המזרחי בלבד. החלק המערבי אינו ברור -- רזולוציית תמונה נמוכה.",
                "confidence": "medium",
                "cultivation_pct": 25,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1965,
                "source": "Israeli Survey Institute",
                "source_he": "מרכז למיפוי ישראל (מפ\"י)",
                "type": "aerial",
                "finding": "Cultivation extended westward. Young olive saplings visible in western section.",
                "finding_he": "העיבוד התרחב מערבה. נראים שתילי זית צעירים בחלק המערבי.",
                "confidence": "high",
                "cultivation_pct": 45,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1984,
                "source": "Landsat 4",
                "source_he": "Landsat 4",
                "type": "satellite",
                "finding": "Mature olive grove visible across most of the polygon. Full historical extent not determinable from this image alone.",
                "finding_he": "מטע זיתים בוגר נראה ברוב החלקה. ההיקף ההיסטורי המלא אינו ניתן לקביעה מתמונה זו בלבד.",
                "confidence": "low",
                "cultivation_pct": 50,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 1991,
                "source": "Applicant-submitted witness testimony",
                "source_he": "עדות שהוגשה על ידי המבקש",
                "type": "document",
                "finding": "Testimony claims continuous family cultivation since 1958. No aerial or satellite imagery exists in this archive for 1966-1983 to corroborate the claimed continuity.",
                "finding_he": "העדות טוענת לעיבוד משפחתי רציף מאז 1958. לא קיים בארכיון זה צילום אווירי או לוויני עבור 1966-1983 שיכול לתמוך ברציפות הנטענת.",
                "confidence": "low",
                "cultivation_pct": None,
                "signal_tags": ["document", "dispute"],
            },
            {
                "year": 1996,
                "source": "Landsat 5",
                "source_he": "Landsat 5",
                "type": "satellite",
                "finding": "Cultivation signal stable relative to 1984 baseline.",
                "finding_he": "אות עיבוד יציב ביחס לבסיס 1984.",
                "confidence": "medium",
                "cultivation_pct": 55,
                "signal_tags": ["cultivation"],
            },
            {
                "year": 2003,
                "source": "Committee ruling (demo reconstruction)",
                "source_he": "פסיקת הוועדה (שחזור הדגמה)",
                "type": "document",
                "finding": "Committee found cultivation evidence at both endpoints (1965, 1984) but could not establish the continuous 10-year window required under Section 78 due to the 1966-1983 imagery gap. Registration denied; parcel classified as state land.",
                "finding_he": "הוועדה מצאה ראיות עיבוד בשתי נקודות הקצה (1965, 1984), אך לא הצליחה לבסס את חלון עשר השנים הרציף הנדרש לפי סעיף 78, בשל פער הצילומים בין 1966-1983. ההסדרה נדחתה; החלקה סווגה כאדמת מדינה.",
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

    Keyword matching checks both the English and Hebrew name/finding fields,
    so a Hebrew keyword extracted from a Hebrew query still matches.
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
            if kw:
                haystacks = [
                    obs["finding"].lower(),
                    obs.get("finding_he", ""),
                    parcel["name"].lower(),
                    parcel.get("name_he", ""),
                ]
                if not any(kw in h.lower() for h in haystacks):
                    continue
            hits.append(obs)
        if hits:
            matches.append(
                {
                    "parcel_id": parcel["id"],
                    "parcel_name": parcel["name"],
                    "parcel_name_he": parcel.get("name_he", parcel["name"]),
                    "center": parcel["center"],
                    "primary_signal": parcel["primary_signal"],
                    "matching_observations": hits,
                }
            )
    return matches
