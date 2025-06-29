import styles from "./ticketsId.module.css";
import Link from "next/link";

export default async function TicketPage({ params }) {
  const { id } = await params;

  return (
    <main className={styles.ticketWrapper}>
      <h1>Ticket : {id}</h1>
      <p className={styles.description}>
        Vous avez sélectionné le billet {id} pour Soumic 2025.
      </p>
      <Link
        href="/tickets"
        aria-label="Retour au choix des billets"
        className={styles.backLink}
      >
        Retour
      </Link>
    </main>
  );
}
