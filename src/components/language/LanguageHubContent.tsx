"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Globe, ArrowUpRight } from "lucide-react";
import { PREACH_LANGUAGES } from "@/data/languages";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SafeImage } from "@/components/ui/SafeImage";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { jwImageForLanguage, jwImageForSlot } from "@/lib/jw-images";
import { getAllLanguageProgress } from "@/hooks/useLanguageProgress";

export function LanguageHubContent() {
  const [progress, setProgress] = useState<ReturnType<typeof getAllLanguageProgress>>({});

  useEffect(() => {
    setProgress(getAllLanguageProgress());
  }, []);

  return (
    <PageWrapper>
      <StudioPageShell>
        <PageHeader
          title="Langues pour la"
          titleAccent="prédication"
          description="45 à 50 expressions par langue — cartes, quiz et situations courantes à la porte."
          icon={Globe}
          heroImage={jwImageForSlot("hero.langues").url}
          heroImageAlt={jwImageForSlot("hero.langues").alt}
          eyebrow="Prédication"
        />

        <StudioPageBody className="space-y-8">
          <Card glow className="overflow-hidden">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent)]">
                <Globe className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <p className="font-semibold">Pour aller prêcher dans une autre langue</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                  Cartes mémoire, quiz et liste de référence : introductions, pitches, mots clés,
                  retours visite et situations courantes. Écoutez la langue cible après avoir
                  retourné la carte.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PREACH_LANGUAGES.map((lang) => {
              const known = progress[lang.id]?.known?.length ?? 0;
              const pct = Math.round((known / lang.phrases.length) * 100);
              const img = jwImageForLanguage(lang.id);

              return (
                <Link
                  key={lang.id}
                  href={`/langues/${lang.id}`}
                  className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <Card hover className="flex h-full flex-col overflow-hidden p-0">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <SafeImage
                        src={img.url}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 360px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <span
                        className="absolute bottom-3 left-3 text-3xl drop-shadow-md"
                        aria-hidden
                      >
                        {lang.flag}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <div>
                          <h2 className="text-base font-semibold tracking-tight">{lang.name}</h2>
                          <p className="text-caption">{lang.nativeName}</p>
                          <p className="mt-1 text-xs text-[var(--text-muted)]">{lang.forWhom}</p>
                        </div>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-dim)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]" />
                      </div>
                      <div className="mt-auto space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[var(--text-muted)]">
                            {lang.phrases.length} expressions
                          </span>
                          {known > 0 ? (
                            <span className="font-medium text-[var(--accent)]">{pct}% maîtrisé</span>
                          ) : (
                            <span className="font-medium text-[var(--accent)]">Commencer →</span>
                          )}
                        </div>
                        {known > 0 && (
                          <ProgressBar value={known} max={lang.phrases.length} />
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)]">
            Phrases basées sur les modèles courants de prédication. Consultez toujours les directives
            locales et les publications officielles sur{" "}
            <a
              href="https://www.jw.org/fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] underline-offset-2 hover:underline"
            >
              jw.org
            </a>
            .
          </p>
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}
