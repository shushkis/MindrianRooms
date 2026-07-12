import EvidenceCard from "./EvidenceCard";
import { t } from "../translations";

export default function MessageBubble({ role, content, evidence, source, lang = "en" }) {
  const isUser = role === "user";
  const sourceLabels = t(lang, "sourceLabels");

  return (
    <div className={`msg-row ${isUser ? "msg-row-user" : "msg-row-assistant"}`}>
      <div className={`msg-bubble ${isUser ? "msg-bubble-user" : "msg-bubble-assistant"}`}>
        {!isUser && source && <div className="msg-source-tag">{sourceLabels[source] ?? source}</div>}
        <p className="msg-text">{content}</p>
      </div>
      {!isUser && evidence?.length > 0 && (
        <div className="evidence-row">
          {evidence.map((e) => (
            <EvidenceCard key={e.parcel_id} evidence={e} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}
