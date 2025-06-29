"use client";

import React, { useState, useMemo } from "react";
import styles from "./Planning.module.css";
import FilterButtons from "../FilterButtons/FilterButtons";
import ArtistCard from "../ArtistCard/ArtistCard";
import SearchBar from "../SearchBar/SearchBar";
import { filterArtists } from "@/utils/filters";
import { getUniqueDays, getUniqueGenres } from "@/utils/dataUtils";

export default function Planning({ artists, stages }) {
  // Unique days and genres
  const uniqueDays = getUniqueDays(artists);
  const uniqueGenres = getUniqueGenres(artists);

  //Selected filters state
  const [filters, setFilters] = useState({ day: "all", genre: "all" });

  const [searchQuery, setSearchQuery] = useState("");

  // Filer artists based on selected filters and search query
  const filteredArtists = useMemo(() => {
    const byFilters = filterArtists(artists, filters);
    const lowerQuery = searchQuery.toLowerCase();

    return byFilters.filter((artist) =>
      artist.name.toLowerCase().includes(lowerQuery)
    );
  }, [artists, filters, searchQuery]);

  // Sort artists alphabetically
  const sortedArtists = useMemo(() => {
    return [...filteredArtists].sort((a, b) => a.name.localeCompare(b.name));
  }, [filteredArtists]);

  // Create a map object
  const stageMap = Object.fromEntries(stages.map(({ id, name }) => [id, name]));

  return (
    <div className={styles.contentWrapper}>
      <SearchBar onSearch={setSearchQuery} />
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
