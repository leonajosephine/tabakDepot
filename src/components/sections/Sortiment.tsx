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
    return (
      <section
        id="sortiment"
        className="bg-[#161310] py-24 text-[var(--cream)] md:py-32"
      >
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-6 text-white/35">
                In unseren Depots
              </p>
  
              <h2 className="font-display text-5xl font-medium leading-[0.92] tracking-[-0.04em] md:text-7xl">
                Alles für
                <br />
                <span className="italic text-white/50">den Genuss.</span>
              </h2>
            </div>
  
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-white/15">
                {assortment.map((item) => (
                  <div
                    key={item.number}
                    className="group grid gap-3 border-b border-white/15 py-6 md:grid-cols-[60px_1fr_1fr] md:items-center"
                  >
                    <span className="text-[9px] tracking-[0.2em] text-white/25">
                      {item.number}
                    </span>
  
                    <h3 className="font-display text-3xl font-medium transition-transform duration-300 group-hover:translate-x-2">
                      {item.title}
                    </h3>
  
                    <p className="text-xs leading-5 text-white/35">
                      {item.text}
                    </p>
                  </div>
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