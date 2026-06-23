"use client";

import { GameShell } from "@/components/layout/GameShell";
import { UndercoverGame } from "@/components/game/UndercoverGame";

export default function UndercoverPage() {
  return (
    <GameShell
      title="Undercover biblique"
      description="Jeu de groupe : mots secrets bibliques, bluff et vote. 3 à 12 joueurs, passez l'appareil en privé."
      emoji="🕵️"
      narrow={false}
    >
      <UndercoverGame />
    </GameShell>
  );
}
