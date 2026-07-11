# JW Games — Proposition de transmission au Bethel

**Document de présentation complet**  
**Version :** juin 2026 — édition détaillée  
**Version PDF complète :** générée depuis `docs/pitch-bethel.html` → `docs/PITCH-BETHEL.pdf` (~20 pages)  
**Auteur :** Alfred Gibeau-Ahoussinou  
**Site de démonstration :** [https://jwgames.netlify.app](https://jwgames.netlify.app)  
**Code source :** [https://github.com/alfredgibeau-ahoussinou/jw-games](https://github.com/alfredgibeau-ahoussinou/jw-games)

---

## Lettre d'ouverture

Chers frères,

Ce document n'est pas un simple descriptif technique. C'est le fruit de mois de travail, de prières et d'observations — parce que **j'aime les jeunes de notre congrégation**, parce que je vois leur potentiel, et parce que je refuse de les abandonner au seul divertissement du monde.

J'ai vu des adolescents brillants décrocher d'un article pourtant excellent. J'ai vu des enfants mémoriser des centaines de combinaisons dans un jeu vidéo, alors qu'un verset leur semblait « trop long ». Et j'ai aussi vu leurs yeux s'illuminer quand on leur a proposé un **quiz**, un **défi**, une **récompense** — sur la Bible, sur une vidéo JW, sur le texte du jour.

**JW Games est né de ces constats-là.** Pas pour remplacer ce que l'organisation fait déjà si bien, mais pour tendre la main à ceux qui vivent dans un monde où l'attention se gagne autrement.

Je vous le présente avec humilité, reconnaissance, et l'espoir sincère qu'il pourra servir — ne serait-ce qu'un jeune — à rapprocher un cœur de Jéhovah.

*Alfred Gibeau-Ahoussinou*

---

## Résumé exécutif

**JW Games** est une application web gratuite, installable sur téléphone (PWA), conçue **avant tout pour les jeunes**. Elle transforme l'accès aux publications officielles (JW.org, JW Library, bibliothèque en ligne) en expérience ludique et personnelle : quiz, jeux de mémoire, parcours d'étude guidés, médiathèque vidéo avec mini-quiz, texte du jour avec questions de méditation, module langues pour la prédication, et profil personnalisé.

| Indicateur | Valeur |
|------------|--------|
| Modes de jeu | 15 |
| Vidéos officielles intégrées | 137 |
| Collections vidéo | 11 |
| Parcours d'étude thématique | 18 |
| Articles d'étude lisibles sur le site | 48 |
| Parcours guidés (4 semaines) | Personnalisés selon le profil |
| Langues pour la prédication | 8 |
| Phrases de terrain | 381 |
| Badges de progression | 10 |
| Coût pour l'utilisateur | Gratuit, sans publicité |
| Données confidentielles requises | Aucune |

**Proposition :** transmission intégrale du projet (code, documentation, hébergement) à l'organisation, sous la direction que le Bethel jugera appropriée.

---

## 1. Objet de ce document

Je souhaite mettre à disposition de l'organisation **JW Games** : une application web gratuite conçue avant tout **pour les jeunes**, afin de les aider à rester connectés à la Parole de Dieu dans un monde qui les attire vers d'autres formes de divertissement.

Ce document présente :

- La motivation profonde du projet et le constat qui m'a poussé à agir
- Le contenu détaillé de l'application (jeux, vidéos, étude, langues, texte du jour)
- Les cas d'usage concrets pour les jeunes, les familles et les responsables
- Les garanties de conformité aux sources officielles
- L'architecture technique et les livrables fournis
- Ma proposition de transmission

*Sans prétention commerciale ni revendication d'approbation officielle.*

---

## 2. Pourquoi j'ai créé ce projet

J'ai développé **JW Games** parce que je vois, autour de moi, une réalité qui m'a interpellé : **de plus en plus de jeunes ont du mal à s'accrocher à la lecture et au visionnage des vidéos spirituelles**, même lorsqu'ils aiment Jéhovah et veulent faire le bien.

Ce n'est pas un manque de foi. Ce n'est pas un manque de respect pour les publications. C'est un **changement de façon d'apprendre et de s'engager** :

- Ils grandissent avec des **écrans**, des **jeux**, des **défis**, des **récompenses instantanées**.
- Ils sont habitués à une interaction **active**, pas seulement passive.
- Lire un article ou regarder une vidéo, aussi excellente soit-elle, peut leur sembler **loin de leur quotidien numérique**.
- Ils peuvent passer **plusieurs heures par jour** sur des applications de jeux qui ne leur apportent rien de durable spirituellement.

Et pourtant, ces mêmes jeunes sont capables d'une concentration remarquable quand le format les engage. **Et si l'énergie qu'ils mettent à jouer pouvait servir à ancrer la Bible dans leur cœur ?**

C'est cette question qui m'a poussé à agir. Pas pour remplacer JW.org ou JW Library — que j'estime et utilise moi-même — mais pour **créer un pont** entre le monde où vivent les jeunes aujourd'hui et les trésors spirituels que l'organisation met gracieusement à notre disposition.

> *« Transformer l'étude en jeu, ce n'est pas baisser le niveau spirituel. C'est monter au niveau de ceux qu'on aime. »*

### Ce que j'ai ressenti en construisant l'application

Chaque fonctionnalité a été pensée avec une question en tête : **est-ce qu'un jeune choisirait d'ouvrir ça ?** Pas par obligation, pas parce qu'un parent le lui demande — mais parce que c'est **vivant**, **beau**, **utile**.

Quand j'ai vu qu'un ado pouvait répondre à des questions sur le texte du jour en se reconnaissant dans le commentaire — « comment *vous* pouvez appliquer… », « sur quoi *vous* fixer votre attention » — j'ai su que nous touchions quelque chose de précieux : **la méditation personnelle**, pas un simple test de mémoire.

Quand j'ai ajouté les parcours d'étude sur quatre semaines, c'était pour qu'un jeune ne se sente pas perdu face à 48 articles : **un chemin**, semaine après semaine, adapté à son âge et à ses objectifs.

Quand j'ai intégré les langues de prédication, c'était pour ce jeune pionnier qui veut oser parler à son voisin dans une autre langue — avec des cartes, un quiz, et la prononciation sous les yeux.

**Ce projet, c'est de l'amour traduit en code.**

### Ce que j'ai voulu éviter

- Créer un concurrent des applications officielles
- Inventer du contenu doctrinal ou des interprétations personnelles
- Collecter des données personnelles ou monétiser l'attention des jeunes
- Proposer un divertissement creux déguisé en application « religieuse »

### Ce que j'ai voulu construire

- Un **complément** moderne, ancré dans les sources officielles
- Un outil que **les parents** peuvent recommander sans crainte
- Une expérience que **les jeunes** choisissent d'ouvrir eux-mêmes
- Un projet **transmissible** à l'organisation avec tout le code et la documentation

---

## 3. Le constat — les jeunes et la Parole aujourd'hui

### Ce que j'observe

| Tendance | Conséquence possible |
|----------|----------------------|
| Lecture de moins en moins longue, en ligne et en profondeur | Les articles et publications paraissent « trop longs » |
| Vidéos souvent zappées ou regardées en arrière-plan | Le contenu ne s'ancre pas vraiment |
| Jeux et réseaux sociaux très présents au quotidien | Le temps spirituel personnel est en concurrence |
| Besoin de feedback immédiat (score, progression, réussite) | L'étude traditionnelle peut sembler « sans récompense » |
| Monde très visuel et interactif | Un format passif peut décrocher, même avec de bonnes intentions |
| Habitude des applications installées sur l'écran d'accueil | JW.org est parfois perçu comme un « site » parmi d'autres |

### Ce que je ne dis pas

- Je ne dis pas que les jeunes ne veulent plus de Jéhovah.
- Je ne dis pas que les publications actuelles sont inadaptées.
- Je ne dis pas qu'il faut changer la doctrine ou le message.

### Ce que je crois

Les jeunes ont **soif de vérité**, mais ils ont besoin qu'on **parle leur langage** — non pas en diluant le message, mais en **changeant le véhicule** qui le transporte jusqu'à eux.

Les parents, les anciens et les instructeurs de circonscription le vivent souvent : un adolescent qui refuse de lire peut passer **une heure sur un quiz** sans s'en lasser. Un enfant qui décroche d'une vidéo peut **retenir un verset** s'il doit le reconstituer comme un puzzle.

**C'est ce potentiel que JW Games cherche à libérer.**

---

## 4. L'idée — le jeu comme pont vers les sources officielles

### Le principe fondateur

**JW Games ne crée pas un nouveau contenu spirituel.** Il **gamifie l'accès** au contenu qui existe déjà sur JW.org et dans JW Library :

| Format traditionnel | Transformation ludique dans JW Games |
|--------------------|--------------------------------------|
| Lire un article | Parcours d'étude + mini-jeu de validation |
| Regarder une vidéo | Visionnage + quiz vidéo intégré |
| Mémoriser un verset | Mots manquants, mots mélangés, cartes mémoire |
| Réviser pour l'école biblique | Quiz, vrai/faux, rapidité, ordre chronologique |
| Réunion de jeunes | Undercover, jeux d'équipe |
| Texte du jour | Verset officiel + commentaire WOL + **questions de méditation personnelles** |
| Prêcher dans une autre langue | Module Langues : cartes, quiz, liste de phrases |
| Découvrir JW.org | Page « Découvrir » avec liens officiels organisés |

Chaque partie renvoie vers les **références bibliques** et les **sources officielles**. Le jeu est le **chemin** ; la Parole de Dieu reste la **destination**.

### Pourquoi cela peut toucher les jeunes

1. **Engagement volontaire** — ils ouvrent l'app par choix, pas par obligation.
2. **Répétition naturelle** — la mémorisation passe par le jeu, sans lassitude.
3. **Progression visible** — XP, niveaux, badges, séries quotidiennes.
4. **Écosystème officiel** — vidéos JW, versets TMON, texte du jour WOL, liens JW.org.
5. **Personnalisation** — accueil adapté à l'âge et aux objectifs, sans données sensibles.
6. **Format natif mobile** — PWA installable sur l'écran d'accueil, comme les apps qu'ils utilisent déjà.
7. **Questions qui parlent à la personne** — le texte du jour ne demande plus « quelle référence ? » mais « comment *vous* pouvez appliquer cette leçon ».

---

## 5. Cas d'usage concrets

### Enfant (7–12 ans)

- Jouer à la **mémoire** avec des personnages bibliques.
- Regarder une vidéo **Deviens l'ami de Jéhovah** puis répondre au quiz vidéo.
- Reconstituer des **versets** avec les mots mélangés.
- L'accueil met en avant les collections **enfants** en premier.
- Parcours d'étude **jeunes** sur quatre semaines, avec articles adaptés.

### Adolescent (13–17 ans)

- Défis de **rapidité** entre amis après l'école biblique.
- Vidéos **jeunes — spiritualité** avec mini-quiz de compréhension.
- **Undercover** lors d'une soirée de groupe.
- Profil avec XP et badges pour maintenir l'habitude.
- **Texte du jour** : méditer sur le commentaire avec des questions qui touchent sa vie.

### Jeune adulte (18–29 ans)

- **Quiz thématiques** pour réviser avant les réunions.
- Parcours d'**étude personnelle** structurés sur 4 semaines.
- **Texte du jour** intégré à la routine matinale.
- Module **Langues** pour préparer la prédication dans un territoire multilingue.

### Famille

- Mode **équipe** et **Undercover** pour les soirées ensemble.
- Parents et enfants avec profils séparés (prénom + préférences).
- Vidéos **défis pour les familles**.
- Parcours d'étude **famille** avec articles sur la vie spirituelle à la maison.

### Parents, anciens, pionniers

- Support pour **réviser avec un enfant** après l'assemblée.
- Outil pour **animer une soirée de jeunes** sans préparer de A à Z.
- Point d'accroche moderne lors d'une **retour visite** avec un adolescent.
- **Langues** : réviser des phrases de prédication avant le service de terrain.

---

## 6. Inventaire complet du contenu

### 6.1 Quinze modes de jeu

| Jeu | Description | Intérêt jeunes |
|-----|-------------|----------------|
| Quiz biblique | QCM par thème et difficulté | Score, XP, références |
| Vrai ou Faux | Affirmations + explication | Format court, mobile |
| Mémoire | Paires à associer | Visuel, satisfaisant |
| Versets à compléter | Mots manquants dans un verset | Mémorisation active |
| Mots mélangés | Réordonner les mots d'un verset | Puzzle biblique |
| Rapidité | Réponses en temps limité | Adrénaline, très engageant |
| Ordre chronologique | Classer des événements | Comprendre l'histoire biblique |
| Cartes mémoire | Cartes retournables | Révision en petites doses |
| Devinettes | Énigmes sur les récits | Curiosité, découverte |
| Livres de la Bible | Questions sur les publications | Lien avec la bibliothèque |
| Thématiques | Quiz par sujet spirituel | Foi, prière, Royaume… |
| Undercover | Jeu social d'équipe | Soirées jeunes, famille |
| Vidéo Quiz | Questions liées aux vidéos JW | Valide le visionnage |
| Défis en équipe | Mode collaboratif | Réunions, groupes |
| Défi quotidien | Missions du jour | Habitude quotidienne |

### 6.2 Médiathèque — 137 vidéos, 11 collections

| Collection | Nombre de vidéos |
|------------|------------------|
| Deviens l'ami de Jéhovah | 24 |
| Chansons — Deviens l'ami de Jéhovah | 20 |
| Jeunes — Spiritualité | 20 |
| Jeunes — Vie sociale | 16 |
| Chansons pour enfants | 16 |
| Défis pour les familles | 12 |
| La bonne nouvelle selon Jésus | 9 |
| Films — Époque biblique | 8 |
| Films — Époque moderne | 7 |
| Films pour jeunes | 3 |
| Films pour enfants | 2 |

**Fonctionnalités du lecteur :** sous-titres JW officiels, plein écran, mini-quiz optionnel après visionnage, suivi des vidéos regardées dans le profil.

### 6.3 Étude thématique — 18 parcours, 48 articles

Chaque parcours comprend des articles de référence et des mini-jeux intégrés :

1. La prière  
2. Confiance en Jéhovah  
3. Qualités chrétiennes  
4. Jésus, le Fils de Dieu  
5. Famille & culte  
6. Service & prédication  
7. Le Royaume de Dieu  
8. La résurrection  
9. Adoration en vérité  
10. Étudier la Bible  
11. Sagesse pratique  
12. Endurance  
13. L'amour — qualité suprême  
14. La création  
15. Perspectives pour les jeunes  
16. Paix intérieure  
17. Intégrité  
18. Prophéties bibliques  

**Articles enrichis :** 48 articles lisibles directement sur le site, avec corps structuré, versets cités en entier (Traduction du monde nouveau), et questions d'étude personnelle à la fin de chaque lecture.

**Parcours guidés sur 4 semaines :** selon le profil (jeune, famille, service, parcours général), l'application propose un fil conducteur semaine par semaine — avec pastilles de progression, bannière « Continuer votre parcours », et réinitialisation si le profil change.

**Suivi de progression :** articles marqués « Lu » ou « Terminé », filtres Tous / À lire / Lus, barres de progression par thème, résumé dans le profil.

### 6.4 Texte du jour — méditation personnelle

Le texte du jour provient de la **bibliothèque en ligne officielle** (WOL). L'application affiche :

- Le verset du jour (TMON)
- Le commentaire officiel et sa source (publication, paragraphe)
- Liens vers JW.org et WOL

**Questions sur le texte** (nouveauté majeure) : au lieu de questions génériques (« quelle référence ? », « quelle source ? »), un moteur analyse le **commentaire du jour** et génère jusqu'à 4 questions **personnelles et ancrées dans le texte**, par exemple :

- *« Selon ce commentaire, comment pouvez-vous appliquer cette leçon dans votre vie aujourd'hui ? »*
- *« Le verset du jour vous invite aujourd'hui à… »*
- *« Lorsque vous faites face à des épreuves, sur quoi ce texte vous invite-t-il à fixer votre attention ? »*
- *« Que pouvez-vous retenir de l'exemple biblique pour votre propre foi ? »*

Chaque question propose des réponses tirées du commentaire, avec une explication complète après la réponse. L'objectif n'est pas de « réussir un quiz », mais de **méditer** et de **s'approprier** le texte.

### 6.5 Module Langues — prédication multilingue

**8 langues :** anglais, espagnol, coréen, français, arabe, chinois, portugais, turc.  
**381 phrases** organisées par catégories : première approche, présentation, vocabulaire, politesse, retour visite, conclusion, situations courantes.

Pour chaque langue :

- **Cartes flash** — mémorisation avec prononciation romanisée (coréen, arabe, chinois)
- **Quiz** — validation des expressions apprises, XP gagné
- **Liste de référence** — consultation rapide sur le terrain

Progression sauvegardée localement (phrases « connues »). Idéal pour les jeunes pionniers, les territoires multilingues, ou ceux qui veulent oser parler à leur voisin.

### 6.6 Système de progression

| Élément | Rôle |
|---------|------|
| **XP (points d'expérience)** | Gagnés à chaque partie, visionnage vidéo, défi quotidien, langues |
| **Niveaux** | Progression visible, motivation à long terme |
| **Badges** (10) | Premier pas, Apprenti, Sans faute, Assidu (3j), Fidèle (7j), Mémoire d'éléphant, Éclair, Érudit, Lettré, Détective |
| **Série quotidienne** | Jours consécutifs avec défi complété |
| **Défi du jour** | 4 missions : 3 bonnes réponses quiz, 1 rapidité, 1 mémoire, 1 vidéo |
| **Statistiques** | Précision, parties jouées, activité par jeu |

### 6.7 Profil personnalisé (inscription en 4 étapes)

**Collecté (non confidentiel) :**

- Prénom ou pseudo (max 20 caractères)
- Tranche d'âge : 7–12, 13–17, 18–29, 30–49, 50+, ou « en famille »
- Objectif : jouer, étude, vidéos, versets, temps en famille
- Niveau biblique : débutant, intermédiaire, avancé
- Couleur d'avatar (parmi 6 choix)

**Non collecté :** nom de famille, e-mail, adresse, téléphone, congrégation, date de naissance exacte, photo.

**Effet :** l'accueil recommande des jeux, vidéos, parcours d'étude et textes adaptés au profil. Modifiable à tout moment dans la page Profil.

### 6.8 Pages du site

| Page | Fonction |
|------|----------|
| Accueil | Tableau de bord personnalisé, texte du jour, carrousels |
| Jeux | Hub des 15 modes |
| Étude | 18 parcours, parcours 4 semaines, 48 articles |
| Médiathèque | 137 vidéos par collection |
| Langues | 8 langues, cartes, quiz, phrases de prédication |
| Découvrir | Liens organisés vers JW.org |
| Profil | XP, badges, stats, progression étude, préférences |
| Quotidien | Défi du jour et série |

### 6.9 PWA — installation sur téléphone

JW Games s'installe comme une application native (Android et iOS). Sur iPhone, un guide visuel accompagne l'utilisateur vers le bouton **Partager** de Safari puis **Sur l'écran d'accueil** — car Apple ne permet pas l'installation programmatique. L'icône JW Games peut ainsi vivre à côté des autres apps, rappelant chaque jour le texte, le défi, et la Parole de Dieu.

---

## 7. Vision et principes directeurs

| Principe | Application concrète |
|----------|----------------------|
| **Les jeunes d'abord** | Mobile-first, PWA, profil par âge, collections jeunes/enfants |
| **Sources officielles uniquement** | JW.org, JW Library, CDN média JW, WOL |
| **Pas de contenu inventé** | Données curatées, versets TMON, vidéos officielles |
| **Méditation, pas mémorisation creuse** | Questions texte du jour basées sur le commentaire réel |
| **Gratuit et sans publicité** | Aucune monétisation, aucun tracking commercial |
| **Vie privée** | Stockage local uniquement — aucune sync cloud ni classement |
| **Accessibilité** | Interface sombre premium, textes lisibles, PWA |
| **Humilité** | Projet offert, ouvert aux retours et corrections du Bethel |

---

## 8. Conformité, sources et limites

> *« Tout le contenu est basé exclusivement sur les sources officielles : JW.org et JW Library (Traduction du monde nouveau). »*

| Source | Usage dans JW Games |
|--------|---------------------|
| JW.org / jw-cdn | Images, vignettes vidéo, métadonnées |
| Flux vidéo officiels | Lecteur intégré |
| WOL (Watchtower Online Library) | Texte du jour (cache au déploiement) |
| Traduction du monde nouveau | Tous les versets affichés |
| Publications officielles | Articles d'étude, questions bibliothèque |

**JW Games ne remplace pas** JW Library ni l'application JW.org.

**Note importante :** Initiative personnelle — pas d'approbation officielle. Ne pas présenter comme un produit du Bethel sans autorisation expresse.

### Vie privée et sécurité

- Pas de compte obligatoire ; identifiant appareil anonyme (UUID local).
- Aucune donnée personnelle envoyée ni stockée côté serveur.
- En-têtes HTTP de sécurité (X-Frame-Options, nosniff).
- Code source public auditable sur GitHub.

---

## 9. Architecture technique

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 16 (React 19, TypeScript) |
| Styles | Tailwind CSS 4, design system sombre |
| État global | Zustand (profil, XP, badges, défi quotidien, progression étude) |
| Animations | Framer Motion |
| Données | Fichiers TypeScript curatés + API Routes |
| Texte du jour | API WOL + cache local + génération de questions |
| Stockage local | localStorage (profil, XP, badges — sans serveur) |
| Hébergement | Netlify — jwgames.netlify.app |
| PWA | Manifest, icônes, guide installation iOS |
| Build | Pré-cache texte du jour + compilation Next.js |

### Livrables fournis

| Document | Contenu |
|----------|---------|
| `README.md` | Installation, stack, liens |
| `docs/ARCHITECTURE.md` | Architecture détaillée du code |
| `docs/FIGMA-GUIDE.md` | Guide design system pour Figma |
| `docs/figma/design-tokens.json` | Tokens importables (Tokens Studio) |
| `docs/PITCH-BETHEL.pdf` | Ce document |
| Dépôt GitHub | Code complet, 250+ fichiers |

Le contenu (questions, vidéos, thèmes, phrases) est dans `src/data/` — enrichissable **sans modifier le code des jeux**.

---

## 10. Démonstration

| Ressource | URL |
|-----------|-----|
| Site en production | [jwgames.netlify.app](https://jwgames.netlify.app) |
| Code source | [github.com/alfredgibeau-ahoussinou/jw-games](https://github.com/alfredgibeau-ahoussinou/jw-games) |

### Scénario orienté jeunes (15 minutes)

1. **Accueil sans profil** → bannière « Personnalisez votre expérience ».
2. **Créer un profil ado** → parcours 4 étapes, choix âge/objectif.
3. **Accueil personnalisé** → jeux, vidéos, parcours d'étude recommandés.
4. **Texte du jour** → lire le verset, méditer avec les questions personnelles.
5. **Quiz biblique** → question, réponse, référence, XP gagné.
6. **Médiathèque jeunes** → vidéo 30 s, sous-titres, mini-quiz.
7. **Étude** → parcours 4 semaines, article « Perspectives pour les jeunes », mini-jeu.
8. **Langues** → cartes espagnol, quiz de phrases de prédication.
9. **Défi du jour** → 4 missions, série, bonus XP.
10. **Profil** → badges, stats, progression étude.
11. **Installer PWA** → icône sur l'écran d'accueil du téléphone.

---

## 11. Évolutions possibles (sous direction du Bethel)

- Contenu supplémentaire aligné sur les publications en cours
- Traductions de l'interface (structure prête pour l'internationalisation)
- Mode hors-ligne complet (cache jeux + texte du jour)
- Parcours « école biblique » par semaine
- Profils multiples sur un même appareil (famille)
- Déploiement sur infrastructure organisationnelle
- Enrichissement des langues (nouvelles langues de territoire)

---

## 12. Proposition de transmission

Je propose de **transmettre l'intégralité du projet** à l'organisation :

### Option A — Adoption officielle
Transfert du dépôt GitHub, du domaine Netlify, documentation, guide Figma. Accompagnement pour maintenance et enrichissement contenu jeunesse.

### Option B — Usage interne / branche
Déploiement sur infrastructure de l'organisation. Adaptation branding selon Service des publications.

### Option C — Retour et orientation
Recommandations pour améliorer ou rediriger le projet selon les priorités actuelles.

| | |
|---|---|
| **Ce que je ne demande pas** | Rémunération, reconnaissance publique, usage commercial |
| **Ce que je demande** | Orientation sur la conformité, possibilité de servir les **jeunes** comme imaginé |

---

## 13. Questions fréquentes (FAQ Bethel)

**Est-ce que le contenu doctrinal est vérifié ?**  
Tout provient des sources officielles. Aucune doctrine n'est inventée. Le Bethel peut auditer les fichiers `src/data/`.

**Est-ce que les jeunes peuvent tomber sur du contenu inapproprié ?**  
Non. Pas de chat, pas de contenu utilisateur, pas de liens externes hors JW.org.

**Est-ce que ça fonctionne sans internet ?**  
Partiellement. Le profil, les jeux et la progression fonctionnent en local. Vidéos et texte du jour nécessitent une connexion (cache texte du jour au build).

**Les questions du texte du jour sont-elles fiables ?**  
Elles sont générées à partir du commentaire officiel du jour (WOL), pas inventées. Les réponses correctes proviennent du texte lu.

**Qui paie l'hébergement ?**  
Actuellement plan gratuit Netlify. Transférable à l'organisation.

**Peut-on modifier le contenu sans être développeur ?**  
Les fichiers de données sont en TypeScript structuré. Un rédacteur avec accompagnement technique peut enrichir les questions, thèmes et phrases.

---

## 14. Conclusion — ce que j'espère du fond du cœur

Nous vivons une époque où **retenir l'attention des jeunes pour les choses spirituelles** est plus exigeant qu'avant. Ce n'est pas leur faute — c'est un **nouveau terrain** sur lequel nous pouvons nous adapter avec sagesse, sans compromettre la pureté du message.

**JW Games** est ma réponse à ce défi : un outil gratuit, respectueux, ancré dans les sources officielles, qui transforme la lecture et le visionnage en **expérience active** — parce que je suis convaincu que **c'est par là que passent beaucoup de jeunes cœurs aujourd'hui**.

Le projet est **déjà en ligne**, **documenté**, **open source**, et **prêt à être transmis**. Il contient 15 jeux, 137 vidéos, 48 articles d'étude, 8 langues de prédication, un texte du jour avec méditation personnelle, un système de progression complet et une personnalisation par profil — le tout au service d'un seul objectif : **rapprocher les jeunes de la Parole de Dieu**.

Si ce projet peut aider ne serait-ce qu'un jeune à ouvrir sa Bible avec un sourire, à retenir un verset en jouant, à méditer sur le texte du jour parce que la question lui parle directement, ou à oser dire une phrase de bonne nouvelle dans une autre langue — **alors tout le travail, toutes les nuits, toutes les prières en auront valu la peine**.

Je n'ai pas construit JW Games pour moi. Je l'ai construit pour **eux** — pour ce jeune qui doute, pour cette adolescente qui s'ennuie en lisant, pour ce pionnier qui veut progresser, pour ce parent qui cherche un outil sûr à recommander.

Je mets ce projet entre vos mains avec reconnaissance pour tout ce que l'organisation accomplit au service de Jéhovah et de notre prochain, en particulier pour les jeunes qui représentent l'avenir de notre culte unifié.

Je reste à votre disposition pour une démonstration en personne, une visioconférence, ou toute question technique.

Avec mon affection fraternelle,

**Alfred Gibeau-Ahoussinou**

---

*Document préparé par Alfred Gibeau-Ahoussinou — Juin 2026 (mise à jour : texte du jour, étude, langues, PWA)*  
*jwgames.netlify.app · github.com/alfredgibeau-ahoussinou/jw-games*
