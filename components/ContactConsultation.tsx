"use client";

import React, { useState, useEffect } from "react";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  CheckIcon,
  ArrowRight,
  ArrowUpRight,
  InstagramIcon,
  WhatsAppIcon,
  FacebookIcon,
  LinkedinIcon,
} from "./icons";

const COOLDOWN_DURATION = 45; // 45 seconds cooldown

export function ContactConsultation() {
  const [submitted, setSubmitted] = useState(false);
  const [activeStudio, setActiveStudio] = useState<"lilongwe" | "blantyre">("lilongwe");
  const [cooldown, setCooldown] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({
    name: false,
    phone: false,
    email: false,
    subject: false,
    message: false,
  });

  // Calculate inline validation errors
  const errors = {
    name: !formData.name.trim()
      ? "Full name is required."
      : formData.name.trim().length < 2
      ? "Name must be at least 2 characters."
      : "",
    email: !formData.email.trim()
      ? "Email address is required."
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
      ? "Please enter a valid email address (e.g. name@domain.com)."
      : "",
    phone: !formData.phone.trim()
      ? "Contact phone number is required."
      : !/^[\d\s+\-()]{7,20}$/.test(formData.phone.trim())
      ? "Please enter a valid phone number (at least 7 digits)."
      : "",
    subject: !formData.subject.trim() ? "Commission subject is required." : "",
    message: !formData.message.trim()
      ? "Please provide project details."
      : formData.message.trim().length < 10
      ? "Message must be at least 10 characters."
      : "",
  };

  const hasErrors = Boolean(
    errors.name || errors.email || errors.phone || errors.subject || errors.message
  );

  // Cooldown countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [cooldown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all required fields as touched
    setTouched({
      name: true,
      phone: true,
      email: true,
      subject: true,
      message: true,
    });

    if (hasErrors) {
      return;
    }

    if (cooldown > 0) {
      return;
    }

    // Trigger success and begin cooldown
    setSubmitted(true);
    setCooldown(COOLDOWN_DURATION);
  };

  const resetForm = () => {
    if (cooldown > 0) return;
    setSubmitted(false);
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
    setTouched({
      name: false,
      phone: false,
      email: false,
      subject: false,
      message: false,
    });
  };

  return (
    <div className="bg-white">
      {/* ------------------------------------------------------------ */}
      {/* 1. FLOATING OVERLAPPING CONTACT CARD */}
      {/* ------------------------------------------------------------ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-32 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-black/5 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: "Get in touch" */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0d0f12]">
                  Get in touch
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 font-light mt-2 leading-relaxed">
                  We welcome private commissions for residential architecture, luxury villas, custom millwork, and turnkey estate transformations.
                </p>
              </div>

              {/* Contact Items with Sleek Solid Black Circular Icon Badges */}
              <div className="space-y-6">
                {/* Item 1: Head Office */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#0d0f12] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0d0f12] font-heading">
                      Head Office &amp; Atelier
                    </h4>
                    <p className="text-xs text-zinc-500 font-light mt-0.5">
                      Area 43 Executive Compound, No 12
                    </p>
                    <p className="text-xs text-zinc-500 font-light">
                      Lilongwe • Malawi
                    </p>
                  </div>
                </div>

                {/* Item 2: Email Us */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#0d0f12] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0d0f12] font-heading">
                      Email Us
                    </h4>
                    <a
                      href="mailto:alexamanda866@gmail.com"
                      className="text-xs text-zinc-600 hover:text-black transition-colors font-light block mt-0.5"
                    >
                      alexamanda866@gmail.com
                    </a>
                    <a
                      href="mailto:alexamanda866@gmail.com"
                      className="text-xs text-zinc-600 hover:text-black transition-colors font-light block"
                    >
                      alexamanda866@gmail.com
                    </a>
                  </div>
                </div>

                {/* Item 3: Call Us */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#0d0f12] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0d0f12] font-heading">
                      Call Us
                    </h4>
                    <p className="text-xs text-zinc-600 font-light mt-0.5">
                      Phone:{" "}
                      <a href="tel:+265997637667" className="hover:text-black font-medium text-[#0d0f12]">
                        0997 637 667
                      </a>
                     </p>
                     <p className="text-xs text-zinc-500 font-light">
                       WhatsApp:{" "}
                       <a href="https://wa.me/265997637667" target="_blank" rel="noreferrer" className="hover:text-black font-medium text-[#0d0f12]">
                         0997 637 667
                       </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="pt-4 border-t border-black/5 space-y-3">
                <h4 className="text-xs font-bold text-[#0d0f12] font-heading uppercase tracking-wider">
                  Follow our social media
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100063506246459"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0d0f12] text-white flex items-center justify-center hover:bg-black transition-all shadow-xs"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/a_and_m_home_interior"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0d0f12] text-white flex items-center justify-center hover:bg-black transition-all shadow-xs"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/265997637667"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0d0f12] text-white flex items-center justify-center hover:bg-black transition-all shadow-xs"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: "Send us a message" with Inline Validation */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0d0f12] mb-6">
                Send us a message
              </h2>

              {submitted ? (
                <div className="p-8 sm:p-10 rounded-3xl bg-[#fafaf9] border border-black/5 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckIcon className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-heading font-bold text-[#0d0f12]">
                      Inquiry Transmitted
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-light max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="font-semibold text-black">{formData.name}</strong>. An atelier principal will review your architectural brief and contact you within 24 hours under our standard non-disclosure discretion.
                    </p>
                  </div>

                  {/* Anti-Spam Cooldown & Animated Progress Bar */}
                  <div className="max-w-md mx-auto p-4 rounded-2xl bg-white border border-black/5 space-y-2.5 text-left">
                    <div className="flex items-center justify-between text-xs font-heading font-semibold text-zinc-700">
                      <span>Anti-Spam Dispatch Protection</span>
                      <span className={cooldown > 0 ? "text-amber-600 font-bold" : "text-emerald-600 font-bold"}>
                        {cooldown > 0 ? `${cooldown}s Cooldown Active` : "Ready for Inquiries"}
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0d0f12] transition-all duration-1000 ease-linear rounded-full"
                        style={{
                          width: `${(cooldown / COOLDOWN_DURATION) * 100}%`,
                        }}
                      />
                    </div>
                    <p className="text-[11px] text-zinc-400 font-light">
                      {cooldown > 0
                        ? "Please wait for the transmission cooldown before submitting another message."
                        : "Cooldown complete. You may now submit another inquiry if needed."}
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={cooldown > 0}
                    onClick={resetForm}
                    className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all font-heading ${
                      cooldown > 0
                        ? "bg-zinc-200 text-zinc-400 cursor-not-allowed"
                        : "bg-[#0d0f12] text-white hover:bg-black hover:shadow-md"
                    }`}
                  >
                    <span>{cooldown > 0 ? `Wait ${cooldown}s to Send Another` : "Send Another Inquiry"}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 font-heading mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors placeholder:text-zinc-400 ${
                          touched.name && errors.name
                            ? "bg-red-50/20 border-red-400 text-red-900 focus:border-red-500"
                            : "bg-[#f8fafc] border-zinc-200 text-zinc-900 focus:border-[#0d0f12] focus:bg-white"
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p className="text-[11px] text-red-500 font-medium mt-1 font-heading">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 font-heading mb-1.5">
                        Company / Residence <span className="text-zinc-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Private Villa / Estate"
                        className="w-full px-4 py-3 rounded-xl bg-[#f8fafc] border border-zinc-200 text-zinc-900 text-xs sm:text-sm focus:outline-none focus:border-[#0d0f12] focus:bg-white transition-colors placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 font-heading mb-1.5">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+265..."
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors placeholder:text-zinc-400 ${
                          touched.phone && errors.phone
                            ? "bg-red-50/20 border-red-400 text-red-900 focus:border-red-500"
                            : "bg-[#f8fafc] border-zinc-200 text-zinc-900 focus:border-[#0d0f12] focus:bg-white"
                        }`}
                      />
                      {touched.phone && errors.phone && (
                        <p className="text-[11px] text-red-500 font-medium mt-1 font-heading">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 font-heading mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors placeholder:text-zinc-400 ${
                          touched.email && errors.email
                            ? "bg-red-50/20 border-red-400 text-red-900 focus:border-red-500"
                            : "bg-[#f8fafc] border-zinc-200 text-zinc-900 focus:border-[#0d0f12] focus:bg-white"
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p className="text-[11px] text-red-500 font-medium mt-1 font-heading">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 font-heading mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onBlur={() => setTouched((prev) => ({ ...prev, subject: true }))}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. New Residential Architecture Commission"
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors placeholder:text-zinc-400 ${
                        touched.subject && errors.subject
                          ? "bg-red-50/20 border-red-400 text-red-900 focus:border-red-500"
                          : "bg-[#f8fafc] border-zinc-200 text-zinc-900 focus:border-[#0d0f12] focus:bg-white"
                      }`}
                    />
                    {touched.subject && errors.subject && (
                      <p className="text-[11px] text-red-500 font-medium mt-1 font-heading">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 font-heading mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project location, approximate area (m²), and design aspirations..."
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors placeholder:text-zinc-400 resize-none ${
                        touched.message && errors.message
                          ? "bg-red-50/20 border-red-400 text-red-900 focus:border-red-500"
                          : "bg-[#f8fafc] border-zinc-200 text-zinc-900 focus:border-[#0d0f12] focus:bg-white"
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p className="text-[11px] text-red-500 font-medium mt-1 font-heading">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Full-width Black Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0d0f12] hover:bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 font-heading"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* 2. BALANCED INTERACTIVE ATELIER MAP WITH PROMINENT GOOGLE PIN */}
      {/* ------------------------------------------------------------ */}
      <section className="relative mt-16 sm:mt-20 w-full h-[460px] sm:h-[500px] bg-zinc-100 overflow-hidden border-t border-b border-black/5">
        {/* Real Embedded Google Map with Direct Pin Location */}
        <iframe
          title="A&M Atelier Location Map"
          src={
            activeStudio === "lilongwe"
              ? "https://maps.google.com/maps?q=-13.948212,33.771239+(Area+43+Executive+Compound,+Lilongwe)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              : "https://maps.google.com/maps?q=-15.772583,35.006939+(Nyambadwe+Hillside+Studio,+Blantyre)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
          }
          className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.98]"
          loading="lazy"
          allowFullScreen
        />

        {/* Floating Atelier Card Over Map (Without rating line) */}
        <div className="absolute top-6 left-4 sm:left-8 z-10 max-w-xs sm:max-w-sm w-full">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-black/10 shadow-xl space-y-3">
            {/* Atelier Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-zinc-100 rounded-lg">
              <button
                type="button"
                onClick={() => setActiveStudio("lilongwe")}
                className={`flex-1 py-1.5 px-3 rounded-md text-[11px] font-bold font-heading transition-all ${
                  activeStudio === "lilongwe"
                    ? "bg-[#0d0f12] text-white shadow-xs"
                    : "text-zinc-600 hover:text-black"
                }`}
              >
                Lilongwe Atelier
              </button>
              <button
                type="button"
                onClick={() => setActiveStudio("blantyre")}
                className={`flex-1 py-1.5 px-3 rounded-md text-[11px] font-bold font-heading transition-all ${
                  activeStudio === "blantyre"
                    ? "bg-[#0d0f12] text-white shadow-xs"
                    : "text-zinc-600 hover:text-black"
                }`}
              >
                Blantyre Studio
              </button>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#0d0f12] font-heading">
                  {activeStudio === "lilongwe"
                    ? "Lilongwe Executive Atelier"
                    : "Blantyre Hillside Studio"}
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0d0f12]/10 text-[#0d0f12] border border-black/10">
                  Open by Appt
                </span>
              </div>
              <p className="text-xs text-zinc-500 font-light">
                {activeStudio === "lilongwe"
                  ? "Area 43 Executive Compound, Lilongwe"
                  : "Nyambadwe Hillside, Blantyre"}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-600 font-light pt-2 border-t border-black/5">
              <span className="text-[11px] text-zinc-400">Gated Executive Access</span>
              <a
                href={
                  activeStudio === "lilongwe"
                    ? "https://maps.google.com/?q=-13.948212,33.771239"
                    : "https://maps.google.com/?q=-15.772583,35.006939"
                }
                target="_blank"
                rel="noreferrer"
                className="text-[#0d0f12] hover:text-[#c59b4e] font-semibold flex items-center gap-1 font-heading transition-colors"
              >
                <span>Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
