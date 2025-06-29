import Link from "next/link";
import styles from "./TicketsLink.module.css";

export default function TicketsLink() {
  return (
    <div
      className={styles.tickerWrapper}
      role="region"
      aria-label="Bandeau déroulant vers la billetterie"
    >
      <div className={styles.ticker}>
        <div className={styles.tickerContent}>
          {Array(20) // Ensures a smooth infinite scroll effect
            .fill(null) // Fills the array with 20 null values
            .map((_, i) => (
              <Link
                href="/tickets"
                key={i}
                className={styles.tickerItem}
                aria-hidden={i !== 0}
                tabIndex={i === 0 ? "0" : "-1"} // Only the first element can be focused, prevents repetition
              >
                <span aria-hidden="true">✺ </span>TICKETS EN VENTE
                <span aria-hidden="true"> ✺</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
