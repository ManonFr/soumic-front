"use client";

import { useState, useEffect } from "react";
import styles from "./FilterButtons.module.css";
import Dropdown from "../Dropdown/Dropdown";

export default function FilterButtons({ days, genres, onFilterChange }) {
  // Etat local pour suivre les filtres sélectionnés
  const [selectedFilters, setSelectedFilters] = useState({
    day: "all",
    genre: "all",
  });

  // selectedFilters mis à jour quand les filtres changent
  // useEffect(() => {
  //   setSelectedFilters({ day: "all", genre: "all" });
  // }, []);

  // Mettre à jour les filtres ET les afficher correctement
  const handleFilterChange = (newFilter) => {
    const updatedFilters = { ...selectedFilters, ...newFilter };
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleResetFilters = () => {
    setSelectedFilters({ day: "all", genre: "all" });
    onFilterChange({ day: "all", genre: "all" });
  };

  return (
    <div className={styles.filterContainer}>
      {/* Afficher tout par défaut */}
      <button
        onClick={handleResetFilters}
        className={`${styles.filterButton} ${
          selectedFilters.day === "all" ? styles.active : ""
        }`}
        aria-pressed={selectedFilters.day === "all"}
      >
        All
      </button>

      {/* Dropdown jours */}
      <Dropdown
        options={days.map((d) => ({ value: d.raw, label: d.display }))}
        selected={
          days.find((d) => d.raw === selectedFilters.day)?.display || "Jour"
        }
        onSelect={(value) => handleFilterChange({ day: value })}
        label="Jour"
      />

      {/* Dropdown genres */}
      <Dropdown
        options={genres.map((g) => ({ value: g.raw, label: g.display }))}
        selected={
          genres.find((g) => g.raw === selectedFilters.genre)?.display ||
          "Genre"
        }
        onSelect={(value) => handleFilterChange({ genre: value })}
        label="Genre"
      />
    </div>
  );
}
