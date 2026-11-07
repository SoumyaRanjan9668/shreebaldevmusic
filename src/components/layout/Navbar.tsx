"use client";

import React, { useState, useEffect } from "react";
import BrandLogo from "@/components/common/BrandLogo";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { BUSINESS_CONFIG } from "@/config/business";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/whatsapp";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070605]/95 backdrop-blur-md border-b border-[#D9B56B]/20 py-3 shadow-2xl"
          : "bg-gradient-to-b from-[#070605]/90 via-[#070605]/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <BrandLogo variant="navbar" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#B9B3A7] hover:text-[#F0D693] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D9B56B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />

            <a
              href={getPhoneUrl()}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#D9B56B] rounded-full border border-[#D9B56B]/30 hover:border-[#F0D693] hover:text-[#FFFFFF] transition-all"
              aria-label={`Call ${BUSINESS_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient-btn inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{t.nav.bookWhatsapp}</span>
            </a>
          </div>

          {/* Mobile Right Controls: Language Switcher + Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#F0D693] bg-[#17130D] border border-[#D9B56B]/30 hover:bg-[#221C13] focus:outline-none focus:ring-2 focus:ring-[#D9B56B]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070605]/98 backdrop-blur-xl border-b border-[#D9B56B]/25 px-5 pt-4 pb-6 mt-2 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-base font-medium text-[#B9B3A7] hover:text-[#F0D693] hover:bg-[#17130D] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[#D9B56B]/20 flex flex-col gap-3">
              <a
                href={getPhoneUrl()}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-[#D9B56B] bg-[#17130D] border border-[#D9B56B]/40"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="gold-gradient-btn flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.nav.bookWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
