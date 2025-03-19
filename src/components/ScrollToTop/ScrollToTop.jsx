"use client";

import { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300); // Apparaît si on scroll de plus de 300px
    };

    window.addEventListener("scroll", toggleVisibility); // Ecoute l'évènement de scroll
    return () => window.removeEventListener("scroll", toggleVisibility); // Nettoyage de l'évènement au démontage du composant
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={`${styles.button} ${isVisible ? styles.visible : ""}`}>
      <button onClick={handleClick}>⬆</button>
    </div>
  );
}
