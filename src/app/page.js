import Link from "next/link";
import styles from "./page.module.css";
import TicketsLink from "@/components/TicketsLink/TicketsLink";
import MiniMap from "@/components/MiniMap/MiniMap";

export default function Home() {
  return (
    <main>
      <section className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1>Soumic 2025</h1>
          <p className={styles.festivalDates}>17-19 juillet 2025</p>
        </div>
        <Link href="/tickets" className={styles.ticketButton}>
          <button>Acheter un billet</button>
        </Link>
      </section>

      <TicketsLink />
      <div className={styles.pageContent}>
        <div>
          <h2 className={styles.subtitle}>Plan du festival</h2>
          <MiniMap className={styles.miniMap} />
        </div>
      </div>
    </main>
  );
}
