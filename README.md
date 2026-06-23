# JW Games

Application web de **jeux bibliques** et **médiathèque vidéo**, basée exclusivement sur les sources officielles [JW.org](https://www.jw.org) et JW Library (Traduction du monde nouveau).

**Démo en ligne :** [jwgames.netlify.app](https://jwgames.netlify.app)

---

## Fonctionnalités

- **15 modes de jeu** — quiz, mémoire, versets à compléter, rapidité, undercover, et plus
- **18 parcours d'étude** thématique avec articles et mini-jeux
- **137 vidéos** organisées en collections avec lecteur intégré et sous-titres
- **Texte du jour** depuis la Watchtower Online Library
- **PWA installable** sur mobile et tablette
- **Profil local** — XP, badges, historique (sans compte requis)

---

## Stack

| Technologie | Rôle |
|-------------|------|
| [Next.js 16](https://nextjs.org) | Framework React (App Router) |
| TypeScript | Typage statique |
| Tailwind CSS 4 | Styles |
| Zustand | État global |
| Framer Motion | Animations |
| Supabase | Sync optionnelle |
| Netlify | Hébergement |

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

Créer `.env.local` pour activer Supabase :

```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-cle-anonyme
```

Sans ces variables, l'application fonctionne entièrement en stockage local.

---

## Structure du projet

```
src/
├── app/          # Pages et API Routes (Next.js App Router)
├── components/   # UI, moteurs de jeu, layout, média
├── data/         # Contenu des jeux, vidéos, thèmes d'étude
├── lib/          # Utilitaires, API JW, base de données
├── stores/       # État Zustand (profil utilisateur)
└── types/        # Types TypeScript
```

---

## Documentation

| Document | Description |
|----------|-------------|
| [docs/PITCH-BETHEL.md](docs/PITCH-BETHEL.md) | Pitch de présentation au Bethel |
| [docs/PITCH-BETHEL.pdf](docs/PITCH-BETHEL.pdf) | Version PDF du pitch |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Architecture technique détaillée |
| [docs/FIGMA-GUIDE.md](docs/FIGMA-GUIDE.md) | Guide pour recréer le design dans Figma |
| [docs/figma/design-tokens.json](docs/figma/design-tokens.json) | Tokens design (Tokens Studio) |

---

## Déploiement

Le projet est configuré pour **Netlify** (`netlify.toml`). Le build exécute automatiquement le pré-cache du texte du jour avant la compilation Next.js.

```bash
npm run build
```

---

## Sources et conformité

> Tout le contenu est basé exclusivement sur les sources officielles : JW.org et JW Library (Traduction du monde nouveau).

Ce projet est une **initiative personnelle** offerte à l'organisation. Il n'a pas reçu d'approbation officielle et ne remplace pas les applications JW Library ou JW.org.

---

## Licence

Projet offert à l'organisation des Témoins de Jéhovah. Usage, modification et hébergement soumis à l'orientation du Bethel.

---

*Développé par Alfred Gibeau-Ahoussinou — 2026*
