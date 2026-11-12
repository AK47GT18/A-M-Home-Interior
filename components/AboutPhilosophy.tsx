"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PHILOSOPHY_TABS } from "@/lib/data";
import { ArrowRight, ArrowUpRight, CheckIcon, SparklesIcon, CompassIcon, ShieldCheckIcon } from "./icons";

export function AboutPhilosophy() {
  const [activeTabId, setActiveTabId] = useState("about");

  const currentTab =
    PHILOSOPHY_TABS.find((t) => t.id === activeTabId) || PHILOSOPHY_TABS[0];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Interactive Filter Tabs (Directly inspired by Image 2 - Farmora) */}
        <div className="flex flex-wrap items-center gap-2.5 mb-14">
          {PHILOSOPHY_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "bg-[#121316] text-white font-semibold shadow-md"
                    : "bg-[#f4f4f2] text-zinc-600 hover:text-black hover:bg-zinc-200/80 border border-black/5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Sub-label Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c59b4e] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4e]" />
              <span>Studio Heritage &amp; Philosophy</span>
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed font-light">
              We design interiors that resist obsolescence. Rooted in structural integrity, every commission balances light, texture, and living purpose.
            </p>

            <div className="pt-4 border-t border-black/5 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-zinc-700">
                <CheckIcon className="w-4 h-4 text-[#c59b4e]" />
                <span>Bespoke 3D Architectural Modeling</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-700">
                <CheckIcon className="w-4 h-4 text-[#c59b4e]" />
                <span>Rare Natural Stones &amp; Custom Hardwoods</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-700">
                <CheckIcon className="w-4 h-4 text-[#c59b4e]" />
                <span>Full Turnkey White-Glove Installation</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Text & Call to Action */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[#121316] leading-snug">
              {currentTab.title}
            </h2>

            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-light">
              {currentTab.description}
            </p>

            {/* Editorial Quote Box */}
            <blockquote className="border-l-2 border-[#c59b4e] pl-5 italic text-zinc-500 text-sm sm:text-base font-light bg-[#fafaf9] py-3 rounded-r-xl">
              &ldquo;{currentTab.quote}&rdquo;
            </blockquote>

            {/* Pillars / Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {currentTab.points.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#fafaf9] border border-black/5 space-y-2 hover:border-[#c59b4e]/30 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#c59b4e] shadow-xs">
                    {idx === 0 && <CompassIcon className="w-3.5 h-3.5" />}
                    {idx === 1 && <SparklesIcon className="w-3.5 h-3.5" />}
                    {idx === 2 && <ShieldCheckIcon className="w-3.5 h-3.5" />}
                  </div>
                  <p className="text-xs text-zinc-700 leading-snug font-light">{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#121316] hover:text-[#c59b4e] transition-colors group"
              >
                <span>Read more about our architectural story</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bento Metric & Showcase Row (Inspired by Farmora Inspo Image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-black/5">
          {/* Card 1: Metric Highlight */}
          <div className="p-6 rounded-2xl bg-[#fafaf9] border border-black/5 flex flex-col justify-between group hover:border-[#c59b4e]/30 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-3xl sm:text-4xl font-serif text-[#121316] font-light">
                {currentTab.metricValue}
              </span>
              <div className="w-8 h-8 rounded-full bg-[#121316] text-white flex items-center justify-center group-hover:bg-[#c59b4e] group-hover:text-black transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-[#121316]">{currentTab.metricLabel}</h4>
              <p className="text-xs text-zinc-500 mt-1 font-light">
                Continuous architectural commitment to private clients and estates.
              </p>
            </div>
          </div>

          {/* Card 2: Visual vignette 1 */}
          <div className="relative h-48 sm:h-auto rounded-2xl overflow-hidden group border border-black/5">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
              alt="Artisan woodwork"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs text-white font-medium">Bespoke Millwork</span>
            </div>
          </div>

          {/* Card 3: Visual vignette 2 */}
          <div className="relative h-48 sm:h-auto rounded-2xl overflow-hidden group border border-black/5">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80"
              alt="Natural lighting design"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs text-white font-medium">Spatial Daylighting</span>
            </div>
          </div>

          {/* Card 4: Satisfaction Card (Inspired by Farmora 85% card, with luxury gold styling) */}
          <div className="p-6 rounded-2xl bg-[#fdfbf7] border border-[#c59b4e]/30 flex flex-col justify-between group hover:border-[#c59b4e] transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-3xl sm:text-4xl font-serif text-[#c59b4e] font-light">
                99%
              </span>
              <div className="w-8 h-8 rounded-full bg-[#c59b4e] flex items-center justify-center text-black">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-[#121316]">Private Client Retention</h4>
              <p className="text-xs text-zinc-600 mt-1 font-light">
                Commissions executed with absolute privacy, discretion, and on-schedule handover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
