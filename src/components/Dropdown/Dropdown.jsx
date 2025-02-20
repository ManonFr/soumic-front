"use client";

import { useState, useRef } from "react";
import styles from "./Dropdown.module.css";

export default function Dropdown({ options, selected, onSelect, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={styles.dropdownButton}>
        {selected || label} <span className={styles.arrow}>▼</span>
      </button>

      {isOpen && (
        <ul
          className={styles.dropdownList}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {options
            .filter((option) => option.value !== "all")
            .map((option) => (
              <li
                key={option.value}
                className={styles.dropdownItem}
                onClick={() => {
                  onSelect(option.value);
                  setIsOpen(false);
                }}
              >
                {" "}
                {option.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
