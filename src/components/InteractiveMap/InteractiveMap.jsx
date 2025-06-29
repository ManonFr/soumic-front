"use client";

import { useState } from "react";
import Map from "../Map/Map";
import MapFilters from "../MapFilters/MapFilters";
import Link from "next/link";
import styles from "./InteractiveMap.module.css";
import { translateType } from "@/utils/translations";

export default function InteractiveMap({ markers }) {
  const [filter, setFilter] = useState("all");

  // Filter markers based on the selected type
  const filteredMarkers = markers.filter(
    (marker) => filter === "all" || marker.type === filter
  );

  return (
    <main className={styles.mapWrapper}>
      <section className={styles.controls}>
        <MapFilters
          filter={filter}
          onFilterChange={(e) => setFilter(e.target.value)} // Update the selected filter
          // (e) is the event object, automatically passer by React on select/input changes
        />
      </section>
      <section
        className={styles.mapContainer}
        id="map"
        tabIndex={-1} // Prevents keyboard focus on the map (avoid bugs)
        aria-live="polite" // Screen readers will announce map updates
      >
        <Map markers={filteredMarkers} />{" "}
      </section>
      {/* List of places displayed on the map */}
      <section className={styles.venueListContainer}>
        <h2 className={styles.listTitle}>Lieux affichés sur la carte</h2>
        <ul className={styles.venueList} aria-live="polite">
          {/* Display places mathing the current filter */}
          {filteredMarkers.length > 0 ? (
            filteredMarkers.map((marker) => (
              <li
                key={`${marker.type}-${marker.id}`}
                className={styles.venueItem}
              >
                <strong>{marker.name}</strong> ({translateType(marker.type)})
              </li>
            ))
          ) : (
            <li className={styles.noResult}>
              Aucun lieu disponible pour ce filtre.
            </li>
          )}
        </ul>
      </section>
      <p className={styles.credit}>
        Icons by{" "}
        <Link
          href="https://icones8.fr/"
          aria-label="Lien vers le site Icon8 pour les icônes utilisées"
          className={styles.link}
        >
          Icon8
        </Link>
      </p>
    </main>
  );
}
