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
    id: "box",
    number: "01",
    title: "Die Zigarrenbox",
    type: "Versand · Abholung",
    description:
      "Eine individuell zusammengestellte Auswahl für Ihren Anlass – hochwertig vorbereitet und bereit zum Genießen.",
    features: [
      "Individuelle Zigarrenauswahl",
      "Passend zur Gästeanzahl",
      "Hochwertig zusammengestellt",
      "Versand oder Abholung",
    ],
    price: "ab 89 €",
    image:
      "https://images.unsplash.com/photo-1749842839766-8b71630a627d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "event",
    number: "02",
    title: "Das Event-Paket",
    type: "Aufbau · Event · Abbau",
    description:
      "Wir liefern nicht nur die Zigarren, sondern das passende Setting gleich mit – vorbereitet für Ihren besonderen Abend.",
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
    title: "Private Service",
    type: "Persönlich · Betreut",
    description:
      "Das vollständig begleitete Erlebnis mit persönlichem Sommelier – individuell abgestimmt auf Ihren Abend und Ihre Gäste.",
    features: [
      "Persönlicher Sommelier",
      "Beratung Ihrer Gäste",
      "Komplette Event-Begleitung",
      "Whisky-Pairing auf Wunsch",
    ],
    price: "auf Anfrage",
    image:
      "https://images.unsplash.com/photo-1613406046246-f8f921afa142?auto=format&fit=crop&w=1200&q=85",
    premium: true,
  },
];

export default function Packages({ onInquiry }: PackagesProps) {
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

  const cardsY = useTransform(
    scrollYProgress,
    [0.12, 0.4],
    reduceMotion ? [0, 0] : [55, 0]
  );

  return (
    <section
      ref={sectionRef}
      id="pakete"
      className="overflow-hidden bg-[var(--cream)] py-24 text-[var(--ink)] md:py-36"
    >
      <div className="container-main">
        {/* INTRO */}
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-7 text-[var(--muted-dark)]">
              Ihr Erlebnis
            </p>

            <motion.h2
              style={{ x: headingX }}
              className="font-display font-medium leading-[0.94] tracking-[-0.04em]"
            >
              <span
                className="block"
                style={{
                  fontSize: "clamp(3.3rem, 5.5vw, 5.8rem)",
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

          <div className="flex items-end lg:col-span-5 lg:col-start-8">
            <p className="max-w-xl text-[15px] leading-7 text-[var(--muted-dark)]">
              Von der individuell zusammengestellten Zigarrenbox bis zum
              persönlich begleiteten Abend: Sie entscheiden, wie viel wir für
              Ihr Event übernehmen.
            </p>
          </div>
        </div>

        {/* THREE OPTIONS */}
        <motion.div
          style={{ y: cardsY }}
          className="mt-20 grid border-y border-[var(--line-dark)] lg:grid-cols-3"
        >
          {packages.map((item, index) => (
            <article
              key={item.id}
              className={`group relative py-10 lg:px-8 lg:py-12 xl:px-10 ${
                index < packages.length - 1
                  ? "border-b border-[var(--line-dark)] lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              {/* NUMBER + PRICE */}
              <div className="flex items-center justify-between">
                <span className="eyebrow text-[var(--muted-dark)]">
                  Option {item.number}
                </span>

                <span className="font-display text-lg italic text-[var(--muted-dark)]">
                  {item.price}
                </span>
              </div>

              {/* IMAGE */}
              <div className="relative my-9 aspect-[4/3] overflow-hidden bg-[#ddd5ca]">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover grayscale-[15%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                {item.premium && (
                  <div className="absolute bottom-0 left-0 bg-[var(--ink)] px-4 py-3 text-[8px] uppercase tracking-[0.25em] text-[var(--cream)]">
                    Private Service
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
                  onClick={() => onInquiry?.(item.id)}
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
            </article>
          ))}
        </motion.div>

        {/* SMALL EDITORIAL FOOT */}
        <div className="mt-8 flex items-center gap-5">
          <span className="h-px flex-1 bg-[var(--line-dark)]" />

          <span className="text-[8px] uppercase tracking-[0.28em] text-[var(--muted-dark)]">
            Auswahl · Vorbereitung · Begleitung
          </span>
        </div>
      </div>
    </section>
  );
}