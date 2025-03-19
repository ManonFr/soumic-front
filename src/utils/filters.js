// Filtrer les artistes en fonction du filtre sélectionné (jour/genre)
export function filterArtists(artists, filters) {
  return artists.filter((artist) => {
    // Vérifie si l'artiste correspond au jour sélectionné ou si "all" est activé
    const isDayMatching = filters.day === "all" || artist.date === filters.day;
    // Pareil mais avec le genre
    const isGenreMatching =
      filters.genre === "all" || artist.genre === filters.genre;

    // Retourne 'true' uniquement si les deux conditions sont remplies
    return isDayMatching && isGenreMatching;
  });
}

// Regroupe les artistes par date
export function groupConcertsByDay(artists) {
  return artists.reduce((acc, artist) => {
    // Si la date n'existe pas encore dans 'acc' on l'initialise avec un tableau vide
    if (!acc[artist.date]) acc[artist.date] = [];

    // Ajoute l'artiste dans la liste correspondant à sa date
    acc[artist.date].push(artist);
    return acc; // 'acc' est un objet qui stocke les artistes regroupés par date
  }, {});
}

// dans groupConcertsByDay: 'acc' est l'accumulateur de .reduce(), il stocke les résultats au fur et à mesure et devient l'objet final contenant les concerts triée par jour
