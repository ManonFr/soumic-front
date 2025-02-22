import Image from "next/image";
import styles from "./ArtistCard.module.css";
import { formatDateToFullDate } from "@/utils/dateUtils";

export default function ArtistCard({ artist }) {
  return (
    <div className={styles.eventCard}>
      <Image
        src={artist.photo}
        alt={`Photo de ${artist.name}`}
        fill
        sizes="(max-width: 767px) 50vw, (max-width: 1023px) 25vw, 20vw"
        className={styles.artistPhoto}
      />
      <div className={styles.overlay}>
        <p className={styles.date}>{formatDateToFullDate(artist.date)}</p>
        <h3 className={styles.name}>{artist.name}</h3>
      </div>
    </div>
  );
}
