import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckIcon,
  CompassIcon,
  SparklesIcon,
  ShieldCheckIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  AwardIcon,
} from "@/components/icons";

export const metadata = {
  title: "About Us | A&M HOME INTERIORS",
  description:
    "Discover the founders, philosophy, and architectural mastery behind A&M HOME INTERIORS.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-[#0d0f12] overflow-x-hidden">
      {/* ------------------------------------------------------------ */}
      {/* 1. HERO BANNER (Mirrors Our Projects hero structure) */}
      {/* ------------------------------------------------------------ */}
      <section className="relative pt-36 pb-20 sm:pb-24 bg-[#121316] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/photos/1794461734071.jpg"
            alt="A&M Atelier Architecture Panorama"
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
              <span>Spatial Architecture &amp; Atelier</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-medium tracking-tight text-white mb-6">
              About Our Practice
            </h1>
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              We compose timeless residential estates, private villas, and bespoke penthouses where natural daylight, structural honesty, and artisanal joinery converge.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 2. THREE-CARD BENTO ROW (Exact match to uploaded layout) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#c59b4e] block mb-2 font-heading">
              SPATIAL HARMONY • BESPOKE DISCIPLINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium tracking-tight text-[#0d0f12]">
              The Foundation of A&amp;M
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Landscape with Metric Gauge */}
            <div className="relative rounded-3xl overflow-hidden bg-[#0d0f12] text-white p-7 min-h-[320px] flex flex-col justify-between shadow-xs card-lift border border-black/5">
              <Image
                src="/photos/1794461631162.jpg"
                alt="Master Millwork"
                fill
                sizes="33vw"
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c59b4e] block font-heading">
                  180+ Completed
                </span>
                <h3 className="text-xl font-heading font-medium text-white mt-1">
                  Private Estates Delivered
                </h3>
              </div>

              {/* Radial Metric Gauge Badge (from uploaded screenshot) */}
              <div className="relative z-10 pt-8 flex items-end justify-between">
                <div>
                  <span className="text-xs text-zinc-300 block font-light">Turnkey Scale</span>
                  <span className="text-2xl font-bold font-heading text-white">100% Handover</span>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-[#c59b4e] border-t-transparent flex items-center justify-center font-heading font-bold text-xs">
                  99%
                </div>
              </div>
            </div>

            {/* Card 2: Minimalist with Circular Icon */}
            <div className="rounded-3xl bg-[#fafaf9] border border-black/5 p-8 flex flex-col justify-between shadow-xs card-lift space-y-6">
              <div className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#c59b4e] shadow-2xs">
                <CompassIcon className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-heading font-semibold text-[#0d0f12]">
                  Contextual Spatial Planning
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">
                  Every architectural interior responds authentically to its physical orientation, sunrise-to-sunset daylight cycles, and the unique personal rhythms of the homeowner.
                </p>
              </div>
              <div className="pt-2 text-xs font-bold text-[#0d0f12] uppercase tracking-wider flex items-center gap-1.5 font-heading">
                <span>Volumetric Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 3: Minimalist with Circular Icon */}
            <div className="rounded-3xl bg-[#fafaf9] border border-black/5 p-8 flex flex-col justify-between shadow-xs card-lift space-y-6">
              <div className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#c59b4e] shadow-2xs">
                <SparklesIcon className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-heading font-semibold text-[#0d0f12]">
                  Tactile Material Honesty
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed">
                  We reject artificial laminates. Our palette is built exclusively upon Roman travertine, bookmatched Calacatta marble, patinated architectural bronze, and sustainably harvested European oak.
                </p>
              </div>
              <div className="pt-2 text-xs font-bold text-[#0d0f12] uppercase tracking-wider flex items-center gap-1.5 font-heading">
                <span>Material Atelier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 3. SPLIT FEATURE WITH GAUGE CARD (From uploaded layout) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-[#fafaf9] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#c59b4e] block font-heading">
                PRECISION &amp; GOVERNANCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-medium tracking-tight text-[#0d0f12] leading-tight">
                Architectural Clarity Made Seamless for Discerning Patrons.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                A turnkey commission with A&amp;M is built on transparency and absolute rigor. From permit blueprints and trade supervision to bespoke custom joinery installation, our studio directors govern every milestone.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#0d0f12]">
                  <div className="w-5 h-5 rounded-full bg-[#c59b4e] text-black flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Photorealistic 3D visualization before manufacturing commences</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#0d0f12]">
                  <div className="w-5 h-5 rounded-full bg-[#c59b4e] text-black flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Strict NDA discretion guaranteed on all private residences</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#0d0f12]">
                  <div className="w-5 h-5 rounded-full bg-[#c59b4e] text-black flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Turnkey handover with zero punch-list delays</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0d0f12] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#c59b4e] hover:text-black transition-colors font-heading"
                >
                  <span>View Technical Blueprints</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Photo with Floating Glassmorphic Spec Gauge */}
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl min-h-[440px] group image-zoom border border-black/5">
              <Image
                src="/photos/1794461634253.jpg"
                alt="Turnkey Architectural Villa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Floating Glassmorphic Gauge Card (from uploaded screenshot!) */}
              <div className="absolute bottom-6 right-6 p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 text-white max-w-xs shadow-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#c59b4e]">
                    Spatial Efficiency
                  </span>
                  <span className="stat-number text-lg font-bold">820 m²</span>
                </div>
                <p className="text-xs text-zinc-300 font-light leading-snug">
                  Villa Solaria • Honed Roman Travertine, sunken conversational pit &amp; smart climate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 4. THREE VERTICAL CARDS WITH OVERLAID TEXT & ICONS (From uploaded image) */}
      {/* ------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#c59b4e] block mb-2 font-heading">
              THREE ATELIER PILLARS
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-medium tracking-tight text-[#0d0f12]">
              Transforming Space Into A Sanctuary
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-sm group image-zoom border border-black/5 flex flex-col justify-end p-7 text-white">
              <Image
                src="/photos/1794461641535.jpg"
                alt="Spatial Daylighting"
                fill
                sizes="33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative z-10 space-y-2">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-3">
                  <CompassIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-medium text-white">
                  Spatial Daylighting
                </h3>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  Sculpting interior voids to harness morning warmth, evening ambient sunsets, and cross-ventilation.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-sm group image-zoom border border-black/5 flex flex-col justify-end p-7 text-white">
              <Image
                src="/photos/1794461645076.jpg"
                alt="Acoustic Serenity"
                fill
                sizes="33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative z-10 space-y-2">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-3">
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-medium text-white">
                  Acoustic Serenity
                </h3>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  Integrating concealed acoustic wood slabbing and Belgian linen wall coverings for profound quietude.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-sm group image-zoom border border-black/5 flex flex-col justify-end p-7 text-white">
              <Image
                src="/photos/1794461665325.jpg"
                alt="Artisan Joinery"
                fill
                sizes="33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative z-10 space-y-2">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-3">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-medium text-white">
                  Artisan Joinery
                </h3>
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  Bespoke walk-in dressing suites, architectural bookcases, and custom dining tables crafted in our atelier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 5. FULL-BLEED PANORAMIC DARK BREAK BANNER (From uploaded image) */}
      {/* ------------------------------------------------------------ */}
      <section className="relative py-28 sm:py-36 bg-[#0c0f0d] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=85"
            alt="Panoramic Glasshouse"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f0d] via-[#0c0f0d]/50 to-[#0c0f0d]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#c59b4e] block font-heading">
            WHERE ARCHITECTURAL DISCIPLINE MEETS STYLE
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-medium tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
            Where structural purity meets quiet living comfort.
          </h2>
          <div className="pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#c59b4e] transition-colors font-heading"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Floating Frosted Cards at bottom of banner (From uploaded screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-5xl mx-auto">
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 text-left flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/photos/1794461688606.jpg"
                  alt="Living Pavilions"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-heading">Living Pavilions</h4>
                <p className="text-xs text-zinc-300 font-light">Double-height travertine volumes</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 text-left flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/photos/1794461697679.jpg"
                  alt="Duplex Penthouses"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-heading">Duplex Penthouses</h4>
                <p className="text-xs text-zinc-300 font-light">Panoramic skyline sanctuaries</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 text-left flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                <Image
                  src="/photos/1794461701749.jpg"
                  alt="Forest Retreats"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-heading">Country Estates</h4>
                <p className="text-xs text-zinc-300 font-light">Biophilic courtyards &amp; reflection pools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 6. FOUNDERS & LEADERSHIP SECTION */}
      {/* ------------------------------------------------------------ */}

      {/* 6a. FOUNDING PRINCIPALS — contained bento card */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section eyebrow */}
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59b4e] font-heading">
              Atelier Leadership &amp; Founders
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium text-[#0d0f12] tracking-tight mt-1">
              The Principals
            </h2>
          </div>

          {/* Contained split card */}
          <div className="rounded-2xl overflow-hidden border border-black/6 grid grid-cols-1 lg:grid-cols-[380px_1fr] shadow-sm">

            {/* Portrait */}
            <div className="relative h-72 lg:h-auto min-h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                alt="Alina & Marcus Vance — Founding Principals"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
              {/* Est. pill */}
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5">
                <AwardIcon className="w-3 h-3 text-[#c59b4e]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white font-heading">Est. 2012</span>
              </div>
            </div>

            {/* Manifesto panel */}
            <div className="bg-white p-8 sm:p-10 flex flex-col justify-center gap-5">

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59b4e] font-heading block mb-1">
                  Founding Principals
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#0d0f12] leading-snug">
                  Alina &amp; Marcus Vance
                </h3>
                <p className="text-xs text-zinc-400 font-light mt-0.5">
                  Architectural Directors · A&amp;M HOME INTERIORS
                </p>
              </div>

              {/* pull-quote */}
              <div className="border-l-2 border-[#c59b4e] pl-4">
                <p className="text-sm font-heading font-light text-zinc-600 leading-relaxed italic">
                  &ldquo;A residence should not merely shelter the body, but elevate the human spirit through proportion, natural daylight, and structural honesty.&rdquo;
                </p>
              </div>

              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                Over the past 12 years, we have brought together classical architectural space planning with the master craftsmanship of custom joinery and rare stone slabbing. We remain personally involved in every commission to protect the vision of each private homeowner.
              </p>

              {/* Signature line */}
              <div className="border-t border-black/8 pt-4 flex items-center gap-3">
                <div className="flex -space-x-2.5 shrink-0">
                  <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      alt="Alina Vance"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                      alt="Marcus Vance"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#0d0f12] font-heading leading-tight">Alina &amp; Marcus Vance</p>
                  <p className="text-[10px] text-zinc-400 font-light">Founding Principals &amp; Architectural Directors</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6b. DISCIPLINE DIRECTORS — portrait cards grid */}
      <section className="py-20 sm:py-28 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b border-black/8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59b4e] block font-heading mb-1">
                Our Studio Collective
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium text-[#0d0f12] tracking-tight">
                Discipline Directors
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold font-heading text-[#0d0f12] hover:text-[#c59b4e] transition-colors uppercase tracking-wider shrink-0"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                role: "Spatial Planning Lead",
                name: "Tariq Chawla",
                bio: "Specializing in structural flow, double-height engineering, and permit documentation.",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
              },
              {
                role: "Master Joinery Director",
                name: "Julian Meyer",
                bio: "Overseeing European White Oak fabrication, artisanal veneer booking, and custom architectural hardware.",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
              },
              {
                role: "Materials & Curation Lead",
                name: "Maya Phiri",
                bio: "Direct procurement of rare Italian travertine slabs, Belgian textiles, and gallery-grade art.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
              },
              {
                role: "Atmospheric Lighting Director",
                name: "Elena Rostova",
                bio: "Circadian lighting studies, integrated architectural LED profiles, and museum spotlighting.",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
              },
              {
                role: "Site Governance & Turnkey",
                name: "David Banda",
                bio: "Ensuring zero-defect installation tolerances, trade sequencing, and white-glove site delivery.",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
              },
              {
                role: "FF&E & Object Curator",
                name: "Sofia Al-Mansoor",
                bio: "Sourcing collector-grade Scandinavian seating, custom wool bouclés, and sculptural ceramics.",
                img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
              },
            ].map((m) => (
              <div
                key={m.name}
                className="group bg-white rounded-2xl border border-black/6 overflow-hidden card-lift flex flex-col"
              >
                {/* Portrait */}
                <div className="relative h-60 w-full overflow-hidden bg-zinc-100 shrink-0">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* subtle bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-1 flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#c59b4e] font-heading">
                    {m.role}
                  </span>
                  <h3 className="text-base font-heading font-semibold text-[#0d0f12]">{m.name}</h3>
                  <p className="text-xs text-zinc-500 font-light leading-relaxed mt-1">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
