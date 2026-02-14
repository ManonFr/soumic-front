import styles from "./InfoPage.module.css";

export const metadata = {
  title: "Informations & FAQ",
};

export default function InfosPage() {
  return (
    <main className={styles.container}>
      <h1>Informations & FAQ</h1>

      <section className={styles.section}>
        <h2>Informations générales</h2>
        <p>
          Le SOUMIC Festival rassemble une programmation audacieuse mêlant
          figures incontournables de la scène électro, artistes hip-hop majeurs
          et talents émergents venus de toute l’Europe. De Justice à Amelie
          Lens, de Dinos à SCH, en passant par Four Tet, James Blake ou Ice
          Spice, le festival propose trois jours d’immersion sonore entre basses
          puissantes, lives hypnotiques et shows explosifs. Réparti sur
          plusieurs scènes aux identités fortes, le SOUMIC transforme son site
          en véritable terrain d’expression artistique où se croisent énergie
          brute, diversité musicale et expérience collective intense.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Se restaurer</h2>

        <h3>Sur le site concert</h3>
        <p>
          Six immenses barnums et une armée de bénévoles vous attendent pour
          vous servir sandwichs traditionnels, frites, bières, mojitos, jus et
          sodas. Une offre végétarienne sera également disponible.
        </p>

        <p>
          Le paiement sur le site concert se fera exclusivement via notre
          système Cashless ou paiement dématérialisé.
        </p>

        <p>
          Les gobelets sont réutilisables et consignés pour une valeur de 1 €.
        </p>

        <h3>À proximité</h3>
        <ul>
          <li>
            De nombreux restaurants se trouvent dans les environs du festival.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Foire aux questions</h2>

        {[
          {
            q: "Quels sont les horaires du festival ?",
            a: "Le festival est ouvert de 13h à 01h durant les jours d'événement.",
          },
          {
            q: "Comment accéder au site du festival ?",
            a: "Le site est accessible en transports en commun et dispose de deux parkings gratuits à proximité.",
          },
          {
            q: "Faut-il imprimer son billet ?",
            a: "Non, la présentation du billet sur smartphone est suffisante.",
          },
          {
            q: "Les animaux sont-ils autorisés ?",
            a: "Seuls les animaux d’assistance sont autorisés sur le site.",
          },
          {
            q: "L’accès aux parkings est-il gratuit ?",
            a: "Oui, l’accès aux parkings est gratuit. Toutefois, vous devez être détenteur d’un billet acheté en prévente pour pouvoir y accéder.",
          },
          {
            q: "Existe-t-il un parking pour les vélos ?",
            a: "Oui, un espace dédié aux vélos est disponible au niveau du camping.",
          },
          {
            q: "Comment puis-je faire si je possède un gros camion nécessitant un permis C ?",
            a: "Les véhicules nécessitant un permis C ne peuvent pas accéder aux parkings mis en place par l’organisation du festival.",
          },
          {
            q: "Ai-je le droit de planter ma tente sur un parking ?",
            a: "Pour des raisons de sécurité, il est strictement interdit de planter une tente sur un parking.",
          },
          {
            q: "Que puis-je acheter avec le paiement Cashless ?",
            a: "Tout ce qui se mange et se boit sur le site concert.",
          },
          {
            q: "Est-ce que je peux réutiliser le Cashless de l’année dernière ?",
            a: "Non, les supports Cashless sont valables uniquement pour l’édition en cours.",
          },
          {
            q: "La consigne du gobelet se paye-t-elle avec le système Cashless ?",
            a: "Oui, 1 € sera débité lors de l’achat de votre premier verre.",
          },
          {
            q: "Est-il possible de rentrer sur le site concert avec de la nourriture ?",
            a: "Oui, mais les emballages en fer et en verre seront refusés pour des raisons de sécurité.",
          },
          {
            q: "Puis-je rentrer sur le site concert avec des boissons ?",
            a: "Non, les boissons extérieures sont interdites.",
          },
          {
            q: "Je suis végétarien : puis-je trouver quelque chose à manger ?",
            a: "Oui, un stand végétarien est prévu sur le site concert.",
          },
        ].map((item, index) => (
          <details key={index} className={styles.faqItem}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>
    </main>
  );
}
