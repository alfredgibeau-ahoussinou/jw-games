# JW Games — Guide Figma

Ce guide permet de **recréer l'interface JW Games dans Figma** sans accès au fichier source `.fig`. Il documente le design system, les écrans clés et les spécifications pour une équipe design du Bethel.

**Assets disponibles dans le dépôt :**
- `public/images/logo.png` — logo de l'application
- `public/icons/` — icônes PWA (192, 512 px)
- `docs/figma/design-tokens.json` — tokens pour le plugin **Tokens Studio for Figma**

---

## 1. Configuration du fichier Figma

### 1.1 Créer le fichier

1. Figma → **New design file** → nommer `JW Games — Design System`
2. Créer deux pages :
   - **🎨 Design System** (couleurs, typo, composants)
   - **📱 Écrans** (maquettes mobile + desktop)

### 1.2 Grilles et frames

| Frame | Largeur | Hauteur | Usage |
|-------|---------|---------|-------|
| Mobile | 390 px | 844 px | iPhone 14 Pro (référence) |
| Tablet | 768 px | 1024 px | iPad |
| Desktop | 1280 px | auto (min 900) | Navigation web |

**Grille mobile :** 4 colonnes, gutter 16 px, marge 20 px.  
**Grille desktop :** 12 colonnes, gutter 24 px, marge 48 px, max-width contenu 1200 px.

### 1.3 Importer les tokens (optionnel)

1. Installer le plugin **Tokens Studio for Figma**
2. Importer `docs/figma/design-tokens.json`
3. Générer les styles Figma (couleurs, espacements, rayons)

---

## 2. Couleurs (Color Styles)

Créer des **Color Styles** nommés exactement comme ci-dessous :

### Fonds

| Style Figma | Hex | Usage |
|-------------|-----|-------|
| `bg/deep` | `#050507` | Fond principal, body |
| `bg/elevated` | `#0E0E12` | Sections surélevées |
| `bg/card` | `#14141A` | Cartes, panneaux |
| `bg/hover` | `#1E1E26` | État survol |

### Texte

| Style | Hex | Usage |
|-------|-----|-------|
| `text/primary` | `#FAFAFA` | Titres, corps principal |
| `text/secondary` | `#C4C4CC` | Sous-titres |
| `text/muted` | `#94949E` | Labels, métadonnées |
| `text/dim` | `#5C5C66` | Texte désactivé |

### Accent (teal JW)

| Style | Hex | Usage |
|-------|-----|-------|
| `accent/default` | `#00B8B8` | Boutons primaires, liens actifs |
| `accent/hover` | `#2DD4D4` | Survol bouton |
| `accent/mid` | `#009999` | Bordures accent |
| `accent/light` | `rgba(0,184,184,0.12)` | Fond badge, highlight |

### Brand

| Style | Hex | Usage |
|-------|-----|-------|
| `brand/red` | `#E50914` | Accent Netflix-style (hero) |
| `brand/red-hover` | `#F40612` | Survol |

### Sémantique

| Style | Hex | Usage |
|-------|-----|-------|
| `success/default` | `#3DD68C` | Bonne réponse |
| `warning/default` | `#F5A524` | Avertissement |
| `danger/default` | `#EF4444` | Mauvaise réponse |

### Bordures

| Style | Valeur | Usage |
|-------|--------|-------|
| `border/default` | `rgba(255,255,255,0.07)` | Cartes |
| `border/strong` | `rgba(255,255,255,0.14)` | Focus, séparateurs |

### Dégradé d'arrière-plan (app-gradient)

Reproduire en Figma avec **3 ellipses floues** sur fond `#050507` :
1. Teal `rgba(0,184,184,0.07)` — haut centre, 90% × 60%
2. Rouge `rgba(229,9,20,0.04)` — coin haut droit
3. Teal `rgba(0,184,184,0.04)` — coin bas gauche

---

## 3. Typographie (Text Styles)

Polices Google Fonts (identiques au code) :
- **Plus Jakarta Sans** — UI, titres, corps
- **Source Serif 4** — versets bibliques, citations

| Style Figma | Police | Taille | Poids | Interligne | Usage |
|-------------|--------|--------|-------|------------|-------|
| `heading/xl` | Plus Jakarta | 32 px | 800 | 1.15 | Hero accueil |
| `heading/lg` | Plus Jakarta | 24 px | 700 | 1.2 | Titres de page |
| `heading/md` | Plus Jakarta | 18 px | 600 | 1.3 | Sous-sections |
| `body/lg` | Plus Jakarta | 16 px | 400 | 1.6 | Corps large |
| `body/md` | Plus Jakarta | 15 px | 400 | 1.6 | Corps standard (15 px = 0.9375 rem) |
| `body/sm` | Plus Jakarta | 13 px | 400 | 1.5 | Métadonnées |
| `label/md` | Plus Jakarta | 12 px | 600 | 1.4 | Labels, badges |
| `verse/lg` | Source Serif | 18 px | 400 | 1.7 | Versets bibliques |
| `verse/md` | Source Serif | 15 px | 400 italic | 1.7 | Citations |

Letter-spacing : `-0.01em` sur Plus Jakarta.

---

## 4. Espacements et rayons

### Spacing (variables)

| Token | Valeur |
|-------|--------|
| `space/1` | 4 px |
| `space/2` | 8 px |
| `space/3` | 12 px |
| `space/4` | 16 px |
| `space/5` | 20 px |
| `space/6` | 24 px |
| `space/8` | 32 px |
| `space/10` | 40 px |
| `space/12` | 48 px |

### Border radius

| Token | Valeur | Usage |
|-------|--------|-------|
| `radius/sm` | 8 px | Petits éléments |
| `radius/md` | 12 px | Cartes, boutons |
| `radius/lg` | 16 px | Grandes cartes |
| `radius/xl` | 20 px | Modales |
| `radius/full` | 9999 px | Pills, avatars |

### Ombres

| Token | Valeur CSS |
|-------|------------|
| `shadow/sm` | `0 2px 12px rgba(0,0,0,0.4)` |
| `shadow/md` | `0 12px 32px rgba(0,0,0,0.5)` |
| `shadow/lg` | `0 24px 64px rgba(0,0,0,0.6)` |
| `shadow/glow` | `0 0 40px rgba(0,184,184,0.08)` |

---

## 5. Composants Figma à créer

### 5.1 Button

**Variants :** `primary` | `secondary` | `ghost` | `danger`  
**States :** `default` | `hover` | `disabled`

| Variant | Fond | Texte | Bordure |
|---------|------|-------|---------|
| primary | `#00B8B8` | `#050507` | — |
| secondary | transparent | `#FAFAFA` | `border/default` |
| ghost | transparent | `#C4C4CC` | — |
| danger | `#EF4444` | `#FAFAFA` | — |

- Hauteur : 44 px (mobile touch target)
- Padding horizontal : 20 px
- Radius : `radius/md` (12 px)
- Font : `label/md` weight 600

### 5.2 Card

- Fond : `bg/card`
- Bordure : 1 px `border/default`
- Radius : `radius/md`
- Padding : 16–20 px
- Ombre optionnelle : `shadow/sm`

**Variants :** `default` | `interactive` (hover → `bg/hover`) | `poster` (ratio 16:9 image + overlay)

### 5.3 Badge

- Fond : `accent/light`
- Texte : `accent/default`
- Padding : 4 px 10 px
- Radius : `radius/full`
- Font : `label/md`

### 5.4 GameCard (carte jeu accueil)

- Ratio poster : **3:4** (portrait)
- Image de fond + dégradé bas `linear-gradient(transparent, rgba(5,5,7,0.95))`
- Titre en bas, badge difficulté en haut à droite
- Effet tilt au survol (optionnel en prototype)

### 5.5 Header

- Hauteur : 64 px + safe-area top
- Fond : `rgba(5,5,7,0.85)` + blur 12 px
- Logo gauche, navigation centre (desktop), menu hamburger (mobile)
- Bordure bas : `border/default`

### 5.6 GameHud

Barre fixe en haut du jeu :
- Score (gauche)
- Progression / timer (centre)
- Bouton quitter ✕ (droite)
- Fond : `bg/elevated`, hauteur 48 px

### 5.7 ProgressBar

- Track : `bg/hover`, hauteur 6 px, radius full
- Fill : dégradé `accent/default` → `accent/hover`
- Largeur : 100 % du conteneur

### 5.8 Toast

- Fond : `bg/card` + `shadow/md`
- Bordure gauche 3 px selon type (success/warning/danger)
- Position : bas centre, margin 24 px
- Animation : slide up (prototype Smart Animate)

---

## 6. Écrans à maquetter

Checklist des frames à créer dans la page **📱 Écrans** :

### Mobile (390 × 844)

- [ ] **Accueil** — hero, texte du jour, carrousel jeux, section étude
- [ ] **Hub Jeux** — grille 2 colonnes de GameCards
- [ ] **Quiz en cours** — question, 4 options, GameHud
- [ ] **Résultat quiz** — score, XP gagné, bouton rejouer
- [ ] **Médiathèque** — liste collections, vignettes vidéo
- [ ] **Lecteur vidéo** — player 16:9, contrôles, sous-titres
- [ ] **Étude — liste thèmes** — cartes thématiques
- [ ] **Étude — détail thème** — article + CTA mini-jeu
- [ ] **Profil** — avatar, XP, barre niveau, grille badges
- [ ] **Découvrir** — liens JW.org par catégorie
- [ ] **Menu mobile** — drawer plein écran
- [ ] **PWA install** — bannière ou bouton installer

### Desktop (1280 × 900)

- [ ] **Accueil desktop** — hero large, 4 colonnes jeux
- [ ] **Hub Jeux desktop** — grille 4–5 colonnes
- [ ] **Médiathèque desktop** — sidebar collections + grille vidéos

---

## 7. Spécifications par écran clé

### Accueil mobile

```
┌──────────────────────────────┐
│ Header (64px)                │
├──────────────────────────────┤
│ HeroBanner                   │
│  - Titre heading/xl          │
│  - Sous-titre body/md muted  │
│  - 2 CTA (Jeux, Médiathèque) │
├──────────────────────────────┤
│ DailyTextSection (card)      │
│  - Date + verset Source Serif│
├──────────────────────────────┤
│ « Jeux populaires »          │
│  Carrousel horizontal        │
│  GameCards 140×186px         │
├──────────────────────────────┤
│ « Parcours d'étude »         │
│  StudyThemeCards 2 colonnes  │
├──────────────────────────────┤
│ Footer                       │
└──────────────────────────────┘
```

### Quiz en cours

```
┌──────────────────────────────┐
│ GameHud: Score | 3/10 | ✕    │
├──────────────────────────────┤
│ ProgressBar                  │
├──────────────────────────────┤
│ Question (heading/md)        │
│ padding 20px                 │
├──────────────────────────────┤
│ Option A (card interactive)  │
│ Option B                     │
│ Option C                     │
│ Option D                     │
│ gap 12px entre options       │
├──────────────────────────────┤
│ SourceCitation (si réponse)  │
└──────────────────────────────┘
```

États des options :
- **Default :** `bg/card`, bordure `border/default`
- **Selected :** bordure `accent/default`, fond `accent/light`
- **Correct :** bordure `success`, fond `success-bg`
- **Incorrect :** bordure `danger`, fond `danger-bg`

---

## 8. Icônes

Utiliser **Lucide Icons** (même bibliothèque que le code) :
- [lucide.dev/icons](https://lucide.dev/icons)
- Taille UI : 20 px (navigation), 24 px (actions)
- Couleur : `text/secondary` par défaut, `accent/default` si actif
- Stroke width : 1.75 px

Icônes fréquentes : `Gamepad2`, `BookOpen`, `Play`, `Trophy`, `User`, `Menu`, `X`, `ChevronRight`, `Download` (PWA).

---

## 9. Prototype et interactions

| Interaction | Déclencheur | Animation |
|-------------|-------------|-----------|
| Navigation | Tap lien header | Instant |
| Carte jeu | Tap | Navigate → page jeu |
| Option quiz | Tap | Smart Animate 200 ms → état selected |
| Bonne réponse | Auto après tap | Flash vert 300 ms |
| Toast XP | Fin de partie | Slide up 400 ms |
| Menu mobile | Tap hamburger | Overlay slide from right |
| PWA install | Tap bouton | Modal native (hors Figma) |

---

## 10. Export pour développement

Depuis Figma Dev Mode :
- Exporter les icônes en **SVG** ou **PNG @2x**
- Copier les tokens couleur en CSS variables
- Spécifier les espacements en **rem** (diviser px par 16)

Mapping Figma → code :
```
accent/default  →  var(--accent)
bg/card         →  var(--bg-card)
heading/lg      →  class "text-2xl font-bold"
```

---

## 11. Captures d'écran de référence

Pour des maquettes fidèles sans tout reconstruire :

1. Ouvrir [jwgames.netlify.app](https://jwgames.netlify.app) dans Chrome
2. DevTools → mode responsive 390 × 844
3. Capturer chaque écran (Cmd+Shift+P → « Capture full size screenshot »)
4. Figma → **Place image** sur les frames comme référence visuelle
5. Retracer par-dessus en utilisant ce guide

---

## 12. Livrables design suggérés pour le Bethel

| Livrable | Description |
|----------|-------------|
| Fichier Figma | Design system + 12 écrans mobile + 3 desktop |
| Tokens JSON | `docs/figma/design-tokens.json` (déjà fourni) |
| Logo | `public/images/logo.png` |
| Guide | Ce document |

---

*Guide préparé pour accompagner la transmission du projet JW Games — Juin 2026*
