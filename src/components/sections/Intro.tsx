"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 15%"],
  });

  /*
   * HEADLINE
   *
   * All lines travel in the same direction.
   * The distances differ just enough to create a subtle
   * editorial depth while still reading as one composition.
   */
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

  /*
   * A very small vertical movement keeps the typography
   * connected to the scroll without making it float around.
   */
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

  /*
   * LEFT META
   */
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

  /*
   * LOWER EDITORIAL CONTENT
   *
   * This section only moves vertically so the headline
   * remains the single source of horizontal motion.
   */
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
      className="relative overflow-hidden bg-[var(--cream)] py-24 text-[var(--ink)] md:py-36 lg:py-44"
    >
      <div className="container-main">
        {/* TOP EDITORIAL COMPOSITION */}
        <div className="grid lg:grid-cols-12">
          {/* LEFT META */}
          <motion.div
            style={{
              y: labelY,
              opacity: labelOpacity,
            }}
            className="lg:col-span-3"
          >
            <p className="eyebrow text-[var(--muted-dark)]">
              Mehr als ein Fachgeschäft
            </p>

            <div className="mt-8 hidden lg:block">
              <motion.span
                style={{
                  scaleY: verticalLineScale,
                }}
                className="block h-16 w-px origin-top bg-[var(--line-dark)]"
              />

              <p className="mt-4 text-[8px] uppercase leading-5 tracking-[0.28em] text-[var(--muted-dark)]">
                Minden
                <br />
                seit 1978
              </p>
            </div>
          </motion.div>

          {/* HEADLINE */}
          <motion.div
            style={{
              y: headlineY,
              opacity: headlineOpacity,
            }}
            className="mt-10 lg:col-span-9 lg:mt-0"
          >
            <h2
              className="font-display font-medium leading-[0.86] tracking-[-0.05em]"
              style={{
                fontSize: "clamp(4rem, 8vw, 8rem)",
              }}
            >
              <motion.span
                style={{ x: lineOneX }}
                className="block"
              >
                Eine gute Zigarre
              </motion.span>

              <motion.span
                style={{ x: lineTwoX }}
                className="block"
              >
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

        {/* LOWER EDITORIAL INFORMATION */}
        <motion.div
          style={{
            y: editorialY,
            opacity: editorialOpacity,
          }}
          className="mt-24 grid gap-12 border-t border-[var(--line-dark)] pt-7 lg:grid-cols-12"
        >
          {/* CHAPTER */}
          <div className="lg:col-span-2">
            <p className="text-[8px] uppercase tracking-[0.28em] text-[var(--muted-dark)]">
              Chapter 01
            </p>

            <p className="mt-3 font-display text-2xl italic">
              Genusskultur
            </p>

            <p className="mt-7 text-[9px] uppercase leading-5 tracking-[0.22em] text-[var(--muted-dark)]/60">
              Seit 1978
              <br />
              drei Standorte
              <br />
              in Minden
            </p>
          </div>

          {/* STATEMENT */}
          <div className="lg:col-span-3 lg:col-start-5">
            <p className="font-display text-[28px] font-medium leading-[1.08] tracking-[-0.02em]">
              Persönliche Beratung.
              <br />
              Ausgewählte Produkte.
              <br />
              Besondere Momente.
            </p>
          </div>

          {/* COPY */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[14px] leading-7 text-[var(--muted-dark)]">
              Tabak Depot Uphoff verbindet seit 1978 die Welt ausgewählter
              Zigarren und Spirituosen mit persönlicher Beratung und einem
              besonderen Event-Service.
            </p>

            <p className="mt-5 text-[14px] leading-7 text-[var(--muted-dark)]">
              Heute sind wir an drei Standorten in Minden für unsere Kunden da
              – und bringen diese Genusskultur auf Wunsch auch direkt zu Ihrer
              Veranstaltung.
            </p>
          </div>
        </motion.div>

        {/* BOTTOM MARKER */}
        <div className="mt-20 flex items-center gap-5 overflow-hidden">
          <motion.span
            style={{
              scaleX: bottomLineScale,
            }}
            className="h-px flex-1 origin-left bg-[var(--line-dark)]"
          />

          <motion.span
            style={{
              opacity: editorialOpacity,
            }}
            className="whitespace-nowrap text-[8px] uppercase tracking-[0.3em] text-[var(--muted-dark)]"
          >
            Minden · Tradition & Genuss
          </motion.span>
        </div>
      </div>
    </section>
  );
}