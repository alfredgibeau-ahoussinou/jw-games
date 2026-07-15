# JW Games

Application web de **jeux bibliques**, **parcours d'étude**, **médiathèque vidéo** et **apprentissage des langues pour la prédication**, basée exclusivement sur les sources officielles [JW.org](https://www.jw.org) et JW Library (Traduction du monde nouveau).

**Site en ligne :** [jwgames.netlify.app](https://jwgames.netlify.app)  
**Dépôt GitHub :** [github.com/alfredgibeau-ahoussinou/jw-games](https://github.com/alfredgibeau-ahoussinou/jw-games)

---

## Fonctionnalités

### Jeux (15 modes)

Quiz biblique, vrai/faux, mémoire, versets à compléter, mots mélangés, rapidité, ordre chronologique, cartes mémoire, undercover, quiz vidéo, devinettes, livres de la Bible, thématiques, quiz en équipe et défi quotidien.

### Étude (23 parcours thématiques)

Parcours avec lectures, articles, mini-jeux (quiz, vrai/faux, versets) et progression locale. Thèmes : prière, confiance, Jésus, famille, service, Royaume, résurrection, prédication, pionnier, etc.

### Médiathèque (137 vidéos)

Catalogue organisé en collections (Jésus, enfants, jeunes, famille…) avec lecteur intégré, sous-titres VTT et suggestions.

### Langues pour la prédication (8 langues)

Anglais, espagnol, coréen, français, arabe, chinois, portugais et turc — 45 à 50 expressions par langue avec cartes flash, quiz et scénarios à la porte (anglais).

### Texte du jour

Contenu quotidien depuis la Watchtower Online Library (WOL), avec questions de réflexion et cache au build.

### PWA installable

Installation sur mobile et tablette (Android / iOS) via le manifest et le bouton « Installer l'application ».

### Profil local

XP, niveaux, badges, séries et historique de parties — **sans compte requis**, stockage uniquement dans le navigateur.

### Découvrir

Liens curatés vers les ressources officielles JW.org.

---

## Stack technique

| Technologie | Rôle |
|-------------|------|
| [Next.js 16](https://nextjs.org) | Framework React (App Router, API Routes) |
| React 19 | Interface utilisateur |
| TypeScript 5 | Typage statique |
| Tailwind CSS 4 | Styles et design system |
| Zustand 5 | État global (profil, XP, badges) |
| Framer Motion 12 | Animations de page et cartes |
| Lucide React | Icônes |
| Playwright | Tests end-to-end (smoke) |
| Netlify | Hébergement production |

---

## Démarrage rapide

```bash
# Cloner le dépôt
git clone https://github.com/alfredgibeau-ahoussinou/jw-games.git
cd jw-games

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### Build production

```bash
npm run build   # pré-cache le texte du jour + build Next.js
npm run start
```

### Variables d'environnement (optionnelles)

Copier `.env.example` vers `.env.local` si besoin :

```bash
cp .env.example .env.local
```

Sans variables d'environnement, l'application fonctionne entièrement en stockage local (navigateur).

### Scripts utiles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Pré-cache WOL + build Next.js |
| `npm run start` | Serveur de production local |
| `npm run lint` | ESLint |
| `npm run cache:daily-text` | Pré-cache manuel du texte du jour |
| `npm run test:e2e` | Tests Playwright (smoke) |

---

## Structure du projet

```
src/
├── app/              # Pages Next.js (App Router) et API Routes
│   ├── page.tsx      # Accueil
│   ├── jeux/         # Hub et 14 pages de jeu
│   ├── etude/        # Parcours thématiques, articles
│   ├── mediatheque/  # Catalogue et lecteur vidéo
│   ├── langues/      # Hub et détail par langue
│   ├── quotidien/    # Texte du jour complet
│   ├── profil/       # Profil, XP, badges
│   ├── decouvrir/    # Liens JW.org
│   └── api/          # daily-text, jw-media, video-subtitles
├── components/       # UI réutilisable
│   ├── game/         # Moteurs de jeu
│   ├── language/     # Cartes, quiz et scénarios langues
│   ├── study/        # Parcours d'étude
│   ├── media/        # Lecteur vidéo, bannières
│   ├── layout/       # Header, footer, navigation
│   ├── pwa/          # Installation PWA
│   └── ui/           # Boutons, cartes, badges
├── data/             # Contenu statique (jeux, vidéos, étude, langues)
├── hooks/            # Hooks React (PWA, sous-titres, progression langues)
├── lib/              # Utilitaires, API JW, constantes, badges
├── stores/           # État Zustand (profil utilisateur)
└── types/            # Types TypeScript partagés

scripts/              # cache-daily-text.ts (pré-cache WOL au build)
public/               # Icônes PWA, manifest, cache texte du jour
docs/                 # Documentation (architecture, pitch, Figma)
.github/workflows/    # Déploiement Netlify via GitHub Actions
e2e/                  # Tests Playwright
```

---

## Documentation

| Document | Description |
|----------|-------------|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Architecture technique détaillée |
| [docs/PITCH-BETHEL.md](docs/PITCH-BETHEL.md) | Pitch de présentation au Bethel |
| [docs/PITCH-BETHEL.pdf](docs/PITCH-BETHEL.pdf) | Version PDF du pitch |
| [docs/presentation.html](docs/presentation.html) | Slides interactives (présentation autonome) |
| [docs/FIGMA-GUIDE.md](docs/FIGMA-GUIDE.md) | Guide pour recréer le design dans Figma |
| [docs/figma/design-tokens.json](docs/figma/design-tokens.json) | Tokens design (Tokens Studio) |

---

## Déploiement

### Netlify

Le projet est configuré pour **Netlify** via `netlify.toml` :

- Node 20, `npm run build` (pré-cache WOL inclus)
- En-têtes de sécurité HTTP
- URL : [jwgames.netlify.app](https://jwgames.netlify.app)

### GitHub Actions

Chaque push sur `main` déclenche le workflow `.github/workflows/netlify-deploy.yml` :

1. `npm ci --legacy-peer-deps`
2. `npm run build`
3. Déploiement production Netlify (`NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID` en secrets GitHub)

---

## Sources et conformité

> Tout le contenu est basé exclusivement sur les sources officielles : JW.org et JW Library (Traduction du monde nouveau).

Ce projet est une **initiative personnelle** offerte à l'organisation. Il n'a pas reçu d'approbation officielle et ne remplace pas les applications JW Library ou JW.org.

---

## Licence

Projet offert à l'organisation des Témoins de Jéhovah. Usage, modification et hébergement soumis à l'orientation du Bethel.

---

*Développé par Alfred Gibeau-Ahoussinou — 2026*
