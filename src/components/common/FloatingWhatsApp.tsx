"use client";

import React, { useState, useEffect } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const tooltipText =
    language === "or"
      ? "ବୁକିଂ ପାଇଁ ହ୍ୱାଟ୍ସଆପ୍ କରନ୍ତୁ"
      : "Chat on WhatsApp for Bookings";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {showTooltip && (
        <div className="relative hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-xl bg-[#17130D] border border-[#D9B56B]/30 shadow-2xl text-xs font-medium text-[#F0D693] animate-fade-in">
          <span>{tooltipText}</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#B9B3A7] hover:text-[#FFFFFF] p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Chat with Shree Baldev Musical on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F0D693] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#D9B56B]"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
