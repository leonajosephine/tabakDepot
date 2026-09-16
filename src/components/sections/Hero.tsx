type HeroProps = {
    onInquiry?: () => void;
  };
  
  export default function Hero({ onInquiry }: HeroProps) {
    return (
      <section className="relative min-h-[100svh] overflow-hidden bg-[#100e0c] text-[var(--cream)]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613406046246-f8f921afa142?auto=format&fit=crop&w=2000&q=90"
            alt=""
            className="h-full w-full object-cover"
          />
  
          <div className="absolute inset-0 bg-black/30" />
  
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(15,13,11,.94) 0%, rgba(15,13,11,.58) 38%, rgba(15,13,11,.12) 72%, rgba(15,13,11,.3) 100%)",
            }}
          />
  
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, #100e0c 0%, transparent 27%, rgba(15,13,11,.2) 100%)",
            }}
          />
        </div>
  
        {/* Giant background word */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[6%] z-[1] overflow-hidden">
          <p
            className="font-display whitespace-nowrap font-semibold leading-[0.7] text-white/[0.07]"
            style={{
              fontSize: "clamp(9rem, 25vw, 26rem)",
              letterSpacing: "-0.055em",
            }}
          >
            UPHOFF
          </p>
        </div>
  
        <div className="container-main relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-32 md:pb-12">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            {/* Main statement */}
            <div className="lg:col-span-8">
              <p className="eyebrow mb-7 text-white/45">
                Tabak Depot Uphoff · Minden
              </p>
  
              <h1
                className="font-display max-w-[1000px] font-medium leading-[0.82] tracking-[-0.055em]"
                style={{
                  fontSize: "clamp(4.4rem, 10vw, 9.6rem)",
                }}
              >
                Genuss,
                <br />
                <span className="italic">der bleibt.</span>
              </h1>
            </div>
  
            {/* Supporting content */}
            <div className="lg:col-span-3 lg:col-start-10 lg:pb-3">
              <div className="mb-6 h-px w-full bg-white/20" />
  
              <p className="mb-7 max-w-[330px] text-sm leading-6 text-white/60">
                Zigarren, Whisky und persönliche Beratung – in unseren Depots
                und als besonderes Erlebnis auf Ihrem Event.
              </p>
  
              <div className="flex flex-wrap gap-3">
                <a
                  href="#erlebnis"
                  className="bg-[var(--cream)] px-5 py-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--ink)] transition-opacity hover:opacity-85"
                >
                  Erlebnis entdecken
                </a>
  
                <button
                  onClick={onInquiry}
                  className="border border-white/25 px-5 py-3 text-[9px] font-medium uppercase tracking-[0.2em] text-white/75 transition-all hover:border-white/60 hover:text-white"
                >
                  Event anfragen
                </button>
              </div>
            </div>
          </div>
  
          {/* Bottom meta */}
          <div className="mt-16 flex items-end justify-between border-t border-white/15 pt-5">
            <div className="flex gap-8">
              <span className="text-[9px] uppercase tracking-[0.24em] text-white/35">
                Zigarre
              </span>
  
              <span className="hidden text-[9px] uppercase tracking-[0.24em] text-white/35 sm:block">
                Whisky
              </span>
  
              <span className="hidden text-[9px] uppercase tracking-[0.24em] text-white/35 sm:block">
                Events
              </span>
            </div>
  
            <a
              href="#intro"
              className="flex items-center gap-4 text-[9px] uppercase tracking-[0.24em] text-white/40"
            >
              Scroll
              <span className="block h-10 w-px bg-white/30" />
            </a>
          </div>
        </div>
      </section>
    );
  }