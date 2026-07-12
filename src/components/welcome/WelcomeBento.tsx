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
    className: "col-span-2 row-span-2 min-h-[12rem] sm:min-h-[14rem]",
  },
  {
    href: "/etude",
    title: "Étude",
    subtitle: "Articles & parcours",
    icon: BookMarked,
    imageSlot: "home.nav.etude",
    className: "row-span-2 min-h-[10rem]",
  },
  {
    href: "/mediatheque",
    title: "Vidéos",
    subtitle: "JW.org officiel",
    icon: Film,
    imageSlot: "home.nav.mediatheque",
    className: "col-span-2 min-h-[8rem]",
  },
  {
    href: "/langues",
    title: "Langues",
    subtitle: "Phrases prédication",
    icon: Globe,
    imageSlot: "home.nav.langues",
    className: "min-h-[8rem]",
  },
];

export function WelcomeBento() {
  return (
    <section className="section-block" aria-labelledby="welcome-bento-title">
      <div className="mb-5">
        <p className="text-caption mb-1 uppercase tracking-widest">Choisissez votre univers</p>
        <h2 id="welcome-bento-title" className="text-heading">
          Quatre chemins,
          <span className="text-[var(--accent)]"> une même Parole.</span>
        </h2>
      </div>

      <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {PATHS.map((path) => {
          const Icon = path.icon;
          const img = jwImageForSlot(path.imageSlot);
          return (
            <div key={path.href} className={cn("relative", path.className)}>
              <Link
                href={path.href}
                className="group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border border-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <div className="absolute inset-0">
                  <SafeImage
                    src={img.url}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15" />
                <div className="relative flex items-end justify-between gap-3 p-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
                      <Icon strokeWidth={2} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-semibold tracking-tight text-white">{path.title}</h3>
                      <p className="truncate text-sm text-white/70">{path.subtitle}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    aria-hidden
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
