"use client";

import { useState } from "react";
import Map from "../Map/Map";
import MapFilters from "../MapFilters/MapFilters";
import Link from "next/link";
import styles from "./InteractiveMap.module.css";
import { translateType } from "@/utils/translations";

export default function InteractiveMap({ markers }) {
  const [filter, setFilter] = useState("all");

  // Filtrer les marqueurs en fonction du filtre sélectionné
  // Seuls les marqueurs correspondant au type sélectionné sont affichés
  const filteredMarkers = markers.filter(
    (marker) => filter === "all" || marker.type === filter
  );

  return (
    <main className={styles.mapWrapper}>
      <section className={styles.controls}>
        <MapFilters
          filter={filter}
          onFilterChange={(e) => setFilter(e.target.value)} // Mise à jour du filtre sélectionné
          // Ici (e) = l'objet 'event', cest l'évènement passé automatiquement par React lorsque l'on déclence onChange sur un select ou input
        />
      </section>
      <section
        className={styles.mapContainer}
        id="map"
        tabIndex={-1} // Empêche la carte d'être focusable au clavier pour éviter les bugs
        aria-live="polite" // Permet aux lecteurs d'écran d'annoncer les changements sur la carte
      >
        <Map markers={filteredMarkers} />{" "}
        {/* Carte avec les marqueurs filtrés */}
      </section>
      {/* Liste des lieux affichés sur la carte */}
      <section className={styles.venueListContainer}>
        <h2 className={styles.listTitle}>Lieux affichés sur la carte</h2>
        <ul className={styles.venueList} aria-live="polite">
          {/* Affichage des lieux correspondants au filtre */}
          {filteredMarkers.length > 0 ? (
            filteredMarkers.map((marker) => (
              <li key={marker.id} className={styles.venueItem}>
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
