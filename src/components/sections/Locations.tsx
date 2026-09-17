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
    address: "Marktstraße 12\n32423 Minden",
    hours: "Mo – Fr · 08:00 – 19:00\nSa · 09:00 – 18:00",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "02",
    name: "Depot Nord",
    address: "Wesertor 24\n32425 Minden",
    hours: "Mo – Fr · 08:00 – 19:00\nSa · 09:00 – 18:00",
    image:
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=900&q=85",
  },
  {
    number: "03",
    name: "Depot Süd",
    address: "Königstraße 41\n32427 Minden",
    hours: "Mo – Fr · 08:00 – 19:00\nSa · 09:00 – 18:00",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
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

  return (
    <section
      ref={sectionRef}
      id="standorte"
      className="overflow-hidden bg-[var(--cream)] py-24 text-[var(--ink)] md:py-36"
    >
      <div className="container-main">
        {/* INTRO */}
        <div className="grid gap-12 lg:grid-cols-12">
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
              Persönliche Beratung, unser vollständiges
              Sortiment und Zeit für Ihre Fragen finden
              Sie direkt in unseren drei Depots.
            </p>
          </div>
        </div>

        {/* LOCATIONS */}
        <motion.div
          style={{ y: locationsY }}
          className="mt-20 grid border-y border-[var(--line-dark)] lg:grid-cols-3"
        >
          {locations.map((location, index) => (
            <motion.article
              key={location.number}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className={`group relative overflow-hidden py-10 lg:p-10 ${
                index !== locations.length - 1
                  ? "border-b border-[var(--line-dark)] lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              {/* LARGE BACKGROUND NUMBER */}
              <motion.span
                variants={{
                  rest: {
                    opacity: 0,
                    x: 25,
                  },
                  hover: {
                    opacity: 0.045,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pointer-events-none absolute -bottom-8 right-[-0.04em] font-display text-[11rem] font-semibold leading-none"
              >
                {location.number}
              </motion.span>

              {/* LOCATION LABEL */}
              <span className="eyebrow relative z-10 text-[var(--muted-dark)]">
                Standort {location.number}
              </span>

              {/* NAME */}
              <motion.h3
                variants={{
                  rest: {
                    x: 0,
                  },
                  hover: {
                    x: reduceMotion ? 0 : 8,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 mt-8 font-display text-3xl font-medium leading-[0.95]"
              >
                {location.name}
              </motion.h3>

              {/* LOCATION IMAGE */}
              <div className="relative z-10 mt-6 aspect-[16/9] w-full overflow-hidden bg-[#ddd5ca]">
                <motion.img
                  src={location.image}
                  alt=""
                  variants={{
                    rest: {
                      scale: 1.03,
                    },
                    hover: {
                      scale: reduceMotion ? 1.03 : 1.075,
                    },
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full w-full object-cover grayscale-[20%]"
                />

                <motion.div
                  variants={{
                    rest: {
                      opacity: 0.08,
                    },
                    hover: {
                      opacity: 0,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="pointer-events-none absolute inset-0 bg-black"
                />
              </div>

              {/* ADDRESS */}
              <p className="relative z-10 mt-6 whitespace-pre-line text-sm leading-6 text-[var(--muted-dark)]">
                {location.address}
              </p>

              <motion.div
                variants={{
                  rest: {
                    scaleX: 1,
                  },
                  hover: {
                    scaleX: reduceMotion ? 1 : 0.72,
                  },
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 my-7 h-px origin-left bg-[var(--line-dark)]"
              />

              {/* HOURS */}
              <p className="relative z-10 whitespace-pre-line text-xs leading-6 text-[var(--muted-dark)]">
                {location.hours}
              </p>

              {/* ROUTE */}
              <button className="group/route relative z-10 mt-8 inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.2em]">
                <span className="underline decoration-black/30 underline-offset-[6px]">
                  Route anzeigen
                </span>

                <span className="transition-transform duration-300 group-hover/route:translate-x-1">
                  ↗
                </span>
              </button>
            </motion.article>
          ))}
        </motion.div>

        {/* BOTTOM DETAIL */}
        <div className="mt-8 flex items-center gap-5">
          <span className="h-px flex-1 bg-[var(--line-dark)]" />

          <span className="whitespace-nowrap text-[8px] uppercase tracking-[0.28em] text-[var(--muted-dark)]">
            Persönlich vor Ort
          </span>
        </div>
      </div>
    </section>
  );
}