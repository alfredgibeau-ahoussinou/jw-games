"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  UNDERCOVER_PAIRS,
  getRandomPair,
  type UndercoverPair,
} from "@/data/sample-undercover";
import {
  UNDERCOVER_CATEGORY_LABELS,
  UNDERCOVER_DIFFICULTY_LABELS,
  DISCUSSION_PRESETS,
  createPlayers,
  defaultPlayerNames,
  formatTimer,
  maxImpostors,
  pickDiscussionStarter,
  suggestedImpostorCount,
  tallyVotes,
  civiliansWin,
  type UndercoverPlayer,
} from "@/lib/undercover";
import { useUserStore } from "@/stores/user-store";
import { calcXp } from "@/lib/daily-challenges";
import {
  BookOpen,
  CheckCircle,
  ChevronRight,
  Dices,
  Eye,
  EyeOff,
  Hand,
  MessageCircle,
  Pause,
  Play,
  RotateCcw,
  Shield,
  Skull,
  Sparkles,
  Timer,
  Users,
  Vote,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/cn";

type Phase = "select" | "setup" | "dealing" | "discussion" | "voting" | "reveal";
type CategoryFilter = UndercoverPair["category"] | "all";
type DifficultyFilter = UndercoverPair["difficulty"] | "all";

const DIFFICULTY_VARIANT: Record<UndercoverPair["difficulty"], "success" | "warning" | "gold"> = {
  facile: "success",
  moyen: "warning",
  difficile: "gold",
};

export function UndercoverGame() {
  const recordGame = useUserStore((s) => s.recordGame);

  const [phase, setPhase] = useState<Phase>("select");
  const [pair, setPair] = useState<UndercoverPair>(UNDERCOVER_PAIRS[0]);
  const [players, setPlayers] = useState<UndercoverPlayer[]>([]);

  const [playerCount, setPlayerCount] = useState(5);
  const [playerNames, setPlayerNames] = useState<string[]>(() => defaultPlayerNames(5));
  const [impostorCount, setImpostorCount] = useState(1);
  const [autoImpostors, setAutoImpostors] = useState(true);
  const [discussionSeconds, setDiscussionSeconds] = useState<number>(120);
  const [discussionTime, setDiscussionTime] = useState(120);
  const [timerPaused, setTimerPaused] = useState(false);
  const [discussionStarter, setDiscussionStarter] = useState<UndercoverPlayer | null>(null);

  const [dealingIndex, setDealingIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [holding, setHolding] = useState(false);

  const [voteIndex, setVoteIndex] = useState(0);
  const [votes, setVotes] = useState<Record<number, number>>({});

  const [eliminatedId, setEliminatedId] = useState<number | null>(null);
  const [voteTied, setVoteTied] = useState(false);
  const [showSpoiler, setShowSpoiler] = useState(false);
  const [recorded, setRecorded] = useState(false);

  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>("all");

  const filteredPairs = useMemo(() => {
    return UNDERCOVER_PAIRS.filter((p) => {
      if (categoryFilter !== "all" && p.category !== categoryFilter) return false;
      if (difficultyFilter !== "all" && p.difficulty !== difficultyFilter) return false;
      return true;
    });
  }, [categoryFilter, difficultyFilter]);

  const effectiveImpostors = autoImpostors
    ? suggestedImpostorCount(playerCount)
    : Math.min(impostorCount, maxImpostors(playerCount));

  useEffect(() => {
    if (phase !== "discussion" || timerPaused) return;
    const timer = setInterval(() => {
      setDiscussionTime((t) => {
        if (t <= 1) {
          clearInterval(timer);
          setPhase("voting");
          setVoteIndex(0);
          setVotes({});
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, timerPaused]);

  const syncPlayerNames = useCallback((count: number) => {
    setPlayerNames((prev) => {
      const next = [...prev];
      while (next.length < count) next.push(`Joueur ${next.length + 1}`);
      return next.slice(0, count);
    });
  }, []);

  function selectPair(p: UndercoverPair) {
    setPair(p);
    setPhase("setup");
  }

  function pickRandomPair() {
    selectPair(
      getRandomPair({
        category: categoryFilter === "all" ? undefined : categoryFilter,
        difficulty: difficultyFilter === "all" ? undefined : difficultyFilter,
      })
    );
  }

  function startGame() {
    const roster = createPlayers(playerCount, playerNames, effectiveImpostors, pair);
    setPlayers(roster);
    setDealingIndex(0);
    setRevealed(false);
    setHolding(false);
    setDiscussionTime(discussionSeconds);
    setTimerPaused(false);
    setDiscussionStarter(pickDiscussionStarter(roster));
    setVoteIndex(0);
    setVotes({});
    setEliminatedId(null);
    setVoteTied(false);
    setShowSpoiler(false);
    setRecorded(false);
    setPhase("dealing");
  }

  function confirmWordSeen() {
    setRevealed(false);
    setHolding(false);
    if (dealingIndex < playerCount - 1) {
      setDealingIndex((i) => i + 1);
    } else {
      setPhase("discussion");
    }
  }

  function castVote(targetId: number) {
    const voter = players[voteIndex];
    if (!voter || targetId === voter.id) return;

    const nextVotes = { ...votes, [voter.id]: targetId };
    setVotes(nextVotes);

    if (voteIndex >= playerCount - 1) {
      const result = tallyVotes(nextVotes);
      setEliminatedId(result.eliminatedId);
      setVoteTied(result.tied);
      setPhase("reveal");

      if (!recorded && result.eliminatedId !== null) {
        const eliminated = players.find((p) => p.id === result.eliminatedId);
        const won = civiliansWin(eliminated);
        recordGame("undercover", won ? 1 : 0, 1, calcXp("undercover", won ? 1 : 0, 1));
        setRecorded(true);
      }
    } else {
      setVoteIndex((i) => i + 1);
    }
  }

  function resetToSelect() {
    setPhase("select");
    setPlayers([]);
  }

  const currentDealer = players[dealingIndex];
  const currentVoter = players[voteIndex];
  const eliminated = players.find((p) => p.id === eliminatedId);
  const civiliansVictory = civiliansWin(eliminated);
  const impostorIds = players.filter((p) => p.isImpostor).map((p) => p.id);
  const urgent = discussionTime <= 30;

  if (phase === "select") {
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <Card className="border-[var(--accent)]/20 bg-gradient-to-br from-[var(--bg-card)] to-violet-950/20">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-2xl">
              🕵️
            </span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Undercover biblique</h2>
              <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                Tous les civils reçoivent le même mot. L&apos;imposteur reçoit un mot proche mais
                différent. Décrivez, bluffez, votez — trouvez l&apos;intrus !
              </p>
            </div>
          </div>
        </Card>

        <div className="flex flex-wrap gap-2">
          {(["all", ...Object.keys(UNDERCOVER_CATEGORY_LABELS)] as CategoryFilter[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoryFilter(cat)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                categoryFilter === cat
                  ? "border-[var(--accent)] bg-[var(--accent-light)] text-[var(--accent)]"
                  : "border-white/[0.08] bg-white/[0.03] text-[var(--text-muted)] hover:border-white/15"
              )}
            >
              {cat === "all" ? "Toutes catégories" : UNDERCOVER_CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {(["all", "facile", "moyen", "difficile"] as DifficultyFilter[]).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDifficultyFilter(d)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                difficultyFilter === d
                  ? "border-[var(--accent)] bg-[var(--accent-light)] text-[var(--accent)]"
                  : "border-white/[0.08] bg-white/[0.03] text-[var(--text-muted)] hover:border-white/15"
              )}
            >
              {d === "all" ? "Toutes difficultés" : UNDERCOVER_DIFFICULTY_LABELS[d]}
            </button>
          ))}
        </div>

        <Button className="w-full" size="lg" onClick={pickRandomPair}>
          <Dices className="h-5 w-5" />
          Thème aléatoire
        </Button>

        <div className="grid gap-3 sm:grid-cols-2">
          {filteredPairs.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Card hover shine onClick={() => selectPair(p)} className="h-full cursor-pointer">
                <div className="flex h-full flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-2xl">{p.emoji}</span>
                    <Badge variant={DIFFICULTY_VARIANT[p.difficulty]}>
                      {UNDERCOVER_DIFFICULTY_LABELS[p.difficulty]}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                      {UNDERCOVER_CATEGORY_LABELS[p.category]}
                    </p>
                    <h3 className="mt-1 font-semibold tracking-tight">{p.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--text-muted)]">
                      {p.description}
                    </p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)]">
                    Jouer
                    <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPairs.length === 0 && (
          <p className="text-center text-sm text-[var(--text-muted)]">
            Aucun thème pour ces filtres.
          </p>
        )}
      </div>
    );
  }

  if (phase === "setup") {
    return (
      <div className="mx-auto max-w-lg space-y-5">
        <Card>
          <div className="flex items-start gap-3">
            <span className="text-3xl">{pair.emoji}</span>
            <div>
              <Badge variant="neon" className="mb-2">
                {pair.name}
              </Badge>
              <p className="text-sm text-[var(--text-muted)]">{pair.description}</p>
            </div>
          </div>
        </Card>

        <Card>
          <label className="mb-3 flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-[var(--text-muted)]">
              <Users className="h-4 w-4" />
              Joueurs
            </span>
            <span className="text-2xl font-bold text-[var(--accent)]">{playerCount}</span>
          </label>
          <input
            type="range"
            min={3}
            max={12}
            value={playerCount}
            onChange={(e) => {
              const n = Number(e.target.value);
              setPlayerCount(n);
              syncPlayerNames(n);
              if (autoImpostors) setImpostorCount(suggestedImpostorCount(n));
            }}
            className="w-full accent-[var(--accent)]"
          />
          <div className="mt-2 flex justify-between text-xs text-[var(--text-dim)]">
            <span>3</span>
            <span>12</span>
          </div>
        </Card>

        <Card>
          <p className="mb-3 flex items-center gap-2 text-sm font-medium">
            <Skull className="h-4 w-4 text-violet-400" />
            Imposteurs
          </p>
          <label className="mb-3 flex cursor-pointer items-center gap-2 text-sm text-[var(--text-muted)]">
            <input
              type="checkbox"
              checked={autoImpostors}
              onChange={(e) => {
                setAutoImpostors(e.target.checked);
                if (e.target.checked) setImpostorCount(suggestedImpostorCount(playerCount));
              }}
              className="accent-[var(--accent)]"
            />
            Nombre automatique ({suggestedImpostorCount(playerCount)} pour {playerCount} joueurs)
          </label>
          {!autoImpostors && (
            <div className="flex gap-2">
              {Array.from({ length: maxImpostors(playerCount) }, (_, i) => i + 1).map((n) => (
                <Button
                  key={n}
                  variant={impostorCount === n ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setImpostorCount(n)}
                >
                  {n}
                </Button>
              ))}
            </div>
          )}
        </Card>

        <Card>
          <p className="mb-3 flex items-center gap-2 text-sm font-medium">
            <Timer className="h-4 w-4 text-[var(--accent)]" />
            Temps de discussion
          </p>
          <div className="flex flex-wrap gap-2">
            {DISCUSSION_PRESETS.map((sec) => (
              <Button
                key={sec}
                size="sm"
                variant={discussionSeconds === sec ? "primary" : "outline"}
                onClick={() => setDiscussionSeconds(sec)}
              >
                {sec / 60} min
              </Button>
            ))}
          </div>
        </Card>

        <Card>
          <p className="mb-3 text-sm font-medium">Prénoms (optionnel)</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {playerNames.map((name, i) => (
              <input
                key={i}
                value={name}
                onChange={(e) => {
                  const next = [...playerNames];
                  next[i] = e.target.value;
                  setPlayerNames(next);
                }}
                placeholder={`Joueur ${i + 1}`}
                className="rounded-lg border border-white/[0.08] bg-[var(--bg-elevated)] px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
              />
            ))}
          </div>
        </Card>

        <Card className="border-emerald-500/20 bg-emerald-950/10">
          <p className="flex items-center gap-2 text-xs leading-relaxed text-[var(--text-muted)]">
            <Shield className="h-4 w-4 shrink-0 text-emerald-400" />
            Les mots restent secrets jusqu&apos;à la révélation finale. Passez l&apos;appareil en
            privé à chaque joueur.
          </p>
        </Card>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={() => setPhase("select")}>
            Retour
          </Button>
          <Button className="flex-1" size="lg" onClick={startGame}>
            Distribuer les mots
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "dealing" && currentDealer) {
    const showWord = revealed || holding;

    return (
      <div className="mx-auto max-w-md space-y-5">
        <div className="flex justify-center gap-1">
          {players.map((p, i) => (
            <div
              key={p.id}
              title={p.name}
              className={cn(
                "h-2 flex-1 max-w-8 rounded-full transition-all",
                i < dealingIndex ? "bg-[var(--accent)]/50" : i === dealingIndex ? "bg-[var(--accent)]" : "bg-white/10"
              )}
            />
          ))}
        </div>

        <p className="text-center text-sm text-[var(--text-muted)]">
          <span className="font-semibold text-[var(--text)]">{currentDealer.name}</span>
          <br />
          <span className="text-xs">Passez l&apos;appareil à cette personne uniquement</span>
        </p>

        <motion.div
          key={`${dealingIndex}-${showWord}`}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <Card
            glow
            shine
            className="min-h-[300px] select-none"
            onPointerDown={() => !showWord && setHolding(true)}
            onPointerUp={() => setHolding(false)}
            onPointerLeave={() => setHolding(false)}
            onContextMenu={(e) => e.preventDefault()}
          >
            {showWord ? (
              <div className="flex min-h-[260px] flex-col items-center justify-center py-4 text-center">
                <p className="mb-2 text-sm text-[var(--text-muted)]">Votre mot secret</p>
                <p className="text-4xl font-black tracking-tight text-[var(--accent)] sm:text-5xl">
                  {currentDealer.word}
                </p>
                {currentDealer.isImpostor ? (
                  <Badge variant="warning" className="mt-5">
                    <Skull className="mr-1 h-3 w-3" />
                    Vous êtes l&apos;imposteur — bluffez !
                  </Badge>
                ) : (
                  <Badge variant="success" className="mt-5">
                    <Shield className="mr-1 h-3 w-3" />
                    Mot des civils
                  </Badge>
                )}
                <p className="mt-4 max-w-xs text-xs leading-relaxed text-[var(--text-dim)]">
                  {currentDealer.isImpostor
                    ? pair.impostor.hints[0]
                    : pair.civilian.hints[0]}
                </p>
              </div>
            ) : (
              <div className="flex min-h-[260px] flex-col items-center justify-center gap-4">
                <motion.div
                  animate={{ scale: holding ? 1.05 : [1, 1.06, 1] }}
                  transition={{ duration: holding ? 0.15 : 2, repeat: holding ? 0 : Infinity }}
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent-light)]"
                >
                  <Hand className="h-9 w-9 text-[var(--accent)]" />
                </motion.div>
                <p className="font-medium text-[var(--text-muted)]">Maintenez pour révéler</p>
                <Button variant="ghost" size="sm" onClick={() => setRevealed(true)}>
                  <Eye className="h-4 w-4" />
                  Révéler (accessibilité)
                </Button>
              </div>
            )}
          </Card>
        </motion.div>

        {showWord && (
          <Button className="w-full" size="lg" onClick={confirmWordSeen}>
            {dealingIndex < playerCount - 1 ? (
              <>
                Mot mémorisé — joueur suivant
                <ChevronRight className="h-5 w-5" />
              </>
            ) : (
              "Lancer la discussion"
            )}
          </Button>
        )}
      </div>
    );
  }

  if (phase === "discussion") {
    return (
      <div className="mx-auto max-w-md space-y-5">
        <Card className="text-center">
          <MessageCircle className="mx-auto mb-3 h-10 w-10 text-[var(--accent)]" />
          <p className="text-xl font-bold">Discussion</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            Décrivez votre mot sans le prononcer. Posez des questions. Repérez celui qui hésite ou
            se contredit.
          </p>

          {discussionStarter && (
            <p className="mt-4 rounded-lg bg-[var(--accent-light)] px-4 py-2 text-sm">
              <Sparkles className="mr-1 inline h-4 w-4 text-[var(--accent)]" />
              Commence : <strong>{discussionStarter.name}</strong>
            </p>
          )}

          <motion.p
            key={discussionTime}
            animate={{ scale: urgent ? [1, 1.04, 1] : 1 }}
            transition={{ duration: 0.5, repeat: urgent ? Infinity : 0 }}
            className={cn("mt-6 text-5xl font-black tabular-nums", urgent ? "text-danger" : "text-[var(--accent)]")}
          >
            {formatTimer(discussionTime)}
          </motion.p>
        </Card>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
            Rappel des règles
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-[var(--text-muted)]">
            <li>• Les civils ont tous le même mot.</li>
            <li>• L&apos;imposteur a un mot proche mais différent.</li>
            <li>• Votez pour éliminer le suspect à la fin.</li>
            <li>• Civils gagnent si un imposteur est éliminé.</li>
          </ul>
        </Card>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" onClick={() => setTimerPaused((p) => !p)}>
            {timerPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            {timerPaused ? "Reprendre" : "Pause"}
          </Button>
          <Button className="flex-1" size="lg" onClick={() => { setPhase("voting"); setVoteIndex(0); setVotes({}); }}>
            <Vote className="h-5 w-5" />
            Passer au vote
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "voting" && currentVoter) {
    return (
      <div className="mx-auto max-w-md space-y-5">
        <div className="text-center">
          <p className="text-xl font-bold">Vote secret</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            <span className="font-semibold text-[var(--text)]">{currentVoter.name}</span> — qui
            suspectez-vous ?
          </p>
          <p className="mt-1 text-xs text-[var(--text-dim)]">
            Vote {voteIndex + 1} / {playerCount}
          </p>
        </div>

        <Card className="border-amber-500/20 bg-amber-950/10 text-center text-xs text-[var(--text-muted)]">
          Passez l&apos;appareil à {currentVoter.name} sans montrer les votes précédents.
        </Card>

        <div className="grid gap-2">
          {players.map((p) => {
            const isSelf = p.id === currentVoter.id;
            return (
              <Button
                key={p.id}
                variant="outline"
                disabled={isSelf}
                onClick={() => castVote(p.id)}
                className={cn("h-14 justify-start px-5 text-base", isSelf && "opacity-40")}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] text-sm font-bold">
                  {p.id + 1}
                </span>
                <span className="ml-3">{p.name}</span>
                {isSelf && <span className="ml-auto text-xs text-[var(--text-dim)]">Vous</span>}
              </Button>
            );
          })}
        </div>
      </div>
    );
  }

  if (phase === "reveal") {
    const voteCounts = tallyVotes(votes).counts;

    return (
      <div className="mx-auto max-w-lg space-y-5">
        <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <Card
            glow
            className={cn(
              "py-8 text-center",
              civiliansVictory ? "border-emerald-400/40" : "border-red-400/40"
            )}
          >
            <p className="text-5xl">{civiliansVictory ? "🎉" : "😈"}</p>
            <p className="mt-3 text-2xl font-bold text-[var(--accent)]">
              {civiliansVictory ? "Les civils gagnent !" : "Les imposteurs gagnent !"}
            </p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {eliminated
                ? `${eliminated.name} a été éliminé${eliminated.isImpostor ? " — c'était un imposteur" : " — c'était un civil"}`
                : "Aucun vote enregistré"}
            </p>
            {voteTied && (
              <p className="mt-2 text-xs text-amber-400">Égalité au vote — tirage au sort.</p>
            )}
          </Card>
        </motion.div>

        <Card>
          <p className="mb-3 text-sm font-semibold">Résultat des votes</p>
          <ul className="space-y-2">
            {players.map((p) => (
              <li
                key={p.id}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2 text-sm",
                  p.id === eliminatedId ? "bg-red-500/10 ring-1 ring-red-500/30" : "bg-white/[0.03]"
                )}
              >
                <span>{p.name}</span>
                <span className="font-semibold tabular-nums">{voteCounts[p.id] ?? 0} vote(s)</span>
              </li>
            ))}
          </ul>
        </Card>

        <Button variant="ghost" size="sm" className="mx-auto" onClick={() => setShowSpoiler(!showSpoiler)}>
          {showSpoiler ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {showSpoiler ? "Masquer les rôles" : "Révéler mots et rôles"}
        </Button>

        <AnimatePresence>
          {showSpoiler && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4 overflow-hidden"
            >
              <Card>
                <div className="mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[var(--accent)]" />
                  <span className="font-semibold">Mot des civils</span>
                </div>
                <p className="text-3xl font-bold text-[var(--accent)]">{pair.civilian.word}</p>
                <ul className="mt-3 space-y-1 text-sm text-[var(--text-muted)]">
                  {pair.civilian.hints.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-[var(--text-dim)]">
                  <BookOpen className="h-3.5 w-3.5" />
                  {pair.civilian.reference}
                </p>
              </Card>

              <Card className="border-violet-500/20">
                <div className="mb-4 flex items-center gap-2">
                  <Skull className="h-5 w-5 text-violet-400" />
                  <span className="font-semibold">Mot de l&apos;imposteur</span>
                </div>
                <p className="text-3xl font-bold text-violet-300">{pair.impostor.word}</p>
                <ul className="mt-3 space-y-1 text-sm text-[var(--text-muted)]">
                  {pair.impostor.hints.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-[var(--text-dim)]">
                  <BookOpen className="h-3.5 w-3.5" />
                  {pair.impostor.reference}
                </p>
              </Card>

              <Card>
                <p className="mb-3 text-sm font-semibold">Rôles des joueurs</p>
                <ul className="space-y-2">
                  {players.map((p) => (
                    <li
                      key={p.id}
                      className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2 text-sm"
                    >
                      <span>{p.name}</span>
                      <span className="flex items-center gap-2">
                        <span className="text-[var(--text-muted)]">{p.word}</span>
                        {p.isImpostor ? (
                          <Badge variant="warning">Imposteur</Badge>
                        ) : (
                          <Badge variant="success">Civil</Badge>
                        )}
                        {impostorIds.includes(p.id) && p.id === eliminatedId && (
                          <XCircle className="h-4 w-4 text-danger" aria-hidden />
                        )}
                        {!p.isImpostor && p.id === eliminatedId && (
                          <XCircle className="h-4 w-4 text-danger" aria-hidden />
                        )}
                        {p.isImpostor && p.id !== eliminatedId && (
                          <CheckCircle className="h-4 w-4 text-violet-400" aria-hidden />
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" className="flex-1" onClick={startGame}>
            <RotateCcw className="h-4 w-4" />
            Rejouer ({pair.name})
          </Button>
          <Button className="flex-1" onClick={resetToSelect}>
            Nouveau thème
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
