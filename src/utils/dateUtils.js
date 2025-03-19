export function formatDateToFullDate(dateString) {
  // Décompose le "année/mois/jour" en trois valeurs numériques
  const [year, month, day] = dateString.split("-").map(Number);

  // Crée un objet 'Date' (month-1 car un tableau commence à 0)
  const date = new Date(year, month - 1, day);

  let formattedDate = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1); // Première lettre en majuscule
}
