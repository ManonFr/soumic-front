import { useState, useEffect } from "react";
import {
  getArtists,
  createArtist,
  updateArtist,
  deleteArtist,
} from "@/lib/adminArtists";

const GENRE_TO_ID = {
  "rock/folk": 1,
  "hip hop": 2,
  "pop/indie": 3,
  "reggae/afrobeat/soul": 4,
  electro: 5,
};

export default function useArtistForm() {
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [stages, setStages] = useState([]);

  const [editingArtistId, setEditingArtistId] = useState(null);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [stageId, setStageId] = useState("");

  useEffect(() => {
    fetchArtists();
  }, []);

  async function fetchArtists() {
    try {
      const data = await getArtists();
      console.log("Artistes récupérés :", data);
      setArtists(data);

      const uniqueGenres = Array.from(
        new Set(data.map((artist) => artist.genre))
      );
      setGenres(uniqueGenres);

      // Scènes uniques
      const uniqueStages = Array.from(
        new Map(
          data.map((artist) => [
            artist.stage_id,
            { id: artist.stage_id, name: artist.stage_name },
          ])
        ).values()
      );
      setStages(uniqueStages);
    } catch (err) {
      console.error("Erreur de chargement :", err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const genre_id = GENRE_TO_ID[genre]; // Convertit le nom sélectionné en ID

    if (!genre_id) {
      alert("Genre non reconnu");
      return;
    }
    const artistData = {
      name,
      photo,
      genre_id,
      date,
      start_time: startTime,
      end_time: endTime,
      stage_id: Number(stageId),
    };

    try {
      if (editingArtistId) {
        // Mode édition
        await updateArtist(editingArtistId, artistData);
        console.log("Artiste modifié");
        setEditingArtistId(null); // Sortir du mode édition
      } else {
        // Mode ajout
        await createArtist(artistData);
        console.log("Artiste ajouté");
      }

      //Recharge liste artistes
      fetchArtists();
    } catch (err) {
      console.error("Erreur lors de l'ajout :", err);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteArtist(id);
      fetchArtists();
    } catch (err) {
      console.error("Erreur lors de la suppression :", err);
    }
  }

  function handleEdit(artist) {
    setEditingArtistId(artist.artist_id);
    setName(artist.name);
    setPhoto(artist.photo);
    setGenre(artist.genre);
    setDate(artist.date);
    setStartTime(artist.start_time);
    setEndTime(artist.end_time);
    setStageId(artist.stage_id.toString());
  }

  function resetForm() {
    // On vide le formulaire
    setName("");
    setPhoto("");
    setGenre("");
    setDate("");
    setStartTime("");
    setEndTime("");
    setStageId("");
  }

  return {
    artists,
    genres,
    stages,
    name,
    photo,
    genre,
    date,
    startTime,
    endTime,
    stageId,
    editingArtistId,
    handleSubmit,
    handleEdit,
    handleDelete,
    setName,
    setPhoto,
    setDate,
    setStartTime,
    setEndTime,
    setStageId,
    setEditingArtistId,
  };
}
