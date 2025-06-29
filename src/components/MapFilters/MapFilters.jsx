import React from "react";
import styles from "./MapFilters.module.css";

export default function MapFilters({ filter, onFilterChange }) {
  return (
    <div className={styles.filters}>
      {/* Label associated with the <select> for accessibility */}
      <label htmlFor="filter" className={styles.label}>
        Afficher:{" "}
      </label>
      <select
        id="filter" // Links the <label> to its <select>
        value={filter} // Selected value corresponds to the filter state
        onChange={(e) => {
          onFilterChange(e); // Updates selected filter (in the parent InteractiveMap)
          document.getElementById("map").focus(); // Moves focus back to the map
        }}
        className={styles.select}
        aria-describedby="filter-info" // Links the <select> to the explanatory text below
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
