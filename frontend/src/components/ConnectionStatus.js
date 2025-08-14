import { useEffect, useRef, useState } from "react";

// NOTE: yahi URL SubmitButton me use ho raha hai.
// Agar local backend check karna ho to yahan ko switch kar do:
// const PING_URL = "http://localhost:8000/pipelines/parse";
const PING_URL = "https://vectorshift-assignment.onrender.com/pipelines/parse";

export default function ConnectionStatus() {
  const [status, setStatus] = useState("checking"); // "online" | "offline" | "checking"
  const intervalRef = useRef(null);

  const check = async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const res = await fetch(PING_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // harmless ping: empty pipeline
        body: JSON.stringify({ nodes: [], edges: [] }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      setStatus(res.ok ? "online" : "offline");
    } catch {
      setStatus("offline");
    }
  };

  useEffect(() => {
    check(); // initial
    intervalRef.current = setInterval(check, 20000); // every 20s
    return () => clearInterval(intervalRef.current);
  }, []);

  const color =
    status === "online" ? "#22c55e" : status === "offline" ? "#ef4444" : "#9ca3af";
  const text =
    status === "online" ? "Online" : status === "offline" ? "Offline" : "Checking…";

  // floating chip on right — no existing CSS touched
  return (
    <div
      style={{
        position: "fixed",
        top: 12,
        right: 12,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "white",
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: "6px 10px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: color,
          display: "inline-block",
        }}
      />
      <span style={{ fontSize: 12, color: "#374151" }}>Backend: {text}</span>
    </div>
  );
}
