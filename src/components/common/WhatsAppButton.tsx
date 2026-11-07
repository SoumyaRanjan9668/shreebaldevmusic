"use client";

import React from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  serviceName?: string;
  customText?: string;
  className?: string;
  variant?: "primary" | "outline" | "compact";
  children?: React.ReactNode;
}

export default function WhatsAppButton({
  serviceName,
  customText,
  className = "",
  variant = "primary",
  children,
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(serviceName, customText);

  const baseStyle =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full cursor-pointer";

  const variants = {
    primary:
      "gold-gradient-btn px-6 py-3 text-sm sm:text-base font-semibold shadow-lg",
    outline:
      "gold-outline-btn px-6 py-3 text-sm sm:text-base font-semibold",
    compact:
      "px-3.5 py-1.5 text-xs font-semibold bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366] hover:text-[#070605]",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyle} ${variants[variant]} ${className}`}
      aria-label={`Enquire via WhatsApp${serviceName ? ` for ${serviceName}` : ""}`}
    >
      <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
      <span>{children || "WhatsApp Enquiry"}</span>
    </a>
  );
}
