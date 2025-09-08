"use client";
import { useState } from "react";
import styles from "./AdminButton.module.css";

export default function AdminButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    try {
      console.log("API URL =", process.env.NEXT_PUBLIC_API_URL);

      // 1. Ping towards backend
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ping`);
    } catch {}

    // 2. Open back office in a new tab
    window.open(
      `https://soumic-backoffice.vercel.app`,
      `_blank`,
      `noopener,noreferrer`
    );
    setLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={styles.adminButton}
    >
      {loading ? "Connexion..." : "Accès administration"}
    </button>
  );
}
