import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | A&M HOME INTERIORS",
  description:
    "Terms and conditions governing the engagement of A&M HOME INTERIORS for architectural and interior design commissions.",
};

const sections = [
  {
    id: "definitions",
    title: "Definitions",
    content: `"Studio" refers to A&M HOME INTERIORS, an interior architecture atelier registered in Malawi and operating from Lilongwe and Blantyre.\n\n"Client" refers to the individual, couple, or legal entity commissioning the Studio's services.\n\n"Commission" refers to the agreed scope of architectural, interior design, or related services as set out in a signed Letter of Engagement or Proposal document.\n\n"Fee" refers to the professional fee agreed upon in writing for the stated scope of the Commission.`,
  },
  {
    id: "engagement",
    title: "Engagement & Agreement",
    content: `All commissions are formalised through a written Letter of Engagement signed by both the Client and an authorised principal of the Studio. No work will commence, nor will any binding obligation arise, prior to execution of this document.\n\nThe Letter of Engagement will specify the scope of services, timeline, fee structure, payment schedule, and any special conditions applicable to the Commission.\n\nWhere a Non-Disclosure Agreement is requested by either party, it will be executed prior to or simultaneously with the Letter of Engagement.`,
  },
  {
    id: "fees-payment",
    title: "Fees & Payment",
    items: [
      { label: "Fee Structure", text: "Professional fees are quoted on a per-commission basis and may be structured as a fixed lump sum, a percentage of the construction/procurement value, or a time-based retainer, as agreed in the Letter of Engagement." },
      { label: "Retainer", text: "A non-refundable retainer of 30% of the agreed fee is due upon signing of the Letter of Engagement and before design work commences." },
      { label: "Milestone Payments", text: "Subsequent payments are due at agreed project milestones as specified in the Letter of Engagement. The Studio reserves the right to pause work if any payment is overdue by more than 14 calendar days." },
      { label: "Currency & Tax", text: "All fees are quoted in Malawian Kwacha (MWK) unless otherwise agreed in writing. Applicable taxes (including VAT where applicable) will be itemised on each invoice." },
      { label: "Late Payment", text: "Invoices unpaid beyond 30 days from date of issue will accrue interest at a rate of 2% per month on the outstanding balance." },
    ],
  },
  {
    id: "scope-changes",
    title: "Scope Changes & Variations",
    content: `Any change to the agreed scope of work — including additions, deletions, or redesigns initiated by the Client — must be requested in writing. The Studio will assess the impact on timeline and fee and issue a written Variation Order for the Client's approval before proceeding.\n\nWork performed outside the agreed scope without a signed Variation Order may be invoiced at the Studio's prevailing hourly rate.`,
  },
  {
    id: "ip",
    title: "Intellectual Property",
    content: `All designs, drawings, specifications, 3D visualisations, mood boards, material schedules, and documentation produced by the Studio remain the exclusive intellectual property of A&M HOME INTERIORS until the Fee is paid in full.\n\nUpon settlement of all outstanding fees, the Client is granted a non-exclusive, non-transferable licence to use the deliverables solely for the purpose of constructing or realising the specified project.\n\nThe Studio retains the right to document and photograph completed projects for portfolio, editorial, and promotional purposes, subject to the Client's written consent and any agreed anonymisation conditions.`,
  },
  {
    id: "client-obligations",
    title: "Client Obligations",
    items: [
      { label: "Access", text: "The Client will provide reasonable access to the property at agreed times for site surveys, inspections, and installation supervision." },
      { label: "Information", text: "The Client will supply accurate and complete information regarding the property, existing structures, and any constraints. The Studio accepts no liability for errors arising from incomplete or inaccurate information provided by the Client." },
      { label: "Decisions", text: "The Client will respond to design presentations, material selections, and approval requests within the timeframes agreed in the project programme. Delays caused by late Client approvals may affect timeline and may incur additional fees." },
      { label: "Third Parties", text: "Where the Client engages third-party contractors separately, the Client is responsible for coordinating their work with the Studio's design intent and programme." },
    ],
  },
  {
    id: "liability",
    title: "Liability & Indemnity",
    content: `The Studio's total liability to the Client for any claim arising from or related to a Commission shall not exceed the total Fee paid for that Commission.\n\nThe Studio accepts no liability for:\n— Structural defects in existing buildings not identified in the agreed scope.\n— Delays caused by third-party contractors, suppliers, or regulatory authorities.\n— Changes in material or product availability after procurement specifications have been approved.\n— Loss of profit, consequential loss, or indirect damages of any nature.\n\nThe Client agrees to indemnify the Studio against any third-party claims arising from the Client's decisions, instructions, or modifications made without the Studio's written approval.`,
  },
  {
    id: "termination",
    title: "Termination",
    content: `Either party may terminate the Commission by providing 30 days' written notice. Upon termination:\n\n— The Client will be invoiced for all work completed to the date of termination, calculated on a pro-rata or time-basis as appropriate.\n— The non-refundable retainer is not returnable under any circumstances.\n— All Studio-owned design documentation remains the property of the Studio until outstanding fees are settled.\n\nThe Studio may terminate the Commission immediately and without notice if the Client is in material breach of these Terms, including failure to make payment.`,
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: `Both parties agree to maintain strict confidentiality regarding the financial terms, design details, and personal information pertaining to the Commission. This obligation survives termination of the engagement for a period of five (5) years.\n\nPlease refer to our Privacy Policy for details of how personal data is handled.`,
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Malawi.\n\nIn the event of a dispute, the parties agree to first attempt resolution through good-faith negotiation. If resolution cannot be reached within 30 days, the dispute shall be referred to mediation before any formal legal proceedings are commenced.\n\nThe Courts of Malawi shall have exclusive jurisdiction over any unresolved disputes.`,
  },
  {
    id: "amendments",
    title: "Amendments",
    content: `The Studio reserves the right to update these Terms and Conditions at any time. The version published on our website at the date of your Letter of Engagement is the version that governs your Commission. For commissions in progress, material amendments will be communicated in writing.`,
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-16 sm:pb-20 bg-[#0d0f12] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=60')",
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
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
            These terms govern the engagement of A&amp;M HOME INTERIORS for all architectural and interior design commissions. Last updated:{" "}
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
              {/* Preamble */}
              <div className="mb-8 p-4 rounded-xl bg-[#fafaf9] border border-black/6">
                <p className="text-[11px] text-zinc-500 font-light leading-relaxed">
                  By engaging the Studio or signing a Letter of Engagement, you agree to be bound by these Terms in full.
                </p>
              </div>

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
                <Link href="/privacy" className="block text-xs text-zinc-400 hover:text-[#0d0f12] transition-colors font-light">
                  Privacy Policy
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
                  <Link href="/privacy" className="text-zinc-400 hover:text-[#0d0f12] transition-colors">
                    Privacy Policy
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
