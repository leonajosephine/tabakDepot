export default function DatenschutzPage() {
    return (
      <main className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
        <div className="container-main py-32 md:py-40">
          <p className="eyebrow text-[var(--muted-dark)]">
            Rechtliches
          </p>
  
          <h1 className="mt-6 font-display text-6xl font-medium tracking-[-0.04em] md:text-8xl">
            Datenschutz
          </h1>
  
          <div className="mt-16 max-w-2xl border-t border-[var(--line-dark)] pt-8">
            <div className="space-y-10 text-sm leading-7 text-[var(--muted-dark)]">
              <section>
                <h2 className="font-display text-2xl font-medium text-[var(--ink)]">
                  Datenschutzerklärung
                </h2>
  
                <p className="mt-4">
                  Der Schutz Ihrer persönlichen Daten ist uns
                  wichtig. Die vollständige Datenschutzerklärung
                  dieser Website wird derzeit erstellt und an die
                  tatsächlich eingesetzten Dienste und Funktionen
                  angepasst.
                </p>
              </section>
  
              <section>
                <h2 className="font-display text-2xl font-medium text-[var(--ink)]">
                  Verantwortlicher
                </h2>
  
                <p className="mt-4">
                  Tabak Depot Uphoff
                  <br />
                  [Unternehmensname / Inhaber]
                  <br />
                  [Straße und Hausnummer]
                  <br />
                  [PLZ Ort]
                  <br />
                  E-Mail: [E-Mail-Adresse]
                </p>
              </section>
  
              <section>
                <h2 className="font-display text-2xl font-medium text-[var(--ink)]">
                  Hinweis
                </h2>
  
                <p className="mt-4">
                  Diese Seite enthält derzeit eine vorläufige
                  Datenschutzerklärung. Die vollständigen Angaben
                  zur Verarbeitung personenbezogener Daten werden
                  vor Veröffentlichung der finalen Website ergänzt.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    );
  }