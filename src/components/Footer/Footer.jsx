import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import AdminButton from "../AdminButton/AdminButton";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Link href="/" aria-label="Accueil">
          <Image
            src="/soumic-logo.png"
            alt="festival logo"
            width={100}
            height={100}
            className={styles.logo}
          ></Image>
        </Link>
        <div className={styles.iconsAndButtons}>
          <nav className={styles.footerNav} aria-label="Liens utiles">
            <Link href="/infos">Informations & FAQ</Link>
            <Link href="/partenaires">Partenaires</Link>
          </nav>
          <div className={styles.icons}>
            <Image
              src="/icon-facebook.png"
              alt="Facebook logo"
              width={30}
              height={30}
            ></Image>
            <Image
              src="/icon-twitter.png"
              alt="Twitter logo"
              width={30}
              height={30}
            ></Image>
            <Image
              src="/icon-insta.png"
              alt="Instagram logo"
              width={30}
              height={30}
            ></Image>
            <Image
              src="/icon-youtube.png"
              alt="Youtube logo"
              width={30}
              height={30}
            ></Image>
            <Image
              src="/icon-snap.png"
              alt="Snapchat logo"
              width={30}
              height={30}
            ></Image>
            <Image
              src="/icon-linkedin.png"
              alt="LinkedIn logo"
              width={30}
              height={30}
            ></Image>
          </div>
          <AdminButton />
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.adminSection}></div>
    </footer>
  );
}
