import { mockChatReply } from "./mockData";

const BASE = "/api";

export async function sendChatMessage(message, history = []) {
  try {
    const res = await fetch(`${BASE}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history }),
    });
    if (!res.ok) throw new Error(`/chat -> ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn("[HaMuzim Chat] backend unreachable, using local mock.", err);
    return mockChatReply(message);
  }
}
