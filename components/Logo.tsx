import React from "react";

interface LogoProps {
  className?: string;
  theme?: "dark" | "light"; // "dark" means light content on dark bg; "light" means pure black content
}

export function Logo({ className = "h-14 sm:h-16 w-auto", theme = "light" }: LogoProps) {
  const strokeColor = theme === "dark" ? "#ffffff" : "#000000";
  const fillColor = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <svg
      viewBox="160 230 680 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="A&M HOME INTERIORS Logo"
    >
      {/* House Outer Outline */}
      <path
        d="M 345 558 L 345 320 L 458 250 L 458 558"
        stroke={strokeColor}
        strokeWidth="21"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M 458 250 L 650 415 L 650 558"
        stroke={strokeColor}
        strokeWidth="21"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <line
        x1="280"
        y1="562"
        x2="720"
        y2="562"
        stroke={strokeColor}
        strokeWidth="21"
        strokeLinecap="square"
      />

      {/* 'i' Pillar */}
      <rect x="400" y="318" width="35" height="42" fill={fillColor} />
      <rect x="400" y="380" width="35" height="168" fill={fillColor} />

      {/* Pendant Lamp */}
      <line x1="512" y1="298" x2="512" y2="362" stroke={strokeColor} strokeWidth="7" strokeLinecap="round" />
      <path d="M 494 374 C 494 358 530 358 530 374 Z" fill={fillColor} />

      {/* Armchair */}
      <path
        d="M 507 433 C 486 433 486 462 486 478 C 486 498 494 506 507 506 L 507 522 C 507 526 513 529 520 529 L 552 529 C 559 529 565 526 565 522 L 565 506 C 578 506 586 498 586 478 C 586 462 586 433 565 433 C 554 433 550 440 536 440 C 522 440 518 433 507 433 Z"
        fill={fillColor}
      />
      <line x1="510" y1="528" x2="508" y2="542" stroke={strokeColor} strokeWidth="6" strokeLinecap="round" />
      <line x1="562" y1="528" x2="564" y2="542" stroke={strokeColor} strokeWidth="6" strokeLinecap="round" />

      {/* Full Typography - Complete with plenty of left/right margins */}
      <text
        x="500"
        y="642"
        textAnchor="middle"
        fill={fillColor}
        fontFamily="'Plus Jakarta Sans', 'Outfit', system-ui, sans-serif"
      >
        <tspan fontSize="56" fontWeight="900" letterSpacing="0.04em">A &amp; M</tspan>
        <tspan dx="20" fontSize="36" fontWeight="800" letterSpacing="0.08em">HOME INTERIORS</tspan>
      </text>
    </svg>
  );
}
