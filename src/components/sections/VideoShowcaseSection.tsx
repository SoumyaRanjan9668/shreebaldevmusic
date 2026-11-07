"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/config/images";
import { useLanguage } from "@/context/LanguageContext";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Play, Film, X, Volume2, Sparkles } from "lucide-react";

export default function VideoShowcaseSection() {
  const { t, language } = useLanguage();
  const isOdia = language === "or";
  const [isPlayingModalOpen, setIsPlayingModalOpen] = useState(false);

  return (
    <section className="relative py-20 sm:py-28 bg-[#070605] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17130D] border border-[#D9B56B]/30 text-[#D9B56B] text-xs font-semibold tracking-wider uppercase mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>{t.videoShowcase.sectionTag}</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFFFFF] font-serif leading-tight mb-6"
            style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
          >
            {t.videoShowcase.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#B9B3A7] leading-relaxed">
            {t.videoShowcase.subheading}
          </p>
        </div>

        {/* Video Showcase Card */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-[#D9B56B]/30 shadow-2xl bg-[#17130D]">
          {/* Main Visual Display */}
          <div className="relative h-80 sm:h-[480px] w-full">
            <Image
              src={IMAGES.hero.heroBaraat}
              alt="Live video performance showcase thumbnail"
              fill
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="object-cover"
            />
            {/* Dark Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-[#070605]/50 to-transparent" />

            {/* Pulsing Play Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <button
                type="button"
                onClick={() => setIsPlayingModalOpen(true)}
                className="group relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#F0D693] to-[#D9B56B] text-[#070605] shadow-[0_0_35px_rgba(217,181,107,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer mb-5"
                aria-label="Play performance preview"
              >
                <span className="absolute inset-0 rounded-full bg-[#F0D693] animate-ping opacity-30" />
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
              </button>

              <span
                className="text-lg sm:text-xl font-bold text-[#FFFFFF] font-serif tracking-wider drop-shadow-md"
                style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
              >
                {t.videoShowcase.watchPreview}
              </span>

              <p className="text-xs sm:text-sm text-[#F0D693] mt-1 font-medium max-w-md">
                {isOdia
                  ? "ପାରମ୍ପରିକ ବ୍ରାସ ବ୍ୟାଣ୍ଡ ଓ ବକ୍ସ ମ୍ୟୁଜିକର ସଜୀବ ପରିବେଷଣ"
                  : "Authentic Live Brass & High Power Box Music Showcase"}
              </p>
            </div>
          </div>

          {/* Bottom Control Bar */}
          <div className="p-6 sm:p-8 bg-[#17130D] border-t border-[#D9B56B]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2.5 rounded-xl bg-[#100E0A] border border-[#D9B56B]/30 text-[#D9B56B] flex-shrink-0">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#FFFFFF]">
                  {isOdia ? "ଜୀବନ୍ତ ଧ୍ୱନି ଓ ଉତ୍ସବର ମାହୋଲ" : "Live Acoustic Projection & Celebration Vibe"}
                </h4>
                <p className="text-xs text-[#B9B3A7]">
                  {t.videoShowcase.videoNotice}
                </p>
              </div>
            </div>

            <WhatsAppButton
              serviceName="Live Event Musical Booking"
              variant="outline"
              className="text-xs sm:text-sm px-6 py-2.5 flex-shrink-0"
            >
              {isOdia ? "ସିଧାସଳଖ ବୁକ୍ କରନ୍ତୁ" : "Enquire for Your Date"}
            </WhatsAppButton>
          </div>
        </div>
      </div>

      {/* Video Modal Display */}
      {isPlayingModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#070605]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-3xl w-full bg-[#17130D] border border-[#D9B56B]/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setIsPlayingModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#100E0A] border border-[#D9B56B]/40 text-[#F0D693] hover:text-[#FFFFFF] cursor-pointer"
              aria-label={t.videoShowcase.closeModal}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#100E0A] border border-[#D9B56B]/30 text-[#D9B56B] text-xs font-semibold uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.videoShowcase.modalTitle}</span>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-[#FFFFFF] font-serif"
                style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
              >
                SHREE BALDEV MUSICAL
              </h3>
              <p className="text-xs sm:text-sm text-[#B9B3A7] mt-1">
                {isOdia
                  ? "ସିଧାସଳଖ କାର୍ଯ୍ୟକ୍ରମ ପାଇଁ ୯୩୩୭୧୭୭୧୦୬ ରେ ଯୋଗାଯୋଗ କରନ୍ତୁ।"
                  : "For direct event booking and video clips via WhatsApp, contact 9337177106."}
              </p>
            </div>

            {/* Visual Preview Container */}
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-[#D9B56B]/25 mb-6">
              <Image
                src={IMAGES.services.realTruck || IMAGES.services.weddingBaraat}
                alt="Live Shree Baladev Sound Truck Reel"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain bg-[#070605]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-transparent to-transparent flex flex-col items-center justify-end p-5 text-center">
                <span className="text-sm font-semibold text-[#F0D693] bg-[#17130D]/95 px-4 py-2 rounded-full border border-[#D9B56B]/40 shadow-xl mb-1">
                  {isOdia
                    ? "ପ୍ରତ୍ୟକ୍ଷ ଲାଇଭ୍ ସେଟଅପ୍: ଶ୍ରୀ BALADEV • ୯୩୩୭୧୭୭୧୦୬"
                    : "Authentic Live Setup: ଶ୍ରୀ BALADEV • 9337177106"}
                </span>
                <p className="text-xs text-[#B9B3A7]">
                  {isOdia
                    ? "ସମ୍ପୂର୍ଣ୍ଣ କାର୍ଯ୍ୟକ୍ରମ ଭିଡିଓ କ୍ଲିପ୍ ପାଇଁ ହ୍ୱାଟ୍ସଆପ୍‌ରେ ମେସେଜ୍ କରନ୍ତୁ"
                    : "Request full live performance video clips directly on WhatsApp"}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppButton
                serviceName="Video & Performance Clips Enquiry"
                variant="primary"
                className="flex-1 py-3 text-sm font-bold"
              >
                {isOdia ? "ହ୍ୱାଟ୍ସଆପ୍‌ରେ ଭିଡିଓ ମାଗନ୍ତୁ" : "Get Performance Clips on WhatsApp"}
              </WhatsAppButton>
              <button
                type="button"
                onClick={() => setIsPlayingModalOpen(false)}
                className="gold-outline-btn px-6 py-3 rounded-full text-sm font-semibold cursor-pointer"
              >
                {t.videoShowcase.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
