"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS, Project } from "@/lib/data";
import { ArrowRight, ArrowUpRight, MapPinIcon, CheckIcon } from "./icons";

export function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null);

  const categories = ["All", "Private Villa", "Penthouse", "Modernist Residence"];

  const filteredProjects =
    selectedCategory === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  const heroProject = filteredProjects[0] || FEATURED_PROJECTS[0];
  const gridProjects = filteredProjects.slice(1, 4);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#fafaf9] relative border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c59b4e] font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4e]" />
              <span>Architectural Works &amp; Residencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#121316] tracking-tight">
              Curated Projects <span className="text-zinc-400 font-sans text-2xl sm:text-3xl font-light">Portfolio</span>
            </h2>
          </div>

          {/* Category Filter Pills (Directly inspired by Image 1 - Eco-Doma) */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#121316] text-white font-semibold shadow-sm"
                    : "bg-white text-zinc-600 hover:text-black hover:bg-zinc-100 border border-black/5 shadow-xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Featured Card (Inspired by Image 1 top wide card) */}
        {heroProject && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/5 mb-8 shadow-sm white-card-hover">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#121316] text-[#c59b4e]">
                    {heroProject.badge || "Signature Commission"}
                  </span>
                  <span className="text-xs text-zinc-500 flex items-center gap-1 font-light">
                    <MapPinIcon className="w-3.5 h-3.5 text-[#c59b4e]" />
                    {heroProject.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#121316] mb-2">
                    {heroProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                    {heroProject.subtitle}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-black/5 text-xs">
                  <div>
                    <span className="text-zinc-400 block uppercase tracking-wider text-[10px]">Spatial Scale</span>
                    <span className="text-[#121316] font-medium">{heroProject.specs}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block uppercase tracking-wider text-[10px]">Year of Delivery</span>
                    <span className="text-[#121316] font-medium">{heroProject.year}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                  {heroProject.description}
                </p>

                {/* Features list */}
                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-600 font-light">
                  {heroProject.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-[#c59b4e]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProjectModal(heroProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121316] text-white text-xs font-semibold tracking-wide hover:bg-[#c59b4e] hover:text-black transition-colors group shadow-sm"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <Link
                    href="/projects"
                    className="text-xs font-semibold text-zinc-600 hover:text-black transition-colors"
                  >
                    Browse all projects →
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden group">
                <Image
                  src={heroProject.imageUrl}
                  alt={heroProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] text-[#121316] font-medium tracking-wider shadow-sm">
                  {heroProject.category}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3-Column Sub-Cards Row (Directly inspired by Image 1 bottom row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-2xl bg-white border border-black/5 overflow-hidden flex flex-col justify-between group shadow-sm white-card-hover"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={proj.imageUrl}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/95 text-[#121316] shadow-sm">
                    {proj.badge || proj.category}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="text-xs font-medium tracking-wide flex items-center gap-1">
                    <MapPinIcon className="w-3.5 h-3.5 text-[#c59b4e]" />
                    {proj.location}
                  </span>
                  <span className="text-[11px] text-zinc-300 font-light">{proj.area}</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-lg font-serif font-light text-[#121316] group-hover:text-[#c59b4e] transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-zinc-600 font-light mt-1.5 line-clamp-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">
                    {proj.specs}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProjectModal(proj)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#121316] hover:text-[#c59b4e] transition-colors"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Pill Link */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#121316] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#c59b4e] hover:text-black transition-all shadow-md group"
          >
            <span>Explore Complete Projects Portfolio</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Project Lightbox Modal */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white border border-black/10 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-[#121316] flex items-center justify-center transition-colors"
              aria-label="Close Modal"
            >
              ✕
            </button>

            <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-6">
              <Image
                src={selectedProjectModal.imageUrl}
                alt={selectedProjectModal.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#121316] text-[#c59b4e]">
                  {selectedProjectModal.category}
                </span>
                <span className="text-xs text-zinc-500 flex items-center gap-1">
                  <MapPinIcon className="w-3.5 h-3.5 text-[#c59b4e]" />
                  {selectedProjectModal.location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#121316]">
                {selectedProjectModal.title}
              </h3>
              <p className="text-sm text-zinc-600 font-light leading-relaxed">
                {selectedProjectModal.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-zinc-50 border border-black/5 text-xs">
                <div>
                  <span className="text-zinc-400 block uppercase tracking-wider text-[10px]">Specifications</span>
                  <span className="text-[#121316] font-medium">{selectedProjectModal.specs}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block uppercase tracking-wider text-[10px]">Completed</span>
                  <span className="text-[#121316] font-medium">{selectedProjectModal.year}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block uppercase tracking-wider text-[10px]">Status</span>
                  <span className="text-[#c59b4e] font-semibold">Turnkey Handed Over</span>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <Link
                  href="/contact"
                  onClick={() => setSelectedProjectModal(null)}
                  className="px-6 py-3 rounded-full bg-[#121316] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#c59b4e] hover:text-black transition-colors"
                >
                  Commission Similar Project
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedProjectModal(null)}
                  className="text-xs text-zinc-500 hover:text-black"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
