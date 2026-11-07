"use client";

import React, { useState } from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl, getPhoneUrl, getMapsUrl } from "@/lib/whatsapp";
import { Phone, MessageCircle, MapPin, Send, ExternalLink, Calendar, User, FileText } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";

export default function ContactSection() {
  const { t, language } = useLanguage();
  const isOdia = language === "or";

  const [formName, setFormName] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formService, setFormService] = useState("");
  const [formNotes, setFormNotes] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = [
      formName ? `Name: ${formName}` : "",
      formDate ? `Event Date: ${formDate}` : "",
      formNotes ? `Details: ${formNotes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const targetUrl = getWhatsAppUrl(formService || undefined, details);
    window.open(targetUrl, "_blank");
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#100E0A] overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#D9B56B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17130D] border border-[#D9B56B]/30 text-[#D9B56B] text-xs font-semibold tracking-wider uppercase mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>{t.contact.sectionTag}</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFFFFF] font-serif leading-tight mb-6"
            style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
          >
            {t.contact.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#B9B3A7] leading-relaxed">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Info & Maps */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Business Info Card */}
            <div className="p-8 rounded-3xl bg-[#17130D] border border-[#D9B56B]/25 shadow-xl">
              <span className="text-xs font-semibold tracking-widest text-[#D9B56B] uppercase block mb-1">
                {isOdia ? "ସିଧାସଳଖ ଯୋଗାଯୋଗ" : "Direct Official Contact"}
              </span>

              <h3
                className="text-2xl font-bold text-[#FFFFFF] font-serif mb-6"
                style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
              >
                {isOdia ? "ଶ୍ରୀ ବଳଦେବ ମ୍ୟୁଜିକାଲ" : BUSINESS_CONFIG.name}
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#100E0A] border border-[#D9B56B]/30 text-[#D9B56B] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B9B3A7] uppercase tracking-wider block">
                      {t.contact.phoneLabel}
                    </span>
                    <a
                      href={getPhoneUrl()}
                      className="text-lg font-bold text-[#FFFFFF] hover:text-[#F0D693] transition-colors mt-0.5 block"
                    >
                      {BUSINESS_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#100E0A] border border-[#D9B56B]/30 text-[#25D366] flex-shrink-0">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B9B3A7] uppercase tracking-wider block">
                      {t.contact.whatsappLabel}
                    </span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-[#FFFFFF] hover:text-[#F0D693] transition-colors mt-0.5 block"
                    >
                      {BUSINESS_CONFIG.whatsappDisplay}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#100E0A] border border-[#D9B56B]/30 text-[#D9B56B] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#B9B3A7] uppercase tracking-wider block">
                      {t.contact.locationLabel}
                    </span>
                    <p className="text-sm font-medium text-[#FFFFFF] mt-0.5 leading-snug">
                      {t.contact.addressText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Button */}
              <div className="mt-8 pt-6 border-t border-[#D9B56B]/20">
                <a
                  href={getMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-outline-btn w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold"
                >
                  <MapPin className="w-4 h-4 text-[#D9B56B]" />
                  <span>{t.contact.mapsButton}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="p-6 rounded-2xl bg-[#17130D] border border-[#D9B56B]/20">
              <span className="text-xs font-semibold text-[#D9B56B] uppercase tracking-wider block mb-2">
                {isOdia ? "ସେବା ପ୍ରଦାନ ଅଞ୍ଚଳ" : "Service Region"}
              </span>
              <p className="text-xs sm:text-sm text-[#B9B3A7] leading-relaxed">
                {isOdia
                  ? "ନାରାୟଣପୁର, ଅଙ୍ଗୁଳାଇ, କେନ୍ଦ୍ରାପଡ଼ା, ଡେରାବିଶ, ପଟ୍ଟାମୁଣ୍ଡାଇ, ଆଳି, ରାଜନଗର ତଥା ସମଗ୍ର ଓଡ଼ିଶାରେ କାର୍ଯ୍ୟକ୍ରମ ବୁକିଂ ଉପଲବ୍ଧ।"
                  : "Serving Kendrapara, Derabish, Pattamundai, Aali, Rajnagar, and event venues across Odisha."}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Quick Enquiry WhatsApp Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#17130D] border border-[#D9B56B]/25 shadow-xl">
              <div className="mb-6">
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#F0D693] font-serif mb-2"
                  style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
                >
                  {t.contact.quickEnquiryTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#B9B3A7]">
                  {t.contact.quickEnquiryDesc}
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#B9B3A7] mb-2">
                    <User className="w-3.5 h-3.5 inline mr-1.5 text-[#D9B56B]" />
                    {isOdia ? "ଆପଣଙ୍କ ନାମ" : "Your Name"}
                  </label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder={t.contact.namePlaceholder}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#100E0A] border border-[#D9B56B]/25 text-[#FFFFFF] placeholder-[#665F55] text-sm focus:outline-none focus:border-[#F0D693] focus:ring-1 focus:ring-[#F0D693] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Event Date */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#B9B3A7] mb-2">
                      <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-[#D9B56B]" />
                      {isOdia ? "କାର୍ଯ୍ୟକ୍ରମ ତାରିଖ" : "Event Date"}
                    </label>
                    <input
                      type="text"
                      value={formDate}
                      onChange={(e) => setFormDate(e.target.value)}
                      placeholder={t.contact.datePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#100E0A] border border-[#D9B56B]/25 text-[#FFFFFF] placeholder-[#665F55] text-sm focus:outline-none focus:border-[#F0D693] focus:ring-1 focus:ring-[#F0D693] transition-all"
                    />
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#B9B3A7] mb-2">
                      <FileText className="w-3.5 h-3.5 inline mr-1.5 text-[#D9B56B]" />
                      {isOdia ? "ସେବା ବାଛନ୍ତୁ" : "Service Needed"}
                    </label>
                    <select
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#100E0A] border border-[#D9B56B]/25 text-[#FFFFFF] text-sm focus:outline-none focus:border-[#F0D693] focus:ring-1 focus:ring-[#F0D693] transition-all"
                    >
                      <option value="">{t.contact.serviceSelectPlaceholder}</option>
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title.en} className="bg-[#17130D]">
                          {isOdia ? srv.title.or : srv.title.en}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Notes / Location */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#B9B3A7] mb-2">
                    <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-[#D9B56B]" />
                    {isOdia ? "ସ୍ଥାନ କିମ୍ବା ବିଶେଷ ଆବଶ୍ୟକତା" : "Location or Special Notes"}
                  </label>
                  <textarea
                    rows={3}
                    value={formNotes}
                    onChange={(e) => setFormNotes(e.target.value)}
                    placeholder={t.contact.notesPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#100E0A] border border-[#D9B56B]/25 text-[#FFFFFF] placeholder-[#665F55] text-sm focus:outline-none focus:border-[#F0D693] focus:ring-1 focus:ring-[#F0D693] transition-all resize-none"
                  />
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="gold-gradient-btn w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-sm sm:text-base font-bold shadow-xl cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.sendWhatsappBtn}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
