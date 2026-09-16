"use client";

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
    image:
      "https://images.unsplash.com/photo-1627136499605-4c9013aee46c?auto=format&fit=crop&w=700&q=90",
  },
  {
    id: 2,
    name: "Maker’s Mark",
    category: "Kentucky Bourbon",
    origin: "Kentucky · USA",
    note: "Vanille · Karamell · Eiche",
    description:
      "Weich und warm mit klassischer Bourbon-Süße – ein unkomplizierter Begleiter zu kräftigen Zigarren.",
    image:
      "https://images.unsplash.com/photo-1730565612822-290bc747b551?auto=format&fit=crop&w=700&q=90",
  },
  {
    id: 3,
    name: "Glenfiddich 18",
    category: "Single Malt Scotch",
    origin: "Speyside · Scotland",
    note: "Frucht · Honig · Eiche",
    description:
      "Elegant und ausgewogen mit reifen Früchten, Honig und einer feinen Holznote.",
    image:
      "https://images.unsplash.com/photo-1652284917571-e6475a979ea5?auto=format&fit=crop&w=700&q=90",
  },
  {
    id: 4,
    name: "Plantation XO",
    category: "Extra Old Rum",
    origin: "Barbados",
    note: "Vanille · Kakao · Kokos",
    description:
      "Weich, komplex und aromatisch – ein Rum, der hervorragend mit einer milden bis mittelkräftigen Zigarre harmoniert.",
    image:
      "https://images.unsplash.com/photo-1657114024705-29f393c87fd0?auto=format&fit=crop&w=700&q=90",
  },
  {
    id: 5,
    name: "Diplomático",
    category: "Reserva Exclusiva",
    origin: "Venezuela",
    note: "Schokolade · Orange · Gewürz",
    description:
      "Samtig und vollmundig mit dunkler Süße und würzigen Akzenten.",
    image:
      "https://images.unsplash.com/photo-1610365233936-b05d226aece2?auto=format&fit=crop&w=700&q=90",
  },
];

export default function WhiskyShowcase({
  onInquiry,
}: WhiskyShowcaseProps) {
  const [active, setActive] = useState(0);

  const whisky = whiskies[active];

  const previous = () => {
    setActive((current) =>
      current === 0 ? whiskies.length - 1 : current - 1
    );
  };

  const next = () => {
    setActive((current) =>
      current === whiskies.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="whisky"
      className="relative overflow-hidden bg-[var(--cream)] text-[var(--ink)]"
    >
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
            Eine kleine Auswahl aus unserem Sortiment. Persönliche Empfehlungen
            und weitere Spirituosen finden Sie direkt in unseren Depots.
          </p>
        </div>
      </div>

      <div className="relative min-h-[720px]">
        {/* GHOST TYPOGRAPHY */}
        <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden">
          <p
            className="font-display whitespace-nowrap font-medium leading-none text-black/[0.055]"
            style={{
              fontSize: "clamp(9rem, 21vw, 22rem)",
              transform: "translateX(-3vw)",
            }}
          >
            {whisky.category} — {whisky.category}
          </p>
        </div>

        {/* center line */}
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-px bg-[var(--line-dark)] lg:block" />

        <div className="container-main relative z-10 grid min-h-[720px] items-center py-16 lg:grid-cols-12">
          {/* INFO */}
          <div className="lg:col-span-3">
            <p className="eyebrow mb-8 text-[var(--muted-dark)]">
              Selected bottle · {String(active + 1).padStart(2, "0")}
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
              className="mt-8 text-[9px] uppercase tracking-[0.22em] underline decoration-black/30 underline-offset-[7px]"
            >
              Pairing anfragen
            </button>
          </div>

          {/* PRODUCT */}
          <div className="relative flex h-[500px] items-center justify-center lg:col-span-6 lg:col-start-4">
            {/*
              Später:
              transparentes PNG.
              Dann object-contain + drop-shadow.
            */}
            <img
              key={whisky.id}
              src={whisky.image}
              alt={whisky.name}
              className="h-[430px] w-[240px] object-cover shadow-2xl transition-all duration-500 md:h-[500px] md:w-[280px]"
            />
          </div>

          {/* CONTROLS */}
          <div className="flex items-center justify-between gap-8 lg:col-span-2 lg:col-start-11 lg:flex-col lg:items-end">
            <button
              onClick={previous}
              className="flex items-center gap-4 text-[9px] uppercase tracking-[0.25em] text-[var(--muted-dark)] transition-colors hover:text-black"
            >
              ← Prev
            </button>

            <div className="flex gap-2">
              {whiskies.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActive(index)}
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
              className="flex items-center gap-4 text-[9px] uppercase tracking-[0.25em] text-[var(--muted-dark)] transition-colors hover:text-black"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}