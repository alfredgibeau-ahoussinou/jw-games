export type IosBrowser = "safari" | "chrome" | "firefox" | "in-app" | "other";

declare global {
  interface Navigator {
    standalone?: boolean;
  }
}

export function isStandaloneMode(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

export function isIosDevice(): boolean {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  const isTouchMac = window.navigator.maxTouchPoints > 1 && /macintosh/i.test(ua);
  return /iphone|ipad|ipod/i.test(ua) || isTouchMac;
}

export function isInAppBrowser(): boolean {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent;
  return /(FBAN|FBAV|Instagram|Twitter|Line|WeChat|Snapchat|TikTok|LinkedInApp)/i.test(ua);
}

export function getIosBrowser(): IosBrowser {
  if (typeof window === "undefined") return "other";
  if (isInAppBrowser()) return "in-app";

  const ua = window.navigator.userAgent;
  if (/crios/i.test(ua)) return "chrome";
  if (/fxios/i.test(ua)) return "firefox";
  if (/safari/i.test(ua)) return "safari";
  return "other";
}

export function canInstallOnIos(): boolean {
  return isIosDevice() && !isStandaloneMode() && getIosBrowser() !== "in-app";
}

export function needsSafariForIosInstall(): boolean {
  return isIosDevice() && !isStandaloneMode() && isInAppBrowser();
}
