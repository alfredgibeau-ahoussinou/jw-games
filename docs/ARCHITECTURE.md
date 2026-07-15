# JW Games — Architecture technique

Documentation détaillée du code source pour les développeurs et l'équipe technique du Bethel.

**Dépôt :** [github.com/alfredgibeau-ahoussinou/jw-games](https://github.com/alfredgibeau-ahoussinou/jw-games)  
**Production :** [jwgames.netlify.app](https://jwgames.netlify.app)

---

## 1. Vue d'ensemble

JW Games est une application **Next.js 16** (App Router) en **TypeScript**, déployée sur **Netlify** via **GitHub Actions**. Elle fonctionne comme une **PWA** installable et opère entièrement en **stockage local** (localStorage via Zustand) — aucune donnée personnelle n'est collectée ni synchronisée côté serveur.

```
┌─────────────────────────────────────────────────────────────┐
│                        Navigateur / PWA                      │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────────────┐ │
│  │ Pages React │  │ Composants   │  │ Zustand (user-store)│ │
│  │ (App Router)│  │ jeu / layout │  │ + localStorage      │ │
│  └──────┬──────┘  └──────────────┘  └─────────────────────┘ │
└─────────┼────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────┐
│ API Routes Next.js  │
│ /api/daily-text     │
│ /api/jw-media       │
│ /api/video-subtitles│
└─────────┬───────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────┐
│ Sources externes : WOL (texte du jour), CDN JW (médias)     │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Structure des dossiers

```
JWGAMES/
├── .github/workflows/
│   └── netlify-deploy.yml  # CI/CD : build + déploiement Netlify
├── e2e/
│   └── smoke.spec.ts       # Tests Playwright (navigation de base)
├── public/
│   ├── icons/              # Icônes PWA (PNG, favicon)
│   ├── images/             # Logo et assets statiques
│   ├── cache/daily-text/   # Cache JSON du texte du jour (généré au build)
│   └── manifest.webmanifest
├── scripts/
│   └── cache-daily-text.ts # Script de pré-cache WOL pour Netlify
├── src/
│   ├── app/                # Routes Next.js (pages + API)
│   │   ├── page.tsx        # Accueil
│   │   ├── jeux/           # Hub et 14 pages par mode de jeu
│   │   ├── etude/          # 23 parcours thématiques + articles
│   │   ├── mediatheque/    # 137 vidéos JW
│   │   ├── langues/        # 8 langues pour la prédication
│   │   ├── decouvrir/      # Liens JW.org
│   │   ├── profil/         # Profil utilisateur
│   │   ├── quotidien/      # Texte du jour
│   │   └── api/            # Routes serveur
│   ├── components/
│   │   ├── brand/          # Logo, barre officielle JW
│   │   ├── daily/          # Texte du jour, défi quotidien
│   │   ├── game/           # Moteurs de jeu réutilisables
│   │   ├── language/       # Hub langues, cartes, quiz, scénarios
│   │   ├── layout/         # Header, Footer, GameShell, navigation
│   │   ├── media/          # Lecteur vidéo, bannières
│   │   ├── motion/         # Animations de page (Framer Motion)
│   │   ├── profile/        # Avatar, badges profil
│   │   ├── providers/      # Contextes React (sync, feedback)
│   │   ├── pwa/            # Installation PWA
│   │   ├── study/          # Parcours d'étude, cartes thèmes
│   │   ├── studio/         # Shell de page studio
│   │   └── ui/             # Boutons, cartes, badges
│   ├── data/               # Contenu statique
│   │   ├── languages/      # 8 langues, phrases, scénarios
│   │   ├── study/          # Articles, thèmes étendus, guides
│   │   ├── jw-videos.ts    # 137 vidéos en collections
│   │   ├── study-themes.ts # 23 parcours d'étude
│   │   └── sample-*.ts     # Données des jeux
│   ├── hooks/              # Hooks React personnalisés
│   ├── lib/                # Utilitaires, API, constantes
│   ├── stores/             # État global Zustand
│   └── types/              # Types TypeScript partagés
├── docs/                   # Documentation (ce fichier, pitch, Figma)
├── .env.example            # Variables d'environnement optionnelles
├── netlify.toml            # Configuration déploiement
└── playwright.config.ts    # Configuration tests E2E
```

---

## 3. Stack technique

| Technologie | Version | Rôle |
|-------------|---------|------|
| Next.js | 16.2.9 | Framework SSR/SSG, App Router, API Routes |
| React | 19.2.4 | Interface utilisateur |
| TypeScript | 5.x | Typage statique |
| Tailwind CSS | 4.x | Styles utilitaires + variables CSS |
| Zustand | 5.x | État global (profil, XP, badges) |
| Framer Motion | 12.x | Animations de page et cartes |
| Lucide React | — | Icônes |
| Playwright | 1.x | Tests end-to-end |

---

## 4. Routage (App Router)

| Route | Fichier | Description |
|-------|---------|-------------|
| `/` | `src/app/page.tsx` | Accueil : texte du jour, jeux vedettes, étude, vidéos |
| `/jeux` | `src/app/jeux/page.tsx` | Hub des 15 modes de jeu |
| `/jeux/[mode]` | `src/app/jeux/*/page.tsx` | Page par mode de jeu |
| `/etude` | `src/app/etude/page.tsx` | Liste des 23 thèmes |
| `/etude/[themeId]` | `src/app/etude/[themeId]/page.tsx` | Détail d'un thème |
| `/etude/[themeId]/[gameId]` | `src/app/etude/[themeId]/[gameId]/page.tsx` | Mini-jeu d'un parcours |
| `/etude/article/[articleId]` | `src/app/etude/article/[articleId]/page.tsx` | Article d'étude |
| `/mediatheque` | `src/app/mediatheque/page.tsx` | Catalogue vidéo |
| `/mediatheque/[videoId]` | `src/app/mediatheque/[videoId]/page.tsx` | Lecteur vidéo |
| `/langues` | `src/app/langues/page.tsx` | Hub des 8 langues |
| `/langues/[langId]` | `src/app/langues/[langId]/page.tsx` | Détail d'une langue |
| `/decouvrir` | `src/app/decouvrir/page.tsx` | Liens officiels JW.org |
| `/profil` | `src/app/profil/page.tsx` | Profil et badges |
| `/quotidien` | `src/app/quotidien/page.tsx` | Texte du jour complet |

Navigation définie dans `src/lib/navigation.ts` : barre principale (accueil, jeux, étude, vidéos, profil) et liens secondaires (langues, défi du jour, découvrir).

Chaque page de jeu importe un **moteur de jeu** depuis `src/components/game/` et lui passe des données depuis `src/data/`.

---

## 5. Moteurs de jeu (`src/components/game/`)

Architecture commune : chaque moteur reçoit des props typées (`QuizQuestion[]`, `MemoryPair[]`, etc.) et émet un résultat via `onComplete`.

| Composant | Fichier data associé | Mécanisme |
|-----------|---------------------|-----------|
| `QuizGame` | `sample-quiz.ts` | QCM, score, références |
| `TrueFalseGame` | `sample-truefalse.ts` | Vrai/Faux + explication |
| `MemoryGame` | `sample-flashcards.ts` | Grille de paires |
| `VerseGapGame` | `sample-verses.ts` | Mots manquants dans verset |
| `WordScrambleGame` | `sample-words.ts` | Mots mélangés |
| `SpeedGame` | `sample-quiz.ts` | Timer + questions |
| `TimelineGame` | `sample-timeline.ts` | Drag & drop chronologique |
| `FlashcardGame` | `sample-flashcards.ts` | Cartes retournables |
| `UndercoverGame` | `sample-undercover.ts` | Jeu social d'équipe |
| `VideoQuizGame` | `sample-videoquiz.ts` | Quiz post-vidéo |

**GameShell** (`src/components/layout/GameShell.tsx`) enveloppe chaque jeu : en-tête, HUD (score, progression), bouton quitter.

**GameHud** affiche score, série, timer selon le mode.

Les 15 modes sont déclarés dans `src/lib/constants.ts` (`GAME_MODES`).

---

## 6. Module Langues (`src/data/languages/`)

8 langues pour la prédication : anglais, espagnol, coréen, français, arabe, chinois, portugais, turc.

| Fichier | Contenu |
|---------|---------|
| `index.ts` | Catalogue `PREACH_LANGUAGES`, catégories de phrases |
| `en.ts`, `es.ts`, … | 45–50 phrases par langue (introduction, pitch, vocabulaire…) |
| `scenarios-en.ts` | Scénarios « à la porte » (anglais uniquement) |

Composants associés (`src/components/language/`) :

- `LanguageHubContent` — grille des langues avec progression
- `LanguageDetailContent` — détail par langue
- `PhraseFlashcards`, `PhraseQuiz`, `DoorScenarioSection` — modes d'apprentissage

Hooks : `useLanguageProgress` (progression locale), `language-speech.ts` (synthèse vocale).

---

## 7. Données et contenu (`src/data/`)

Le contenu est stocké en **fichiers TypeScript** exportant des tableaux typés. Aucune base de données n'est requise pour le contenu des jeux.

| Fichier / dossier | Contenu |
|-------------------|---------|
| `jw-videos.ts` | 137 vidéos organisées en collections |
| `study-themes.ts` | 6 thèmes de base + fusion avec `study/extended-themes.ts` et `study/role-themes.ts` → 23 parcours |
| `study/articles.ts` | Articles d'étude détaillés |
| `study/content/` | Contenu thématique par sujet |
| `languages/` | Phrases et scénarios multilingues |
| `sample-quiz.ts` | Questions de quiz |
| `sample-verses.ts` | Versets à compléter |
| `sample-truefalse.ts` | Affirmations vrai/faux |
| `sample-timeline.ts` | Événements chronologiques |
| `sample-undercover.ts` | Cartes Undercover |
| `discover-links.ts` | Liens vers JW.org |

### Ajouter du contenu

1. Ouvrir le fichier data correspondant.
2. Ajouter un objet respectant le type (`QuizQuestion`, `JwVideo`, etc.).
3. Redéployer — aucun changement de code moteur nécessaire.

Types définis dans `src/types/content.ts`, `src/types/game.ts`, `src/types/study.ts`, `src/types/language.ts`.

---

## 8. API Routes

### `GET /api/daily-text`

Récupère le texte du jour depuis le cache local (`public/cache/daily-text/`) ou en direct depuis WOL.

- **Build :** `npm run cache:daily-text` pré-génère le JSON (évite les timeouts Netlify).
- **Lib :** `src/lib/jw-daily-text.ts`, `src/lib/daily-text-cache.ts`

### `GET /api/jw-media`

Proxy pour les métadonnées média JW (images, vignettes) depuis le CDN officiel.

### `GET /api/video-subtitles`

Récupère les sous-titres VTT d'une vidéo JW pour le lecteur intégré.

Aucune route API ne collecte ni ne stocke de profil ou de sessions joueur. Le profil, l'XP et les badges restent uniquement dans le navigateur.

---

## 9. État utilisateur et persistance

### Zustand — `src/stores/user-store.ts`

```typescript
// État principal
{
  profile: { displayName, xp, level, badges, ... }
  sessions: GameSession[]
  dailyChallenge: { ... }
}
```

Actions : `initProfile`, `addXp`, `recordGame`, `trackDailyProgress`, etc.

### Persistance locale

- **localStorage** via middleware `persist` de Zustand (`jw-games-user`).
- Identifiant appareil : `src/lib/device-id.ts` (UUID persistant, local uniquement).
- Progression langues : `useLanguageProgress` (localStorage séparé).
- Fonctionne **sans compte** ni serveur.

**SyncProvider** (`src/components/providers/SyncProvider.tsx`) réhydrate le store Zustand au chargement (local uniquement).

> **Note :** La synchronisation Supabase et le classement joueurs ont été retirés. Le schéma `supabase/migrations/` est conservé à titre historique uniquement.

---

## 10. Hooks personnalisés (`src/hooks/`)

| Hook | Rôle |
|------|------|
| `usePwaInstall` | Détection et déclenchement installation PWA |
| `useVideoSubtitles` | Chargement pistes VTT pour le lecteur |
| `useLanguageProgress` | Progression par langue (localStorage) |
| `useGameScore` | Score et feedback en cours de partie |
| `useGameStreak` | Séries de bonnes réponses |
| `useParisDayRotation` | Rotation quotidienne du contenu |

---

## 11. Lecteur vidéo

`src/components/media/JwVideoPlayer.tsx`

- Lecture HLS / MP4 depuis URLs JW officielles.
- Sous-titres via `/api/video-subtitles` (fichiers VTT du CDN JW).
- Contrôles personnalisés : play/pause, volume, plein écran, sélection de piste.
- Hook `useVideoSubtitles` pour charger les pistes disponibles.

---

## 12. PWA (Progressive Web App)

| Fichier | Rôle |
|---------|------|
| `public/manifest.webmanifest` | Nom, icônes, couleurs, mode standalone |
| `src/components/pwa/PwaInstallListener.tsx` | Écoute `beforeinstallprompt` |
| `src/components/pwa/IosInstallSheet.tsx` | Instructions installation iOS |
| `src/hooks/usePwaInstall.ts` | Logique d'installation |
| `src/lib/pwa-install.ts`, `pwa-visits.ts` | Utilitaires PWA |
| Header / menu mobile | Bouton « Installer l'application » |

---

## 13. Design system

Variables CSS définies dans `src/app/globals.css` :

- **Fond :** `#050507` → `#14141a` (cartes)
- **Accent :** `#00b8b8` (teal JW)
- **Brand red :** `#e50914`
- **Typo :** Plus Jakarta Sans (UI), Source Serif 4 (versets, titres)

Composants UI réutilisables : `Button`, `Card`, `Badge`, `ProgressBar`, `Toast`.

Guide Figma complet : `docs/FIGMA-GUIDE.md`

---

## 14. Build, CI/CD et déploiement

### Scripts npm

```bash
npm run dev              # Serveur de développement (localhost:3000)
npm run cache:daily-text # Pré-cache le texte du jour
npm run build            # cache:daily-text + next build
npm run start            # Serveur de production local
npm run lint             # ESLint
npm run test:e2e         # Tests Playwright
```

### GitHub Actions

Fichier `.github/workflows/netlify-deploy.yml` :

- Déclenché sur push vers `main`
- Node 20, `npm ci --legacy-peer-deps`, `npm run build`
- Déploiement Netlify via `netlify-cli deploy --prod`
- Secrets requis : `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`

### Netlify

- Fichier `netlify.toml` : Node 20, `npm run build`.
- En-têtes de sécurité : `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`.
- URL : `jwgames.netlify.app`

### Variables d'environnement (optionnelles)

Voir `.env.example` :

- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — optionnel (historique)
- `NEXT_PUBLIC_APP_URL` — URL publique pour PWA

Aucune variable obligatoire pour le profil utilisateur.

---

## 15. Tests

```bash
npm run lint        # ESLint (eslint-config-next)
npm run test:e2e    # Playwright — smoke test navigation
```

Fichier `e2e/smoke.spec.ts` : vérifie le chargement des pages principales.

---

## 16. Sécurité

- Aucun secret dans le code source (`.env*` dans `.gitignore`, sauf `.env.example`).
- En-têtes HTTP : `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`.
- Pas de collecte de données personnelles identifiables.
- API Routes en lecture seule pour les sources JW (pas d'écriture côté serveur sans auth).

---

## 17. Évolutions suggérées

1. **Internationalisation** — extraire les chaînes UI vers `next-intl` ou fichiers JSON.
2. **CMS headless** — alimenter `src/data/` depuis un back-office pour les rédacteurs.
3. **Mode hors-ligne complet** — service worker avec cache des assets et du texte du jour.
4. **Authentification organisation** — si déploiement interne au Bethel.

---

## 18. Contacts et ressources

| Ressource | Lien |
|-----------|------|
| Site live | https://jwgames.netlify.app |
| GitHub | https://github.com/alfredgibeau-ahoussinou/jw-games |
| Pitch Bethel (PDF) | `docs/PITCH-BETHEL.pdf` |
| Guide Figma | `docs/FIGMA-GUIDE.md` |
| Tokens design | `docs/figma/design-tokens.json` |
