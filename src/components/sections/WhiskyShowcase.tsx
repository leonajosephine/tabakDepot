"use client";

import {
  AnimatePresence,
  motion,
  PanInfo,
  useReducedMotion,
} from "motion/react";
import { useState } from "react";

type WhiskyShowcaseProps = {
  onInquiry?: () => void;
};

const whiskies = [
  {
    id: 1,
    name: "Aberfeldy 21",
    category: "Highland Single Malt",
    origin: "Highlands · Honig & Eleganz",
    age: "21 Jahre",
    abv: "40 % vol",
    type: "Single Malt Scotch",
    headline: "Sanft, cremig und gelassen.",
    notes: ["Heidehonig", "Toffee", "Orange"],
    description:
      "Honig und cremiges Toffee geben den Ton an. Orange, geröstete Nüsse und eine feine Würze sorgen für Tiefe, ohne den weichen Charakter zu überdecken.",
    image: "/images/whisky/aberfeldy.png",
  },
  {
    id: 2,
    name: "Glenmorangie 16",
    category: "The Nectar",
    origin: "Highlands · Frucht & Pâtisserie",
    age: "16 Jahre",
    abv: "46 % vol",
    type: "Single Malt Scotch",
    headline: "Eine duftende, fruchtige Dessertwelt.",
    notes: ["Aprikose", "Vanillecreme", "Brioche"],
    description:
      "Gebackene Aprikose, Vanillecreme und Brioche verbinden sich mit Mandel und Honig. Zitruszeste setzt einen frischen Akzent zur üppigen Süße.",
    image: "/images/whisky/glenmorangie.png",
  },
  {
    id: 3,
    name: "The Balvenie 18",
    category: "Pedro Ximénez Cask",
    origin: "Speyside · Sherry & Fülle",
    age: "18 Jahre",
    abv: "48,7 % vol",
    type: "Single Malt Scotch",
    headline: "Satte Frucht mit honigweichem Kern.",
    notes: ["Getrocknete Feige", "Mandarine", "Honig"],
    description:
      "Getrocknete Feigen und Mandarine treffen auf den typischen Honigcharakter der Brennerei. Ein floraler Hauch von Lavendel ergänzt das volle, süße Profil.",
    image: "/images/whisky/balvenie.png",
  },
  {
    id: 4,
    name: "Bowmore 18",
    category: "Klassische Abfüllung",
    origin: "Islay · Schokolade & Rauch",
    age: "18 Jahre",
    abv: "43 % vol",
    type: "Single Malt Scotch",
    headline: "Rauch mit einer samtigen Seite.",
    notes: ["Dunkle Schokolade", "Trockenfrucht", "Torfrauch"],
    description:
      "Dunkle Schokolade, Trockenfrucht und Toffee treffen auf Orangenschale und eingebundenen Torfrauch. Eine maritime Note bringt zusätzliche Spannung.",
    image: "/images/whisky/bowmore1.png",
  },
  {
    id: 5,
    name: "Ledaig 18",
    category: "Tobermory Distillery",
    origin: "Isle of Mull · Torf & Meeresluft",
    age: "18 Jahre",
    abv: "46,3 % vol",
    type: "Single Malt Scotch",
    headline: "Markant, maritim und kompromisslos.",
    notes: ["Kräftiger Torfrauch", "Meersalz", "Pfeffer"],
    description:
      "Intensiver Torfrauch, Seetang und Pfeffer prägen den Auftakt. Dahinter liegen Orangenschale, Kaffee, Tabak und die fruchtige Wärme der Sherryfässer.",
    image: "/images/whisky/ledaig.png",
  },
];

export default function WhiskyShowcase({
  onInquiry,
}: WhiskyShowcaseProps) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const reduceMotion = useReducedMotion();

  const whisky = whiskies[active];

  const previousIndex =
    active === 0 ? whiskies.length - 1 : active - 1;

  const nextIndex =
    active === whiskies.length - 1 ? 0 : active + 1;

  const previousWhisky = whiskies[previousIndex];
  const nextWhisky = whiskies[nextIndex];

  const previous = () => {
    setDirection(-1);
    setActive(previousIndex);
  };

  const next = () => {
    setDirection(1);
    setActive(nextIndex);
  };

  const goTo = (index: number) => {
    if (index === active) return;

    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeDistance = info.offset.x;
    const swipeVelocity = info.velocity.x;

    if (swipeDistance < -70 || swipeVelocity < -500) {
      next();
      return;
    }

    if (swipeDistance > 70 || swipeVelocity > 500) {
      previous();
    }
  };

  const productVariants = {
    enter: (direction: number) => ({
      x: reduceMotion
        ? 0
        : direction > 0
          ? 150
          : -150,
      opacity: 0,
      scale: reduceMotion ? 1 : 0.92,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction: number) => ({
      x: reduceMotion
        ? 0
        : direction > 0
          ? -150
          : 150,
      opacity: 0,
      scale: reduceMotion ? 1 : 0.92,
    }),
  };

  return (
    <section
      id="whisky"
      className="relative overflow-hidden bg-[var(--cream)] text-[var(--ink)]"
    >
      {/* HEADER */}
      <div className="container-main border-b border-[var(--line-dark)] py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5 text-[var(--muted-dark)]">
              Whisky & Spirituosen
            </p>

            <h2 className="font-display text-5xl font-medium leading-none tracking-[-0.04em] md:text-7xl">
              Der passende
              <br />
              <span className="italic text-[var(--muted-dark)]">
                Begleiter.
              </span>
            </h2>
          </div>

          <p className="max-w-lg self-end text-sm leading-6 text-[var(--muted-dark)] lg:col-span-4 lg:col-start-9">
            Eine kleine Auswahl aus unserem Sortiment.
            Persönliche Empfehlungen und weitere Spirituosen
            finden Sie direkt in unseren Depots.
          </p>
        </div>
      </div>

      {/* ================================= */}
      {/* MOBILE SHOWCASE                   */}
      {/* ================================= */}

      <div className="relative lg:hidden">
        {/* PRODUCT STAGE */}
        <div className="relative h-[450px] overflow-hidden sm:h-[500px]">
          {/* GHOST TYPOGRAPHY */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={`${whisky.id}-${whisky.category}`}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 40 : -40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -40 : 40,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display whitespace-nowrap text-[7rem] font-medium leading-none text-black/[0.04] sm:text-[8.5rem]"
              >
                {whisky.category}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* HEADLINE + NUMBER */}
          <div className="container-main absolute left-0 right-0 top-7 z-10 flex items-start justify-between gap-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={whisky.id}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-[210px] font-display text-[1.1rem] font-medium leading-[1.15]"
              >
                {whisky.headline}
              </motion.p>
            </AnimatePresence>

            <span className="shrink-0 font-display text-lg italic text-[var(--muted-dark)]">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(whiskies.length).padStart(2, "0")}
            </span>
          </div>

          {/* ACTIVE BOTTLE */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pt-8">
            <AnimatePresence
              mode="wait"
              custom={direction}
            >
              <motion.div
                key={whisky.id}
                custom={direction}
                variants={productVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.18}
                onDragEnd={handleDragEnd}
                whileDrag={{
                  cursor: "grabbing",
                  scale: reduceMotion ? 1 : 0.98,
                }}
                className="cursor-grab touch-pan-y"
              >
                <img
                  src={whisky.image}
                  alt={whisky.name}
                  draggable={false}
                  className="h-[340px] w-[220px] select-none object-contain drop-shadow-[0_28px_24px_rgba(0,0,0,0.18)] sm:h-[410px] sm:w-[270px]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap text-[7px] uppercase tracking-[0.25em] text-[var(--muted-dark)]/55">
            Swipe to explore
          </p>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="container-main">
          <div className="flex items-center justify-between border-y border-[var(--line-dark)] py-4">
            <button
              onClick={previous}
              className="flex items-center gap-3 text-[8px] uppercase tracking-[0.22em] text-[var(--muted-dark)]"
            >
              <span>←</span>
              Prev
            </button>

            <div className="flex items-center gap-2">
              {whiskies.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => goTo(index)}
                  aria-label={`Whisky ${index + 1}`}
                  className={`h-[2px] transition-all duration-300 ${
                    index === active
                      ? "w-7 bg-black"
                      : "w-2 bg-black/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center gap-3 text-[8px] uppercase tracking-[0.22em] text-[var(--muted-dark)]"
            >
              Next
              <span>→</span>
            </button>
          </div>

          {/* MOBILE INFORMATION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={whisky.id}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: reduceMotion ? 0 : -10,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="py-7"
            >
              <p className="text-[8px] uppercase tracking-[0.22em] text-[var(--muted-dark)]">
                {whisky.origin}
              </p>

              <h3 className="mt-3 font-display text-[2.5rem] font-medium leading-none tracking-[-0.035em]">
                {whisky.name}
              </h3>

              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[var(--muted-dark)]">
                {whisky.category}
              </p>

              {/* SPECS */}
              <div className="mt-5 flex flex-wrap gap-2">
                {[whisky.age, whisky.abv, whisky.type].map(
                  (spec) => (
                    <span
                      key={spec}
                      className="border border-[var(--line-dark)] px-2.5 py-1.5 text-[8px] uppercase tracking-[0.13em] text-[var(--muted-dark)]"
                    >
                      {spec}
                    </span>
                  )
                )}
              </div>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-md text-[13px] leading-[1.7] text-[var(--muted-dark)]">
                {whisky.description}
              </p>

              {/* TASTING NOTES */}
              <div className="mt-5 flex flex-wrap gap-2">
                {whisky.notes.map((note) => (
                  <span
                    key={note}
                    className="rounded-full bg-black/[0.045] px-3 py-1.5 text-[9px] text-[var(--muted-dark)]"
                  >
                    {note}
                  </span>
                ))}
              </div>

              <button
                onClick={onInquiry}
                className="mt-6 text-[8px] uppercase tracking-[0.21em] underline decoration-black/30 underline-offset-[6px]"
              >
                Pairing anfragen
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ================================= */}
      {/* DESKTOP SHOWCASE                  */}
      {/* ================================= */}

      <div className="relative hidden min-h-[720px] lg:block">
        {/* BACKGROUND TYPOGRAPHY */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={`${whisky.id}-${whisky.category}`}
              initial={{
                opacity: 0,
                x: direction > 0 ? 70 : -70,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -70 : 70,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display whitespace-nowrap font-medium leading-none text-black/[0.035]"
              style={{
                fontSize: "clamp(9rem, 21vw, 22rem)",
                marginLeft: "-3vw",
              }}
            >
              {whisky.category} — {whisky.category}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="container-main relative z-10 grid min-h-[720px] items-center py-12 lg:grid-cols-12">
          {/* PREVIOUS BOTTLE */}
          <div className="relative hidden h-[570px] lg:col-span-2 lg:block">
            <motion.button
              onClick={previous}
              aria-label="Vorherige Flasche"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      x: 8,
                      opacity: 0.42,
                    }
              }
              className="absolute left-[8%] top-1/2 -translate-y-1/2 cursor-pointer xl:left-[12%]"
            >
              <img
                src={previousWhisky.image}
                alt=""
                draggable={false}
                className="h-[340px] w-[190px] select-none object-contain opacity-25 grayscale-[25%] drop-shadow-[0_20px_18px_rgba(0,0,0,0.12)] xl:w-[210px]"
              />
            </motion.button>
          </div>

          {/* INFORMATION */}
          <div className="relative z-20 lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={whisky.id}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: reduceMotion ? 0 : -12,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative max-w-[390px] lg:ml-auto lg:mr-[-12px]"
              >
                {/* HEADLINE INSTEAD OF SELECTED BOTTLE */}
                <p className="mb-5 font-display text-[1.2rem] font-medium leading-[1.15]">
                  {whisky.headline}
                </p>

                <p className="mb-2 text-[9px] uppercase tracking-[0.22em] text-[var(--muted-dark)]">
                  {whisky.origin}
                </p>

                <h3 className="font-display text-[2.7rem] font-medium leading-none tracking-[-0.035em]">
                  {whisky.name}
                </h3>

                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                  {whisky.category}
                </p>

                {/* SPECS */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {[whisky.age, whisky.abv, whisky.type].map(
                    (spec) => (
                      <span
                        key={spec}
                        className="border border-[var(--line-dark)] px-2.5 py-1.5 text-[8px] uppercase tracking-[0.12em] text-[var(--muted-dark)]"
                      >
                        {spec}
                      </span>
                    )
                  )}
                </div>

                <div className="my-5 h-px w-full bg-[var(--line-dark)]" />

                {/* DESCRIPTION */}
                <p className="text-[12px] leading-[1.65] text-[var(--muted-dark)]">
                  {whisky.description}
                </p>

                {/* TASTING NOTES */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {whisky.notes.map((note) => (
                    <span
                      key={note}
                      className="rounded-full bg-black/[0.045] px-3 py-1.5 text-[9px] text-[var(--muted-dark)]"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onInquiry}
                  className="mt-6 text-[8px] uppercase tracking-[0.2em] underline decoration-black/30 underline-offset-[6px] transition-opacity hover:opacity-50"
                >
                  Pairing anfragen
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ACTIVE + NEXT BOTTLE */}
          <div className="relative h-[570px] overflow-visible lg:col-span-4">
            {/* ACTIVE BOTTLE */}
            <div className="absolute inset-0 z-10 flex items-center justify-start">
              <AnimatePresence
                mode="wait"
                custom={direction}
              >
                <motion.div
                  key={whisky.id}
                  custom={direction}
                  variants={productVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  drag="x"
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  dragElastic={0.18}
                  onDragEnd={handleDragEnd}
                  whileDrag={{
                    cursor: "grabbing",
                    scale: reduceMotion ? 1 : 0.98,
                  }}
                  className="z-10 cursor-grab touch-pan-y"
                >
                  <img
                    src={whisky.image}
                    alt={whisky.name}
                    draggable={false}
                    className="h-[430px] w-[280px] select-none object-contain drop-shadow-[0_28px_24px_rgba(0,0,0,0.18)] md:h-[500px] md:w-[330px]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* NEXT BOTTLE */}
            <motion.button
              onClick={next}
              aria-label="Nächste Flasche"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      x: -8,
                      opacity: 0.42,
                    }
              }
              className="absolute right-[-24%] top-1/2 z-0 hidden -translate-y-1/2 cursor-pointer lg:block"
            >
              <img
                src={nextWhisky.image}
                alt=""
                draggable={false}
                className="h-[340px] w-[210px] select-none object-contain opacity-25 grayscale-[25%] drop-shadow-[0_20px_18px_rgba(0,0,0,0.12)]"
              />
            </motion.button>
          </div>

          {/* CONTROLS */}
          <div className="mt-10 flex items-center justify-between gap-8 lg:col-span-2 lg:mt-0 lg:flex-col lg:items-end">
            <button
              onClick={previous}
              className="group flex items-center gap-4 text-[9px] uppercase tracking-[0.25em] text-[var(--muted-dark)] transition-colors hover:text-black"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Prev
            </button>

            <div className="flex gap-2">
              {whiskies.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => goTo(index)}
                  aria-label={`Whisky ${index + 1}`}
                  className={`h-[2px] transition-all duration-300 ${
                    index === active
                      ? "w-7 bg-black"
                      : "w-2 bg-black/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="group flex items-center gap-4 text-[9px] uppercase tracking-[0.25em] text-[var(--muted-dark)] transition-colors hover:text-black"
            >
              Next

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MORE IN STORE */}
      <div className="container-main pb-12 md:pb-20">
        <div className="flex flex-col gap-5 border-t border-[var(--line-dark)] pt-7 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex items-start gap-5">
            <span className="mt-[7px] h-px w-8 shrink-0 bg-[var(--ink)]" />

            <div>
              <p className="eyebrow text-[var(--muted-dark)]">
                Mehr entdecken
              </p>

              <p className="mt-2 font-display text-xl font-medium md:text-2xl">
                Das ist nur eine kleine Auswahl.
              </p>
            </div>
          </div>

          <p className="max-w-md text-xs leading-5 text-[var(--muted-dark)] md:text-right">
            Weitere Whiskys und Spirituosen entdecken Sie
            in unseren Depots. Wir beraten Sie gerne
            persönlich bei der Auswahl.
          </p>
        </div>
      </div>
    </section>
  );
}