"use client";

import React from "react";
import Image from "next/image";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function ServicesSection() {
  const { t, language } = useLanguage();
  const isOdia = language === "or";

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#100E0A] overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#D9B56B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#F0D693]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17130D] border border-[#D9B56B]/30 text-[#D9B56B] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.services.sectionTag}</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFFFFF] font-serif leading-tight mb-6"
            style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
          >
            {t.services.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#B9B3A7] leading-relaxed">
            {t.services.subheading}
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const serviceTitle = isOdia ? service.title.or : service.title.en;
            const serviceDesc = isOdia ? service.shortDescription.or : service.shortDescription.en;
            const highlights = isOdia ? service.highlights.or : service.highlights.en;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col rounded-2xl bg-[#17130D] border border-[#D9B56B]/20 overflow-hidden transition-all duration-300 hover:border-[#F0D693]/50 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(217,181,107,0.15)]"
              >
                {/* Service Card Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={serviceTitle}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17130D] via-[#17130D]/30 to-transparent" />
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-grow p-6">
                  <h3
                    className="text-lg sm:text-xl font-bold text-[#FFFFFF] group-hover:text-[#F0D693] transition-colors font-serif mb-2.5"
                    style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
                  >
                    {serviceTitle}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B9B3A7] leading-relaxed mb-4 flex-grow">
                    {serviceDesc}
                  </p>

                  {/* Highlights Bullet Tags */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-[#D9B56B]/15">
                    {highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#B9B3A7]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D9B56B] flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp Action Button with service pre-selected */}
                  <div className="pt-2">
                    <WhatsAppButton
                      serviceName={service.title.en}
                      variant="outline"
                      className="w-full text-xs sm:text-sm py-2.5"
                    >
                      {t.services.enquireBtn}
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
