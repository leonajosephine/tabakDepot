"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 15%"],
  });

  const lineOneX = useTransform(
    scrollYProgress,
    [0, 0.28, 1],
    reduceMotion ? [0, 0, 0] : [-78, 0, 34]
  );

  const lineTwoX = useTransform(
    scrollYProgress,
    [0, 0.28, 1],
    reduceMotion ? [0, 0, 0] : [-92, 0, 42]
  );

  const lineThreeX = useTransform(
    scrollYProgress,
    [0, 0.28, 1],
    reduceMotion ? [0, 0, 0] : [-68, 0, 50]
  );

  const headlineY = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    reduceMotion ? [0, 0, 0] : [22, 0, -20]
  );

  const headlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.14],
    reduceMotion ? [1, 1] : [0.55, 1]
  );

  const labelY = useTransform(
    scrollYProgress,
    [0, 0.28, 1],
    reduceMotion ? [0, 0, 0] : [28, 0, -12]
  );

  const labelOpacity = useTransform(
    scrollYProgress,
    [0, 0.18],
    reduceMotion ? [1, 1] : [0, 1]
  );

  const verticalLineScale = useTransform(
    scrollYProgress,
    [0.08, 0.3],
    reduceMotion ? [1, 1] : [0, 1]
  );

  const editorialY = useTransform(
    scrollYProgress,
    [0.16, 0.42, 1],
    reduceMotion ? [0, 0, 0] : [62, 0, -22]
  );

  const editorialOpacity = useTransform(
    scrollYProgress,
    [0.16, 0.36],
    reduceMotion ? [1, 1] : [0, 1]
  );

  const bottomLineScale = useTransform(
    scrollYProgress,
    [0.3, 0.62],
    reduceMotion ? [1, 1] : [0, 1]
  );

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="relative overflow-hidden bg-[var(--cream)] py-20 text-[var(--ink)] md:py-28 lg:py-44"
    >
      <div className="container-main">
        <div className="grid lg:grid-cols-12">
          {/* META */}
          <motion.div
            style={{
              y: labelY,
              opacity: labelOpacity,
            }}
            className="lg:col-span-3"
          >
            <p className="eyebrow text-[var(--muted-dark)]">
              Über uns · seit 1978
            </p>

            <div className="mt-8 hidden lg:block">
              <motion.span
                style={{ scaleY: verticalLineScale }}
                className="block h-16 w-px origin-top bg-[var(--line-dark)]"
              />

              <p className="mt-4 text-[8px] uppercase leading-5 tracking-[0.28em] text-[var(--muted-dark)]">
                Minden
              </p>
            </div>
          </motion.div>

          {/* MOBILE HEADLINE */}
          <div className="mt-9 lg:hidden">
            <h2 className="font-display text-[clamp(3.35rem,14.5vw,5.3rem)] font-medium leading-[0.88] tracking-[-0.05em]">
              <span className="block">Eine gute Zigarre</span>
              <span className="block">kauft man nicht nur.</span>
              <span className="block italic text-[var(--muted-dark)]">
                Man erlebt sie.
              </span>
            </h2>
          </div>

          {/* DESKTOP HEADLINE */}
          <motion.div
            style={{
              y: headlineY,
              opacity: headlineOpacity,
            }}
            className="hidden lg:col-span-9 lg:block"
          >
            <h2
              className="font-display font-medium leading-[0.86] tracking-[-0.05em]"
              style={{ fontSize: "clamp(4rem, 8vw, 8rem)" }}
            >
              <motion.span style={{ x: lineOneX }} className="block">
                Eine gute Zigarre
              </motion.span>

              <motion.span style={{ x: lineTwoX }} className="block">
                kauft man nicht nur.
              </motion.span>

              <motion.span
                style={{ x: lineThreeX }}
                className="block italic text-[var(--muted-dark)]"
              >
                Man erlebt sie.
              </motion.span>
            </h2>
          </motion.div>
        </div>

        {/* MOBILE HISTORY */}
        <div className="mt-14 border-t border-[var(--line-dark)] pt-6 lg:hidden">
          <p className="text-[8px] uppercase tracking-[0.28em] text-[var(--muted-dark)]">
            Unsere Geschichte
          </p>

          <p className="mt-3 font-display text-2xl italic">
            Gewachsen in Minden
          </p>

          <p className="mt-8 font-display text-[28px] font-medium leading-[1.08] tracking-[-0.02em]">
            Vom Fachgeschäft
            <br />
            zum besonderen
            <br />
            Genusserlebnis.
          </p>

          <p className="mt-7 text-[14px] leading-7 text-[var(--muted-dark)]">
            Seit 1978 steht Tabak Depot Uphoff in Minden für
            persönliche Beratung, ausgewählte Zigarren und
            besondere Spirituosen.
          </p>

          <AnimatePresence initial={false}>
            {mobileExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden"
              >
                <div className="pt-5">
                  <p className="text-[14px] leading-7 text-[var(--muted-dark)]">
                    Über die Jahre ist aus dem Fachgeschäft eine
                    Genussadresse mit heute drei Standorten in
                    Minden geworden.
                  </p>

                  <p className="mt-5 text-[14px] leading-7 text-[var(--muted-dark)]">
                    Gleichzeitig hat sich auch unser Angebot
                    weiterentwickelt: Mit individuell
                    zusammengestellten Paketen und persönlichem
                    Event-Service bringen wir unsere Erfahrung
                    heute auch direkt zu besonderen Anlässen und
                    Veranstaltungen.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setMobileExpanded((value) => !value)}
            aria-expanded={mobileExpanded}
            className="group mt-6 inline-flex items-center gap-3 text-[8px] font-medium uppercase tracking-[0.22em]"
          >
            {mobileExpanded ? "Weniger anzeigen" : "Mehr lesen"}

            <span
              className={`transition-transform duration-300 ${
                mobileExpanded ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>

        {/* DESKTOP EDITORIAL INFORMATION */}
        <motion.div
          style={{
            y: editorialY,
            opacity: editorialOpacity,
          }}
          className="mt-24 hidden gap-12 border-t border-[var(--line-dark)] pt-7 lg:grid lg:grid-cols-12"
        >
          <div className="lg:col-span-2">
            <p className="text-[8px] uppercase tracking-[0.28em] text-[var(--muted-dark)]">
              Unsere Geschichte
            </p>

            <p className="mt-3 font-display text-2xl italic">
              Gewachsen in Minden
            </p>

            <p className="mt-7 text-[9px] uppercase leading-5 tracking-[0.22em] text-[var(--muted-dark)]/60">
              Drei Standorte
              <br />
              in Minden
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-5">
            <p className="font-display text-[28px] font-medium leading-[1.08] tracking-[-0.02em]">
              Vom Fachgeschäft
              <br />
              zum besonderen
              <br />
              Genusserlebnis.
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[14px] leading-7 text-[var(--muted-dark)]">
              Seit 1978 steht Tabak Depot Uphoff in Minden für persönliche
              Beratung, ausgewählte Zigarren und besondere Spirituosen. Über
              die Jahre ist aus dem Fachgeschäft eine Genussadresse mit heute
              drei Standorten in Minden geworden.
            </p>

            <p className="mt-5 text-[14px] leading-7 text-[var(--muted-dark)]">
              Gleichzeitig hat sich auch unser Angebot weiterentwickelt: Mit
              individuell zusammengestellten Paketen und persönlichem
              Event-Service bringen wir die Erfahrung aus unseren Depots heute
              auch direkt zu besonderen Anlässen und Veranstaltungen.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 flex items-center gap-5 overflow-hidden lg:mt-20">
          <motion.span
            style={{ scaleX: bottomLineScale }}
            className="h-px flex-1 origin-left bg-[var(--line-dark)]"
          />

          <motion.span
            style={{ opacity: editorialOpacity }}
            className="whitespace-nowrap text-[7px] uppercase tracking-[0.22em] text-[var(--muted-dark)] sm:text-[8px] sm:tracking-[0.3em]"
          >
            Seit 1978 · Drei Standorte · Event-Service
          </motion.span>
        </div>
      </div>
    </section>
  );
}