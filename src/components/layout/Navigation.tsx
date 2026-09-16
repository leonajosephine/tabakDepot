"use client";

import { useEffect, useState } from "react";
import TabakDepotMark from "@/components/ui/TabakDepotMark";
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

export default function Navigation({ onInquiry }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 text-[var(--cream)] transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(16,14,12,.88)"
          : "linear-gradient(to bottom, rgba(12,10,8,.5), transparent)",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(242,238,230,.1)"
          : "1px solid transparent",
      }}
    >
      <div className="container-main grid h-[84px] grid-cols-[1fr_auto_1fr] items-center">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 justify-self-start">
        <Image
            src="/images/logo1.png"
            alt="Tabak Depot Uphoff"
            width={52}
            height={52}
            priority
            className="h-[52px] w-[52px] object-contain"
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

        {/* Center navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[9px] uppercase tracking-[0.21em] text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center justify-self-end">
          <button
            onClick={onInquiry}
            className="hidden items-center gap-3 text-[9px] uppercase tracking-[0.21em] text-white/60 transition-colors hover:text-white lg:flex"
          >
            Event anfragen

            <span className="text-sm">↗</span>
          </button>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
            aria-label="Menü öffnen"
          >
            <span className="h-px w-5 bg-white" />
            <span className="h-px w-5 bg-white" />
          </button>
        </div>
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