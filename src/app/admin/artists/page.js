"use client";
import ArtistForm from "@/components/admin/ArtistForm/ArtistForm";
import ArtistList from "@/components/admin/ArtistList/ArtistList";
import useArtistForm from "@/components/admin/useArtistForm";

export default function AdminArtistsPage() {
  const {
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
    setGenre,
    setDate,
    setStartTime,
    setEndTime,
    setStageId,
    setEditingArtistId,
  } = useArtistForm();

  return (
    <div>
      <h1> Gestion des artistes</h1>
      <ArtistForm
        name={name}
        photo={photo}
        genre={genre}
        date={date}
        startTime={startTime}
        endTime={endTime}
        stageId={stageId}
        genres={genres}
        stages={stages}
        editingArtistId={editingArtistId}
        onCancelEdit={() => setEditingArtistId(null)}
        onSubmit={handleSubmit}
        setName={setName}
        setPhoto={setPhoto}
        setGenre={setGenre}
        setDate={setDate}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
        setStageId={setStageId}
      />

      <ArtistList
        artists={artists}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
