// import { fetchCompanies } from "@/lib/fetchCompanies";

// export default async function CompaniesPage() {
//   const companies = await fetchCompanies();

//   return (
//     <main style={{ padding: "40px" }}>
//       <h1>企業一覧</h1>

//       {companies.map((company) => (
//         <div
//           key={company.id}
//           style={{
//             border: "1px solid #ccc",
//             padding: "16px",
//             marginBottom: "20px",
//             borderRadius: "8px",
//           }}
//         >
//           {/* 企業名 */}
//           <h2>{company.name}</h2>

//           {/* タグ */}
//           <div>
//             {company.tags.map((tag) => (
//               <span
//                 key={tag}
//                 style={{
//                   marginRight: "8px",
//                   padding: "4px 8px",
//                   border: "1px solid gray",
//                   borderRadius: "6px",
//                 }}
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* HP */}
//           <p>
//             HP：
//             <a href={company.hpUrl} target="_blank">
//               {company.hpUrl}
//             </a>
//           </p>

//           {/* マイナビ（あれば表示） */}
//           {company.mynaviUrl && (
//             <p>
//               マイナビ：
//               <a href={company.mynaviUrl} target="_blank">
//                 {company.mynaviUrl}
//               </a>
//             </p>
//           )}
//         </div>
//       ))}
//     </main>
//   );
// }

import { fetchCompanies } from "@/lib/fetchCompanies";

export default async function CompanyPage() {
  const companies = await fetchCompanies();

  return (
    <main style={{ padding: "40px" }}>
      <h1>企業一覧</h1>

      <ul>
        {companies.map((item) => (
          <li key={item.id} style={{ marginBottom: "20px" }}>
            {/* 会社名 */}
            <p>
              <strong>{item.name}</strong>
            </p>

            {/* タグ（配列なのでmapで表示） */}
            <p>
              {item.tags.map((tag) => (
                <span key={tag} style={{ marginRight: "8px" }}>
                  #{tag}
                </span>
              ))}
            </p>

            {/* HPリンク */}
            <p>
              <a href={item.hpUrl} target="_blank">
                公式HP
              </a>
            </p>

            {/* マイナビURL（あるときだけ表示） */}
            {item.mynaviUrl && (
              <p>
                <a href={item.mynaviUrl} target="_blank">
                  マイナビ
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
