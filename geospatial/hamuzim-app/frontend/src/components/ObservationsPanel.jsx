import { useState } from "react";
import { SourceIcon, SparkleIcon, DownloadIcon } from "./Icons";
import { generateSummary, exportPdf } from "../api";
import { TRANSLATIONS } from "../translations";

export default function ObservationsPanel({ parcel, observations, selectedYear, onSelectYear, hasQueried, lang }) {
  const [summary, setSummary] = useState(null);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [summarySource, setSummarySource] = useState(null);
  const [exporting, setExporting] = useState(false);

  const t = TRANSLATIONS[lang || "en"];

  async function handleGenerateSummary() {
    setSummaryLoading(true);
    try {
      const res = await generateSummary(observations, parcel, lang);
      setSummary(res.summary);
      setSummarySource(res.source ?? "mock");
    } finally {
      setSummaryLoading(false);
    }
  }

  async function handleExport() {
    setExporting(true);
    try {
      const finalSummary = summary ?? (await generateSummary(observations, parcel, lang)).summary;
      await exportPdf(parcel, observations, finalSummary, lang);
    } catch (err) {
      console.error(err);
      alert(t.pdfExportFailed);
    } finally {
      setExporting(false);
    }
  }

  return (
    <aside className="panel panel-right">
      <div className="panel-header">
        <h2>{t.observationsTitle}</h2>
        <span className="panel-subtitle">
          {hasQueried ? parcel?.name ?? (lang === "he" ? "חלקת הדגמה" : "Demo parcel") : t.awaitingQuery}
        </span>
      </div>

      {!hasQueried && (
        <div className="empty-state">
          <p>{t.observationEmptyState}</p>
        </div>
      )}

      <div className="observation-cards">
        {observations.map((obs) => {
          const active = obs.year === selectedYear;
          return (
            <button
              key={obs.year}
              className={`obs-card ${active ? "obs-card-active" : ""}`}
              onClick={() => onSelectYear(obs.year)}
            >
              <div className="obs-card-top">
                <span className="obs-card-year">{obs.year}</span>
                <span className={`badge badge-${obs.confidence}`}>
                  {t.confidence[obs.confidence] ?? obs.confidence}
                </span>
              </div>
              <div className="obs-card-source">
                <SourceIcon type={obs.type} className="icon" />
                <span>{obs.source}</span>
                <span className="obs-card-type">{t.sourceTypes[obs.type] ?? obs.type}</span>
              </div>
              <p className="obs-card-finding">{obs.finding}</p>
              <div className="obs-card-cultivation">
                <div className="obs-card-cultivation-bar">
                  <div
                    className="obs-card-cultivation-fill"
                    style={{ width: `${obs.cultivation_pct ?? 0}%` }}
                  />
                </div>
                <span>{obs.cultivation_pct ?? 0}% {t.cultivationSignal}</span>
              </div>
            </button>
          );
        })}
      </div>

      {hasQueried && (
        <div className="summary-block">
          <button className="btn btn-primary" onClick={handleGenerateSummary} disabled={summaryLoading}>
            <SparkleIcon className="icon" />
            {summaryLoading ? t.generating : t.generateSummary}
          </button>

          {summary && (
            <div className="summary-card">
              <div className="summary-card-header">
                <span>{t.aiSummary}</span>
                <span className="summary-source-tag">{summarySource === "claude" ? "Claude" : "mock"}</span>
              </div>
              <p>{summary}</p>
            </div>
          )}

          <button className="btn btn-secondary" onClick={handleExport} disabled={exporting}>
            <DownloadIcon className="icon" />
            {exporting ? t.exporting : t.exportLegalExhibit}
          </button>
        </div>
      )}
    </aside>
  );
}

