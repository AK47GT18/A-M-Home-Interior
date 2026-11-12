import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import {
  ArrowUpRight,
  PhoneIcon,
  MapPinIcon,
  InstagramIcon,
  WhatsAppIcon,
  FacebookIcon,
  DirectMailIcon,
} from "./icons";

export function Footer() {
  return (
    <footer className="bg-[#f9f9f8] text-zinc-600 border-t border-black/10 pt-14 pb-10 sm:pt-16 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid - Balanced, Compact & Refined */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-black/10">
          {/* Left Column: Brand Info & Social Links */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block group transition-opacity hover:opacity-90">
              <Logo className="h-16 sm:h-20 w-auto" theme="light" />
            </Link>

            <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed max-w-sm">
              Bespoke interior architecture, custom joinery, and spatial curation. Designing residential sanctuaries engineered for permanence and quiet luxury.
            </p>

            {/* Social & Contact Quick Links on the Left (Instagram, WhatsApp, Facebook, Email) */}
            <div className="pt-1 flex items-center gap-2.5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/a_and_m_home_interior"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#0d0f12] hover:bg-[#0d0f12] hover:text-[#c59b4e] hover:border-[#0d0f12] transition-all shadow-2xs"
                aria-label="Instagram"
                title="Follow on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/265997637667"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#0d0f12] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all shadow-2xs"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100063506246459"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#0d0f12] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all shadow-2xs"
                aria-label="Facebook"
                title="Connect on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              {/* Email */}
              <a
                href="mailto:alexamanda866@gmail.com"
                className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#0d0f12] hover:bg-[#0d0f12] hover:text-[#c59b4e] hover:border-[#0d0f12] transition-all shadow-2xs"
                aria-label="Email Concierge"
                title="Send an Email"
              >
                <DirectMailIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="text-[11px] text-zinc-400 font-medium tracking-wider uppercase pt-1">
              Lilongwe • Blantyre • International
            </div>
          </div>

          {/* Navigation Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0d0f12] font-heading">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#c59b4e] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#c59b4e] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#c59b4e] transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#c59b4e] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c59b4e] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Disciplines Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0d0f12] font-heading">
              Disciplines
            </p>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li>Spatial Architecture</li>
              <li>Bespoke Millwork</li>
              <li>Lighting &amp; Acoustics</li>
              <li>Material Curation</li>
              <li>Turnkey Delivery</li>
            </ul>
          </div>

          {/* Studio Locations Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0d0f12] font-heading">
              Studio Ateliers
            </p>
            <div className="text-xs space-y-2.5 text-zinc-600">
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-3.5 h-3.5 text-[#c59b4e] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#0d0f12] block font-medium">Lilongwe Atelier</span>
                  <span className="text-zinc-500">Area 43 Executive Compound</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPinIcon className="w-3.5 h-3.5 text-[#c59b4e] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#0d0f12] block font-medium">Blantyre Studio</span>
                  <span className="text-zinc-500">Nyambadwe Hillside</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 text-[#0d0f12] font-semibold">
                <PhoneIcon className="w-3.5 h-3.5 text-[#c59b4e]" />
                <a href="tel:+265997637667" className="hover:text-[#c59b4e] transition-colors">
                  0997 637 667
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© 2026 A&amp;M HOME INTERIORS. All rights reserved.</p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <Link href="/privacy" className="hover:text-[#0d0f12] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#0d0f12] transition-colors">
              Terms &amp; Conditions
            </Link>
            <a href="#hero" className="hover:text-[#0d0f12] transition-colors flex items-center gap-1 font-medium">
              <span>Back to Top</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
