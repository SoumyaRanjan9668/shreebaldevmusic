"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/config/images";
import { BUSINESS_CONFIG } from "@/config/business";
import { useLanguage } from "@/context/LanguageContext";

interface BrandLogoProps {
  variant?: "navbar" | "footer" | "hero" | "compact";
  className?: string;
  showTagline?: boolean;
}

export default function BrandLogo({
  variant = "navbar",
  className = "",
  showTagline = true,
}: BrandLogoProps) {
  const { language } = useLanguage();

  const isOdia = language === "or";
  const brandName = isOdia ? "ଶ୍ରୀ ବଳଦେବ ମ୍ୟୁଜିକାଲ" : BUSINESS_CONFIG.name;
  const tagline = isOdia ? "ବ୍ୟାଣ୍ଡ ବାଜା • ବକ୍ସ ମ୍ୟୁଜିକ" : BUSINESS_CONFIG.tagline;

  const iconSizes = {
    compact: 40,
    navbar: 48,
    footer: 56,
    hero: 72,
  };

  const size = iconSizes[variant];

  return (
    <Link
      href="#home"
      className={`group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-95 ${className}`}
      aria-label="SHREE BALDEV MUSICAL Home"
    >
      <div className="relative flex-shrink-0 flex items-center justify-center rounded-full p-1 bg-gradient-to-br from-[#F0D693]/30 via-[#D9B56B]/10 to-transparent border border-[#D9B56B]/40 shadow-[0_0_15px_rgba(217,181,107,0.2)] group-hover:border-[#F0D693] group-hover:shadow-[0_0_22px_rgba(240,214,147,0.35)] transition-all">
        <Image
          src={IMAGES.brand.logoIcon}
          alt="Shree Baldev Musical Emblem"
          width={size}
          height={size}
          className="rounded-full object-cover"
          priority
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`font-semibold tracking-wider text-[#FFFFFF] group-hover:text-[#F0D693] transition-colors leading-tight ${
            variant === "footer"
              ? "text-xl sm:text-2xl font-serif"
              : variant === "hero"
              ? "text-2xl sm:text-3xl font-serif"
              : "text-base sm:text-lg font-serif"
          }`}
          style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
        >
          {brandName}
        </span>
        {showTagline && (
          <span
            className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#D9B56B] uppercase mt-0.5"
            style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-jakarta)" }}
          >
            {tagline}
          </span>
        )}
      </div>
    </Link>
  );
}
