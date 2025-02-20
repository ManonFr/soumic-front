"use client";

import React from "react";
import styles from "./StageRow.module.css";

export default function StageRow({
  stage,
  concerts,
  earliestStartTime,
  latestEndTime,
}) {
  const totalHours = latestEndTime - earliestStartTime + 1;

  return (
    <div key={stage.id} className={styles.stageRow}>
      <h3 className={styles.stageTitle}>{stage.name}</h3>

      <div className={styles.timelineTrack}>
        {concerts.length > 0 ? (
          concerts.map((concert) => {
            const startHour = parseInt(concert.startTime.split(":")[0], 10);
            const endHour = parseInt(concert.endTime.split(":")[0], 10);
            const left =
              ((startHour + 1 - earliestStartTime) / totalHours) * 100;
            const width = ((endHour - startHour) / totalHours) * 100;
            return (
              <div
                key={concert.name}
                className={styles.eventBlock}
                style={{ left: `${left}%`, width: `${width}%` }}
                aria-label={`Concert de ${concert.name} de ${concert.startTime} à ${concert.endTime}`}
              >
                {concert.name}
              </div>
            );
          })
        ) : (
          <p className={styles.emptyStage}>Pas encore d’artistes annoncés</p>
        )}
      </div>

      <div className={styles.timelineList}>
        {concerts.length > 0 ? (
          concerts.map((concert) => (
            <div key={concert.name} className={styles.eventItem}>
              <span className={styles.eventTime}>
                {concert.startTime} - {concert.endTime}
              </span>
              <span className={styles.eventName}>{concert.name}</span>
            </div>
          ))
        ) : (
          <p className={styles.emptyStage}>Pas encore d'artistes annoncés</p>
        )}
      </div>
    </div>
  );
}
