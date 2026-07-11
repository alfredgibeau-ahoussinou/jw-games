"use client";

import { useState } from "react";
import type { PreachLanguage } from "@/types/language";
import { PhraseFlashcards } from "@/components/language/PhraseFlashcards";
import { PhraseQuiz } from "@/components/language/PhraseQuiz";
import { PhraseList } from "@/components/language/PhraseList";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { StudioBackLink } from "@/components/studio/StudioPageHero";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SegmentTabs } from "@/components/ui/SegmentTabs";
import { useLanguageProgress } from "@/hooks/useLanguageProgress";
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
  const { knownIds, markKnown, resetProgress, loaded } = useLanguageProgress(language.id);
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
        <div>
          <StudioBackLink href="/langues" label="Toutes les langues" />
        </div>

        <PageHeader
          title={`${language.flag} ${language.name}`}
          description={language.description}
          heroImage={jwImageForLanguage(language.id).url}
          heroImageAlt={language.name}
          eyebrow="Langue"
        />

        <StudioPageBody narrow>

      <Card>
        <div>
          <div>
            <p>Progression</p>
            <p>
              {loaded ? knownIds.length : "—"}/{language.phrases.length}
            </p>
            <p>{progressPct}% maîtrisé</p>
          </div>
          <div>
            <svg viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.9" fill="none" strokeWidth="3" />
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
               
                strokeWidth="3"
                strokeDasharray={`${progressPct} 100`}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        {knownIds.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={resetProgress}
          >
            <RotateCcw />
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

      {tab === "cards" && (
        <PhraseFlashcards
          phrases={language.phrases}
          knownIds={knownIds}
          onMarkKnown={markKnown}
          languageId={language.id}
        />
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
        <Card>
          <Trophy />
          <h2>Quiz terminé !</h2>
          <p>
            {quizScore.score}/{quizScore.total}
          </p>
          <p>+{quizScore.score * 15} XP gagnés</p>
          <Button onClick={() => setPhase("hub")}>
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

      <p>
        Contenu d&apos;apprentissage pour la prédication — inspirez-vous des modèles officiels JW.org.
      </p>
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}
