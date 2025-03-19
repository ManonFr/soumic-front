"use client";

import React from "react";
import styles from "./StageRow.module.css";

// Affiche les concerts d'une scène sur une timeline
export default function StageRow({
  stage, // Infos sur la scène actuelle (id, nom, etc)
  concerts, // Liste des concerts prévus sur cette scène
  earliestStartTime,
  latestEndTime,
}) {
  // Nombre total d'heures affichées sur la timeline
  const totalHours = latestEndTime - earliestStartTime + 1;

  return (
    <div key={stage.id} className={styles.stageRow}>
      {/* Timeline grahique affichant les concerts sous forme de blocs */}
      <div className={styles.timelineTrack}>
        {concerts.length > 0 ? (
          concerts.map((concert) => {
            // Extraction de l'heure de début et de fin du concert (4 constantes suivantes à bouger dans utils)
            const startHour = parseInt(concert.startTime.split(":")[0], 10);
            const endHour = parseInt(concert.endTime.split(":")[0], 10);
            // Calcul de la position du bloc sur la timeline en pourcentage
            const left =
              ((startHour + 1 - earliestStartTime) / totalHours) * 100;
            const width = ((endHour - startHour) / totalHours) * 100;
            return (
              <div
                key={concert.name} // Clé unique pour React
                className={styles.eventBlock}
                style={{ left: `${left}%`, width: `${width}%` }} // Positionnement dynamique sur la timeline
                role="button" // Rend le bloc accessible au clavier
                tabIndex="0" // Permet la navifation clavier avec Tab
                aria-label={`Concert de ${concert.name} sur la scène ${stage.name} de ${concert.startTime} à ${concert.endTime}`}
              >
                {concert.name}
              </div>
            );
          })
        ) : (
          <p className={styles.emptyStage}>Pas encore d’artistes annoncés</p>
        )}
      </div>

      {/* Variante pour l'affichage des concerts en mobile */}
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
          <p className={styles.emptyStage}>
            Pas encore d&apos;artistes annoncés
          </p>
        )}
      </div>
    </div>
  );
}
