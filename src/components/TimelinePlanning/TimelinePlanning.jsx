"use client";

import React, { useMemo, useState } from "react";
import FilterButtons from "../FilterButtons/FilterButtons";
import StageRow from "../StageRow/StageRow";
import styles from "./TimelinePlanning.module.css";
import { getUniqueDays, getUniqueGenres } from "@/utils/dataUtils";
import { filterArtists, groupConcertsByDay } from "@/utils/filters";
import { formatDateToFullDate } from "@/utils/dateUtils";

export default function TimelinePlanning({ artists, stages }) {
  const [filters, setFilters] = useState({ day: "all", genre: "all" });

  const isLoading =
    !Array.isArray(artists) ||
    !Array.isArray(stages) ||
    !artists.length ||
    !stages.length;

  const uniqueDays = getUniqueDays(artists);
  const uniqueGenres = getUniqueGenres(artists);

  // Filter artists based on selected filters
  const filteredArtists = useMemo(
    () => filterArtists(artists, filters),
    [artists, filters]
  );

  // Group concerts by day after filtering
  const concertsByDay = useMemo(
    () => groupConcertsByDay(filteredArtists),
    [filteredArtists]
  );

  if (isLoading) {
    return <p className={styles.loadingText}>Chargement des données...</p>;
  }

  return (
    <div className={styles.timelineWrapper}>
      <FilterButtons
        days={uniqueDays}
        genres={uniqueGenres}
        onFilterChange={(newFilters) =>
          setFilters({ ...filters, ...newFilters })
        }
      />
      <div className={styles.timelineContainer} aria-live="polite">
        {/* Loop through each concert day */}
        {Object.entries(concertsByDay).map(([date, concerts]) => {
          const MIN_START_HOUR = 15;
          const MAX_END_HOUR = 24;

          const earliestStartTime = MIN_START_HOUR;
          const latestEndTime = MAX_END_HOUR;

          const totalHours = latestEndTime - earliestStartTime + 1;

          return (
            <section key={date} className={styles.daySection}>
              <h2 className={styles.dayTitle}>{formatDateToFullDate(date)}</h2>

              <div className={styles.timeScale}>
                {Array.from({ length: totalHours }, (_, i) => (
                  <span key={i} className={styles.timeMark}>
                    {earliestStartTime + i}h
                  </span>
                ))}
              </div>

              <div className={styles.timeline}>
                {/* Loop through each stage to display its concerts */}
                {stages.map((stage) => (
                  <div key={stage.id} className={styles.stageBlock}>
                    <h3 className={styles.stageTitle}>{stage.name}</h3>
                    <StageRow
                      key={stage.id}
                      stage={stage}
                      concerts={concerts.filter((c) => c.stage === stage.id)} // Filter concerts for a given stage
                      earliestStartTime={earliestStartTime}
                      latestEndTime={latestEndTime}
                    />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
