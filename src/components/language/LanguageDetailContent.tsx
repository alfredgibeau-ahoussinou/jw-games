"use client";

import { useState } from "react";
import type { PreachLanguage } from "@/types/language";
import { PhraseFlashcards } from "@/components/language/PhraseFlashcards";
import { PhraseQuiz } from "@/components/language/PhraseQuiz";
import { PhraseList } from "@/components/language/PhraseList";
import { DoorScenarioSection } from "@/components/language/DoorScenarioSection";
import { ReviewTodaySection } from "@/components/language/ReviewTodaySection";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { StudioBackLink } from "@/components/studio/StudioPageHero";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SegmentTabs } from "@/components/ui/SegmentTabs";
import { useLanguageProgress, getPhrasesToReview } from "@/hooks/useLanguageProgress";
import { useUserStore } from "@/stores/user-store";
import { BookOpen, Layers, List, RotateCcw, Trophy } from "lucide-react";
import { jwImageForLanguage } from "@/lib/jw-images";

type Tab = "cards" | "quiz" | "list";
type Phase = "hub" | "quiz-done";

const TABS: { id: Tab; label: string; icon: typeof Layers }[] = [
  { id: "cards", label: "Cartes", icon: Layers },
  { id: "quiz", label: "Quiz", icon: BookOpen },
  { id: "list", label: "Référence", icon: List },
];

interface LanguageDetailContentProps {
  language: PreachLanguage;
}

export function LanguageDetailContent({ language }: LanguageDetailContentProps) {
  const [tab, setTab] = useState<Tab>("cards");
  const [phase, setPhase] = useState<Phase>("hub");
  const [quizScore, setQuizScore] = useState({ score: 0, total: 0 });
  const { knownIds, markKnown, markForReview, clearReview, resetProgress, loaded } =
    useLanguageProgress(language.id);
  const reviewPhrases = loaded ? getPhrasesToReview(language.id, language.phrases) : [];
  const addXp = useUserStore((s) => s.addXp);

  const progressPct = Math.round((knownIds.length / language.phrases.length) * 100);

  const handleQuizComplete = (score: number, total: number) => {
    setQuizScore({ score, total });
    setPhase("quiz-done");
    const xp = score * 15;
    addXp(xp, { skipSession: true });
  };

  return (
    <PageWrapper>
      <StudioPageShell>
        <StudioBackLink href="/langues" label="Toutes les langues" />

        <PageHeader
          title={`${language.flag} ${language.name}`}
          description={language.description}
          heroImage={jwImageForLanguage(language.id).url}
          heroImageAlt={language.name}
          eyebrow="Langue"
        />

        <StudioPageBody narrow className="space-y-6">
          <Card>
            <div className="flex flex-wrap items-center gap-6">
              <div className="min-w-0 flex-1">
                <p className="text-sm text-[var(--text-muted)]">Progression</p>
                <p className="text-2xl font-bold tabular-nums text-[var(--accent)]">
                  {loaded ? knownIds.length : "—"}/{language.phrases.length}
                </p>
                <p className="text-caption">{progressPct}% maîtrisé</p>
              </div>
              <div className="relative h-20 w-20 shrink-0">
                <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke="var(--border)"
                    strokeWidth="3"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="3"
                    strokeDasharray={`${progressPct} 100`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                  {progressPct}%
                </span>
              </div>
            </div>
            {knownIds.length > 0 && (
              <Button variant="ghost" size="sm" onClick={resetProgress} className="mt-4">
                <RotateCcw className="h-4 w-4" />
                Réinitialiser la progression
              </Button>
            )}
          </Card>

          <SegmentTabs
            items={TABS}
            value={tab}
            onChange={(id) => {
              setTab(id);
              setPhase("hub");
            }}
            fullWidth
            ariaLabel="Modes d'apprentissage"
          />

          <ReviewTodaySection phrases={reviewPhrases} onClearReview={clearReview} />

          {language.scenarios && language.scenarios.length > 0 && (
            <DoorScenarioSection scenarios={language.scenarios} />
          )}

          {tab === "cards" && (
            <div id="cartes">
            <PhraseFlashcards
              phrases={language.phrases}
              knownIds={knownIds}
              onMarkKnown={markKnown}
              onMarkForReview={markForReview}
              languageId={language.id}
            />
            </div>
          )}

          {tab === "quiz" && phase === "hub" && (
            <PhraseQuiz
              key={language.id}
              phrases={language.phrases}
              languageName={language.name}
              onComplete={handleQuizComplete}
            />
          )}

          {tab === "quiz" && phase === "quiz-done" && (
            <Card className="py-10 text-center">
              <Trophy className="mx-auto mb-3 h-10 w-10 text-warning" />
              <h2 className="text-heading">Quiz terminé !</h2>
              <p className="mt-2 text-3xl font-bold text-[var(--accent)]">
                {quizScore.score}/{quizScore.total}
              </p>
              <p className="text-caption mt-1">+{quizScore.score * 15} XP gagnés</p>
              <Button onClick={() => setPhase("hub")} className="mt-6">
                Rejouer
              </Button>
            </Card>
          )}

          {tab === "list" && (
            <PhraseList
              phrases={language.phrases}
              knownIds={knownIds}
              languageName={language.name}
              languageId={language.id}
            />
          )}

          <p className="text-center text-sm text-[var(--text-muted)]">
            Contenu d&apos;apprentissage pour la prédication — inspirez-vous des modèles officiels
            JW.org.
          </p>
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}
