"use client";

import { useState, useEffect } from "react";

const STATUS_OPTIONS = [
  "エントリー前",
  "書類選考中",
  "面接中",
  "内定",
  "お見送り",
];

export default function StatusEditor({
  companyId,
  initialStatus,
}: {
  companyId: string;
  initialStatus?: string;
}) {
  const [status, setStatus] = useState(initialStatus || "エントリー前");

  // ブラウザ読み込み時に保存されたステータスを反映
  useEffect(() => {
    const savedStatuses = JSON.parse(
      localStorage.getItem("companyStatuses") || "{}",
    );
    if (savedStatuses[companyId]) {
      setStatus(savedStatuses[companyId]);
    }
  }, [companyId]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setStatus(newStatus);

    // LocalStorageに保存
    const savedStatuses = JSON.parse(
      localStorage.getItem("companyStatuses") || "{}",
    );
    savedStatuses[companyId] = newStatus;
    localStorage.setItem("companyStatuses", JSON.stringify(savedStatuses));
  };

  return (
    <select
      value={status}
      onChange={handleChange}
      style={{
        padding: "4px 8px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        fontSize: "0.875rem",
        backgroundColor: "#fff",
        cursor: "pointer",
      }}
    >
      {STATUS_OPTIONS.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
