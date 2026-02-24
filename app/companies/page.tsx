// // import { fetchCompanies } from "@/lib/fetchCompanies";

// // export default async function CompaniesPage() {
// //   const companies = await fetchCompanies();

// //   return (
// //     <main>
// //       <h1>企業一覧</h1>

// //       {companies.map((company) => (
// //         <div key={company.id}>
// //           <h2>{company.name}</h2>

// //           <p>タグ：{company.tags.join(", ")}</p>

// //           <a href={company.hpurl} target="_blank">
// //             HPを見る
// //           </a>

// //           {company.mynaviurl && (
// //             <a href={company.mynaviurl} target="_blank">
// //               マイナビを見る
// //             </a>
// //           )}
// //         </div>
// //       ))}
// //     </main>
// //   );
// // }

// // import { fetchCompanies } from "@/lib/fetchCompanies";

// // export default async function CompaniesPage() {
// //   const companies = await fetchCompanies();

// //   return (
// //     <main>
// //       <h1>企業一覧</h1>

// //       {companies.map((company) => {
// //         return (
// //           <div
// //             key={company.id}
// //             style={{
// //               border: "1px solid #ddd",
// //               padding: "20px",
// //               marginBottom: "20px",
// //               borderRadius: "10px",
// //             }}
// //           >
// //             <h2>{company.name}</h2>

// //             <p>
// //               タグ：
// //               {company.tags.map((tag, index) => {
// //                 return (
// //                   <span key={index} style={{ marginRight: "8px" }}>
// //                     {tag}
// //                   </span>
// //                 );
// //               })}
// //             </p>

// //             <p>
// //               <a href={company.hpurl} target="_blank">
// //                 公式HP
// //               </a>
// //             </p>

// //             {company.mynaviurl && (
// //               <p>
// //                 <a href={company.mynaviurl} target="_blank">
// //                   マイナビ
// //                 </a>
// //               </p>
// //             )}
// //           </div>
// //         );
// //       })}
// //     </main>
// //   );
// // }

// // import { fetchCompanies } from "@/lib/fetchCompanies";

// // type Props = {
// //   searchParams: {
// //     tag?: string;
// //   };
// // };

// // export default async function CompaniesPage({ searchParams }: Props) {
// //   const companies = await fetchCompanies();
// //   const selectedTag = searchParams.tag;

// //   const filteredCompanies = selectedTag
// //     ? companies.filter((company) => company.tags.includes(selectedTag))
// //     : companies;

// //   return (
// //     <main>
// //       <h1>企業一覧</h1>

// //       {filteredCompanies.map((company) => (
// //         <div key={company.id}>
// //           <h2>{company.name}</h2>

// //           <p>
// //             タグ：
// //             {company.tags.map((tag, index) => (
// //               <a
// //                 key={index}
// //                 href={`/companies?tag=${tag}`}
// //                 style={{ marginRight: "8px" }}
// //               >
// //                 {tag}
// //               </a>
// //             ))}
// //           </p>

// //           <a href={company.hpurl} target="_blank">
// //             公式HP
// //           </a>
// //         </div>
// //       ))}
// //     </main>
// //   );
// // }

// import { fetchCompanies } from "@/lib/fetchCompanies";
// import Link from "next/link";
// import styles from "./page.module.css";

// const tagColors: Record<string, string> = {
//   自社開発: "#2563eb",
//   受託開発: "#16a34a",
//   システム: "#ea580c",
//   インフラ: "#7c3aed",
//   Sier: "#db2777",
//   SES: "#ffd700",
//   ソフトウェア開発: "#ba55d3",
//   セキュリティ: "008b8b",
//   独立系: "ef4444",
// };

// type Props = {
//   searchParams: {
//     tag?: string;
//   };
// };

// export default async function CompaniesPage({ searchParams }: Props) {
//   const companies = await fetchCompanies();
//   const selectedTag = searchParams.tag;

//   const filteredCompanies = selectedTag
//     ? companies.filter((company) => company.tags.includes(selectedTag))
//     : companies;

//   return (
//     <main style={{ padding: "40px" }}>
//       <h1>企業一覧</h1>

//       {/* 選択中タグ表示 */}
//       {selectedTag && (
//         <div style={{ marginBottom: "20px" }}>
//           <span>
//             絞り込み中：<strong>{selectedTag}</strong>
//           </span>
//           <Link
//             href="/companies"
//             style={{
//               marginLeft: "16px",
//               textDecoration: "underline",
//             }}
//           >
//             すべて表示
//           </Link>
//         </div>
//       )}

//       {/* 企業カード一覧 */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {filteredCompanies.map((company) => (
//           <div
//             key={company.id}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "12px",
//               padding: "20px",
//               background: "white",
//               boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
//               transition: "0.2s",
//             }}
//           >
//             <h2 style={{ marginBottom: "10px" }}>{company.name}</h2>

//             {/* タグ */}
//             <div style={{ marginBottom: "12px" }}>
//               {company.tags.map((tag, index) => (
//                 <Link
//                   key={index}
//                   href={`/companies?tag=${tag}`}
//                   style={{
//                     display: "inline-block",
//                     marginRight: "8px",
//                     marginBottom: "6px",
//                     padding: "4px 10px",
//                     borderRadius: "20px",
//                     background: selectedTag === tag ? "#333" : "#f0f0f0",
//                     color: selectedTag === tag ? "white" : "black",
//                     fontSize: "0.8rem",
//                   }}
//                 >
//                   {tag}
//                 </Link>
//               ))}
//             </div>

//             {/* リンク */}
//             <div>
//               <a
//                 href={company.hpurl}
//                 target="_blank"
//                 style={{ marginRight: "12px" }}
//               >
//                 公式HP
//               </a>

//               {company.mynaviurl && (
//                 <a href={company.mynaviurl} target="_blank">
//                   マイナビ
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

import { fetchCompanies } from "@/lib/fetchCompanies";
import Link from "next/link";
import styles from "./page.module.css";

const tagColors: Record<string, string> = {
  自社開発: "#ea580c",
  受託開発: "#16a34a",
  システム: "#2563eb",
  インフラ: "#7c3aed",
  Sier: "#db2777",
  SES: "#f59e0b",
  ソフトウェア開発: "#ba55d3",
  セキュリティ: "#008b8b",
  独立系: "#ef4444",
};

type Props = {
  searchParams: {
    tag?: string;
  };
};

export default async function CompaniesPage({ searchParams }: Props) {
  const companies = await fetchCompanies();
  const selectedTag = searchParams.tag;

  const filteredCompanies = selectedTag
    ? companies.filter((company) => company.tags.includes(selectedTag))
    : companies;

  return (
    <main className={styles.pageWrapper}>
      <h1 className={styles.title}>企業一覧</h1>

      {selectedTag && (
        <div className={styles.filterInfo}>
          <span>
            絞り込み中：<strong>{selectedTag}</strong>
          </span>
          <Link href="/companies" className={styles.clearButton}>
            すべて表示
          </Link>
        </div>
      )}

      <div className={styles.grid}>
        {filteredCompanies.map((company) => (
          <div key={company.id} className={styles.card}>
            <h2 className={styles.companyName}>{company.name}</h2>

            <div className={styles.tagList}>
              {company.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/companies?tag=${tag}`}
                  className={styles.tag}
                  style={{
                    background: tagColors[tag] ?? "#e5e7eb",
                  }}
                >
                  {tag}
                </Link>
              ))}
            </div>

            <div className={styles.linkArea}>
              <a
                href={company.hpurl}
                target="_blank"
                className={styles.linkButton}
              >
                公式HP
              </a>

              {company.mynaviurl && (
                <a
                  href={company.mynaviurl}
                  target="_blank"
                  className={`${styles.linkButton} ${styles.secondary}`}
                >
                  マイナビ
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
