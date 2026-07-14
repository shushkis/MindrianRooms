import { mockCaseReview, mockChatReply } from "./mockData";

// Local dev: unset, so this resolves to "/api" and rides Vite's dev-server
// proxy (vite.config.js) to the backend on :8001. Production: set
// VITE_API_BASE_URL to the deployed backend's full URL (e.g.
// "https://groundtruth-api.onrender.com/api") at build time -- there's no
// dev-proxy once this is a static build served from a different origin
// than the backend.
const BASE = import.meta.env.VITE_API_BASE_URL || "/api";

export async function sendChatMessage(message, history = [], lang = "en") {
  try {
    const res = await fetch(`${BASE}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history, lang }),
    });
    if (!res.ok) throw new Error(`/chat -> ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn("[GroundTruth] backend unreachable, using local mock.", err);
    return mockChatReply(message, lang);
  }
}

export async function getCaseReview(parcelId, lang = "en") {
  try {
    const res = await fetch(`${BASE}/case-review`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ parcel_id: parcelId, lang }),
    });
    if (!res.ok) throw new Error(`/case-review -> ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn("[GroundTruth] backend unreachable, using local case-review mock.", err);
    return mockCaseReview(parcelId, lang);
  }
}
