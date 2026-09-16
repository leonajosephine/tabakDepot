type FooterProps = {
    onInquiry?: () => void;
  };
  
  export default function Footer({ onInquiry }: FooterProps) {
    return (
      <footer className="bg-[#100e0c] text-[var(--cream)]">
        <div className="container-main py-16">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25">
                  <span className="font-display text-2xl font-semibold">
                    TD
                  </span>
                </div>
  
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
                Zigarren, Whisky, Spirituosen und besondere Genussmomente –
                persönlich in Minden und auf Ihrem Event.
              </p>
            </div>
  
            <div className="grid grid-cols-2 gap-10 lg:col-span-4 lg:col-start-7">
              <div>
                <p className="eyebrow mb-6 text-white/25">Entdecken</p>
  
                <div className="flex flex-col gap-3 text-xs text-white/45">
                  <a href="#erlebnis">Erlebnis</a>
                  <a href="#pakete">Pakete</a>
                  <a href="#whisky">Whisky</a>
                  <a href="#sortiment">Sortiment</a>
                  <a href="#standorte">Standorte</a>
                </div>
              </div>
  
              <div>
                <p className="eyebrow mb-6 text-white/25">Kontakt</p>
  
                <div className="flex flex-col gap-3 text-xs text-white/45">
                  <button
                    onClick={onInquiry}
                    className="text-left"
                  >
                    Event anfragen
                  </button>
  
                  <a href="#">Instagram</a>
                  <a href="#">Facebook</a>
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-6 text-[9px] text-white/20 md:flex-row md:items-center md:justify-between">
            <span>
              © {new Date().getFullYear()} Tabak Depot Uphoff
            </span>
  
            <div className="flex gap-6">
              <a href="#">Impressum</a>
              <a href="#">Datenschutz</a>
            </div>
  
            <span>Tabak & Alkohol ab 18 Jahren</span>
          </div>
        </div>
      </footer>
    );
  }