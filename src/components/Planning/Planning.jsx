"use client";

import React, { useState, useMemo } from "react";
import styles from "./Planning.module.css";
import FilterButtons from "../FilterButtons/FilterButtons";
import ArtistCard from "../ArtistCard/ArtistCard";
import { filterArtists } from "@/utils/filters";
import { getUniqueDays, getUniqueGenres } from "@/utils/dataUtils";

export default function Planning({ artists, stages }) {
  //Etat des filtres sélectionnés
  const [filters, setFilters] = useState({ day: "all", genre: "all" });

  // Jours et genres uniques
  const uniqueDays = getUniqueDays(artists);
  const uniqueGenres = getUniqueGenres(artists);

  // Filtrer les artistes en fonction des filtres sélectionnés
  const filteredArtists = useMemo(
    () => filterArtists(artists, filters),
    [artists, filters]
  );

  // Trier les artistes par ordre alphabétique
  const sortedArtists = useMemo(() => {
    return [...filteredArtists].sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredArtists]);

  // Transforme les scènes en un objet {id: name}
  const stageMap = Object.fromEntries(stages.map(({ id, name }) => [id, name]));

  return (
    <div className={styles.contentWrapper}>
      <FilterButtons
        days={uniqueDays}
        genres={uniqueGenres}
        onFilterChange={(newFilters) =>
          setFilters({ ...filters, ...newFilters })
        }
      />
      <div className={styles.container} aria-live="polite">
        {sortedArtists.length > 0 ? (
          sortedArtists.map((artist) => (
            <ArtistCard
              key={artist.name}
              artist={artist}
              stageName={stageMap[artist.stage]}
            />
          ))
        ) : (
          <p>Aucun artiste trouvé pour les filtres sélectionnés.</p>
        )}
      </div>
    </div>
  );
}
