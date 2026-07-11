import { useEffect, useRef, useState } from "react";
import MessageBubble from "./components/MessageBubble";
import { sendChatMessage } from "./api";
import { t } from "./translations";

export default function App() {
  const [lang, setLang] = useState("en");
  // Welcome bubble is NOT stored in `messages` -- it's re-derived from
  // `lang` on every render (below) so toggling the language updates it too,
  // instead of freezing whatever language was active when the component
  // first mounted.
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  function toggleLang() {
    setLang((prev) => (prev === "en" ? "he" : "en"));
  }

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
      const result = await sendChatMessage(message, history, lang);
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

  const dir = lang === "he" ? "rtl" : "ltr";

  return (
    <div className="app-shell" dir={dir}>
      <header className="app-header">
        <div className="app-brand">
          <span className="app-brand-mark">HC</span>
          <div>
            <h1>{t(lang, "brandName")}</h1>
            <span className="app-brand-tagline">{t(lang, "tagline")}</span>
          </div>
        </div>
        <div className="app-header-right">
          {loading && <span className="loading-indicator">{t(lang, "thinking")}</span>}
          <button type="button" className="btn btn-lang" onClick={toggleLang}>
            {t(lang, "langToggle")}
          </button>
        </div>
      </header>

      <div className="chat-body" ref={scrollRef}>
        <div className="chat-messages">
          {messages.length === 0 && (
            <MessageBubble role="assistant" content={t(lang, "welcome")} evidence={[]} source={undefined} lang={lang} />
          )}
          {messages.map((m, i) => (
            <MessageBubble key={i} role={m.role} content={m.content} evidence={m.evidence} source={m.source} lang={lang} />
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
          {t(lang, "suggestions").map((s) => (
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
            placeholder={t(lang, "inputPlaceholder")}
            disabled={loading}
          />
          <button type="submit" className="btn btn-primary" disabled={loading || !input.trim()}>
            {t(lang, "send")}
          </button>
        </form>
      </div>
    </div>
  );
}
