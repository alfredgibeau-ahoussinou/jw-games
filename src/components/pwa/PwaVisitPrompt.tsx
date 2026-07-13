"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import { incrementVisitCount, shouldShowInstallPrompt, dismissInstallPrompt } from "@/lib/pwa-visits";
import { usePwaInstall } from "@/hooks/usePwaInstall";
import { Button } from "@/components/ui/Button";

export function PwaVisitPrompt() {
  const { canInstall, install } = usePwaInstall();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    incrementVisitCount();
    if (shouldShowInstallPrompt() && canInstall) {
      setVisible(true);
    }
  }, [canInstall]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Installer l'application"
      className="fixed bottom-20 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl border border-[var(--accent)]/30 bg-[var(--bg-card)] p-4 shadow-xl sm:bottom-6"
    >
      <div className="flex items-start gap-3">
        <Download className="h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
        <div className="min-w-0 flex-1">
          <p className="font-semibold">Installer JW Games</p>
          <p className="text-caption mt-1">
            Accédez plus vite au texte du jour, aux jeux et à l&apos;étude.
          </p>
          <div className="mt-3 flex gap-2">
            <Button
              size="sm"
              onClick={() => {
                void install();
                dismissInstallPrompt();
                setVisible(false);
              }}
            >
              Installer
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                dismissInstallPrompt();
                setVisible(false);
              }}
            >
              Plus tard
            </Button>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            dismissInstallPrompt();
            setVisible(false);
          }}
          className="shrink-0 rounded-lg p-1 text-[var(--text-muted)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          aria-label="Fermer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
