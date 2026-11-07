"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "@/config/images";
import { BUSINESS_CONFIG } from "@/config/business";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MapPin, Users, Sparkles, ChevronDown, MessageCircle, ArrowRight, Radio } from "lucide-react";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const isOdia = language === "or";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image with Dark Luxury Vignette Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero.heroBaraat}
          alt="Shree Baldev Musical Baraat and DJ sound truck celebration"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        {/* Gradient dark overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-[#070605]/80 to-[#070605]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070605]/90 via-[#070605]/60 to-transparent" />
        <div className="absolute inset-0 radial-dark-vignette opacity-80" />
      </div>

      {/* Decorative Golden Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D9B56B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#F0D693]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17130D]/90 border border-[#D9B56B]/40 text-[#F0D693] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-xl backdrop-blur-sm animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#D9B56B]" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Brand Title Editable Text */}
        <div className="mb-3">
          <h2
            className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-wider text-[#D9B56B] uppercase font-serif"
            style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
          >
            {isOdia ? "ଶ୍ରୀ ବଳଦେବ ମ୍ୟୁଜିକାଲ" : BUSINESS_CONFIG.name}
          </h2>
          <div className="flex items-center justify-center gap-3 my-2">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D9B56B]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#B9B3A7] uppercase">
              {isOdia ? "ବ୍ୟାଣ୍ଡ ବାଜା • ବକ୍ସ ମ୍ୟୁଜିକ" : BUSINESS_CONFIG.tagline}
            </span>
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D9B56B]" />
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFFFFF] max-w-4xl leading-tight font-serif mb-6 drop-shadow-md"
          style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
        >
          {isOdia ? (
            <span>
              ଯେଉଁଠି ପ୍ରତ୍ୟେକ ଉତ୍ସବ ପାଏ{" "}
              <span className="gold-gradient-text block mt-1">ତାର ନୂତନ ଛନ୍ଦ</span>
            </span>
          ) : (
            <span>
              WHERE EVERY CELEBRATION{" "}
              <span className="gold-gradient-text block mt-2">FINDS ITS RHYTHM</span>
            </span>
          )}
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-xl text-[#B9B3A7] max-w-2xl mb-8 leading-relaxed font-light">
          {t.hero.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide shadow-2xl"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{t.hero.bookEventBtn}</span>
          </a>

          <a
            href="#services"
            className="gold-outline-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm sm:text-base font-semibold"
          >
            <span>{t.hero.exploreServicesBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Verified Capability Badges (strictly real, non-invented) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4 border-t border-[#D9B56B]/20 text-xs sm:text-sm text-[#B9B3A7]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17130D]/80 border border-[#D9B56B]/25">
            <Users className="w-4 h-4 text-[#D9B56B]" />
            <span>{t.hero.teamBadge}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17130D]/80 border border-[#D9B56B]/25">
            <MapPin className="w-4 h-4 text-[#D9B56B]" />
            <span>Naraanpur, Angulai, Kendrapara</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17130D]/90 border border-brand-gold/30 text-brand-gold-bright font-mono text-xs">
            <Radio className="w-3.5 h-3.5 text-brand-gold" />
            <span>{isOdia ? "ସାଉଣ୍ଡ ଟ୍ରକ୍: ଶ୍ରୀ BALADEV (୯୩୩୭୧୭୭୧୦୬)" : "Sound Truck: ଶ୍ରୀ BALADEV (9337177106)"}</span>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#D9B56B] hover:text-[#FFFFFF] transition-colors flex flex-col items-center gap-1 opacity-80 hover:opacity-100 z-10"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#B9B3A7]">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
