"use client";

import styles from "./StageDetails.module.css";
import Link from "next/link";
import { formatDateToFullDate, formatTimeHHMM } from "@/utils/dateUtils";

export default function StageDetails({ stage, artists }) {
  if (!stage) {
    return (
      <p className={styles.error} role="alert">
        Scène introuvable.
      </p>
    );
  }
  return (
    <div className={styles.stageContainer}>
      <h1>{stage.name}</h1>
      <h2 className={styles.subtitle}>Artistes programmés</h2>
      <ul className={styles.artistList} role="list" aria-live="polite">
        {artists.length > 0 ? (
          artists.map((artist) => (
            <li
              key={artist.artist_id}
              className={styles.artistCard}
              role="listitem"
            >
              <strong>{artist.artist_name}</strong> <br />
              {formatDateToFullDate(artist.date)},{" "}
              {formatTimeHHMM(artist.start_time)} -{" "}
              {formatTimeHHMM(artist.end_time)}
            </li>
          ))
        ) : (
          <li className={styles.noArtist} role="listitem">
            <span>Aucun artiste programmé pour cette scène</span>
          </li>
        )}
      </ul>
      <Link
        href="/map"
        className={styles.backLink}
        aria-label="Retourner à la carte interactive"
      >
        Retour à la carte
      </Link>
    </div>
  );
}
