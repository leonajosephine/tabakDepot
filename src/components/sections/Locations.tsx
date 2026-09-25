"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const locations = [
  {
    number: "01",
    name: "Depot Innenstadt",
    address: "Markt 10\n32423 Minden",
    hours: "Mo & Fr · 08:00 – 19:00\nDi - Do · 08:00 - 18:00\nSa · 10:00 – 18:00",
    image:
      "https://images.unsplash.com/photo-1686205705363-a266f03b2d04?q=80&w=1860&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
  },
  {
    number: "02",
    name: "Depot Nord",
    address: "Scharn 11-17\n32423 Minden",
    hours: "Mo – Sa · 09:30 – 19:00",
    featured: false,
  },
  {
    number: "03",
    name: "Depot Süd",
    address: "Flurweg 11\n32457 Porta Westfalica",
    hours: "Mo – Sa · 08:30 – 19:00",
    featured: false,
  },
];

export default function Locations() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 25%"],
  });

  const headingX = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    reduceMotion ? [0, 0, 0] : [-50, 0, 20]
  );

  const locationsY = useTransform(
    scrollYProgress,
    [0.15, 0.45],
    reduceMotion ? [0, 0] : [45, 0]
  );

  const featuredLocation = locations[0];
  const secondaryLocations = locations.slice(1);

  return (
    <section
      ref={sectionRef}
      id="standorte"
      className="overflow-hidden bg-[var(--cream)] py-20 text-[var(--ink)] md:py-28"
    >
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6 text-[var(--muted-dark)]">
              Vor Ort
            </p>

            <motion.h2
              style={{ x: headingX }}
              className="font-display font-medium leading-[0.9] tracking-[-0.045em]"
            >
              <span
                className="block"
                style={{
                  fontSize: "clamp(4rem, 7vw, 7rem)",
                }}
              >
                Dreimal
                <br />

                <span className="italic text-[var(--muted-dark)]">
                  in Minden.
                </span>
              </span>
            </motion.h2>
          </div>

          <div className="self-end lg:col-span-4 lg:col-start-9">
            <p className="max-w-sm text-sm leading-6 text-[var(--muted-dark)]">
              Drei Standorte in Minden. Für Zigarren, Whisky und
              persönliche Fachberatung besuchen Sie unser Depot in
              der Innenstadt.
            </p>
          </div>
        </div>

        <motion.div
          style={{ y: locationsY }}
          className="mt-16 border-y border-[var(--line-dark)]"
        >
          <div className="grid lg:grid-cols-[1.2fr_1fr]">
            {/* FEATURED LOCATION */}
            <motion.article
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative overflow-hidden border-b border-[var(--line-dark)] py-8 lg:border-b-0 lg:border-r lg:p-8 xl:p-10"
            >
              <motion.span
                variants={{
                  rest: { opacity: 0, x: 25 },
                  hover: { opacity: 0.045, x: 0 },
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none absolute -bottom-10 right-[-0.04em] font-display text-[13rem] font-semibold leading-none"
              >
                {featuredLocation.number}
              </motion.span>

              <div className="relative z-10 flex flex-wrap items-center gap-4">
                <span className="eyebrow text-[var(--muted-dark)]">
                  Standort {featuredLocation.number}
                </span>

                <span className="h-px w-7 bg-[var(--line-dark)]" />

                <span className="text-[8px] uppercase tracking-[0.24em] text-[var(--muted-dark)]">
                  Zigarren & Whisky
                </span>
              </div>

              <motion.h3
                variants={{
                  rest: { x: 0 },
                  hover: { x: reduceMotion ? 0 : 8 },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 mt-6 font-display text-4xl font-medium leading-[0.95] md:text-5xl"
              >
                {featuredLocation.name}
              </motion.h3>

              <p className="relative z-10 mt-3 max-w-md text-xs leading-5 text-[var(--muted-dark)]">
                Unser Fachstandort für Zigarren, Whisky und
                persönliche Beratung.
              </p>

              <div className="relative z-10 mt-6 h-[220px] w-full overflow-hidden bg-[#ddd5ca] md:h-[240px] lg:w-[85%] xl:h-[250px]">
                <motion.img
                  src={featuredLocation.image}
                  alt=""
                  variants={{
                    rest: { scale: 1.03 },
                    hover: {
                      scale: reduceMotion ? 1.03 : 1.075,
                    },
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full w-full object-cover grayscale-[10%]"
                />

                <motion.div
                  variants={{
                    rest: { opacity: 0.05 },
                    hover: { opacity: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="pointer-events-none absolute inset-0 bg-black"
                />
              </div>

              {/* DETAILS — TWO COLUMNS ON MOBILE */}
              <div className="relative z-10 mt-6 grid max-w-xl grid-cols-2 gap-5">
                <div>
                  <span className="text-[8px] uppercase tracking-[0.22em] text-[var(--muted-dark)]/60">
                    Adresse
                  </span>

                  <p className="mt-2 whitespace-pre-line text-xs leading-5 text-[var(--muted-dark)] sm:text-sm sm:leading-6">
                    {featuredLocation.address}
                  </p>
                </div>

                <div>
                  <span className="text-[8px] uppercase tracking-[0.22em] text-[var(--muted-dark)]/60">
                    Öffnungszeiten
                  </span>

                  <p className="mt-2 whitespace-pre-line text-[11px] leading-5 text-[var(--muted-dark)] sm:text-xs sm:leading-6">
                    {featuredLocation.hours}
                  </p>
                </div>
              </div>

              <button className="group/route relative z-10 mt-6 inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.2em]">
                <span className="underline decoration-black/30 underline-offset-[6px]">
                  Route anzeigen
                </span>

                <span className="transition-transform duration-300 group-hover/route:translate-x-1">
                  ↗
                </span>
              </button>
            </motion.article>

            {/* SECONDARY LOCATIONS */}
            <div className="grid grid-rows-2">
              {secondaryLocations.map((location, index) => (
                <motion.article
                  key={location.number}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className={`group relative flex flex-col justify-between overflow-hidden px-0 py-8 lg:px-8 lg:py-8 xl:px-10 ${
                    index !== secondaryLocations.length - 1
                      ? "border-b border-[var(--line-dark)]"
                      : ""
                  }`}
                >
                  <motion.span
                    variants={{
                      rest: { opacity: 0, x: 20 },
                      hover: { opacity: 0.04, x: 0 },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="pointer-events-none absolute -bottom-8 right-0 font-display text-[9rem] font-semibold leading-none"
                  >
                    {location.number}
                  </motion.span>

                  <div className="relative z-10">
                    <span className="eyebrow text-[var(--muted-dark)]">
                      Standort {location.number}
                    </span>

                    <motion.h3
                      variants={{
                        rest: { x: 0 },
                        hover: {
                          x: reduceMotion ? 0 : 8,
                        },
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="mt-5 font-display text-3xl font-medium leading-[0.95]"
                    >
                      {location.name}
                    </motion.h3>
                  </div>

                  <div className="relative z-10 mt-7">
                    {/* TWO COLUMNS ON MOBILE + DESKTOP XL */}
                    <div className="grid grid-cols-2 gap-5 lg:grid-cols-1 xl:grid-cols-2">
                      <div>
                        <span className="text-[8px] uppercase tracking-[0.22em] text-[var(--muted-dark)]/60">
                          Adresse
                        </span>

                        <p className="mt-2 whitespace-pre-line text-xs leading-5 text-[var(--muted-dark)] sm:text-sm sm:leading-6">
                          {location.address}
                        </p>
                      </div>

                      <div>
                        <span className="text-[8px] uppercase tracking-[0.22em] text-[var(--muted-dark)]/60">
                          Öffnungszeiten
                        </span>

                        <p className="mt-2 whitespace-pre-line text-[11px] leading-5 text-[var(--muted-dark)] sm:text-xs sm:leading-6">
                          {location.hours}
                        </p>
                      </div>
                    </div>

                    <button className="group/route mt-6 inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.2em]">
                      <span className="underline decoration-black/30 underline-offset-[6px]">
                        Route anzeigen
                      </span>

                      <span className="transition-transform duration-300 group-hover/route:translate-x-1">
                        ↗
                      </span>
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center gap-5">
          <span className="h-px flex-1 bg-[var(--line-dark)]" />

          <span className="max-w-[75%] text-right text-[7px] uppercase tracking-[0.2em] text-[var(--muted-dark)] sm:max-w-none sm:whitespace-nowrap sm:text-[8px] sm:tracking-[0.28em]">
            Drei Standorte · Ein Fachstandort für Zigarren & Whisky
          </span>
        </div>
      </div>
    </section>
  );
}