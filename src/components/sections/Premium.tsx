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

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-10%", "10%"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion
      ? [1.08, 1.08, 1.08]
      : [1.14, 1.08, 1.03]
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.28, 0.75, 1],
    reduceMotion ? [1, 1, 1, 1] : [0.82, 1, 1, 0.88]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    reduceMotion ? [0, 0, 0] : [95, 0, -70]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.3, 0.82, 0.98],
    reduceMotion ? [1, 1, 1, 1] : [0.45, 1, 1, 0.65]
  );

  const numberY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [150, -120]
  );

  const numberX = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [35, -20]
  );

  const detailsY = useTransform(
    scrollYProgress,
    [0.2, 0.6, 1],
    reduceMotion ? [0, 0, 0] : [35, 0, -18]
  );

  return (
    <section
      ref={sectionRef}
      id="private-service"
      className="relative min-h-[820px] overflow-hidden bg-[#0d0b09] text-[var(--cream)] lg:min-h-[900px]"
    >
      <motion.img
        src="https://images.unsplash.com/photo-1612659429327-8f59b894959b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Persönlicher Sommelier bei einem Zigarren-Event"
        style={{
          y: imageY,
          scale: imageScale,
          opacity: imageOpacity,
        }}
        className="absolute -inset-y-[12%] left-0 h-[124%] w-full object-cover object-[58%_center] will-change-transform lg:object-center"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(12,10,8,.96) 0%, rgba(12,10,8,.78) 38%, rgba(12,10,8,.34) 68%, rgba(12,10,8,.12) 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(12,10,8,.62) 0%, transparent 42%)",
        }}
      />

      <motion.p
        style={{
          y: numberY,
          x: numberX,
          fontSize: "clamp(10rem, 24vw, 24rem)",
        }}
        className="pointer-events-none absolute -bottom-[4vw] right-[-1vw] select-none font-display font-semibold leading-none text-white/[0.055] will-change-transform"
      >
        03
      </motion.p>

      <div className="container-main relative z-10 flex min-h-[820px] items-center py-20 lg:min-h-[900px] lg:py-24">
        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
          className="w-full max-w-[1000px] will-change-transform"
        >
          <div className="mb-8 flex items-center gap-4 lg:mb-10 lg:gap-5">
            <span className="eyebrow text-white/45">
              Option 03
            </span>

            <span className="h-px w-10 bg-white/30 lg:w-16" />

            <span className="eyebrow text-white/45">
              Premium-Paket
            </span>
          </div>

          <h2
            className="font-display font-medium leading-[0.84] tracking-[-0.05em]"
            style={{
              fontSize: "clamp(4rem, 9vw, 9rem)",
            }}
          >
            Ein Abend,
            <br />
            <span className="italic">der bleibt.</span>
          </h2>

          <div className="mt-10 grid max-w-4xl gap-7 border-t border-white/20 pt-7 md:grid-cols-2 lg:mt-14 lg:gap-10 lg:pt-8">
            <div>
              <p className="eyebrow mb-5 text-white/35">
                Persönliche Begleitung
              </p>

              <p className="font-display text-[2rem] font-medium leading-[1.05] md:text-4xl">
                Persönlich begleitet.
                <br />
                Mit Sommelier.
              </p>
            </div>

            <div>
              {/* MOBILE COPY */}
              <div className="md:hidden">
                <p className="text-[13px] leading-6 text-white/55">
                  Unser Personal begleitet Ihre Veranstaltung vor
                  Ort und kümmert sich gemeinsam mit dem Sommelier
                  um Auswahl, Präsentation und Ihre Gäste.
                </p>

                <p className="mt-3 text-[13px] leading-6 text-white/55">
                  Ein abgestimmtes Whisky-Pairing kann das Erlebnis
                  ergänzen.
                </p>
              </div>

              {/* TABLET + DESKTOP COPY */}
              <div className="hidden md:block">
                <p className="text-sm leading-6 text-white/55">
                  Bei unserem Premium-Paket ist unser Personal
                  während Ihrer Veranstaltung vor Ort, betreut Ihre
                  Gäste und kümmert sich um das Zigarrenerlebnis –
                  von der Präsentation bis zur passenden Auswahl.
                </p>

                <p className="mt-4 text-sm leading-6 text-white/55">
                  Ein Sommelier begleitet das Erlebnis persönlich
                  vor Ort. Ergänzend kann ein individuell
                  abgestimmtes Whisky-Pairing zusammengestellt
                  werden.
                </p>
              </div>

              <button
                onClick={() => onInquiry?.("premium")}
                className="mt-7 bg-[var(--cream)] px-6 py-3.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--ink)] transition-all duration-300 hover:bg-white lg:mt-9"
              >
                Premium-Paket anfragen
              </button>
            </div>
          </div>

          <motion.div
            style={{ y: detailsY }}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-5 lg:mt-16 lg:gap-x-10 lg:gap-y-4"
          >
            <span className="text-[8px] uppercase tracking-[0.26em] text-white/30">
              Personal vor Ort
            </span>

            <span className="text-[8px] uppercase tracking-[0.26em] text-white/30">
              Präsentation
            </span>

            <span className="text-[8px] uppercase tracking-[0.26em] text-white/30">
              Sommelier
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