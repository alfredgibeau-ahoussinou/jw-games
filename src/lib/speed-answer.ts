function normalize(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[''´`]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function stripArticles(str: string) {
  return str.replace(/^(le |la |les |l'|un |une |des |du |de la |d'|mon |ma |mes |ton |ta |tes |son |sa |ses )+/i, "").trim();
}

const NUMBER_WORDS: Record<string, string> = {
  un: "1",
  une: "1",
  deux: "2",
  trois: "3",
  quatre: "4",
  cinq: "5",
  six: "6",
  sept: "7",
  huit: "8",
  neuf: "9",
  dix: "10",
  onze: "11",
  douze: "12",
  "trois mille": "3000",
  "trois milles": "3000",
};

function normalizeNumberToken(str: string) {
  const n = normalize(str);
  if (/^\d[\d\s]*$/.test(n.replace(/\s/g, ""))) {
    return n.replace(/\s/g, "");
  }
  return NUMBER_WORDS[n] ?? n;
}

function areSimilarAnswers(a: string, b: string) {
  const na = normalize(stripArticles(a));
  const nb = normalize(stripArticles(b));
  if (na === nb) return true;
  if (normalizeNumberToken(na) === normalizeNumberToken(nb)) return true;
  if (na.length >= 3 && nb.includes(na)) return true;
  if (nb.length >= 3 && na.includes(nb)) return true;
  return false;
}

/** Regroupe les variantes (ex. « royaume » / « le royaume ») en une seule entrée courte */
export function distinctAnswerLabels(answer: string): string[] {
  const parts = answer.split("|").map((p) => p.trim()).filter(Boolean);
  const groups: string[][] = [];

  for (const part of parts) {
    const group = groups.find((g) => g.some((x) => areSimilarAnswers(x, part)));
    if (group) group.push(part);
    else groups.push([part]);
  }

  return groups.map((g) => g.sort((a, b) => a.length - b.length)[0]!);
}

/** Vérifie une réponse saisie contre une liste d'acceptations séparées par | */
export function checkSpeedAnswer(input: string, answer: string): boolean {
  const user = normalize(stripArticles(input));
  if (!user) return false;

  const alternatives = answer.split("|").map((a) => normalize(stripArticles(a)));

  for (const alt of alternatives) {
    if (!alt) continue;
    if (user === alt) return true;

    const userNum = normalizeNumberToken(user);
    const altNum = normalizeNumberToken(alt);
    if (userNum === altNum) return true;

    if (/^\d+$/.test(altNum) && userNum.replace(/\D/g, "") === altNum) return true;

    if (alt.length >= 3 && user.includes(alt)) return true;
    if (user.length >= 4 && alt.includes(user)) return true;
  }

  return false;
}

export function getPrimarySpeedAnswer(answer: string) {
  const distinct = distinctAnswerLabels(answer);
  return distinct[0] ?? answer.split("|")[0]?.trim() ?? answer;
}

/** Indice textuel sans boutons — uniquement des réponses vraiment différentes */
export function getSpeedHint(answer: string): string | null {
  const distinct = distinctAnswerLabels(answer);
  if (distinct.length <= 1) return null;

  if (distinct.length === 2) {
    return `Plusieurs réponses possibles — ex. « ${distinct[0]} » ou « ${distinct[1]} »`;
  }

  const sample = [...distinct].sort(() => Math.random() - 0.5).slice(0, 3);
  return `Plusieurs réponses possibles — ex. ${sample.map((s) => `« ${s} »`).join(", ")}…`;
}
