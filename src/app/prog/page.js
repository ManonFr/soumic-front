import TimelinePlanning from "@/components/TimelinePlanning/TimelinePlanning";
import festivalData from "@/data/festival.json";

export default function Programme() {
  return (
    <main>
      <h1>Programmation</h1>

      <TimelinePlanning
        artists={festivalData.artists}
        stages={festivalData.stages}
      />
    </main>
  );
}
