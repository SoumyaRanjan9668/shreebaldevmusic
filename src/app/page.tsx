import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BoxMusicFeatureSection from "@/components/sections/BoxMusicFeatureSection";
import BandBajaFeatureSection from "@/components/sections/BandBajaFeatureSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import GallerySection from "@/components/sections/GallerySection";
import VideoShowcaseSection from "@/components/sections/VideoShowcaseSection";
import BookingCtaSection from "@/components/sections/BookingCtaSection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070605] text-[#FFFFFF] relative selection:bg-[#D9B56B] selection:text-[#070605]">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Grid (8 Services) */}
      <ServicesSection />

      {/* Box Music Feature */}
      <BoxMusicFeatureSection />

      {/* Band Baja Feature */}
      <BandBajaFeatureSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Filterable Masonry Lightbox Gallery */}
      <GallerySection />

      {/* Video Showcase Section */}
      <VideoShowcaseSection />

      {/* Booking Call-To-Action */}
      <BookingCtaSection />

      {/* Contact & Location with Interactive WhatsApp Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Fixed WhatsApp Action Floating Pill */}
      <FloatingWhatsApp />
    </main>
  );
}
