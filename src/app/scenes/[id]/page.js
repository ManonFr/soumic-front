import StageDetails from "@/components/StageDetails/StageDetails";
import festivalData from "@/data/festival.json";

export default async function StagePage({ params }) {
  const { id } = await params;

  const pageStage = festivalData.stages.find((stage) => stage.id === id);

  const artists = festivalData.artists.filter((artist) => artist.stage === id);

  return <StageDetails stage={pageStage} artists={artists} />;
}
