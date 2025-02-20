import Link from "next/link";
import styles from "./TicketsLink.module.css";

export default function TicketsLink() {
  return (
    <div className={styles.tickerWrapper}>
      <div className={styles.ticker}>
        <div className={styles.tickerContent}>
          {Array(20) // Assure une boucle fluide
            .fill(null)
            .map((_, i) => (
              <Link href="/tickets" key={i} className={styles.tickerItem}>
                ✺ TICKETS EN VENTE ✺
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
