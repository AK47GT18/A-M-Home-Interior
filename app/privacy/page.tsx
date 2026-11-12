import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | A&M HOME INTERIORS",
  description:
    "How A&M HOME INTERIORS collects, uses, and protects your personal information. Your privacy and confidentiality are fundamental to our practice.",
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `A&M HOME INTERIORS ("we", "our", "the Studio") is an interior architecture atelier operating from Lilongwe and Blantyre, Malawi. We are committed to protecting the privacy and confidentiality of every client, prospective client, and visitor who engages with our studio — online or in person.\n\nThis Privacy Policy explains what personal data we collect, why we collect it, how it is used and stored, and the rights you hold over your information. By engaging with our website or studio, you acknowledge and consent to the practices described herein.`,
  },
  {
    id: "data-collected",
    title: "Information We Collect",
    items: [
      { label: "Enquiry & Commission Data", text: "Name, company, email address, telephone number, subject, and project brief submitted through our contact form or by direct correspondence." },
      { label: "Site Usage Data", text: "Anonymous analytics data (page views, session duration, referral source) collected to improve website performance. No personally identifiable information is included in these reports." },
      { label: "Project & Commission Records", text: "Documents, specifications, drawings, photographs, and communications shared during the course of an active design commission." },
      { label: "Financial Records", text: "Invoice and payment records retained for accounting compliance under Malawian law. We do not store credit card or banking credentials." },
    ],
  },
  {
    id: "use-of-data",
    title: "How We Use Your Information",
    items: [
      { label: "Project Delivery", text: "To scope, plan, and execute your architectural commission to the standard agreed at engagement." },
      { label: "Communications", text: "To respond to enquiries, send project updates, and share relevant studio news (where consent is given)." },
      { label: "Legal Compliance", text: "To meet regulatory requirements including tax, anti-money-laundering, and professional indemnity obligations." },
      { label: "Studio Improvement", text: "To analyse anonymous site metrics and improve our website and service offering." },
    ],
  },
  {
    id: "confidentiality",
    title: "Client Confidentiality & NDA",
    content: `Discretion is a core principle of our practice. All project details — including client identity, property location, budget, design intent, and progress photography — are treated as strictly confidential.\n\nWe do not publish, exhibit, or share project materials (including portfolio photography) without explicit written consent from the commissioning client. Where consent is granted, we may feature work on our website, social media channels, or in professional publications, subject to any anonymisation requirements agreed upon.\n\nFor clients requiring a formal Non-Disclosure Agreement prior to engagement, please request one through our Contact page. We are pleased to execute NDAs as a standard prerequisite to any commission discussion.`,
  },
  {
    id: "data-sharing",
    title: "Third-Party Disclosure",
    content: `We do not sell, rent, or trade your personal data with any third party for commercial purposes. We may share limited information with:\n\n— Specialist sub-contractors and trade suppliers engaged solely for your project, bound by equivalent confidentiality obligations.\n— Professional advisors (legal, insurance) on a strictly need-to-know basis.\n— Regulatory authorities where required by Malawian law.\n\nAll third parties we engage are contractually required to handle your data in accordance with this policy.`,
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: `Enquiry data is retained for 24 months from the date of last correspondence. Active commission records are retained for the duration of the project plus seven (7) years for professional indemnity purposes. Financial records are retained for seven (7) years as required by Malawian tax legislation. You may request deletion of your data at any time, subject to any legal retention obligations.`,
  },
  {
    id: "rights",
    title: "Your Rights",
    items: [
      { label: "Access", text: "Request a copy of the personal data we hold about you." },
      { label: "Correction", text: "Request correction of inaccurate or incomplete data." },
      { label: "Deletion", text: "Request erasure of your data, subject to legal retention requirements." },
      { label: "Objection", text: "Object to our processing of your data for marketing purposes." },
      { label: "Portability", text: "Receive your data in a structured, commonly used format." },
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    content: `Our website uses only functional and analytical cookies necessary for site operation and performance measurement. We do not use advertising or tracking cookies. You may disable cookies in your browser settings; however, some site features may not function as intended.`,
  },
  {
    id: "contact-us",
    title: "Contact & Complaints",
    content: `For any privacy-related enquiry, data subject request, or complaint, please contact us directly:\n\nStudio Concierge — concierge@amhomeinteriors.com\nLilongwe Atelier — Area 43 Executive Compound, Lilongwe, Malawi\n+265 (0) 99 812 3456\n\nWe aim to respond to all requests within 10 working days.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-16 sm:pb-20 bg-[#0d0f12] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0f12]/60 to-[#0d0f12]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59b4e] font-heading block mb-3">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-white leading-tight tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
            Your privacy and confidentiality are fundamental principles of our practice. Last updated:{" "}
            <span className="text-zinc-300">November 2026</span>
          </p>
        </div>
      </section>

      {/* Body: sidebar + content */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

            {/* ── LEFT: Sticky TOC sidebar ── */}
            <aside className="lg:w-56 xl:w-64 shrink-0 lg:sticky lg:top-28 self-start">
              <p className="text-[9px] font-bold uppercase tracking-widest text-[#c59b4e] font-heading mb-4">
                Contents
              </p>
              <nav className="space-y-1">
                {sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group flex items-start gap-2.5 py-1.5 text-xs text-zinc-400 hover:text-[#0d0f12] transition-colors"
                  >
                    <span className="font-heading font-bold text-[10px] text-zinc-300 group-hover:text-[#c59b4e] transition-colors mt-0.5 shrink-0 w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-light leading-snug">{s.title}</span>
                  </a>
                ))}
              </nav>

              {/* Legal switcher */}
              <div className="mt-8 pt-6 border-t border-black/8 space-y-2">
                <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 font-heading mb-3">Also See</p>
                <Link href="/terms" className="block text-xs text-zinc-400 hover:text-[#0d0f12] transition-colors font-light">
                  Terms &amp; Conditions
                </Link>
                <Link href="/contact" className="block text-xs text-zinc-400 hover:text-[#0d0f12] transition-colors font-light">
                  Contact Us
                </Link>
              </div>
            </aside>

            {/* ── RIGHT: Main content ── */}
            <div className="flex-1 min-w-0">
              <div className="space-y-14">
                {sections.map((s, i) => (
                  <div key={s.id} id={s.id} className="scroll-mt-28">
                    <div className="flex items-start gap-4 mb-5">
                      <span className="text-[10px] font-bold font-heading text-[#c59b4e] mt-1 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-lg sm:text-xl font-heading font-semibold text-[#0d0f12]">
                        {s.title}
                      </h2>
                    </div>

                    {"content" in s && s.content && (
                      <div className="pl-9 space-y-3">
                        {s.content.split("\n\n").map((para, pi) => (
                          <p key={pi} className="text-sm text-zinc-500 font-light leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    )}

                    {"items" in s && s.items && (
                      <ul className="pl-9 space-y-3">
                        {s.items.map((item) => (
                          <li key={item.label} className="flex gap-3">
                            <div className="w-1 h-1 rounded-full bg-[#c59b4e] mt-2 shrink-0" />
                            <p className="text-sm text-zinc-500 font-light leading-relaxed">
                              <span className="font-semibold text-[#0d0f12]">{item.label} — </span>
                              {item.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer nav */}
              <div className="mt-16 pt-8 border-t border-black/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-zinc-400 font-light">© 2026 A&amp;M HOME INTERIORS. All rights reserved.</p>
                <div className="flex items-center gap-5 text-xs">
                  <Link href="/terms" className="text-zinc-400 hover:text-[#0d0f12] transition-colors">
                    Terms &amp; Conditions
                  </Link>
                  <Link href="/contact" className="text-[#0d0f12] font-semibold font-heading hover:text-[#c59b4e] transition-colors">
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
