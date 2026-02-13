export async function fetchStagesData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stages`, {
    next: { revalidate: 3600 },
  });

  const rawStages = await res.json();
  const adaptedStages = rawStages.map((stage) => ({
    id: stage.id,
    latitude: stage.latitude,
    longitude: stage.longitude,
    name: stage.name,
    description: null,
    type: "stages",
  }));

  return adaptedStages;
}
