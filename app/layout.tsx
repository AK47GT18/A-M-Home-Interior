import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A&M HOME INTERIORS | Bespoke Interior Architecture & Living",
  description:
    "A&M HOME INTERIORS is a premier interior architecture studio crafting bespoke private residences, estates, and luxury penthouses. Built from context. Designed for permanence.",
  keywords: [
    "A&M Home Interiors",
    "A&M HOME INTERIOR",
    "Interior Architecture",
    "Luxury Interior Design",
    "Bespoke Millwork",
    "Lilongwe Architecture",
    "Blantyre Design Atelier",
  ],
  authors: [{ name: "A&M Home Interiors" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "A&M HOME INTERIORS | Bespoke Interior Architecture",
    description: "Built from context. Designed for permanence.",
    type: "website",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0d0f12]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <PreFooterCTA />
        <Footer />
      </body>
    </html>
  );
}
