"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS, GALLERY_ITEMS } from "@/lib/data";
import { ArrowRight, ArrowUpRight, CompassIcon, LayersIcon, SparklesIcon, ShieldCheckIcon, MapPinIcon } from "./icons";

export function HomeSummary() {
  const highlightProjects = FEATURED_PROJECTS.slice(0, 2);
  const mosaicGallery = GALLERY_ITEMS.slice(0, 4);

  return (
    <div className="bg-white">
      {/* ------------------------------------------------------------ */}
      {/* SECTION 1: THE ATELIER (About Us Summary Gateway) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-24 sm:py-32 border-b border-black/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-7">
              <div className="flex items-center gap-3">
                <span className="font-serif text-sm tracking-widest text-[#c59b4e] uppercase font-semibold">
                  01 / The Atelier
                </span>
                <div className="h-px w-12 bg-[#c59b4e]/40" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#121316] leading-[1.15]">
                We compose sanctuaries where light, proportion, and materiality converge.
              </h2>

              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
                A&amp;M HOME INTERIORS is an architectural interior studio operating in Lilongwe, Blantyre, and internationally. Rather than following transient trends, we construct spaces that honor the daily rituals of living through raw limestone, patinated bronzes, and custom white-glove joinery.
              </p>

              {/* Minimalist Editorial Metrics (Styled in Cormorant Garamond serif) */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-black/5">
                <div>
                  <div className="text-3xl sm:text-4xl font-serif text-[#121316] font-normal">
                    12
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-500 uppercase tracking-widest mt-1 font-medium">
                    Years Atelier
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-serif text-[#121316] font-normal">
                    180<span className="text-[#c59b4e] text-2xl font-sans">+</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-500 uppercase tracking-widest mt-1 font-medium">
                    Commissions
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-serif text-[#121316] font-normal">
                    100<span className="text-[#c59b4e] text-2xl font-sans">%</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-500 uppercase tracking-widest mt-1 font-medium">
                    Turnkey
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#121316] hover:text-[#c59b4e] transition-colors group"
                >
                  <span>Explore Our Heritage &amp; Design Philosophy</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* Right Editorial Image Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-lg image-zoom-container">
                <Image
                  src="/photos/1794461710939.jpg"
                  alt="A&M Atelier Living Sanctuary"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-[#c59b4e] block">
                      Featured Monograph
                    </span>
                    <span className="font-serif text-lg font-light">The Highland Residence</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-300">Lilongwe</span>
                </div>
              </div>

              {/* Floating Accent Badge */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl border border-black/10 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#121316] flex items-center justify-center text-[#c59b4e]">
                    <SparklesIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#121316] block">Atelier Craft</span>
                    <span className="text-[11px] text-zinc-500 font-light">Custom Italian Stone &amp; Joinery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* SECTION 2: SELECTED WORKS (Our Projects Summary Gateway) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-24 sm:py-32 bg-[#fafaf9] border-b border-black/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-serif text-sm tracking-widest text-[#c59b4e] uppercase font-semibold">
                  02 / Portfolio Highlights
                </span>
                <div className="h-px w-12 bg-[#c59b4e]/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#121316] tracking-tight">
                Selected Landmark Commissions
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#121316] hover:text-[#c59b4e] transition-colors group"
            >
              <span>View Complete Portfolio ({FEATURED_PROJECTS.length})</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 2-Column Luxury Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {highlightProjects.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-3xl bg-white border border-black/5 overflow-hidden shadow-xs luxury-card flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative h-72 sm:h-96 w-full image-zoom-container">
                  <Image
                    src={proj.imageUrl}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/95 text-[#121316] shadow-sm">
                      {proj.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1.5 font-light">
                      <MapPinIcon className="w-3.5 h-3.5 text-[#c59b4e]" />
                      {proj.location}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-300">{proj.area}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-serif font-light text-[#121316] group-hover:text-[#c59b4e] transition-colors">
                      {proj.title}
                    </h3>
                    <span className="text-xs font-serif text-[#c59b4e] font-medium">
                      {proj.year}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>

                  <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                      {proj.specs}
                    </span>
                    <Link
                      href={`/projects/${proj.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#121316] hover:text-[#c59b4e] transition-colors"
                    >
                      <span>Explore Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* SECTION 3: SPATIAL STUDIES (Gallery Summary Gateway) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-24 sm:py-32 bg-white border-b border-black/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-serif text-sm tracking-widest text-[#c59b4e] uppercase font-semibold">
                  03 / Spatial Studies
                </span>
                <div className="h-px w-12 bg-[#c59b4e]/40" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#121316] tracking-tight">
                Sensory Textures &amp; Daylight
              </h2>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#121316] hover:text-[#c59b4e] transition-colors group"
            >
              <span>Explore Photographic Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mosaic Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mosaicGallery.map((item, idx) => (
              <Link
                key={item.id}
                href="/gallery"
                className="group relative h-80 rounded-2xl overflow-hidden border border-black/5 shadow-xs image-zoom-container block"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between text-white z-10">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-white/95 text-[#121316] self-start shadow-xs">
                    {item.category}
                  </span>
                  <div>
                    <h4 className="text-sm font-serif font-light text-white group-hover:text-[#c59b4e] transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-zinc-300 tracking-wider uppercase font-light mt-1 block">
                      View Study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* SECTION 4: DISCIPLINES IN BRIEF (Services Summary Gateway) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-24 sm:py-32 bg-[#fafaf9] border-b border-black/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-serif text-sm tracking-widest text-[#c59b4e] uppercase font-semibold">
                04 / Methodology
              </span>
              <div className="h-px w-12 bg-[#c59b4e]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#121316] tracking-tight">
              Turnkey Disciplines &amp; Craft
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base font-light mt-3 leading-relaxed">
              We govern every phase from structural CAD blueprinting to custom fabrication and final curation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-black/5 shadow-xs luxury-card space-y-4">
              <div className="font-serif text-3xl text-[#c59b4e] font-light">01</div>
              <h3 className="text-lg font-serif text-[#121316] font-medium">Spatial Architecture</h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                Reimagining floor plans, flow, and daylight geometry to produce harmonized interior proportions.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-black/5 shadow-xs luxury-card space-y-4">
              <div className="font-serif text-3xl text-[#c59b4e] font-light">02</div>
              <h3 className="text-lg font-serif text-[#121316] font-medium">Bespoke Millwork</h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                Handcrafted cabinetry, custom kitchens, and architectural wall paneling made from rare hardwoods.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-black/5 shadow-xs luxury-card space-y-4">
              <div className="font-serif text-3xl text-[#c59b4e] font-light">03</div>
              <h3 className="text-lg font-serif text-[#121316] font-medium">Art &amp; Stones Curation</h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                Sourcing bookmatched Italian marble, contemporary art, and collectible furniture editions.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-black/5 shadow-xs luxury-card space-y-4">
              <div className="font-serif text-3xl text-[#c59b4e] font-light">04</div>
              <h3 className="text-lg font-serif text-[#121316] font-medium">Turnkey Delivery</h3>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                Total white-glove site governance, trade coordination, timeline guarantees, and flawless handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* SECTION 5: THE INVITATION (Contact Summary Gateway) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#121316] p-10 sm:p-16 lg:p-20 text-white relative overflow-hidden shadow-2xl">
            {/* Ambient subtle architectural lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c59b4e]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-serif text-sm tracking-widest text-[#c59b4e] uppercase font-semibold">
                  05 / Initiate Consultation
                </span>
                <div className="h-px w-12 bg-[#c59b4e]/40" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1] text-white">
                Ready to bring timeless clarity to your private sanctuary?
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-xl">
                We accept a limited number of residential commissions each year to ensure uncompromising director-level attention and bespoke artisan execution.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black text-xs font-semibold tracking-widest uppercase hover:bg-[#c59b4e] hover:text-black transition-all duration-300 shadow-xl group"
                >
                  <span>Request Private Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="tel:+265997637667"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 text-white text-xs font-medium tracking-wider uppercase hover:bg-white/10 transition-colors"
                >
                  <span>Direct Line: 0997 637 667</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

