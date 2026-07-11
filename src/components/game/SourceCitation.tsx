import { BookOpen } from "lucide-react";
import type { OfficialSource } from "@/types/content";

interface SourceCitationProps {
  text: string;
  sources: OfficialSource[];
  className?: string;
}

export function SourceCitation({ text, sources, className }: SourceCitationProps) {
  return (
    <blockquote>
      <p>{text}</p>
      <footer>
        <BookOpen />
        <cite>
          {sources.map((s) => s.reference).join(" · ")}
          {sources[0]?.bibleEdition && ` — ${sources[0].bibleEdition}`}
        </cite>
      </footer>
    </blockquote>
  );
}
