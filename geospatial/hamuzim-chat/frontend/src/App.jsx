import { useEffect, useRef, useState } from "react";
import MessageBubble from "./components/MessageBubble";
import { sendChatMessage } from "./api";

const SUGGESTIONS = [
  "Which parcels show construction after 2015?",
  "Show me cultivation loss since 2015.",
  "Are there any boundary disputes?",
  "What's the evidence record for P-001?",
];

const WELCOME = {
  role: "assistant",
  content:
    "Ask me about the parcel evidence set -- cultivation, construction, abandonment, or document signals, across any of the six demo parcels. Every answer cites the parcel and observation year it came from.",
  evidence: [],
  source: undefined,
};

export default function App() {
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend(text) {
    const message = (text ?? input).trim();
    if (!message || loading) return;

    const history = messages
      .filter((m) => m.source !== undefined || m.role === "user")
      .map((m) => ({ role: m.role, content: m.content }));

    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setInput("");
    setLoading(true);
    try {
      const result = await sendChatMessage(message, history);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: result.reply,
          evidence: result.evidence ?? [],
          source: result.source,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSend();
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-brand">
          <span className="app-brand-mark">HC</span>
          <div>
            <h1>HaMuzim Chat</h1>
            <span className="app-brand-tagline">Ask the evidence, not the map</span>
          </div>
        </div>
        {loading && <span className="loading-indicator">thinking&hellip;</span>}
      </header>

      <div className="chat-body" ref={scrollRef}>
        <div className="chat-messages">
          {messages.map((m, i) => (
            <MessageBubble key={i} role={m.role} content={m.content} evidence={m.evidence} source={m.source} />
          ))}
          {loading && (
            <div className="msg-row msg-row-assistant">
              <div className="msg-bubble msg-bubble-assistant msg-bubble-loading">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="chat-footer">
        <div className="suggestion-row">
          {SUGGESTIONS.map((s) => (
            <button key={s} className="suggestion-chip" onClick={() => handleSend(s)} disabled={loading}>
              {s}
            </button>
          ))}
        </div>
        <form className="chat-input-row" onSubmit={handleSubmit}>
          <input
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about a parcel, a signal type, or a date range..."
            disabled={loading}
          />
          <button type="submit" className="btn btn-primary" disabled={loading || !input.trim()}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
