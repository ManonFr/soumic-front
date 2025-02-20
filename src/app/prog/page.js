import TimelinePlanning from "@/components/TimelinePlanning/TimelinePlanning";
import festivalData from "@/data/festival.json";

export default function Programme() {
  return (
    <TimelinePlanning
      artists={festivalData.artists}
      stages={festivalData.stages}
    />
  );
}
