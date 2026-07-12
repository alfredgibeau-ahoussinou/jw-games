"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useUserStore } from "@/stores/user-store";

export function ProfilePrivacy() {
  const exportLocalData = useUserStore((s) => s.exportLocalData);
  const clearAllLocalData = useUserStore((s) => s.clearAllLocalData);
  const [confirmErase, setConfirmErase] = useState(false);

  function handleExport() {
    const json = exportLocalData();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `jw-games-donnees-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleErase() {
    if (!confirmErase) {
      setConfirmErase(true);
      return;
    }
    clearAllLocalData();
    setConfirmErase(false);
    window.location.href = "/profil";
  }

  return (
    <Card>
      <h2 className="text-heading mb-2">Données sur cet appareil</h2>
      <p className="mb-4 text-sm leading-relaxed text-[var(--text-muted)]">
        Votre profil, progression et préférences sont enregistrés uniquement sur cet appareil
        (localStorage). Rien n&apos;est envoyé sur un serveur tiers.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button type="button" variant="outline" onClick={handleExport}>
          Exporter mes données (JSON)
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={handleErase}
          className={confirmErase ? "border-[var(--danger-border)] text-[var(--danger-text)]" : ""}
        >
          {confirmErase ? "Confirmer l'effacement" : "Effacer toutes mes données"}
        </Button>
      </div>
      {confirmErase && (
        <p className="mt-3 text-sm text-[var(--danger-text)]">
          Cette action supprime le profil, la progression d&apos;étude, les langues et les
          préférences locales. Appuyez à nouveau pour confirmer.
        </p>
      )}
    </Card>
  );
}
