/**
 * Génère src/lib/jw-images.ts — uniquement des URLs JW vérifiées (HTTP 200).
 * Pool : src/data/jw-verified-images.json (affiches médiathèque + cfp2 + pkon).
 * Usage: node scripts/verify-jw-images.mjs && node scripts/generate-jw-images.mjs
 */
import fs from "node:fs";

const JW_ORG = "https://www.jw.org/fr/";
const pool = JSON.parse(fs.readFileSync("src/data/jw-verified-images.json", "utf8"));

/** Préférences sémantiques : mots-clés dans le titre JW → slot */
const SLOT_PREFS = {
  "hero.etude": ["bible", "étude", "cours"],
  "hero.quotidien": ["défi", "ado", "jeune", "quotidien"],
  "hero.langues": ["prédication", "langue", "ministère"],
  "hero.jeux": ["ami", "enfant", "chanson", "pkon"],
  "hero.profil": ["famille", "couple"],
  "hero.discover": ["bibliothèque", "découvrir"],
  "daily.text": ["texte", "jour", "bible"],
  "study.progress": ["cours", "étude", "progress"],
  "home.nav.mediatheque": ["vidéo", "gnj", "bonne nouvelle"],
  "home.nav.etude": ["bible", "étude"],
  "home.nav.jeux": ["enfant", "david", "ami"],
  "home.nav.langues": ["prédication", "proclam"],
  "discover.hero": ["bibliothèque", "jw"],
  "discover.mediatheque": ["vidéo", "ministère"],
  "discover.jeux": ["enfant", "jeu", "david"],
  "discover.etude": ["étude", "tour de garde", "bible"],
  "discover.langues": ["langue", "prédication"],
  "discover.quotidien": ["défi", "ado"],
  "discover.enfants": ["enfant", "ami", "leçon"],
  "discover.ados": ["ado", "jeune"],
  "discover.familles": ["famille", "maman", "couple"],
  "discover.bible": ["bible", "traduction"],
  "discover.cours": ["cours", "biblique"],
  "discover.histoire": ["histoire", "archéo"],
  "discover.gnj": ["bonne nouvelle", "jésus", "gnj"],
  "discover.videos": ["film", "vidéo"],
  "discover.magazines": ["magazine", "réveillez", "tour de garde"],
  "study.theme.priere": ["prière", "prier", "cours vers"],
  "study.theme.confiance": ["confiance", "jonas", "chemin"],
  "study.theme.qualites": ["fruit", "qualité", "esprit"],
  "study.theme.jesus": ["jésus", "gnj", "fils"],
  "study.theme.famille": ["famille", "maman", "enfant"],
  "study.theme.service": ["prédication", "proclam", "ministère"],
  "study.theme.royaume": ["royaume", "gnj", "bonne nouvelle"],
  "study.theme.resurrection": ["résurrection", "mort", "vie heureuse"],
  "study.theme.adoration": ["adoration", "assemblée", "culte"],
  "study.theme.bible": ["bible", "étude", "écriture"],
  "study.theme.sagesse": ["sagesse", "ami", "choisir"],
  "study.theme.endurance": ["endurance", "baisse pas", "persév"],
  "study.theme.amour": ["amour", "acte"],
  "study.theme.creation": ["création", "pousse", "créateur"],
  "study.theme.jeunesse": ["jeune", "david", "ado"],
  "study.theme.paix": ["paix", "anxiété"],
  "study.theme.integrite": ["intégrité", "humble", "moïse", "honnêt"],
  "study.theme.propheties": ["prophét", "parole", "apocalypse"],
  "study.theme.decouvrir-bible": ["cours", "bible", "premiers pas"],
  "study.theme.predication": ["prédication", "proclam", "hospital"],
  "study.theme.pionnier": ["pionnier", "pionni"],
  "study.theme.ecole-biblique": ["école", "enfant", "ami de jéhovah"],
  "study.theme.vie-chretienne": ["baptême", "vie chrét", "quotidien"],
  "game.videoquiz": ["gnj", "vidéo", "bonne nouvelle"],
  "game.vraifaux": ["vrai", "bible", "aider"],
  "game.ordre": ["ordre", "chronolog", "événement"],
  "game.mots": ["mot", "chanson", "enfant"],
  "game.versets": ["verset", "élise", "élie", "bible"],
  "game.cartes": ["carte", "mémoire", "personnage"],
  "game.undercover": ["abigaïl", "abigail", "bluff"],
  "game.quiz": ["quiz", "question", "connais"],
  "game.rapidite": ["rapid", "gnj", "épisode"],
  "game.memoire": ["apôtre", "mémoire", "connais"],
  "game.thematique": ["thème", "social", "ado"],
  "game.equipe": ["équipe", "groupe", "swords"],
  "game.devinettes": ["ruth", "amie", "devinet"],
  "game.biblio": ["livre", "bible", "biblioth"],
  "daily.quiz": ["quiz", "question"],
  "daily.speed": ["rapid", "gnj"],
  "daily.memory": ["mémoire", "apôtre"],
  "daily.video": ["vidéo", "film", "gnj"],
  "daily.vraifaux": ["vrai", "faux"],
  "lang.en": ["anglais", "english"],
  "lang.es": ["espagnol", "español"],
  "lang.ko": ["coréen", "korean"],
  "lang.fr": ["français", "french"],
  "lang.ar": ["arabe", "arab"],
  "lang.zh": ["chinois", "chinese"],
  "lang.pt": ["portugais", "portug"],
  "lang.tr": ["turc", "turk"],
};

/** Slots articles — préférence par id */
for (const id of [
  "priere-wt-ecoute", "priere-awake-efficace", "confiance-wt-renforcer", "confiance-awake-forces",
  "qualites-wt-imiter", "qualites-awake-personne", "jesus-wt-qui", "jesus-awake-chef",
  "famille-wt-renforcer", "famille-awake-enfants", "service-wt-pourquoi", "service-awake-mondiale",
  "royaume-wt-quoi", "royaume-awake-changer", "royaume-livre-attendez",
  "resurrection-wt-promesse", "resurrection-awake-morts", "adoration-wt-coeur", "adoration-awake-verite",
  "bible-awake-etudier", "bible-wt-profit", "bible-livre-enseigner",
  "sagesse-wt-acquerir", "sagesse-awake-numerique", "endurance-wt-garder", "endurance-awake-vie",
  "amour-wt-imiter", "amour-awake-quotidien", "creation-awake-miracle", "creation-wt-createur",
  "jeunesse-awake-defis", "jeunesse-wt-force", "paix-wt-interieure", "paix-awake-anxiete",
  "integrite-wt-developper", "integrite-awake-honnetete", "propheties-wt-fil", "propheties-livre-apocalypse",
  "decouverte-wt-premiers-pas", "decouverte-brochure-bible", "predication-wt-courage",
  "predication-awake-conversations", "pionnier-wt-joie", "pionnier-brochure-organisation",
  "ecole-wt-enfants", "ecole-awake-famille", "vie-wt-quotidien", "vie-awake-adolescents",
]) {
  const words = id.replace(/-/g, " ").split(" ");
  SLOT_PREFS[`study.article.${id}`] = words;
}

function score(alt, keywords) {
  const a = alt.toLowerCase();
  let s = 0;
  for (const k of keywords) {
    if (a.includes(k.toLowerCase())) s += 10;
  }
  return s;
}

const used = new Set();
const assignments = {};

function pickForSlot(slot, keywords) {
  let best = null;
  let bestScore = -1;
  for (const item of pool) {
    if (used.has(item.url)) continue;
    const s = score(item.alt, keywords);
    if (s > bestScore) {
      bestScore = s;
      best = item;
    }
  }
  if (!best) {
    best = pool.find((item) => !used.has(item.url));
  }
  if (!best) throw new Error(`Pool épuisé pour ${slot}`);
  used.add(best.url);
  assignments[slot] = best;
}

for (const [slot, keywords] of Object.entries(SLOT_PREFS)) {
  pickForSlot(slot, keywords);
}

if (Object.keys(assignments).length !== 125) {
  throw new Error(`Expected 125 slots, got ${Object.keys(assignments).length}`);
}

// Catalogue = valeurs uniques assignées
const C = {};
for (const [slot, item] of Object.entries(assignments)) {
  const key = slot.replace(/\./g, "_").replace(/-/g, "_");
  C[key] = { ...item, href: item.href || JW_ORG };
}

const SLOTS = Object.fromEntries(
  Object.keys(SLOT_PREFS).map((s) => [s, s.replace(/\./g, "_").replace(/-/g, "_")]),
);

let out = `/**
 * Images officielles JW.org — URLs vérifiées (HTTP 200) uniquement.
 * Regénérer : node scripts/verify-jw-images.mjs && node scripts/generate-jw-images.mjs
 */
export interface JwImage {
  url: string;
  alt: string;
  credit: string;
  href: string;
}

const JW_ORG = "${JW_ORG}";

const JW_IMAGE_CATALOG = {
`;
for (const [k, v] of Object.entries(C)) {
  out += `  ${JSON.stringify(k)}: { url: ${JSON.stringify(v.url)}, alt: ${JSON.stringify(v.alt)}, credit: "jw.org", href: ${JSON.stringify(v.href)} },\n`;
}
out += `} as const satisfies Record<string, JwImage>;

const JW_SLOT_KEYS = {
`;
for (const [slot, key] of Object.entries(SLOTS)) {
  out += `  ${JSON.stringify(slot)}: ${JSON.stringify(key)},\n`;
}
out += `} as const;

export const JW_IMAGE_ASSIGNMENTS = Object.fromEntries(
  Object.entries(JW_SLOT_KEYS).map(([slot, key]) => [slot, JW_IMAGE_CATALOG[key as keyof typeof JW_IMAGE_CATALOG].url]),
) as Record<keyof typeof JW_SLOT_KEYS, string>;

function imageFromSlot(slot: keyof typeof JW_SLOT_KEYS): JwImage {
  return JW_IMAGE_CATALOG[JW_SLOT_KEYS[slot]];
}

export function jwImageForSlot(slot: keyof typeof JW_SLOT_KEYS): JwImage {
  return imageFromSlot(slot);
}

export function jwImageForStudyTheme(themeId: string): JwImage {
  const slot = \`study.theme.\${themeId}\` as keyof typeof JW_SLOT_KEYS;
  if (slot in JW_SLOT_KEYS) return imageFromSlot(slot);
  return imageFromSlot("hero.etude");
}

export function jwImageForArticle(articleId: string): JwImage {
  const slot = \`study.article.\${articleId}\` as keyof typeof JW_SLOT_KEYS;
  if (slot in JW_SLOT_KEYS) return imageFromSlot(slot);
  return imageFromSlot("hero.etude");
}

export function jwImageForGame(mode: string): JwImage {
  const slot = \`game.\${mode}\` as keyof typeof JW_SLOT_KEYS;
  if (slot in JW_SLOT_KEYS) return imageFromSlot(slot);
  return imageFromSlot("hero.jeux");
}

export function jwImageForDailyTask(taskId: string): JwImage {
  const slot = \`daily.\${taskId}\` as keyof typeof JW_SLOT_KEYS;
  if (slot in JW_SLOT_KEYS) return imageFromSlot(slot);
  return imageFromSlot("hero.quotidien");
}

export function jwImageForLanguage(langId: string): JwImage {
  const slot = \`lang.\${langId}\` as keyof typeof JW_SLOT_KEYS;
  if (slot in JW_SLOT_KEYS) return imageFromSlot(slot);
  return imageFromSlot("hero.langues");
}

/** @deprecated Préférez jwImageForLanguage(langId) */
export function jwImageByIndex(index: number): JwImage {
  const langs = ["en","es","ko","fr","ar","zh","pt","tr"] as const;
  return jwImageForLanguage(langs[index % langs.length] ?? "en");
}

export const JW_IMAGES = {
  bibleEtude: JW_IMAGE_CATALOG.hero_etude,
  bonneNouvelleJesus: JW_IMAGE_CATALOG.discover_gnj,
  coursBiblique: JW_IMAGE_CATALOG.discover_cours,
  enfants: JW_IMAGE_CATALOG.hero_jeux,
  enfantsLecons: JW_IMAGE_CATALOG.study_theme_ecole_biblique,
  filmEnfant: JW_IMAGE_CATALOG.home_nav_jeux,
  adolescents: JW_IMAGE_CATALOG.hero_quotidien,
  famille: JW_IMAGE_CATALOG.study_theme_famille,
  histoire: JW_IMAGE_CATALOG.discover_histoire,
  ministere: JW_IMAGE_CATALOG.study_theme_service,
  memoire: JW_IMAGE_CATALOG.game_memoire,
  rapidite: JW_IMAGE_CATALOG.game_rapidite,
  undercover: JW_IMAGE_CATALOG.game_undercover,
  versets: JW_IMAGE_CATALOG.game_versets,
  mots: JW_IMAGE_CATALOG.game_mots,
  vraifaux: JW_IMAGE_CATALOG.game_vraifaux,
  ordre: JW_IMAGE_CATALOG.game_ordre,
  equipe: JW_IMAGE_CATALOG.game_equipe,
  thematique: JW_IMAGE_CATALOG.game_thematique,
  videoquiz: JW_IMAGE_CATALOG.game_videoquiz,
  quotidien: JW_IMAGE_CATALOG.hero_quotidien,
  etude: JW_IMAGE_CATALOG.hero_etude,
  langues: JW_IMAGE_CATALOG.hero_langues,
  mediatheque: JW_IMAGE_CATALOG.home_nav_mediatheque,
  priere: JW_IMAGE_CATALOG.study_theme_priere,
  royaume: JW_IMAGE_CATALOG.study_theme_royaume,
  confiance: JW_IMAGE_CATALOG.study_theme_confiance,
  integrite: JW_IMAGE_CATALOG.study_theme_integrite,
  jeunesse: JW_IMAGE_CATALOG.study_theme_jeunesse,
  creation: JW_IMAGE_CATALOG.study_theme_creation,
} as const satisfies Record<string, JwImage>;

export const JW_IMAGE_LIST = Object.values(JW_IMAGES);

export const JW_ORG_LINK = JW_ORG;
export const JW_LIBRARY_LINK = "${JW_ORG}bibliothèque/";

export const BRAND_TEAL = "#00a3a3";
export const NETFLIX_RED = "#e50914";

export function assertUniqueJwImages(): void {
  const urls = Object.values(JW_IMAGE_ASSIGNMENTS);
  const seen = new Set<string>();
  for (const url of urls) {
    if (seen.has(url)) throw new Error(\`URL JW dupliquée dans les slots : \${url}\`);
    seen.add(url);
  }
}
assertUniqueJwImages();
`;

fs.writeFileSync("src/lib/jw-images.ts", out);
console.log(`OK — ${Object.keys(assignments).length} slots, ${used.size} URLs uniques`);
