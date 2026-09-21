import Link from "next/link";

export default function DatenschutzPage() {
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
            Datenschutz
          </h1>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid gap-12 border-t border-[var(--line-dark)] pt-10 lg:grid-cols-12 lg:gap-16">
          {/* SIDEBAR */}
          <div className="lg:col-span-3">
            <p className="text-[9px] uppercase tracking-[0.22em] text-[var(--muted-dark)]">
              Datenschutzerklärung
            </p>
          </div>

          {/* LEGAL CONTENT */}
          <div className="max-w-2xl space-y-14 lg:col-span-7 lg:col-start-5">
            <section>
              <h2 className="font-display text-3xl font-medium">
                1. Datenschutz auf einen Blick
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Der Schutz Ihrer persönlichen Daten ist uns
                wichtig. Personenbezogene Daten sind alle Daten,
                mit denen Sie persönlich identifiziert werden
                können.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Beim Besuch dieser Website werden insbesondere
                technisch erforderliche Daten verarbeitet, die
                für die Bereitstellung und Sicherheit der
                Website notwendig sind. Weitere personenbezogene
                Daten werden verarbeitet, wenn Sie uns diese
                beispielsweise im Rahmen einer Kontaktaufnahme
                mitteilen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-medium">
                2. Verantwortliche Stelle
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Verantwortlich für die Datenverarbeitung auf
                dieser Website ist:
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Tabak-Depot Minden
                <br />
                Torsten Uphoff
                <br />
                Markt 10
                <br />
                32423 Minden
                <br />
                <br />
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

            <section>
              <h2 className="font-display text-3xl font-medium">
                3. Hosting
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Diese Website wird über Vercel bereitgestellt.
                Anbieter ist Vercel Inc., 440 N Barranca Ave
                #4133, Covina, CA 91723, USA.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Beim Aufruf unserer Website können durch den
                Hosting-Anbieter technisch erforderliche Daten
                verarbeitet werden. Hierzu können insbesondere
                die IP-Adresse, Informationen zum verwendeten
                Browser und Betriebssystem, Zeitpunkt des
                Seitenaufrufs sowie technische
                Verbindungsinformationen gehören.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Die Verarbeitung erfolgt zum Zweck der sicheren,
                stabilen und technisch fehlerfreien
                Bereitstellung dieser Website. Rechtsgrundlage
                ist Art. 6 Abs. 1 lit. f DSGVO. Unser
                berechtigtes Interesse liegt in der sicheren und
                zuverlässigen Bereitstellung unseres
                Internetauftritts.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Da Vercel ein Unternehmen mit Sitz in den USA
                ist, kann eine Verarbeitung personenbezogener
                Daten außerhalb der Europäischen Union bzw. des
                Europäischen Wirtschaftsraums stattfinden.
                Vercel sieht für entsprechende internationale
                Datenübermittlungen unter anderem die von der
                Europäischen Kommission verabschiedeten
                Standardvertragsklauseln vor.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-medium">
                4. Server-Log-Dateien
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Beim Aufruf dieser Website können automatisch
                technische Informationen verarbeitet werden,
                die Ihr Browser an den Server übermittelt. Dazu
                können insbesondere folgende Daten gehören:
              </p>

              <ul className="mt-5 space-y-2 text-sm leading-7 text-[var(--muted-dark)]">
                <li>– IP-Adresse</li>
                <li>– Browsertyp und Browserversion</li>
                <li>– verwendetes Betriebssystem</li>
                <li>– aufgerufene Seite bzw. Datei</li>
                <li>– Datum und Uhrzeit des Zugriffs</li>
                <li>– Referrer-URL, sofern übermittelt</li>
              </ul>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Diese Daten werden insbesondere benötigt, um die
                Website technisch bereitzustellen, ihre
                Stabilität und Sicherheit zu gewährleisten und
                mögliche technische Probleme zu erkennen.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-medium">
                5. Kontaktaufnahme
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Wenn Sie uns per E-Mail oder telefonisch
                kontaktieren, verarbeiten wir die von Ihnen
                übermittelten Angaben zur Bearbeitung Ihrer
                Anfrage und für mögliche Anschlussfragen.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Soweit Ihre Anfrage der Anbahnung oder
                Durchführung eines Vertrags dient, erfolgt die
                Verarbeitung auf Grundlage von Art. 6 Abs. 1
                lit. b DSGVO. In anderen Fällen erfolgt die
                Verarbeitung auf Grundlage unseres berechtigten
                Interesses an der Bearbeitung der an uns
                gerichteten Anfrage gemäß Art. 6 Abs. 1 lit. f
                DSGVO.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Die von Ihnen übermittelten Daten werden
                gelöscht, sobald der Zweck ihrer Speicherung
                entfällt und keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-medium">
                6. Anfrageformular
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Sofern Sie unser Anfrageformular nutzen,
                verarbeiten wir die dort von Ihnen angegebenen
                Daten zur Bearbeitung Ihrer Anfrage. Dazu können
                insbesondere Ihr Name, Ihre E-Mail-Adresse,
                Telefonnummer sowie Angaben zu Veranstaltung,
                gewünschtem Paket, Gästezahl, Termin und
                individuellen Wünschen gehören.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Die Verarbeitung erfolgt zur Durchführung
                vorvertraglicher Maßnahmen auf Grundlage von
                Art. 6 Abs. 1 lit. b DSGVO oder, sofern keine
                konkrete Vertragsanbahnung vorliegt, auf
                Grundlage unseres berechtigten Interesses an der
                Bearbeitung Ihrer Anfrage gemäß Art. 6 Abs. 1
                lit. f DSGVO.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Die übermittelten Daten werden nur so lange
                gespeichert, wie dies zur Bearbeitung der
                Anfrage erforderlich ist oder gesetzliche
                Aufbewahrungspflichten bestehen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-medium">
                7. Cookies und Analyse
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Auf dieser Website werden derzeit keine
                Analyse- oder Marketingdienste eingesetzt, die
                das Nutzungsverhalten zu Werbe- oder
                Analysezwecken verfolgen.
              </p>

              <p className="mt-4 text-sm leading-7 text-[var(--muted-dark)]">
                Sollten zukünftig entsprechende Dienste oder
                einwilligungspflichtige Cookies eingesetzt
                werden, wird diese Datenschutzerklärung
                entsprechend angepasst und – soweit erforderlich
                – vor der Verarbeitung eine Einwilligung
                eingeholt.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-medium">
                8. Ihre Rechte
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Ihnen stehen im Rahmen der gesetzlichen
                Voraussetzungen insbesondere folgende Rechte
                hinsichtlich Ihrer personenbezogenen Daten zu:
              </p>

              <ul className="mt-5 space-y-2 text-sm leading-7 text-[var(--muted-dark)]">
                <li>– Recht auf Auskunft</li>
                <li>– Recht auf Berichtigung</li>
                <li>– Recht auf Löschung</li>
                <li>– Recht auf Einschränkung der Verarbeitung</li>
                <li>– Recht auf Datenübertragbarkeit</li>
                <li>– Recht auf Widerspruch gegen die Verarbeitung</li>
              </ul>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Soweit eine Verarbeitung auf Ihrer Einwilligung
                beruht, können Sie eine erteilte Einwilligung
                jederzeit mit Wirkung für die Zukunft
                widerrufen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-medium">
                9. Beschwerderecht
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Sie haben außerdem das Recht, sich bei einer
                Datenschutzaufsichtsbehörde über die Verarbeitung
                Ihrer personenbezogenen Daten zu beschweren.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-medium">
                10. Aktualität dieser Datenschutzerklärung
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted-dark)]">
                Diese Datenschutzerklärung wird angepasst, wenn
                sich Funktionen, eingesetzte Dienste oder
                rechtliche Anforderungen dieser Website ändern.
              </p>

              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[var(--muted-dark)]/60">
                Stand: September 2026
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