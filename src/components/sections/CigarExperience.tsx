export default function CigarExperience() {
    const points = [
      {
        number: "01",
        title: "Ausgewählt",
        text: "Zigarren passend zu Anlass, Gästezahl und gewünschtem Charakter.",
      },
      {
        number: "02",
        title: "Vorbereitet",
        text: "Auf Wunsch inklusive Equipment, Präsentation sowie Auf- und Abbau.",
      },
      {
        number: "03",
        title: "Erlebt",
        text: "Vom ersten Schnitt bis zum letzten Zug wird aus einer Zigarre ein gemeinsamer Moment.",
      },
    ];
  
    return (
      <section
        id="erlebnis"
        className="relative overflow-hidden bg-[var(--ink)] text-[var(--cream)]"
      >
        <div className="grid min-h-[900px] lg:grid-cols-2">
          {/* IMAGE */}
          <div className="relative min-h-[560px] overflow-hidden lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1613406046246-f8f921afa142?auto=format&fit=crop&w=1400&q=90"
              alt="Zigarren-Erlebnis"
              className="absolute inset-0 h-full w-full object-cover"
            />
  
            <div className="absolute inset-0 bg-black/20" />
  
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(15,13,11,.75) 0%, transparent 50%)",
              }}
            />
  
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between border-t border-white/20 pt-4 md:bottom-12 md:left-12 md:right-12">
              <span className="eyebrow text-white/45">
                Tabak Depot · Events
              </span>
  
              <span className="font-display text-xl italic text-white/60">
                Minden
              </span>
            </div>
          </div>
  
          {/* CONTENT */}
          <div className="flex items-center">
            <div className="w-full px-6 py-24 md:px-12 lg:px-16 xl:px-24">
              <p className="eyebrow mb-8 text-white/35">
                Zigarre als Erlebnis
              </p>
  
              <h2
                className="font-display font-medium leading-[0.92] tracking-[-0.045em]"
                style={{
                  fontSize: "clamp(3.7rem, 6vw, 6.8rem)",
                }}
              >
                Wir bringen
                <br />
                den Genuss
                <br />
                <span className="italic text-white/55">zu Ihnen.</span>
              </h2>
  
              <p className="mt-10 max-w-lg text-[15px] leading-7 text-white/50">
                Hochzeit, Firmenfeier, Geburtstag oder ein besonderer Abend:
                Wir stellen das Zigarren-Erlebnis passend zu Ihrem Event zusammen
                und kümmern uns auf Wunsch um alles Weitere.
              </p>
  
              <div className="mt-14 border-t border-white/15">
                {points.map((point) => (
                  <div
                    key={point.number}
                    className="grid grid-cols-[45px_1fr] gap-5 border-b border-white/15 py-6"
                  >
                    <span className="text-[9px] tracking-[0.2em] text-white/25">
                      {point.number}
                    </span>
  
                    <div>
                      <h3 className="font-display text-2xl font-medium">
                        {point.title}
                      </h3>
  
                      <p className="mt-1 max-w-md text-sm leading-6 text-white/40">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
  
              <a
                href="#pakete"
                className="mt-9 inline-flex items-center gap-5 text-[9px] uppercase tracking-[0.24em] text-white/60 transition-colors hover:text-white"
              >
                Pakete entdecken
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }