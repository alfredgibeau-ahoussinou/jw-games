"use client";

import Link from "next/link";
import { ArrowDown, Gamepad2, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
import { GAME_MODES } from "@/lib/constants";
import { STUDY_THEMES } from "@/data/study-themes";
import { PREACH_LANGUAGES } from "@/data/languages";
import { jwImageForSlot } from "@/lib/jw-images";

const STATS = [
  { value: String(GAME_MODES.filter((g) => g.available).length), label: "modes de jeu" },
  { value: String(STUDY_THEMES.length), label: "thématiques" },
  { value: String(PREACH_LANGUAGES.length), label: "langues" },
];

interface WelcomeHeroProps {
  isOnboarded: boolean;
  displayName?: string;
}

export function WelcomeHero({ isOnboarded, displayName }: WelcomeHeroProps) {
  const heroImg = jwImageForSlot("hero.jeux");

  return (
    <section className="netflix-billboard" aria-label="Bienvenue">
      <div className="netflix-billboard__bg">
        <SafeImage src={heroImg.url} alt="" fill sizes="100vw" priority />
      </div>
      <div className="netflix-billboard__shade-left" aria-hidden />
      <div className="netflix-billboard__shade-bottom" aria-hidden />

      <div className="netflix-billboard__content">
        <span className="netflix-billboard__badge">Étude biblique interactive</span>
        <p className="eyebrow">
          {displayName ? `Bonjour, ${displayName.split(" ")[0]}` : "JW Games"}
        </p>
        <h1>Apprenez la Bible en jouant</h1>
        <p className="netflix-billboard__desc">
          Quiz, étude personnelle, vidéos officielles jw.org et langues pour le ministère — pour
          toute la famille, sans publicité.
        </p>

        <div className="netflix-billboard__actions">
          <Link href="/jeux">
            <Button size="lg" variant="primary">
              <Gamepad2 aria-hidden />
              Jouer
            </Button>
          </Link>
          {!isOnboarded ? (
            <Link href="/profil">
              <Button size="lg" variant="secondary">
                <Sparkles aria-hidden />
                Créer mon profil
              </Button>
            </Link>
          ) : (
            <Link href="/etude">
              <Button size="lg" variant="secondary">
                <User aria-hidden />
                Mon parcours
              </Button>
            </Link>
          )}
        </div>

        <ul className="netflix-billboard__stats">
          {STATS.map((s) => (
            <li key={s.label}>
              <span>{s.value}+</span>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href="#decouvrir" className="netflix-billboard__scroll" aria-label="Découvrir la suite">
        <span>Découvrir</span>
        <ArrowDown aria-hidden />
      </a>
    </section>
  );
}
