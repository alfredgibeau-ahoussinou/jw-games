import type { StudyReading } from "@/types/study";

interface StudyReadingBlockProps {
  reading: StudyReading;
}

export function StudyReadingBlock({ reading }: StudyReadingBlockProps) {
  return (
    <article>
      <h3>{reading.title}</h3>
      <div>
        {reading.paragraphs.map((p, i) => (
          <p key={i}>
            {p}
          </p>
        ))}
      </div>
      {reading.scriptureRefs && reading.scriptureRefs.length > 0 && (
        <footer>
          {reading.scriptureRefs.map((ref) => (
            <span
              key={ref}
            >
              {ref}
            </span>
          ))}
        </footer>
      )}
    </article>
  );
}
