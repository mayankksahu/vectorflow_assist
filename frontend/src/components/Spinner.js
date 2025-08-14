export default function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 14,
        color: "#374151",
      }}
    >
      <div
        style={{
          width: 14,
          height: 14,
          border: "2px solid #ccc",
          borderTopColor: "#4f46e5",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      Loading...
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
