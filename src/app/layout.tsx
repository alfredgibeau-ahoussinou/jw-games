import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Footer } from "@/components/layout/Footer";
import { SyncProvider } from "@/components/providers/SyncProvider";
import { PwaInstallListener } from "@/components/pwa/PwaInstallListener";
import { IosInstallSheet } from "@/components/pwa/IosInstallSheet";
import { ToastProvider } from "@/components/ui/Toast";
import { GameFeedbackProvider } from "@/components/providers/GameFeedbackProvider";
import { APP_NAME, APP_TAGLINE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: { default: APP_NAME, template: `%s | ${APP_NAME}` },
  description: APP_TAGLINE,
  keywords: ["bible", "jeu", "quiz", "témoins de Jéhovah", "JW", "jw.org", "vidéo"],
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: APP_NAME },
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#141414",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="app-body">
        <a className="skip-link" href="#main-content">
          Aller au contenu
        </a>
        <SyncProvider>
          <PwaInstallListener />
          <IosInstallSheet />
          <ToastProvider>
            <GameFeedbackProvider>
              <Header />
              <main id="main-content" className="app-main">
                {children}
              </main>
              <Footer />
              <MobileBottomNav />
            </GameFeedbackProvider>
          </ToastProvider>
        </SyncProvider>
      </body>
    </html>
  );
}
