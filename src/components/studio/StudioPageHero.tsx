"use client";

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

/** Bannière de page intérieure — style production (teal + Tailwind) */
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
      className={cn(
        "relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]",
        compact ? "p-6 sm:p-8" : "p-8 sm:p-10",
        className
      )}
      aria-label={eyebrow ?? title}
    >
      {imageSrc && (
        <>
          <div className="absolute inset-0">
            <SafeImage src={imageSrc} alt="" fill sizes="100vw" priority className="object-cover" />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/85 to-[var(--bg)]/40"
            aria-hidden
          />
        </>
      )}

      <div className="relative z-10">
        {eyebrow && (
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{eyebrow}</p>
        )}

        <h1 className="text-display">
          {title}
          {titleAccent && <span className="text-[var(--accent)]"> {titleAccent}</span>}
        </h1>

        {description && (
          <p className="text-body mt-3 max-w-2xl text-[0.9375rem] sm:text-base">{description}</p>
        )}

        {children && <div className="mt-4 flex flex-wrap items-center gap-2">{children}</div>}
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
      className={cn("section-block", fullBleed && "px-0", className)}
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
    <div className={cn("mb-4 flex flex-wrap items-end justify-between gap-3", className)}>
      <div>
        {eyebrow && (
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{eyebrow}</p>
        )}
        <h2 className="text-heading">
          {title}
          {titleAccent && <span className="text-[var(--accent)]"> {titleAccent}</span>}
        </h2>
        {description && <p className="text-body mt-1 text-sm">{description}</p>}
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
    <a href={href} className={cn("link-primary text-sm font-semibold", className)}>
      ← {label}
    </a>
  );
}
