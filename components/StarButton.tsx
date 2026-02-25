// // components/StarButton.tsx
// "use client"; // クリックイベントを扱うために必要です

// import { useState, useEffect } from "react";

// export default function StarButton({ companyId }: { companyId: string }) {
//   const [isFavorite, setIsFavorite] = useState(false);

//   // ブラウザ読み込み時に、既にお気に入りに入っているか確認
//   useEffect(() => {
//     const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
//     setIsFavorite(favorites.includes(companyId));
//   }, [companyId]);

//   const toggleFavorite = () => {
//     const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
//     let newFavorites;

//     if (isFavorite) {
//       // お気に入りから削除
//       newFavorites = favorites.filter((id: string) => id !== companyId);
//     } else {
//       // お気に入りに追加
//       newFavorites = [...favorites, companyId];
//     }

//     localStorage.setItem("favorites", JSON.stringify(newFavorites));
//     setIsFavorite(!isFavorite);
//   };

//   return (
//     <button
//       onClick={toggleFavorite}
//       style={{
//         background: "none",
//         border: "none",
//         cursor: "pointer",
//         fontSize: "1.5rem",
//         color: isFavorite ? "#f59e0b" : "#ccc", // お気に入りならオレンジ色
//       }}
//     >
//       {isFavorite ? "★" : "☆"}
//     </button>
//   );
// }

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
