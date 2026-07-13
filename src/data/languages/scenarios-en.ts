import type { DoorScenario } from "@/types/language";

export const EN_SCENARIOS: DoorScenario[] = [
  {
    id: "en-scenario-door",
    title: "À la porte — première visite",
    setting: "Porte-à-porte",
    lines: [
      {
        speaker: "vous",
        french: "Bonjour. Nous sommes les Témoins de Jéhovah.",
        target: "Hello. We are Jehovah's Witnesses.",
      },
      {
        speaker: "habitant",
        french: "Bonjour. Que puis-je faire pour vous ?",
        target: "Hello. What can I do for you?",
      },
      {
        speaker: "vous",
        french: "Nous rendons visite aux voisins pour partager un court message d'encouragement tiré de la Bible.",
        target: "We are visiting neighbors to share a brief message of encouragement from the Bible.",
      },
      {
        speaker: "habitant",
        french: "D'accord, je vous écoute.",
        target: "All right, I'm listening.",
      },
      {
        speaker: "vous",
        french: "Beaucoup se demandent pourquoi il y a tant de souffrance. La Bible donne une réponse claire.",
        target: "Many wonder why there is so much suffering. The Bible gives a clear answer.",
      },
    ],
  },
  {
    id: "en-scenario-busy",
    title: "Personne pressée",
    setting: "Situation courante",
    lines: [
      {
        speaker: "habitant",
        french: "Désolé, je suis pressé.",
        target: "Sorry, I'm in a hurry.",
      },
      {
        speaker: "vous",
        french: "Je comprends. Puis-je vous laisser ceci rapidement ?",
        target: "I understand. May I leave this with you quickly?",
      },
      {
        speaker: "habitant",
        french: "D'accord, merci.",
        target: "All right, thank you.",
      },
      {
        speaker: "vous",
        french: "Merci quand même. Passez une bonne journée.",
        target: "Thank you anyway. Have a good day.",
      },
    ],
  },
  {
    id: "en-scenario-intercom",
    title: "Interphone",
    setting: "Immeuble",
    lines: [
      {
        speaker: "vous",
        french: "Bonjour, nous sommes les Témoins de Jéhovah. Pouvons-nous vous parler un instant ?",
        target: "Hello, we are Jehovah's Witnesses. May we speak with you for a moment?",
      },
      {
        speaker: "habitant",
        french: "Je ne suis pas intéressé.",
        target: "I'm not interested.",
      },
      {
        speaker: "vous",
        french: "Je comprends. Merci d'avoir écouté.",
        target: "I understand. Thank you for listening.",
      },
    ],
  },
];
