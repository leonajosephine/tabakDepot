"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const points = [
  {
    number: "01",
    title: "Ausgewählt",
    text: "Zigarren passend zu Anlass und Gästezahl.",
  },
  {
    number: "02",
    title: "Vorbereitet",
    text: "Auf Wunsch inklusive Equipment sowie Auf- und Abbau.",
  },
  {
    number: "03",
    title: "Erlebt",
    text: "Ein gemeinsamer Genussmoment für Ihre Gäste.",
  },
];

export default function CigarExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-3%", "3%"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1.06, 1.01]
  );

  const pointOneOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.2, 0.4],
    reduceMotion ? [1, 1, 1] : [0.32, 1, 0.5]
  );

  const pointTwoOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.42, 0.62],
    reduceMotion ? [1, 1, 1] : [0.32, 1, 0.5]
  );

  const pointThreeOpacity = useTransform(
    scrollYProgress,
    [0.48, 0.66, 0.9],
    reduceMotion ? [1, 1, 1] : [0.32, 1, 0.72]
  );

  const pointOneX = useTransform(
    scrollYProgress,
    [0.08, 0.2],
    reduceMotion ? [0, 0] : [-16, 0]
  );

  const pointTwoX = useTransform(
    scrollYProgress,
    [0.25, 0.42],
    reduceMotion ? [0, 0] : [-16, 0]
  );

  const pointThreeX = useTransform(
    scrollYProgress,
    [0.48, 0.66],
    reduceMotion ? [0, 0] : [-16, 0]
  );

  const motionPoints = [
    { opacity: pointOneOpacity, x: pointOneX },
    { opacity: pointTwoOpacity, x: pointTwoX },
    { opacity: pointThreeOpacity, x: pointThreeX },
  ];

  return (
    <section
      ref={sectionRef}
      id="erlebnis"
      className="relative overflow-hidden bg-[var(--ink)] text-[var(--cream)]"
    >
      <div className="grid lg:min-h-[900px] lg:grid-cols-2">
        {/* IMAGE */}
        <div className="relative h-[430px] overflow-hidden sm:h-[480px] lg:h-auto lg:min-h-full">
          <motion.img
            src="https://images.unsplash.com/photo-1778548646491-8afb9849e1df?auto=format&fit=crop&w=2000&q=90"
            alt="Zigarren-Erlebnis"
            style={{
              y: imageY,
              scale: imageScale,
            }}
            className="absolute -inset-y-[5%] left-0 h-[110%] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(15,13,11,.78) 0%, transparent 52%)",
            }}
          />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-white/20 pt-4 md:bottom-12 md:left-12 md:right-12">
            <span className="eyebrow text-white/45">
              Tabak Depot · Events
            </span>

            <span className="font-display text-xl italic text-white/60">
              Minden
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex items-center">
          <div className="w-full px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-24">
            <p className="eyebrow mb-7 text-white/35">
              Zigarre als Erlebnis
            </p>

            <h2
              className="font-display font-medium leading-[0.92] tracking-[-0.045em]"
              style={{
                fontSize: "clamp(3.45rem, 6vw, 6.8rem)",
              }}
            >
              Wir bringen
              <br />
              den Genuss
              <br />
              <span className="italic text-white/55">
                zu Ihnen.
              </span>
            </h2>

            {/* MOBILE COPY */}
            <p className="mt-8 max-w-lg text-[14px] leading-6 text-white/50 lg:hidden">
              Für Hochzeit, Firmenfeier oder besonderen Anlass:
              Wir stellen das Zigarren-Erlebnis passend zu Ihrem
              Event zusammen.
            </p>

            {/* DESKTOP COPY */}
            <p className="mt-10 hidden max-w-lg text-[15px] leading-7 text-white/50 lg:block">
              Hochzeit, Firmenfeier, Geburtstag oder ein besonderer Abend:
              Wir stellen das Zigarren-Erlebnis passend zu Ihrem Event zusammen
              und kümmern uns auf Wunsch um alles Weitere.
            </p>

            {/* MOBILE POINTS */}
            <div className="mt-10 border-t border-white/15 lg:hidden">
              {points.map((point) => (
                <div
                  key={point.number}
                  className="grid grid-cols-[38px_1fr] gap-4 border-b border-white/15 py-5"
                >
                  <span className="pt-1 text-[8px] tracking-[0.2em] text-white/35">
                    {point.number}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl font-medium">
                      {point.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-5 text-white/50">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP POINTS */}
            <div className="mt-14 hidden border-t border-white/15 lg:block">
              {points.map((point, index) => (
                <motion.div
                  key={point.number}
                  style={motionPoints[index]}
                  className="grid grid-cols-[45px_1fr] gap-5 border-b border-white/15 py-6"
                >
                  <span className="pt-1 text-[9px] tracking-[0.2em] text-white/30">
                    {point.number}
                  </span>

                  <div>
                    <h3 className="font-display text-2xl font-medium">
                      {point.title}
                    </h3>

                    <p className="mt-1 max-w-md text-sm leading-6 text-white/45">
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#pakete"
              className="group mt-8 inline-flex items-center gap-5 text-[9px] uppercase tracking-[0.24em] text-white/60 transition-colors hover:text-white lg:mt-9"
            >
              Pakete entdecken

              <span className="transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}