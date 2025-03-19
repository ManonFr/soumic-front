import styles from "./tickets.module.css";

export default async function TicketPage({ params }) {
  const { id } = await params;

  return (
    <main className={styles.ticketWrapper}>
      <h1>Ticket : {id}</h1>
      <p className={styles.description}>
        Vous avez sélectionné le billet {id} pour Soumic 2025.
      </p>
    </main>
  );
}
