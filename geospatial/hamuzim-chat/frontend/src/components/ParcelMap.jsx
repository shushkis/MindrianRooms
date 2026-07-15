import { useEffect, useRef } from "react";
import L from "leaflet";

// Same free, no-signup satellite basemap hamuzim-app already uses -- good
// enough for a demo, and keeps the two sibling apps visually consistent.
// Swap for a licensed provider before any real traffic.
const ESRI_WORLD_IMAGERY =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
const ESRI_ATTRIBUTION =
  "Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community";

// GeoJSON/Leaflet want [lng, lat]; parcel.coordinates is already stored in
// that order in mock_data.py, so no swap needed here -- just close the ring
// if the caller didn't repeat the first point (Leaflet doesn't require a
// closed ring, but it's harmless to pass one either way).
function toLatLngs(coordinates) {
  return coordinates.map(([lng, lat]) => [lat, lng]);
}

export default function ParcelMap({ parcel }) {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const layerRef = useRef(null);

  // Init once.
  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return;
    const map = L.map(mapContainer.current, { zoomControl: true, attributionControl: true });
    L.tileLayer(ESRI_WORLD_IMAGERY, { attribution: ESRI_ATTRIBUTION, maxZoom: 19 }).addTo(map);
    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Redraw the polygon whenever the selected parcel changes.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !parcel) return;

    if (layerRef.current) {
      map.removeLayer(layerRef.current);
      layerRef.current = null;
    }

    const group = L.layerGroup();

    if (parcel.coordinates && parcel.coordinates.length >= 3) {
      const latlngs = toLatLngs(parcel.coordinates);
      const polygon = L.polygon(latlngs, {
        color: "#F4C20D",
        weight: 3,
        fillColor: "#F4C20D",
        fillOpacity: 0.18,
      });
      polygon.addTo(group);
      map.fitBounds(polygon.getBounds(), { padding: [40, 40] });
    } else if (parcel.center) {
      map.setView([parcel.center[1], parcel.center[0]], 15);
    }

    if (parcel.center) {
      L.marker([parcel.center[1], parcel.center[0]])
        .bindPopup(`<b>${parcel.id}</b><br>${parcel.name}`)
        .addTo(group);
    }

    group.addTo(map);
    layerRef.current = group;
  }, [parcel]);

  return <div ref={mapContainer} className="parcel-map" />;
}
