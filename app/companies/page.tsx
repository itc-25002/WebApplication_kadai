// import { fetchCompanies } from "@/lib/fetchCompanies";

// export default async function CompaniesPage() {
//   const companies = await fetchCompanies();

//   return (
//     <main>
//       <h1>企業一覧</h1>

//       {companies.map((company) => (
//         <div key={company.id}>
//           <h2>{company.name}</h2>

//           <p>タグ：{company.tags.join(", ")}</p>

//           <a href={company.hpurl} target="_blank">
//             HPを見る
//           </a>

//           {company.mynaviurl && (
//             <a href={company.mynaviurl} target="_blank">
//               マイナビを見る
//             </a>
//           )}
//         </div>
//       ))}
//     </main>
//   );
// }

import { fetchCompanies } from "@/lib/fetchCompanies";

export default async function CompaniesPage() {
  const companies = await fetchCompanies();

  return (
    <main>
      <h1>企業一覧</h1>

      {companies.map((company) => (
        <div key={company.id}>
          <h2>{company.name}</h2>

          <p>タグ：{company.tags.join(", ")}</p>

          <a href={company.hpurl} target="_blank">
            HPを見る
          </a>

          {company.mynaviurl && (
            <a href={company.mynaviurl} target="_blank">
              マイナビを見る
            </a>
          )}
        </div>
      ))}
    </main>
  );
}
