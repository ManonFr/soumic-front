import React from "react";
import styles from "./MapFilters.module.css";

export default function MapFilters({ filter, onFilterChange }) {
  return (
    <div className={styles.filters}>
      <label htmlFor="filter" className={styles.label}>
        Afficher:{" "}
      </label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => {
          onFilterChange(e);
          document.getElementById("map").focus(); // Fait remonter le focus à la carte
        }}
        className={styles.select}
        aria-describedby="filter-info"
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
