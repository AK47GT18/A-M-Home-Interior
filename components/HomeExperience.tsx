"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/data";
import {
  ArrowRight,
  ArrowUpRight,
  CheckIcon,
  MapPinIcon,
} from "./icons";

export function HomeExperience() {
  const showcaseServices = [
    {
      id: "srv-1",
      number: "01",
      title: "Spatial Planning & CAD",
      category: "Architecture",
      description: "Structural alterations, volumetric flow modeling, and daylight study engineering.",
      imageUrl: "/photos/1794461546702.jpg",
    },
    {
      id: "srv-2",
      number: "02",
      title: "Bespoke Millwork & Joinery",
      category: "Artisan Atelier",
      description: "Custom fluted oak paneling, chef kitchens, and architectural bronze hardware.",
      imageUrl: "/photos/1794461567843.jpg",
    },
    {
      id: "srv-3",
      number: "03",
      title: "Rare Stone & Travertine",
      category: "Material Curation",
      description: "Bookmatched Calacatta Viola and Roman travertine slab selection from Italian quarries.",
      imageUrl: "/photos/1794461584456.jpg",
    },
    {
      id: "srv-4",
      number: "04",
      title: "Atmospheric Lighting",
      category: "Spatial Engineering",
      description: "Concealed perimeter LED washes, museum-grade spotlights, and circadian scenes.",
      imageUrl: "/photos/1794461593670.jpg",
    },
    {
      id: "srv-5",
      number: "05",
      title: "Turnkey White-Glove Handover",
      category: "Site Governance",
      description: "End-to-end site supervision, trade coordination, and zero-defect commissioning.",
      imageUrl: "/photos/1794461596924.jpg",
    },
    {
      id: "srv-6",
      number: "06",
      title: "Fine Art & Rug Curation",
      category: "Haute Living",
      description: "Access to private European galleries, bespoke hand-knotted wool rugs, and collectibles.",
      imageUrl: "/photos/1794461599351.jpg",
    },
  ];

  return (
    <div className="bg-white text-[#0d0f12]">
      {/* ------------------------------------------------------------ */}
      {/* COLLABORATORS / CLIENTS LOGO RIBBON (From uploaded image) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-10 border-b border-black/5 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] font-semibold tracking-widest uppercase text-zinc-400 mb-6 font-heading">
            Trusted by discerning patrons &amp; premier architectural studios
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="font-heading font-bold text-base sm:text-lg tracking-widest text-[#0d0f12]">
              AMARA
            </span>
            <span className="font-heading font-bold text-base sm:text-lg tracking-widest text-[#0d0f12]">
              CIRCLE LIVING
            </span>
            <span className="font-heading font-bold text-base sm:text-lg tracking-widest text-[#0d0f12]">
              GOLDLINE ATELIER
            </span>
            <span className="font-heading font-bold text-base sm:text-lg tracking-widest text-[#0d0f12]">
              STONE ARCHIVE
            </span>
            <span className="font-heading font-bold text-base sm:text-lg tracking-widest text-[#0d0f12]">
              VERVE RESIDENCES
            </span>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* ATELIER STATEMENT + 4 STAT CARDS (Exact match to uploaded layout) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-12 sm:py-28 border-b border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-8 sm:mb-16">
            <div className="lg:col-span-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c59b4e] block font-heading">
                ABOUT US
              </span>
            </div>
            <div className="lg:col-span-9 space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-heading font-medium text-[#0d0f12] leading-snug">
                Turning ordinary residences into thriving architectural sanctuaries since 2012, with 180+ completed commissions. We take pride in delivering bespoke interior solutions that match your space, style, and schedule.
              </h2>
              <p className="text-xs sm:text-base text-zinc-500 font-light leading-relaxed max-w-3xl">
                Every successful spatial transformation begins with a thoughtful conversation. During this private consultation, our team takes the time to understand your lifestyle, proportion preferences, and material aspirations.
              </p>
            </div>
          </div>

          {/* 4 Clean Stat Cards: 2x2 grid on mobile for compactness, 4 columns on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="p-4 sm:p-8 rounded-2xl bg-[#fafaf9] border border-black/5 shadow-xs card-lift space-y-1.5 sm:space-y-3">
              <div className="stat-number text-3xl sm:text-5xl font-bold text-[#c59b4e]">
                180<span className="text-xl sm:text-2xl font-normal">+</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#0d0f12] tracking-tight font-heading">
                Transforming Residencies
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed font-light">
                Landmark private villas and penthouses delivered across the continent.
              </p>
            </div>

            <div className="p-4 sm:p-8 rounded-2xl bg-[#fafaf9] border border-black/5 shadow-xs card-lift space-y-1.5 sm:space-y-3">
              <div className="stat-number text-3xl sm:text-5xl font-bold text-[#c59b4e]">
                12<span className="text-xl sm:text-2xl font-normal">+</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#0d0f12] tracking-tight font-heading">
                Years Atelier Mastery
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed font-light">
                Pioneering architectural clarity, daylighting, and bespoke millwork since 2012.
              </p>
            </div>

            <div className="p-4 sm:p-8 rounded-2xl bg-[#fafaf9] border border-black/5 shadow-xs card-lift space-y-1.5 sm:space-y-3">
              <div className="stat-number text-3xl sm:text-5xl font-bold text-[#c59b4e]">
                99<span className="text-xl sm:text-2xl font-normal">%</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#0d0f12] tracking-tight font-heading">
                Customer Satisfaction
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed font-light">
                Commissions executed with absolute discretion and on-schedule handover.
              </p>
            </div>

            <div className="p-4 sm:p-8 rounded-2xl bg-[#fafaf9] border border-black/5 shadow-xs card-lift space-y-1.5 sm:space-y-3">
              <div className="stat-number text-3xl sm:text-5xl font-bold text-[#c59b4e]">
                50<span className="text-xl sm:text-2xl font-normal">+</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#0d0f12] tracking-tight font-heading">
                Atelier Disciplines
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed font-light">
                Rare marble slabbing, custom cabinetry, smart automation, and spatial styling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* SPLIT FEATURED PROJECT SECTION (From uploaded image) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 border-b border-black/5 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Dark Feature Card */}
            <div className="lg:col-span-6 rounded-3xl bg-[#0f1412] text-white p-8 sm:p-12 flex flex-col justify-between shadow-xl space-y-8">
              <div className="space-y-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#c59b4e] block font-heading">
                  CORE VALUES &amp; COMMITMENT
                </span>
                <h3 className="text-3xl sm:text-4xl font-heading font-medium tracking-tight leading-tight">
                  It&apos;s not just interior design. <br />
                  <span className="text-zinc-400 font-light">It&apos;s architectural legacy.</span>
                </h3>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  We have been turning private residences into architectural sanctuaries since 2012. Whether creating a double-height villa hearth, designing a panoramic duplex penthouse, or staging bespoke millwork—we bring uncompromising discipline.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3 text-sm text-zinc-200">
                    <div className="w-5 h-5 rounded-full bg-[#c59b4e] text-black flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Every cut, joint, and panel is handled with bespoke precision</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-zinc-200">
                    <div className="w-5 h-5 rounded-full bg-[#c59b4e] text-black flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>On time, on budget, and always under director-level supervision</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-zinc-200">
                    <div className="w-5 h-5 rounded-full bg-[#c59b4e] text-black flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Honest materials: Roman travertine, Calacatta, and smoked oak</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-zinc-200">
                    <div className="w-5 h-5 rounded-full bg-[#c59b4e] text-black flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>Your satisfaction and strict NDA privacy is our highest priority</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#c59b4e] transition-colors font-heading"
                >
                  <span>Explore Featured Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Large Architectural Photo Card with Spec Tag */}
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl min-h-[420px] lg:min-h-auto group image-zoom border border-black/5">
              <Image
                src="/photos/1794461618177.jpg"
                alt="The Obsidian Pavilion Residence"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/20 font-heading">
                  Signature Commission • 2024
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <h4 className="text-2xl font-heading font-medium">The Obsidian Pavilion</h4>
                  <p className="text-xs text-zinc-300 font-light mt-1 flex items-center gap-1.5">
                    <MapPinIcon className="w-3.5 h-3.5 text-[#c59b4e]" />
                    Highland Hills Ridge • 680 m² Triple Level
                  </p>
                </div>
                <Link
                  href="/projects/obsidian-pavilion"
                  className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#c59b4e] transition-colors shadow-md shrink-0 font-heading inline-flex items-center gap-1.5"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* CONTINUOUS INFINITE SLIDING MARQUEE TRACK (NO GAPS, FLUID 60FPS) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-white border-b border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c59b4e] block mb-2 font-heading">
                OUR SERVICES &amp; DISCIPLINES
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-medium text-[#0d0f12] tracking-tight">
                Services Designed To Keep Your Residence Thriving
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fafaf9] border border-black/10 text-[11px] font-medium text-zinc-500 font-heading">
              <span className="w-2 h-2 rounded-full bg-[#c59b4e] animate-pulse" />
              <span>Continuous Live Stream • Hover to Pause</span>
            </div>
          </div>
        </div>

        {/* 100% Seamless Continuous Track (Zero gaps between Set 1 and Set 2) */}
        <div className="w-full overflow-hidden">
          <div className="animate-continuous-scroll flex gap-6 px-4">
            {/* Set 1: 01, 02, 03, 04, 05, 06 */}
            {showcaseServices.map((srv) => (
              <div
                key={`track-a-${srv.id}`}
                className="w-[280px] sm:w-[320px] shrink-0 rounded-3xl bg-[#fafaf9] border border-black/5 overflow-hidden shadow-xs card-lift flex flex-col justify-between"
              >
                <div className="relative h-56 w-full image-zoom">
                  <Image
                    src={srv.imageUrl}
                    alt={srv.title}
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Circular Number Pill Badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/75 backdrop-blur-md text-white flex items-center justify-center font-heading font-bold text-xs border border-white/20">
                    {srv.number}
                  </div>

                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-black font-heading shadow-xs">
                      {srv.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-[#0d0f12]">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed mt-2">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5">
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d0f12] hover:text-[#c59b4e] transition-colors uppercase tracking-wider font-heading"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Set 2: 01, 02, 03, 04, 05, 06 (Follows seamlessly with exact gap-6, zero dead space!) */}
            {showcaseServices.map((srv) => (
              <div
                key={`track-b-${srv.id}`}
                className="w-[280px] sm:w-[320px] shrink-0 rounded-3xl bg-[#fafaf9] border border-black/5 overflow-hidden shadow-xs card-lift flex flex-col justify-between"
              >
                <div className="relative h-56 w-full image-zoom">
                  <Image
                    src={srv.imageUrl}
                    alt={srv.title}
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Circular Number Pill Badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/75 backdrop-blur-md text-white flex items-center justify-center font-heading font-bold text-xs border border-white/20">
                    {srv.number}
                  </div>

                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-black font-heading shadow-xs">
                      {srv.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-heading font-semibold text-[#0d0f12]">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed mt-2">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5">
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d0f12] hover:text-[#c59b4e] transition-colors uppercase tracking-wider font-heading"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* TESTIMONIAL CARDS (Stories That Prove Why Our Work Matters) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-[#fafaf9] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c59b4e] block mb-2 font-heading">
                TESTIMONIALS &amp; COMMISSIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-medium text-[#0d0f12] tracking-tight">
                Private Homeowner Perspectives
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 font-light max-w-md">
              Selected reflections from private residential estate commissions across Lilongwe, Blantyre, and international properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="group rounded-3xl bg-white border border-black/6 p-8 flex flex-col justify-between card-lift transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl text-[#c59b4e] font-serif leading-none">&ldquo;</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#fafaf9] text-zinc-600 border border-black/5 font-heading">
                    Area 43 Villa
                  </span>
                </div>
                <p className="text-sm text-zinc-600 font-light leading-relaxed">
                  The sensitivity to natural daylight and custom timber millwork is unmatched. They handled structural flow, stone booking, and lighting without a single friction point.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5 flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-black/10">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                    alt="David & Eleanor Vance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0d0f12] font-heading">
                    David &amp; Eleanor Vance
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-light">
                    Villa Solaria Residence • Lilongwe
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Center Highlight Card (Dark Atelier) */}
            <div className="group rounded-3xl bg-[#0d0f12] text-white border border-black/10 p-8 flex flex-col justify-between shadow-xl card-lift transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl text-[#c59b4e] font-serif leading-none">&ldquo;</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-[#c59b4e] border border-white/10 font-heading">
                    Duplex Penthouse
                  </span>
                </div>
                <p className="text-sm text-zinc-200 font-light leading-relaxed">
                  Every drawer, pocket door, and lighting profile functions with Swiss watchmaker precision. From the bookmatched Calacatta Viola to European smoked oak, their execution was flawless.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-white/20">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                    alt="Tariq Al-Mansoor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-heading">
                    Tariq Al-Mansoor
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-light">
                    Skyline Duplex Penthouse • Metropolitan
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-3xl bg-white border border-black/6 p-8 flex flex-col justify-between card-lift transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-3xl text-[#c59b4e] font-serif leading-none">&ldquo;</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#fafaf9] text-zinc-600 border border-black/5 font-heading">
                    Nyambadwe Estate
                  </span>
                </div>
                <p className="text-sm text-zinc-600 font-light leading-relaxed">
                  Complete white-glove site governance. We were overseas during the primary structural phases, and their weekly progress documentation gave us absolute peace of mind.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5 flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-black/10">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                    alt="Dr. Chimwemwe Phiri"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0d0f12] font-heading">
                    Dr. Chimwemwe Phiri
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-light">
                    Hillside Country Estate • Blantyre
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
