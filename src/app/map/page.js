export const dynamic = "force-dynamic";

import InteractiveMap from "@/components/InteractiveMap/InteractiveMap";
import { fetchPoiData } from "@/lib/fetchPoiData";

export default async function Map() {
  const markers = await fetchPoiData();

  return (
    <main>
      <h1>Carte interactive du festival</h1>
      <InteractiveMap markers={markers} />
    </main>
  );
}
