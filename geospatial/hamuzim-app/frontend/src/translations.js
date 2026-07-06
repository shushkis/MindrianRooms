export const TRANSLATIONS = {
  en: {
    brandName: "HaMuzim",
    tagline: "Spatial Evidence Platform",
    loading: "Querying evidence...",
    timelineTitle: "Evidence Timeline",
    drawToLoad: "Draw a polygon to load evidence",
    sources: "sources",
    source: "source",
    noParcelSelected: "No parcel selected yet.",
    emptyStateHint: "Use the draw tool on the map to outline a parcel. HaMuzim will pull every historical observation on file for that boundary.",
    observationsTitle: "Observations",
    awaitingQuery: "Awaiting query",
    observationEmptyState: "Observation cards will appear here once a parcel is queried.",
    cultivationSignal: "cultivation signal",
    generateSummary: "Generate Summary",
    generating: "Generating...",
    aiSummary: "AI Summary",
    exportLegalExhibit: "Export Legal Exhibit",
    exporting: "Exporting...",
    pdfExportFailed: "PDF export failed. Is the backend running?",
    showOverlay: "Show cultivation overlay",
    hideOverlay: "Hide cultivation overlay",
    yearLabel: "Year",
    mapHint: "Draw a polygon or rectangle (top-left tool) to query evidence for that parcel.",
    confidence: {
      high: "High",
      medium: "Medium",
      low: "Low"
    },
    sourceTypes: {
      aerial: "Aerial Survey",
      satellite: "Satellite",
      document: "Document"
    }
  },
  he: {
    brandName: "המוזים",
    tagline: "פלטפורמת ראיות מרחבית",
    loading: "שאילתת ראיות...",
    timelineTitle: "ציר זמן של הראיות",
    drawToLoad: "שרטט פוליגון לטעינת ראיות",
    sources: "מקורות",
    source: "מקור",
    noParcelSelected: "טרם נבחרה חלקה.",
    emptyStateHint: "השתמש בכלי השרטוט במפה כדי לסמן חלקה. מערכת המוזים תשאב את כל התצפיות ההיסטוריות המתועדות עבור גבול זה.",
    observationsTitle: "תצפיות",
    awaitingQuery: "ממתין לשאילתה",
    observationEmptyState: "כרטיסי תצפיות יופיעו כאן לאחר שליפת הנתונים לחלקה.",
    cultivationSignal: "סיגנל עיבוד",
    generateSummary: "הפק סיכום",
    generating: "מפיק סיכום...",
    aiSummary: "סיכום בינה מלאכותית",
    exportLegalExhibit: "ייצא מוצג משפטי",
    exporting: "מייצא...",
    pdfExportFailed: "ייצוא ה-PDF נכשל. האם השרת האחורי מופעל?",
    showOverlay: "הצג שכבת עיבוד",
    hideOverlay: "הסתר שכבת עיבוד",
    yearLabel: "שנה",
    mapHint: "שרטט פוליגון או מלבן (הכלי בפינה השמאלית העליונה) כדי לשלוף ראיות עבור חלקה זו.",
    confidence: {
      high: "גבוהה",
      medium: "בינונית",
      low: "נמוכה"
    },
    sourceTypes: {
      aerial: "תצלומי אוויר",
      satellite: "לוויין",
      document: "מסמך"
    }
  }
};

export const DATA_TRANSLATIONS = {
  he: {
    // Parcel name
    "Demo Parcel - Gush Etzion": "חלקת הדגמה - גוש עציון",
    "Demo Parcel": "חלקת הדגמה",
    // Sources
    "Israeli Survey Institute": "מכון המיפוי הישראלי",
    "Landsat 4": "לנדסאט 4",
    "PalOpenMaps cadastral record": "רישום קדסטרי PalOpenMaps",
    "Landsat 7": "לנדסאט 7",
    "Sentinel-2": "סנטינל-2",
    // Findings
    "Terraced agricultural land visible. Stone boundary walls present.": 
      "נראית חקלאות מדרגות (טרסות). קיימות חומות גבול מאבן.",
    "Olive grove in northern section. Active cultivation marks in southern section.": 
      "מטע זיתים בחלק הצפוני. סימני עיבוד פעילים בחלק הדרומי.",
    "Continued cultivation. Boundary consistent with 1967 survey.": 
      "עיבוד רציף. הגבול תואם לסקר של 1967.",
    "NDVI signal indicates active vegetation. 68% of polygon cultivated.": 
      "אות NDVI מצביע על צמחייה פעילה. 68% מהפוליגון מעובד.",
    "Parcel referenced in Ottoman-era mawat classification. Boundary description matches current claim.": 
      "החלקה מוזכרת בסיווג 'מוואת' מהתקופה העות'מאנית. תיאור הגבול תואם לתביעה הנוכחית.",
    "Reduced cultivation signal. Consistent with olive grove dormancy cycle, not abandonment.": 
      "אות עיבוד מופחת. תואם למחזור תרדמת מטע זיתים, ולא לנטישה.",
    "Active agricultural signal resumed. 74% of polygon shows cultivation markers.": 
      "חידוש אות חקלאי פעיל. 74% מהפוליגון מציג סימני עיבוד.",
    "Current orthophoto: parcel shows active land use. Boundary features intact.": 
      "אורתופוטו עדכני: החלקה מציגה שימוש פעיל בקרקע. מאפייני הגבול שלמים.",
    // AI Summary
    "Based on aerial and satellite evidence spanning 1959 to 2024, this parcel shows continuous agricultural activity across 65 years. Cultivation signals are present in 6 of 8 observation periods. The 2003 signal reduction is consistent with olive grove dormancy rather than abandonment -- a pattern confirmed by the 2012 recovery. Ottoman-era cadastral records support the boundary description provided by the applicant. Evidentiary strength: HIGH. Recommended action: proceed to full registration proceeding.":
      "על בסיס ראיות מתצלומי אוויר ולוויין המשתרעות בין השנים 1959 ל-2024, חלקה זו מראה פעילות חקלאית רציפה לאורך 65 שנים. אותות עיבוד נוכחים ב-6 מתוך 8 תקופות תצפית. הפחתת האות בשנת 2003 תואמת למחזור תרדמת מטע זיתים ולא לנטישה – דפוס שאושר על ידי ההתאוששות בשנת 2012. רישומים קדסטריים מהתקופה העות'מאנית תומכים בתיאור הגבול שסופק על ידי המבקש. חוזק ראייתי: גבוה. פעולה מומלצת: מעבר להליך רישום מלא."
  }
};

export function translateText(text, lang) {
  if (lang !== "he") return text;
  return DATA_TRANSLATIONS.he[text] || text;
}

export function translateParcel(parcel, lang) {
  if (!parcel || lang !== "he") return parcel;
  return {
    ...parcel,
    name: translateText(parcel.name, lang)
  };
}

export function translateObservations(observations, lang) {
  if (!observations || lang !== "he") return observations;
  return observations.map(obs => ({
    ...obs,
    source: translateText(obs.source, lang),
    finding: translateText(obs.finding, lang)
  }));
}
