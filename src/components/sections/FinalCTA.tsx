"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

type FinalCTAProps = {
  onInquiry?: () => void;
};

export default function FinalCTA({
  onInquiry,
}: FinalCTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [38, 0, -24]
  );

  const glowY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["12%", "-10%"]
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--cream)] px-4 pb-4 md:px-6 md:pb-6"
    >
      <div className="relative overflow-hidden bg-[#17130f] px-6 py-24 text-center text-[var(--cream)] md:py-36">
        {/* VERY SUBTLE LIGHT */}
        <motion.div
          style={{ y: glowY }}
          className="pointer-events-none absolute inset-x-0 bottom-[-45%] mx-auto aspect-square w-[80%] max-w-[1000px] rounded-full"
        >
          <div
            className="absolute inset-0 opacity-[0.055]"
            style={{
              background:
                "radial-gradient(circle, #fff 0%, rgba(255,255,255,.3) 24%, transparent 68%)",
            }}
          />
        </motion.div>

        {/* SMALL TOP DETAIL */}
        <div className="absolute left-1/2 top-0 h-12 w-px bg-white/15" />

        {/* CONTENT */}
        <motion.div
          style={{ y: contentY }}
          className="relative z-10 mx-auto max-w-5xl"
        >
          <p className="eyebrow mb-7 text-white/35">
            Ihr Event · Ihr Erlebnis
          </p>

          <h2
            className="font-display font-medium leading-[0.88] tracking-[-0.045em]"
            style={{
              fontSize: "clamp(4rem, 8vw, 8rem)",
            }}
          >
            Was dürfen wir
            <br />
            für Sie{" "}
            <span className="italic text-white/55">
              vorbereiten?
            </span>
          </h2>

          <p className="mx-auto mt-9 max-w-lg text-sm leading-6 text-white/45">
            Erzählen Sie uns kurz von Ihrem Anlass. Wir melden uns mit einer
            persönlichen Empfehlung für Zigarren, Service und auf Wunsch das
            passende Whisky-Pairing.
          </p>

          <button
            onClick={onInquiry}
            className="group mt-10 inline-flex items-center gap-5 bg-[var(--cream)] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--ink)] transition-colors duration-300 hover:bg-white"
          >
            Unverbindlich anfragen

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </button>
        </motion.div>

        {/* BOTTOM EDITORIAL DETAIL */}
        <div className="absolute bottom-6 left-6 right-6 hidden items-center gap-5 md:flex">
          <span className="text-[8px] uppercase tracking-[0.28em] text-white/20">
            Tabak Depot Uphoff
          </span>

          <span className="h-px flex-1 bg-white/10" />

          <span className="text-[8px] uppercase tracking-[0.28em] text-white/20">
            Minden · Seit 1978
          </span>
        </div>
      </div>
    </section>
  );
}