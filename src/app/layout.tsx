/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { BUSINESS_CONFIG } from "@/config/business";

export const viewport: Viewport = {
  themeColor: "#070605",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shreebaldevmusical.in"),
  title: {
    default: "SHREE BALDEV MUSICAL | Traditional Band Baja & Box Music | Kendrapara, Odisha",
    template: "%s | SHREE BALDEV MUSICAL",
  },
  description:
    "SHREE BALDEV MUSICAL provides premier Traditional Band Baja, high-power Box Music & DJ sound systems, and wedding Baraat entertainment in Naraanpur, Angulai, Kendrapara, Odisha. Call / WhatsApp 9337177106.",
  keywords: [
    "Shree Baldev Musical",
    "Band Baja Kendrapara",
    "Box Music Odisha",
    "DJ Sound Kendrapara",
    "Wedding Baraat Odisha",
    "Angulai Kendrapara Band",
    "Naraanpur Band Baja",
    "Odisha Wedding Music",
    "Traditional Brass Band Odisha",
  ],
  authors: [{ name: "SHREE BALDEV MUSICAL" }],
  creator: "SHREE BALDEV MUSICAL",
  publisher: "SHREE BALDEV MUSICAL",
  icons: {
    icon: [
      { url: "/images/brand/favicon.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/brand/favicon.png",
    apple: "/images/brand/logo-icon.png",
  },
  openGraph: {
    title: "SHREE BALDEV MUSICAL | Band Baja & Box Music | Kendrapara",
    description:
      "Traditional Band Baja. Powerful Box Music. Unforgettable Celebrations. Serving Naraanpur, Angulai, Kendrapara and across Odisha.",
    url: "https://shreebaldevmusical.in",
    siteName: "SHREE BALDEV MUSICAL",
    images: [
      {
        url: "/images/hero/hero-baraat.jpg",
        width: 1200,
        height: 675,
        alt: "SHREE BALDEV MUSICAL Baraat Celebration",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHREE BALDEV MUSICAL | Kendrapara, Odisha",
    description: "Traditional Band Baja & High-Power Box Music for Weddings and Celebrations.",
    images: ["/images/hero/hero-baraat.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: BUSINESS_CONFIG.name,
    alternateName: "ଶ୍ରୀ ବଳଦେବ ମ୍ୟୁଜିକାଲ",
    description:
      "Traditional Band Baja and heavy bass Box Music sound services for wedding Baraat, reception parties, and village celebrations.",
    telephone: "+91-9337177106",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS_CONFIG.address.village}, ${BUSINESS_CONFIG.address.panchayatPost}`,
      addressLocality: BUSINESS_CONFIG.address.district,
      addressRegion: BUSINESS_CONFIG.address.state,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.501,
      longitude: 86.422,
    },
    areaServed: ["Kendrapara", "Angulai", "Naraanpur", "Odisha"],
    image: "https://shreebaldevmusical.in/images/brand/logo-primary.png",
    priceRange: "$$",
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Noto+Sans+Oriya:wght@400;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#070605] text-[#FFFFFF] antialiased selection:bg-[#D9B56B] selection:text-[#070605]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
