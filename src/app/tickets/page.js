import styles from "./tickets.module.css";

export default function TicketPage({ params }) {
  return (
    <main className={styles.ticketWrapper}>
      <h1>Ticket : {params.id}</h1>
      <p className={styles.description}>
        Vous avez sélectionné le billet {params.id} pour Soumic 2025.
      </p>
    </main>
  );
}
