import TimelinePlanning from "@/components/TimelinePlanning/TimelinePlanning";
import { fetchFestivalData } from "@/lib/fetchArtists";

export default async function Programme() {
  const { artists, stages } = await fetchFestivalData();
  return (
    <main>
      <h1>Programmation</h1>

      <TimelinePlanning artists={artists} stages={stages} />
    </main>
  );
}
