import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/config/images";
import { Home, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070605] text-[#FFFFFF] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D9B56B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        <div className="relative w-20 h-20 mb-6 rounded-full border border-[#D9B56B]/40 p-2 bg-[#17130D]">
          <Image
            src={IMAGES.brand.logoIcon}
            alt="Shree Baldev Musical"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>

        <span className="text-xs font-semibold tracking-widest text-[#D9B56B] uppercase mb-2">
          Page Not Found • ୪୦୪
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4 text-[#FFFFFF]">
          404 - Lost in the Rhythm
        </h1>

        <p className="text-sm sm:text-base text-[#B9B3A7] leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved. Return to the main page to explore our Band Baja and Box Music services.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            href="/"
            className="gold-gradient-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-xl w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-outline-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Contact on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
