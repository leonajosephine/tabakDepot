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
    },
  ];
  
  export default function Packages({ onInquiry }: PackagesProps) {
    return (
      <section
        id="pakete"
        className="bg-[var(--cream)] py-24 text-[var(--ink)] md:py-36"
      >
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-7 text-[var(--muted-dark)]">
                Ihr Erlebnis
              </p>
  
              <h2
                className="font-display font-medium leading-[0.94] tracking-[-0.04em]"
                style={{
                  fontSize: "clamp(3.3rem, 5.5vw, 5.8rem)",
                }}
              >
                So individuell
                <br />
                wie Ihr
                <br />
                <span className="italic text-[var(--muted-dark)]">
                  Anlass.
                </span>
              </h2>
            </div>
  
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="max-w-xl text-[15px] leading-7 text-[var(--muted-dark)]">
                Vom kleinen Zigarren-Paket bis zum vollständig betreuten
                Erlebnis: Wir stellen das Angebot passend zu Ihrem Event,
                Ihren Gästen und Ihren Vorstellungen zusammen.
              </p>
            </div>
          </div>
  
          <div className="mt-20 grid border-y border-[var(--line-dark)] md:grid-cols-2">
            {packages.map((item, index) => (
              <article
                key={item.id}
                className={`py-10 md:p-10 lg:p-14 ${
                  index === 0
                    ? "border-b border-[var(--line-dark)] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-[var(--muted-dark)]">
                    Option {item.number}
                  </span>
  
                  <span className="font-display text-xl italic text-[var(--muted-dark)]">
                    {item.price}
                  </span>
                </div>
  
                <div className="my-10 aspect-[16/9] overflow-hidden bg-[#ddd5ca]">
                  <img
                    src={
                      index === 0
                        ? "https://images.unsplash.com/photo-1749842839766-8b71630a627d?auto=format&fit=crop&w=1000&q=85"
                        : "https://images.unsplash.com/photo-1679419858680-5bcb97e7175f?auto=format&fit=crop&w=1000&q=85"
                    }
                    alt=""
                    className="h-full w-full object-cover grayscale-[20%]"
                  />
                </div>
  
                <p className="mb-3 text-[9px] uppercase tracking-[0.24em] text-[var(--muted-dark)]">
                  {item.type}
                </p>
  
                <h3 className="font-display text-4xl font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>
  
                <p className="mt-5 max-w-md text-sm leading-6 text-[var(--muted-dark)]">
                  {item.description}
                </p>
  
                <div className="mt-9 border-t border-[var(--line-dark)]">
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
  
                <button
                  onClick={() => onInquiry?.(item.id)}
                  className="mt-8 text-[9px] font-medium uppercase tracking-[0.22em] underline decoration-black/30 underline-offset-[7px] transition-opacity hover:opacity-50"
                >
                  Paket anfragen
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }