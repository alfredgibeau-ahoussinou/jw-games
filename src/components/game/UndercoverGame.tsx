"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

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
      <div>
        <Card>
          <div>
            <span>
              🕵️
            </span>
            <div>
              <h2>Undercover biblique</h2>
              <p>
                Tous les civils reçoivent le même mot. L&apos;imposteur reçoit un mot proche mais
                différent. Décrivez, bluffez, votez — trouvez l&apos;intrus !
              </p>
            </div>
          </div>
        </Card>

        <div>
          {(["all", ...Object.keys(UNDERCOVER_CATEGORY_LABELS)] as CategoryFilter[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoryFilter(cat)}
            >
              {cat === "all" ? "Toutes catégories" : UNDERCOVER_CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        <div>
          {(["all", "facile", "moyen", "difficile"] as DifficultyFilter[]).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDifficultyFilter(d)}
            >
              {d === "all" ? "Toutes difficultés" : UNDERCOVER_DIFFICULTY_LABELS[d]}
            </button>
          ))}
        </div>

        <Button size="lg" onClick={pickRandomPair}>
          <Dices />
          Thème aléatoire
        </Button>

        <div>
          {filteredPairs.map((p, i) => (
            <div
              key={p.id}
            >
              <Card hover shine onClick={() => selectPair(p)}>
                <div>
                  <div>
                    <span>{p.emoji}</span>
                    <Badge variant={DIFFICULTY_VARIANT[p.difficulty]}>
                      {UNDERCOVER_DIFFICULTY_LABELS[p.difficulty]}
                    </Badge>
                  </div>
                  <div>
                    <p>
                      {UNDERCOVER_CATEGORY_LABELS[p.category]}
                    </p>
                    <h3>{p.name}</h3>
                    <p>
                      {p.description}
                    </p>
                  </div>
                  <span>
                    Jouer
                    <ChevronRight />
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {filteredPairs.length === 0 && (
          <p>
            Aucun thème pour ces filtres.
          </p>
        )}
      </div>
    );
  }

  if (phase === "setup") {
    return (
      <div>
        <Card>
          <div>
            <span>{pair.emoji}</span>
            <div>
              <Badge variant="neon">
                {pair.name}
              </Badge>
              <p>{pair.description}</p>
            </div>
          </div>
        </Card>

        <Card>
          <label>
            <span>
              <Users />
              Joueurs
            </span>
            <span>{playerCount}</span>
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
          />
          <div>
            <span>3</span>
            <span>12</span>
          </div>
        </Card>

        <Card>
          <p>
            <Skull />
            Imposteurs
          </p>
          <label>
            <input
              type="checkbox"
              checked={autoImpostors}
              onChange={(e) => {
                setAutoImpostors(e.target.checked);
                if (e.target.checked) setImpostorCount(suggestedImpostorCount(playerCount));
              }}
            />
            Nombre automatique ({suggestedImpostorCount(playerCount)} pour {playerCount} joueurs)
          </label>
          {!autoImpostors && (
            <div>
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
          <p>
            <Timer />
            Temps de discussion
          </p>
          <div>
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
          <p>Prénoms (optionnel)</p>
          <div>
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
              />
            ))}
          </div>
        </Card>

        <Card>
          <p>
            <Shield />
            Les mots restent secrets jusqu&apos;à la révélation finale. Passez l&apos;appareil en
            privé à chaque joueur.
          </p>
        </Card>

        <div>
          <Button variant="outline" onClick={() => setPhase("select")}>
            Retour
          </Button>
          <Button size="lg" onClick={startGame}>
            Distribuer les mots
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "dealing" && currentDealer) {
    const showWord = revealed || holding;

    return (
      <div>
        <div>
          {players.map((p, i) => (
            <div
              key={p.id}
              title={p.name}
            />
          ))}
        </div>

        <p>
          <span>{currentDealer.name}</span>
          <br />
          <span>Passez l&apos;appareil à cette personne uniquement</span>
        </p>

        <div
          key={`${dealingIndex}-${showWord}`}
        >
          <Card
            glow
            shine
            onPointerDown={() => !showWord && setHolding(true)}
            onPointerUp={() => setHolding(false)}
            onPointerLeave={() => setHolding(false)}
            onContextMenu={(e) => e.preventDefault()}
          >
            {showWord ? (
              <div>
                <p>Votre mot secret</p>
                <p>
                  {currentDealer.word}
                </p>
                {currentDealer.isImpostor ? (
                  <Badge variant="warning">
                    <Skull />
                    Vous êtes l&apos;imposteur — bluffez !
                  </Badge>
                ) : (
                  <Badge variant="success">
                    <Shield />
                    Mot des civils
                  </Badge>
                )}
                <p>
                  {currentDealer.isImpostor
                    ? pair.impostor.hints[0]
                    : pair.civilian.hints[0]}
                </p>
              </div>
            ) : (
              <div>
                <div
                >
                  <Hand />
                </div>
                <p>Maintenez pour révéler</p>
                <Button variant="ghost" size="sm" onClick={() => setRevealed(true)}>
                  <Eye />
                  Révéler (accessibilité)
                </Button>
              </div>
            )}
          </Card>
        </div>

        {showWord && (
          <Button size="lg" onClick={confirmWordSeen}>
            {dealingIndex < playerCount - 1 ? (
              <>
                Mot mémorisé — joueur suivant
                <ChevronRight />
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
      <div>
        <Card>
          <MessageCircle />
          <p>Discussion</p>
          <p>
            Décrivez votre mot sans le prononcer. Posez des questions. Repérez celui qui hésite ou
            se contredit.
          </p>

          {discussionStarter && (
            <p>
              <Sparkles />
              Commence : <strong>{discussionStarter.name}</strong>
            </p>
          )}

          <p
            key={discussionTime}
          >
            {formatTimer(discussionTime)}
          </p>
        </Card>

        <Card>
          <p>
            Rappel des règles
          </p>
          <ul>
            <li>• Les civils ont tous le même mot.</li>
            <li>• L&apos;imposteur a un mot proche mais différent.</li>
            <li>• Votez pour éliminer le suspect à la fin.</li>
            <li>• Civils gagnent si un imposteur est éliminé.</li>
          </ul>
        </Card>

        <div>
          <Button variant="outline" onClick={() => setTimerPaused((p) => !p)}>
            {timerPaused ? <Play /> : <Pause />}
            {timerPaused ? "Reprendre" : "Pause"}
          </Button>
          <Button size="lg" onClick={() => { setPhase("voting"); setVoteIndex(0); setVotes({}); }}>
            <Vote />
            Passer au vote
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "voting" && currentVoter) {
    return (
      <div>
        <div>
          <p>Vote secret</p>
          <p>
            <span>{currentVoter.name}</span> — qui
            suspectez-vous ?
          </p>
          <p>
            Vote {voteIndex + 1} / {playerCount}
          </p>
        </div>

        <Card>
          Passez l&apos;appareil à {currentVoter.name} sans montrer les votes précédents.
        </Card>

        <div>
          {players.map((p) => {
            const isSelf = p.id === currentVoter.id;
            return (
              <Button
                key={p.id}
                variant="outline"
                disabled={isSelf}
                onClick={() => castVote(p.id)}
              >
                <span>
                  {p.id + 1}
                </span>
                <span>{p.name}</span>
                {isSelf && <span>Vous</span>}
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
      <div>
        <div>
          <Card
            glow
          >
            <p>{civiliansVictory ? "🎉" : "😈"}</p>
            <p>
              {civiliansVictory ? "Les civils gagnent !" : "Les imposteurs gagnent !"}
            </p>
            <p>
              {eliminated
                ? `${eliminated.name} a été éliminé${eliminated.isImpostor ? " — c'était un imposteur" : " — c'était un civil"}`
                : "Aucun vote enregistré"}
            </p>
            {voteTied && (
              <p>Égalité au vote — tirage au sort.</p>
            )}
          </Card>
        </div>

        <Card>
          <p>Résultat des votes</p>
          <ul>
            {players.map((p) => (
              <li
                key={p.id}
              >
                <span>{p.name}</span>
                <span>{voteCounts[p.id] ?? 0} vote(s)</span>
              </li>
            ))}
          </ul>
        </Card>

        <Button variant="ghost" size="sm" onClick={() => setShowSpoiler(!showSpoiler)}>
          {showSpoiler ? <EyeOff /> : <Eye />}
          {showSpoiler ? "Masquer les rôles" : "Révéler mots et rôles"}
        </Button>

        <>
          {showSpoiler && (
            <div
            >
              <Card>
                <div>
                  <Shield />
                  <span>Mot des civils</span>
                </div>
                <p>{pair.civilian.word}</p>
                <ul>
                  {pair.civilian.hints.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
                <p>
                  <BookOpen />
                  {pair.civilian.reference}
                </p>
              </Card>

              <Card>
                <div>
                  <Skull />
                  <span>Mot de l&apos;imposteur</span>
                </div>
                <p>{pair.impostor.word}</p>
                <ul>
                  {pair.impostor.hints.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
                <p>
                  <BookOpen />
                  {pair.impostor.reference}
                </p>
              </Card>

              <Card>
                <p>Rôles des joueurs</p>
                <ul>
                  {players.map((p) => (
                    <li
                      key={p.id}
                    >
                      <span>{p.name}</span>
                      <span>
                        <span>{p.word}</span>
                        {p.isImpostor ? (
                          <Badge variant="warning">Imposteur</Badge>
                        ) : (
                          <Badge variant="success">Civil</Badge>
                        )}
                        {impostorIds.includes(p.id) && p.id === eliminatedId && (
                          <XCircle aria-hidden />
                        )}
                        {!p.isImpostor && p.id === eliminatedId && (
                          <XCircle aria-hidden />
                        )}
                        {p.isImpostor && p.id !== eliminatedId && (
                          <CheckCircle aria-hidden />
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )}
        </>

        <div>
          <Button variant="outline" onClick={startGame}>
            <RotateCcw />
            Rejouer ({pair.name})
          </Button>
          <Button onClick={resetToSelect}>
            Nouveau thème
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
