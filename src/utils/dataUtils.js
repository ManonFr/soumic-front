import { formatDateToFullDate } from "./dateUtils";

export function getUniqueDays(artists) {
  return [
    { raw: "all", display: "Jour" },
    ...[...new Set(artists.map((artist) => artist.date))].map((date) => ({
      raw: date,
      display:
        formatDateToFullDate(date).charAt(0).toUpperCase() +
        formatDateToFullDate(date).slice(1),
    })),
  ];
}

export function getUniqueGenres(artists) {
  return [
    { raw: "all", display: "Genre" },
    ...[...new Set(artists.map((artist) => artist.genre))].map((genre) => ({
      raw: genre,
      display: genre.charAt(0).toUpperCase() + genre.slice(1),
    })),
  ];
}
