"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, CloseIcon, ArrowUpRight, PhoneIcon } from "./icons";
import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
  ];

  const isLightNav = isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-400 ${
          isLightNav
            ? "py-4 bg-white/95 backdrop-blur-md border-b border-black/5 shadow-xs"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - 1:1 Transparent Full Logo */}
            <Link
              href="/"
              className="flex items-center transition-opacity hover:opacity-90"
            >
              <Logo
                className="h-14 sm:h-16 w-auto"
                theme={isLightNav ? "light" : "dark"}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative text-xs lg:text-sm tracking-wider uppercase font-medium transition-all duration-200 py-1 ${
                      isLightNav
                        ? isActive
                          ? "text-[#111215] font-semibold"
                          : "text-zinc-600 hover:text-[#111215]"
                        : isActive
                        ? "text-white font-semibold"
                        : "text-zinc-200 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c59b4e] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Contact Us button */}
            <div className="hidden md:flex items-center space-x-5">
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-xs ${
                  isLightNav
                    ? "bg-[#111215] text-white hover:bg-[#c59b4e] hover:text-black"
                    : "bg-white text-black hover:bg-[#c59b4e] hover:text-black"
                }`}
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isLightNav
                    ? "text-[#111215] hover:bg-zinc-100"
                    : "text-white bg-black/30 backdrop-blur-md hover:bg-black/50"
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <CloseIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-white/98 backdrop-blur-xl transition-all duration-400 flex flex-col justify-between p-6 pt-28 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col space-y-4">
          <p className="text-[11px] font-semibold tracking-widest text-[#c59b4e] uppercase mb-2">
            Navigation Menu
          </p>
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl tracking-wide py-2.5 border-b border-black/5 transition-colors font-sans ${
                pathname === item.href
                  ? "text-[#111215] font-semibold"
                  : "text-zinc-600 hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl text-[#c59b4e] hover:text-[#111215] tracking-wide py-2.5 border-b border-black/5 flex items-center justify-between transition-colors font-sans font-semibold"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="border-t border-black/10 pt-6 flex flex-col space-y-3 text-xs text-zinc-600">
          <div className="flex items-center gap-2 text-[#111215] font-semibold">
            <PhoneIcon className="w-4 h-4 text-[#c59b4e]" />
            <span>+265 (0) 99 812 3456</span>
          </div>
          <p className="tracking-wider uppercase text-[10px] text-zinc-400 font-sans">
            A&amp;M HOME INTERIORS • Architectural Living
          </p>
        </div>
      </div>
    </>
  );
}
