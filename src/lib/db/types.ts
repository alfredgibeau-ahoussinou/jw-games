export interface DailyProgress {
  date: string;
  tasks: Record<string, boolean>;
  counts: Record<string, number>;
  claimed: boolean;
  dailyTextQuizXp?: boolean;
  videoQuizXpIds?: string[];
}

export function emptyDailyProgress(): DailyProgress {
  return {
    date: new Date().toISOString().slice(0, 10),
    tasks: {},
    counts: {},
    claimed: false,
    dailyTextQuizXp: false,
    videoQuizXpIds: [],
  };
}

export function todayDateString() {
  return new Date().toISOString().slice(0, 10);
}

export function resetDailyIfNeeded(progress: DailyProgress): DailyProgress {
  const today = todayDateString();
  if (progress.date !== today) return emptyDailyProgress();
  return {
    date: progress.date,
    tasks: progress.tasks ?? {},
    counts: progress.counts ?? {},
    claimed: progress.claimed ?? false,
    dailyTextQuizXp: progress.dailyTextQuizXp ?? false,
    videoQuizXpIds: progress.videoQuizXpIds ?? [],
  };
}
