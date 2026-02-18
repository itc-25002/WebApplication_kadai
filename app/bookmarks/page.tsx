// import { fetchBookmarks } from "@/lib/fetchBookmarks";

// export default async function BookmarksPage() {
//   const bookmarks = await fetchBookmarks();

//   return (
//     <main>
//       <h1>お気に入り企業一覧</h1>
//       <ul>
//         {bookmarks.map((item) => (
//           <li key={item.id}>{item.company}</li>
//         ))}
//       </ul>
//     </main>
//   );
// }

import { fetchBookmarks } from "@/lib/fetchBookmarks";
import BookmarkCard from "@/components/BookmarkCard";

export default async function BookmarksPage() {
  const bookmarks = await fetchBookmarks();

  return (
    <main style={{ padding: "40px" }}>
      <h1>お気に入り企業一覧</h1>

      <div style={{ marginTop: "20px" }}>
        {bookmarks.map((item) => (
          <BookmarkCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
