import Link from "next/link";

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
    <section className="page-section">
      <div className="section-header">
        <div>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        {href && (
          <Link href={href}>
            {linkLabel} →
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
