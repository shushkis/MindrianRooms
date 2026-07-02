import { useEffect, useRef, useState } from "react";
import L from "leaflet";

// leaflet-draw is a legacy global-script build (no CJS/AMD wrapper) that
// patches a *global* `L`. Static `import "leaflet-draw"` would get hoisted
// and evaluate before our own `window.L = L` assignment ever runs (ESM
// dependency evaluation always precedes a module's own statement list) --
// so leaflet-draw would silently no-op. A dynamic import runs at the point
// it's called, not hoisted, which lets us guarantee ordering.
window.L = L;
let leafletDrawPromise = null;
function ensureLeafletDraw() {
  if (!leafletDrawPromise) leafletDrawPromise = import("leaflet-draw");
  return leafletDrawPromise;
}

// Free, no-signup satellite basemap. Good enough for a demo; swap for a
// licensed provider (Mapbox, Maxar direct, Planet) before any real traffic.
const ESRI_WORLD_IMAGERY =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const ESRI_ATTRIBUTION =
  "Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community";

const CENTER_LATLNG = [31.5, 35.3]; // Judea & Samaria
const ZOOM = 9;

const CONFIDENCE_FILL = {
  high: "#2ea043",
  medium: "#d29922",
  low: "#e5484d",
};

function toFeature(coordinates) {
  return {
    type: "Feature",
    properties: {},
    geometry: { type: "Polygon", coordinates: [coordinates] },
  };
}

export default function MapPanel({
  parcel,
  observations,
  selectedYear,
  showOverlay,
  onToggleOverlay,
  onPolygonComplete,
  hasQueried,
}) {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const drawnItemsRef = useRef(null);
  const overlayLayerRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  // Init map once leaflet-draw has patched L.Control.Draw onto the global
  useEffect(() => {
    let cancelled = false;

    ensureLeafletDraw().then(() => {
      if (cancelled || mapRef.current) return;

      const map = L.map(mapContainer.current, {
        center: CENTER_LATLNG,
        zoom: ZOOM,
        zoomControl: true,
      });
      mapRef.current = map;

      L.tileLayer(ESRI_WORLD_IMAGERY, {
        attribution: ESRI_ATTRIBUTION,
        maxZoom: 19,
      }).addTo(map);

      const drawnItems = new L.FeatureGroup();
      drawnItemsRef.current = drawnItems;
      map.addLayer(drawnItems);

      const drawControl = new L.Control.Draw({
        position: "topleft",
        draw: {
          polygon: { shapeOptions: { color: "#3b82f6", weight: 2 } },
          rectangle: { shapeOptions: { color: "#3b82f6", weight: 2 } },
          circle: false,
          circlemarker: false,
          marker: false,
          polyline: false,
        },
        edit: {
          featureGroup: drawnItems,
          remove: true,
        },
      });
      map.addControl(drawControl);

      map.on(L.Draw.Event.CREATED, (e) => {
        drawnItems.clearLayers();
        drawnItems.addLayer(e.layer);
        onPolygonComplete?.(e.layer.toGeoJSON().geometry);
      });
      map.on(L.Draw.Event.EDITED, (e) => {
        e.layers.eachLayer((layer) => {
          onPolygonComplete?.(layer.toGeoJSON().geometry);
        });
      });
      map.on(L.Draw.Event.DELETED, () => {
        onPolygonComplete?.(null);
      });

      setMapReady(true);
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fly to parcel once queried
  useEffect(() => {
    if (!mapReady || !parcel?.center) return;
    const [lng, lat] = parcel.center;
    mapRef.current.flyTo([lat, lng], 14.5, { duration: 1.2 });
  }, [mapReady, parcel]);

  // Add / update the cultivation-signal overlay layer
  useEffect(() => {
    if (!mapReady || !hasQueried || !parcel) return;
    const obs = observations.find((o) => o.year === selectedYear) ?? observations[observations.length - 1];
    const color = CONFIDENCE_FILL[obs?.confidence] ?? "#8b949e";
    const opacity = showOverlay ? 0.15 + ((obs?.cultivation_pct ?? 50) / 100) * 0.45 : 0;
    const feature = toFeature(parcel.coordinates);

    if (!overlayLayerRef.current) {
      overlayLayerRef.current = L.geoJSON(feature, {
        style: { color, weight: 2, fillColor: color, fillOpacity: opacity },
      }).addTo(mapRef.current);
    } else {
      overlayLayerRef.current.clearLayers();
      overlayLayerRef.current.addData(feature);
      overlayLayerRef.current.setStyle({ color, weight: 2, fillColor: color, fillOpacity: opacity });
    }
  }, [mapReady, hasQueried, parcel, observations, selectedYear, showOverlay]);

  return (
    <main className="panel panel-map">
      <div ref={mapContainer} className="map-container" />

      <div className="map-controls">
        <button
          className={`map-toggle ${showOverlay ? "map-toggle-active" : ""}`}
          onClick={onToggleOverlay}
          disabled={!hasQueried}
        >
          {showOverlay ? "Hide" : "Show"} cultivation overlay
        </button>
        {selectedYear && hasQueried && <span className="map-toggle-year">Year: {selectedYear}</span>}
      </div>

      {!hasQueried && (
        <div className="map-hint">Draw a polygon or rectangle (top-left tool) to query evidence for that parcel.</div>
      )}
    </main>
  );
}
