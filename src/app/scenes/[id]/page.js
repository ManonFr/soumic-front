export const dynamic = "force-dynamic";

import StageDetails from "@/components/StageDetails/StageDetails";
import { fetchStage } from "@/lib/fetchStages";
import { fetchArtistsByStage } from "@/lib/fetchArtists";

export default async function StagePage({ params }) {
  const { id } = await params;

  const stage = await fetchStage(id);

  const artists = await fetchArtistsByStage(id);

  if (!stage) {
    return <p>Scène introuvable</p>;
  }

  return <StageDetails stage={stage} artists={artists} />;
}
