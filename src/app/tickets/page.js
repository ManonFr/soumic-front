import styles from "./tickets.module.css";
import Link from "next/link";

export const metadata = {
  title: "Billetterie",
};

export default function Ticket() {
  return (
    <>
      <h1>Tickets</h1>
      <div className={styles.container}>
        <Link
          href="/tickets/vip"
          aria-label="Acheter un billet pour Soumic 2025"
          className={styles.button}
        >
          Acheter un billet VIP
        </Link>
        <Link
          href="/tickets/premium"
          aria-label="Acheter un billet pour Soumic 2025"
          className={styles.button}
        >
          Acheter un billet Premium
        </Link>
        <Link
          href="/tickets/backstage"
          aria-label="Acheter un billet pour Soumic 2025"
          className={styles.button}
        >
          Acheter un billet Backstage
        </Link>
        <Link
          href="/tickets/standard"
          aria-label="Acheter un billet pour Soumic 2025"
          className={styles.button}
        >
          Acheter un billet Standard
        </Link>
      </div>
    </>
  );
}
