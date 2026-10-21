import { ServiceItem, PortfolioItem } from './types';

export const BRAND = {
  name: "VESPER WEDDING COMPANY",
  shortName: "VESPER",
  supportingLine: "WEDDING COMPANY",
  tagline: "Your story. Our care. A beautiful evening to remember.",
  eyebrow: "WEDDING PLANNING & DESIGN · UNITED ARAB EMIRATES",
  meaning: "Named after Vesper, the evening star that appears as daylight softens — marking the peaceful beginning of a new chapter.",
  location: "United Arab Emirates",
  coverage: "All over the UAE",
  contactPerson: "Neha & Adnan",
  founders: "Neha & Adnan",
  phone: "+971562854779",
  phoneDisplay: "+971 56 285 4779",
  whatsappNumber: "971562854779",
  whatsappUrl: "https://wa.me/971562854779?text=Hello%20Vesper%20Wedding%20Company%2C%20I%20would%20like%20to%20inquire%20about%20your%20wedding%20planning%20services.",
  // Client-supplied email as given in brief
  emailClientSupplied: "hello@vesperweddingcompany",
  // Note: Client supplied email is without a TLD. In production this should be configured with client's confirmed inbox (e.g. hello@vesperweddingcompany.com)
  domain: "https://www.vesperweddingcompany.com",
  emirates: [
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman",
    "Umm Al-Quwain",
    "Ras Al Khaimah",
    "Fujairah"
  ],
};

export const FOUNDERS = {
  names: "Neha & Adnan",
  title: "Co-Founders & Lead Planners",
  photos: {
    veil: "/images/founders/neha-adnan-veil.jpg",
    dance: "/images/founders/neha-adnan-dance.jpg",
  },
  whyVesper: {
    eyebrow: "Why “Vesper”?",
    title: "A Quiet, Constant Light Guiding You to Your Big Day",
    meaning:
      "Vesper is the evening star, the first light to appear as the sky turns dark. It doesn’t shout for attention. It simply shines, calm and steady, reminding you that you’re never lost. We’ve always loved the stars, and that’s exactly what we hope to be for every couple we meet: a quiet, constant light guiding you to your big day.",
  },
  story: {
    tagline: "You focus on each other. We’ll hold everything else.",
    introHeading: "Hi, we’re Neha & Adnan.",
    subheading: "Newlyweds, eldest children in our families, and the founders of Vesper Wedding Company.",
    eldestParagraph:
      "We’re newlyweds, and we’re both the eldest children in our families. If you’re the eldest too, you’ll know the feeling. You want everything to be perfect, not just for yourself but for everyone you love. You want your parents to be proud, your family to be happy, and every guest to feel welcome. Somewhere along the way, it becomes easy to forget that it’s your day too.",
    planningParagraph:
      "When it came to our own wedding, we planned every part of it ourselves. There were late nights with spreadsheets, endless calls with family and vendors, and the many “small” details that never really felt small. There were moments of excitement, and honestly, moments of exhaustion. We carried a lot, quietly, because that’s what we were used to doing.",
    danceParagraph:
      "And then came one moment we’ll never forget. In a dim room, under a single spotlight, with soft smoke drifting across the floor, we danced. For those few minutes, everything else disappeared: the planning, the pressure, the people watching. It was just the two of us, lost in our own world. That’s when we realised this is what a wedding is truly about.",
    missionParagraph:
      "That’s the moment we want to give back. We started Vesper Wedding Company so couples don’t have to carry it all alone. We take care of everything in between: the planning, the coordination, the family balancing, and every little detail that quietly adds up. We give your wedding the same care and attention we wished someone had given ours.",
    closingPromise:
      "With us by your side, you can feel secure, supported and truly relieved. You can be present, enjoy every moment, and look back knowing it was all exactly how you dreamed it would be.",
    quote: "You focus on each other. We’ll hold everything else.",
    signoff: "Let us be your guiding star. ✨",
  },
};

export const ABOUT_COPY = {
  opening:
    "Vesper is the evening star, the first light to appear as the sky turns dark. It doesn’t shout for attention. It simply shines, calm and steady, reminding you that you’re never lost. That quiet, constant light is what we promise to be for every couple we meet.",
  paragraphs: [
    "Vesper Wedding Company was created in the UAE, a place where cultures meet and celebrations are as diverse as the couples who plan them. We saw that many couples love the idea of their wedding but feel overwhelmed by the reality: dozens of suppliers, endless decisions, and the worry that something will slip on the day. We also saw that in the rush of planning, couples often forget to prepare themselves.",
    "So we built Vesper around both. We act as your single point of contact, bringing together the right venues, designers, caterers, photographers, and entertainers for your vision and budget. From your first conversation to the final goodbye, we guide the planning, coordinate every detail, and stay calm when it matters most.",
    "And through Bridal Luxe Prep and Groom Luxe Prep, we prepare you as well. In the months before your wedding, our skincare, styling, and fitness consultations help you arrive at every celebration, from the first event to the last, feeling confident, comfortable, and completely yourself.",
    "We believe a wedding should feel like you, not like a template. That means listening closely, being honest about budgets and timelines, and giving every celebration, large or intimate, the same attention.",
    "Your story. Our care. A beautiful evening to remember."
  ]
};

export const PHILOSOPHY_PILLARS = [
  {
    title: "Clear, Thoughtful Planning",
    subtitle: "A Single Point of Contact",
    description: "Instead of managing dozens of disconnected suppliers, you have one calm, dedicated partner steering communications, timeline alignment, and vendor contracts from day one."
  },
  {
    title: "Honest Budgeting",
    subtitle: "Clarity Without Surprises",
    description: "Transparent guidance aligned strictly with your vision and realistic costs across the UAE market, ensuring intentional investment where it creates the greatest impact."
  },
  {
    title: "Composed Coordination",
    subtitle: "Calm When It Matters Most",
    description: "On the day, while you step into your celebration, our team orchestrates every transition behind the scenes with quiet precision, discretion, and warmth."
  },
  {
    title: "Personal Preparation",
    subtitle: "Caring for the Couple",
    description: "Wedding planning often leaves the couple depleted. Through our proprietary Luxe Prep consultations, we help both bride and groom arrive rested, confident, and radiant."
  }
];

export const PLANNING_JOURNEY = [
  {
    step: "01",
    phase: "Discover",
    title: "Listening & Vision Alignment",
    description: "We begin with an in-depth consultation to understand your shared story, cultural traditions, preferred aesthetic, and guest expectations across the UAE."
  },
  {
    step: "02",
    phase: "Design",
    title: "Atmosphere & Vendor Curation",
    description: "We assemble a tailored team of trusted venues, floral designers, lighting architects, and caterers, translating your aesthetic into cohesive mood boards and floorplans."
  },
  {
    step: "03",
    phase: "Coordinate",
    title: "Logistics & Luxe Prep",
    description: "Timelines, production schedules, and supplier handoffs are mapped out with rigorous detail, while our Luxe Prep programme prepares both bride and groom in parallel."
  },
  {
    step: "04",
    phase: "Celebrate",
    title: "A Beautiful Evening to Remember",
    description: "As the day softens and the evening star appears, every element you envisioned flows effortlessly, leaving you free to immerse in every irreplaceable moment."
  }
];

export const SERVICES: ServiceItem[] = [
  // A. Wedding Planning
  {
    id: "full-wedding-planning",
    name: "Full Wedding Planning",
    category: "planning",
    categoryLabel: "Wedding Planning",
    shortDescription: "Complete, end-to-end guidance from initial concept to the final farewell.",
    fullDescription: "Designed for couples who desire comprehensive support. We act as your single dedicated point of contact, orchestrating venue curation, budgeting, vendor procurement, aesthetic direction, and meticulous logistics across the UAE.",
    features: [
      "Dedicated single point of contact throughout the entire journey",
      "Venue scouting and contract negotiation across all seven Emirates",
      "Comprehensive master budget architecture and payment scheduling",
      "Full vendor curation (florals, catering, lighting, entertainment)",
      "Comprehensive production timeline and rehearsal direction",
      "Full wedding-day presence with lead planner and coordination team"
    ],
    image: "/images/hero/vesper-blue-hour-reception.jpg",
    imageAlt: "Luxury candlelit wedding reception courtyard in the UAE",
    badge: "Signature Service",
    consultationFocus: "Full Wedding Planning Consultation"
  },
  {
    id: "partial-planning",
    name: "Partial Planning & Styling",
    category: "planning",
    categoryLabel: "Wedding Planning",
    shortDescription: "Targeted support and aesthetic cohesion for couples who have started their planning.",
    fullDescription: "Ideal for couples who have secured their venue or key vendors but need an experienced partner to refine the styling, address planning gaps, integrate remaining suppliers, and align the run-of-show.",
    features: [
      "Review of existing contracts and vendor agreements",
      "Sourcing of remaining specialized suppliers and creative talent",
      "Aesthetic harmonisation and tablescape styling direction",
      "Master logistics schedule and timeline assembly",
      "Pre-wedding coordination handover 8–10 weeks prior"
    ],
    image: "/images/weddings/reception-tablescape-candlelight.jpg",
    imageAlt: "Restrained luxury reception tablescape with ivory linen and taper candles",
    consultationFocus: "Partial Planning & Styling Inquiry"
  },
  {
    id: "wedding-day-coordination",
    name: "Wedding-Day Coordination",
    category: "planning",
    categoryLabel: "Wedding Planning",
    shortDescription: "Flawless on-the-day execution so you can simply be present.",
    fullDescription: "We step in 4 to 6 weeks before your celebration to take over all vendor communications, finalize the detailed run-of-show, conduct rehearsals, and ensure that every moment unfolds calmly and seamlessly.",
    features: [
      "Thorough handover meeting and logistics audit 6 weeks prior",
      "Master day-of production schedule distributed to all suppliers",
      "Ceremony rehearsal direction with family and bridal party",
      "Full-day on-site presence from morning setup to midnight wrap",
      "Discreet troubleshooting and emergency kit on hand"
    ],
    image: "/images/weddings/ceremony-floral-arch.jpg",
    imageAlt: "Ceremony setup with sculptural white floral arch and marble aisle",
    badge: "Essential Care",
    consultationFocus: "Wedding-Day Coordination Inquiry"
  },
  {
    id: "wedding-management",
    name: "Wedding Management & Advisory",
    category: "planning",
    categoryLabel: "Wedding Planning",
    shortDescription: "Structured guidance, vendor reviews, and production oversight.",
    fullDescription: "For couples who enjoy handling negotiations themselves but need seasoned luxury wedding producers to audit timelines, inspect venue layouts, review technical riders, and ensure flawless operational feasibility.",
    features: [
      "Detailed run-of-show review and stress-testing",
      "Floorplan flow and guest movement analysis",
      "Vendor delivery schedules and load-in permits compliance",
      "Strategic milestone check-ins throughout the engagement"
    ],
    image: "/images/details/white-ranunculus-garden-rose.jpg",
    imageAlt: "Refined botanical details and textured ivory florals",
    consultationFocus: "Wedding Management Advisory"
  },

  // B. Design and Styling
  {
    id: "wedding-decoration-stage-design",
    name: "Wedding Decoration & Stage Design",
    category: "design",
    categoryLabel: "Design & Styling",
    shortDescription: "Bespoke architectural stages and scenography rooted in contemporary elegance.",
    fullDescription: "We design architectural ceremony backdrops, Kosha setups, and stages that honor tradition while maintaining a refined, modern luxury aesthetic tailored to your venue's proportions.",
    features: [
      "Custom 3D concept renders and architectural elevation sketches",
      "Curated textile draping, backdrop paneling, and custom fabrication",
      "Integrated architectural lighting and amber wash illumination",
      "Flawless stage integration with surrounding guest seating"
    ],
    image: "/images/weddings/cultural-celebration-stage.jpg",
    imageAlt: "Grand floral wedding stage design with glowing lanterns and architectural arches",
    consultationFocus: "Stage & Scenography Design"
  },
  {
    id: "floral-decoration",
    name: "Floral Decoration & Art Direction",
    category: "design",
    categoryLabel: "Design & Styling",
    shortDescription: "Sculptural, botanical installations using premium seasonal blooms.",
    fullDescription: "From cloud-like ceremonial arches and hanging ceiling installations to nuanced tablescape floral vessels, we partner with premier floral artists to create organic, fragrant, and visually breathtaking botanical environments.",
    features: [
      "Selection of premium imported garden blooms, orchids, and foliage",
      "Sculptural ceremonial arches, canopies, and suspended installations",
      "Bespoke tablescape compotes, bud vases, and floral runners",
      "Bridal bouquet and party florals crafted to bespoke proportions"
    ],
    image: "/images/details/white-ranunculus-garden-rose.jpg",
    imageAlt: "Close-up macro of premium white garden roses and jasmine vine",
    consultationFocus: "Floral Art Direction Inquiry"
  },
  {
    id: "event-styling",
    name: "Event Styling & Tablescape Design",
    category: "design",
    categoryLabel: "Design & Styling",
    shortDescription: "Nuanced, multi-sensory table art, stationery, and ambient lighting.",
    fullDescription: "A celebration is experienced through touch and sight. We curate every guest touchpoint: textured Belgian linens, artisanal charger plates, bespoke paper suites with calligraphed menus, and hand-dipped candles.",
    features: [
      "Custom curation of linens, chargers, flatware, and crystal glassware",
      "Handcrafted paper goods, wax seals, and bespoke menus",
      "Ambient candlelight architecture with hurricane and taper candles",
      "Cohesive aesthetic direction across every table and lounge zone"
    ],
    image: "/images/weddings/reception-tablescape-candlelight.jpg",
    imageAlt: "Detailed candlelit tablescape with custom stationery and gold flatware",
    consultationFocus: "Tablescape & Styling Inquiry"
  },

  // C. Wedding Celebrations
  {
    id: "engagement-ceremonies",
    name: "Engagement Ceremonies",
    category: "celebrations",
    categoryLabel: "Wedding Celebrations",
    shortDescription: "Intimate and meaningful beginnings surrounded by immediate family.",
    fullDescription: "Mark the announcement of your union with an elegant celebration that reflects your personal taste, featuring tailored décor, intimate dining, and seamless guest hospitality.",
    features: [
      "Intimate venue selection (boutique villas, private dining rooms)",
      "Bespoke ring ceremony backdrop and personalized floral accents",
      "Boutique catering direction and beverage pairing",
      "Professional photo & video documentation coordination"
    ],
    image: "/images/weddings/intimate-coastal-dinner.jpg",
    imageAlt: "Coastal evening celebration with private dining and skyline views",
    consultationFocus: "Engagement Ceremony Inquiry"
  },
  {
    id: "reception-management",
    name: "Reception Management",
    category: "celebrations",
    categoryLabel: "Wedding Celebrations",
    shortDescription: "Flawless hospitality, grand entrances, dinner flow, and celebration.",
    fullDescription: "The evening reception demands precise coordination between culinary courses, toasts, musical transitions, and first dances. We manage every beat with quiet efficiency.",
    features: [
      "Course-by-course synchronization with executive culinary teams",
      "Grand entrance, cake cutting, and first dance cue management",
      "VIP and family guest protocol management",
      "AV and lighting cue coordination with sound technicians"
    ],
    image: "/images/hero/vesper-blue-hour-reception.jpg",
    imageAlt: "Evening reception dining experience under ambient twilight",
    consultationFocus: "Reception Management Inquiry"
  },
  {
    id: "cultural-functions",
    name: "Haldi, Mehendi & Sangeet Events",
    category: "celebrations",
    categoryLabel: "Wedding Celebrations",
    shortDescription: "Culturally rich, vibrant celebrations handled with authenticity and restraint.",
    fullDescription: "We honor the joy, music, and deep heritage of South Asian and regional pre-wedding festivities while applying an elevated editorial eye to staging, seating, and guest comfort.",
    features: [
      "Culturally attuned stage styling, seating lounges, and dance floors",
      "Artist and dhol management, choreography sound checks",
      "Mehendi artist coordination and guest hospitality stations",
      "Traditional floral integration (marigolds, tuberoses, jasmine)"
    ],
    image: "/images/weddings/cultural-celebration-stage.jpg",
    imageAlt: "Opulent multicultural wedding stage with traditional and modern floral artistry",
    consultationFocus: "Cultural Pre-Wedding Events"
  },
  {
    id: "intimate-celebrations",
    name: "Intimate Celebrations & Micro-Weddings",
    category: "celebrations",
    categoryLabel: "Wedding Celebrations",
    shortDescription: "Deeply personal gatherings where every detail can be elevated.",
    fullDescription: "For weddings of 20 to 60 cherished guests. We craft hyper-personalized experiences: private villa courtyards, secluded beach coves, and bespoke culinary degustations.",
    features: [
      "Access to private villas, desert sanctuaries, and secret gardens",
      "Hyper-detailed tablescape design and bespoke guest gifts",
      "Chef-driven tasting menus and personalized wine pairing",
      "Unrushed, heartfelt pacing and conversational atmospheres"
    ],
    image: "/images/weddings/intimate-coastal-dinner.jpg",
    imageAlt: "Candlelit coastal terrace dinner for intimate wedding guests",
    consultationFocus: "Intimate Celebration Inquiry"
  },
  {
    id: "destination-weddings",
    name: "Destination Weddings across the UAE",
    category: "celebrations",
    categoryLabel: "Wedding Celebrations",
    shortDescription: "Welcoming international couples and guests to extraordinary UAE settings.",
    fullDescription: "From the serene golden dunes of Ras Al Khaimah and Abu Dhabi to iconic coastal Dubai resorts and mountain sanctuaries in Fujairah, we provide full concierge and destination management.",
    features: [
      "Comprehensive airport transfers and guest hospitality suites",
      "Multi-day event itinerary creation (welcome dinners, pool days, recovery brunches)",
      "Local permit procurement and desert conservation area approvals",
      "Bilingual vendor liaison and international guest communications"
    ],
    image: "/images/destinations/uae-desert-twilight-dinner.jpg",
    imageAlt: "Twilight wedding dinner in the UAE desert dunes with ambient lanterns",
    consultationFocus: "Destination Wedding Inquiry"
  },
  {
    id: "private-events",
    name: "Private Celebrations & Anniversaries",
    category: "celebrations",
    categoryLabel: "Wedding Celebrations",
    shortDescription: "Bespoke milestone gatherings planned with the same high-touch care.",
    fullDescription: "For renewal of vows, intimate anniversaries, and high-profile private dinners requiring discreet, refined event design and quiet execution across the UAE.",
    features: [
      "Confidential planning and strict privacy protocols",
      "Custom scenic transformations of private residences or yachts",
      "Curated live musicians and private culinary artists"
    ],
    image: "/images/weddings/reception-tablescape-candlelight.jpg",
    imageAlt: "Candlelit private milestone celebration dinner",
    consultationFocus: "Private Event Inquiry"
  },

  // D. Creative and Event Services
  {
    id: "photography-videography",
    name: "Photography & Videography Curation",
    category: "creative",
    categoryLabel: "Creative Services",
    shortDescription: "Pairing you with world-class editorial visual storytellers.",
    fullDescription: "We partner with top-tier fine art wedding photographers and cinematic filmmakers whose editorial sensibility matches Vesper's aesthetic, ensuring your memories are preserved with timeless grace.",
    features: [
      "Curated photographer portfolios matching your aesthetic preference",
      "Creative brief alignment and shot-list curation",
      "Drone permits and cultural sensitivity guidance",
      "Pre-wedding couple session and editorial coverage planning"
    ],
    image: "/images/bridal/bridal-editorial-portrait.jpg",
    imageAlt: "Refined bridal editorial portrait in soft natural window light",
    consultationFocus: "Photography & Cinema Curation"
  },
  {
    id: "entertainment-artist-management",
    name: "Entertainment & Artist Management",
    category: "creative",
    categoryLabel: "Creative Services",
    shortDescription: "Acoustic strings, contemporary harpists, jazz ensembles, and headline performers.",
    fullDescription: "Music and performance set the emotional tempo. We curate artists who elevate the atmosphere without overpowering it, from classical ceremony musicians to sophisticated evening DJs.",
    features: [
      "Acoustic harp, cello, and string quartets for ceremony and cocktails",
      "Contemporary jazz ensembles and Arabic acoustic instrumentalists",
      "Premier wedding DJs with curated, non-generic setlists",
      "Technical rider management, sound engineering, and stage lighting"
    ],
    image: "/images/hero/vesper-blue-hour-reception.jpg",
    imageAlt: "Atmospheric evening reception with ambient live sound",
    consultationFocus: "Artist & Entertainment Management"
  },
  {
    id: "corporate-events",
    name: "Corporate & Luxury Brand Events",
    category: "creative",
    categoryLabel: "Creative Services",
    shortDescription: "High-level gala dinners, brand showcases, and VIP hospitality.",
    fullDescription: "Applying our couture wedding sensibility to luxury corporate dinners, fragrance launches, and gala evenings where elevated design and seamless discretion are non-negotiable.",
    features: [
      "Brand aesthetic translation into spatial experience",
      "Precision timekeeping and executive guest handling",
      "High-end bespoke gifting and personalized collateral"
    ],
    image: "/images/weddings/reception-tablescape-candlelight.jpg",
    imageAlt: "Sophisticated corporate gala dinner tablescape with candles",
    consultationFocus: "Luxury Corporate Inquiry"
  },

  // E. Luxe Prep
  {
    id: "bridal-luxe-prep",
    name: "Bridal Luxe Prep",
    category: "luxe-prep",
    categoryLabel: "Luxe Prep Programme",
    shortDescription: "A guided pre-wedding programme combining skincare, styling, and fitness consultations.",
    fullDescription: "A guided pre-wedding preparation programme designed to help the bride look and feel her best across every celebration. In the months before your wedding, our three-part consultation guides your wellness, style, and composure so you arrive at every event feeling confident, comfortable, and completely yourself.",
    features: [
      "Skincare Consultation: A personalized routine to prepare your skin in the months before the wedding, focused on hydration, natural radiance, and calm skin health.",
      "Styling Consultation: Comprehensive outfit, jewellery, veil, and look guidance for every event, from the engagement and pre-wedding functions to the grand reception.",
      "Fitness & Composure Consultation: A realistic, restorative plan to build strength, posture, and poise ahead of your celebrations without unsustainable regimens."
    ],
    image: "/images/details/bridal-luxe-prep-western.jpg",
    imageAlt: "Bridal Luxe Prep - pre-wedding skincare, styling, and composure suite",
    badge: "Vesper Exclusive",
    consultationFocus: "Bridal Luxe Prep Consultation"
  },
  {
    id: "groom-luxe-prep",
    name: "Groom Luxe Prep",
    category: "luxe-prep",
    categoryLabel: "Luxe Prep Programme",
    shortDescription: "Tailored grooming, bespoke styling, and realistic conditioning for the groom.",
    fullDescription: "The same three-part programme, specifically tailored for the groom. Often overlooked in wedding planning, the groom deserves dedicated guidance to look sharp, feel composed, and carry himself with natural confidence through every ceremony.",
    features: [
      "Skincare & Grooming Consultation: Practical guidance on complexion clarity, beard grooming or clean shave regimes, and salon timing ahead of the big day.",
      "Styling & Dressing Consultation: Expert advice on tuxedo cuts, bespoke tailoring, lapel styles, shoe selection, cufflinks, and cultural attire adjustments.",
      "Fitness & Energy Consultation: A realistic conditioning and posture plan tailored to fit demanding professional schedules so you look and feel your physical best."
    ],
    image: "/images/bridal/groom-tailored-tuxedo.jpg",
    imageAlt: "Groom in tailored midnight navy tuxedo adjusting cufflinks",
    badge: "Vesper Exclusive",
    consultationFocus: "Groom Luxe Prep Consultation"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "dubai-iconic-skyline-reception",
    title: "Iconic Dubai Skyline Evening Reception",
    category: "tablescapes",
    categoryLabel: "Reception Tablescapes",
    conceptSubtitle: "Editorial Design Concept · Downtown Dubai",
    image: "/images/portfolio/dubai-iconic-skyline-wedding.jpg",
    imageAlt: "Breathtaking luxury open-air wedding reception overlooking Burj Khalifa and Downtown Dubai skyline",
    aspectRatio: "wide",
    atmosphere: "Iconic Dubai skyline, ambient candlelight, palatial blue-hour elegance",
    locationContext: "Open-Air Palatial Terrace, Downtown Dubai",
    palette: ["#1B243A", "#E9D9C2", "#F8F5EF", "#34352F"],
    description: "An extraordinary twilight celebration overlooking the iconic Dubai skyline and Burj Khalifa, featuring candlelit banquets dressed in cascading white orchids and roses.",
    isConceptEditorial: true
  },
  {
    id: "dusk-courtyard-reception",
    title: "Twilight Palatial Reception",
    category: "tablescapes",
    categoryLabel: "Reception Tablescapes",
    conceptSubtitle: "Editorial Design Concept · Dubai",
    image: "/images/hero/vesper-blue-hour-reception.jpg",
    imageAlt: "Candlelit luxury wedding reception in an open-air palatial courtyard at dusk",
    aspectRatio: "wide",
    atmosphere: "Blue hour grandeur, warm candlelight, quiet sophistication",
    locationContext: "Open-Air Palatial Courtyard, Dubai",
    palette: ["#1B243A", "#E9D9C2", "#F8F5EF", "#34352F"],
    description: "An architectural exploration of candlelight against twilight stone arches, featuring long banquet tables dressed in ivory silk and sculptural white florals.",
    isConceptEditorial: true
  },
  {
    id: "marble-ceremony-pavilion",
    title: "The Architectural Floral Arch",
    category: "ceremonies",
    categoryLabel: "Wedding Ceremonies",
    conceptSubtitle: "Editorial Design Concept · Abu Dhabi",
    image: "/images/weddings/ceremony-floral-arch.jpg",
    imageAlt: "Monumental ceremony floral arch framed by contemporary geometric mashrabiya panels",
    aspectRatio: "landscape",
    atmosphere: "Pure, monumental, serene natural light",
    locationContext: "Private Pavilion, Abu Dhabi",
    palette: ["#FFFFFF", "#F8F5EF", "#D4BE9F", "#1B243A"],
    description: "A monumental ceremonial installation composed of cascading white Phalaenopsis orchids, delphiniums, and white garden roses along a pristine marble aisle.",
    isConceptEditorial: true
  },
  {
    id: "desert-twilight-sanctuary",
    title: "Dune Sanctuary Evening Dinner",
    category: "destination",
    categoryLabel: "Destination Celebrations",
    conceptSubtitle: "Editorial Design Concept · Ras Al Khaimah",
    image: "/images/destinations/uae-desert-twilight-dinner.jpg",
    imageAlt: "Canopied luxury dinner in the serene desert dunes with hanging lanterns and low seating",
    aspectRatio: "landscape",
    atmosphere: "Intimate desert romance under the evening star",
    locationContext: "Secluded Desert Reserve, Ras Al Khaimah",
    palette: ["#1B243A", "#E9D9C2", "#34352F"],
    description: "A softly canopied banquet table set amidst sweeping desert sands, illuminated by hand-beaten lanterns and hundreds of amber candles as night descends.",
    isConceptEditorial: true
  },
  {
    id: "bridal-grace-portrait",
    title: "The Serene Bridal Study",
    category: "bridal",
    categoryLabel: "Bridal Portraits",
    conceptSubtitle: "Editorial Design Concept · Fine Art Study",
    image: "/images/bridal/bridal-editorial-portrait.jpg",
    imageAlt: "Refined bridal editorial portrait in soft natural window light",
    aspectRatio: "portrait",
    atmosphere: "Poised, effortless grace and luminous natural light",
    locationContext: "Private Getting-Ready Suite",
    palette: ["#F8F5EF", "#E9D9C2", "#34352F"],
    description: "A study in restrained bridal elegance: minimal back-draped crepe gown, subtle diamond accents, and natural dewy radiance captured in morning daylight.",
    isConceptEditorial: true
  },
  {
    id: "tailored-groom-study",
    title: "The Composed Groom Study",
    category: "groom",
    categoryLabel: "Groom Preparation",
    conceptSubtitle: "Editorial Design Concept · Fine Art Study",
    image: "/images/bridal/groom-tailored-tuxedo.jpg",
    imageAlt: "Groom in tailored midnight navy tuxedo adjusting bespoke cufflinks",
    aspectRatio: "portrait",
    atmosphere: "Quiet confidence, timeless tailoring, understated luxury",
    locationContext: "Gentlemen's Dressing Suite",
    palette: ["#1B243A", "#8990A0", "#FFFFFF"],
    description: "Tailored midnight navy wool, black silk grosgrain lapels, and custom heirloom cufflinks: quiet sartorial excellence for the modern groom.",
    isConceptEditorial: true
  },
  {
    id: "candlelight-belgian-linen",
    title: "Restrained Tablescape & Paper Art",
    category: "tablescapes",
    categoryLabel: "Reception Tablescapes",
    conceptSubtitle: "Editorial Design Concept · Styling Study",
    image: "/images/weddings/reception-tablescape-candlelight.jpg",
    imageAlt: "Belgian linen tablescape with taper candles, matte gold cutlery and botanical compotes",
    aspectRatio: "landscape",
    atmosphere: "Warm, tactile, conversational intimacy",
    locationContext: "Grand Dining Hall",
    palette: ["#E9D9C2", "#F8F5EF", "#34352F"],
    description: "Focusing on tactile richness: washed Belgian linen runners, tall glass hurricane sleeves, bespoke calligraphed menu suites, and matte gold cutlery.",
    isConceptEditorial: true
  },
  {
    id: "royal-indian-wedding-mandap",
    title: "Royal Indian Heritage Mandap",
    category: "cultural",
    categoryLabel: "Cultural Celebrations",
    conceptSubtitle: "Editorial Design Concept · Royal Indian Touch",
    image: "/images/weddings/indian-touch-wedding-mandap.jpg",
    imageAlt: "Opulent royal Indian wedding Mandap with fresh marigold garlands, mogra florals, brass urlis, and regal carved arches",
    aspectRatio: "wide",
    atmosphere: "Regal Indian wedding grandeur, auspicious marigolds, warm diya illumination",
    locationContext: "Grand Palatial Ballroom, UAE",
    palette: ["#E9D9C2", "#D4BE9F", "#B8860B", "#1B243A"],
    description: "An opulent Indian wedding celebration featuring a royal carved Mandap draped in cascading marigolds, fragrant white mogra, floating diya brass urlis, and ambient candlelight.",
    isConceptEditorial: true
  },
  {
    id: "botanical-fine-art-macro",
    title: "White Ranunculus & Jasmine",
    category: "stage-floral",
    categoryLabel: "Stage & Floral Design",
    conceptSubtitle: "Editorial Floral Study",
    image: "/images/details/white-ranunculus-garden-rose.jpg",
    imageAlt: "Macro floral detail of velvety white garden rose and fragrant jasmine vine",
    aspectRatio: "square",
    atmosphere: "Delicate botanical textures and natural dew",
    locationContext: "Floral Studio Atelier",
    palette: ["#FFFFFF", "#F8F5EF", "#8990A0"],
    description: "Close-up botanical artistry showcasing premium velvety garden roses, layered ranunculus, and sweet-scented jasmine vines designed for delicate tactile presence.",
    isConceptEditorial: true
  },
  {
    id: "coastal-candlelit-intimacy",
    title: "Coastal Terrace Intimate Dinner",
    category: "intimate",
    categoryLabel: "Intimate Events",
    conceptSubtitle: "Editorial Design Concept · Dubai Coastline",
    image: "/images/weddings/intimate-coastal-dinner.jpg",
    imageAlt: "Private dinner for twelve on a coastal terrace with candlelight and sea views",
    aspectRatio: "landscape",
    atmosphere: "Romantic, conversational, evening ocean breeze",
    locationContext: "Private Coastal Terrace, Dubai",
    palette: ["#1B243A", "#E9D9C2", "#F8F5EF"],
    description: "A single long banquet table set for 12 cherished guests overlooking the Persian Gulf, immersed in warm candlelight and gentle sea air.",
    isConceptEditorial: true
  },
  {
    id: "luxe-prep-morning-atelier",
    title: "Morning Composure & Luxe Prep",
    category: "bridal",
    categoryLabel: "Bridal & Couple Portraits",
    conceptSubtitle: "Editorial Design Concept · Luxe Prep Suite",
    image: "/images/details/bridal-groom-luxe-prep.jpg",
    imageAlt: "Bridal and Groom pre-wedding composure in arched sunlit dressing suite",
    aspectRatio: "portrait",
    atmosphere: "Peaceful pre-wedding morning composure and quiet luxury",
    locationContext: "Private Suite",
    palette: ["#F8F5EF", "#E9D9C2", "#1B243A"],
    description: "The calm before the celebration begins: an arched sunlit suite equipped for mindful skincare, bespoke styling, and peaceful pre-wedding composure.",
    isConceptEditorial: true
  }
];

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All Celebrations" },
  { id: "ceremonies", label: "Ceremonies" },
  { id: "tablescapes", label: "Tablescapes & Dining" },
  { id: "stage-floral", label: "Stage & Floral" },
  { id: "bridal", label: "Bridal Editorial" },
  { id: "groom", label: "Groom Editorial" },
  { id: "destination", label: "Destination" },
  { id: "intimate", label: "Intimate Dinners" },
  { id: "cultural", label: "Cultural Celebrations" }
];
