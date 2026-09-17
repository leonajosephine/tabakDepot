"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

type PackagesProps = {
  onInquiry?: (packageId?: string) => void;
};

const packages = [
  {
    id: "event",
    number: "01",
    title: "Das Event-Paket",
    type: "Versand · Abholung",
    description:
      "Eine individuell für Ihren Anlass zusammengestellte Zigarrenauswahl – hochwertig vorbereitet und bequem per Versand oder zur Abholung.",
    features: [
      "Individuelle Zigarrenauswahl",
      "Abgestimmt auf Anlass & Gäste",
      "Hochwertig vorbereitet",
      "Versand oder Abholung",
    ],
    price: "ab 89 €",
    image:
      "https://images.unsplash.com/photo-1749842839766-8b71630a627d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "service",
    number: "02",
    title: "Der Event-Service",
    type: "Lieferung · Aufbau · Abbau",
    description:
      "Wir bringen das Zigarrenerlebnis zu Ihrer Veranstaltung, kümmern uns um Aufbau und Präsentation und holen das Equipment anschließend wieder ab.",
    features: [
      "Individuelle Zigarrenauswahl",
      "Equipment & Präsentation",
      "Aufbau vor Ort",
      "Abbau nach dem Event",
    ],
    price: "ab 249 €",
    image:
      "https://images.unsplash.com/photo-1679419858680-5bcb97e7175f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "premium",
    number: "03",
    title: "Das Premium-Paket",
    type: "Personal vor Ort · Persönlich betreut",
    description:
      "Das vollständig begleitete Zigarrenerlebnis mit unserem Personal vor Ort – auf Wunsch ergänzt durch einen Sommelier und ein abgestimmtes Whisky-Pairing.",
    features: [
      "Personal während des Events",
      "Betreuung Ihrer Gäste",
      "Persönlicher Sommelier",
      "Whisky-Pairing auf Wunsch",
    ],
    price: "auf Anfrage",
    image:
      "https://images.unsplash.com/photo-1613406046246-f8f921afa142?auto=format&fit=crop&w=1200&q=85",
    premium: true,
  },
];

export default function Packages({
  onInquiry,
}: PackagesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });

  const headingX = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    reduceMotion ? [0, 0, 0] : [-55, 0, 22]
  );

  const introTextY = useTransform(
    scrollYProgress,
    [0, 0.28],
    reduceMotion ? [0, 0] : [24, 0]
  );

  const introTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.18],
    reduceMotion ? [1, 1] : [0.35, 1]
  );

  const cardOneY = useTransform(
    scrollYProgress,
    [0.08, 0.42, 1],
    reduceMotion ? [0, 0, 0] : [72, 0, -8]
  );

  const cardTwoY = useTransform(
    scrollYProgress,
    [0.08, 0.42, 1],
    reduceMotion ? [0, 0, 0] : [28, 0, -3]
  );

  const cardThreeY = useTransform(
    scrollYProgress,
    [0.08, 0.42, 1],
    reduceMotion ? [0, 0, 0] : [88, 0, -12]
  );

  const imageOneY = useTransform(
    scrollYProgress,
    [0.08, 0.8],
    reduceMotion ? ["0%", "0%"] : ["-6%", "6%"]
  );

  const imageTwoY = useTransform(
    scrollYProgress,
    [0.08, 0.8],
    reduceMotion ? ["0%", "0%"] : ["-4%", "5%"]
  );

  const imageThreeY = useTransform(
    scrollYProgress,
    [0.08, 0.8],
    reduceMotion ? ["0%", "0%"] : ["-7%", "6%"]
  );

  const lineScale = useTransform(
    scrollYProgress,
    [0.08, 0.38],
    reduceMotion ? [1, 1] : [0, 1]
  );

  const footOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    reduceMotion ? [1, 1] : [0, 1]
  );

  const cardMotion = [
    {
      y: cardOneY,
      imageY: imageOneY,
    },
    {
      y: cardTwoY,
      imageY: imageTwoY,
    },
    {
      y: cardThreeY,
      imageY: imageThreeY,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="pakete"
      className="overflow-hidden bg-[var(--cream)] py-20 text-[var(--ink)] md:py-28 lg:py-36"
    >
      <div className="container-main">
        {/* INTRO */}
        <div className="grid gap-8 md:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6 text-[var(--muted-dark)] md:mb-7">
              Ihr Erlebnis
            </p>

            {/* MOBILE HEADING */}
            <h2 className="font-display text-[clamp(3.4rem,15vw,5rem)] font-medium leading-[0.9] tracking-[-0.04em] lg:hidden">
              Drei Wege
              <br />
              zu Ihrem
              <br />

              <span className="italic text-[var(--muted-dark)]">
                Genussmoment.
              </span>
            </h2>

            {/* DESKTOP HEADING */}
            <motion.h2
              style={{ x: headingX }}
              className="hidden font-display font-medium leading-[0.94] tracking-[-0.04em] lg:block"
            >
              <span
                className="block"
                style={{
                  fontSize:
                    "clamp(3.3rem, 5.5vw, 5.8rem)",
                }}
              >
                Drei Wege
                <br />
                zu Ihrem
                <br />

                <span className="italic text-[var(--muted-dark)]">
                  Genussmoment.
                </span>
              </span>
            </motion.h2>
          </div>

          <motion.div
            style={{
              y: introTextY,
              opacity: introTextOpacity,
            }}
            className="flex items-end lg:col-span-5 lg:col-start-8"
          >
            <p className="max-w-xl text-sm leading-6 text-[var(--muted-dark)] md:text-[15px] md:leading-7">
              Von Versand oder Abholung über Aufbau
              und Abbau bis zur persönlichen Begleitung
              vor Ort: Sie entscheiden, wie viel wir für
              Ihr Event übernehmen.
            </p>
          </motion.div>
        </div>

        {/* MOBILE CAROUSEL HEADER */}
        <div className="mt-12 flex items-center justify-between border-t border-[var(--line-dark)] pt-5 lg:hidden">
          <span className="text-[8px] uppercase tracking-[0.24em] text-[var(--muted-dark)]">
            Swipe to explore
          </span>

          <span className="font-display text-sm italic text-[var(--muted-dark)]">
            01 — 03
          </span>
        </div>
      </div>

      {/* MOBILE HORIZONTAL PACKAGES */}
      <div className="mt-5 lg:hidden">
        <div
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-5 pl-6 pr-[12vw] sm:pl-12"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {packages.map((item) => (
            <article
              key={item.id}
              className="relative w-[84vw] max-w-[420px] shrink-0 snap-start border border-[var(--line-dark)] bg-[var(--cream)] p-5"
            >
              {/* NUMBER + PRICE */}
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[var(--muted-dark)]">
                  Option {item.number}
                </span>

                <span className="font-display text-base italic text-[var(--muted-dark)]">
                  {item.price}
                </span>
              </div>

              {/* IMAGE */}
              <div className="relative my-6 aspect-[4/3] overflow-hidden bg-[#ddd5ca]">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover grayscale-[10%]"
                />

                <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />

                {item.premium && (
                  <div className="absolute bottom-0 left-0 bg-[var(--ink)] px-3 py-2.5 text-[7px] uppercase tracking-[0.23em] text-[var(--cream)]">
                    Premium-Paket
                  </div>
                )}
              </div>

              {/* TYPE */}
              <p className="mb-3 text-[8px] uppercase tracking-[0.22em] text-[var(--muted-dark)]">
                {item.type}
              </p>

              {/* TITLE */}
              <h3 className="font-display text-[2.25rem] font-medium leading-[0.95] tracking-[-0.03em]">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-[13px] leading-[1.65] text-[var(--muted-dark)]">
                {item.description}
              </p>

              {/* FEATURES */}
              <div className="mt-6 border-t border-[var(--line-dark)]">
                {item.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 border-b border-[var(--line-dark)] py-2.5"
                  >
                    <span className="h-px w-3 shrink-0 bg-black/25" />

                    <span className="text-[11px] text-[var(--muted-dark)]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* ACTION */}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
                <button
                  onClick={() =>
                    onInquiry?.(item.id)
                  }
                  className="text-[8px] font-medium uppercase tracking-[0.2em] underline decoration-black/30 underline-offset-[6px]"
                >
                  Paket anfragen
                </button>

                {item.premium && (
                  <a
                    href="#private-service"
                    className="inline-flex items-center gap-2 text-[7px] uppercase tracking-[0.2em] text-[var(--muted-dark)]"
                  >
                    Mehr erfahren
                    <span>↓</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* DESKTOP PACKAGE COMPOSITION */}
      <div className="container-main hidden lg:block">
        <div className="relative mt-20">
          <motion.span
            style={{
              scaleX: lineScale,
            }}
            className="absolute left-0 right-0 top-0 h-px origin-left bg-[var(--line-dark)]"
          />

          <div className="grid lg:grid-cols-3">
            {packages.map((item, index) => (
              <motion.article
                key={item.id}
                style={{
                  y: cardMotion[index].y,
                }}
                className={`group relative py-10 lg:px-8 lg:py-12 xl:px-10 ${
                  index < packages.length - 1
                    ? "border-b border-[var(--line-dark)] lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                {/* NUMBER + PRICE */}
                <div className="flex items-center justify-between">
                  <motion.span
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            x: 5,
                          }
                    }
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="eyebrow text-[var(--muted-dark)]"
                  >
                    Option {item.number}
                  </motion.span>

                  <span className="font-display text-lg italic text-[var(--muted-dark)]">
                    {item.price}
                  </span>
                </div>

                {/* IMAGE */}
                <div className="relative my-9 aspect-[4/3] overflow-hidden bg-[#ddd5ca]">
                  <motion.img
                    src={item.image}
                    alt=""
                    style={{
                      y: cardMotion[index].imageY,
                    }}
                    className="absolute -inset-y-[8%] left-0 h-[116%] w-full object-cover grayscale-[15%] transition-[filter] duration-700 group-hover:grayscale-0"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.045,
                          }
                    }
                    transition={{
                      scale: {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/[0.04] transition-opacity duration-700 group-hover:opacity-0" />

                  {item.premium && (
                    <div className="absolute bottom-0 left-0 bg-[var(--ink)] px-4 py-3 text-[8px] uppercase tracking-[0.25em] text-[var(--cream)]">
                      Premium-Paket
                    </div>
                  )}
                </div>

                {/* TYPE */}
                <p className="mb-3 text-[9px] uppercase tracking-[0.24em] text-[var(--muted-dark)]">
                  {item.type}
                </p>

                {/* TITLE */}
                <h3 className="font-display text-[clamp(2rem,2.6vw,2.8rem)] font-medium leading-[0.95] tracking-[-0.03em]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 min-h-[72px] max-w-md text-sm leading-6 text-[var(--muted-dark)]">
                  {item.description}
                </p>

                {/* FEATURES */}
                <div className="mt-8 border-t border-[var(--line-dark)]">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-4 border-b border-[var(--line-dark)] py-3"
                    >
                      <span className="h-px w-4 bg-black/25" />

                      <span className="text-xs text-[var(--muted-dark)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ACTION */}
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <button
                    onClick={() =>
                      onInquiry?.(item.id)
                    }
                    className="text-[9px] font-medium uppercase tracking-[0.22em] underline decoration-black/30 underline-offset-[7px] transition-opacity hover:opacity-50"
                  >
                    Paket anfragen
                  </button>

                  {item.premium && (
                    <a
                      href="#private-service"
                      className="group/link inline-flex items-center gap-3 text-[8px] uppercase tracking-[0.22em] text-[var(--muted-dark)]"
                    >
                      Mehr erfahren

                      <span className="transition-transform duration-300 group-hover/link:translate-y-1">
                        ↓
                      </span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.span
            style={{
              scaleX: lineScale,
            }}
            className="absolute bottom-0 left-0 right-0 h-px origin-right bg-[var(--line-dark)]"
          />
        </div>

        {/* EDITORIAL FOOT */}
        <motion.div
          style={{
            opacity: footOpacity,
          }}
          className="mt-8 flex items-center gap-5"
        >
          <span className="h-px flex-1 bg-[var(--line-dark)]" />

          <span className="text-[8px] uppercase tracking-[0.28em] text-[var(--muted-dark)]">
            Versand · Event-Service · Persönliche Begleitung
          </span>
        </motion.div>
      </div>
    </section>
  );
}