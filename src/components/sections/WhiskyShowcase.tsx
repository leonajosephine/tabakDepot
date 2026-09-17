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
    name: "Lagavulin 16",
    category: "Single Malt Scotch",
    origin: "Islay · Scotland",
    note: "Rauch · Torf · Meeresbrise",
    description:
      "Intensiv, rauchig und unverwechselbar. Ein Islay-Klassiker für alle, die Charakter im Glas suchen.",
    image: "/images/whisky/whisky1.png",
  },
  {
    id: 2,
    name: "Maker’s Mark",
    category: "Kentucky Bourbon",
    origin: "Kentucky · USA",
    note: "Vanille · Karamell · Eiche",
    description:
      "Weich und warm mit klassischer Bourbon-Süße – ein unkomplizierter Begleiter zu kräftigen Zigarren.",
    image: "/images/whisky/whisky2.png",
  },
  {
    id: 3,
    name: "Glenfiddich 18",
    category: "Single Malt Scotch",
    origin: "Speyside · Scotland",
    note: "Frucht · Honig · Eiche",
    description:
      "Elegant und ausgewogen mit reifen Früchten, Honig und einer feinen Holznote.",
    image: "/images/whisky/whisky3.png",
  },
  {
    id: 4,
    name: "Plantation XO",
    category: "Extra Old Rum",
    origin: "Barbados",
    note: "Vanille · Kakao · Kokos",
    description:
      "Weich, komplex und aromatisch – ein Rum, der hervorragend mit einer milden bis mittelkräftigen Zigarre harmoniert.",
    image: "/images/whisky/whisky6.png",
  },
  {
    id: 5,
    name: "Diplomático",
    category: "Reserva Exclusiva",
    origin: "Venezuela",
    note: "Schokolade · Orange · Gewürz",
    description:
      "Samtig und vollmundig mit dunkler Süße und würzigen Akzenten.",
    image: "/images/whisky/whisky5.png",
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
            Persönliche Empfehlungen und weitere
            Spirituosen finden Sie direkt in unseren
            Depots.
          </p>
        </div>
      </div>

      {/* SHOWCASE */}
      <div className="relative min-h-[760px]">
        {/* BACKGROUND TYPOGRAPHY */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={whisky.category}
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

        <div className="container-main relative z-10 grid min-h-[760px] items-center py-16 lg:grid-cols-12">
          {/* PREVIOUS BOTTLE */}
          <div className="relative hidden h-[540px] lg:col-span-2 lg:block">
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
                className="relative max-w-[340px] lg:ml-auto lg:mr-[-12px]"
              >
                <p className="eyebrow mb-8 text-[var(--muted-dark)]">
                  Selected bottle ·{" "}
                  {String(active + 1).padStart(2, "0")}
                </p>

                <h3 className="font-display text-4xl font-medium tracking-[-0.03em]">
                  {whisky.name}
                </h3>

                <p className="mt-2 text-[9px] uppercase tracking-[0.22em] text-[var(--muted-dark)]">
                  {whisky.origin}
                </p>

                <div className="my-7 h-px w-full bg-[var(--line-dark)]" />

                <p className="font-display text-xl italic text-[var(--muted-dark)]">
                  {whisky.note}
                </p>

                <p className="mt-5 text-sm leading-6 text-[var(--muted-dark)]">
                  {whisky.description}
                </p>

                <button
                  onClick={onInquiry}
                  className="mt-8 text-[9px] uppercase tracking-[0.22em] underline decoration-black/30 underline-offset-[7px] transition-opacity hover:opacity-50"
                >
                  Pairing anfragen
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ACTIVE + NEXT BOTTLE */}
          <div className="relative h-[540px] overflow-visible lg:col-span-4">
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

            {/* MOBILE SWIPE HINT */}
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] uppercase tracking-[0.25em] text-[var(--muted-dark)]/60 lg:hidden">
              Swipe to explore
            </p>
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
      <div className="container-main pb-16 md:pb-20">
        <div className="flex flex-col gap-6 border-t border-[var(--line-dark)] pt-7 md:flex-row md:items-center md:justify-between">
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