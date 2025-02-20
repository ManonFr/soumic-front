"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import festivalData from "@/data/festival.json"; // Import des données du festival
import styles from "./MiniMap.module.css";
import useLeaflet from "@/utils/useLeaflet";
import { getCustomIcon } from "@/utils/iconsUtils";

// Pour contrer l'erreur 500
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export default function MiniMap() {
  const L = useLeaflet();

  if (!L) return <p>Chargement de la carte...</p>;

  // Récupérer uniquement les scènes
  const stageMarkers = festivalData.stages.map((stage) => ({
    id: stage.id,
    latitude: stage.location.latitude,
    longitude: stage.location.longitude,
    name: stage.name,
    type: "stages",
  }));

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={[48.754279, 2.242498]}
        zoom={15}
        scrollWheelZoom={true}
        className={styles.miniMap}
        role="application"
        aria-label="Carte du festival montrant l'emplacement des scènes"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Ajouter uniquement les marqueurs des scènes */}
        {stageMarkers.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.latitude, marker.longitude]}
            icon={getCustomIcon(L, "stage")} // Icône personnalisée
            title={`Scène ${marker.name}`}
            aria-label={`Scène ${marker.name}, cliquez pour voir les artistes`}
          >
            <Popup>
              <strong>{marker.name}</strong>
              <br />
              <Link
                href={`/scenes/${marker.id}`}
                aria-label={`Voir les artistes de la scène ${marker.name}`}
              >
                Voir les artistes
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
