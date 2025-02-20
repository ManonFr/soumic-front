"use client";
import { useState } from "react";
import Map from "../Map/Map";
import MapFilters from "../MapFilters/MapFilters";
import Link from "next/link";
import styles from "./InteractiveMap.module.css";

export default function InteractiveMap({ markers }) {
  const [filter, setFilter] = useState("all");

  // Filtrer les marqueurs en fonction du filtre sélectionné
  const filteredMarkers = markers.filter(
    (marker) => filter === "all" || marker.type === filter
  );

  return (
    <div className={styles.interactiveMap}>
      <h1>Carte du festival</h1>
      {/* Intégration du composant Mapfilters */}
      <MapFilters
        filter={filter}
        onFilterChange={(e) => setFilter(e.target.value)}
      />
      {/* Affichage de la carte avec les marqueurs filtrés */}
      <Map markers={filteredMarkers} />
      <p>
        Icons by{" "}
        <Link
          href="https://icones8.fr/"
          aria-label="Lien vers le site Icon8 pour les icônes utilisées"
          className={styles.link}
        >
          Icon8
        </Link>
      </p>
    </div>
  );
}
