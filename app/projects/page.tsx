"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/lib/data";
import { ArrowRight, MapPinIcon } from "@/components/icons";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

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
            src="/photos/1794461738033.jpg"
            alt="A&M Projects Archive"
            fill
            quality={90}
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
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-black/5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#121316] text-white shadow-sm"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <Link
              key={proj.id}
              href={`/projects/${proj.id}`}
              className="group rounded-3xl bg-white border border-black/5 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={proj.imageUrl}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                  <h3 className="text-xl font-heading font-medium text-[#121316] group-hover:text-[#c59b4e] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-zinc-600 font-light mt-2 leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                    {proj.specs}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#121316] group-hover:text-[#c59b4e] transition-colors font-heading">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
