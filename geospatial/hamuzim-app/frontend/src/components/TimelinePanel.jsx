import { SourceIcon } from "./Icons";
import { SOURCE_TYPE_LABEL } from "../mockData";

export default function TimelinePanel({ observations, selectedYear, onSelectYear, hasQueried }) {
  return (
    <aside className="panel panel-left">
      <div className="panel-header">
        <h2>Evidence Timeline</h2>
        <span className="panel-subtitle">
          {hasQueried ? `${observations.length} sources` : "Draw a polygon to load evidence"}
        </span>
      </div>

      {!hasQueried && (
        <div className="empty-state">
          <p>No parcel selected yet.</p>
          <p className="empty-state-hint">
            Use the draw tool on the map to outline a parcel. HaMuzim will pull every
            historical observation on file for that boundary.
          </p>
        </div>
      )}

      <ol className="timeline-list">
        {observations.map((obs) => {
          const active = obs.year === selectedYear;
          return (
            <li key={obs.year}>
              <button
                className={`timeline-item ${active ? "timeline-item-active" : ""}`}
                onClick={() => onSelectYear(obs.year)}
              >
                <span className="timeline-year">{obs.year}</span>
                <span className="timeline-meta">
                  <span className="timeline-source">
                    <SourceIcon type={obs.type} className="icon" />
                    {obs.source}
                  </span>
                  <span className="timeline-type">{SOURCE_TYPE_LABEL[obs.type] ?? obs.type}</span>
                </span>
                <span className={`badge badge-${obs.confidence}`}>{obs.confidence}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
