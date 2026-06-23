"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookMarked,
  Compass,
  ExternalLink,
  Film,
  Flame,
  Gamepad2,
  Globe,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { OFFICIAL_SOURCES_NOTICE } from "@/lib/constants";
import {
  DISCOVER_APP_LINKS,
  DISCOVER_HERO,
  DISCOVER_OFFICIAL_LINKS,
  DISCOVER_SECTIONS,
  type DiscoverItem,
} from "@/data/discover-links";

const APP_ICONS = {
  mediatheque: Film,
  jeux: Gamepad2,
  etude: BookMarked,
  quotidien: Flame,
} as const;

function DiscoverCard({ item }: { item: DiscoverItem }) {
  const external = item.external ?? item.href.startsWith("http");
  const className =
    "discover-card group relative block overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]";

  const content = (
    <>
      <div className="discover-card__media relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="discover-card__overlay absolute inset-0" />
        {item.badge ? (
          <span className="absolute left-3 top-3 rounded-md bg-black/55 px-2 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
            {item.badge}
          </span>
        ) : null}
        {external ? (
          <ExternalLink
            className="absolute right-3 top-3 h-4 w-4 text-white/45 transition-colors group-hover:text-white"
            aria-hidden
          />
        ) : (
          <ArrowUpRight
            className="absolute right-3 top-3 h-4 w-4 text-white/45 transition-colors group-hover:text-white"
            aria-hidden
          />
        )}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">{item.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm leading-snug text-white/70">{item.description}</p>
        </div>
      </div>
    </>
  );

  if (external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {content}
    </Link>
  );
}

function AppShortcut({ item }: { item: DiscoverItem }) {
  const Icon = APP_ICONS[item.id as keyof typeof APP_ICONS] ?? Compass;

  return (
    <Link
      href={item.href}
      className="discover-shortcut group flex min-w-[9.5rem] flex-col gap-3 rounded-xl border border-white/[0.06] bg-[var(--bg-card)] p-4 transition-colors hover:border-white/12 hover:bg-[var(--bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:min-w-0"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent)]">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </span>
        {item.badge ? (
          <span className="rounded-full bg-white/8 px-2 py-0.5 text-[0.625rem] font-semibold text-[var(--text-muted)]">
            {item.badge}
          </span>
        ) : null}
      </div>
      <div>
        <p className="font-semibold text-[var(--text)] group-hover:text-[var(--accent-hover)]">{item.title}</p>
        <p className="text-caption mt-1 line-clamp-2">{item.description}</p>
      </div>
    </Link>
  );
}

export function DiscoverContent() {
  return (
    <Container>
      <section className="discover-hero mb-8 sm:mb-10">
        <div className="discover-hero__media relative min-h-[14rem] sm:min-h-[16rem]">
          <Image
            src={DISCOVER_HERO.image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="discover-hero__overlay absolute inset-0" />
          <div className="relative flex h-full flex-col justify-end p-5 sm:p-8">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/20 text-[var(--accent-hover)] ring-1 ring-[var(--accent)]/30 backdrop-blur-sm">
              <Compass className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </div>
            <h1 className="max-w-xl text-display text-white drop-shadow-md">Découvrir</h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Ressources officielles JW.org et contenus intégrés dans JW Games — Bible, vidéos, jeux et étude personnelle.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/mediatheque">
                <Button size="sm">
                  <Film className="h-4 w-4" aria-hidden />
                  Médiathèque
                </Button>
              </Link>
              <Link href="https://www.jw.org/fr/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-white/25 bg-black/30 text-white hover:bg-black/45">
                  <Globe className="h-4 w-4" aria-hidden />
                  JW.org
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mb-10 sm:mb-12"
      >
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-heading">Dans JW Games</h2>
            <p className="text-caption mt-1">Accès direct au contenu disponible dans l&apos;application.</p>
          </div>
        </div>
        <div className="discover-shortcuts-scroll -mx-1 flex gap-3.5 overflow-x-auto px-1 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {DISCOVER_APP_LINKS.map((item) => (
            <AppShortcut key={item.id} item={item} />
          ))}
        </div>
      </motion.section>

      {DISCOVER_SECTIONS.map((section, sectionIndex) => (
        <motion.section
          key={section.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.05 * (sectionIndex + 1) }}
          className="mb-10 sm:mb-12"
        >
          <div className="mb-4">
            <h2 className="text-heading">{section.title}</h2>
            <p className="text-caption mt-1 max-w-2xl">{section.subtitle}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item) => (
              <DiscoverCard key={item.id} item={item} />
            ))}
          </div>
        </motion.section>
      ))}

      <section className="discover-official mb-6 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 sm:p-6">
        <h2 className="text-heading flex items-center gap-2">
          <Globe className="h-5 w-5 text-[var(--accent)]" aria-hidden />
          Liens officiels
        </h2>
        <p className="text-caption mt-1 mb-4">{OFFICIAL_SOURCES_NOTICE}</p>
        <div className="flex flex-wrap gap-2">
          {DISCOVER_OFFICIAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-[var(--bg-elevated)] px-3 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:border-white/14 hover:text-white"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
