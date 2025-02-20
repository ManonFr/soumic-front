import styles from "./Burger.module.css";

export default function Burger({ isOpen, setIsOpen }) {
  // Toggle menu visibilité
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.burgerMenu}>
      <button
        className={`${styles.burgerIcon} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="menu"
      >
        <div className={`${styles.line} ${styles.top}`}></div>
        <div
          className={`${styles.line} ${styles.middle} ${styles.clockwise}`}
        ></div>
        <div
          className={`${styles.line} ${styles.middle} ${styles.counterClockwise}`}
        ></div>
        <div className={`${styles.line} ${styles.bottom}`}></div>
      </button>
    </div>
  );
}
