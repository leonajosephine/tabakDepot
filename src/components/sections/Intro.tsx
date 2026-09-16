export default function Intro() {
    return (
      <section
        id="intro"
        className="overflow-hidden bg-[var(--cream)] py-24 text-[var(--ink)] md:py-36"
      >
        <div className="container-main">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow text-[var(--muted-dark)]">
                Mehr als ein Fachgeschäft
              </p>
            </div>
  
            <div className="lg:col-span-9">
              <h2
                className="font-display max-w-[1100px] font-medium leading-[0.92] tracking-[-0.045em]"
                style={{
                  fontSize: "clamp(3.5rem, 7.4vw, 7.4rem)",
                }}
              >
                Eine gute Zigarre
                <br />
                kauft man nicht nur.
                <br />
                <span className="italic text-[var(--muted-dark)]">
                  Man erlebt sie.
                </span>
              </h2>
            </div>
          </div>
  
          <div className="mt-20 grid gap-10 border-t border-[var(--line-dark)] pt-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <span className="font-display text-2xl italic text-[var(--muted-dark)]">
                Seit Generationen in Minden.
              </span>
            </div>
  
            <div className="lg:col-span-4 lg:col-start-6">
              <p className="text-[15px] leading-7 text-[var(--muted-dark)]">
                Tabak Depot Uphoff verbindet persönliche Beratung, ausgewählte
                Zigarren und besondere Spirituosen mit einem neuen Gedanken:
                Genuss dorthin zu bringen, wo besondere Momente entstehen.
              </p>
            </div>
  
            <div className="lg:col-span-3 lg:col-start-10">
              <p className="text-[15px] leading-7 text-[var(--muted-dark)]">
                Im Laden in Minden – oder als individuell zusammengestelltes
                Zigarren-Erlebnis für Hochzeiten, Firmenfeiern und private
                Veranstaltungen.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }