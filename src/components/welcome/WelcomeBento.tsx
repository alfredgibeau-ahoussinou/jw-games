"use client";

import Link from "next/link";
import { ArrowUpRight, BookMarked, Film, Gamepad2, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";
import { jwImageForSlot } from "@/lib/jw-images";
import { cn } from "@/lib/cn";

const PATHS: {
  href: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  imageSlot: "home.nav.jeux" | "home.nav.etude" | "home.nav.mediatheque" | "home.nav.langues";
  className: string;
}[] = [
  {
    href: "/jeux",
    title: "Jeux",
    subtitle: "15 modes · swipe & joue",
    icon: Gamepad2,
    imageSlot: "home.nav.jeux",
    className: "ws-bento__cell--lg",
  },
  {
    href: "/etude",
    title: "Étude",
    subtitle: "Articles & parcours",
    icon: BookMarked,
    imageSlot: "home.nav.etude",
    className: "ws-bento__cell--tall",
  },
  {
    href: "/mediatheque",
    title: "Vidéos",
    subtitle: "JW.org officiel",
    icon: Film,
    imageSlot: "home.nav.mediatheque",
    className: "ws-bento__cell--wide",
  },
  {
    href: "/langues",
    title: "Langues",
    subtitle: "Phrases prédication",
    icon: Globe,
    imageSlot: "home.nav.langues",
    className: "ws-bento__cell--sm",
  },
];

export function WelcomeBento() {
  return (
    <section className="page-section bento-section" aria-labelledby="welcome-bento-title">
      <div className="section-header">
        <div>
          <p className="eyebrow">Choisissez votre univers</p>
          <h2 id="welcome-bento-title">
            Quatre chemins,
            <span className="text-accent"> une même Parole.</span>
          </h2>
        </div>
      </div>

      <div className="bento-grid">
          {PATHS.map((path) => {
            const Icon = path.icon;
            const img = jwImageForSlot(path.imageSlot);
            return (
              <div key={path.href} className={cn("bento-cell", path.className)}>
                <Link href={path.href}>
                  <div className="absolute inset-0">
                    <SafeImage
                      src={img.url}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div />
                  <div>
                    <span>
                      <Icon strokeWidth={2} aria-hidden />
                    </span>
                    <div>
                      <h3>{path.title}</h3>
                      <p>{path.subtitle}</p>
                    </div>
                    <ArrowUpRight aria-hidden
                    />
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
}
