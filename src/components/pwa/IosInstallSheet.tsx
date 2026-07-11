"use client";

import { useCallback, useEffect, useState } from "react";

import { Check, Copy, X } from "lucide-react";
import { useToast } from "@/components/ui/Toast";
import { closeIosInstallHint, useIosInstallHint } from "@/hooks/usePwaInstall";
import { getIosBrowser } from "@/lib/pwa-install";
import { APP_NAME } from "@/lib/constants";

function SafariSpotlight() {
  return (
    <>
      <div
        aria-hidden
      />
      <div
        aria-hidden
      />
      <div
      >
        <button
          type="button"
          onClick={closeIosInstallHint}
          aria-label="Fermer"
        >
          <X />
        </button>
        <div>
          <p>
            <span>1</span>
            <span>
              Touchez <strong>Partager</strong> en bas
            </span>
          </p>
          <p>
            <span>2</span>
            <span>
              Choisissez <strong>Sur l&apos;écran d&apos;accueil</strong>
            </span>
          </p>
          <p>
            <span>3</span>
            <span>
              Touchez <strong>Ajouter</strong>
            </span>
          </p>
          <span
            aria-hidden
          >
            ↓
          </span>
        </div>
      </div>
    </>
  );
}

function ChromeSpotlight() {
  return (
    <>
      <div
        aria-hidden
      />
      <div
        aria-hidden
      />
      <div
      >
        <button
          type="button"
          onClick={closeIosInstallHint}
          aria-label="Fermer"
        >
          <X />
        </button>
        <div>
          <p>
            <span>1</span>
            <span>
              Menu <strong>⋯</strong> en bas à droite
            </span>
          </p>
          <p>
            <span>2</span>
            <span>
              <strong>Ajouter à l&apos;écran d&apos;accueil</strong>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

function InAppBar() {
  const { show } = useToast();
  const [copied, setCopied] = useState(false);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      show({ type: "info", title: "Lien copié", message: "Ouvrez Safari et collez l'adresse." });
    } catch {
      show({ type: "info", title: "Adresse du site", message: window.location.href });
    }
  }, [show]);

  return (
    <div
    >
      <p>
        <strong>{APP_NAME}</strong> — Ouvrez dans Safari pour installer.
      </p>
      <button
        type="button"
        onClick={() => void copyLink()}
        aria-label="Copier le lien"
      >
        {copied ? <Check /> : <Copy />}
      </button>
      <button
        type="button"
        onClick={closeIosInstallHint}
        aria-label="Fermer"
      >
        <X />
      </button>
    </div>
  );
}

export function IosInstallSheet() {
  const { open } = useIosInstallHint();
  const browser = getIosBrowser();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeIosInstallHint();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {open && (
        <div role="dialog" aria-label={`Installer ${APP_NAME}`}>
          {browser === "in-app" ? (
            <InAppBar />
          ) : browser === "chrome" ? (
            <ChromeSpotlight />
          ) : (
            <SafariSpotlight />
          )}
        </div>
      )}
    </>
  );
}
