"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GALLERY_ITEMS, GalleryCategory, GalleryItem } from "@/data/gallery";
import { useLanguage } from "@/context/LanguageContext";
import { Images, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function GallerySection() {
  const { t, language } = useLanguage();
  const isOdia = language === "or";

  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : (prev as number) - 1
    );
  }, [selectedImageIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : (prev as number) + 1
    );
  }, [selectedImageIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handleClose, handlePrev, handleNext]);

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: "all", label: t.gallery.categories.all },
    { key: "baraat", label: t.gallery.categories.baraat },
    { key: "band-baja", label: t.gallery.categories.bandBaja },
    { key: "box-music", label: t.gallery.categories.boxMusic },
    { key: "celebrations", label: t.gallery.categories.celebrations },
    { key: "equipment", label: t.gallery.categories.equipment },
  ];

  const currentModalItem: GalleryItem | undefined =
    selectedImageIndex !== null ? filteredItems[selectedImageIndex] : undefined;

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-[#100E0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#17130D] border border-[#D9B56B]/30 text-[#D9B56B] text-xs font-semibold tracking-wider uppercase mb-4">
            <Images className="w-3.5 h-3.5" />
            <span>{t.gallery.sectionTag}</span>
          </div>

          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FFFFFF] font-serif leading-tight mb-6"
            style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
          >
            {t.gallery.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#B9B3A7] leading-relaxed">
            {t.gallery.subheading}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setSelectedImageIndex(null);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-[#F0D693] to-[#D9B56B] text-[#070605] shadow-lg scale-105"
                  : "bg-[#17130D] text-[#B9B3A7] border border-[#D9B56B]/25 hover:border-[#D9B56B] hover:text-[#FFFFFF]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const title = isOdia ? item.title.or : item.title.en;
            const categoryLabel = isOdia ? item.categoryLabel.or : item.categoryLabel.en;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer border border-[#D9B56B]/20 bg-[#17130D] shadow-xl hover:border-[#F0D693]/60 transition-all duration-500"
              >
                <Image
                  src={item.src}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-[#070605]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Hover Quick Zoom Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-[#17130D]/80 border border-[#D9B56B]/40 text-[#F0D693] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <span className="text-[11px] font-semibold text-[#D9B56B] uppercase tracking-wider block mb-1">
                    {categoryLabel}
                  </span>
                  <h3
                    className="text-base sm:text-lg font-bold text-[#FFFFFF] group-hover:text-[#F0D693] transition-colors font-serif leading-snug"
                    style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
                  >
                    {title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedImageIndex !== null && currentModalItem && (
        <div
          className="fixed inset-0 z-50 bg-[#070605]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-[#17130D] border border-[#D9B56B]/40 text-[#F0D693] hover:bg-[#221C13] hover:text-[#FFFFFF] transition-all z-20 cursor-pointer shadow-xl"
            aria-label={t.gallery.closeModal}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-[#17130D]/80 border border-[#D9B56B]/40 text-[#F0D693] hover:bg-[#221C13] hover:text-[#FFFFFF] transition-all z-20 cursor-pointer shadow-xl"
            aria-label={t.gallery.prevImage}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-[#17130D]/80 border border-[#D9B56B]/40 text-[#F0D693] hover:bg-[#221C13] hover:text-[#FFFFFF] transition-all z-20 cursor-pointer shadow-xl"
            aria-label={t.gallery.nextImage}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden border border-[#D9B56B]/30 shadow-2xl bg-[#17130D]">
              <Image
                src={currentModalItem.src}
                alt={isOdia ? currentModalItem.title.or : currentModalItem.title.en}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-4 text-center max-w-2xl px-4">
              <span className="text-xs font-semibold text-[#D9B56B] uppercase tracking-widest block mb-1">
                {isOdia ? currentModalItem.categoryLabel.or : currentModalItem.categoryLabel.en} • {selectedImageIndex + 1} / {filteredItems.length}
              </span>
              <h3
                className="text-xl sm:text-2xl font-bold text-[#FFFFFF] font-serif mb-1"
                style={{ fontFamily: isOdia ? "var(--font-odia)" : "var(--font-cinzel)" }}
              >
                {isOdia ? currentModalItem.title.or : currentModalItem.title.en}
              </h3>
              <p className="text-sm text-[#B9B3A7]">
                {isOdia ? currentModalItem.description.or : currentModalItem.description.en}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
