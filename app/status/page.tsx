// import { fetchSelectionStatus } from "@/lib/fetchSelectionStatus";
// import styles from "./status.module.css";

// export default async function StatusPage() {
//   const allStatuses = await fetchSelectionStatus();

//   const ongoing = allStatuses.filter(
//     (item) => item.status === "会社説明会参加済",
//   );

//   return (
//     <main className={styles.container}>
//       <h1 className={styles.title}>選考状況</h1>

//       <div className={styles.card}>
//         <ul className={styles.list}>
//           {ongoing.map((item) => (
//             <li key={item.id} className={styles.item}>
//               <span className={styles.company}>{item.company}</span>

//               <span className={styles.badge}>{item.status}</span>

//               <span className={styles.date}>
//                 {new Date(item.date).toLocaleDateString("ja-JP")}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </main>
//   );
// }

import { fetchSelectionStatus } from "@/lib/fetchSelectionStatus";
import styles from "./status.module.css";

export default async function StatusPage() {
  const allStatuses = await fetchSelectionStatus();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>選考状況</h1>

      <div className={styles.card}>
        <ul className={styles.list}>
          {allStatuses.map((item) => (
            <li key={item.id} className={styles.item}>
              <span className={styles.company}>{item.company}</span>

              <span className={styles.badge}>{item.status}</span>

              <span className={styles.date}>
                {new Date(item.date).toLocaleDateString("ja-JP")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
