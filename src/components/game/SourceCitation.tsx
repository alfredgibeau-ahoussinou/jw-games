import { BookOpen } from "lucide-react";
import type { OfficialSource } from "@/types/content";

interface SourceCitationProps {
  text: string;
  sources: OfficialSource[];
  className?: string;
}

export function SourceCitation({ text, sources, className }: SourceCitationProps) {
  return (
    <blockquote className={className}>
      <p className="scripture-block">{text}</p>
      <footer className="mt-3 flex items-center gap-2">
        <BookOpen className="h-3.5 w-3.5 text-[var(--jw-teal-glow)]" />
        <cite className="scripture-ref not-italic">
          {sources.map((s) => s.reference).join(" · ")}
          {sources[0]?.bibleEdition && ` — ${sources[0].bibleEdition}`}
        </cite>
      </footer>
    </blockquote>
  );
}
