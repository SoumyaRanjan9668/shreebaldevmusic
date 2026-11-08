export interface ImageConfig {
  brand: {
    logoPrimary: string;
    logoIcon: string;
    logoTransparent: string;
    logoLight: string;
    logoEmblem: string;
    favicon: string;
  };
  hero: {
    heroBaraat: string;
  };
  services: {
    weddingBaraat: string;
    bandBaja: string;
    boxMusic: string;
    reception: string;
    birthday: string;
    festival: string;
    religious: string;
    soundEquipment: string;
    bandTeam: string;
    realTruck?: string;
  };
  gallery: {
    src: string;
    alt: string;
    category: "band-baja" | "box-music" | "baraat" | "celebrations" | "equipment";
  }[];
}

export const IMAGES: ImageConfig = {
  brand: {
    logoPrimary: "/images/brand/logo.png",
    logoIcon: "/images/brand/logo.png",
    logoTransparent: "/images/brand/logo.png",
    logoLight: "/images/brand/logo-light.png",
    logoEmblem: "/images/brand/logo-emblem.png",
    favicon: "/images/brand/logo.png",
  },
  hero: {
    heroBaraat: "/images/hero/hero-baraat.jpg",
  },
  services: {
    weddingBaraat: "/images/services/wedding-baraat.jpg",
    bandBaja: "/images/services/band-baja.jpg",
    boxMusic: "/images/services/box-music.jpg",
    reception: "/images/services/reception.jpg",
    birthday: "/images/services/birthday.jpg",
    festival: "/images/services/festival.jpg",
    religious: "/images/services/religious-event.jpg",
    soundEquipment: "/images/services/sound-equipment.jpg",
    bandTeam: "/images/services/band-team.jpg",
    realTruck: "/images/services/real-baladev-truck.jpg",
  },
  gallery: [
    {
      src: "/images/gallery/hero-baraat.jpg",
      alt: "Indian wedding Baraat with DJ sound truck and brass band at night",
      category: "baraat",
    },
    {
      src: "/images/gallery/box-music.jpg",
      alt: "Large high-power DJ Box Music sound system with LED lighting",
      category: "box-music",
    },
    {
      src: "/images/gallery/band-baja.jpg",
      alt: "Traditional Indian brass band musicians in ceremonial pagri uniforms",
      category: "band-baja",
    },
    {
      src: "/images/gallery/wedding-baraat.jpg",
      alt: "Grand wedding Baraat procession with joyous dancers and celebration sparklers",
      category: "baraat",
    },
    {
      src: "/images/gallery/band-team.jpg",
      alt: "Shree Baldev Musical 20-member brass band performance group ensemble",
      category: "band-baja",
    },
    {
      src: "/images/gallery/reception.jpg",
      alt: "Elegant wedding reception night celebration with luxury stage lighting",
      category: "celebrations",
    },
    {
      src: "/images/gallery/birthday.jpg",
      alt: "Festive birthday party celebration with high-energy party music system",
      category: "celebrations",
    },
    {
      src: "/images/gallery/festival.jpg",
      alt: "Vibrant village cultural festival gathering with live celebration music",
      category: "celebrations",
    },
    {
      src: "/images/gallery/religious-event.jpg",
      alt: "Traditional Indian devotional puja and spiritual gathering with sacred music",
      category: "celebrations",
    },
    {
      src: "/images/gallery/sound-equipment.jpg",
      alt: "Professional audio amplifiers, mixers, and heavy-duty speaker drivers",
      category: "equipment",
    },
  ],
};
