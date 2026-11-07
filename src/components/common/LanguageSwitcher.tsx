"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full p-1 bg-[#17130D] border border-[#D9B56B]/30 shadow-inner ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <div className="pl-2 pr-1 text-[#D9B56B]" aria-hidden="true">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          language === "en"
            ? "bg-gradient-to-r from-[#F0D693] to-[#D9B56B] text-[#070605] shadow-sm"
            : "text-[#B9B3A7] hover:text-[#FFFFFF]"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("or")}
        className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
          language === "or"
            ? "bg-gradient-to-r from-[#F0D693] to-[#D9B56B] text-[#070605] shadow-sm"
            : "text-[#B9B3A7] hover:text-[#FFFFFF]"
        }`}
        aria-pressed={language === "or"}
      >
        ଓଡ଼ିଆ
      </button>
    </div>
  );
}
