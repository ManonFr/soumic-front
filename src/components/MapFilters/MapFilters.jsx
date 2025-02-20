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
        onChange={onFilterChange}
        className={styles.select}
      >
        <option value="all">Tout</option>
        <option value="stage">Scènes</option>
        <option value="drinks">Buvettes</option>
        <option value="wifi">Bornes WiFi</option>
        <option value="parkings">Parkings</option>
        <option value="campings">Campings</option>
        <option value="rest area">Zone de repos</option>
      </select>
    </div>
  );
}
