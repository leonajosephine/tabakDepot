import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      <div className="container-main py-28 md:py-36 lg:py-40">
        {/* HEADER */}
        <div className="max-w-4xl">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-[8px] uppercase tracking-[0.24em] text-[var(--muted-dark)] transition-colors hover:text-[var(--ink)]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Zurück zur Website
          </Link>

          <p className="eyebrow mt-16 text-[var(--muted-dark)]">
            Rechtliches
          </p>

          <h1 className="mt-6 font-display text-6xl font-medium leading-[0.9] tracking-[-0.045em] md:text-8xl">
            Impressum
          </h1>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid gap-12 border-t border-[var(--line-dark)] pt-10 lg:grid-cols-12 lg:gap-16">
          {/* SIDEBAR */}
          <div className="lg:col-span-3">
            <p className="text-[9px] uppercase tracking-[0.22em] text-[var(--muted-dark)]">
              Angaben gemäß § 5 DDG
            </p>
          </div>

          {/* LEGAL CONTENT */}
          <div className="max-w-2xl space-y-12 lg:col-span-7 lg:col-start-5">
            <section>
              <h2 className="font-display text-3xl font-medium">
                Anbieter
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Tabak-Depot Minden
                <br />
                Torsten Uphoff
                <br />
                Markt 10
                <br />
                32423 Minden
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-medium">
                Kontakt
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Telefon: 0571 / 2 23 10
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@tabakdepot-uphoff.de"
                  className="underline decoration-black/20 underline-offset-4 transition-colors hover:text-[var(--ink)]"
                >
                  info@tabakdepot-uphoff.de
                </a>
              </p>
            </section>

            {/* TODO: VOR LIVEGANG PRÜFEN */}
            <section>
              <h2 className="font-display text-3xl font-medium">
                Registereintrag
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Register: [REGISTER / FALLS VORHANDEN]
                <br />
                Registernummer: [REGISTERNUMMER]
              </p>
            </section>

            {/* TODO: VOR LIVEGANG PRÜFEN */}
            <section>
              <h2 className="font-display text-3xl font-medium">
                Umsatzsteuer
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a
                Umsatzsteuergesetz:
                <br />
                [UST-IDNR. / FALLS VORHANDEN]
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-medium">
                Verbraucherstreitbeilegung
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-medium">
                Haftung für Inhalte
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Als Diensteanbieter sind wir für eigene Inhalte
                auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Verpflichtungen zur Entfernung oder Sperrung der
                Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten
                Rechtsverletzung möglich. Bei Bekanntwerden
                entsprechender Rechtsverletzungen werden wir
                diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-medium">
                Haftung für Links
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Unser Angebot kann Links zu externen Websites
                Dritter enthalten, auf deren Inhalte wir keinen
                Einfluss haben. Für diese fremden Inhalte können
                wir daher keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der
                jeweilige Anbieter oder Betreiber verantwortlich.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Bei Bekanntwerden von Rechtsverletzungen werden
                wir entsprechende Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-medium">
                Urheberrecht
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Die durch die Seitenbetreiber erstellten Inhalte
                und Werke auf dieser Website unterliegen dem
                deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des
                Urheberrechts bedürfen der Zustimmung des
                jeweiligen Rechteinhabers.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Soweit Inhalte auf dieser Website nicht vom
                Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet.
              </p>
            </section>
          </div>
        </div>

        {/* FOOT */}
        <div className="mt-20 flex items-center gap-5 border-t border-[var(--line-dark)] pt-8">
          <span className="h-px flex-1 bg-[var(--line-dark)]" />

          <span className="text-[8px] uppercase tracking-[0.28em] text-[var(--muted-dark)]">
            Tabak Depot Uphoff · Minden
          </span>
        </div>
      </div>
    </main>
  );
}