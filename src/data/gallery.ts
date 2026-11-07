import { IMAGES } from "@/config/images";

export type GalleryCategory = "all" | "band-baja" | "box-music" | "baraat" | "celebrations" | "equipment";

export interface GalleryItem {
  id: string;
  src: string;
  title: {
    en: string;
    or: string;
  };
  category: GalleryCategory;
  categoryLabel: {
    en: string;
    or: string;
  };
  description: {
    en: string;
    or: string;
  };
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: IMAGES.services.weddingBaraat,
    title: {
      en: "Royal Baraat Procession",
      or: "ଭବ୍ୟ ବରଯାତ୍ରୀ ଶୋଭାଯାତ୍ରା",
    },
    category: "baraat",
    categoryLabel: {
      en: "Baraat",
      or: "ବରଯାତ୍ରୀ",
    },
    description: {
      en: "Joyous wedding Baraat with celebration sparklers, lanterns, and brass band music.",
      or: "ଆଲୋକମାଳା ଓ ବ୍ୟାଣ୍ଡ ବାଜା ସହ ଆନନ୍ଦୋଲ୍ଲାସରେ ବରଯାତ୍ରୀ ପରିକ୍ରମା।",
    },
  },
  {
    id: "g2",
    src: IMAGES.hero.heroBaraat,
    title: {
      en: "Night Baraat & Sound Truck",
      or: "ନାଇଟ୍ ବରଯାତ୍ରୀ ଓ ସାଉଣ୍ଡ ଟ୍ରକ୍",
    },
    category: "baraat",
    categoryLabel: {
      en: "Baraat",
      or: "ବରଯାତ୍ରୀ",
    },
    description: {
      en: "Mobile DJ sound system and traditional brass musicians in an evening village wedding.",
      or: "ରାତ୍ରିକାଳୀନ ବିବାହ ଉତ୍ସବରେ ମୋବାଇଲ ସାଉଣ୍ଡ ଓ ବ୍ୟାଣ୍ଡ ବାଦକ।",
    },
  },
  {
    id: "g3",
    src: IMAGES.services.boxMusic,
    title: {
      en: "Stacked Box Music Setup",
      or: "ପାୱାରଫୁଲ ବକ୍ସ ମ୍ୟୁଜିକ ସେଟଅପ୍",
    },
    category: "box-music",
    categoryLabel: {
      en: "Box Music",
      or: "ବକ୍ସ ମ୍ୟୁଜିକ",
    },
    description: {
      en: "Multi-tier high power speaker cabinets and neon lighting for village events.",
      or: "ଉଚ୍ଚ କ୍ଷମତାସମ୍ପନ୍ନ ସ୍ପିକର ଓ ଏଲଇଡି ଲାଇଟ୍ ସହ ଆକର୍ଷଣୀୟ ସାଉଣ୍ଡ ସିଷ୍ଟମ।",
    },
  },
  {
    id: "g3-real",
    src: "/images/services/real-baladev-truck.jpg",
    title: {
      en: "Live Sound Truck — ଶ୍ରୀ BALADEV (Mob: 9337177106)",
      or: "ପ୍ରତ୍ୟକ୍ଷ ସାଉଣ୍ଡ ଟ୍ରକ୍ — ଶ୍ରୀ BALADEV (ମୋ: ୯୩୩୭୧୭୭୧୦୬)",
    },
    category: "box-music",
    categoryLabel: {
      en: "Live Setup",
      or: "ଲାଇଭ ସେଟଅପ୍",
    },
    description: {
      en: "Authentic live performance photo of Shree Baladev sound truck with signature LED board.",
      or: "ଶ୍ରୀ ବଳଦେବ ସାଉଣ୍ଡ ଟ୍ରକର ପ୍ରତ୍ୟକ୍ଷ କାର୍ଯ୍ୟକ୍ରମ ଏବଂ ସିଗ୍ନେଚର ଏଲଇଡି ବୋର୍ଡ।",
    },
  },
  {
    id: "g4",
    src: IMAGES.services.bandBaja,
    title: {
      en: "Traditional Brass Musicians",
      or: "ପାରମ୍ପରିକ ବ୍ରାସ ବ୍ୟାଣ୍ଡ କଳାକାର",
    },
    category: "band-baja",
    categoryLabel: {
      en: "Band Baja",
      or: "ବ୍ୟାଣ୍ଡ ବାଜା",
    },
    description: {
      en: "Musicians playing shiny brass trumpets and dhol drums in ceremonial pagri uniforms.",
      or: "ପାରମ୍ପରିକ ପଗଡ଼ି ଓ ସୁନ୍ଦର ପୋଷାକରେ ସୁମଧୁର ବ୍ରାସ ବାଜା ପରିବେଷଣ।",
    },
  },
  {
    id: "g5",
    src: IMAGES.services.bandTeam,
    title: {
      en: "20-Member Musical Ensemble",
      or: "୨୦ ଜଣିଆ ସଙ୍ଗୀତ ଦଳ",
    },
    category: "band-baja",
    categoryLabel: {
      en: "Band Baja",
      or: "ବ୍ୟାଣ୍ଡ ବାଜା",
    },
    description: {
      en: "The unified Shree Baldev Musical troupe ready for wedding celebrations.",
      or: "ଶ୍ରୀ ବଳଦେବ ମ୍ୟୁଜିକାଲର ଅଭିଜ୍ଞ ସଦସ୍ୟମାନଙ୍କ ସାମୂହିକ ଉପସ୍ଥିତି।",
    },
  },
  {
    id: "g6",
    src: IMAGES.services.reception,
    title: {
      en: "Evening Reception Stage",
      or: "ସନ୍ଧ୍ୟା ରିସେପ୍ସନ ମ୍ୟୁଜିକ ଷ୍ଟେଜ",
    },
    category: "celebrations",
    categoryLabel: {
      en: "Celebrations",
      or: "ଉତ୍ସବ",
    },
    description: {
      en: "Chandelier and fairy light ambience for evening wedding reception entertainment.",
      or: "ମନୋରମ ଆଲୋକ ଓ ସଙ୍ଗୀତରେ ସଜ୍ଜିତ ବିବାହ ଭୋଜିର ମଞ୍ଚ।",
    },
  },
  {
    id: "g7",
    src: IMAGES.services.festival,
    title: {
      en: "Village Festival Gathering",
      or: "ଗ୍ରାମ୍ୟ ଯାତ୍ରା ମହୋତ୍ସବ",
    },
    category: "celebrations",
    categoryLabel: {
      en: "Celebrations",
      or: "ଉତ୍ସବ",
    },
    description: {
      en: "Vibrant community celebrations with rhythmic beats and colorful festive flags.",
      or: "ଗ୍ରାମାଞ୍ଚଳରେ ପାରମ୍ପରିକ ମେଳା ଓ ପର୍ବର ଉତ୍ସାହପୂର୍ଣ୍ଣ ସଙ୍ଗୀତ।",
    },
  },
  {
    id: "g8",
    src: IMAGES.services.religious,
    title: {
      en: "Devotional & Temple Ceremonies",
      or: "ଭକ୍ତି ସଙ୍ଗୀତ ଓ ମନ୍ଦିର ଉତ୍ସବ",
    },
    category: "celebrations",
    categoryLabel: {
      en: "Celebrations",
      or: "ଉତ୍ସବ",
    },
    description: {
      en: "Spiritual rhythms with shehnai and cymbals amidst glowing temple oil lamps.",
      or: "ଦୀପାଳୋକ ଓ ସୁଗନ୍ଧିତ ଧୂପ ମଧ୍ୟରେ ପବିତ୍ର ଭକ୍ତି ସଙ୍ଗୀତର ଆବହ।",
    },
  },
  {
    id: "g9",
    src: IMAGES.services.birthday,
    title: {
      en: "Birthday Celebration Party",
      or: "ପାରିବାରିକ ଜନ୍ମଦିନ ଉତ୍ସବ",
    },
    category: "celebrations",
    categoryLabel: {
      en: "Celebrations",
      or: "ଉତ୍ସବ",
    },
    description: {
      en: "High-spirited family celebration with dance tracks and dynamic sound.",
      or: "ପରିବାର ଓ ସାଙ୍ଗସାଥୀଙ୍କ ମେଳରେ ଆନନ୍ଦଦାୟକ ନୃତ୍ୟ ଓ ସଙ୍ଗୀତ।",
    },
  },
  {
    id: "g10",
    src: IMAGES.services.soundEquipment,
    title: {
      en: "Professional Audio Engineering",
      or: "ଅତ୍ୟାଧୁନିକ ଧ୍ୱନି ଯନ୍ତ୍ରାଂଶ",
    },
    category: "equipment",
    categoryLabel: {
      en: "Equipment",
      or: "ଉପକରଣ",
    },
    description: {
      en: "Heavy-duty sound drivers, audio console sliders, and clear amplification.",
      or: "ସ୍ପଷ୍ଟ ଧ୍ୱନି ପାଇଁ ଉଚ୍ଚମାନର ଆମ୍ପ୍ଲିଫାୟର, ମିକସର ଏବଂ ସ୍ପିକର।",
    },
  },
];
