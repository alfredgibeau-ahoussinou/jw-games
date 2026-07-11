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
  if (heroImage) {
    return (
      <header className={cn("page-header-wrap", className)}>
        {backHref && (
          <Link href={backHref} className="back-link page-header-wrap__back">
            <ArrowLeft aria-hidden />
            {backLabel}
          </Link>
        )}
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
    <header className={cn("page-header-wrap", className)}>
      {backHref && (
        <Link href={backHref} className="back-link">
          <ArrowLeft aria-hidden />
          {backLabel}
        </Link>
      )}
      <div className="page-banner page-banner--compact page-banner--plain">
        <div className="page-banner__content">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>
            {Icon && (
              <span className="page-banner__icon" aria-hidden>
                <Icon strokeWidth={1.75} />
              </span>
            )}
            {emoji && !Icon && (
              <span className="page-banner__icon" aria-hidden>
                {emoji}
              </span>
            )}
            {title}
            {titleAccent && <span className="text-accent"> {titleAccent}</span>}
          </h1>
          {description && <p className="page-banner__desc">{description}</p>}
          {children && <div className="cluster">{children}</div>}
        </div>
      </div>
    </header>
  );
}
