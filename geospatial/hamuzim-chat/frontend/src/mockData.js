// HaMuzim Chat -- client-side mock mirror.
//
// Keep this in sync with backend/mock_data.py by hand -- there's no shared
// source of truth between the two languages in this prototype. This is
// used ONLY when the FastAPI backend is unreachable, so the chat UI can
// still run standalone (same fallback philosophy as hamuzim-app's
// mockData.js).

export const PARCELS = [
  {
    id: "P-001",
    name: "Demo Parcel - Gush Etzion",
    center: [35.12075, 31.6499],
    primary_signal: "cultivation",
    observations: [
      { year: 1959, source: "Israeli Survey Institute", type: "aerial", finding: "Terraced agricultural land visible. Stone boundary walls present.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 1967, source: "Israeli Survey Institute", type: "aerial", finding: "Olive grove in northern section. Active cultivation marks in southern section.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 1984, source: "Landsat 4", type: "satellite", finding: "NDVI signal indicates active vegetation. 68% of polygon cultivated.", confidence: "medium", signal_tags: ["cultivation"] },
      { year: 1993, source: "PalOpenMaps cadastral record", type: "document", finding: "Parcel referenced in Ottoman-era mawat classification.", confidence: "medium", signal_tags: ["document"] },
      { year: 2003, source: "Landsat 7", type: "satellite", finding: "Reduced cultivation signal, consistent with olive grove dormancy.", confidence: "medium", signal_tags: ["cultivation"] },
      { year: 2012, source: "Sentinel-2", type: "satellite", finding: "Active agricultural signal resumed.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 2024, source: "Sentinel-2", type: "satellite", finding: "Current orthophoto: parcel shows active land use.", confidence: "high", signal_tags: ["cultivation"] },
    ],
  },
  {
    id: "P-002",
    name: "Parcel B - North Ridge (Demo)",
    center: [35.1315, 31.6541],
    primary_signal: "cultivation",
    observations: [
      { year: 1965, source: "Israeli Survey Institute", type: "aerial", finding: "Uniform grove pattern across the full polygon, no gaps.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 2010, source: "Sentinel-2", type: "satellite", finding: "Continuous cultivation, no interruption detected.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 2023, source: "Sentinel-2", type: "satellite", finding: "Cultivation signal remains strong. No structures detected.", confidence: "high", signal_tags: ["cultivation"] },
    ],
  },
  {
    id: "P-003",
    name: "Parcel C - Terrace Cluster (Demo)",
    center: [35.11725, 31.64375],
    primary_signal: "construction",
    observations: [
      { year: 1970, source: "Israeli Survey Institute", type: "aerial", finding: "Open terraced land, no structures present.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 2016, source: "Sentinel-2", type: "satellite", finding: "New rectangular structure footprint detected in southeast corner.", confidence: "high", signal_tags: ["construction"] },
      { year: 2021, source: "Sentinel-2", type: "satellite", finding: "Structure footprint expanded. Access track visible.", confidence: "high", signal_tags: ["construction"] },
    ],
  },
  {
    id: "P-004",
    name: "Parcel D - Valley Access (Demo)",
    center: [35.11, 31.6464],
    primary_signal: "abandonment",
    observations: [
      { year: 1968, source: "Israeli Survey Institute", type: "aerial", finding: "Active cultivation across most of the polygon.", confidence: "high", signal_tags: ["cultivation"] },
      { year: 2015, source: "Sentinel-2", type: "satellite", finding: "Cultivation signal reduced; decline is monotonic, not dormancy.", confidence: "medium", signal_tags: ["abandonment"] },
      { year: 2020, source: "Sentinel-2", type: "satellite", finding: "Minimal cultivation signal remaining, consistent with unmanaged scrubland.", confidence: "medium", signal_tags: ["abandonment"] },
      { year: 2024, source: "Sentinel-2", type: "satellite", finding: "No recovery observed. Cultivation signal remains negligible.", confidence: "high", signal_tags: ["abandonment"] },
    ],
  },
  {
    id: "P-005",
    name: "Parcel E - East Slope (Demo)",
    center: [35.128, 31.6455],
    primary_signal: "document",
    observations: [
      { year: 1991, source: "PalOpenMaps cadastral record", type: "document", finding: "Two overlapping cadastral claims reference this polygon.", confidence: "low", signal_tags: ["document", "dispute"] },
      { year: 2008, source: "Landsat 7", type: "satellite", finding: "Mixed-use signal, part cultivated, part bare ground.", confidence: "medium", signal_tags: ["cultivation"] },
      { year: 2022, source: "District land registry filing", type: "document", finding: "Registry filing notes unresolved boundary dispute between two claimants.", confidence: "low", signal_tags: ["document", "dispute"] },
    ],
  },
  {
    id: "P-006",
    name: "Parcel F - Boundary Strip (Demo)",
    center: [35.123, 31.65275],
    primary_signal: "construction",
    observations: [
      { year: 1975, source: "Israeli Survey Institute", type: "aerial", finding: "Narrow cultivated strip along the parcel boundary.", confidence: "medium", signal_tags: ["cultivation"] },
      { year: 2019, source: "Sentinel-2", type: "satellite", finding: "Small structure footprint detected encroaching on the boundary strip.", confidence: "high", signal_tags: ["construction"] },
      { year: 2024, source: "Sentinel-2", type: "satellite", finding: "Structure footprint unchanged since 2019. Encroachment unresolved.", confidence: "high", signal_tags: ["construction"] },
    ],
  },
];

export const SIGNAL_TYPES = ["cultivation", "construction", "abandonment", "document", "dispute"];

// Order matters: checked top-to-bottom, first match wins. More specific
// signals go first so e.g. "cultivation loss" resolves to abandonment
// rather than the generic "cultivation" keyword winning by coincidence.
const SIGNAL_KEYWORDS = {
  abandonment: ["abandon", "unmanaged", "decline", "loss"],
  construction: ["construct", "building", "structure", "encroach"],
  document: ["document", "cadastral", "registry", "record"],
  dispute: ["dispute", "claim", "overlapping"],
  cultivation: ["cultivat", "farm", "agricultur", "grove"],
};

export function searchParcels({ signal_type, date_from, date_to, keyword } = {}) {
  const kw = keyword ? keyword.toLowerCase() : null;
  const matches = [];
  for (const parcel of PARCELS) {
    const hits = parcel.observations.filter((obs) => {
      if (signal_type && !obs.signal_tags.includes(signal_type)) return false;
      if (date_from && obs.year < date_from) return false;
      if (date_to && obs.year > date_to) return false;
      if (kw && !obs.finding.toLowerCase().includes(kw) && !parcel.name.toLowerCase().includes(kw)) return false;
      return true;
    });
    if (hits.length) {
      matches.push({
        parcel_id: parcel.id,
        parcel_name: parcel.name,
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

  return filters;
}

export function mockChatReply(message) {
  const filters = naiveParseQuery(message);
  const matches = searchParcels(filters);

  let reply;
  if (!matches.length) {
    reply =
      "No mock parcels matched that query (offline client-side fallback -- backend unreachable). " +
      "Try asking about cultivation, construction, abandonment, or document signals, optionally " +
      'with a year range, e.g. "cultivation loss since 2015".';
  } else {
    const lines = [
      `Found ${matches.length} parcel(s) matching your query (offline client-side fallback -- backend unreachable):`,
    ];
    for (const m of matches) {
      const years = m.matching_observations.map((o) => o.year).join(", ");
      lines.push(`- ${m.parcel_name} (${m.parcel_id}): matching observations in ${years}.`);
    }
    reply = lines.join("\n");
  }

  return { reply, evidence: matches, source: "mock-offline" };
}
