"use client";

import Link from "next/link";
import { getCustomIcon } from "@/utils/iconsUtils";
import useLeaflet from "@/utils/useLeaflet";
import dynamic from "next/dynamic";
import styles from "./MarkerList.module.css";

// Dynamically load React-Leaflet components
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false },
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export default function MarkerList({ markers }) {
  const L = useLeaflet(); // Check if Leaflet is available client-side

  // Avoids runtime errors
  if (!L) return null;

  return (
    <>
      {/* Loop through markers and display them on the map */}
      {markers.map((marker) => (
        <Marker
          key={`${marker.type}-${marker.id}`} // Unique key: type + id
          position={[marker.latitude, marker.longitude]}
          icon={getCustomIcon(L, marker.type)}
          className={styles.customMarkerIcon}
        >
          <Popup aria-live="assertive">
            {/* If the marker is a stage, show a link to the related artists */}
            {marker.type === "stages" && (
              <div className={styles.popupContent}>
                <strong>{marker.name}</strong>
                <br />
                <Link
                  href={`/scenes/${marker.id}`} // Link to the stage page
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
