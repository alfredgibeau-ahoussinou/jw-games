"use client";


import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle, Circle, Gift, Flame } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SafeImage } from "@/components/ui/SafeImage";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { DAILY_CHALLENGE_BONUS } from "@/lib/constants";
import { DAILY_THRESHOLDS, getDailyTasksForUser } from "@/lib/daily-challenges";
import { resetDailyIfNeeded } from "@/lib/db/types";
import { jwImageForDailyTask, jwImageForSlot } from "@/lib/jw-images";
import { useUserStore } from "@/stores/user-store";
import { DailyTextSection } from "@/components/daily/DailyTextSection";
import { WeeklyMeetingSection } from "@/components/study/WeeklyMeetingSection";

export default function QuotidienPage() {
  const { profile, dailyProgress, claimDailyReward } = useUserStore();
  const progress = resetDailyIfNeeded(dailyProgress);
  const dailyTasks = getDailyTasksForUser(profile?.preferences);

  const allDone = dailyTasks.every((t) => progress.tasks[t.id]);
  const canClaim = allDone && !progress.claimed;
  const doneCount = dailyTasks.filter((t) => progress.tasks[t.id]).length;

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
      <StudioPageShell>
        <PageHeader
          title="Défi du"
          titleAccent="jour"
          description={
            dateLabel
              ? `${dateLabel} — ${dailyTasks.length} missions · +${DAILY_CHALLENGE_BONUS} XP bonus`
              : `${dailyTasks.length} missions · +${DAILY_CHALLENGE_BONUS} XP bonus`
          }
          icon={Flame}
          heroImage={jwImageForSlot("hero.quotidien").url}
          heroImageAlt={jwImageForSlot("hero.quotidien").alt}
          eyebrow="Quotidien"
        />

        <StudioPageBody narrow>

        {profile && (
          <Card glow={doneCount === dailyTasks.length}>
            <div>
              <div>
                <p>Série</p>
                <p>
                  {profile.streak} <span>jours</span>
                </p>
              </div>
              <div>
                <p>Aujourd&apos;hui</p>
                <p>
                  {doneCount}/{dailyTasks.length}
                </p>
              </div>
            </div>
            <ProgressBar value={doneCount} max={dailyTasks.length} variant="gold" />
          </Card>
        )}

        <Card>
          <h2>Missions</h2>
          <ul>
            {dailyTasks.map((task) => {
              const done = Boolean(progress.tasks[task.id]);
              const count = progress.counts?.[task.id] ?? 0;
              const threshold = DAILY_THRESHOLDS[task.id];
              const img = jwImageForDailyTask(task.id);

              return (
                <li
                  key={task.id}
                >
                  <Link
                    href={task.href}
                  >
                    <div>
                      <SafeImage
                        src={img.url}
                        alt=""
                        fill
                        sizes="56px"
                      />
                      <div />
                      <span aria-hidden>
                        {task.icon}
                      </span>
                    </div>
                    <div>
                      <div>
                        <span
                        >
                          {task.label}
                        </span>
                        <Badge variant={done ? "success" : "default"}>{done ? "Fait" : "À faire"}</Badge>
                      </div>
                      {!done && (
                        <p>
                          {Math.min(count, threshold)} / {threshold} {task.unit}
                        </p>
                      )}
                    </div>
                    {done ? (
                      <CheckCircle aria-hidden />
                    ) : (
                      <Circle aria-hidden />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Card>

        <Card glow={canClaim}>
          <div>
            <Gift aria-hidden />
            <span>+{DAILY_CHALLENGE_BONUS} XP bonus</span>
          </div>

          {progress.claimed ? (
            <p>
              <CheckCircle aria-hidden />
              Récompense réclamée — à demain !
            </p>
          ) : (
            <Button
              size="lg"
              variant="glow"
              disabled={!canClaim}
              onClick={claimDailyReward}
            >
              {canClaim ? "Réclamer la récompense" : `Encore ${dailyTasks.length - doneCount} mission(s)`}
            </Button>
          )}
        </Card>

        <DailyTextSection />

        <WeeklyMeetingSection />

        {!profile && (
          <p>
            <Link href="/profil">
              Créez un profil
            </Link>{" "}
            pour suivre votre série.
          </p>
        )}
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}
