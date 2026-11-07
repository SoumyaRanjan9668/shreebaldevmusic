export interface BusinessInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappUrl: string;
  phoneUrl: string;
  address: {
    village: string;
    panchayatPost: string;
    district: string;
    state: string;
    country: string;
    full: string;
  };
  mapsUrl: string;
  teamStrength: number;
  businessTypes: string[];
  languages: string[];
}

export const BUSINESS_CONFIG: BusinessInfo = {
  name: "SHREE BALDEV MUSICAL",
  tagline: "BAND BAJA • BOX MUSIC",
  phone: "9337177106",
  phoneDisplay: "+91 9337177106",
  whatsapp: "919337177106",
  whatsappDisplay: "+91 9337177106",
  whatsappUrl: "https://wa.me/919337177106",
  phoneUrl: "tel:+919337177106",
  address: {
    village: "Naraanpur",
    panchayatPost: "Angulai",
    district: "Kendrapara",
    state: "Odisha",
    country: "India",
    full: "Naraanpur, Angulai, Kendrapara, Odisha, India"
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Naraanpur,+Angulai,+Kendrapara,+Odisha,+India",
  teamStrength: 20,
  businessTypes: [
    "Traditional Band Baja",
    "Box Music",
    "DJ Sound System",
    "Wedding Baraat",
    "Event Music Services"
  ],
  languages: ["English", "Odia"]
};
