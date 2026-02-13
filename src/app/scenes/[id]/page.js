import StageDetails from "@/components/StageDetails/StageDetails";
import { fetchStagesData } from "@/lib/fetchStages";
import { fetchArtistsByStage } from "@/lib/fetchArtists";

export default async function StagePage({ params }) {
  const { id } = await params;

  const stage = await fetchStagesData(id);

  const artists = await fetchArtistsByStage(id);

  if (!stage) {
    return <p>Scène introuvable</p>;
  }

  return <StageDetails stage={stage} artists={artists} />;
}
