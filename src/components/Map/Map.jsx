"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import MarkerList from "../MarkerList/MarkerList";
import styles from "./Map.module.css";

// Dynamic import of React-Leaflet components
// Leaflet doesn't work with server-side rendering in Next.js, so we disable SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

export default function Map({ markers }) {
  return (
    <MapContainer
      center={[48.757639, 2.243271]}
      zoom={16}
      style={{ height: "600px", width: "100%" }}
      scrollWheelZoom={false} // Disable zoom with mouse wheel
      attributionControl={false}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerList markers={markers} />
    </MapContainer>
  );
}
