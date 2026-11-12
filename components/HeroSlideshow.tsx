"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { HERO_SLIDES } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "./icons";

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="hero"
      aria-label="Hero Slideshow"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#111215] pt-32 pb-12"
    >
      {/* Background Images with smooth cinematic cross-fade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            } transition-transform duration-7000`}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              priority={idx === 0}
              quality={95}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Multi-layered cinematic gradient for text contrast & luxury depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-[#111215]/50 to-[#111215]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111215]/80 via-transparent to-[#111215]/30" />
          </div>
        ))}
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 sm:py-16">
        <div className="max-w-3xl space-y-7">
          {/* Main Headline (Instrument Sans) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium text-white tracking-tight leading-[1.08] transition-all duration-700">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-200 font-light max-w-2xl leading-relaxed">
            {slide.subtitle}
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#c59b4e] hover:text-black hover:shadow-xl shadow-md group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-white/20"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
