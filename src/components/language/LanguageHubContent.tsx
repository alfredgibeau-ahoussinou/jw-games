"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Globe, ArrowUpRight } from "lucide-react";
import { PREACH_LANGUAGES } from "@/data/languages";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SafeImage } from "@/components/ui/SafeImage";
import { InteractiveCard } from "@/components/motion/InteractiveCard";
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

        <StudioPageBody>

        <Card glow>
          <div>
            <Globe />
            <div>
              <p>Pour aller prêcher dans une autre langue</p>
              <p>
                Cartes mémoire, quiz et liste de référence : introductions, pitches, mots clés,
                retours visite et situations courantes. Écoutez la langue cible après avoir retourné la carte.
              </p>
            </div>
          </div>
        </Card>

        <div>
          {PREACH_LANGUAGES.map((lang) => {
            const known = progress[lang.id]?.known?.length ?? 0;
            const pct = Math.round((known / lang.phrases.length) * 100);
            const img = jwImageForLanguage(lang.id);

            return (
              <Link key={lang.id} href={`/langues/${lang.id}`}>
                <InteractiveCard>
                  <Card hover>
                    <div>
                      <SafeImage
                        src={img.url}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, 360px"
                      />
                      <div />
                      <span aria-hidden>
                        {lang.flag}
                      </span>
                    </div>
                    <div>
                      <div>
                        <div>
                          <h2>{lang.name}</h2>
                          <p>{lang.nativeName}</p>
                          <p>{lang.forWhom}</p>
                        </div>
                        <ArrowUpRight />
                      </div>
                      <div>
                        <div>
                          <span>{lang.phrases.length} expressions</span>
                          {known > 0 ? (
                            <span>{pct}% maîtrisé</span>
                          ) : (
                            <span>Commencer →</span>
                          )}
                        </div>
                        {known > 0 && <ProgressBar value={known} max={lang.phrases.length} />}
                      </div>
                    </div>
                  </Card>
                </InteractiveCard>
              </Link>
            );
          })}
        </div>

        <p>
          Phrases basées sur les modèles courants de prédication. Consultez toujours les directives
          locales et les publications officielles sur{" "}
          <a
            href="https://www.jw.org/fr/"
            target="_blank"
            rel="noopener noreferrer"
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
