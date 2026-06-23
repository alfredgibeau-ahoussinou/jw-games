"use client";

import { useCallback, useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
  interface Navigator {
    standalone?: boolean;
  }
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;
let listenerReady = false;
const subscribers = new Set<() => void>();

function notifySubscribers() {
  subscribers.forEach((cb) => cb());
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

function isStandaloneMode() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function isIosDevice() {
  if (typeof window === "undefined") return false;
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
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

    if (isIosDevice() && typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: "JW Games",
          text: "Installer JW Games sur l'écran d'accueil",
          url: window.location.href,
        });
        return true;
      } catch {
        return false;
      }
    }

    return false;
  }, []);

  const canInstall = ready && !standalone;

  return {
    canInstall,
    install,
    hasNativePrompt: deferredPrompt !== null,
  };
}
