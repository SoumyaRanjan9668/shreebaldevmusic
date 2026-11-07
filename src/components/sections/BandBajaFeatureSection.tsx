"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "@/config/images";
import { useLanguage } from "@/context/LanguageContext";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Music2, Award, Sparkles, ShieldCheck } from "lucide-react";

export default function BandBajaFeatureSection() {
  const { t, language } = useLanguage();
  const isOdia = language === "or";

  return (
    <section className="relative py-20 sm:py-28 bg-[#100E0A] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9B56B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-[#D9B56B]/30 shadow-2xl h-[420px] sm:h-[500px]">
              <Image
                src={IMAGES.services.bandBaja}
                alt="Traditional Indian brass band musicians performing at wedding"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-[#070605]/30 to-transparent" />
            </div>

            {/* Floating Inset Badge: 20-member troupe */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 p-4 sm:p-5 rounded-2xl bg-[#17130D]/95 border border-[#D9B56B]/40 shadow-2xl backdrop-blur-md max-w-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#070605] border border-[#D9B56B]/40 text-[#D9B56B]">
                  <Music2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#FFFFFF]">20-Member Ensemble</h4>
                  <p className="text-xs text-[#B9B3A7] mt-0.5">
                    Brass instruments, dholak, and ceremonial uniforms
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17130D] border border-[#D9B56B]/30 text-[#D9B56B] text-xs font-semibold tracking-wider uppercase mb-5">
              <Music2 className="w-3.5 h-3.5" />
              <span>{t.bandBajaFeature.sectionTag}</span>
            </div>

            <h2
              className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFFFFF] font-serif leading-tight mb-6"
              style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
            >
              {t.bandBajaFeature.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#B9B3A7] leading-relaxed mb-8">
              {t.bandBajaFeature.description}
            </p>

            {/* Feature Highlights */}
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#17130D] border border-[#D9B56B]/30 text-[#D9B56B] flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#FFFFFF]">
                    {t.bandBajaFeature.feature1Title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#B9B3A7] mt-0.5">
                    {t.bandBajaFeature.feature1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#17130D] border border-[#D9B56B]/30 text-[#D9B56B] flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#FFFFFF]">
                    {t.bandBajaFeature.feature2Title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#B9B3A7] mt-0.5">
                    {t.bandBajaFeature.feature2Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#17130D] border border-[#D9B56B]/30 text-[#D9B56B] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#FFFFFF]">
                    {t.bandBajaFeature.feature3Title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#B9B3A7] mt-0.5">
                    {t.bandBajaFeature.feature3Desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div>
              <WhatsAppButton
                serviceName="Traditional Band Baja"
                variant="primary"
                className="px-8 py-3.5 text-sm sm:text-base font-bold"
              >
                {t.bandBajaFeature.bookBandBtn}
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
