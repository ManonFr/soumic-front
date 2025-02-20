import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" aria-label="Accueil">
        <Image
          src="/soumic-logo.png"
          alt="Logo du festival"
          title="Logo du festival"
          className={styles.logo}
          width={100}
          height={100}
          priority
        ></Image>
      </Link>
      <Nav />
    </header>
  );
}
