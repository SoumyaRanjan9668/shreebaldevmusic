"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/config/images";
import { useLanguage } from "@/context/LanguageContext";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Radio, Volume2, Sparkles, Sliders, Camera, Eye } from "lucide-react";

export default function BoxMusicFeatureSection() {
  const { t, language } = useLanguage();
  const isOdia = language === "or";
  const [activeView, setActiveView] = useState<"live" | "stage">("live");

  const currentImage =
    activeView === "live"
      ? "/images/services/real-baladev-truck.jpg"
      : IMAGES.services.boxMusic;

  return (
    <section className="relative py-20 sm:py-28 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-brand-gold/30 bg-brand-card shadow-2xl">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-secondary border border-brand-gold/30 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-5">
                <Radio className="w-3.5 h-3.5 text-brand-gold" />
                <span>{t.boxMusicFeature.sectionTag}</span>
              </div>

              <h2
                className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFFFFF] font-serif leading-tight mb-6"
                style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
              >
                {t.boxMusicFeature.heading}
              </h2>

              <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-8">
                {t.boxMusicFeature.description}
              </p>

              {/* Feature Points without invented wattage/specs */}
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-brand-secondary border border-brand-gold/30 text-brand-gold shrink-0">
                    <Volume2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#FFFFFF]">
                      {t.boxMusicFeature.feature1Title}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
                      {t.boxMusicFeature.feature1Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-brand-secondary border border-brand-gold/30 text-brand-gold shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#FFFFFF]">
                      {t.boxMusicFeature.feature2Title}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
                      {t.boxMusicFeature.feature2Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-brand-secondary border border-brand-gold/30 text-brand-gold shrink-0">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#FFFFFF]">
                      {t.boxMusicFeature.feature3Title}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
                      {t.boxMusicFeature.feature3Desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <WhatsAppButton
                  serviceName="Box Music & DJ Sound"
                  variant="primary"
                  className="px-8 py-3.5 text-sm sm:text-base font-bold"
                >
                  {t.boxMusicFeature.bookBoxBtn}
                </WhatsAppButton>
              </div>
            </div>

            {/* Right Large Image Showcase with Interactive Toggle */}
            <div className="lg:col-span-6 relative h-96 lg:h-full min-h-[480px] w-full flex flex-col justify-between">
              {/* Image Toggle Buttons */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-brand-black/90 p-1.5 rounded-full border border-brand-gold/30 backdrop-blur-md shadow-xl">
                <button
                  type="button"
                  onClick={() => setActiveView("live")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    activeView === "live"
                      ? "bg-gradient-to-r from-brand-gold-bright to-brand-gold text-brand-black shadow-md"
                      : "text-brand-muted hover:text-[#FFFFFF]"
                  }`}
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>{isOdia ? "ପ୍ରତ୍ୟକ୍ଷ ଲାଇଭ୍ ସେଟଅପ୍" : "Live Sound Truck (ଶ୍ରୀ BALADEV)"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveView("stage")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    activeView === "stage"
                      ? "bg-gradient-to-r from-brand-gold-bright to-brand-gold text-brand-black shadow-md"
                      : "text-brand-muted hover:text-[#FFFFFF]"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isOdia ? "ନାଇଟ୍ ଷ୍ଟେଜ୍ ଭ୍ୟୁ" : "Night Roadshow"}</span>
                </button>
              </div>

              <Image
                src={currentImage}
                alt="Shree Baldev Musical DJ Box Music sound system"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`transition-all duration-700 ${
                  activeView === "live" ? "object-contain bg-brand-black" : "object-cover"
                }`}
              />
              <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-brand-card via-transparent to-transparent lg:from-brand-card lg:via-transparent pointer-events-none" />

              {/* Authentic Signboard Badge */}
              <div className="absolute bottom-6 right-6 p-3.5 sm:p-4 rounded-2xl bg-brand-black/95 border border-brand-gold/40 shadow-2xl backdrop-blur-md z-10">
                <span className="text-[10px] sm:text-xs font-semibold text-brand-gold tracking-widest uppercase block">
                  {isOdia ? "ଅଫିସିଆଲ୍ ସିଗ୍ନେଚର ସାଉଣ୍ଡ ବୋର୍ଡ" : "Official Signature Board"}
                </span>
                <span className="text-sm sm:text-base font-bold text-[#FFFFFF] font-mono block">
                  ଶ୍ରୀ BALADEV • 9337177106
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
