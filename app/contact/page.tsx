import React from "react";
import Image from "next/image";
import { ContactConsultation } from "@/components/ContactConsultation";

export const metadata = {
  title: "Contact Us | A&M HOME INTERIORS",
  description: "Schedule a confidential architectural consultation with A&M HOME INTERIORS.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ------------------------------------------------------------ */}
      {/* HERO BANNER (Matches Kassapay centered header style) */}
      {/* ------------------------------------------------------------ */}
      <section className="relative pt-36 pb-36 sm:pb-44 bg-[#0d1013] text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/photos/1794461707791.jpg"
            alt="Studio Consultation"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1013] via-[#0d1013]/60 to-[#0d1013]/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#c59b4e] block font-heading">
            ATELIER COMMISSIONS &amp; INQUIRIES
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-medium tracking-tight text-white">
            Contact us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            A&amp;M HOME INTERIORS is ready to provide bespoke architectural solutions according to your aspirations.
          </p>
        </div>
      </section>

      {/* Embedded Consultation Module (Overlaps the hero with negative margin) */}
      <ContactConsultation />
    </div>
  );
}

