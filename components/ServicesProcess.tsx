import React from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { CheckIcon, ArrowUpRight, CompassIcon, LayersIcon, SparklesIcon, ShieldCheckIcon } from "./icons";

export function ServicesProcess() {
  const icons = [
    <CompassIcon key="compass" className="w-5 h-5 text-[#c59b4e]" />,
    <LayersIcon key="layers" className="w-5 h-5 text-[#c59b4e]" />,
    <SparklesIcon key="sparkles" className="w-5 h-5 text-[#c59b4e]" />,
    <ShieldCheckIcon key="shield" className="w-5 h-5 text-[#c59b4e]" />,
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#fafaf9] border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#c59b4e] font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4e]" />
            <span>Turnkey Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#121316] tracking-tight">
            Comprehensive Interior Architecture
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-light mt-4 leading-relaxed">
            From initial structural analysis to bespoke artisan joinery and white-glove site delivery, we execute complete spatial transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.number}
              className="p-8 rounded-3xl bg-white border border-black/5 flex flex-col justify-between group shadow-sm white-card-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                    {icons[idx % icons.length]}
                  </div>
                  <span className="font-mono text-xs text-zinc-400 tracking-widest font-semibold">
                    PHASE {srv.number}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-light text-[#121316] mb-3 group-hover:text-[#c59b4e] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-6 border-t border-black/5">
                <p className="text-[11px] font-semibold tracking-wider text-[#121316] uppercase mb-3">
                  Scope &amp; Deliverables:
                </p>
                <div className="space-y-2">
                  {srv.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-600 font-light">
                      <CheckIcon className="w-3.5 h-3.5 text-[#c59b4e]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
