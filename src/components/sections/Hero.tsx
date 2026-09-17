"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { useEffect, useState } from "react";

type HeroProps = {
  onInquiry?: () => void;
};

const statements = [
  "zum Erlebnis",
  "zur Tradition",
  "zum Moment",
];

export default function Hero({ onInquiry }: HeroProps) {
  const [statementIndex, setStatementIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setStatementIndex(
        (current) => (current + 1) % statements.length
      );
    }, 4200);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const animatedStatement = (
    <AnimatePresence initial={false}>
      <motion.span
        key={statements[statementIndex]}
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 38,
                filter: "blur(4px)",
              }
        }
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        exit={
          reduceMotion
            ? undefined
            : {
                opacity: 0,
                y: -38,
                filter: "blur(4px)",
              }
        }
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute whitespace-nowrap italic"
      >
        {statements[statementIndex]}
      </motion.span>
    </AnimatePresence>
  );

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#17100b] text-[var(--cream)]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/hero3.png"
          alt="Whisky und Zigarre"
          className="h-full w-full object-cover"
          style={{
            objectPosition: "center 52%",
          }}
        />

        <div className="absolute inset-0 bg-black/20 sm:bg-black/15" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 62% 64% at 50% 48%, transparent 0%, rgba(13,11,9,.05) 52%, rgba(13,11,9,.55) 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,11,9,.34) 0%, transparent 25%, transparent 62%, rgba(13,11,9,.78) 100%)",
          }}
        />
      </div>

      {/* BACKGROUND WORDMARK */}
      <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden">
        <span
          className="font-display select-none whitespace-nowrap font-semibold text-white/[0.07]"
          style={{
            fontSize: "clamp(8rem, 25vw, 26rem)",
            letterSpacing: "-0.055em",
            lineHeight: 0.8,
            transform: "translateY(-1%)",
          }}
        >
          UPHOFF
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div className="container-main relative z-10 min-h-[100svh]">
        {/* HERITAGE INFORMATION */}
        <div className="absolute left-1/2 top-[20%] flex w-full -translate-x-1/2 flex-col items-center gap-3 whitespace-nowrap sm:top-[27%]">
          <p className="eyebrow text-white/60">
            Minden, Westfalen · Est. 1978
          </p>

          <div className="flex items-center gap-4">
            <span className="hidden h-px w-8 bg-white/25 sm:block" />

            <p className="text-center text-[7px] uppercase tracking-[0.24em] text-white/40 sm:text-[9px] sm:tracking-[0.3em]">
              Zigarren · Whisky · Spirituosen · Tabakwaren
            </p>

            <span className="hidden h-px w-8 bg-white/25 sm:block" />
          </div>
        </div>

        {/* MOBILE STATEMENT */}
        <div className="absolute left-1/2 top-[46%] w-full -translate-x-1/2 -translate-y-1/2 text-center sm:hidden">
          <h1 className="font-display text-[clamp(3.65rem,17vw,5.5rem)] font-medium leading-[0.84] tracking-[-0.055em]">
            <span className="block">
              Wo Genuss
            </span>

            <span className="relative mt-[0.08em] block h-[0.9em]">
              <span
                aria-hidden="true"
                className="invisible italic"
              >
                zur Tradition
              </span>

              <span className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {animatedStatement}
              </span>
            </span>

            <span className="mt-[0.08em] block">
              wird.
            </span>
          </h1>
        </div>

        {/* TABLET + DESKTOP STATEMENT */}
        <div className="absolute left-1/2 top-[48%] hidden w-full max-w-[1200px] -translate-x-1/2 -translate-y-1/2 text-center sm:block">
          <h1
            className="font-display font-medium leading-[0.82] tracking-[-0.055em]"
            style={{
              fontSize:
                "clamp(4.5rem, 10.5vw, 10.5rem)",
            }}
          >
            <span className="block">
              Wo Genuss
            </span>

            <span className="relative block">
              <span
                aria-hidden="true"
                className="invisible italic"
              >
                zur Tradition wird.
              </span>

              <span className="absolute inset-0 flex items-center justify-center">
                <span className="relative inline-flex items-center">
                  <span
                    aria-hidden="true"
                    className="invisible whitespace-nowrap italic"
                  >
                    zur Tradition
                  </span>

                  <span className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    {animatedStatement}
                  </span>
                </span>

                <span className="ml-[0.18em]">
                  wird.
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* ACTIONS */}
        <div className="absolute bottom-[12%] left-1/2 flex -translate-x-1/2 flex-col items-center gap-5 sm:bottom-[17%] sm:flex-row sm:gap-9">
          <a
            href="#erlebnis"
            className="whitespace-nowrap bg-[var(--cream)] px-6 py-3.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)] transition-all duration-300 hover:bg-white sm:px-7 sm:py-4 sm:text-[9px] sm:tracking-[0.22em]"
          >
            Erlebnis entdecken
          </a>

          <button
            onClick={onInquiry}
            className="whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.22em] text-white/80 transition-colors hover:text-white sm:text-[9px] sm:tracking-[0.24em]"
          >
            Event anfragen
          </button>
        </div>

        {/* BOTTOM LEFT */}
        <div className="absolute bottom-5 left-0 hidden items-center gap-8 sm:flex md:bottom-7">
          <span className="text-[8px] uppercase tracking-[0.28em] text-white/30">
            Tabak Depot Uphoff
          </span>

          <span className="hidden text-[8px] uppercase tracking-[0.28em] text-white/30 md:inline">
            Genusskultur seit 1978
          </span>
        </div>

        {/* SCROLL MARKER */}
        <a
          href="#intro"
          className="group absolute bottom-0 right-0 hidden flex-col items-center sm:flex"
          aria-label="Zur nächsten Section scrollen"
        >
          <span
            className="mb-6 whitespace-nowrap text-[8px] uppercase tracking-[0.3em] text-white/40 transition-colors group-hover:text-white/70"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            Scroll to explore
          </span>

          <span className="mb-8 block h-16 w-px bg-white/30 transition-colors group-hover:bg-white/60" />
        </a>
      </div>
    </section>
  );
}