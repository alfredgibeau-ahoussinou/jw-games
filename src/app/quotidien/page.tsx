"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Flame, CheckCircle, Circle, Gift } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { DAILY_CHALLENGE_BONUS } from "@/lib/constants";
import { DAILY_TASKS, DAILY_THRESHOLDS } from "@/lib/daily-challenges";
import { resetDailyIfNeeded } from "@/lib/db/types";
import { useUserStore } from "@/stores/user-store";

export default function QuotidienPage() {
  const { profile, dailyProgress, claimDailyReward } = useUserStore();
  const progress = resetDailyIfNeeded(dailyProgress);

  const allDone = DAILY_TASKS.every((t) => progress.tasks[t.id]);
  const canClaim = allDone && !progress.claimed;
  const doneCount = DAILY_TASKS.filter((t) => progress.tasks[t.id]).length;

  const [dateLabel, setDateLabel] = useState("");
  useEffect(() => {
    setDateLabel(
      new Date().toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    );
  }, []);

  return (
    <PageWrapper>
      <Container narrow>
        <PageHeader
          title="Défi du jour"
          description={
            dateLabel
              ? `${dateLabel} — complétez 4 missions pour gagner +${DAILY_CHALLENGE_BONUS} XP.`
              : `Complétez 4 missions pour gagner +${DAILY_CHALLENGE_BONUS} XP.`
          }
        />

        {profile && (
          <Card className="mb-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-caption">Série</p>
                <p className="text-2xl font-bold text-warning tabular-nums">
                  {profile.streak} <span className="text-base font-medium">jours</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-caption">Aujourd&apos;hui</p>
                <p className="text-2xl font-bold text-[var(--accent)] tabular-nums">
                  {doneCount}/{DAILY_TASKS.length}
                </p>
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--surface-subtle)]" role="progressbar" aria-valuenow={doneCount} aria-valuemin={0} aria-valuemax={DAILY_TASKS.length}>
              <motion.div
                className="h-full bg-[var(--accent)]"
                animate={{ width: `${(doneCount / DAILY_TASKS.length) * 100}%` }}
              />
            </div>
          </Card>
        )}

        <Card className="mb-6">
          <h2 className="text-heading mb-4">Missions</h2>
          <ul className="space-y-3">
            {DAILY_TASKS.map((task) => {
              const done = Boolean(progress.tasks[task.id]);
              const count = progress.counts?.[task.id] ?? 0;
              const threshold = DAILY_THRESHOLDS[task.id];
              return (
                <li key={task.id}>
                  <Link
                    href={task.href}
                    className="flex min-h-[3.75rem] items-center justify-between gap-3 rounded-xl border border-[var(--border)] px-4 py-3.5 transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent-light)]"
                  >
                    <div className="flex items-center gap-3">
                      {done ? (
                        <CheckCircle className="h-5 w-5 shrink-0 text-success" aria-hidden />
                      ) : (
                        <Circle className="h-5 w-5 shrink-0 text-[var(--text-dim)]" aria-hidden />
                      )}
                      <div>
                        <span className={done ? "text-[var(--text-muted)] line-through" : "font-medium"}>
                          {task.label}
                        </span>
                        {!done && (
                          <p className="text-caption mt-0.5 tabular-nums">
                            {Math.min(count, threshold)} / {threshold}
                          </p>
                        )}
                      </div>
                    </div>
                    <Badge variant={done ? "success" : "default"}>{done ? "Fait" : "À faire"}</Badge>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card className="text-center">
          <div className="mb-4 flex items-center justify-center gap-2 text-warning">
            <Gift className="h-5 w-5" aria-hidden />
            <span className="font-semibold">+{DAILY_CHALLENGE_BONUS} XP bonus</span>
          </div>

          {progress.claimed ? (
            <p className="flex items-center justify-center gap-2 text-success">
              <CheckCircle className="h-5 w-5" aria-hidden />
              Récompense réclamée — à demain !
            </p>
          ) : (
            <Button className="w-full min-h-12" size="lg" disabled={!canClaim} onClick={claimDailyReward}>
              {canClaim ? "Réclamer la récompense" : `Encore ${DAILY_TASKS.length - doneCount} mission(s)`}
            </Button>
          )}
        </Card>

        {!profile && (
          <p className="mt-6 text-center text-caption">
            <Link href="/profil" className="link-primary">
              Créez un profil
            </Link>{" "}
            pour suivre votre série.
          </p>
        )}
      </Container>
    </PageWrapper>
  );
}
