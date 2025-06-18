export function formatDateToFullDate(dateString) {
  if (!dateString) return "Date inconnue";

  const cleanDate = dateString.split("T")[0];
  // Décompose le "année/mois/jour" en trois valeurs numériques
  const [year, month, day] = cleanDate.split("-").map(Number);

  // Crée un objet 'Date' (month-1 car un tableau commence à 0)
  const date = new Date(year, month - 1, day);

  if (isNaN(date.getTime())) return "Date invalide";

  let formattedDate = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(date);

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1); // Première lettre en majuscule
}

// Raccourcit une heure complète hh:mm:ss en hh:mm
export function formatTimeHHMM(timeString) {
  if (!timeString || typeof timeString !== "string") return "";
  return timeString.slice(0, 5);
}
