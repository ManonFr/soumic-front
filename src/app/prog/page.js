import TimelinePlanning from "@/components/TimelinePlanning/TimelinePlanning";
import festivalData from "@/data/festival.json";

export default function Programme() {
  const { artists, stages } = festivalData;
  return (
    <main>
      <h1>Programmation</h1>

      <TimelinePlanning artists={artists} stages={stages} />
    </main>
  );
}
