// import SelectionStatusCard from "@/components/SelectionStatusCard";
// import BookmarkCard from "@/components/BookmarkCard";

// import { fetchBookmarks } from "@/lib/fetchBookmarks";

// export default async function HomePage() {
//   // お気に入りデータ取得
//   const bookmarks = await fetchBookmarks();

//   return (
//     <main style={{ padding: "40px" }}>
//       <h1>ホーム</h1>

//       <div className="topCards">
//         {/* 選考状況カード */}
//         <SelectionStatusCard />

//         {/* お気に入りカード */}
//         <div>
//           <h2>お気に入り</h2>

//           {bookmarks.map((item) => (
//             <BookmarkCard key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// import SelectionStatusCard from "@/components/SelectionStatusCard";
// import { fetchBookmarks } from "@/lib/fetchBookmarks";

// export default async function HomePage() {
//   const bookmarks = await fetchBookmarks();

//   return (
//     <main style={{ padding: "40px" }}>
//       <h1>ホーム</h1>

//       <div className="topCards">
//         {/* 左：選考状況 */}
//         <SelectionStatusCard />

//         {/* 右：お気に入り */}
//         <div className="cardBox">
//           <h2>お気に入り</h2>

//           <ul>
//             {bookmarks.map((item) => (
//               <li key={item.id} className="row">
//                 <p className="company">{item.company}</p>
//                 <p className="tag">{item.tags}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </main>
//   );
// }

import SelectionStatusCard from "@/components/SelectionStatusCard";
import { fetchBookmarks } from "@/lib/fetchBookmarks";

export default async function HomePage() {
  const bookmarks = await fetchBookmarks();

  return (
    <main style={{ padding: "40px" }}>
      <h1>ホーム</h1>

      <div className="topCards">
        {/* 左：選考状況 */}
        <SelectionStatusCard />

        {/* 右：お気に入り */}
        <div className="cardBox">
          <h2>お気に入り</h2>

          <ul>
            {bookmarks.map((item) => (
              <li key={item.id} className="row">
                <p className="company">{item.company}</p>
                <p className="tag">{item.tags}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
