import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FEATURED_PROJECTS } from "@/lib/data";
import { ArrowLeft, ArrowRight, MapPinIcon, CheckIcon } from "@/components/icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FEATURED_PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = FEATURED_PROJECTS.find((p) => p.id === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | A&M HOME INTERIORS`,
    description: project.description,
  };
}

async function ProjectContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = FEATURED_PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = FEATURED_PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);
  const images =
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages
      : [project.imageUrl];

  return (
    <>
      {/* ------------------------------------------------------------ */}
      {/* 1. HERO COVER HEADER */}
      {/* ------------------------------------------------------------ */}
      <section className="relative pt-36 pb-20 sm:pb-28 bg-[#0d0f12] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/50 to-[#0d0f12]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors mb-8 font-heading group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects</span>
          </Link>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c59b4e] text-black font-heading">
                {project.badge || project.category}
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-zinc-200 border border-white/10 flex items-center gap-1.5">
                <MapPinIcon className="w-3.5 h-3.5 text-[#c59b4e]" />
                {project.location}
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-white/10 backdrop-blur-md text-zinc-200 border border-white/10">
                Completed {project.year}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-medium tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 font-light max-w-3xl leading-relaxed">
              {project.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 2. PROJECT OVERVIEW & METRICS BAR */}
      {/* ------------------------------------------------------------ */}
      <section className="border-b border-black/5 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm">
            <div>
              <span className="block text-zinc-400 font-heading uppercase tracking-wider text-[11px] mb-1">
                Typology
              </span>
              <span className="text-[#0d0f12] font-semibold">{project.category}</span>
            </div>
            <div>
              <span className="block text-zinc-400 font-heading uppercase tracking-wider text-[11px] mb-1">
                Scale &amp; Footprint
              </span>
              <span className="text-[#0d0f12] font-semibold">{project.specs}</span>
            </div>
            <div>
              <span className="block text-zinc-400 font-heading uppercase tracking-wider text-[11px] mb-1">
                Location
              </span>
              <span className="text-[#0d0f12] font-semibold">{project.location}</span>
            </div>
            <div>
              <span className="block text-zinc-400 font-heading uppercase tracking-wider text-[11px] mb-1">
                Completion Year
              </span>
              <span className="text-[#0d0f12] font-semibold">{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 3. NARRATIVE & SPECIFICATIONS */}
      {/* ------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c59b4e] font-heading block">
              Architectural Monograph
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-medium text-[#0d0f12] leading-tight">
              Design Philosophy &amp; Spatial Intent
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
              {project.overview || project.description}
            </p>
            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
              {project.description}
            </p>

            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0d0f12] text-white hover:bg-black hover:shadow-lg transition-all text-xs font-bold uppercase tracking-wider font-heading"
              >
                <span>Commission A Similar Residence</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#fafaf9] rounded-3xl p-8 border border-black/5 space-y-6">
            <div>
              <h3 className="text-base font-bold text-[#0d0f12] font-heading uppercase tracking-wider mb-4">
                Key Architectural Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700">
                    <span className="w-5 h-5 rounded-full bg-[#0d0f12] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon className="w-3 h-3 stroke-[2.5]" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.materials && project.materials.length > 0 && (
              <div className="pt-6 border-t border-black/5">
                <h3 className="text-base font-bold text-[#0d0f12] font-heading uppercase tracking-wider mb-4">
                  Curated Materiality
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((mat, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white border border-black/5 text-xs text-zinc-700 font-medium"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 4. DEDICATED PROJECT IMAGE GALLERY */}
      {/* ------------------------------------------------------------ */}
      <section className="py-16 sm:py-24 bg-[#0d0f12] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c59b4e] font-heading block mb-2">
                PROJECT GALLERY
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-medium tracking-tight">
                Architectural Study &amp; Details
              </h2>
            </div>
            <span className="text-xs text-zinc-400 font-mono">
              {images.length} Curated Photographs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((imgSrc, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl overflow-hidden group border border-white/10 ${
                  idx === 0 ? "md:col-span-2 md:h-[460px] h-[320px]" : "h-[320px]"
                }`}
              >
                <Image
                  src={imgSrc}
                  alt={`${project.title} - View ${idx + 1}`}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Perspective {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* 5. EXPLORE OTHER COMMISSIONS */}
      {/* ------------------------------------------------------------ */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#c59b4e] font-heading block mb-1">
              PORTFOLIO ARCHIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-medium text-[#0d0f12]">
              Explore Other Commissions
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0d0f12] hover:text-[#c59b4e] transition-colors font-heading"
          >
            <span>All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProjects.map((rel) => (
            <Link
              key={rel.id}
              href={`/projects/${rel.id}`}
              className="group rounded-3xl bg-white border border-black/5 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={rel.imageUrl}
                  alt={rel.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/95 text-[#121316] shadow-sm">
                    {rel.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-heading font-medium text-[#0d0f12] group-hover:text-[#c59b4e] transition-colors">
                  {rel.title}
                </h3>
                <p className="text-xs text-zinc-500 font-light line-clamp-2">
                  {rel.subtitle}
                </p>
                <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs text-zinc-400">
                  <span>{rel.specs}</span>
                  <span className="font-semibold text-[#0d0f12] group-hover:text-[#c59b4e] transition-colors flex items-center gap-1">
                    View Project <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectDetailSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-36 pb-28 bg-[#0d0f12] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-36 h-4 bg-zinc-800 rounded animate-pulse" />
          <div className="w-3/4 max-w-lg h-12 bg-zinc-800 rounded-lg animate-pulse" />
          <div className="w-1/2 max-w-md h-6 bg-zinc-800 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetailPage({ params }: PageProps) {
  return (
    <div className="bg-white min-h-screen text-[#0d0f12]">
      <Suspense fallback={<ProjectDetailSkeleton />}>
        <ProjectContent params={params} />
      </Suspense>
    </div>
  );
}
