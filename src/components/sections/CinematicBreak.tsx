"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export default function CinematicBreak() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-4%", "4%"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1.06, 1.01]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [0, 0, 0] : [32, 0, -24]
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--cream)] px-4 py-4 md:px-6 md:py-6"
    >
      <div className="relative min-h-[70svh] overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1768224949425-8c317d30e2d4?auto=format&fit=crop&w=2000&q=90"
          alt=""
          style={{
            y: imageY,
            scale: imageScale,
          }}
          className="absolute -inset-y-[6%] left-0 h-[112%] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 20%, rgba(10,8,6,.24) 100%)",
          }}
        />

        <div className="relative z-10 flex min-h-[70svh] items-center justify-center px-6 py-24 text-center text-white">
          <motion.div style={{ y: contentY }}>
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
          </motion.div>
        </div>

        <span className="absolute bottom-7 left-7 z-10 text-[8px] uppercase tracking-[0.28em] text-white/35 md:bottom-9 md:left-9">
          Genusskultur · Minden
        </span>
      </div>
    </section>
  );
}