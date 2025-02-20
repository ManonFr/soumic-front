export const typeTranslations = {
  stages: "scène",
  drinks: "buvette",
  wifi: "borne WiFi",
  parkings: "parking",
  campings: "camping",
  "rest area": "zone de repos",
  food: "restauration",
};

export function translateType(type) {
  return typeTranslations[type] || type;
}
