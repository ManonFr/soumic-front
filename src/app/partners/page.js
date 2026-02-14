import Image from "next/image";
import styles from "./Partners.module.css";

export const metadata = {
  title: "Partenaires",
};

const partners = [
  {
    category: "Partenaires institutionnels",
    items: [
      { name: "Ville de Paris", logo: "/images/partners/ville.png" },
      { name: "Région Île-de-France", logo: "/images/partners/region.png" },
    ],
  },
  {
    category: "Partenaires privés",
    items: [
      { name: "Carrefour Express", logo: "/images/partners/carrefour.png" },
      { name: "Intermarché", logo: "/images/partners/intermarche.png" },
      { name: "Le Repère des Motards", logo: "/images/partners/repere.png" },
    ],
  },
  {
    category: "Partenaires médias",
    items: [
      { name: "RIFFX Festival", logo: "/images/partners/riffx.png" },
      { name: "Tsugi", logo: "/images/partners/tsugi.png" },
    ],
  },
];

export default function PartenairesPage() {
  return (
    <main className={styles.container}>
      <h1>Nos Partenaires</h1>

      <p className={styles.intro}>
        Le SOUMIC Festival remercie chaleureusement l’ensemble de ses
        partenaires pour leur confiance et leur engagement. Leur soutien
        contribue au rayonnement culturel du territoire et à la réussite de
        cette première édition.
      </p>

      {partners.map((group, index) => (
        <section key={index} className={styles.section}>
          <h2>{group.category}</h2>

          <div className={styles.grid}>
            {group.items.map((partner, i) => (
              <div key={i} className={styles.card}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={140}
                />
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
