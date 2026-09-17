"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Erlebnis", href: "#erlebnis" },
  { label: "Pakete", href: "#pakete" },
  { label: "Whisky", href: "#whisky" },
  { label: "Sortiment", href: "#sortiment" },
  { label: "Standorte", href: "#standorte" },
];

type NavigationProps = {
  onInquiry?: () => void;
};

export default function Navigation({
  onInquiry,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 40);

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 text-[var(--cream)] transition-all duration-500"
        style={{
          background:
            scrolled && !menuOpen
              ? "rgba(16,14,12,.88)"
              : menuOpen
                ? "#100e0c"
                : "linear-gradient(to bottom, rgba(12,10,8,.5), transparent)",
          backdropFilter:
            scrolled && !menuOpen ? "blur(18px)" : "none",
          borderBottom:
            scrolled && !menuOpen
              ? "1px solid rgba(242,238,230,.1)"
              : "1px solid transparent",
        }}
      >
        <div className="container-main flex h-[74px] items-center justify-between md:h-[84px] lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* BRAND */}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="relative z-50 flex items-center gap-3 lg:justify-self-start"
          >
            <Image
              src="/images/logo1.png"
              alt="Tabak Depot Uphoff"
              width={52}
              height={52}
              priority
              className="h-[46px] w-[46px] object-contain md:h-[52px] md:w-[52px]"
            />

            <div className="hidden sm:block">
              <p className="font-display text-[16px] font-semibold leading-none tracking-[0.07em]">
                TABAK DEPOT
              </p>

              <p className="mt-1.5 text-[7px] uppercase tracking-[0.34em] text-white/40">
                Uphoff · Minden
              </p>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="relative z-50 flex items-center lg:justify-self-end">
            <button
              onClick={onInquiry}
              className="hidden items-center gap-3 text-[9px] uppercase tracking-[0.21em] text-white/60 transition-colors hover:text-white lg:flex"
            >
              Event anfragen

              <span className="text-sm">↗</span>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() =>
                setMenuOpen((value) => !value)
              }
              className="relative flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label={
                menuOpen ? "Menü schließen" : "Menü öffnen"
              }
              aria-expanded={menuOpen}
            >
              <span
                className={`absolute h-px w-5 bg-white transition-transform duration-300 ${
                  menuOpen
                    ? "rotate-45"
                    : "-translate-y-[4px]"
                }`}
              />

              <span
                className={`absolute h-px w-5 bg-white transition-transform duration-300 ${
                  menuOpen
                    ? "-rotate-45"
                    : "translate-y-[4px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#100e0c] text-[var(--cream)] lg:hidden"
          >
            <div className="container-main flex h-full flex-col pb-8 pt-[112px]">
              <nav className="flex flex-1 flex-col justify-center">
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.04 + index * 0.045,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-center border-b border-white/10 py-4"
                  >
                    <span className="mr-5 text-[8px] uppercase tracking-[0.24em] text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-display text-[clamp(2.6rem,12vw,4.5rem)] font-medium leading-none tracking-[-0.035em]">
                      {link.label}
                    </span>

                    <span className="ml-auto text-sm text-white/25 transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 flex items-end justify-between gap-8">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.28em] text-white/25">
                    Tabak Depot Uphoff
                  </p>

                  <p className="mt-2 font-display text-lg italic text-white/45">
                    Minden · Seit 1978
                  </p>
                </div>

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onInquiry?.();
                  }}
                  className="flex items-center gap-4 bg-[var(--cream)] px-5 py-3.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]"
                >
                  Event anfragen
                  <span>↗</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}