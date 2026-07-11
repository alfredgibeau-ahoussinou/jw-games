"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";

interface SectionHeroProps {
  imageUrl: string;
  imageAlt?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  ctaLabel?: string;
  className?: string;
  compact?: boolean;
}

export function SectionHero({
  imageUrl,
  imageAlt = "",
  eyebrow,
  title,
  description,
  href,
  ctaLabel = "Explorer",
}: SectionHeroProps) {
  const inner = (
    <article>
      <div>
        <SafeImage src={imageUrl} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 1200px" />
      </div>
      <div>
        {eyebrow && <p>{eyebrow}</p>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {href && (
          <span>
            {ctaLabel}
            <ArrowUpRight aria-hidden />
          </span>
        )}
      </div>
    </article>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }

  return inner;
}
