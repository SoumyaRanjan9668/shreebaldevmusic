import { IMAGES } from "@/config/images";

export interface ServiceItem {
  id: string;
  slug: string;
  title: {
    en: string;
    or: string;
  };
  shortDescription: {
    en: string;
    or: string;
  };
  image: string;
  highlights: {
    en: string[];
    or: string[];
  };
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "wedding-baraat",
    slug: "wedding-baraat",
    title: {
      en: "Wedding Baraat",
      or: "ବାହାଘର ବରଯାତ୍ରୀ",
    },
    shortDescription: {
      en: "High-energy Baraat processions with brass band melodies, booming box music, and joyous celebration rhythms.",
      or: "ବ୍ରାସ ବ୍ୟାଣ୍ଡ, ପାୱାରଫୁଲ ବକ୍ସ ମ୍ୟୁଜିକ ଏବଂ ଉତ୍ସାହପୂର୍ଣ୍ଣ ନୃତ୍ୟ ତାଳରେ ଭବ୍ୟ ବରଯାତ୍ରୀ ପରିବେଷଣ।",
    },
    image: IMAGES.services.weddingBaraat,
    highlights: {
      en: ["Live Brass Melodies", "Mobile Sound System", "Procession Coordination"],
      or: ["ଜୀବନ୍ତ ବ୍ରାସ ଧ୍ୱନି", "ମୋବାଇଲ ସାଉଣ୍ଡ ସିଷ୍ଟମ", "ଶୃଙ୍ଖଳିତ ବରଯାତ୍ରୀ ସଂଯୋଜନା"],
    },
  },
  {
    id: "traditional-band-baja",
    slug: "traditional-band-baja",
    title: {
      en: "Traditional Band Baja",
      or: "ପାରମ୍ପରିକ ବ୍ୟାଣ୍ଡ ବାଜା",
    },
    shortDescription: {
      en: "Authentic ceremonial brass band troupe in coordinated uniforms playing traditional wedding and folk tunes.",
      or: "ସୁସଜ୍ଜିତ ପାରମ୍ପରିକ ପୋଷାକରେ ବ୍ୟାଣ୍ଡ ବାଦକମାନଙ୍କ ଦ୍ୱାରା ଶାସ୍ତ୍ରୀୟ ଓ ଲୋକପ୍ରିୟ ବିବାହ ଧୂନ୍।",
    },
    image: IMAGES.services.bandBaja,
    highlights: {
      en: ["Polished Brass Instruments", "Coordinated Festive Uniforms", "Traditional Rhythms"],
      or: ["ଉତ୍କୃଷ୍ଟ ବ୍ରାସ ଯନ୍ତ୍ରପାତି", "ସୁସଜ୍ଜିତ ରାଜକୀୟ ପୋଷାକ", "ପାରମ୍ପରିକ ବାଜା ତାଳ"],
    },
  },
  {
    id: "box-music-dj-sound",
    slug: "box-music-dj-sound",
    title: {
      en: "Box Music & DJ Sound",
      or: "ବକ୍ସ ମ୍ୟୁଜିକ ଏବଂ ଡିଜେ ସାଉଣ୍ଡ",
    },
    shortDescription: {
      en: "Heavy bass stacked speaker setups, vivid LED lighting, and clear acoustics for outdoor village and wedding events.",
      or: "ଅତ୍ୟାଧୁନିକ ସ୍ପିକର, ଭାରୀ ବାସ ଏବଂ ଚିତ୍ତାକର୍ଷକ ଏଲଇଡି ଆଲୋକରେ ସଜ୍ଜିତ ପାୱାରଫୁଲ ସାଉଣ୍ଡ ସିଷ୍ଟମ।",
    },
    image: "/images/services/real-baladev-truck.jpg",
    highlights: {
      en: ["Heavy Bass Subwoofers", "Vibrant LED Lighting", "Clear Outdoor Sound"],
      or: ["ଦମଦାର ବାସ ସବଉଫର", "ରଙ୍ଗବେରଙ୍ଗ ଏଲଇଡି ଲାଇଟ୍ସ", "ସ୍ପଷ୍ଟ ଆଉଟଡୋର ଧ୍ୱନି"],
    },
  },
  {
    id: "reception-party",
    slug: "reception-party",
    title: {
      en: "Reception Party",
      or: "ରିସେପ୍ସନ ପାର୍ଟି ସଙ୍ଗୀତ",
    },
    shortDescription: {
      en: "Elegant musical ambience and lively dance hits to welcome guests and celebrate new beginnings.",
      or: "ନବଦମ୍ପତିଙ୍କ ସ୍ୱାଗତ ତଥା ଅତିଥିମାନଙ୍କ ଆନନ୍ଦ ଉଲ୍ଲାସ ପାଇଁ ମଧୁର ସଙ୍ଗୀତ ଏବଂ ଡ୍ୟାନ୍ସ ବିଟ୍ସ।",
    },
    image: IMAGES.services.reception,
    highlights: {
      en: ["Melodic Ambience", "Celebration Dance Beats", "Evening Stage Setup"],
      or: ["ମଧୁର ସାଙ୍ଗୀତିକ ପରିବେଶ", "ଆକର୍ଷଣୀୟ ନୃତ୍ୟ ସଙ୍ଗୀତ", "ସନ୍ଧ୍ୟା ଷ୍ଟେଜ ସଂଯୋଜନା"],
    },
  },
  {
    id: "birthday-celebration",
    slug: "birthday-celebration",
    title: {
      en: "Birthday Celebration",
      or: "ଜନ୍ମଦିନ ଉତ୍ସବ ସଙ୍ଗୀତ",
    },
    shortDescription: {
      en: "Fun, vibrant music setups with high-energy party tracks and lighting for memorable birthdays.",
      or: "ପରିବାର ଏବଂ ସାଙ୍ଗସାଥୀଙ୍କ ସହିତ ଖୁସିର ମୁହୂର୍ତ୍ତକୁ ସ୍ମରଣୀୟ କରିବା ପାଇଁ ରଙ୍ଗାରଙ୍ଗ ସଙ୍ଗୀତ।",
    },
    image: IMAGES.services.birthday,
    highlights: {
      en: ["Party Sound Setup", "Family Celebration Atmosphere", "Dynamic Track Selection"],
      or: ["ପାର୍ଟି ସାଉଣ୍ଡ ସେଟଅପ୍", "ପାରିବାରିକ ଉତ୍ସବ ପରିବେଶ", "ଲୋକପ୍ରିୟ ସଙ୍ଗୀତ"],
    },
  },
  {
    id: "festival-celebration",
    slug: "festival-celebration",
    title: {
      en: "Festival Celebration",
      or: "ଗ୍ରାମ୍ୟ ଯାତ୍ରା ଓ ପର୍ବପର୍ବାଣୀ",
    },
    shortDescription: {
      en: "Community festival music with powerful sound projection and traditional festive vigor for village celebrations.",
      or: "ଗ୍ରାମର ଉତ୍ସବ, ମେଳା ଏବଂ ପର୍ବପର୍ବାଣୀ ପାଇଁ ଜୋରଦାର ବାଜା ଓ ଲୋକକଳାର ଆନନ୍ଦ।",
    },
    image: IMAGES.services.festival,
    highlights: {
      en: ["High-Volume Coverage", "Traditional Festive Spirit", "Full Community Energy"],
      or: ["ଦୂର ପର୍ଯ୍ୟନ୍ତ ଶୁଭୁଥିବା ଧ୍ୱନି", "ପାରମ୍ପରିକ ପର୍ବ ଉତ୍ସାହ", "ସାମୂହିକ ଉଲ୍ଲାସ"],
    },
  },
  {
    id: "religious-functions",
    slug: "religious-functions",
    title: {
      en: "Religious Functions",
      or: "ଧାର୍ମିକ ଓ ଆଧ୍ୟାତ୍ମିକ ଉତ୍ସବ",
    },
    shortDescription: {
      en: "Respectful, devotional musical arrangements for pujas, temple festivals, and sacred ceremonies.",
      or: "ପୂଜା ପାର୍ବଣ, ମନ୍ଦିର ଉତ୍ସବ ଏବଂ ଆଧ୍ୟାତ୍ମିକ କାର୍ଯ୍ୟକ୍ରମ ପାଇଁ ଭକ୍ତିପୂର୍ଣ୍ଣ ମଧୁର ବାଜା।",
    },
    image: IMAGES.services.religious,
    highlights: {
      en: ["Devotional Tunes", "Respectful Volume Control", "Sacred Atmosphere"],
      or: ["ଭକ୍ତି ସଙ୍ଗୀତ ଧୂନ୍", "ମର୍ଯ୍ୟାଦାପୂର୍ଣ୍ଣ ଧ୍ୱନି ନିୟନ୍ତ୍ରଣ", "ପବିତ୍ର ପରିବେଶ"],
    },
  },
  {
    id: "village-events",
    slug: "village-events",
    title: {
      en: "Village & Other Events",
      or: "ଗ୍ରାମ୍ୟ ଉତ୍ସବ ଏବଂ ଅନ୍ୟାନ୍ୟ କାର୍ଯ୍ୟକ୍ରମ",
    },
    shortDescription: {
      en: "Custom sound arrangements for sports meets, cultural functions, processions, and local gatherings.",
      or: "ଖେଳକୁଦ, ଶୋଭାଯାତ୍ରା, ସଭାସମିତି ତଥା ସ୍ଥାନୀୟ ମନୋରଞ୍ଜନ କାର୍ଯ୍ୟକ୍ରମ ପାଇଁ ସ୍ୱତନ୍ତ୍ର ସାଉଣ୍ଡ।",
    },
    image: IMAGES.services.bandTeam,
    highlights: {
      en: ["Flexible Sound Layout", "Reliable Local Service", "Full Team Coordination"],
      or: ["ଆବଶ୍ୟକତା ଅନୁଯାୟୀ ସେଟଅପ୍", "ନିର୍ଭରଯୋଗ୍ୟ ସ୍ଥାନୀୟ ସେବା", "ସମ୍ପୂର୍ଣ୍ଣ ଟିମ୍ ସହଯୋଗ"],
    },
  },
];
