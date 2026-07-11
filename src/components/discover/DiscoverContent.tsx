"use client";

import Image from "next/image";
import Link from "next/link";
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
import { Button } from "@/components/ui/Button";
import { PageWrapper } from "@/components/motion/PageWrapper";
import {
  StudioPageHero,
  StudioSection,
  StudioSectionHeader,
} from "@/components/studio/StudioPageHero";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { ScrollReveal, ScrollRevealGroup, ScrollRevealItem } from "@/components/motion/ScrollReveal";
import { InteractiveCard } from "@/components/motion/InteractiveCard";
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
  langues: Globe,
  quotidien: Flame,
} as const;

function DiscoverCard({ item }: { item: DiscoverItem }) {
  const external = item.external ?? item.href.startsWith("http");

  const content = (
    <div>
      <Image
        src={item.image}
        alt="" fill sizes="(max-width: 768px) 100vw, 33vw" />
      <div />
      {item.badge ? (
        <span>
          {item.badge}
        </span>
      ) : null}
      {external ? (
        <ExternalLink aria-hidden />
      ) : (
        <ArrowUpRight aria-hidden />
      )}
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );

  return (
    <InteractiveCard>
      {external ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link href={item.href}>
          {content}
        </Link>
      )}
    </InteractiveCard>
  );
}

function AppShortcut({ item }: { item: DiscoverItem }) {
  const Icon = APP_ICONS[item.id as keyof typeof APP_ICONS] ?? Compass;

  return (
    <ScrollRevealItem>
      <Link href={item.href}>
        <span>
          <Icon strokeWidth={1.75} aria-hidden />
        </span>
        <div>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
        {item.badge ? (
          <span>{item.badge}</span>
        ) : null}
      </Link>
    </ScrollRevealItem>
  );
}

export function DiscoverContent() {
  return (
    <PageWrapper>
      <StudioPageShell>
        <StudioPageHero
          eyebrow="Ressources" title="Découvrir" titleAccent="JW Games" description="Ressources officielles JW.org et contenus intégrés dans l'application." imageSrc={DISCOVER_HERO.image}
        >
          <div>
            <Link href="/mediatheque">
              <Button size="sm">
                <Film aria-hidden />
                Médiathèque
              </Button>
            </Link>
            <Link href="https://www.jw.org/fr/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <Globe aria-hidden />
                JW.org
              </Button>
            </Link>
          </div>
        </StudioPageHero>

        <StudioPageBody>
          <StudioSection>
            <StudioSectionHeader
              eyebrow="Application" title="Dans JW Games" description="Accès direct au contenu disponible dans l'application." />
            <ScrollRevealGroup>
              {DISCOVER_APP_LINKS.map((item) => (
                <AppShortcut key={item.id} item={item} />
              ))}
            </ScrollRevealGroup>
          </StudioSection>

          {DISCOVER_SECTIONS.map((section, i) => (
            <StudioSection key={section.id} alt={i % 2 === 1}>
              <StudioSectionHeader title={section.title} description={section.subtitle} />
              <ScrollRevealGroup>
                {section.items.map((item) => (
                  <ScrollRevealItem key={item.id}>
                    <DiscoverCard item={item} />
                  </ScrollRevealItem>
                ))}
              </ScrollRevealGroup>
            </StudioSection>
          ))}

          <ScrollReveal>
            <section>
              <h2>
                <Globe aria-hidden />
                Liens officiels
              </h2>
              <p>{OFFICIAL_SOURCES_NOTICE}</p>
              <div>
                {DISCOVER_OFFICIAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank" rel="noopener noreferrer" >
                    {link.label}
                    <ExternalLink aria-hidden />
                  </Link>
                ))}
              </div>
            </section>
          </ScrollReveal>
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}
