export function getCustomIcon(L, type) {
  if (!L) return null;
  // Définir les chemins des icônes
  const icons = {
    stages: "/stageIcon.png",
    food: "/foodIcon.png",
    drinks: "/drinksIcon.png",
    parkings: "/parkingIcon.png",
    wifi: "/wifiIcon.png",
    campings: "/campingIcon.png",
    "rest area": "/restAreaIcon.png",
  };

  return new L.Icon({
    iconUrl: icons[type] || "/defaultIcon.png",
    iconSize: [25, 25],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  });
}
