import { useState } from "react";
import ParcelMap from "./ParcelMap";
import { getCaseReview } from "../api";
import { PARCELS } from "../mockData";
import { t } from "../translations";

export default function CaseReview({ lang }) {
  const [parcelId, setParcelId] = useState(PARCELS[PARCELS.length - 1].id); // default: the evidentiary-gap case, the sharpest demo story
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectedStub = PARCELS.find((p) => p.id === parcelId);
  const parcel = result?.parcel || selectedStub;
  const he = lang === "he";

  async function handleReview() {
    setLoading(true);
    setResult(null);
    try {
      const r = await getCaseReview(parcelId, lang);
      setResult(r);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="case-review">
      <p className="case-review-intro">{t(lang, "caseReviewIntro")}</p>

      <div className="case-review-controls">
        <select
          className="parcel-select"
          value={parcelId}
          onChange={(e) => {
            setParcelId(e.target.value);
            setResult(null);
          }}
        >
          {PARCELS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.id} — {he ? p.name_he || p.name : p.name}
            </option>
          ))}
        </select>
        <button className="btn btn-primary" onClick={handleReview} disabled={loading}>
          {loading ? t(lang, "analyzing") : t(lang, "getRecommendation")}
        </button>
      </div>

      <ParcelMap parcel={parcel} />

      {loading && <div className="case-review-loading">{t(lang, "analyzing")}</div>}

      {result && !loading && (
        <div className="case-review-result">
          {result.error && <div className="case-review-error">{result.error}</div>}
          <div className="gate-banner">{t(lang, "gateNotice")}</div>
          <div className="assessment-text">{result.assessment}</div>
          <div className="msg-source-tag">{t(lang, "sourceLabels")[result.source] ?? result.source}</div>
        </div>
      )}

      {parcel && (
        <div className="full-record">
          <h4>{t(lang, "fullRecordTitle")}</h4>
          <ul className="full-record-list">
            {parcel.observations
              .slice()
              .sort((a, b) => a.year - b.year)
              .map((obs) => (
                <li key={obs.year}>
                  <span className="evidence-card-year">{obs.year}</span>
                  <span className="evidence-card-source">{he ? obs.source_he || obs.source : obs.source}</span>
                  <span className="evidence-card-finding">{he ? obs.finding_he || obs.finding : obs.finding}</span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
