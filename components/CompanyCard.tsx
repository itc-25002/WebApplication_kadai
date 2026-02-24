import styles from "./CompanyCard.module.css";
import Link from "next/link";

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
  company: {
    id: string;
    name: string;
    tags: string[];
    hpurl: string;
    mynaviurl?: string;
  };
};

export default function CompanyCard({ company }: Props) {
  return (
    <div className={styles.card}>
      <h2 className={styles.companyName}>{company.name}</h2>

      <div className={styles.tagList}>
        {company.tags.map((tag, index) => (
          <Link
            key={index}
            href={`/companies?tag=${tag}`}
            className={styles.tag}
            style={{ background: tagColors[tag] ?? "#e5e7eb" }}
          >
            {tag}
          </Link>
        ))}
      </div>

      <div className={styles.linkArea}>
        <a
          href={company.hpurl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          公式HP
        </a>

        {company.mynaviurl && (
          <a
            href={company.mynaviurl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkButton} ${styles.secondary}`}
          >
            マイナビ
          </a>
        )}
      </div>
    </div>
  );
}
