"use client";

import { useEffect } from "react";
import { initPwaInstallListener } from "@/hooks/usePwaInstall";

/** Écoute l'événement d'installation et enregistre le service worker. */
export function PwaInstallListener() {
  useEffect(() => {
    initPwaInstallListener();
    if ("serviceWorker" in navigator) {
      void navigator.serviceWorker.register("/sw.js").catch(() => {
        /* SW optionnel */
      });
    }
  }, []);
  return null;
}
