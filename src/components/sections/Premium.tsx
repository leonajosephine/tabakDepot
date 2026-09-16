type PremiumExperienceProps = {
    onInquiry?: (packageId?: string) => void;
  };
  
  export default function Premium({
    onInquiry,
  }: PremiumExperienceProps) {
    return (
      <section className="relative min-h-[850px] overflow-hidden bg-[#0d0b09] text-[var(--cream)]">
        <img
          src="https://images.unsplash.com/photo-1778548646491-8afb9849e1df?auto=format&fit=crop&w=2000&q=90"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
  
        <div className="absolute inset-0 bg-black/45" />
  
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(12,10,8,.92) 0%, rgba(12,10,8,.66) 45%, rgba(12,10,8,.18) 80%)",
          }}
        />
  
        <div className="container-main relative z-10 flex min-h-[850px] items-center py-24">
          <div className="max-w-[900px]">
            <div className="mb-9 flex items-center gap-5">
              <span className="eyebrow text-white/45">Option 03</span>
  
              <span className="h-px w-16 bg-white/30" />
  
              <span className="eyebrow text-white/45">
                Private Service
              </span>
            </div>
  
            <h2
              className="font-display font-medium leading-[0.84] tracking-[-0.05em]"
              style={{
                fontSize: "clamp(4.5rem, 9vw, 9rem)",
              }}
            >
              Ein Abend,
              <br />
              <span className="italic">der bleibt.</span>
            </h2>
  
            <div className="mt-12 grid max-w-3xl gap-10 border-t border-white/20 pt-8 md:grid-cols-2">
              <div>
                <p className="font-display text-3xl font-medium">
                  Mit persönlichem
                  <br />
                  Zigarren-Sommelier.
                </p>
              </div>
  
              <div>
                <p className="text-sm leading-6 text-white/55">
                  Unser Sommelier begleitet Ihr Event persönlich, berät Ihre
                  Gäste bei der Auswahl und macht aus dem Genuss ein Erlebnis,
                  über das man noch lange spricht.
                </p>
  
                <p className="mt-4 text-sm leading-6 text-white/55">
                  Auf Wunsch ergänzt durch ein individuell abgestimmtes
                  Whisky-Pairing.
                </p>
  
                <button
                  onClick={() => onInquiry?.("premium")}
                  className="mt-8 bg-[var(--cream)] px-6 py-3.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--ink)] transition-opacity hover:opacity-80"
                >
                  Premium-Erlebnis anfragen
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <p
          className="pointer-events-none absolute -bottom-[2vw] right-[-1vw] font-display font-semibold leading-none text-white/[0.055]"
          style={{
            fontSize: "clamp(8rem, 20vw, 20rem)",
          }}
        >
          03
        </p>
      </section>
    );
  }