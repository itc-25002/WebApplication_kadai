// // import { fetchBookmarks } from "@/lib/fetchBookmarks";

// // export default async function BookmarkCard() {
// //   const bookmarks = await fetchBookmarks();

// //   return (
// //     <section className="card">
// //       <h2 className="cardTitle">お気に入り</h2>

// //       <ul className="cardList">
// //         {bookmarks.map((item) => (
// //           <li key={item.id}>
// //             ⭐ {item.company}
// //             {item.tag && <span className="tag">{item.tag}</span>}
// //           </li>
// //         ))}
// //       </ul>
// //     </section>
// //   );
// // }

// import styles from "./BookmarkCard.module.css";

// export default function BookmarkCard({ item }) {
//   return (
//     <div className={styles.card}>
//       <p className={styles.company}>{item.company}</p>
//     </div>
//   );
// }

// import styles from "./BookmarkCard.module.css";
// import { BookmarkItem } from "@/types/bookmark";

// type Props = {
//   item: BookmarkItem;
// };

// export default function BookmarkCard({ item }: Props) {
//   return (
//     <div className={styles.card}>
//       <div className={styles.row}>
//         <span className={styles.star}>⭐</span>
//         <p className={styles.company}>{item.company}</p>
//       </div>
//     </div>
//   );
// // }
// import styles from "./BookmarkCard.module.css";
// import { BookmarkItem } from "@/types/bookmark";

// type Props = {
//   item: BookmarkItem;
// };

// export default function BookmarkCard({ item }: Props) {
//   return (
//     <div className={styles.card}>
//       <p className={styles.company}>★ {item.company}</p>

//       <span className={`${styles.tag} ${styles.tags}`}>{item.tags}</span>
//     </div>
//   );
// }

import styles from "./BookmarkCard.module.css";
import { BookmarkItem } from "@/types/bookmark";

type Props = {
  item: BookmarkItem;
};

export default function BookmarkCard({ item }: Props) {
  return (
    <div className={styles.card}>
      <p className={styles.company}>★ {item.company}</p>

      <div className={styles.tags}>
        {item.tags.map((tag) => (
          <span key={tag} className={`${styles.tag} ${styles[tag]}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
