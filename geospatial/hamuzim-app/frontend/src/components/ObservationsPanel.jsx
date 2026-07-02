import { useState } from "react";
import { SourceIcon, SparkleIcon, DownloadIcon } from "./Icons";
import { SOURCE_TYPE_LABEL } from "../mockData";
import { generateSummary, exportPdf } from "../api";

export default function ObservationsPanel({ parcel, observations, selectedYear, onSelectYear, hasQueried }) {
  const [summary, setSummary] = useState(null);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [summarySource, setSummarySource] = useState(null);
  const [exporting, setExporting] = useState(false);

  async function handleGenerateSummary() {
    setSummaryLoading(true);
    try {
      const res = await generateSummary(observations, parcel);
      setSummary(res.summary);
      setSummarySource(res.source ?? "mock");
    } finally {
      setSummaryLoading(false);
    }
  }

  async function handleExport() {
    setExporting(true);
    try {
      const finalSummary = summary ?? (await generateSummary(observations, parcel)).summary;
      await exportPdf(parcel, observations, finalSummary);
    } catch (err) {
      console.error(err);
      alert("PDF export failed. Is the backend running?");
    } finally {
      setExporting(false);
    }
  }

  return (
    <aside className="panel panel-right">
      <div className="panel-header">
        <h2>Observations</h2>
        <span className="panel-subtitle">
          {hasQueried ? parcel?.name ?? "Demo parcel" : "Awaiting query"}
        </span>
      </div>

      {!hasQueried && (
        <div className="empty-state">
          <p>Observation cards will appear here once a parcel is queried.</p>
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
                <span className={`badge badge-${obs.confidence}`}>{obs.confidence}</span>
              </div>
              <div className="obs-card-source">
                <SourceIcon type={obs.type} className="icon" />
                <span>{obs.source}</span>
                <span className="obs-card-type">{SOURCE_TYPE_LABEL[obs.type] ?? obs.type}</span>
              </div>
              <p className="obs-card-finding">{obs.finding}</p>
              <div className="obs-card-cultivation">
                <div className="obs-card-cultivation-bar">
                  <div
                    className="obs-card-cultivation-fill"
                    style={{ width: `${obs.cultivation_pct ?? 0}%` }}
                  />
                </div>
                <span>{obs.cultivation_pct ?? 0}% cultivation signal</span>
              </div>
            </button>
          );
        })}
      </div>

      {hasQueried && (
        <div className="summary-block">
          <button className="btn btn-primary" onClick={handleGenerateSummary} disabled={summaryLoading}>
            <SparkleIcon className="icon" />
            {summaryLoading ? "Generating..." : "Generate Summary"}
          </button>

          {summary && (
            <div className="summary-card">
              <div className="summary-card-header">
                <span>AI Summary</span>
                <span className="summary-source-tag">{summarySource === "claude" ? "Claude" : "mock"}</span>
              </div>
              <p>{summary}</p>
            </div>
          )}

          <button className="btn btn-secondary" onClick={handleExport} disabled={exporting}>
            <DownloadIcon className="icon" />
            {exporting ? "Exporting..." : "Export Legal Exhibit"}
          </button>
        </div>
      )}
    </aside>
  );
}
