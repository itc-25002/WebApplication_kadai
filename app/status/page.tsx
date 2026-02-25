"use client";

import { useState, useEffect } from "react";
import styles from "./status.module.css";

// ステータスの選択肢
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

export default function StatusPage() {
  const [statuses, setStatuses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStatus() {
      try {
        // キャッシュを持たずに最新データを取得
        const response = await fetch("/api/selection-status", {
          cache: "no-store",
        });
        const microcmsData = await response.json();

        // LocalStorageからユーザーの保存データを取得
        const savedUpdates = JSON.parse(
          localStorage.getItem("custom_statuses") || "{}",
        );

        // 全企業データと保存データを合成し、表示対象を絞り込む
        const mergedData = microcmsData
          .map((item: any) => {
            // IDを文字列に統一（MicroCMSの仕様に合わせてidかcontentIdを使用）
            const stringId = String(item.id || item.contentId);
            const savedItem = savedUpdates[stringId];

            if (savedItem) {
              return {
                ...item,
                id: stringId,
                status: savedItem.status,
                date: savedItem.date,
              };
            }
            // 保存がない場合はデフォルト状態
            return { ...item, id: stringId, status: "選択してください" };
          })
          .filter((item: any) => item.status !== "選択してください");

        setStatuses(mergedData);
      } catch (error) {
        console.error("データの読み込みに失敗しました", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadStatus();
  }, []);

  // ステータス変更時の処理
  const handleStatusChange = (id: string, newStatus: string) => {
    const today = new Date().toISOString();
    const stringId = String(id);

    // 1. 画面上の表示を更新（「選択してください」ならリストから消す）
    if (newStatus === "選択してください") {
      setStatuses((prev) => prev.filter((s) => String(s.id) !== stringId));
    } else {
      setStatuses((prev) =>
        prev.map((s) =>
          String(s.id) === stringId
            ? { ...s, status: newStatus, date: today }
            : s,
        ),
      );
    }

    // 2. LocalStorageを更新
    const savedUpdates = JSON.parse(
      localStorage.getItem("custom_statuses") || "{}",
    );
    savedUpdates[stringId] = { status: newStatus, date: today };
    localStorage.setItem("custom_statuses", JSON.stringify(savedUpdates));
  };

  if (isLoading) return <div className={styles.pageWrapper}>読み込み中...</div>;

  return (
    <main className={styles.pageWrapper}>
      <h1 className={styles.title}>選考状況</h1>

      <div className={styles.grid}>
        {statuses.length === 0 ? (
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "60px 20px",
            }}
          >
            <p style={{ color: "#666", fontSize: "1.1rem" }}>
              現在、選考中の企業はありません。
            </p>
            <p style={{ color: "#888", fontSize: "0.9rem", marginTop: "10px" }}>
              企業一覧ページからステータスを更新してください。
            </p>
          </div>
        ) : (
          statuses.map((item) => {
            const color =
              statusColors[item.status] || statusColors["選択してください"];

            return (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.companyName}>
                    {item.name || item.company}
                  </h2>

                  <select
                    value={item.status}
                    onChange={(e) =>
                      handleStatusChange(item.id, e.target.value)
                    }
                    className={styles.statusSelect}
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
                        style={{ backgroundColor: "#fff", color: "#333" }}
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.infoRow}>
                    <span className={styles.label}>最終更新日:</span>
                    <span className={styles.date}>
                      {new Date(item.date).toLocaleDateString("ja-JP")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}
