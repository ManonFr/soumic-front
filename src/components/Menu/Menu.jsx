import Link from "next/link";
import styles from "./Menu.module.css";
import { usePathname } from "next/navigation";

export default function Menu({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  return (
    <nav
      id="menu"
      className={`${styles.menu} ${isOpen ? styles.showMenu : ""}`}
      aria-label="Menu principal"
    >
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link
            href="/artists"
            className={`${styles.link} ${
              pathname === "/artists" ? styles.active : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Line-up
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            href="/prog"
            className={`${styles.link} ${
              pathname === "/prog" ? styles.active : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Programme
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            href="/map"
            className={`${styles.link} ${
              pathname === "/map" ? styles.active : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Carte interactive
          </Link>
        </li>
      </ul>
    </nav>
  );
}
