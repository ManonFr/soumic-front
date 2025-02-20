import InteractiveMap from "@/components/InteractiveMap/InteractiveMap";
import festivalData from "@/data/festival.json";

export default async function Map() {
  // Transforme les données en un tableau de marqueurs
  const stageMarkers = festivalData.stages.map((stages) => ({
    id: stages.id,
    latitude: stages.location.latitude,
    longitude: stages.location.longitude,
    name: stages.name,
    type: "stages",
  }));

  const amenityMarkers = Object.entries(festivalData.amenities).flatMap(
    ([type, amenities]) =>
      amenities
        .filter((amenity) => amenity.location)
        .map((amenity) => ({
          id: amenity.id,
          latitude: amenity.location.latitude || null,
          longitude: amenity.location.longitude || null,
          name: amenity.name,
          type: type,
          description: amenity.description,
        }))
  );

  const allMarkers = [...stageMarkers, ...amenityMarkers];

  return (
    <main>
      <h1>Carte interactive du festival</h1>
      <InteractiveMap markers={allMarkers} />
    </main>
  );
}
