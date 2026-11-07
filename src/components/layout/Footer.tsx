"use client";

import React from "react";
import BrandLogo from "@/components/common/BrandLogo";
import { BUSINESS_CONFIG } from "@/config/business";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl, getPhoneUrl, getMapsUrl } from "@/lib/whatsapp";
import { SERVICES_DATA } from "@/data/services";
import { Phone, MessageCircle, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const { t, language } = useLanguage();
  const isOdia = language === "or";

  const quickLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative bg-[#070605] border-t border-[#D9B56B]/25 pt-16 pb-12 overflow-hidden">
      {/* Top subtle golden accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D9B56B]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <BrandLogo variant="footer" className="mb-4" />

            <p className="text-sm text-[#B9B3A7] leading-relaxed max-w-sm mb-6">
              {t.footer.brandDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>{t.nav.bookWhatsapp}</span>
              </a>

              <a
                href={getPhoneUrl()}
                className="gold-outline-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2">
            <h4
              className="text-sm font-bold text-[#F0D693] tracking-wider uppercase font-serif mb-4"
              style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
            >
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-[#B9B3A7]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#F0D693] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-2">
            <h4
              className="text-sm font-bold text-[#F0D693] tracking-wider uppercase font-serif mb-4"
              style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
            >
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs text-[#B9B3A7]">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-[#F0D693] transition-colors line-clamp-1"
                  >
                    {isOdia ? service.title.or : service.title.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact Col */}
          <div className="lg:col-span-3">
            <h4
              className="text-sm font-bold text-[#F0D693] tracking-wider uppercase font-serif mb-4"
              style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
            >
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#B9B3A7]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9B56B] flex-shrink-0 mt-0.5" />
                <a
                  href={getMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors"
                >
                  {t.footer.address}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D9B56B] flex-shrink-0" />
                <a
                  href={getPhoneUrl()}
                  className="hover:text-[#FFFFFF] transition-colors font-medium"
                >
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFFFFF] transition-colors font-medium"
                >
                  WhatsApp: {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year and Attribution */}
        <div className="pt-8 mt-8 border-t border-[#D9B56B]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B9B3A7]">
          <p>
            © 2026 {BUSINESS_CONFIG.name}. {t.footer.rights}
          </p>

          <p className="flex items-center gap-1.5 text-[11px] text-[#D9B56B]">
            <span>Crafted with pride for Odisha&apos;s rich musical heritage</span>
            <Heart className="w-3 h-3 text-[#D9B56B] fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
}
