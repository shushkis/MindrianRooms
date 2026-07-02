import { useState } from "react";
import TimelinePanel from "./components/TimelinePanel";
import MapPanel from "./components/MapPanel";
import ObservationsPanel from "./components/ObservationsPanel";
import { queryPolygon } from "./api";

export default function App() {
  const [lang, setLang] = useState("en");
  const [parcel, setParcel] = useState(null);
  const [observations, setObservations] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [loading, setLoading] = useState(false);

  const hasQueried = Boolean(parcel);

  async function handlePolygonComplete(geometry) {
    if (!geometry) return;
    setLoading(true);
    try {
      const result = await queryPolygon(geometry);
      setParcel(result.parcel);
      setObservations(result.observations);
      setSelectedYear(result.observations[result.observations.length - 1]?.year ?? null);
      setShowOverlay(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-brand">
          <span className="app-brand-mark">HM</span>
          <div>
            <h1>HaMuzim</h1>
            <span className="app-brand-tagline">Spatial Evidence Platform</span>
          </div>
        </div>
        <div className="app-header-right">
          {loading && <span className="loading-indicator">Querying evidence...</span>}
          <div className="lang-toggle" role="group" aria-label="Language">
            <button className={lang === "en" ? "lang-active" : ""} onClick={() => setLang("en")}>
              EN
            </button>
            <button className={lang === "he" ? "lang-active" : ""} onClick={() => setLang("he")}>
              עב
            </button>
          </div>
        </div>
      </header>

      <div className="app-body">
        <TimelinePanel
          observations={observations}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
          hasQueried={hasQueried}
        />
        <MapPanel
          parcel={parcel}
          observations={observations}
          selectedYear={selectedYear}
          showOverlay={showOverlay}
          onToggleOverlay={() => setShowOverlay((v) => !v)}
          onPolygonComplete={handlePolygonComplete}
          hasQueried={hasQueried}
        />
        <ObservationsPanel
          parcel={parcel}
          observations={observations}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
          hasQueried={hasQueried}
        />
      </div>
    </div>
  );
}
