"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/data";
import { EyeIcon, ArrowRight } from "./icons";

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeImageModal, setActiveImageModal] = useState<GalleryItem | null>(null);

  const filters = ["All", "Living", "Kitchen", "Bedroom", "Details"];

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-white relative border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c59b4e] font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4e]" />
              <span>Spatial Compositions &amp; Details</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#121316] tracking-tight">
              Design Gallery
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-[#121316] text-white font-semibold"
                    : "bg-[#f4f4f2] text-zinc-600 hover:text-black hover:bg-zinc-200 border border-black/5"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImageModal(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-black/5 shadow-xs white-card-hover"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Details Card */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/95 text-[#121316] shadow-sm">
                    {item.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <EyeIcon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-serif text-white font-light group-hover:text-[#c59b4e] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-zinc-300 mt-1 block font-light">
                    A&amp;M Bespoke Atelier Archive
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-black/10 text-[#121316] text-xs font-semibold uppercase tracking-wider hover:bg-[#121316] hover:text-white transition-all shadow-xs group"
          >
            <span>Browse Full Architectural Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Lightbox Preview */}
      {activeImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveImageModal(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white border border-black/10 rounded-3xl overflow-hidden p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImageModal(null)}
              className="absolute top-6 right-6 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#121316] transition-colors"
              aria-label="Close Preview"
            >
              ✕
            </button>
            <div className="relative h-[65vh] w-full rounded-2xl overflow-hidden">
              <Image
                src={activeImageModal.imageUrl}
                alt={activeImageModal.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <h4 className="text-lg font-serif text-[#121316]">{activeImageModal.title}</h4>
                <span className="text-xs text-[#c59b4e] font-semibold uppercase tracking-wider">
                  Category: {activeImageModal.category}
                </span>
              </div>
              <Link
                href="/contact"
                onClick={() => setActiveImageModal(null)}
                className="px-5 py-2.5 rounded-full bg-[#121316] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#c59b4e] hover:text-black transition-colors"
              >
                Inquire For Your Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
