import { t } from "../translations";

export default function EvidenceCard({ evidence, lang = "en" }) {
  const { parcel_id, parcel_name, parcel_name_he, primary_signal, center, matching_observations } = evidence;
  const he = lang === "he";
  const signalLabels = t(lang, "signalLabels");
  const displayName = he ? parcel_name_he || parcel_name : parcel_name;

  return (
    <div className="evidence-card">
      <div className="evidence-card-top">
        <span className="evidence-card-id">{parcel_id}</span>
        <span className="badge badge-signal">{signalLabels[primary_signal] ?? primary_signal}</span>
      </div>
      <div className="evidence-card-name">{displayName}</div>
      {center && (
        <div className="evidence-card-coords">
          {center[1].toFixed(4)}, {center[0].toFixed(4)}
        </div>
      )}
      <ul className="evidence-card-obs">
        {matching_observations.map((obs) => (
          <li key={obs.year}>
            <span className="evidence-card-year">{obs.year}</span>
            <span className="evidence-card-source">{he ? obs.source_he || obs.source : obs.source}</span>
            <span className="evidence-card-finding">{he ? obs.finding_he || obs.finding : obs.finding}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
