"use client";

import { useState, useEffect } from "react";

const STATUS_OPTIONS = [
  "選択してください",
  "会社説明会参加済み",
  "書類選考中",
  "面接中",
  "内定",
  "不採用",
];

const statusColors: Record<string, { bg: string; text: string }> = {
  選択してください: { bg: "#e5e7eb", text: "#4b5563" },
  会社説明会参加済み: { bg: "#e6e6fa", text: "#191970" },
  書類選考中: { bg: "#dbeafe", text: "#1d4ed8" },
  面接中: { bg: "#fef3c7", text: "#b45309" },
  内定: { bg: "#dcfce7", text: "#15803d" },
  不採用: { bg: "#fee2e2", text: "#b91c1c" },
};

export default function StatusSelector({ companyId }: { companyId: string }) {
  const [status, setStatus] = useState("選択してください");

  // 初期値の読み込み
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("custom_statuses") || "{}");
    if (saved[companyId]) {
      setStatus(saved[companyId].status);
    }
  }, [companyId]);

  // 更新処理
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    const today = new Date().toISOString();
    setStatus(newStatus);

    const saved = JSON.parse(localStorage.getItem("custom_statuses") || "{}");
    saved[companyId] = { status: newStatus, date: today };
    localStorage.setItem("custom_statuses", JSON.stringify(saved));
  };

  const color = statusColors[status] || { bg: "#f3f4f6", text: "#666" };

  return (
    <select
      value={status}
      onChange={handleChange}
      style={{
        backgroundColor: color.bg,
        color: color.text,
        appearance: "none",
        padding: "4px 30px 4px 12px",
        borderRadius: "20px",
        fontSize: "0.75rem",
        fontWeight: "bold",
        cursor: "pointer",
        border: "none",
        outline: "none",
        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${encodeURIComponent(color.text)}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 10px center",
        backgroundSize: "14px",
      }}
    >
      {STATUS_OPTIONS.map((opt) => (
        <option
          key={opt}
          value={opt}
          style={{
            backgroundColor: "#fff",
            color: "#333", 
            fontSize: "14px",
          }}
        >
          {opt}
        </option>
      ))}
    </select>
  );
}
