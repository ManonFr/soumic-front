"use client";

import Link from "next/link";
import { getCustomIcon } from "@/utils/iconsUtils";
import useLeaflet from "@/utils/useLeaflet";
import dynamic from "next/dynamic";
import styles from "./MarkerList.module.css";

// Chargement dynamique des composants React-Leaflet
// Next.js ne supporte pas Leaflet côté serveur, donc on le désactive avec ssr:false
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export default function MarkerList({ markers }) {
  const L = useLeaflet(); // Vérifie si Leaflet est bien chargé côté client

  // Si Leaflet n'est pas encore dispo, on ne retourne rien (évite les erreurs)
  if (!L) return null;

  return (
    <>
      {/* Parcours la liste des marqueurs et les affiche sur la carte */}
      {markers.map((marker) => (
        <Marker
          key={marker.id} // Clé unique pour React
          position={[marker.latitude, marker.longitude]}
          icon={getCustomIcon(L, marker.type)}
          className={styles.customMarkerIcon}
        >
          <Popup aria-live="assertive">
            {/* Si le marqueur est une scène, on affiche un lien vers les artistes qui s'y produisent */}
            {marker.type === "stages" && ( // permet d'afficher seulement les infor pertinentes pour chaque type de lieu
              <div className={styles.popupContent}>
                <strong>{marker.name}</strong>
                <br />
                <Link
                  href={`/scenes/${marker.id}`} // Lien vers la page de la scène
                  className={styles.popupLink}
                >
                  Voir les artistes
                </Link>
              </div>
            )}

            {["food", "campings", "rest area"].includes(marker.type) && (
              <div className={styles.popupContent}>
                <strong>{marker.name}</strong>
                <br />
                <p>{marker.description || "Pas de description disponible."}</p>
              </div>
            )}
            {["drinks", "parkings", "wifi"].includes(marker.type) && (
              <div className={styles.popupContent}>
                <strong>{marker.name}</strong>
              </div>
            )}
          </Popup>
        </Marker>
      ))}
    </>
  );
}
