export type Language = "en" | "or";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    contact: string;
    bookWhatsapp: string;
    callNow: string;
  };
  hero: {
    badge: string;
    mainHeading: string;
    brandName: string;
    tagline: string;
    description: string;
    bookEventBtn: string;
    exploreServicesBtn: string;
    teamBadge: string;
    locationBadge: string;
  };
  about: {
    sectionTag: string;
    heading: string;
    description: string;
    paragraph2: string;
    teamTitle: string;
    teamSubtitle: string;
    locationTitle: string;
    locationSubtitle: string;
    experienceNotice: string;
    bandBadge: string;
    boxBadge: string;
  };
  services: {
    sectionTag: string;
    heading: string;
    subheading: string;
    enquireBtn: string;
  };
  boxMusicFeature: {
    sectionTag: string;
    heading: string;
    description: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    bookBoxBtn: string;
  };
  bandBajaFeature: {
    sectionTag: string;
    heading: string;
    description: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    bookBandBtn: string;
  };
  whyChooseUs: {
    sectionTag: string;
    heading: string;
    subheading: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  gallery: {
    sectionTag: string;
    heading: string;
    subheading: string;
    categories: {
      all: string;
      bandBaja: string;
      boxMusic: string;
      baraat: string;
      celebrations: string;
      equipment: string;
    };
    closeModal: string;
    prevImage: string;
    nextImage: string;
  };
  videoShowcase: {
    sectionTag: string;
    heading: string;
    subheading: string;
    watchPreview: string;
    modalTitle: string;
    videoNotice: string;
    closeModal: string;
  };
  bookingCta: {
    heading: string;
    subheading: string;
    whatsappBtn: string;
    callBtn: string;
    instantResponse: string;
  };
  contact: {
    sectionTag: string;
    heading: string;
    subheading: string;
    phoneLabel: string;
    whatsappLabel: string;
    locationLabel: string;
    addressText: string;
    mapsButton: string;
    quickEnquiryTitle: string;
    quickEnquiryDesc: string;
    namePlaceholder: string;
    datePlaceholder: string;
    serviceSelectPlaceholder: string;
    notesPlaceholder: string;
    sendWhatsappBtn: string;
  };
  footer: {
    brandDescription: string;
    quickLinksTitle: string;
    servicesTitle: string;
    contactTitle: string;
    address: string;
    rights: string;
    locationText: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
      bookWhatsapp: "WhatsApp Booking",
      callNow: "Call Now",
    },
    hero: {
      badge: "TRADITION • MUSIC • CELEBRATION",
      mainHeading: "WHERE EVERY CELEBRATION FINDS ITS RHYTHM",
      brandName: "SHREE BALDEV MUSICAL",
      tagline: "BAND BAJA • BOX MUSIC",
      description:
        "Traditional Band Baja. Powerful Box Music. Unforgettable Celebrations.",
      bookEventBtn: "Book Your Event",
      exploreServicesBtn: "Explore Services",
      teamBadge: "20-Member Musical Team",
      locationBadge: "Kendrapara, Odisha",
    },
    about: {
      sectionTag: "ABOUT SHREE BALDEV MUSICAL",
      heading: "MORE THAN MUSIC. IT'S THE SPIRIT OF CELEBRATION.",
      description:
        "Shree Baldev Musical brings together traditional Band Baja performances and powerful Box Music experiences for weddings, Baraat processions, festivals and special occasions.",
      paragraph2:
        "Rooted in Naraanpur, Angulai, Kendrapara, our dedicated 20-member team of musicians and sound technicians is devoted to honoring Odisha's rich ceremonial culture while delivering exhilarating audio energy for every festivity.",
      teamTitle: "20-Member Team",
      teamSubtitle: "Coordinated musicians, drummers, and audio specialists",
      locationTitle: "Naraanpur, Angulai",
      locationSubtitle: "Kendrapara, Odisha, India",
      experienceNotice: "Authentic, reliable local service for all your special occasions.",
      bandBadge: "Live Brass Performance",
      boxBadge: "Heavy Bass DJ System",
    },
    services: {
      sectionTag: "WHAT WE OFFER",
      heading: "OUR EVENT SERVICES",
      subheading:
        "From majestic Baraat processions to village cultural festivals, we offer tailored musical experiences for every occasion.",
      enquireBtn: "Enquire via WhatsApp",
    },
    boxMusicFeature: {
      sectionTag: "HEAVY BASS & HIGH POWER",
      heading: "POWERFUL SOUND. UNFORGETTABLE ENERGY.",
      description:
        "Experience booming bass and crystal-clear high notes engineered for open-air celebration grounds, wedding processions, and village celebrations.",
      feature1Title: "Stacked Bass Subwoofers",
      feature1Desc: "Custom multi-tier woofer arrangements engineered for deep festive vibrations.",
      feature2Title: "Vivid Event LED Glow",
      feature2Desc: "Synchronized decorative party lighting that elevates the night celebration vibe.",
      feature3Title: "Professional Outdoor Layout",
      feature3Desc: "Clean audio projection covering large wedding grounds and moving processions.",
      bookBoxBtn: "Book Box Music Setup",
    },
    bandBajaFeature: {
      sectionTag: "TIME-HONORED BRASS ENSEMBLE",
      heading: "KEEPING THE TRADITION ALIVE",
      description:
        "Our brass band honors timeless musical heritage with gleaming trumpets, euphoniums, clarinets, and traditional dholak percussion in ceremonial uniforms.",
      feature1Title: "Live Brass Artistry",
      feature1Desc: "Skilled trumpeters and brass artists performing classical and celebratory tunes.",
      feature2Title: "Festive Ceremonial Uniforms",
      feature2Desc: "Coordinated royal attire and traditional pagri turbans adding majesty to your event.",
      feature3Title: "Rhythmic Wedding Beats",
      feature3Desc: "Enthralling marching rhythms that inspire joyful dancing throughout the Baraat.",
      bookBandBtn: "Book Band Baja Troupe",
    },
    whyChooseUs: {
      sectionTag: "THE REAL ADVANTAGE",
      heading: "WHY CHOOSE SHREE BALDEV MUSICAL",
      subheading:
        "Direct local booking, verified capabilities, and authentic ceremonial excellence for your special days.",
      points: [
        {
          title: "20-Member Coordinated Team",
          description:
            "A complete troupe of brass musicians, percussionists, and dedicated sound technicians.",
        },
        {
          title: "Traditional Band Baja",
          description:
            "Authentic brass melodies and ceremonial rhythms played in royal festive uniforms.",
        },
        {
          title: "Box Music Arrangements",
          description:
            "High-impact speaker setups and vivid lighting tailored for outdoor and wedding venues.",
        },
        {
          title: "Multiple Event Categories",
          description:
            "Complete audio solutions for Baraat, receptions, birthdays, religious pujas, and festivals.",
        },
        {
          title: "Local Kendrapara Booking",
          description:
            "Conveniently based in Naraanpur, Angulai for prompt and reliable local service.",
        },
        {
          title: "Direct Phone & WhatsApp Contact",
          description:
            "No middlemen. Speak directly with the team for custom packages and instant confirmation.",
        },
      ],
    },
    gallery: {
      sectionTag: "MOMENTS & MOMENTUM",
      heading: "CELEBRATION GALLERY",
      subheading:
        "Explore photographs of our performances, sound equipment setups, and celebration processions.",
      categories: {
        all: "All Photos",
        bandBaja: "Band Baja",
        boxMusic: "Box Music",
        baraat: "Baraat",
        celebrations: "Celebrations",
        equipment: "Sound Gear",
      },
      closeModal: "Close Viewer",
      prevImage: "Previous Image",
      nextImage: "Next Image",
    },
    videoShowcase: {
      sectionTag: "LIVE EXPERIENCE",
      heading: "HEAR THE BEATS IN MOTION",
      subheading:
        "A glimpse into the energy, rhythmic brass, and festive vibrations that define Shree Baldev Musical.",
      watchPreview: "Preview Experience",
      modalTitle: "Performance Showcase",
      videoNotice:
        "Direct bookings include on-site sound coordination and live performance arrangements.",
      closeModal: "Close",
    },
    bookingCta: {
      heading: "YOUR CELEBRATION DESERVES GREAT MUSIC.",
      subheading:
        "Secure your event dates early for wedding Baraat, Box Music, or traditional Band Baja in Kendrapara and surrounding regions.",
      whatsappBtn: "WhatsApp Booking",
      callBtn: "Call Now",
      instantResponse: "Direct response from Shree Baldev Musical team",
    },
    contact: {
      sectionTag: "GET IN TOUCH",
      heading: "CONTACT & BOOKING",
      subheading:
        "Reach out directly by phone or WhatsApp to check date availability and discuss your event requirements.",
      phoneLabel: "Phone Number",
      whatsappLabel: "WhatsApp Direct",
      locationLabel: "Office & Location",
      addressText: "Naraanpur, Angulai, Kendrapara, Odisha, India",
      mapsButton: "View on Google Maps",
      quickEnquiryTitle: "Quick Event Enquiry",
      quickEnquiryDesc:
        "Fill out this quick form to automatically prepare a WhatsApp message for our team.",
      namePlaceholder: "Your Name",
      datePlaceholder: "Expected Event Date (e.g. 15 Dec)",
      serviceSelectPlaceholder: "Select Service Needed",
      notesPlaceholder: "Event Location or Special Requests",
      sendWhatsappBtn: "Open WhatsApp to Send Enquiry",
    },
    footer: {
      brandDescription:
        "SHREE BALDEV MUSICAL is your premier destination for Traditional Band Baja, powerful Box Music, and complete event entertainment in Kendrapara, Odisha.",
      quickLinksTitle: "Quick Links",
      servicesTitle: "Our Services",
      contactTitle: "Contact Us",
      address: "Naraanpur, Angulai, Kendrapara, Odisha, India",
      rights: "All rights reserved. Shree Baldev Musical.",
      locationText: "Naraanpur, Angulai, Kendrapara, Odisha",
    },
  },
  or: {
    nav: {
      home: "ପ୍ରଥମ ପୃଷ୍ଠା",
      about: "ଆମ ବିଷୟରେ",
      services: "ସେବାସମୂହ",
      gallery: "ଫଟୋ ଗ୍ୟାଲେରୀ",
      contact: "ଯୋଗାଯୋଗ",
      bookWhatsapp: "ହ୍ୱାଟ୍ସଆପ୍ ବୁକିଂ",
      callNow: "କଲ୍ କରନ୍ତୁ",
    },
    hero: {
      badge: "ପରମ୍ପରା • ସଙ୍ଗୀତ • ଆନନ୍ଦୋଲ୍ଲାସ",
      mainHeading: "ଯେଉଁଠି ପ୍ରତ୍ୟେକ ଉତ୍ସବ ପାଏ ତାର ନୂତନ ଛନ୍ଦ",
      brandName: "ଶ୍ରୀ ବଳଦେବ ମ୍ୟୁଜିକାଲ",
      tagline: "ବ୍ୟାଣ୍ଡ ବାଜା • ବକ୍ସ ମ୍ୟୁଜିକ",
      description:
        "ପାରମ୍ପରିକ ବ୍ୟାଣ୍ଡ ବାଜା। ପାୱାରଫୁଲ ବକ୍ସ ମ୍ୟୁଜିକ। ଅବିସ୍ମରଣୀୟ ଉତ୍ସବ।",
      bookEventBtn: "ବୁକିଂ ପାଇଁ ଯୋଗାଯୋଗ",
      exploreServicesBtn: "ସେବା ବିଷୟରେ ଜାଣନ୍ତୁ",
      teamBadge: "୨୦ ଜଣିଆ ଅଭିଜ୍ଞ ସଙ୍ଗୀତ ଦଳ",
      locationBadge: "କେନ୍ଦ୍ରାପଡ଼ା, ଓଡ଼ିଶା",
    },
    about: {
      sectionTag: "ଶ୍ରୀ ବଳଦେବ ମ୍ୟୁଜିକାଲ ବିଷୟରେ",
      heading: "ସଙ୍ଗୀତଠାରୁ ଅଧିକ। ଏହା ଉତ୍ସବର ଅସଲ ପ୍ରାଣ।",
      description:
        "ଶ୍ରୀ ବଳଦେବ ମ୍ୟୁଜିକାଲ ବିବାହ, ବରଯାତ୍ରୀ, ପର୍ବପର୍ବାଣୀ ଏବଂ ସ୍ୱତନ୍ତ୍ର କାର୍ଯ୍ୟକ୍ରମ ପାଇଁ ପାରମ୍ପରିକ ବ୍ୟାଣ୍ଡ ବାଜା ଓ ଶକ୍ତିଶାଳୀ ବକ୍ସ ମ୍ୟୁଜିକର ଏକ ଅପୂର୍ବ ସମନ୍ୱୟ ପ୍ରଦାନ କରେ।",
      paragraph2:
        "କେନ୍ଦ୍ରାପଡ଼ା ଜିଲ୍ଲାର ନାରାୟଣପୁର (ଅଙ୍ଗୁଳାଇ)ରୁ ଆରମ୍ଭ ହୋଇଥିବା ଆମର ୨୦ ଜଣିଆ ସଙ୍ଗୀତଜ୍ଞ ତଥା ସାଉଣ୍ଡ ଟେକ୍ନିସିଆନ୍ ଦଳ ପ୍ରତ୍ୟେକ ଶୁଭ କାର୍ଯ୍ୟକୁ ଆନନ୍ଦମୟ ଓ ସ୍ମରଣୀୟ କରିବା ପାଇଁ ସଦା ପ୍ରସ୍ତୁତ।",
      teamTitle: "୨୦ ଜଣିଆ ଦଳ",
      teamSubtitle: "ସୁସଜ୍ଜିତ ବାଦକ, ଢୋଲକ କଳାକାର ଓ ସାଉଣ୍ଡ ଟିମ୍",
      locationTitle: "ନାରାୟଣପୁର, ଅଙ୍ଗୁଳାଇ",
      locationSubtitle: "କେନ୍ଦ୍ରାପଡ଼ା, ଓଡ଼ିଶା, ଭାରତ",
      experienceNotice: "ଆପଣଙ୍କ ପ୍ରତ୍ୟେକ ଶୁଭ କାର୍ଯ୍ୟ ପାଇଁ ବିଶ୍ୱସନୀୟ ସ୍ଥାନୀୟ ସେବା।",
      bandBadge: "ଲାଇଭ ବ୍ରାସ ବ୍ୟାଣ୍ଡ",
      boxBadge: "ଭାରୀ ବାସ ଡିଜେ ସିଷ୍ଟମ",
    },
    services: {
      sectionTag: "ଆମର ସେବାସମୂହ",
      heading: "କାର୍ଯ୍ୟକ୍ରମ ସେବା",
      subheading:
        "ଭବ୍ୟ ବରଯାତ୍ରୀଠାରୁ ଆରମ୍ଭ କରି ଗ୍ରାମ୍ୟ ଯାତ୍ରା ପର୍ଯ୍ୟନ୍ତ, ପ୍ରତ୍ୟେକ ଶୁଭ କାର୍ଯ୍ୟ ପାଇଁ ଆମ ପାଖରେ ରହିଛି ସ୍ୱତନ୍ତ୍ର ସାଙ୍ଗୀତିକ ବ୍ୟବସ୍ଥା।",
      enquireBtn: "ହ୍ୱାଟ୍ସଆପ୍‌ରେ ପଚାରନ୍ତୁ",
    },
    boxMusicFeature: {
      sectionTag: "ଭାରୀ ବାସ ଓ ଉଚ୍ଚ ଶବ୍ଦ",
      heading: "ପାୱାରଫୁଲ ସାଉଣ୍ଡ। ଅପୂର୍ବ ଉନ୍ମାଦନା।",
      description:
        "ଖୋଲା ପଡ଼ିଆ, ବିବାହ ଶୋଭାଯାତ୍ରା ଏବଂ ଗ୍ରାମ୍ୟ ଉତ୍ସବ ପାଇଁ ଉଦ୍ଦିଷ୍ଟ ଶକ୍ତିଶାଳୀ ବାସ ଏବଂ ସ୍ପଷ୍ଟ ସଙ୍ଗୀତର ଅନୁଭୂତି ନିଅନ୍ତୁ।",
      feature1Title: "ଭାରୀ ବାସ ସବଉଫର",
      feature1Desc: "କମ୍ପନ ସୃଷ୍ଟିକାରୀ ଦମଦାର ବାସ ସ୍ପିକର ସେଟଅପ୍।",
      feature2Title: "ଆକର୍ଷଣୀୟ ଏଲଇଡି ଲାଇଟ୍",
      feature2Desc: "ରାତ୍ରିକାଳୀନ ଉତ୍ସବ ପାଇଁ ଚିତ୍ତାକର୍ଷକ ରଙ୍ଗିନ୍ ଆଲୋକ।",
      feature3Title: "ଉନ୍ନତ ଆଉଟଡୋର ସାଉଣ୍ଡ",
      feature3Desc: "ବଡ଼ ପଡ଼ିଆ ଓ ଯାତ୍ରା ପାଇଁ ସ୍ପଷ୍ଟ ଓ ଦୂରଗାମୀ ଧ୍ୱନି ପ୍ରସାର।",
      bookBoxBtn: "ବକ୍ସ ମ୍ୟୁଜିକ ବୁକ୍ କରନ୍ତୁ",
    },
    bandBajaFeature: {
      sectionTag: "ପାରମ୍ପରିକ ବ୍ରାସ ବ୍ୟାଣ୍ଡ",
      heading: "ପରମ୍ପରାକୁ ରଖିଛୁ ଜୀବନ୍ତ",
      description:
        "ଚିକ୍‌ମିକ୍ କରୁଥିବା ତୂରୀ, ବ୍ରାସ ଯନ୍ତ୍ର ଏବଂ ତାଳଯୁକ୍ତ ଢୋଲ ବାଦ୍ୟ ସହିତ ସୁସଜ୍ଜିତ ପୋଷାକରେ ଆମର ପାରମ୍ପରିକ ବ୍ୟାଣ୍ଡ ଦଳ।",
      feature1Title: "ଜୀବନ୍ତ ବ୍ରାସ କଳା",
      feature1Desc: "ନିପୁଣ କଳାକାରମାନଙ୍କ ଦ୍ୱାରା ଲୋକପ୍ରିୟ ଓ ଶାସ୍ତ୍ରୀୟ ବିବାହ ଧୂନ୍।",
      feature2Title: "ରାଜକୀୟ ଉତ୍ସବ ପୋଷାକ",
      feature2Desc: "ସୁସଜ୍ଜିତ ପୋଷାକ ଏବଂ ପାରମ୍ପରିକ ପଗଡ଼ି ଯାହା କାର୍ଯ୍ୟକ୍ରମକୁ ଦିଏ ଭବ୍ୟ ରୂପ।",
      feature3Title: "ଉଲ୍ଲାସପୂର୍ଣ୍ଣ ବରଯାତ୍ରୀ ତାଳ",
      feature3Desc: "ନୃତ୍ୟ ଓ ଆନନ୍ଦରେ ଭରିଦେବା ଭଳି ଉତ୍ସାହୀ ବାଜାର ଛନ୍ଦ।",
      bookBandBtn: "ବ୍ୟାଣ୍ଡ ବାଜା ବୁକ୍ କରନ୍ତୁ",
    },
    whyChooseUs: {
      sectionTag: "ଆମର ବିଶେଷତ୍ୱ",
      heading: "ଶ୍ରୀ ବଳଦେବ ମ୍ୟୁଜିକାଲ୍ କାହିଁକି ବାଛିବେ",
      subheading:
        "ସିଧାସଳଖ ଯୋଗାଯୋଗ, ବିଶ୍ୱସନୀୟ ସେବା ଏବଂ ଶୁଦ୍ଧ ପାରମ୍ପରିକ ଅନୁଭୂତି ଆପଣଙ୍କ ଉତ୍ସବ ପାଇଁ।",
      points: [
        {
          title: "୨୦ ଜଣିଆ ସୁସଂଗଠିତ ଦଳ",
          description: "ବ୍ରାସ ବାଦକ, ଢୋଲକ କଳାକାର ଏବଂ ସାଉଣ୍ଡ ଟେକ୍ନିସିଆନ୍‌ଙ୍କ ସମ୍ପୂର୍ଣ୍ଣ ଟିମ୍।",
        },
        {
          title: "ପାରମ୍ପରିକ ବ୍ୟାଣ୍ଡ ବାଜା",
          description: "ଶୁଦ୍ଧ ଓ ମଧୁର ବ୍ରାସ ଧୂନ୍ ସହିତ ରାଜକୀୟ ବରଯାତ୍ରୀ ପରିବେଷଣ।",
        },
        {
          title: "ବକ୍ସ ମ୍ୟୁଜିକ ସୁବିଧା",
          description: "ଉଚ୍ଚ କ୍ଷମତାସମ୍ପନ୍ନ ସ୍ପିକର ଓ ଉନ୍ନତ ଏଲଇଡି ଆଲୋକ ବ୍ୟବସ୍ଥା।",
        },
        {
          title: "ସମସ୍ତ ପ୍ରକାର କାର୍ଯ୍ୟକ୍ରମ",
          description: "ବିବାହ, ବ୍ରତୋପନୟନ, ଜନ୍ମଦିନ, ପୂଜା ପାର୍ବଣ ଓ ଗ୍ରାମ୍ୟ ଉତ୍ସବ ପାଇଁ ଉପଯୁକ୍ତ।",
        },
        {
          title: "ସ୍ଥାନୀୟ କେନ୍ଦ୍ରାପଡ଼ା ବୁକିଂ",
          description: "ନାରାୟଣପୁର, ଅଙ୍ଗୁଳାଇରେ ଅବସ୍ଥିତ - ସହଜ ଓ ବିଶ୍ୱସ୍ତ ସେବା।",
        },
        {
          title: "ସିଧାସଳଖ ଫୋନ୍ ଓ ହ୍ୱାଟ୍ସଆପ୍",
          description: "କୌଣସି ଦଲାଲ ନାହାନ୍ତି। ମାଲିକ ଓ ଟିମ୍ ସହିତ ସିଧା କଥା ହୋଇ ତୁରନ୍ତ ବୁକ୍ କରନ୍ତୁ।",
        },
      ],
    },
    gallery: {
      sectionTag: "ଉତ୍ସବର ମୁହୂର୍ତ୍ତ",
      heading: "ଆମର ଫଟୋ ଗ୍ୟାଲେରୀ",
      subheading:
        "ଆମର ସାଙ୍ଗୀତିକ କାର୍ଯ୍ୟକ୍ରମ, ସାଉଣ୍ଡ ସେଟଅପ୍ ଏବଂ ବରଯାତ୍ରୀର କିଛି ଅଭୁଲା ଫଟୋ ଦେଖନ୍ତୁ।",
      categories: {
        all: "ସମସ୍ତ ଫଟୋ",
        bandBaja: "ବ୍ୟାଣ୍ଡ ବାଜା",
        boxMusic: "ବକ୍ସ ମ୍ୟୁଜିକ",
        baraat: "ବରଯାତ୍ରୀ",
        celebrations: "ଉତ୍ସବ",
        equipment: "ସାଉଣ୍ଡ ଉପକରଣ",
      },
      closeModal: "ବନ୍ଦ କରନ୍ତୁ",
      prevImage: "ପୂର୍ବ ଫଟୋ",
      nextImage: "ପରବର୍ତ୍ତୀ ଫଟୋ",
    },
    videoShowcase: {
      sectionTag: "ପ୍ରତ୍ୟକ୍ଷ ଅନୁଭୂତି",
      heading: "ସଙ୍ଗୀତର ତାଳ ଓ ତରଙ୍ଗ",
      subheading:
        "ଶ୍ରୀ ବଳଦେବ ମ୍ୟୁଜିକାଲର ଜୀବନ୍ତ ଶକ୍ତି, ମଧୁର ବାଜା ଏବଂ ଆନନ୍ଦ ଉଲ୍ଲାସର ଏକ ଝଲକ।",
      watchPreview: "ପ୍ରଦର୍ଶନ ଦେଖନ୍ତୁ",
      modalTitle: "କାର୍ଯ୍ୟକ୍ରମ ଝଲକ",
      videoNotice:
        "ସିଧାସଳଖ ବୁକିଂରେ ସାଉଣ୍ଡ ଇଞ୍ଜିନିୟରିଂ ଓ ଲାଇଭ ପ୍ରଦର୍ଶନ ସାମିଲ ରହିଥାଏ।",
      closeModal: "ବନ୍ଦ କରନ୍ତୁ",
    },
    bookingCta: {
      heading: "ଆପଣଙ୍କ ଉତ୍ସବ ପାଇଁ ଶ୍ରେଷ୍ଠ ସଙ୍ଗୀତ ହିଁ ଯୋଗ୍ୟ।",
      subheading:
        "କେନ୍ଦ୍ରାପଡ଼ା ତଥା ଆଖପାଖ ଅଞ୍ଚଳରେ ବିବାହ ବରଯାତ୍ରୀ, ବକ୍ସ ମ୍ୟୁଜିକ କିମ୍ବା ବ୍ୟାଣ୍ଡ ବାଜା ପାଇଁ ଆଜି ହିଁ ତାରିଖ ନିଶ୍ଚିତ କରନ୍ତୁ।",
      whatsappBtn: "ହ୍ୱାଟ୍ସଆପ୍ ବୁକିଂ",
      callBtn: "ଫୋନ୍ କରନ୍ତୁ",
      instantResponse: "ଶ୍ରୀ ବଳଦେବ ମ୍ୟୁଜିକାଲ ଟିମ୍ ତରଫରୁ ତୁରନ୍ତ ଉତ୍ତର",
    },
    contact: {
      sectionTag: "ଯୋଗାଯୋଗ",
      heading: "ଯୋଗାଯୋଗ ଏବଂ ବୁକିଂ",
      subheading:
        "ତାରିଖ ଉପଲବ୍ଧତା ଏବଂ କାର୍ଯ୍ୟକ୍ରମ ସମ୍ପର୍କରେ ଆଲୋଚନା କରିବା ପାଇଁ ଫୋନ୍ କିମ୍ବା ହ୍ୱାଟ୍ସଆପ୍‌ରେ ସିଧା ଯୋଗାଯୋଗ କରନ୍ତୁ।",
      phoneLabel: "ଫୋନ୍ ନମ୍ବର",
      whatsappLabel: "ହ୍ୱାଟ୍ସଆପ୍ ସିଧାସଳଖ",
      locationLabel: "ଠିକଣା ଓ ସ୍ଥାନ",
      addressText: "ନାରାୟଣପୁର, ଅଙ୍ଗୁଳାଇ, କେନ୍ଦ୍ରାପଡ଼ା, ଓଡ଼ିଶା, ଭାରତ",
      mapsButton: "ଗୁଗଲ୍ ମ୍ୟାପ୍ସରେ ଦେଖନ୍ତୁ",
      quickEnquiryTitle: "ତୁରନ୍ତ ପଚାରିବା ଫର୍ମ",
      quickEnquiryDesc:
        "ଏହି ଫର୍ମ ପୂରଣ କଲେ ସିଧାସଳଖ ହ୍ୱାଟ୍ସଆପ୍‌ରେ ଆପଣଙ୍କ ମେସେଜ୍ ପ୍ରସ୍ତୁତ ହୋଇଯିବ।",
      namePlaceholder: "ଆପଣଙ୍କ ନାମ",
      datePlaceholder: "କାର୍ଯ୍ୟକ୍ରମ ତାରିଖ (ଯେପରି ୧୫ ଡିସେମ୍ବର)",
      serviceSelectPlaceholder: "ଆବଶ୍ୟକ ସେବା ବାଛନ୍ତୁ",
      notesPlaceholder: "ସ୍ଥାନ କିମ୍ବା ଅନ୍ୟାନ୍ୟ ସୂଚନା",
      sendWhatsappBtn: "ହ୍ୱାଟ୍ସଆପ୍‌ରେ ପଠାନ୍ତୁ",
    },
    footer: {
      brandDescription:
        "ଶ୍ରୀ ବଳଦେବ ମ୍ୟୁଜିକାଲ କେନ୍ଦ୍ରାପଡ଼ା, ଓଡ଼ିଶାର ଏକ ପ୍ରମୁଖ ପାରମ୍ପରିକ ବ୍ୟାଣ୍ଡ ବାଜା, ଶକ୍ତିଶାଳୀ ବକ୍ସ ମ୍ୟୁଜିକ ଏବଂ ଇଭେଣ୍ଟ ମନୋରଞ୍ଜନ ସଂସ୍ଥା।",
      quickLinksTitle: "ସଂକ୍ଷିପ୍ତ ଲିଙ୍କ୍",
      servicesTitle: "ଆମର ସେବା",
      contactTitle: "ଯୋଗାଯୋଗ କରନ୍ତୁ",
      address: "ନାରାୟଣପୁର, ଅଙ୍ଗୁଳାଇ, କେନ୍ଦ୍ରାପଡ଼ା, ଓଡ଼ିଶା, ଭାରତ",
      rights: "ସମସ୍ତ ଅଧିକାର ସୁରକ୍ଷିତ। ଶ୍ରୀ ବଳଦେବ ମ୍ୟୁଜିକାଲ।",
      locationText: "ନାରାୟଣପୁର, ଅଙ୍ଗୁଳାଇ, କେନ୍ଦ୍ରାପଡ଼ା, ଓଡ଼ିଶା",
    },
  },
};
