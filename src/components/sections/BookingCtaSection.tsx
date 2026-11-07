"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "@/config/images";
import { BUSINESS_CONFIG } from "@/config/business";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/whatsapp";
import { MessageCircle, Phone, Sparkles, CheckCircle2 } from "lucide-react";

export default function BookingCtaSection() {
  const { t, language } = useLanguage();
  const isOdia = language === "or";

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#070605]">
      {/* Background Cinematic Celebration Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.services.weddingBaraat}
          alt="Indian celebration atmosphere"
          fill
          sizes="100vw"
          className="object-cover object-center transform scale-105"
        />
        {/* Dark Vignettes */}
        <div className="absolute inset-0 bg-[#070605]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-transparent to-[#070605]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17130D]/90 border border-[#D9B56B]/40 text-[#F0D693] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#D9B56B]" />
          <span>{isOdia ? "ତାରିଖ ନିଶ୍ଚିତ କରନ୍ତୁ" : "RESERVE YOUR EVENT DATE"}</span>
        </div>

        {/* Main Heading */}
        <h2
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FFFFFF] font-serif leading-tight max-w-4xl mb-6"
          style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
        >
          {isOdia ? (
            <span>
              ଆପଣଙ୍କ ଉତ୍ସବ ପାଇଁ{" "}
              <span className="gold-gradient-text block mt-1">ଶ୍ରେଷ୍ଠ ସଙ୍ଗୀତ ହିଁ ଯୋଗ୍ୟ।</span>
            </span>
          ) : (
            <span>
              YOUR CELEBRATION{" "}
              <span className="gold-gradient-text block mt-2">DESERVES GREAT MUSIC.</span>
            </span>
          )}
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-xl text-[#B9B3A7] max-w-2xl mb-10 leading-relaxed font-light">
          {t.bookingCta.subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold shadow-2xl"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{t.bookingCta.whatsappBtn}</span>
          </a>

          <a
            href={getPhoneUrl()}
            className="gold-outline-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold"
          >
            <Phone className="w-5 h-5" />
            <span>
              {t.bookingCta.callBtn}: {BUSINESS_CONFIG.phoneDisplay}
            </span>
          </a>
        </div>

        {/* Direct contact reassurance */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#F0D693]">
          <CheckCircle2 className="w-4 h-4 text-[#D9B56B]" />
          <span>{t.bookingCta.instantResponse}</span>
        </div>
      </div>
    </section>
  );
}
