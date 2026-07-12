import EvidenceCard from "./EvidenceCard";

const SOURCE_LABEL = {
  claude: "Claude (tool-calling)",
  mock: "Rule-based fallback -- no API key",
  "mock-offline": "Offline fallback -- backend unreachable",
};

export default function MessageBubble({ role, content, evidence, source }) {
  const isUser = role === "user";

  return (
    <div className={`msg-row ${isUser ? "msg-row-user" : "msg-row-assistant"}`}>
      <div className={`msg-bubble ${isUser ? "msg-bubble-user" : "msg-bubble-assistant"}`}>
        {!isUser && source && <div className="msg-source-tag">{SOURCE_LABEL[source] ?? source}</div>}
        <p className="msg-text">{content}</p>
      </div>
      {!isUser && evidence?.length > 0 && (
        <div className="evidence-row">
          {evidence.map((e) => (
            <EvidenceCard key={e.parcel_id} evidence={e} />
          ))}
        </div>
      )}
    </div>
  );
}
