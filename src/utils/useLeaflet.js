"use client";

import { useState, useEffect } from "react";

export default function useLeaflet() {
  const [L, setL] = useState(null);

  useEffect(() => {
    import("leaflet").then((leaflet) => {
      setL(leaflet);
    });
  }, []);

  return L;
}
