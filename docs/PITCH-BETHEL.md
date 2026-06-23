# JW Games — Proposition de transmission au Bethel

**Document de présentation**  
**Version :** juin 2026  
**Site de démonstration :** [https://jwgames.netlify.app](https://jwgames.netlify.app)  
**Code source :** [GitHub — jw-games](https://github.com/alfredgibeau-ahoussinou/jw-games)

---

## 1. Objet de ce document

Je souhaite mettre à disposition de l’organisation **JW Games**, une application web gratuite conçue pour aider frères, sœurs, jeunes et familles à **réviser et approfondir la Bible** de manière ludique, en s’appuyant **exclusivement sur le contenu officiel** publié sur JW.org et dans JW Library (Traduction du monde nouveau).

Ce document présente la vision du projet, ses fonctionnalités, les garanties de conformité des sources, l’architecture technique et ma proposition de transmission — sans prétention commerciale ni revendication d’approbation officielle.

---

## 2. Le problème que nous cherchons à résoudre

- Les jeunes et les familles utilisent déjà des jeux et des applications sur leurs appareils.
- La révision biblique peut parfois sembler répétitive ou difficile à intégrer au quotidien.
- Les ressources officielles JW.org sont riches, mais dispersées entre vidéos, articles, texte du jour et publications.

**JW Games** propose un espace unique, sobre et respectueux, qui **canalise l’attention vers les sources officielles** plutôt que de les remplacer.

---

## 3. Vision et principes directeurs

| Principe | Application concrète |
|----------|----------------------|
| **Sources officielles uniquement** | Questions, versets, vidéos et articles renvoient vers JW.org / JW Library |
| **Pas de contenu doctrinal inventé** | Toutes les données proviennent de fichiers curatés ou d’API publiques JW |
| **Gratuit et sans publicité** | Aucune monétisation, aucun tracking commercial |
| **Respect de la vie privée** | Profil local sur l’appareil ; synchronisation cloud optionnelle |
| **Accessibilité mobile** | PWA installable, interface adaptée téléphone et tablette |
| **Humilité** | Projet personnel offert à l’organisation, ouvert aux retours du Bethel |

---

## 4. Fonctionnalités principales

### 4.1 Accueil et navigation

- Tableau de bord avec accès rapide aux jeux, à l’étude thématique, à la médiathèque et au texte du jour.
- Barre officielle rappelant la source JW.org.
- Installation en application (PWA) sur iOS et Android.

### 4.2 Quinze modes de jeu bibliques

| Jeu | Description |
|-----|-------------|
| Quiz biblique | Questions à choix multiples par thème et difficulté |
| Vrai ou Faux | Affirmations à valider avec explication |
| Mémoire | Association de paires (personnages, événements, versets) |
| Versets à compléter | Texte biblique avec mots manquants |
| Mots mélangés | Réorganisation de mots pour reconstituer un verset |
| Rapidité | Réponses dans un temps limité |
| Ordre chronologique | Classement d’événements bibliques |
| Cartes flash | Révision par retournement de cartes |
| Devinettes | Énigmes basées sur les récits bibliques |
| Bibliothèque | Questions sur les publications |
| Thématique | Quiz par sujet (foi, prière, etc.) |
| Undercover | Jeu d’équipe pour réunions |
| Quiz vidéo | Questions liées aux vidéos JW |
| Jeu d’équipe | Mode collaboratif |
| Mots croisés bibliques | Variante textuelle |

Chaque partie affiche les **références bibliques** et, le cas échéant, un lien vers la source officielle.

### 4.3 Étude thématique

- **18 parcours** structurés (foi, prière, qualités chrétiennes, événements bibliques…).
- Articles de référence issus des publications officielles.
- Mini-jeux intégrés à chaque thème pour ancrer les points clés.

### 4.4 Médiathèque vidéo

- **137 vidéos** organisées par collection (Bible, famille, jeunes, etc.).
- Lecteur intégré avec sous-titres JW (via CDN officiel).
- Mini-quiz optionnel après visionnage.

### 4.5 Texte du jour

- Affichage du texte quotidien depuis les serveurs WOL (Watchtower Online Library).
- Mise en cache au déploiement pour garantir la disponibilité même en cas de latence réseau.

### 4.6 Page Découvrir

- Liens organisés vers les sections officielles de JW.org (bibliothèque en ligne, vidéos, actualités, etc.).

### 4.7 Profil personnel (local)

- Pseudonyme, points d’expérience, badges de progression.
- Historique des sessions de jeu.
- Aucune donnée personnelle sensible requise.

---

## 5. Conformité et sources

> *« Tout le contenu est basé exclusivement sur les sources officielles : JW.org et JW Library (Traduction du monde nouveau). »*

- Les images proviennent du CDN média JW (`jw.org` / `jw-cdn`).
- Les vidéos sont lues depuis les flux officiels.
- Les versets utilisent la **Traduction du monde nouveau**.
- Chaque écran de jeu peut afficher une citation de source.
- Le site **ne remplace pas** JW Library ni l’application officielle JW.org.

---

## 6. Démonstration

| Élément | Lien |
|---------|------|
| Site en production | [jwgames.netlify.app](https://jwgames.netlify.app) |
| Code source | [github.com/alfredgibeau-ahoussinou/jw-games](https://github.com/alfredgibeau-ahoussinou/jw-games) |
| Documentation technique | `docs/ARCHITECTURE.md` dans le dépôt |
| Guide design Figma | `docs/FIGMA-GUIDE.md` dans le dépôt |

**Scénario de démonstration suggéré (5 minutes) :**

1. Ouvrir l’accueil → montrer le texte du jour et les jeux vedettes.
2. Lancer un Quiz → montrer la référence biblique en fin de question.
3. Ouvrir la Médiathèque → lire 30 secondes d’une vidéo avec sous-titres.
4. Parcourir un thème d’étude → montrer l’article et le mini-jeu associé.
5. Installer la PWA sur mobile (menu « Installer l’application »).

---

## 7. Architecture technique (résumé)

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 16 (React 19, TypeScript) |
| Styles | Tailwind CSS 4, design system sombre premium |
| État | Zustand (profil, progression) |
| Base de données | Supabase (optionnel) + stockage local (IndexedDB) |
| Hébergement | Netlify (déploiement automatique) |
| PWA | Manifest + service worker via Next.js |

Le code est modulaire : chaque jeu est un composant réutilisable alimenté par des fichiers de données TypeScript facilement enrichissables.

*Détails complets : voir `docs/ARCHITECTURE.md`.*

---

## 8. Proposition de transmission

Je propose de **transmettre l’intégralité du projet** à l’organisation, selon les modalités que le Bethel jugera appropriées :

### Option A — Adoption officielle
- Transfert du dépôt GitHub et du domaine d’hébergement.
- Mise à disposition de la documentation technique et du guide Figma.
- Accompagnement pour la maintenance et l’enrichissement du contenu.

### Option B — Usage interne / branche
- Déploiement sur l’infrastructure de l’organisation.
- Adaptation du branding selon les directives du Service des publications.

### Option C — Retour et orientation
- Si le projet ne correspond pas aux priorités actuelles, je reste ouvert à vos recommandations pour l’améliorer ou le rediriger.

**Ce que je ne demande pas :** rémunération, reconnaissance publique, ni utilisation de marques déposées au-delà de ce qui est nécessaire pour citer les sources officielles.

**Ce que je demande :** une orientation claire sur la conformité, l’éventuelle poursuite du projet sous l’égide de l’organisation, et les ajustements doctrinaux ou éditoriaux souhaités.

---

## 9. Maintenance et évolutivité

- **Contenu :** fichiers `src/data/*.ts` — ajout de questions, vidéos ou thèmes sans toucher au code des jeux.
- **Traductions :** structure prête pour l’internationalisation (français actuellement).
- **Sécurité :** pas de secrets dans le code ; variables d’environnement pour Supabase uniquement.
- **Coûts d’hébergement :** plan gratuit Netlify suffisant pour un usage modéré ; évolutif si besoin.

---

## 10. Conclusion

**JW Games** est né d’un désir sincère : aider nos frères et sœurs, en particulier les jeunes, à **aimer davantage l’étude de la Bible** en utilisant les outils qu’ils connaissent déjà — toujours en ramenant vers les publications officielles.

Je mets ce travail entre vos mains avec reconnaissance pour tout ce que l’organisation accomplit au service de Jéhovah et de notre prochain.

Je reste à votre disposition pour une démonstration en personne, une visioconférence, ou toute question technique.

---

*Document préparé par Alfred Gibeau-Ahoussinou*  
*Contact : via le dépôt GitHub ou les canaux que le Bethel indiquera*
