import React from "react";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { HomeExperience } from "@/components/HomeExperience";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Slideshow (Enriched, Instrument Sans, No numeric counter) */}
      <HeroSlideshow />

      {/* Architectural Experience & Atelier Summary */}
      <HomeExperience />
    </div>
  );
}
