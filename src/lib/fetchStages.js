export async function fetchAllPOIs() {
  const res = await fetch(`https://soumic-backend.onrender.com/poi`, {
    next: { revalidate: 3600 },
  });

  return await res.json();
}

// Récupère toutes les scènes
export async function fetchStagesOnly() {
  const allPois = await fetchAllPOIs();

  return allPois.filter((poi) => poi.type === "stage");
}

// Récupère une scène spécifique par ID
export async function fetchStage(stageId) {
  const allPois = await fetchAllPOIs();

  return allPois.find(
    (poi) => poi.type === "stage" && poi.id === Number(stageId)
  );
}
