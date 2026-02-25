

"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import StarButton from "@/components/StarButton"; // StarButtonをインポート
import styles from "../companies/page.module.css";

export default function BookmarksPage() {
  const [favoriteCompanies, setFavoriteCompanies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadFavorites = useCallback(async () => {
    try {
      const favoriteIds = JSON.parse(localStorage.getItem("favorites") || "[]");

      if (favoriteIds.length === 0) {
        setFavoriteCompanies([]);
        setIsLoading(false);
        return;
      }

      const response = await fetch("/api/companies");
      const allCompanies = await response.json();
      const filtered = allCompanies.filter((company: any) =>
        favoriteIds.includes(company.id),
      );
      setFavoriteCompanies(filtered);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 初回読み込み
  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  if (isLoading)
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#f9fafb",
          minHeight: "100vh",
        }}
      >
        読み込み中...
      </div>
    );

  if (favoriteCompanies.length === 0) {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#f9fafb",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>お気に入り</h1>
        <p>
          まだ星マークを付けた企業がありません。企業一覧から気になる会社をチェックしてみましょう！
        </p>
        <Link
          href="/"
          style={{
            color: "#2563eb",
            textDecoration: "underline",
            display: "inline-block",
            marginTop: "15px",
          }}
        >
          企業一覧へ戻る
        </Link>
      </div>
    );
  }

  return (
    <main
      style={{
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "30px",
            borderLeft: "8px solid #f59e0b",
            paddingLeft: "15px",
            color: "#333",
          }}
        >
          気になる企業など
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          {favoriteCompanies.map((company) => (
            <div
              key={company.id}
              style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "30px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                border: "1px solid #f0f0f0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    color: "#333",
                    marginBottom: "10px",
                  }}
                >
                  {company.name}
                </h2>

                <StarButton companyId={company.id} onToggle={loadFavorites} />
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginBottom: "20px",
                }}
              >
                {company.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.75rem",
                      padding: "3px 10px",
                      borderRadius: "20px",
                      background: "#f3f4f6",
                      color: "#666",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "15px" }}>
                <a
                  href={company.hpurl}
                  target="_blank"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "12px",
                    background: "#333",
                    color: "#fff",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  公式HP
                </a>
                {company.mynaviurl && (
                  <a
                    href={company.mynaviurl}
                    target="_blank"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      padding: "12px",
                      background: "#fff",
                      color: "#333",
                      borderRadius: "8px",
                      border: "1px solid #333",
                      textDecoration: "none",
                    }}
                  >
                    マイナビ
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}