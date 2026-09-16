"use client";

import { useState } from "react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import CigarExperience from "@/components/sections/CigarExperience";
import Packages from "@/components/sections/Packages";
import Premium from "@/components/sections/Premium";
import CinematicBreak from "@/components/sections/CinematicBreak";
import WhiskyShowcase from "@/components/sections/WhiskyShowcase";
import Sortiment from "@/components/sections/Sortiment";
import Locations from "@/components/sections/Locations";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const openInquiry = (packageId = "") => {
    setSelectedPackage(packageId);
    setInquiryOpen(true);
  };

  return (
    <main>
      <Navigation onInquiry={() => openInquiry()} />

      <Hero onInquiry={() => openInquiry()} />

      <Intro />

      <CigarExperience />

      <Packages onInquiry={openInquiry} />

      <Premium onInquiry={openInquiry} />

      <CinematicBreak />

      <WhiskyShowcase onInquiry={() => openInquiry("whisky")} />

      <Sortiment />

      <Locations />

      <FinalCTA onInquiry={() => openInquiry()} />

      <Footer onInquiry={() => openInquiry()} />

      {inquiryOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setInquiryOpen(false);
            }
          }}
        >
          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto bg-[var(--cream)] p-7 text-[var(--ink)] md:p-10">
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="eyebrow mb-5 text-[var(--muted-dark)]">
                  Unverbindliche Anfrage
                </p>

                <h2 className="font-display text-4xl font-medium leading-[0.95] tracking-[-0.03em] md:text-5xl">
                  Erzählen Sie uns
                  <br />
                  von Ihrem Event.
                </h2>
              </div>

              <button
                onClick={() => setInquiryOpen(false)}
                className="text-3xl font-light"
                aria-label="Schließen"
              >
                ×
              </button>
            </div>

            {selectedPackage && (
              <p className="mt-7 text-xs text-[var(--muted-dark)]">
                Vorausgewählt: {selectedPackage}
              </p>
            )}

            <p className="mt-5 text-sm leading-6 text-[var(--muted-dark)]">
              Das eigentliche Formular bauen wir beim Überarbeiten dieser
              Komponente vollständig aus.
            </p>

            <button
              onClick={() => setInquiryOpen(false)}
              className="mt-9 bg-[var(--ink)] px-6 py-3 text-[9px] uppercase tracking-[0.22em] text-[var(--cream)]"
            >
              Für jetzt schließen
            </button>
          </div>
        </div>
      )}
    </main>
  );
}