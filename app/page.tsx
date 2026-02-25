import { fetchCompanies } from "@/lib/fetchCompanies";
import Link from "next/link";
import styles from "./page.module.css";
import StarButton from "@/components/StarButton";
import StatusSelector from "@/components/StatusSelector";

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

export default async function HomePage({ searchParams }: Props) {
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
          <Link href="/" className={styles.clearButton}>
            すべて表示
          </Link>
        </div>
      )}

      <div className={styles.grid}>
        {filteredCompanies.map((company) => (
          <div key={company.id} className={styles.card}>
            {/* 名前と星ボタンを横並びにするレイアウト調整 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <h2 className={styles.companyName} style={{ margin: 0 }}>
                {company.name}
              </h2>
              <div style={{ marginTop: "6px" }}>
          <StatusSelector companyId={company.id} />
        </div>
              <StarButton companyId={company.id} />
            </div>

            <div className={styles.tagList}>
              {company.tags.map((tag, index) => (
                <Link
                  key={index}
                  href={`/?tag=${tag}`}
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
