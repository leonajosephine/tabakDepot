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

import InquiryModal from "@/components/ui/InquiryModal";

export default function Home() {
  const [inquiryOpen, setInquiryOpen] =
    useState(false);

  const [selectedPackage, setSelectedPackage] =
    useState("");

  const openInquiry = (
    packageId = ""
  ) => {
    setSelectedPackage(packageId);
    setInquiryOpen(true);
  };

  return (
    <>
      <Navigation
        onInquiry={() => openInquiry()}
      />

      <main>
        <Hero
          onInquiry={() => openInquiry()}
        />

        <Intro />

        <CigarExperience />

        <Packages
          onInquiry={openInquiry}
        />

        <Premium
          onInquiry={openInquiry}
        />

        <CinematicBreak />

        <WhiskyShowcase
          onInquiry={() => openInquiry()}
        />

        <Sortiment />

        <Locations />

        <FinalCTA
          onInquiry={() => openInquiry()}
        />
      </main>

      <Footer
        onInquiry={() => openInquiry()}
      />

      <InquiryModal
        open={inquiryOpen}
        selectedPackage={selectedPackage}
        onClose={() =>
          setInquiryOpen(false)
        }
      />
    </>
  );
}