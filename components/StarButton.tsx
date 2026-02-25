
"use client";

import { useState, useEffect } from "react";

// props に onToggle を追加します
export default function StarButton({
  companyId,
  onToggle,
}: {
  companyId: string;
  onToggle?: () => void; // 親から関数が渡された場合のみ実行する
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(companyId));
  }, [companyId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let newFavorites;

    if (isFavorite) {
      newFavorites = favorites.filter((id: string) => id !== companyId);
    } else {
      newFavorites = [...favorites, companyId];
    }

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);

    // ★ 星が押されたことを親（お気に入りページ）に知らせる
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
        color: isFavorite ? "#f59e0b" : "#ccc",
      }}
    >
      {isFavorite ? "★" : "☆"}
    </button>
  );
}
