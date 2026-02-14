import InteractiveMap from "@/components/InteractiveMap/InteractiveMap";
import { fetchPoiData } from "@/lib/fetchPoiData";
import { fetchStagesData } from "@/lib/fetchStages";

export const metadata = {
  title: "Carte interactive",
};

export default async function Map() {
  // Fetch POIs and stages in parallel
  const [pois, stages] = await Promise.all([fetchPoiData(), fetchStagesData()]);
  // Combine all markers
  const markers = [...pois, ...stages];

  return (
    <main>
      <h1>Carte interactive du festival</h1>
      <InteractiveMap markers={markers} />
    </main>
  );
}
