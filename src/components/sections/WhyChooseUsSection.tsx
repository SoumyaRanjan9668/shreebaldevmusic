"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Users, Music, Radio, Calendar, MapPin, PhoneCall, Shield } from "lucide-react";

export default function WhyChooseUsSection() {
  const { t, language } = useLanguage();
  const isOdia = language === "or";

  const icons = [Users, Music, Radio, Calendar, MapPin, PhoneCall];

  return (
    <section className="relative py-20 sm:py-28 bg-[#070605] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17130D] border border-[#D9B56B]/30 text-[#D9B56B] text-xs font-semibold tracking-wider uppercase mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>{t.whyChooseUs.sectionTag}</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFFFFF] font-serif leading-tight mb-6"
            style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
          >
            {t.whyChooseUs.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#B9B3A7] leading-relaxed">
            {t.whyChooseUs.subheading}
          </p>
        </div>

        {/* 6 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.whyChooseUs.points.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-[#17130D] border border-[#D9B56B]/20 hover:border-[#F0D693]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(217,181,107,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#100E0A] border border-[#D9B56B]/30 flex items-center justify-center text-[#D9B56B] group-hover:text-[#F0D693] group-hover:border-[#F0D693] transition-colors mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3
                    className="text-lg sm:text-xl font-bold text-[#FFFFFF] group-hover:text-[#F0D693] transition-colors font-serif mb-3"
                    style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
                  >
                    {point.title}
                  </h3>

                  <p className="text-sm text-[#B9B3A7] leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D9B56B]/10 flex items-center justify-between text-xs font-semibold text-[#D9B56B]">
                  <span>Verified Business Capability</span>
                  <span className="text-[#B9B3A7] font-mono">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
