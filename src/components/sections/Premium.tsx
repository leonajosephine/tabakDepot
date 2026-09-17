"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

type PremiumExperienceProps = {
  onInquiry?: (packageId?: string) => void;
};

export default function Premium({
  onInquiry,
}: PremiumExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /*
   * BACKGROUND
   *
   * Stronger parallax than before.
   * The oversized image gives us enough room
   * to move it without exposing its edges.
   */
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion
      ? ["0%", "0%"]
      : ["-10%", "10%"]
  );

  /*
   * The image slowly pulls back while scrolling.
   * This makes the movement feel more like a
   * camera move than a simple translated image.
   */
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion
      ? [1.08, 1.08, 1.08]
      : [1.14, 1.08, 1.03]
  );

  /*
   * Very subtle brightness change.
   * The image becomes a little clearer around
   * the centre of the section.
   */
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.75, 1],
    reduceMotion
      ? [1, 1, 1, 1]
      : [0.82, 1, 1, 0.88]
  );

  /*
   * CONTENT
   *
   * Moves independently from the background,
   * creating the second depth layer.
   */
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    reduceMotion
      ? [0, 0, 0]
      : [95, 0, -70]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.3, 0.82, 0.98],
    reduceMotion
      ? [1, 1, 1, 1]
      : [0.45, 1, 1, 0.65]
  );

  /*
   * LARGE 03
   *
   * This is allowed to move more strongly because
   * it is decorative and creates the foreground layer.
   */
  const numberY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion
      ? [0, 0]
      : [150, -120]
  );

  const numberX = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion
      ? [0, 0]
      : [35, -20]
  );

  /*
   * Small movement for the horizontal details at
   * the bottom. Different speed = more depth.
   */
  const detailsY = useTransform(
    scrollYProgress,
    [0.2, 0.6, 1],
    reduceMotion
      ? [0, 0, 0]
      : [35, 0, -18]
  );

  return (
    <section
      ref={sectionRef}
      id="private-service"
      className="relative min-h-[900px] overflow-hidden bg-[#0d0b09] text-[var(--cream)]"
    >
      {/* BACKGROUND IMAGE */}
      <motion.img
        src="https://images.unsplash.com/photo-1612659429327-8f59b894959b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Persönlicher Sommelier bei einem Zigarren-Event"
        style={{
          y: imageY,
          scale: imageScale,
          opacity: imageOpacity,
        }}
        className="absolute -inset-y-[12%] left-0 h-[124%] w-full object-cover will-change-transform"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/35" />

      {/* LEFT CONTENT GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(12,10,8,.96) 0%, rgba(12,10,8,.78) 38%, rgba(12,10,8,.34) 68%, rgba(12,10,8,.12) 100%)",
        }}
      />

      {/* BOTTOM GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(12,10,8,.62) 0%, transparent 42%)",
        }}
      />

      {/* LARGE MOVING 03 */}
      <motion.p
        style={{
          y: numberY,
          x: numberX,
          fontSize:
            "clamp(10rem, 24vw, 24rem)",
        }}
        className="pointer-events-none absolute -bottom-[4vw] right-[-1vw] select-none font-display font-semibold leading-none text-white/[0.055] will-change-transform"
      >
        03
      </motion.p>

      {/* CONTENT */}
      <div className="container-main relative z-10 flex min-h-[900px] items-center py-24">
        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
          className="w-full max-w-[1000px] will-change-transform"
        >
          {/* LABEL */}
          <div className="mb-10 flex items-center gap-5">
            <span className="eyebrow text-white/45">
              Option 03
            </span>

            <span className="h-px w-16 bg-white/30" />

            <span className="eyebrow text-white/45">
              Private Service
            </span>
          </div>

          {/* HEADLINE */}
          <h2
            className="font-display font-medium leading-[0.84] tracking-[-0.05em]"
            style={{
              fontSize:
                "clamp(4.5rem, 9vw, 9rem)",
            }}
          >
            Ein Abend,
            <br />

            <span className="italic">
              der bleibt.
            </span>
          </h2>

          {/* INFORMATION */}
          <div className="mt-14 grid max-w-4xl gap-10 border-t border-white/20 pt-8 md:grid-cols-2">
            <div>
              <p className="eyebrow mb-5 text-white/35">
                Persönliche Begleitung
              </p>

              <p className="font-display text-3xl font-medium leading-[1.05] md:text-4xl">
                Mit persönlichem
                <br />
                Sommelier.
              </p>
            </div>

            <div>
              <p className="text-sm leading-6 text-white/55">
                Unser Sommelier begleitet Ihr Event
                persönlich, berät Ihre Gäste bei der
                Auswahl und führt auf Wunsch durch die
                Welt der Zigarren – vom passenden
                Format bis zum richtigen Genuss.
              </p>

              <p className="mt-4 text-sm leading-6 text-white/55">
                Auf Wunsch ergänzen wir das Erlebnis
                um ein individuell abgestimmtes
                Whisky-Pairing.
              </p>

              <button
                onClick={() =>
                  onInquiry?.("premium")
                }
                className="mt-9 bg-[var(--cream)] px-6 py-3.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--ink)] transition-all duration-300 hover:bg-white"
              >
                Private Service anfragen
              </button>
            </div>
          </div>

          {/* DETAILS */}
          <motion.div
            style={{
              y: detailsY,
            }}
            className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-5"
          >
            <span className="text-[8px] uppercase tracking-[0.26em] text-white/30">
              Beratung
            </span>

            <span className="text-[8px] uppercase tracking-[0.26em] text-white/30">
              Präsentation
            </span>

            <span className="text-[8px] uppercase tracking-[0.26em] text-white/30">
              Begleitung
            </span>

            <span className="text-[8px] uppercase tracking-[0.26em] text-white/30">
              Whisky Pairing
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}