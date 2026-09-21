import Image from "next/image";

type FooterProps = {
  onInquiry?: () => void;
};

export default function Footer({
  onInquiry,
}: FooterProps) {
  return (
    <footer className="bg-[#100e0c] text-[var(--cream)]">
      <div className="container-main py-16">
        {/* MAIN FOOTER */}
        <div className="grid gap-14 lg:grid-cols-12">
          {/* BRAND */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-5">
              <Image
                src="/images/logo1.png"
                alt="Tabak Depot Uphoff"
                width={58}
                height={58}
                priority
                className="h-[52px] w-[52px] object-contain"
              />

              <div>
                <p className="font-display text-xl font-medium tracking-[0.08em]">
                  TABAK DEPOT
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/30">
                  Uphoff · Minden
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-sm text-xs leading-5 text-white/30">
              Zigarren, Whisky, Spirituosen und besondere
              Genussmomente – persönlich in Minden und auf
              Ihrem Event.
            </p>

            <p className="mt-8 font-display text-xl italic text-white/25">
              Genusskultur seit 1978.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-10 lg:col-span-4 lg:col-start-7">
            {/* EXPLORE */}
            <div>
              <p className="eyebrow mb-6 text-white/25">
                Entdecken
              </p>

              <div className="flex flex-col items-start gap-3 text-xs text-white/45">
                <a
                  href="#erlebnis"
                  className="transition-colors hover:text-white"
                >
                  Erlebnis
                </a>

                <a
                  href="#pakete"
                  className="transition-colors hover:text-white"
                >
                  Pakete
                </a>

                <a
                  href="#whisky"
                  className="transition-colors hover:text-white"
                >
                  Whisky
                </a>

                <a
                  href="#sortiment"
                  className="transition-colors hover:text-white"
                >
                  Sortiment
                </a>

                <a
                  href="#standorte"
                  className="transition-colors hover:text-white"
                >
                  Standorte
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p className="eyebrow mb-6 text-white/25">
                Kontakt
              </p>

              <div className="flex flex-col items-start gap-3 text-xs text-white/45">
                <button
                  onClick={onInquiry}
                  className="text-left transition-colors hover:text-white"
                >
                  Event anfragen
                </button>

                <a
                  href="tel:+4957122310"
                  className="transition-colors hover:text-white"
                >
                  0571 / 2 23 10
                </a>

                <a
                  href="mailto:info@tabakdepot-uphoff.de"
                  className="break-all transition-colors hover:text-white"
                >
                  info@tabakdepot-uphoff.de
                </a>

                <a
                  href="#standorte"
                  className="mt-2 leading-5 transition-colors hover:text-white"
                >
                  Markt 10
                  <br />
                  32423 Minden
                </a>
              </div>
            </div>
          </div>

          {/* SMALL SIGNATURE */}
          <div className="hidden items-end justify-end lg:col-span-2 lg:flex">
            <p
              className="font-display text-6xl italic leading-none text-white/[0.06]"
              style={{
                writingMode: "vertical-rl",
              }}
            >
              Minden
            </p>
          </div>
        </div>

        {/* LEGAL */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-6 text-[9px] text-white/20 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Tabak Depot Uphoff
          </span>

          <div className="flex gap-6">
            <a
              href="/impressum"
              className="transition-colors hover:text-white/50"
            >
              Impressum
            </a>

            <a
              href="/datenschutz"
              className="transition-colors hover:text-white/50"
            >
              Datenschutz
            </a>
          </div>

          <span>Tabak & Alkohol ab 18 Jahren</span>
        </div>
      </div>
    </footer>
  );
}