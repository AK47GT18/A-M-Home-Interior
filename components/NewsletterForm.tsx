"use client";

import React, { useState } from "react";
import { ArrowRight, CheckIcon } from "@/components/icons";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-[#c59b4e]/40 text-[#c59b4e] text-xs sm:text-sm">
        <CheckIcon className="w-5 h-5 text-[#c59b4e] shrink-0" />
        <span className="font-medium text-white">
          Thank you. You have been added to our private monograph registry.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address..."
        className="w-full pl-6 pr-14 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-zinc-400 text-xs sm:text-sm focus:outline-none focus:border-[#c59b4e] transition-colors"
      />
      <button
        type="submit"
        className="absolute right-2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#c59b4e] transition-colors"
        aria-label="Subscribe"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

