type FinalCTAProps = {
    onInquiry?: () => void;
  };
  
  export default function FinalCTA({ onInquiry }: FinalCTAProps) {
    return (
      <section className="bg-[var(--cream)] px-4 pb-4 md:px-6 md:pb-6">
        <div className="relative overflow-hidden bg-[#17130f] px-6 py-24 text-center text-[var(--cream)] md:py-36">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              background:
                "radial-gradient(circle at 50% 120%, #fff 0%, transparent 55%)",
            }}
          />
  
          <div className="relative z-10 mx-auto max-w-5xl">
            <p className="eyebrow mb-7 text-white/35">
              Ihr Event · Ihr Erlebnis
            </p>
  
            <h2
              className="font-display font-medium leading-[0.88] tracking-[-0.045em]"
              style={{
                fontSize: "clamp(4rem, 8vw, 8rem)",
              }}
            >
              Was dürfen wir
              <br />
              für Sie <span className="italic text-white/55">vorbereiten?</span>
            </h2>
  
            <p className="mx-auto mt-9 max-w-lg text-sm leading-6 text-white/45">
              Erzählen Sie uns kurz von Ihrem Anlass. Wir melden uns mit einer
              persönlichen Empfehlung für Zigarren, Service und auf Wunsch das
              passende Whisky-Pairing.
            </p>
  
            <button
              onClick={onInquiry}
              className="mt-10 bg-[var(--cream)] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--ink)] transition-opacity hover:opacity-80"
            >
              Unverbindlich anfragen
            </button>
          </div>
        </div>
      </section>
    );
  }