const SIGNAL_LABEL = {
  cultivation: "Cultivation",
  construction: "Construction",
  abandonment: "Abandonment",
  document: "Document",
  dispute: "Dispute",
};

export default function EvidenceCard({ evidence }) {
  const { parcel_id, parcel_name, primary_signal, center, matching_observations } = evidence;

  return (
    <div className="evidence-card">
      <div className="evidence-card-top">
        <span className="evidence-card-id">{parcel_id}</span>
        <span className="badge badge-signal">{SIGNAL_LABEL[primary_signal] ?? primary_signal}</span>
      </div>
      <div className="evidence-card-name">{parcel_name}</div>
      {center && (
        <div className="evidence-card-coords">
          {center[1].toFixed(4)}, {center[0].toFixed(4)}
        </div>
      )}
      <ul className="evidence-card-obs">
        {matching_observations.map((obs) => (
          <li key={obs.year}>
            <span className="evidence-card-year">{obs.year}</span>
            <span className="evidence-card-source">{obs.source}</span>
            <span className="evidence-card-finding">{obs.finding}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
