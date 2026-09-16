"use client";

import { useEffect, useState } from "react";

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

export default function Navigation({ onInquiry }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(16, 14, 12, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(242,238,230,.1)"
          : "1px solid transparent",
      }}
    >
      <div className="container-main flex h-[76px] items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
            <span className="font-display text-[19px] font-semibold text-[var(--cream)]">
              TD
            </span>
          </div>

          <div className="hidden flex-col sm:flex">
            <span className="font-display text-[17px] font-semibold leading-none tracking-[0.08em] text-[var(--cream)]">
              TABAK DEPOT
            </span>

            <span className="mt-1 text-[8px] uppercase tracking-[0.34em] text-white/40">
              Uphoff · Minden
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={onInquiry}
          className="hidden border border-white/25 px-5 py-2.5 text-[9px] uppercase tracking-[0.22em] text-white/70 transition-all hover:border-white/60 hover:text-white lg:block"
        >
          Event anfragen
        </button>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label="Menü öffnen"
        >
          <span className="h-px w-5 bg-white" />
          <span className="h-px w-5 bg-white" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#100e0c] lg:hidden">
          <div className="container-main flex flex-col py-7">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-4 text-xs uppercase tracking-[0.2em] text-white/65"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMenuOpen(false);
                onInquiry?.();
              }}
              className="mt-7 text-left text-xs uppercase tracking-[0.2em] text-white"
            >
              Event anfragen →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}