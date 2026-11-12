"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "./icons";

export function PreFooterCTA() {
  const pathname = usePathname();

  // If already on the contact page, the button smoothly directs to the consultation form
  const isContactPage = pathname === "/contact";

  return (
    <section className="relative py-14 sm:py-18 bg-[#0c0f0d] text-white overflow-hidden text-center border-t border-white/5">
      {/* Background Architectural Panorama */}
      <div className="absolute inset-0 z-0 opacity-35">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=85"
          alt="Panoramic Villa Architecture"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f0d] via-[#0c0f0d]/60 to-[#0c0f0d]/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#c59b4e] block font-heading">
          WHERE CRAFTSMANSHIP MEETS PERMANENCE
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-medium tracking-tight text-white leading-tight">
          Have a distinct architectural sanctuary in mind?
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
          From preliminary volumetric space planning to rare stone selection and bespoke millwork commissioning, our studio directors are at your service.
        </p>

        {/* Dual CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href={isContactPage ? "#contact" : "/contact"}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#c59b4e] transition-colors font-heading shadow-md"
          >
            <span>Initiate A Commission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors font-heading backdrop-blur-md"
          >
            <span>Explore Portfolio</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

