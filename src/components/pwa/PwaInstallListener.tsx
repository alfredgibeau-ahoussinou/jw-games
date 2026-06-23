"use client";

import { useEffect } from "react";
import { initPwaInstallListener } from "@/hooks/usePwaInstall";

/** Écoute l'événement d'installation dès le chargement de l'app. */
export function PwaInstallListener() {
  useEffect(() => {
    initPwaInstallListener();
  }, []);
  return null;
}
