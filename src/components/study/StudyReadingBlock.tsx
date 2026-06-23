import type { StudyReading } from "@/types/study";

interface StudyReadingBlockProps {
  reading: StudyReading;
}

export function StudyReadingBlock({ reading }: StudyReadingBlockProps) {
  return (
    <article className="rounded-2xl border border-white/[0.06] bg-[var(--bg-elevated)] p-5 sm:p-6">
      <h3 className="text-base font-semibold tracking-tight">{reading.title}</h3>
      <div className="mt-4 space-y-3">
        {reading.paragraphs.map((p, i) => (
          <p key={i} className="text-body text-[0.9375rem] leading-relaxed">
            {p}
          </p>
        ))}
      </div>
      {reading.scriptureRefs && reading.scriptureRefs.length > 0 && (
        <footer className="mt-4 flex flex-wrap gap-2 border-t border-white/[0.05] pt-4">
          {reading.scriptureRefs.map((ref) => (
            <span
              key={ref}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-[0.6875rem] font-medium text-[var(--text-dim)]"
            >
              {ref}
            </span>
          ))}
        </footer>
      )}
    </article>
  );
}
