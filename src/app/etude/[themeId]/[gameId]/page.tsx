"use client";

import { notFound, useParams } from "next/navigation";
import { GameShell } from "@/components/layout/GameShell";
import { StudyGamePlayer } from "@/components/study/StudyGamePlayer";
import { getStudyMiniGame, getStudyTheme } from "@/data/study-themes";

export default function StudyGamePage() {
  const params = useParams<{ themeId: string; gameId: string }>();
  const theme = getStudyTheme(params.themeId);
  const game = getStudyMiniGame(params.themeId, params.gameId);
  if (!theme || !game) notFound();

  return (
    <GameShell
      title={game.title}
      description={`${theme.title} · étude personnelle`}
      backHref={`/etude/${params.themeId}`}
      backLabel={theme.title}
    >
      <StudyGamePlayer themeId={params.themeId} gameId={params.gameId} />
    </GameShell>
  );
}
