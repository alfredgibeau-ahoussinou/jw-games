"use client";

import { useCallback, useEffect, useState } from "react";
import {
  canInstallOnIos,
  isIosDevice,
  isStandaloneMode,
  needsSafariForIosInstall,
} from "@/lib/pwa-install";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;
let listenerReady = false;
let iosHintOpen = false;

const subscribers = new Set<() => void>();
const iosHintSubscribers = new Set<() => void>();

function notifySubscribers() {
  subscribers.forEach((cb) => cb());
}

function notifyIosHintSubscribers() {
  iosHintSubscribers.forEach((cb) => cb());
}

export function initPwaInstallListener() {
  if (listenerReady || typeof window === "undefined") return;
  listenerReady = true;

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event as BeforeInstallPromptEvent;
    notifySubscribers();
  });

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    notifySubscribers();
  });
}

export function openIosInstallHint() {
  iosHintOpen = true;
  notifyIosHintSubscribers();
}

export function closeIosInstallHint() {
  iosHintOpen = false;
  notifyIosHintSubscribers();
}

export function useIosInstallHint() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const refresh = () => setTick((n) => n + 1);
    iosHintSubscribers.add(refresh);
    return () => {
      iosHintSubscribers.delete(refresh);
    };
  }, []);

  return {
    open: iosHintOpen,
    close: closeIosInstallHint,
  };
}

export function usePwaInstall() {
  const [ready, setReady] = useState(false);
  const [standalone, setStandalone] = useState(false);
  const [, setTick] = useState(0);

  useEffect(() => {
    initPwaInstallListener();
    setStandalone(isStandaloneMode());
    setReady(true);

    const refresh = () => setTick((n) => n + 1);
    subscribers.add(refresh);
    return () => {
      subscribers.delete(refresh);
    };
  }, []);

  const install = useCallback(async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        await deferredPrompt.userChoice;
      } finally {
        deferredPrompt = null;
        notifySubscribers();
      }
      return true;
    }

    if (isIosDevice() && !isStandaloneMode()) {
      // Sur iOS, « Sur l'écran d'accueil » n'apparaît que via le bouton Partager de Safari —
      // pas via navigator.share(). On affiche un repère vers ce bouton.
      openIosInstallHint();
      return true;
    }

    return false;
  }, []);

  const canInstall =
    ready &&
    !standalone &&
    (deferredPrompt !== null || canInstallOnIos() || needsSafariForIosInstall());

  return {
    canInstall,
    install,
    hasNativePrompt: deferredPrompt !== null,
    isIos: isIosDevice(),
  };
}
