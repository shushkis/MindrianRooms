import { SourceIcon } from "./Icons";
import { TRANSLATIONS } from "../translations";

export default function TimelinePanel({ observations, selectedYear, onSelectYear, hasQueried, lang }) {
  const t = TRANSLATIONS[lang || "en"];

  return (
    <aside className="panel panel-left">
      <div className="panel-header">
        <h2>{t.timelineTitle}</h2>
        <span className="panel-subtitle">
          {hasQueried ? `${observations.length} ${t.sources}` : t.drawToLoad}
        </span>
      </div>

      {!hasQueried && (
        <div className="empty-state">
          <p>{t.noParcelSelected}</p>
          <p className="empty-state-hint">
            {t.emptyStateHint}
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
                  <span className="timeline-type">{t.sourceTypes[obs.type] ?? obs.type}</span>
                </span>
                <span className={`badge badge-${obs.confidence}`}>
                  {t.confidence[obs.confidence] ?? obs.confidence}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}

