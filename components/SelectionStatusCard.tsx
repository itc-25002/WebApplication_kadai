import { fetchSelectionStatus } from "@/lib/fetchSelectionStatus";
import styles from "./SelectionStatusCard.module.css";

export default async function SelectionStatusCard() {
  const allStatuses = await fetchSelectionStatus();

  return (
    <section className={styles.card}>
      <h2 className={styles.title}>選考状況</h2>

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
    </section>
  );
}
