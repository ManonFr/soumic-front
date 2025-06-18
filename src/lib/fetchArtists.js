export async function fetchAllArtists() {
  const res = await fetch(`https://soumic-backend.onrender.com/artists`, {
    next: { revalidate: 3600 },
  });

  return await res.json();
}

// Récupère les artistes pour une scène donnée
export async function fetchArtistsByStage(stageId) {
  const artists = await fetchAllArtists();

  return artists.filter(
    (artist) => Number(artist.stage_id) === Number(stageId)
  );
}

// Récupère les artistes et les scènes
export async function fetchFestivalData() {
  const artists = await fetchAllArtists();

  // Liste des scènes à partir des artistes
  const stagesMap = new Map();
  for (const artist of artists) {
    if (!stagesMap.has(artist.stage_name)) {
      stagesMap.set(artist.stage_name, {
        id: artist.stage_name,
        name: artist.stage_name,
      });
    }
  }

  const stages = Array.from(stagesMap.values());

  const adaptedArtists = artists.map((a) => ({
    id: a.artist_id,
    name: a.artist_name,
    photo: a.photo,
    genre: a.genre,
    date: a.date.split("T")[0],
    startTime: a.start_time,
    endTime: a.end_time,
    stage: a.stage_name,
  }));

  return { artists: adaptedArtists, stages };
}
