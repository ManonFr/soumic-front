"use client";

import styles from "./StageDetails.module.css";
import Link from "next/link";
import { formatDateToFullDate } from "@/utils/dateUtils";

export default function StageDetails({ stage, artists }) {
  if (!stage) {
    return <p className={styles.error}>Scène introuvable.</p>;
  }

  return (
    <div className={styles.stageContainer}>
      <h1>{stage.name}</h1>
      {/* <p>Latitude : {pageStage.location.latitude}</p>
    <p>Longitude: {pageStage.location.longitude}</p> */}

      <h2 className={styles.subtitle}>Artistes programmés</h2>
      <ul className={styles.artistList}>
        {artists.length > 0 ? (
          artists.map((artist) => (
            <li key={artist.name} className={styles.artistCard}>
              <strong>{artist.name}</strong> <br />
              {formatDateToFullDate(artist.date)}, {artist.startTime} -{" "}
              {artist.endTime}
            </li>
          ))
        ) : (
          <p className={styles.noArtist}>
            Aucun artiste programmé pour cette scène
          </p>
        )}
      </ul>
      <Link href="/map" className={styles.backLink}>
        Retour à la carte
      </Link>
    </div>
  );
}
