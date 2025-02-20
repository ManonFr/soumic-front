"use client";

import Link from "next/link";
import { getCustomIcon } from "@/utils/iconsUtils";
import useLeaflet from "@/utils/useLeaflet";
import dynamic from "next/dynamic";
import styles from "./MarkerList.module.css";

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export default function MarkerList({ markers }) {
  const L = useLeaflet();
  if (!L) return null;

  return (
    <>
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={[marker.latitude, marker.longitude]}
          icon={getCustomIcon(L, marker.type)}
          className={styles.customMarkerIcon}
        >
          <Popup className={styles.popup}>
            {marker.type === "stage" && (
              <div className={styles.popupContent}>
                <strong>{marker.name}</strong>
                <br />
                <Link
                  href={`/scenes/${marker.id}`}
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
