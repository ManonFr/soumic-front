"use client";

import { useState, useEffect } from "react";
import styles from "./Nav.module.css";
import Menu from "../Menu/Menu";
import Burger from "../Burger/Burger";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when the menu is open (mobile view)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={styles.nav}>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
