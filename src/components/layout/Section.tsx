import Link from "next/link";
import { cn } from "@/lib/cn";

interface SectionProps {
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  title,
  description,
  href,
  linkLabel = "Voir tout",
  children,
  className,
}: SectionProps) {
  return (
    <section className={cn("section-block", className)}>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-heading">{title}</h2>
          {description && <p className="text-caption mt-1">{description}</p>}
        </div>
        {href && (
          <Link href={href} className="link-primary shrink-0">
            {linkLabel} →
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
