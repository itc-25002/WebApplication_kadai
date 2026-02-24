// import { fetchBookmarks } from "@/lib/fetchBookmarks";
// import BookmarkCard from "@/components/BookmarkCard";

// export default async function BookmarksPage() {
//   const bookmarks = await fetchBookmarks();

//   return (
//     <main style={{ padding: "40px" }}>
//       <h1>お気に入り企業一覧</h1>

//       <div style={{ marginTop: "20px" }}>
//         {bookmarks.map((item) => (
//           <BookmarkCard key={item.id} item={item} />
//         ))}
//       </div>
//     </main>
//   );
// }

import { fetchBookmarks } from "@/lib/fetchBookmarks";
import BookmarkCard from "@/components/BookmarkCard";
import styles from "./page.module.css";

export default async function BookmarksPage() {
  const bookmarks = await fetchBookmarks();

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>お気に入り企業</h1>
        <p className={styles.count}>{bookmarks.length}件</p>
      </div>

      {bookmarks.length === 0 ? (
        <p className={styles.empty}>まだお気に入りが登録されていません。</p>
      ) : (
        <div className={styles.grid}>
          {bookmarks.map((item) => (
            <BookmarkCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </main>
  );
}