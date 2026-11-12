"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS, Project } from "@/lib/data";
import { ArrowUpRight, MapPinIcon, CheckIcon } from "@/components/icons";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedModal, setSelectedModal] = useState<Project | null>(null);

  const categories = ["All", "Private Villa", "Penthouse", "Modernist Residence"];

  const filteredProjects =
    selectedCategory === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section className="relative pt-36 pb-20 bg-[#121316] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
            alt="A&M Projects Archive"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c59b4e] font-semibold mb-3 font-heading">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4e]" />
              <span>Architectural Monograph</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-tight text-white mb-6">
              Our Curated Projects
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              Explore our landmark residential estates, luxury penthouses, and bespoke living pavilions designed and completed across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills (Directly inspired by Image 1 - Eco-Doma) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-black/5">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#121316] text-white shadow-sm"
                    : "bg-[#f4f4f2] text-zinc-600 hover:text-black hover:bg-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-zinc-500 font-medium tracking-wider uppercase">
            Showing {filteredProjects.length} Curated Commissions
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl bg-white border border-black/5 overflow-hidden shadow-xs white-card-hover flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={proj.imageUrl}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/95 text-[#121316] shadow-sm">
                    {proj.badge || proj.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1">
                    <MapPinIcon className="w-3.5 h-3.5 text-[#c59b4e]" />
                    {proj.location}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full font-mono text-[11px]">
                    {proj.area}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif text-[#121316] font-light">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-zinc-600 font-light mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                    {proj.specs}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedModal(proj)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#121316] hover:text-[#c59b4e] transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white border border-black/10 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedModal(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[#121316] flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden mb-6">
              <Image
                src={selectedModal.imageUrl}
                alt={selectedModal.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#121316] text-[#c59b4e]">
                  {selectedModal.category}
                </span>
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <MapPinIcon className="w-3.5 h-3.5 text-[#c59b4e]" />
                  {selectedModal.location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#121316]">
                {selectedModal.title}
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                {selectedModal.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-zinc-50 border border-black/5 text-xs">
                <div>
                  <span className="text-zinc-400 block uppercase tracking-wider text-[10px]">Specifications</span>
                  <span className="text-[#121316] font-medium">{selectedModal.specs}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block uppercase tracking-wider text-[10px]">Completed</span>
                  <span className="text-[#121316] font-medium">{selectedModal.year}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block uppercase tracking-wider text-[10px]">Delivery</span>
                  <span className="text-[#c59b4e] font-semibold">Turnkey Handover</span>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <Link
                  href="/contact"
                  onClick={() => setSelectedModal(null)}
                  className="px-6 py-3 rounded-full bg-[#121316] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#c59b4e] hover:text-black transition-colors"
                >
                  Commission Similar Project
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedModal(null)}
                  className="text-xs text-zinc-500 hover:text-black"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

