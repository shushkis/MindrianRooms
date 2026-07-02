import { DEMO_PARCEL, MOCK_AI_SUMMARY, OBSERVATIONS } from "./mockData";

const BASE = "/api";

async function safeFetch(path, options) {
  try {
    const res = await fetch(`${BASE}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
    if (!res.ok) throw new Error(`${path} -> ${res.status}`);
    return res;
  } catch (err) {
    console.warn(`[HaMuzim] backend unreachable for ${path}, using local mock.`, err);
    return null;
  }
}

export async function queryPolygon(polygon) {
  const res = await safeFetch("/query", {
    method: "POST",
    body: JSON.stringify({ polygon }),
  });
  if (res) return res.json();
  return { parcel: DEMO_PARCEL, observations: OBSERVATIONS };
}

export async function generateSummary(observations, parcel) {
  const res = await safeFetch("/summary", {
    method: "POST",
    body: JSON.stringify({ observations, parcel }),
  });
  if (res) return res.json();
  return { summary: MOCK_AI_SUMMARY, source: "mock" };
}

export async function exportPdf(parcel, observations, summary) {
  const res = await fetch(`${BASE}/export-pdf`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ parcel, observations, summary }),
  });
  if (!res.ok) throw new Error("PDF export failed");
  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "hamuzim-exhibit.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
}
