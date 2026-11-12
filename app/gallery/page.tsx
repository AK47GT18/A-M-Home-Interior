"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/data";
import {
  EyeIcon,
  MapPinIcon,
  CloseIcon,
  ChevronLeft,
  ChevronRight,
} from "@/components/icons";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeModal, setActiveModal] = useState<GalleryItem | null>(null);

  const filters = [
    "All",
    "Living Pavilions",
    "Artisan Joinery",
    "Travertine & Stone",
    "Private Penthouses",
    "Country Estates",
  ];

  const filteredItems =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Lightbox navigation helpers
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeModal) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeModal.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveModal(filteredItems[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeModal) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeModal.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveModal(filteredItems[prevIndex]);
  };

  return (
    <div className="bg-white min-h-screen text-[#0d0f12] overflow-x-hidden">
      {/* ------------------------------------------------------------ */}
      {/* 1. HERO BANNER (Mirrors Our Projects hero structure) */}
      {/* ------------------------------------------------------------ */}
      <section className="relative pt-36 pb-20 bg-[#121316] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/photos/1794461740779.jpg"
            alt="Gallery Architectural Archive"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c59b4e] font-semibold mb-3 font-heading">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4e]" />
              <span>Spatial Imagery &amp; Curation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-tight text-white mb-6">
              Architectural Gallery
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              A curated photographic study of spatial daylighting, hand-crafted joinery, tactile stone compositions, and monolithic proportions across our completed works.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 2. GALLERY GRID SECTION (Mirrors Our Projects grid layout) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-14 pb-6 border-b border-black/5">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold font-heading uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-[#0d0f12] text-white shadow-md"
                    : "bg-[#f4f4f2] text-zinc-600 hover:text-black hover:bg-zinc-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="text-xs text-zinc-400 font-medium tracking-wider uppercase font-heading">
            Showing <span className="font-bold text-[#0d0f12]">{filteredItems.length}</span> Curated Archival Works
          </div>
        </div>

        {/* Editorial Bento / Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const isFeatured = item.featured || index === 0 || index === 3;
            return (
              <div
                key={item.id}
                onClick={() => setActiveModal(item)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-black/5 shadow-xs card-lift bg-[#fafaf9] ${
                  isFeatured ? "md:col-span-2 h-[460px]" : "col-span-1 h-[390px]"
                }`}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Overlaid Information */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10 text-white">
                  {/* Top Badges */}
                  <div className="flex items-start justify-between">
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-white/95 text-[#0d0f12] backdrop-blur-md shadow-xs font-heading">
                      {item.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                      <EyeIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Metadata */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[11px] text-zinc-300 font-light">
                      <span className="flex items-center gap-1">
                        <MapPinIcon className="w-3.5 h-3.5 text-[#c59b4e]" />
                        {item.location}
                      </span>
                      <span>•</span>
                      <span>{item.year}</span>
                    </div>

                    <h3 className="text-lg sm:text-2xl font-heading font-medium text-white group-hover:text-[#c59b4e] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {item.materials && (
                      <p className="text-xs text-zinc-300 font-light flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4e]" />
                        {item.materials}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 3. INTERACTIVE FULLSCREEN LIGHTBOX INSPECTION MODAL */}
      {/* ------------------------------------------------------------ */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-black/10 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Close and Navigation Buttons */}
            <div className="p-4 sm:p-5 border-b border-black/5 flex items-center justify-between bg-[#fafaf9]">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0d0f12] text-white font-heading">
                  {activeModal.category}
                </span>
                <span className="text-xs text-zinc-500 font-light hidden sm:inline">
                  {activeModal.location} • {activeModal.year}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-white border border-black/10 text-[#0d0f12] flex items-center justify-center hover:bg-[#0d0f12] hover:text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-white border border-black/10 text-[#0d0f12] flex items-center justify-center hover:bg-[#0d0f12] hover:text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="w-9 h-9 rounded-full bg-white border border-black/10 text-[#0d0f12] flex items-center justify-center hover:bg-black hover:text-white transition-colors ml-2"
                  aria-label="Close modal"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* High-Resolution Architectural Image Display */}
            <div className="relative h-[55vh] sm:h-[62vh] w-full bg-black">
              <Image
                src={activeModal.imageUrl}
                alt={activeModal.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Bottom Project Details Drawer */}
            <div className="p-6 sm:p-8 bg-white border-t border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-heading font-medium text-[#0d0f12]">
                  {activeModal.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 font-light">
                  {activeModal.materials && (
                    <span>
                      <strong className="font-semibold text-zinc-700">Materials:</strong>{" "}
                      {activeModal.materials}
                    </span>
                  )}
                  {activeModal.area && (
                    <span>
                      <strong className="font-semibold text-zinc-700">Scope:</strong>{" "}
                      {activeModal.area}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-3 rounded-full bg-[#0d0f12] text-white text-xs font-bold font-heading uppercase tracking-wider hover:bg-[#c59b4e] hover:text-black transition-all shadow-xs"
                >
                  Commission This Style
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
