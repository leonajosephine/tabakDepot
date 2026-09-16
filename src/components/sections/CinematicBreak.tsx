export default function CinematicBreak() {
    return (
      <section className="bg-[var(--cream)] px-4 py-4 md:px-6 md:py-6">
        <div className="relative min-h-[70svh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1768224949425-8c317d30e2d4?auto=format&fit=crop&w=2000&q=90"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
  
          <div className="absolute inset-0 bg-black/35" />
  
          <div className="relative z-10 flex min-h-[70svh] items-center justify-center px-6 py-24 text-center text-white">
            <div>
              <p className="eyebrow mb-7 text-white/45">
                Ausgewählt · gepflegt · beraten
              </p>
  
              <h2
                className="font-display font-medium leading-[0.9] tracking-[-0.045em]"
                style={{
                  fontSize: "clamp(4rem, 9vw, 9rem)",
                }}
              >
                Für Menschen,
                <br />
                die <span className="italic">genießen.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }