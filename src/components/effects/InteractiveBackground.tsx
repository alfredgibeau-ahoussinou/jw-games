"use client";

import { useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CONSTELLATIONS = [
  { x1: 12, y1: 18, x2: 28, y2: 8, x3: 35, y3: 22 },
  { x1: 72, y1: 12, x2: 88, y2: 20, x3: 82, y3: 35 },
  { x1: 45, y1: 55, x2: 58, y2: 48, x3: 52, y3: 68, x4: 38, y4: 62 },
  { x1: 8, y1: 72, x2: 22, y2: 78, x3: 18, y3: 88 },
  { x1: 78, y1: 68, x2: 92, y2: 75, x3: 85, y3: 88 },
];

export function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 35, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 30 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: `${(i * 41 + 7) % 100}%`,
        top: `${(i * 67 + 13) % 100}%`,
        size: i % 7 === 0 ? 2.5 : i % 3 === 0 ? 1.5 : 1,
        delay: (i % 11) * 0.35,
        bright: i % 5 === 0,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden animate-drift" aria-hidden>
      {/* Constellations SVG */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.12]" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4a843" stopOpacity="0" />
            <stop offset="50%" stopColor="#d4a843" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#d4a843" stopOpacity="0" />
          </linearGradient>
        </defs>
        {CONSTELLATIONS.map((c, i) => {
          const pts = [
            [c.x1, c.y1],
            [c.x2, c.y2],
            ...(c.x3 != null ? [[c.x3, c.y3!]] : []),
            ...(c.x4 != null ? [[c.x4, c.y4!]] : []),
          ] as [number, number][];
          return (
            <g key={i}>
              {pts.slice(0, -1).map((p, j) => (
                <line
                  key={j}
                  x1={`${p[0]}%`}
                  y1={`${p[1]}%`}
                  x2={`${pts[j + 1][0]}%`}
                  y2={`${pts[j + 1][1]}%`}
                  stroke="url(#lineGrad)"
                  strokeWidth="0.5"
                />
              ))}
              {pts.map((p, j) => (
                <circle key={j} cx={`${p[0]}%`} cy={`${p[1]}%`} r="1.5" fill="#f0d078" opacity="0.5" />
              ))}
            </g>
          );
        })}
      </svg>

      {/* Halo lapis */}
      <motion.div
        className="absolute -top-1/4 right-1/4 h-[600px] w-[600px] rounded-full blur-[100px] animate-aurora"
        style={{ background: "radial-gradient(circle, rgba(58,82,148,0.15) 0%, transparent 70%)" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full blur-[80px] animate-aurora"
        style={{
          background: "radial-gradient(circle, rgba(184,137,42,0.08) 0%, transparent 70%)",
          animationDelay: "7s",
        }}
      />

      {/* Étoiles */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full animate-star"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            background: s.bright ? "#f0d078" : "#a89578",
            animationDelay: `${s.delay}s`,
            animationDuration: `${2.5 + (s.id % 4)}s`,
          }}
        />
      ))}

      {/* Lueur curseur */}
      <motion.div
        className="absolute rounded-full blur-[80px]"
        style={{
          width: 320,
          height: 320,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(184,137,42,0.07) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
