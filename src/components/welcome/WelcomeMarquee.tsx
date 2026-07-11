"use client";

const ITEMS = [ "Quiz biblique", "Étude personnelle", "Médiathèque JW", "Langues prédication", "Défi quotidien", "Texte du jour", "Mini-jeux", "Progression XP",
];

export function WelcomeMarquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__fade marquee__fade--left" />
      <div className="marquee__fade marquee__fade--right" />
      <div className="marquee__track">
        {track.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}
            <span />
          </span>
        ))}
      </div>
    </div>
  );
}
