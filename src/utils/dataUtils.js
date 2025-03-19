import { formatDateToFullDate } from "./dateUtils";

export function getUniqueDays(artists) {
  return [
    { raw: "all", display: "Jour" },
    ...[...new Set(artists.map((artist) => artist.date))].map((date) => ({
      // Supprime les doublons avec Set
      raw: date, // Valeur brute du jour
      display:
        formatDateToFullDate(date).charAt(0).toUpperCase() +
        formatDateToFullDate(date).slice(1), // Formatage avec majuscule initiale
    })),
  ];
}

export function getUniqueGenres(artists) {
  return [
    { raw: "all", display: "Genre" },
    ...[...new Set(artists.map((artist) => artist.genre))].map((genre) => ({
      raw: genre,
      display: genre.charAt(0).toUpperCase() + genre.slice(1), // Première lettre en majuscule
    })),
  ];
}
