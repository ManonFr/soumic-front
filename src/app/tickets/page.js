import Link from "next/link";

export default function Ticket() {
  return (
    <>
      <Link href="/tickets/VIP" aria-label="Acheter un billet pour Soumic 2025">
        <button>Acheter un billet VIP</button>
      </Link>
      <Link
        href="/tickets/premium"
        aria-label="Acheter un billet pour Soumic 2025"
      >
        <button>Acheter un billet Premium</button>
      </Link>
      <Link
        href="/tickets/backstage"
        aria-label="Acheter un billet pour Soumic 2025"
      >
        <button>Acheter un billet Backstage</button>
      </Link>
      <Link
        href="/tickets/standard"
        aria-label="Acheter un billet pour Soumic 2025"
      >
        <button>Acheter un billet Standard</button>
      </Link>
    </>
  );
}
