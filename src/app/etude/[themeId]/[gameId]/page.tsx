import { notFound } from "next/navigation";
import { GameShell } from "@/components/layout/GameShell";
import { StudyGamePlayer } from "@/components/study/StudyGamePlayer";
import {
  getStudyGameParams,
  getStudyMiniGame,
  getStudyTheme,
} from "@/data/study-themes";

export function generateStaticParams() {
  return getStudyGameParams();
}

export default async function StudyGamePage({
  params,
}: {
  params: Promise<{ themeId: string; gameId: string }>;
}) {
  const { themeId, gameId } = await params;
  const theme = getStudyTheme(themeId);
  const game = getStudyMiniGame(themeId, gameId);
  if (!theme || !game) notFound();

  return (
    <GameShell
      title={game.title}
      description={`${theme.title} · étude personnelle`}
      backHref={`/etude/${theme.id}`}
      backLabel={theme.title}
    >
      <StudyGamePlayer themeId={theme.id} gameId={game.id} />
    </GameShell>
  );
}
