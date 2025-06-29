"use client";

import { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300); // Appears if scrolled more than 300px
    };

    window.addEventListener("scroll", toggleVisibility); // Listen to scroll event
    return () => window.removeEventListener("scroll", toggleVisibility); // Clean up event on component unmount
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
