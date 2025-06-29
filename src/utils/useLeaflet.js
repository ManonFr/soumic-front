"use client";

import { useState, useEffect } from "react";

export default function useLeaflet() {
  const [L, setL] = useState(null); // Store Leaflet once loaded

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet); // Save Leaflet after dynamic import
    });
  }, []); // Run only once after initial render

  return L;
}

// Why use import("leaflet") instead of import L from "leaflet" ? Bc static imports are executed at build time, which causes errors in Next.js SSR mode
