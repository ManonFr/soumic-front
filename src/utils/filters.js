// Filtrer les artistes en fonction du filtre sélectionné
export function filterArtists(artists, filters) {
  return artists.filter((artist) => {
    const isDayMatching = filters.day === "all" || artist.date === filters.day;
    const isGenreMatching =
      filters.genre === "all" || artist.genre === filters.genre;
    return isDayMatching && isGenreMatching;
  });
}

export function groupConcertsByDay(artists) {
  return artists.reduce((acc, artist) => {
    if (!acc[artist.date]) acc[artist.date] = [];
    acc[artist.date].push(artist);
    return acc;
  }, {});
}
