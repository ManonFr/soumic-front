import React from "react";
import styles from "./MapFilters.module.css";

export default function MapFilters({ filter, onFilterChange }) {
  return (
    <div className={styles.filters}>
      {/* Label associé au 'select' pour l'accessibilité */}
      <label htmlFor="filter" className={styles.label}>
        Afficher:{" "}
      </label>
      <select
        id="filter" // Permet de relier le <label> au <select>
        value={filter} // Valeur sélectionnée correspond à l'état du filtre
        onChange={(e) => {
          onFilterChange(e); // Met à jour le filtre sélectionné (dans le composant parent InteractiveMap)
          document.getElementById("map").focus(); // Fait remonter le focus à la carte
        }}
        className={styles.select}
        aria-describedby="filter-info" // Accessibilité: lie le <select> au texte explicatif (le <p>)
      >
        <option value="all">Tout</option>
        <option value="stages">Scènes</option>
        <option value="drinks">Buvettes</option>
        <option value="wifi">Bornes WiFi</option>
        <option value="parkings">Parkings</option>
        <option value="campings">Campings</option>
        <option value="rest area">Zone de repos</option>
      </select>
      <p id="filter-info" className={styles.filterInfo}>
        Sélectionnez un type de lieu à afficher sur la carte
      </p>
    </div>
  );
}
