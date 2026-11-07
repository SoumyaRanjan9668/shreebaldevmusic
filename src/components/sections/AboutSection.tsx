"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "@/config/images";
import { BUSINESS_CONFIG } from "@/config/business";
import { useLanguage } from "@/context/LanguageContext";
import { Users, MapPin, Music, Radio, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const { t, language } = useLanguage();
  const isOdia = language === "or";

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-brand-black overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-card border border-brand-gold/30 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-4">
            <Music className="w-3.5 h-3.5" />
            <span>{t.about.sectionTag}</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFFFFF] font-serif leading-tight mb-6"
            style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
          >
            {t.about.heading}
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Dual Visual Showcase + Verified Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual Composition with 2 images */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            {/* Image 1: Band Baja */}
            <div className="group relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-brand-gold/30 shadow-2xl">
              <Image
                src={IMAGES.services.bandBaja}
                alt="Traditional Indian Band Baja performing in royal uniforms"
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-card/90 border border-brand-gold/40 text-xs font-semibold text-brand-gold-bright">
                  <Music className="w-3 h-3 text-brand-gold" />
                  {t.about.bandBadge}
                </span>
              </div>
            </div>

            {/* Image 2: Box Music */}
            <div className="group relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-brand-gold/30 shadow-2xl sm:translate-y-6">
              <Image
                src={IMAGES.services.boxMusic}
                alt="High power Box Music sound system with LED lighting"
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-card/90 border border-brand-gold/40 text-xs font-semibold text-brand-gold-bright">
                  <Radio className="w-3 h-3 text-brand-gold" />
                  {t.about.boxBadge}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Facts & Description */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-brand-card border border-brand-gold/25 shadow-xl">
              <h3
                className="text-xl sm:text-2xl font-semibold text-brand-gold-bright font-serif mb-3"
                style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
              >
                {isOdia ? "ପରମ୍ପରା ଓ ଆଧୁନିକ ଧ୍ୱନିର ସଙ୍ଗମ" : "Tradition & Modern Sound Combined"}
              </h3>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-4">
                {t.about.paragraph2}
              </p>
              <p className="text-xs sm:text-sm text-brand-gold italic">
                {t.about.experienceNotice}
              </p>
            </div>

            {/* Verified Fact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Fact 1: 20-member team */}
              <div className="p-5 rounded-2xl bg-brand-secondary border border-brand-gold/20 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-card border border-brand-gold/30 text-brand-gold shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#FFFFFF]">{t.about.teamTitle}</h4>
                  <p className="text-xs text-brand-muted mt-1 leading-snug">
                    {t.about.teamSubtitle}
                  </p>
                </div>
              </div>

              {/* Fact 2: Location */}
              <div className="p-5 rounded-2xl bg-brand-secondary border border-brand-gold/20 flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-brand-card border border-brand-gold/30 text-brand-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#FFFFFF]">{t.about.locationTitle}</h4>
                  <p className="text-xs text-brand-muted mt-1 leading-snug">
                    {t.about.locationSubtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Service Highlights Checklist */}
            <div className="p-5 rounded-2xl bg-brand-secondary border border-brand-gold/20">
              <span className="text-xs font-semibold text-brand-gold tracking-wider uppercase block mb-3">
                {isOdia ? "ଆମର ମୂଳ ସେବା ସମୂହ" : "Core Capabilities"}
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-brand-muted">
                {BUSINESS_CONFIG.businessTypes.map((type) => (
                  <li key={type} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
