"use client";

import { useState, useEffect } from "react";

export default function useLeaflet() {
  const [L, setL] = useState(null); // Stocke leaflet une fois chargé

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet); // Enregistre leaflet une fois importé
    });
  }, []); // Exécuté une seule fois après le premier rendu

  return L;
}

// Pourquoi import("leaflet") et pas import L from "leaflet" ? => L'import normal est éxécuté au built, ce qui cause une erreur Next.js en mode SSR
