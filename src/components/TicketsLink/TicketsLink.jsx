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
          {Array(20) // Assure une boucle fluide
            .fill(null) // Remplit le tableau de 20 valeurs 'null'
            .map((_, i) => (
              <Link
                href="/tickets"
                key={i}
                className={styles.tickerItem}
                aria-hidden={i !== 0}
                tabIndex={i === 0 ? "0" : "-1"} // Rend seulement le premier élément focusable (évite les répétitions)
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
