export default function ImpressumPage() {
    return (
      <main className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
        <div className="container-main py-32 md:py-40">
          <p className="eyebrow text-[var(--muted-dark)]">
            Rechtliches
          </p>
  
          <h1 className="mt-6 font-display text-6xl font-medium tracking-[-0.04em] md:text-8xl">
            Impressum
          </h1>
  
          <div className="mt-16 max-w-2xl border-t border-[var(--line-dark)] pt-8">
            <p className="text-sm leading-7 text-[var(--muted-dark)]">
              Angaben gemäß § 5 DDG
            </p>
  
            <div className="mt-8 space-y-6 text-sm leading-7">
              <div>
                <p className="font-medium">
                  Tabak Depot Uphoff
                </p>
  
                <p className="text-[var(--muted-dark)]">
                  [Unternehmensname / Inhaber]
                  <br />
                  [Straße und Hausnummer]
                  <br />
                  [PLZ Ort]
                </p>
              </div>
  
              <div>
                <p className="font-medium">Kontakt</p>
  
                <p className="text-[var(--muted-dark)]">
                  Telefon: [Telefonnummer]
                  <br />
                  E-Mail: [E-Mail-Adresse]
                </p>
              </div>
  
              <p className="text-xs text-[var(--muted-dark)]/60">
                Die vollständigen rechtlichen Angaben werden
                derzeit ergänzt.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }