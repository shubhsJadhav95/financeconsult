"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

/* ─── Expert data ─── */
const EXPERTS = [
  { name: "Ishika Shetty", role: "Senior Tax Expert",    photo: "/img/expert/expert1.jpg",      rating: 4.9, exp: 9 },
  { name: "Nikhil Desai",  role: "Chartered Accountant", photo: "/img/expert/expert2.jpg", rating: 5.0, exp: 8 },
  { name: "Rohan Iyer",    role: "Senior Tax Advisor",   photo: "/img/expert/expert3.jpg",   rating: 4.7, exp: 7 },
  { name: "Arvina Sharma", role: "CA · Tax Specialist",  photo: "/img/expert/expert4.jpg",    rating: 4.8, exp: 6 },
  { name: "Rahul Verma",   role: "ITR Filing Expert",    photo: "/img/expert/expert5.jpg",   rating: 4.6, exp: 5 },
];

/* ─── Card dimensions ─── */
const CW = 120; // card width
const CH = 165; // card height

type Phase = "idle" | "spinning" | "settled";

/* ─────────────────────────────────────────
   Compute each card's transform for each phase.
   All positions are RELATIVE to the container's
   center-bottom anchor — no absolute pixel coords
   that could overflow.
───────────────────────────────────────── */
function getTransforms(
  phase: Phase,
  idx: number,
  count: number,
  winnerIdx: number,
  spinAngle: number, // 0→1 progress during spin
) {
  const mid  = Math.floor(count / 2);
  const diff = idx - winnerIdx;

  if (phase === "idle") {
    return { x: 0, y: 0, rotate: 0, scale: 0.6, opacity: 0 };
  }

  if (phase === "spinning") {
    // Arc: fan cards around a center point (not bottom)
    const fanSpread  = 30; // degrees between cards
    const fanOffset  = -(mid * fanSpread);
    const deg        = fanOffset + idx * fanSpread + spinAngle * 720;
    const rad        = (deg * Math.PI) / 180;
    const arcR       = 110; // arc radius in px
    const x          = arcR * Math.sin(rad);
    const y          = arcR * (1 - Math.cos(rad)) - arcR; // center the arc
    return { x, y, rotate: deg, scale: 0.82, opacity: 1 };
  }

  // settled
  const spread = 148; // px between settled side cards
  const x      = diff * spread;
  const y      = Math.abs(diff) === 0 ? -10 : Math.abs(diff) * 14;
  const rotate = diff * 12;
  const scale  = diff === 0 ? 1.05 : Math.max(0.78 - Math.abs(diff) * 0.08, 0.55);
  const opacity= diff === 0 ? 1     : Math.max(0.80 - Math.abs(diff) * 0.15, 0.35);

  return { x, y, rotate, scale, opacity };
}

export default function ExpertMatch() {
  const prefersReduced = useReducedMotion();
  const [phase,     setPhase]     = useState<Phase>("idle");
  const [spinProg,  setSpinProg]  = useState(0);  // 0→1
  const [winner,    setWinner]    = useState(1);
  const rafRef  = useRef<number | null>(null);
  const startTs = useRef<number | null>(null);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;

    function cycle() {
      const next = Math.floor(Math.random() * EXPERTS.length);

      if (prefersReduced) {
        setWinner(next); setPhase("settled");
        t3 = setTimeout(() => { setPhase("idle"); t1 = setTimeout(cycle, 500); }, 4500);
        return;
      }

      setSpinProg(0);
      setPhase("spinning");
      startTs.current = null;
      const DURATION = 2600;

      function tick(now: number) {
        if (!startTs.current) startTs.current = now;
        const elapsed  = now - startTs.current;
        const raw      = Math.min(elapsed / DURATION, 1);
        const eased    = 1 - Math.pow(1 - raw, 3);
        setSpinProg(eased);

        if (raw < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setWinner(next);
          setPhase("settled");
          t2 = setTimeout(() => {
            setPhase("idle");
            t3 = setTimeout(cycle, 600);
          }, 4200);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    t1 = setTimeout(cycle, 800);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const winnerExpert = EXPERTS[winner];
  const count        = EXPERTS.length;

  return (
    /* Outer card — fixed height, clips children */
    <div className="bg-[#f0f4ff] rounded-3xl p-6 flex flex-col" style={{ minHeight: 460 }}>

      {/* Heading */}
      <div className="text-center mb-3">
        <h3 className="text-xl font-extrabold text-[#1a1f5e] mb-1.5">Instant Expert Match</h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Senior tax expert assigned within the hour. No queues.
        </p>
      </div>

      {/* Matched badges */}
      <div className="flex gap-2 justify-center mb-3 min-h-[28px]">
        <AnimatePresence>
          {phase === "settled" && (
            <motion.div
              key="badges"
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}
              className="flex gap-2 flex-wrap justify-center"
            >
              <span className="bg-[#d8f3dc] text-[#1a5c38] text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none">
                  <path d="M2 5l2.5 2.5 4-4" stroke="#1a5c38" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                Matched
              </span>
              <span className="bg-white text-[#3b5bdb] text-[11px] font-bold px-3 py-1 rounded-full border border-blue-100">
                {winnerExpert.exp}+ Yrs Exp
              </span>
              <span className="bg-amber-400 text-[#1a1f5e] text-[11px] font-bold px-3 py-1 rounded-full">
                ★ {winnerExpert.rating}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Stage: CLIPS overflow ── */}
      <div
        className="flex-1 relative overflow-hidden rounded-2xl"
        style={{ minHeight: 280 }}
      >
        {/* Cards — all positioned from the center of the stage */}
        {EXPERTS.map((expert, i) => {
          const tf = getTransforms(phase, i, count, winner, spinProg);
          const isWinner = i === winner && phase === "settled";

          const transition =
            phase === "spinning"
              ? { duration: 2.6, ease: [0.16, 1, 0.3, 1] }
              : phase === "settled"
              ? {
                  type: "spring" as const,
                  stiffness: 220,
                  damping: 24,
                  delay: isWinner ? 0 : Math.abs(i - winner) * 0.04,
                }
              : { duration: 0.25 };

          return (
            <motion.div
              key={expert.name}
              animate={{
                x: tf.x,
                y: tf.y,
                rotate: tf.rotate,
                scale: tf.scale,
                opacity: tf.opacity,
              }}
              transition={transition}
              style={{
                position: "absolute",
                /* Anchor to bottom-center of stage */
                bottom: 24,
                left: `calc(50% - ${CW / 2}px)`,
                width: CW,
                height: CH,
                borderRadius: 18,
                overflow: "hidden",
                transformOrigin: "bottom center",
                zIndex: isWinner ? 30 : 15 - Math.abs(i - winner),
                boxShadow: isWinner
                  ? "0 16px 48px rgba(59,91,219,.22), 0 4px 12px rgba(0,0,0,.10)"
                  : "0 4px 18px rgba(0,0,0,.13)",
              }}
            >
              {/* Background — green for winner, light grey otherwise */}
              <motion.div
                animate={{ backgroundColor: isWinner ? "#d8f3dc" : "#e8eaf0" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              />

              {/* Photo */}
              <div className="absolute inset-0">
                <Image
                  src={expert.photo}
                  alt={expert.name}
                  fill
                  className="object-cover object-top"
                  sizes="130px"
                />
              </div>

              {/* Bottom gradient + info */}
              <div
                className="absolute bottom-0 left-0 right-0 px-2.5 pb-2.5 pt-7"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,15,40,.90) 0%, rgba(10,15,40,.18) 65%, transparent 100%)",
                }}
              >
                {/* Name + tick */}
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="text-white font-bold text-[11px] truncate leading-tight">
                    {expert.name}
                  </span>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#3b5bdb] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 10 10" fill="none" className="w-2 h-2">
                      <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <p className="text-white/60 text-[9px] truncate mb-1.5">{expert.role}</p>

                {/* Pills */}
                <div className="flex gap-1">
                  <span className="bg-white/15 text-white text-[8px] font-semibold px-1.5 py-0.5 rounded-full whitespace-nowrap backdrop-blur-sm">
                    {expert.exp}+ Yrs
                  </span>
                  <span className="bg-amber-400 text-[#1a1f5e] text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                    ★ {expert.rating}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* "Analysing..." text */}
        <AnimatePresence>
          {phase === "spinning" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
              className="absolute bottom-3 left-0 right-0 text-center text-[12px] text-gray-400 font-medium pointer-events-none"
            >
              Analysing your profile...
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
