// HaMuzim Chat -- client-side mock mirror.
//
// Keep this in sync with backend/mock_data.py by hand -- there's no shared
// source of truth between the two languages in this prototype. This is
// used ONLY when the FastAPI backend is unreachable, so the chat UI can
// still run standalone (same fallback philosophy as hamuzim-app's
// mockData.js).
//
// Bilingual (2026-07-11): every parcel/observation carries a `_he` sibling
// field alongside the English original, mirroring backend/mock_data.py.

export const PARCELS = [
  {
    id: "P-001",
    name: "Demo Parcel - Gush Etzion",
    name_he: "חלקת הדגמה - גוש עציון",
    center: [35.12075, 31.6499],
    primary_signal: "cultivation",
    observations: [
      { year: 1959, source: "Israeli Survey Institute", source_he: "מרכז למיפוי ישראל (מפ\"י)", type: "aerial", finding: "Terraced agricultural land visible. Stone boundary walls present.", finding_he: "נראית קרקע חקלאית מדורגת. קירות גבול מאבן קיימים.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 1967, source: "Israeli Survey Institute", source_he: "מרכז למיפוי ישראל (מפ\"י)", type: "aerial", finding: "Olive grove in northern section. Active cultivation marks in southern section.", finding_he: "מטע זיתים בחלק הצפוני. סימני עיבוד פעילים בחלק הדרומי.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 1984, source: "Landsat 4", source_he: "Landsat 4", type: "satellite", finding: "NDVI signal indicates active vegetation. 68% of polygon cultivated.", finding_he: "אות NDVI מצביע על צמחייה פעילה. 68% מהחלקה מעובדים.", confidence: "medium", signal_tags: ["cultivation"] },
      { year: 1993, source: "PalOpenMaps cadastral record", source_he: "רישום קדסטרי - PalOpenMaps", type: "document", finding: "Parcel referenced in Ottoman-era mawat classification.", finding_he: "החלקה מוזכרת בסיווג מוואת מהתקופה העות'מאנית.", confidence: "medium", signal_tags: ["document"] },
      { year: 2003, source: "Landsat 7", source_he: "Landsat 7", type: "satellite", finding: "Reduced cultivation signal, consistent with olive grove dormancy.", finding_he: "אות עיבוד מופחת, תואם למחזור תרדמה של מטע זיתים.", confidence: "medium", signal_tags: ["cultivation"] },
      { year: 2012, source: "Sentinel-2", source_he: "Sentinel-2", type: "satellite", finding: "Active agricultural signal resumed.", finding_he: "אות חקלאי פעיל התחדש.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 2024, source: "Sentinel-2", source_he: "Sentinel-2", type: "satellite", finding: "Current orthophoto: parcel shows active land use.", finding_he: "אורתופוטו נוכחי: החלקה מציגה שימוש קרקע פעיל.", confidence: "high", signal_tags: ["cultivation"] },
    ],
  },
  {
    id: "P-002",
    name: "Parcel B - North Ridge (Demo)",
    name_he: "חלקה ב' - רכס צפוני (הדגמה)",
    center: [35.1315, 31.6541],
    primary_signal: "cultivation",
    observations: [
      { year: 1965, source: "Israeli Survey Institute", source_he: "מרכז למיפוי ישראל (מפ\"י)", type: "aerial", finding: "Uniform grove pattern across the full polygon, no gaps.", finding_he: "דפוס מטע אחיד לאורך כל החלקה, ללא פערים.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 2010, source: "Sentinel-2", source_he: "Sentinel-2", type: "satellite", finding: "Continuous cultivation, no interruption detected.", finding_he: "עיבוד רציף, לא זוהתה הפרעה.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 2023, source: "Sentinel-2", source_he: "Sentinel-2", type: "satellite", finding: "Cultivation signal remains strong. No structures detected.", finding_he: "אות העיבוד נותר חזק. לא זוהו מבנים.", confidence: "high", signal_tags: ["cultivation"] },
    ],
  },
  {
    id: "P-003",
    name: "Parcel C - Terrace Cluster (Demo)",
    name_he: "חלקה ג' - אשכול מדרגות (הדגמה)",
    center: [35.11725, 31.64375],
    primary_signal: "construction",
    observations: [
      { year: 1970, source: "Israeli Survey Institute", source_he: "מרכז למיפוי ישראל (מפ\"י)", type: "aerial", finding: "Open terraced land, no structures present.", finding_he: "קרקע מדורגת פתוחה, ללא מבנים.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 2000, source: "Landsat 7", source_he: "Landsat 7", type: "satellite", finding: "Cultivation signal steady, no built structures visible.", finding_he: "אות עיבוד יציב, לא נראים מבנים בנויים.", confidence: "medium", signal_tags: ["cultivation"] },
      { year: 2016, source: "Sentinel-2", source_he: "Sentinel-2", type: "satellite", finding: "New rectangular structure footprint detected in southeast corner of polygon.", finding_he: "זוהתה טביעת מבנה מלבנית חדשה בפינה הדרום-מזרחית של החלקה.", confidence: "high", signal_tags: ["construction"] },
      { year: 2021, source: "Sentinel-2", source_he: "Sentinel-2", type: "satellite", finding: "Structure footprint expanded. Access track visible connecting to nearby road.", finding_he: "טביעת המבנה התרחבה. נראה שביל גישה המחבר לכביש סמוך.", confidence: "high", signal_tags: ["construction"] },
    ],
  },
  {
    id: "P-004",
    name: "Parcel D - Valley Access (Demo)",
    name_he: "חלקה ד' - גישת עמק (הדגמה)",
    center: [35.11, 31.6464],
    primary_signal: "abandonment",
    observations: [
      { year: 1968, source: "Israeli Survey Institute", source_he: "מרכז למיפוי ישראל (מפ\"י)", type: "aerial", finding: "Active cultivation across most of the polygon.", finding_he: "עיבוד פעיל ברוב החלקה.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 1996, source: "Landsat 5", source_he: "Landsat 5", type: "satellite", finding: "Cultivation signal declining relative to 1968 baseline.", finding_he: "אות עיבוד יורד ביחס לבסיס 1968.", confidence: "medium", signal_tags: ["cultivation"] },
      { year: 2015, source: "Sentinel-2", source_he: "Sentinel-2", type: "satellite", finding: "Cultivation signal further reduced. No dormancy-cycle pattern -- decline is monotonic across the record.", finding_he: "אות עיבוד מופחת נוסף. הירידה מונוטונית לאורך הרשומה.", confidence: "medium", signal_tags: ["abandonment"] },
      { year: 2020, source: "Sentinel-2", source_he: "Sentinel-2", type: "satellite", finding: "Minimal cultivation signal remaining, consistent with unmanaged scrubland.", finding_he: "אות עיבוד מינימלי נותר, תואם לשטח בור לא מנוהל.", confidence: "medium", signal_tags: ["abandonment"] },
      { year: 2024, source: "Sentinel-2", source_he: "Sentinel-2", type: "satellite", finding: "No recovery observed. Cultivation signal remains negligible.", finding_he: "לא נצפתה התאוששות. אות העיבוד נותר זניח.", confidence: "high", signal_tags: ["abandonment"] },
    ],
  },
  {
    id: "P-005",
    name: "Parcel E - East Slope (Demo)",
    name_he: "חלקה ה' - מדרון מזרחי (הדגמה)",
    center: [35.128, 31.6455],
    primary_signal: "document",
    observations: [
      { year: 1991, source: "PalOpenMaps cadastral record", source_he: "רישום קדסטרי - PalOpenMaps", type: "document", finding: "Two overlapping cadastral claims reference this polygon.", finding_he: "שתי תביעות קדסטריות חופפות מתייחסות לחלקה זו.", confidence: "low", signal_tags: ["document", "dispute"] },
      { year: 2008, source: "Landsat 7", source_he: "Landsat 7", type: "satellite", finding: "Mixed-use signal, part cultivated, part bare ground.", finding_he: "אות שימוש מעורב, חלק מעובד, חלק קרקע חשופה.", confidence: "medium", signal_tags: ["cultivation"] },
      { year: 2022, source: "District land registry filing", source_he: "רישום במרשם המקרקעין המחוזי", type: "document", finding: "Registry filing notes unresolved boundary dispute between two claimants.", finding_he: "רישום רשות המקרקעין מציין מחלוקת גבול בלתי פתורה בין שני תובעים.", confidence: "low", signal_tags: ["document", "dispute"] },
    ],
  },
  {
    id: "P-006",
    name: "Parcel F - Boundary Strip (Demo)",
    name_he: "חלקה ו' - רצועת גבול (הדגמה)",
    center: [35.123, 31.65275],
    primary_signal: "construction",
    observations: [
      { year: 1975, source: "Israeli Survey Institute", source_he: "מרכז למיפוי ישראל (מפ\"י)", type: "aerial", finding: "Narrow cultivated strip along the parcel boundary.", finding_he: "רצועה חקלאית צרה לאורך גבול החלקה.", confidence: "medium", signal_tags: ["cultivation"] },
      { year: 2019, source: "Sentinel-2", source_he: "Sentinel-2", type: "satellite", finding: "Small structure footprint detected encroaching on the boundary strip.", finding_he: "זוהתה טביעת מבנה קטנה החודרת לרצועת הגבול.", confidence: "high", signal_tags: ["construction"] },
      { year: 2024, source: "Sentinel-2", source_he: "Sentinel-2", type: "satellite", finding: "Structure footprint unchanged since 2019. Encroachment unresolved.", finding_he: "טביעת המבנה ללא שינוי מאז 2019. חדירת הגבול נותרה בלתי פתורה.", confidence: "high", signal_tags: ["construction"] },
    ],
  },
  {
    id: "P-007",
    name: "Biti Hills -- Demo Reconstruction (inspired by the real committee case; details fictionalized)",
    name_he: "גבעות ביתי -- שחזור הדגמה (בהשראת המקרה האמיתי בוועדה; הפרטים בדויים)",
    center: [35.10725, 31.65825],
    primary_signal: "dispute",
    observations: [
      { year: 1958, source: "Israeli Survey Institute", source_he: "מרכז למיפוי ישראל (מפ\"י)", type: "aerial", finding: "Sparse cultivation visible in the eastern section only.", finding_he: "עיבוד דליל נראה בחלק המזרחי בלבד.", confidence: "medium", signal_tags: ["cultivation"] },
      { year: 1965, source: "Israeli Survey Institute", source_he: "מרכז למיפוי ישראל (מפ\"י)", type: "aerial", finding: "Cultivation extended westward. Young olive saplings visible.", finding_he: "העיבוד התרחב מערבה. נראים שתילי זית צעירים.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 1984, source: "Landsat 4", source_he: "Landsat 4", type: "satellite", finding: "Mature olive grove visible. Full historical extent not determinable from this image alone.", finding_he: "מטע זיתים בוגר נראה. ההיקף ההיסטורי המלא אינו ניתן לקביעה מתמונה זו בלבד.", confidence: "low", signal_tags: ["cultivation"] },
      { year: 1991, source: "Applicant-submitted witness testimony", source_he: "עדות שהוגשה על ידי המבקש", type: "document", finding: "Testimony claims continuous cultivation since 1958. No imagery exists for 1966-1983 to corroborate.", finding_he: "העדות טוענת לעיבוד רציף מאז 1958. לא קיים צילום עבור 1966-1983 שיכול לתמוך בכך.", confidence: "low", signal_tags: ["document", "dispute"] },
      { year: 1996, source: "Landsat 5", source_he: "Landsat 5", type: "satellite", finding: "Cultivation signal stable relative to 1984 baseline.", finding_he: "אות עיבוד יציב ביחס לבסיס 1984.", confidence: "medium", signal_tags: ["cultivation"] },
      { year: 2003, source: "Committee ruling (demo reconstruction)", source_he: "פסיקת הוועדה (שחזור הדגמה)", type: "document", finding: "Cultivation shown at both endpoints (1965, 1984) but the continuous 10-year window could not be established due to the 1966-1983 imagery gap. Registration denied.", finding_he: "עיבוד הוכח בשתי נקודות הקצה (1965, 1984), אך לא ניתן היה לבסס את חלון עשר השנים הרציף בשל פער הצילומים בין 1966-1983. ההסדרה נדחתה.", confidence: "high", signal_tags: ["document", "dispute"] },
    ],
  },
];

export const SIGNAL_TYPES = ["cultivation", "construction", "abandonment", "document", "dispute"];

// Order matters: checked top-to-bottom, first match wins. More specific
// signals go first so e.g. "cultivation loss" resolves to abandonment
// rather than the generic "cultivation" keyword winning by coincidence.
// Hebrew keys added 2026-07-11, same ordering discipline.
const SIGNAL_KEYWORDS = {
  abandonment: ["abandon", "unmanaged", "decline", "loss", "נטיש", "נטישה", "ירידה"],
  construction: ["construct", "building", "structure", "encroach", "בני", "מבנה", "חדיר"],
  document: ["document", "cadastral", "registry", "record", "מסמך", "קדסטר", "רישום"],
  dispute: ["dispute", "claim", "overlapping", "מחלוקת", "תביע", "חופפ"],
  cultivation: ["cultivat", "farm", "agricultur", "grove", "עיבוד", "חקלא", "מטע"],
};

function parcelNameFragments() {
  // Mirrors backend/main.py's _parcel_name_fragments(): strips boilerplate
  // ("Demo Parcel - ", "Parcel X - ", trailing "(Demo...)" / " -- Demo...")
  // so a short natural query like "biti hills" / "ביתי" can match the real
  // name. Includes both English and Hebrew name fragments.
  const fragments = [];
  for (const parcel of PARCELS) {
    let name = parcel.name.replace(/^Demo Parcel\s*-\s*/, "");
    name = name.replace(/^Parcel\s+[A-Z]\s*-\s*/, "");
    name = name.split(/\s+--\s+|\s*\(/)[0].trim();
    if (name) fragments.push([name.toLowerCase(), name]);

    if (parcel.name_he) {
      let nameHe = parcel.name_he.split(/\s+--\s+|\s*\(/)[0].trim();
      // Strip a leading "חלקה X - " prefix the same way the English side
      // strips "Parcel X - ", so e.g. "רכס צפוני" matches on its own.
      nameHe = nameHe.replace(/^חלק(?:ה|ת)[^-]*-\s*/, "").trim();
      if (nameHe) fragments.push([nameHe.toLowerCase(), nameHe]);
    }
  }
  return fragments;
}

export function searchParcels({ signal_type, date_from, date_to, keyword } = {}) {
  // No filters supplied is "no query," not "match everything" -- an
  // off-topic question (e.g. "how's the weather") must never come back as
  // all parcels. Mirrors the same fix in backend/mock_data.py.
  if (!signal_type && !date_from && !date_to && !keyword) return [];

  const kw = keyword ? keyword.toLowerCase() : null;
  const matches = [];
  for (const parcel of PARCELS) {
    const hits = parcel.observations.filter((obs) => {
      if (signal_type && !obs.signal_tags.includes(signal_type)) return false;
      if (date_from && obs.year < date_from) return false;
      if (date_to && obs.year > date_to) return false;
      if (kw) {
        const haystacks = [
          obs.finding.toLowerCase(),
          (obs.finding_he || "").toLowerCase(),
          parcel.name.toLowerCase(),
          (parcel.name_he || "").toLowerCase(),
        ];
        if (!haystacks.some((h) => h.includes(kw))) return false;
      }
      return true;
    });
    if (hits.length) {
      matches.push({
        parcel_id: parcel.id,
        parcel_name: parcel.name,
        parcel_name_he: parcel.name_he || parcel.name,
        center: parcel.center,
        primary_signal: parcel.primary_signal,
        matching_observations: hits,
      });
    }
  }
  return matches;
}

export function naiveParseQuery(text) {
  const lower = text.toLowerCase();
  const filters = {};

  for (const [signal, keywords] of Object.entries(SIGNAL_KEYWORDS)) {
    if (keywords.some((kw) => lower.includes(kw))) {
      filters.signal_type = signal;
      break;
    }
  }

  const since = lower.match(/(?:since|after|from)\s+(\d{4})/);
  if (since) filters.date_from = parseInt(since[1], 10);

  const before = lower.match(/(?:before|until|up to)\s+(\d{4})/);
  if (before) filters.date_to = parseInt(before[1], 10);

  const between = lower.match(/between\s+(\d{4})\s+and\s+(\d{4})/);
  if (between) {
    filters.date_from = parseInt(between[1], 10);
    filters.date_to = parseInt(between[2], 10);
  }

  if (!filters.keyword) {
    for (const [fragLower, fragOriginal] of parcelNameFragments()) {
      if (lower.includes(fragLower)) {
        filters.keyword = fragOriginal;
        break;
      }
    }
  }

  return filters;
}

export function mockChatReply(message, lang = "en") {
  const filters = naiveParseQuery(message);
  const matches = searchParcels(filters);

  const L = {
    en: {
      none: "No mock parcels matched that query (offline client-side fallback -- backend unreachable). Try asking about cultivation, construction, abandonment, or document signals, optionally with a year range, e.g. \"cultivation loss since 2015\".",
      found: (n) => `Found ${n} parcel(s) matching your query (offline client-side fallback -- backend unreachable):`,
      line: (m) => `- ${m.parcel_name} (${m.parcel_id}): matching observations in ${m.matching_observations.map((o) => o.year).join(", ")}.`,
    },
    he: {
      none: 'לא נמצאו חלקות התואמות לשאילתה (גיבוי מקומי לא מקוון -- השרת אינו זמין). נסו לשאול על עיבוד, בנייה, נטישה או מסמכים, ואפשר עם טווח שנים, למשל "אובדן עיבוד מאז 2015".',
      found: (n) => `נמצאו ${n} חלקות התואמות לשאילתה (גיבוי מקומי לא מקוון -- השרת אינו זמין):`,
      line: (m) => `- ${m.parcel_name_he || m.parcel_name} (${m.parcel_id}): תצפיות תואמות בשנים ${m.matching_observations.map((o) => o.year).join(", ")}.`,
    },
  }[lang === "he" ? "he" : "en"];

  let reply;
  if (!matches.length) {
    reply = L.none;
  } else {
    const lines = [L.found(matches.length)];
    for (const m of matches) lines.push(L.line(m));
    reply = lines.join("\n");
  }

  return { reply, evidence: matches, source: "mock-offline" };
}
