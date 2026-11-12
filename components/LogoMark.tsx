import React from "react";

interface LogoMarkProps {
  className?: string;
  color?: string;
}

export function LogoMark({ className = "w-8 h-8", color = "currentColor" }: LogoMarkProps) {
  return (
    <svg
      viewBox="130 115 230 175"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="A&M Home Interiors Emblem"
    >
      {/* Left Wall & Peak */}
      <path
        d="M 170 275 L 170 160 L 225 125 L 225 275"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* Right Sloped Roof & Wall */}
      <path
        d="M 225 125 L 320 205 L 320 275"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* Ground Line */}
      <line
        x1="135"
        y1="278"
        x2="355"
        y2="278"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="square"
      />

      {/* Left 'i' Column */}
      <rect x="200" y="160" width="16" height="18" fill={color} />
      <rect x="200" y="188" width="16" height="82" fill={color} />

      {/* Ceiling Pendant */}
      <line x1="252" y1="147" x2="252" y2="178" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M 243 182 Q 252 173 261 182 Z" fill={color} />

      {/* Lounge Armchair */}
      <path
        d="M 248 214 Q 268 214 278 214 C 285 214 290 220 290 228 L 290 238 C 290 242 288 245 285 248 C 285 254 280 258 274 258 L 252 258 C 246 258 241 254 241 248 C 238 245 236 242 236 238 L 236 228 C 236 220 241 214 248 214 Z"
        fill={color}
      />
      <line x1="248" y1="258" x2="246" y2="267" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="278" y1="258" x2="280" y2="267" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

