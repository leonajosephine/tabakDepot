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
    title: "Spirituosen",
    text: "Rum, Cognac und weitere besondere Begleiter.",
  },
  {
    number: "04",
    title: "Tabakwaren",
    text: "Zigaretten, Pfeifentabak, Feinschnitt und mehr.",
  },
  {
    number: "05",
    title: "Zubehör",
    text: "Cutter, Feuerzeuge, Humidore und alles für den Genuss.",
  },
];

export default function Sortiment() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="sortiment"
      className="overflow-hidden bg-[#161310] py-24 text-[var(--cream)] md:py-32"
    >
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* INTRO */}
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6 text-white/35">
              Sortiment
            </p>

            <h2 className="font-display text-5xl font-medium leading-[0.92] tracking-[-0.04em] md:text-7xl">
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
                  {/* subtle hover background */}
                  <motion.div
                    variants={{
                      rest: {
                        opacity: 0,
                      },
                      hover: {
                        opacity: 1,
                      },
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="pointer-events-none absolute inset-0 bg-white/[0.025]"
                  />

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
                    className="relative grid gap-3 md:grid-cols-[60px_1fr_1fr] md:items-center"
                  >
                    {/* NUMBER */}
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
                      transition={{
                        duration: 0.35,
                      }}
                      className="text-[9px] tracking-[0.2em]"
                    >
                      {item.number}
                    </motion.span>

                    {/* TITLE */}
                    <motion.h3
                      variants={{
                        rest: {
                          x: 0,
                        },
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

                    {/* DESCRIPTION */}
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

            <p className="mt-7 text-xs leading-5 text-white/30">
              Unser vollständiges Sortiment entdecken Sie direkt vor Ort.
              Wir beraten Sie gerne persönlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}