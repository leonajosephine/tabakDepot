const locations = [
    {
      number: "01",
      name: "Depot Innenstadt",
      address: "Marktstraße 12\n32423 Minden",
      hours: "Mo – Fr · 08:00 – 19:00\nSa · 09:00 – 18:00",
    },
    {
      number: "02",
      name: "Depot Nord",
      address: "Wesertor 24\n32425 Minden",
      hours: "Mo – Fr · 08:00 – 19:00\nSa · 09:00 – 18:00",
    },
    {
      number: "03",
      name: "Depot Süd",
      address: "Königstraße 41\n32427 Minden",
      hours: "Mo – Fr · 08:00 – 19:00\nSa · 09:00 – 18:00",
    },
  ];
  
  export default function Locations() {
    return (
      <section
        id="standorte"
        className="bg-[var(--cream)] py-24 text-[var(--ink)] md:py-36"
      >
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6 text-[var(--muted-dark)]">
                Vor Ort
              </p>
  
              <h2
                className="font-display font-medium leading-[0.9] tracking-[-0.045em]"
                style={{
                  fontSize: "clamp(4rem, 7vw, 7rem)",
                }}
              >
                Dreimal
                <br />
                <span className="italic text-[var(--muted-dark)]">
                  in Minden.
                </span>
              </h2>
            </div>
  
            <div className="self-end lg:col-span-4 lg:col-start-9">
              <p className="max-w-sm text-sm leading-6 text-[var(--muted-dark)]">
                Persönliche Beratung, unser vollständiges Sortiment und Zeit
                für Ihre Fragen finden Sie direkt in unseren drei Depots.
              </p>
            </div>
          </div>
  
          <div className="mt-20 grid border-y border-[var(--line-dark)] lg:grid-cols-3">
            {locations.map((location, index) => (
              <article
                key={location.number}
                className={`py-10 lg:p-10 ${
                  index !== locations.length - 1
                    ? "border-b border-[var(--line-dark)] lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <span className="eyebrow text-[var(--muted-dark)]">
                  Standort {location.number}
                </span>
  
                <h3 className="mt-8 font-display text-3xl font-medium">
                  {location.name}
                </h3>
  
                <p className="mt-5 whitespace-pre-line text-sm leading-6 text-[var(--muted-dark)]">
                  {location.address}
                </p>
  
                <div className="my-7 h-px bg-[var(--line-dark)]" />
  
                <p className="whitespace-pre-line text-xs leading-6 text-[var(--muted-dark)]">
                  {location.hours}
                </p>
  
                <button className="mt-8 text-[9px] uppercase tracking-[0.2em] underline decoration-black/30 underline-offset-[6px]">
                  Route anzeigen
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }