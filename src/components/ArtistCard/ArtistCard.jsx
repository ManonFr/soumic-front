import Image from "next/image";
import Link from "next/link";
import styles from "./ArtistCard.module.css";
import { formatDateToFullDate } from "@/utils/dateUtils";

export default function ArtistCard({ artist, stageName }) {
  return (
    <div className={styles.eventCard}>
      <Image
        src={artist.photo}
        alt={artist.name}
        fill
        sizes="(max-width: 767px) 50vw, (max-width: 1023px) 25vw, 20vw"
        className={styles.artistPhoto}
      />
      <div className={styles.overlay}>
        <p className={styles.date}>{formatDateToFullDate(artist.date)}</p>
        <h3 className={styles.name}>{artist.name}</h3>
        {/* <p>
        <strong>Genre:</strong> {artist.genre}
      </p> */}
        {/* <p>
        <strong>Heure:</strong> {artist.startTime}
      </p>
      <p>
        <strong>Scène:</strong> {stageName || "Scène inconnue"}
      </p> */}
      </div>
    </div>
  );
}
