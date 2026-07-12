"use client";

import Link from "next/link";
import { ArrowLeft, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { StudioPageHero } from "@/components/studio/StudioPageHero";

interface PageHeaderProps {
  title: string;
  titleAccent?: string;
  description?: string;
  emoji?: string;
  icon?: LucideIcon;
  backHref?: string;
  backLabel?: string;
  children?: React.ReactNode;
  className?: string;
  heroImage?: string;
  heroImageAlt?: string;
  eyebrow?: string;
}

export function PageHeader({
  title,
  titleAccent,
  description,
  emoji,
  icon: Icon,
  backHref,
  backLabel = "Retour",
  children,
  className,
  heroImage,
  heroImageAlt: _heroImageAlt,
  eyebrow,
}: PageHeaderProps) {
  const backLink = backHref ? (
    <Link
      href={backHref}
      className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-white"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden />
      {backLabel}
    </Link>
  ) : null;

  if (heroImage) {
    return (
      <header className={cn("mb-5 sm:mb-8", className)}>
        {backLink}
        <StudioPageHero
          eyebrow={eyebrow ?? (Icon ? undefined : emoji ? "Section" : undefined)}
          title={title}
          titleAccent={titleAccent}
          description={description}
          imageSrc={heroImage}
        >
          {children}
        </StudioPageHero>
      </header>
    );
  }

  return (
    <header className={cn("mb-5 sm:mb-8", className)}>
      {backLink}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{eyebrow}</p>
          )}
          <h1 className="text-display flex items-center gap-2 sm:gap-3">
            {Icon ? (
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent)] sm:h-12 sm:w-12"
                aria-hidden
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
              </span>
            ) : emoji ? (
              <span className="text-2xl sm:text-4xl" aria-hidden>
                {emoji}
              </span>
            ) : null}
            <span className="min-w-0 break-words">
              {title}
              {titleAccent && <span className="text-[var(--accent)]"> {titleAccent}</span>}
            </span>
          </h1>
          {description && <p className="text-body mt-2 text-[0.9375rem] sm:text-base">{description}</p>}
        </div>
        {children && <div className="flex shrink-0 flex-wrap gap-2">{children}</div>}
      </div>
    </header>
  );
}
