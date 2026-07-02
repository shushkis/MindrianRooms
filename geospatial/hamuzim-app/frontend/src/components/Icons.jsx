// Minimal inline SVG icon set -- no external icon library dependency.

export function SourceIcon({ type, className }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", className, fill: "none" };
  if (type === "aerial") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="1.8">
        <path
          d="M2 16l8-2 3 5 2-1-2-6 7-4c1-.6 1-2 0-2.6-.6-.3-1.3-.2-2 .2L9 10 3 8l-1 2 5 3-3 2z"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "satellite") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="1.8">
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M11 9V6M13 9V6M11 15v3M13 15v3M9 11H6M9 13H6M15 11h3M15 13h3" strokeLinecap="round" />
        <path d="M4 4l3 3M20 4l-3 3M4 20l3-3M20 20l-3-3" strokeLinecap="round" />
      </svg>
    );
  }
  // document
  return (
    <svg {...common} stroke="currentColor" strokeWidth="1.8">
      <path d="M6 2.5h8l4 4V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z" strokeLinejoin="round" />
      <path d="M14 2.5V7h4M8 12h8M8 15.5h8M8 19h5" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleIcon({ className }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2z" />
    </svg>
  );
}

export function DownloadIcon({ className }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" strokeLinecap="round" />
    </svg>
  );
}
