import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SyncProvider } from "@/components/providers/SyncProvider";
import { PwaInstallListener } from "@/components/pwa/PwaInstallListener";
import { IosInstallSheet } from "@/components/pwa/IosInstallSheet";
import { ToastProvider } from "@/components/ui/Toast";
import { GameFeedbackProvider } from "@/components/providers/GameFeedbackProvider";
import { APP_NAME, APP_TAGLINE } from "@/lib/constants";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
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
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} ${sourceSerif.variable} h-full`}>
      <body className="app-gradient min-h-full flex flex-col text-[var(--text)] antialiased">
        <a href="#main-content" className="skip-link">
          Aller au contenu
        </a>
        <SyncProvider>
          <PwaInstallListener />
          <IosInstallSheet />
          <ToastProvider>
            <GameFeedbackProvider>
              <Header />
              <main id="main-content" className="relative flex-1 page-shell">
                {children}
              </main>
              <Footer />
            </GameFeedbackProvider>
          </ToastProvider>
        </SyncProvider>
      </body>
    </html>
  );
}
