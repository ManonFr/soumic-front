import Planning from "@/components/Planning/Planning";
import { fetchFestivalData } from "@/lib/fetchArtists";

export const metadata = {
  title: "Line up",
};

export default async function LineUp() {
  const { artists, stages } = await fetchFestivalData();

  return (
    <div>
      <h1>Line Up</h1>
      <Planning artists={artists} stages={stages} />
    </div>
  );
}
