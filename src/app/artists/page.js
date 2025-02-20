import Planning from "@/components/Planning/Planning";
import festivalData from "@/data/festival.json";

export default function LineUp() {
  const { artists, stages } = festivalData;

  return (
    <div>
      <Planning artists={artists} stages={stages} />
    </div>
  );
}
