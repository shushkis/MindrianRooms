// HaMuzim Chat -- UI translations. Same pattern as the sibling hamuzim-app's
// translations.js: one flat dictionary per language, looked up by key.
// Toggle default is "en" (for you/Elli building), switchable to "he" for
// the real customer, who is a Hebrew speaker working West Bank cases.

export const TRANSLATIONS = {
  en: {
    brandName: "HaMuzim Chat",
    tagline: "Ask the evidence, not the map",
    langToggle: "עברית",
    thinking: "thinking…",
    welcome:
      "Ask me about the parcel evidence set -- cultivation, construction, abandonment, or document signals, across any of the seven demo parcels. Every answer cites the parcel and observation year it came from.",
    suggestions: [
      "Which parcels show construction after 2015?",
      "Show me cultivation loss since 2015.",
      "Are there any boundary disputes?",
      "Tell me about the Biti Hills parcel.",
    ],
    inputPlaceholder: "Ask about a parcel, a signal type, or a date range...",
    send: "Send",
    sourceLabels: {
      gemini: "Gemini (function-calling)",
      mock: "Rule-based fallback -- no API key",
      "mock-offline": "Offline fallback -- backend unreachable",
    },
    signalLabels: {
      cultivation: "Cultivation",
      construction: "Construction",
      abandonment: "Abandonment",
      document: "Document",
      dispute: "Dispute",
    },
    confidenceLabels: {
      high: "High",
      medium: "Medium",
      low: "Low",
      unverified: "Unverified — source only",
    },
  },
  he: {
    brandName: "צ'אט המוזים",
    tagline: "שאלו את הראיות, לא את המפה",
    langToggle: "English",
    thinking: "חושב…",
    welcome:
      "שאלו אותי על מאגר ראיות החלקות -- עיבוד, בנייה, נטישה או מסמכים, בכל אחת משבע חלקות ההדגמה. כל תשובה מצטטת את החלקה ואת שנת התצפית שממנה הגיעה.",
    suggestions: [
      "אילו חלקות מראות בנייה אחרי 2015?",
      "הראה לי אובדן עיבוד מאז 2015.",
      "האם יש מחלוקות גבול?",
      "ספר לי על חלקת גבעות ביתי.",
    ],
    inputPlaceholder: "שאלו על חלקה, סוג אות, או טווח תאריכים...",
    send: "שליחה",
    sourceLabels: {
      gemini: "Gemini (קריאת פונקציות)",
      mock: "גיבוי מבוסס-כללים -- אין מפתח API",
      "mock-offline": "גיבוי לא מקוון -- השרת אינו זמין",
    },
    signalLabels: {
      cultivation: "עיבוד",
      construction: "בנייה",
      abandonment: "נטישה",
      document: "מסמך",
      dispute: "מחלוקת",
    },
    confidenceLabels: {
      high: "גבוהה",
      medium: "בינונית",
      low: "נמוכה",
      unverified: "לא מאומת — מקור בלבד",
    },
  },
};

export function t(lang, key) {
  const dict = TRANSLATIONS[lang] ?? TRANSLATIONS.en;
  return dict[key] ?? TRANSLATIONS.en[key];
}
