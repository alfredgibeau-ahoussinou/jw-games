export interface DailyTextQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/** Texte du jour officiel (JW.org / Bibliothèque en ligne) */
export interface JwDailyText {
  date: string;
  heading: string;
  scripture: string;
  scriptureReference: string;
  commentary: string;
  commentarySource: string;
  publicationTitle: string;
  wolUrl: string;
  jwOrgUrl: string;
  questions: DailyTextQuestion[];
}
