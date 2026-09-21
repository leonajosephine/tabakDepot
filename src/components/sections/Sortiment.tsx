"use client";

import {
  motion,
  useReducedMotion,
} from "motion/react";

const assortment = [
  {
    number: "01",
    title: "Zigarren",
    text: "Ausgewählte Marken, Klassiker und besondere Formate.",
  },
  {
    number: "02",
    title: "Whisky",
    text: "Single Malt, Bourbon und ausgewählte Abfüllungen.",
  },
  {
    number: "03",
    title: "Zubehör",
    text: "Cutter, Feuerzeuge, Humidore und alles für den Genuss.",
  },
  {
    number: "04",
    title: "Vor Ort entdecken",
    text: "Unser vollständiges Sortiment finden Sie in unseren Depots. Wir beraten Sie gerne persönlich.",
  },
];

export default function Sortiment() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="sortiment"
      className="overflow-hidden bg-[#161310] py-20 text-[var(--cream)] md:py-32"
    >
      <div className="container-main">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-12">
          {/* INTRO */}
          <div className="lg:col-span-4">
            <p className="eyebrow mb-5 text-white/35 md:mb-6">
              Sortiment
            </p>

            <h2 className="font-display text-[3.4rem] font-medium leading-[0.9] tracking-[-0.04em] md:text-7xl md:leading-[0.92]">
              Alles für
              <br />
              <span className="italic text-white/50">
                den Genuss.
              </span>
            </h2>
          </div>

          {/* ASSORTMENT */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-white/15">
              {assortment.map((item) => (
                <motion.div
                  key={item.number}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="group relative overflow-hidden border-b border-white/15"
                >
                  <motion.div
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.35 }}
                    className="pointer-events-none absolute inset-0 bg-white/[0.025]"
                  />

                  {/* MOBILE */}
                  <div className="relative py-5 md:hidden">
                    <div className="flex items-baseline gap-4">
                      <span className="w-7 shrink-0 text-[8px] tracking-[0.2em] text-white/30">
                        {item.number}
                      </span>

                      <h3 className="font-display text-[1.8rem] font-medium leading-none">
                        {item.title}
                      </h3>
                    </div>

                    <p className="ml-11 mt-2 max-w-[290px] text-[12px] leading-5 text-white/40">
                      {item.text}
                    </p>
                  </div>

                  {/* TABLET + DESKTOP */}
                  <motion.div
                    variants={{
                      rest: {
                        paddingTop: 24,
                        paddingBottom: 24,
                      },
                      hover: {
                        paddingTop: reduceMotion ? 24 : 31,
                        paddingBottom: reduceMotion ? 24 : 31,
                      },
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative hidden gap-3 md:grid md:grid-cols-[60px_1fr_1fr] md:items-center"
                  >
                    <motion.span
                      variants={{
                        rest: {
                          opacity: 0.25,
                          x: 0,
                        },
                        hover: {
                          opacity: 0.6,
                          x: reduceMotion ? 0 : 4,
                        },
                      }}
                      transition={{ duration: 0.35 }}
                      className="text-[9px] tracking-[0.2em]"
                    >
                      {item.number}
                    </motion.span>

                    <motion.h3
                      variants={{
                        rest: { x: 0 },
                        hover: {
                          x: reduceMotion ? 0 : 14,
                        },
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="font-display text-3xl font-medium"
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      variants={{
                        rest: {
                          opacity: 0.35,
                          x: 0,
                        },
                        hover: {
                          opacity: 0.72,
                          x: reduceMotion ? 0 : 8,
                        },
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-xs leading-5"
                    >
                      {item.text}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <a
              href="#standorte"
              className="group mt-6 inline-flex items-center gap-4 text-[8px] uppercase tracking-[0.24em] text-white/55 transition-colors hover:text-white md:mt-7"
            >
              Standorte entdecken

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