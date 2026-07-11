"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { SafeImage } from "@/components/ui/SafeImage";

export interface StudioPageHeroProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  imageSrc?: string;
  compact?: boolean;
  children?: ReactNode;
  className?: string;
}

/** Bannière de page intérieure — sombre, image + dégradé */
export function StudioPageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  imageSrc,
  compact = true,
  children,
  className,
}: StudioPageHeroProps) {
  return (
    <section
      className={cn("page-banner", compact && "page-banner--compact", className)}
      aria-label={eyebrow ?? title}
    >
      {imageSrc && (
        <div className="page-banner__bg">
          <SafeImage src={imageSrc} alt="" fill sizes="100vw" priority />
        </div>
      )}
      <div className="page-banner__shade" aria-hidden />

      <div className="page-banner__content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}

        <h1>
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="text-accent">{titleAccent}</span>
            </>
          )}
        </h1>

        {description && <p className="page-banner__desc">{description}</p>}

        {children && <div className="cluster">{children}</div>}
      </div>
    </section>
  );
}

interface StudioSectionProps {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  fullBleed?: boolean;
  id?: string;
  "aria-label"?: string;
}

export function StudioSection({
  children,
  className,
  fullBleed,
  id,
  "aria-label": ariaLabel,
}: StudioSectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("page-section", fullBleed && "page-section--bleed", className)}
    >
      {children}
    </section>
  );
}

interface StudioSectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function StudioSectionHeader({
  eyebrow,
  title,
  titleAccent,
  description,
  action,
  className,
}: StudioSectionHeaderProps) {
  return (
    <div className={cn("section-header", className)}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>
          {title}
          {titleAccent && <span className="text-accent"> {titleAccent}</span>}
        </h2>
        {description && <p>{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export function StudioBackLink({
  href,
  label = "Retour",
  className,
}: {
  href: string;
  label?: string;
  className?: string;
}) {
  return (
    <Link href={href} className={cn("back-link", className)}>
      ← {label}
    </Link>
  );
}
