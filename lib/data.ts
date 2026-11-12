export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Private Villa" | "Penthouse" | "Modernist Residence" | "Bespoke Hospitality";
  location: string;
  specs: string;
  year: string;
  area: string;
  badge?: string;
  imageUrl: string;
  galleryImages?: string[];
  description: string;
  overview?: string;
  materials?: string[];
  features: string[];
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  location: string;
  style: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Living Pavilions" | "Artisan Joinery" | "Travertine & Stone" | "Private Penthouses" | "Country Estates";
  imageUrl: string;
  aspect: "landscape" | "portrait" | "square" | "wide";
  location?: string;
  year?: string;
  materials?: string;
  area?: string;
  featured?: boolean;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    title: "Built from context. Designed for permanence.",
    subtitle: "We craft modern architectural living spaces that harmonize organic materiality, ambient light, and human scale.",
    tag: "Architectural Living",
    location: "Highland Ridge Villa",
    style: "Warm Modernist",
    imageUrl: "/photos/1794461319858.jpg",
  },
  {
    id: "slide-2",
    title: "Haute living. Curated proportions.",
    subtitle: "Bespoke private estates and duplex penthouses engineered with structural clarity and tactile serenity.",
    tag: "Bespoke Penthouse",
    location: "The Sky Residence",
    style: "Minimalist Monolith",
    imageUrl: "/photos/1794461322646.jpg",
  },
  {
    id: "slide-3",
    title: "Seamless flow of light and texture.",
    subtitle: "Merging interior tranquility with external landscape through refined lines and artisanal joinery.",
    tag: "Courtyard Sanctuary",
    location: "The Glasshouse Estate",
    style: "Japandi & Architectural Sage",
    imageUrl: "/photos/1794461333481.jpg",
  },
];

export const PHILOSOPHY_TABS = [
  {
    id: "about",
    label: "About Us",
    title: "Crafting timeless architectural interiors since 2012.",
    description:
      "A&M HOME INTERIORS is a premier interior architecture studio specializing in high-end residential estates, luxury penthouses, and bespoke commercial spaces. We operate at the intersection of architectural discipline, tactile materiality, and spatial clarity.",
    quote: "A home should not be decorated; it should be composed like a silent symphony of light, proportion, and texture.",
    points: [
      "Rigorous contextual space planning tailored to private lifestyles",
      "Seamless integration of custom Italian stone and organic hardwoods",
      "End-to-end turnkey oversight from concept to white-glove styling",
    ],
    metricValue: "12+",
    metricLabel: "Years of Design Mastery",
  },
  {
    id: "journey",
    label: "Our Journey",
    title: "A decade of pioneering transformative architectural interiors.",
    description:
      "Beginning with boutique private commissions, A&M HOME INTERIORS has evolved into a nationally recognized interior architectural practice trusted by discerning patrons and forward-thinking architects.",
    quote: "True luxury is the quiet confidence of spaces that grow more beautiful with time.",
    points: [
      "Over 180 landmark private residences and estates delivered",
      "Collaborations with premier structural architects and lighting masters",
      "In-house atelier for bespoke millwork, metalwork, and stone detailing",
    ],
    metricValue: "180+",
    metricLabel: "Bespoke Residences Realized",
  },
  {
    id: "vision",
    label: "Our Vision",
    title: "Spaces that transcend transient decor trends.",
    description:
      "We design spaces that outlive aesthetic fads. Every surface, opening, and shadow is planned to create an enduring atmosphere of quiet luxury, deep comfort, and psychological well-being.",
    quote: "Simplicity is the final achievement after having played with vast amounts of notes.",
    points: [
      "Biophilic architectural integration connecting living areas to gardens",
      "Acoustic calibration for supreme peace and sound absorption",
      "Low-carbon, sustainably harvested timber and responsibly quarried stones",
    ],
    metricValue: "100%",
    metricLabel: "Custom Tailored Commissions",
  },
  {
    id: "standards",
    label: "The Standard",
    title: "White-glove precision and uncompromising craftsmanship.",
    description:
      "Our turnkey methodology guarantees that every detail—from hidden pocket door tolerances to custom cast bronze handles—meets the most demanding international architectural standards.",
    quote: "Excellence is not an added luxury; it is the fundamental baseline.",
    points: [
      "Photorealistic 3D architectural visualizations before fabrication",
      "Full procurement, logistics, customs, and white-glove installation",
      "Post-handover warranty and continuing private care concierge",
    ],
    metricValue: "45+",
    metricLabel: "Industry Accolades & Features",
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "obsidian-pavilion",
    title: "The Obsidian Pavilion",
    subtitle: "Monolithic luxury private residence with floor-to-ceiling glass",
    category: "Private Villa",
    location: "Highland Hills",
    specs: "680 m² • 3 Levels",
    year: "2024",
    area: "680 m²",
    badge: "Signature Commission",
    imageUrl: "/photos/1794461352147.jpg",
    galleryImages: [
      "/photos/1794461352147.jpg",
      "/photos/1794461618177.jpg",
      "/photos/1794461445300.jpg",
      "/photos/1794461520065.jpg",
      "/photos/1794461528224.jpg",
    ],
    description:
      "A dramatic dialogue between dark structural steel, fluted dark oak, and bookmatched Calacatta Viola marble. Designed to frame panoramic mountain views with recessed perimeter lighting.",
    overview:
      "Commissioned by a private collector, The Obsidian Pavilion sits perched above Highland Hills with monolithic restraint. Our studio oversaw full volumetric space planning, bespoke interior architectural detailing, custom-crafted Italian marble millwork, and museum-grade illumination.",
    materials: ["Smoked European Oak", "Calacatta Viola Marble", "Structural Blackened Steel", "Honed Basalt Pavers"],
    features: ["Double-height hearth room", "Floating cantilevered staircase", "Concealed chef's kitchen", "Wine cellar gallery"],
  },
  {
    id: "solaria-estate",
    title: "Villa Solaria",
    subtitle: "Sun-drenched architectural sanctuary with roman travertine",
    category: "Private Villa",
    location: "Green Valley Ridge",
    specs: "820 m² • 2 Levels",
    year: "2024",
    area: "820 m²",
    badge: "Architecture Award",
    imageUrl: "/photos/1794461360288.jpg",
    galleryImages: [
      "/photos/1794461360288.jpg",
      "/photos/1794461435215.jpg",
      "/photos/1794461530694.jpg",
      "/photos/1794461535928.jpg",
      "/photos/1794461546702.jpg",
    ],
    description:
      "Harmonious Mediterranean minimalism featuring honed travertine terraces, sunken olive courtyards, and organic curved walls that soften brutalist proportions.",
    overview:
      "Villa Solaria balances sculptural mass with warm daylight. We engineered seamless transitions between the indoor living salons and shaded outdoor courtyards, accented by bespoke Roman travertine slabs and soft plaster finishes.",
    materials: ["Navona Roman Travertine", "Hand-troweled Lime Plaster", "Bleached White Oak", "Aged Brass Fixtures"],
    features: ["Reflecting water court", "Sunken conversational pit", "Artisan plaster walls", "Integrated smart climate"],
  },
  {
    id: "horizon-penthouse",
    title: "The Horizon Duplex",
    subtitle: "Refined metropolitan penthouse with panoramic skyline vistas",
    category: "Penthouse",
    location: "Skyline District",
    specs: "450 m² • 2 Levels",
    year: "2023",
    area: "450 m²",
    badge: "Urban Distinction",
    imageUrl: "/photos/1794461364033.jpg",
    galleryImages: [
      "/photos/1794461364033.jpg",
      "/photos/1794461567843.jpg",
      "/photos/1794461584456.jpg",
      "/photos/1794461593670.jpg",
      "/photos/1794461596924.jpg",
    ],
    description:
      "A serene urban retreat high above the city. Custom blackened bronze island, acoustic fluted timber acoustic panels, and minimalist bespoke lighting fixtures.",
    overview:
      "Spanning two uppermost levels of a metropolitan tower, this duplex was stripped back to concrete slabs and recomposed with tailor-made acoustic millwork, monolithic bronze culinary counters, and double-height custom glazing.",
    materials: ["Patinated Architectural Bronze", "Acoustic Slatted Ash", "Nero Marquina Marble", "Belgian Linen Textiles"],
    features: ["360° Glass gallery", "Private rooftop pool lounge", "Primary suite with dual dressing halls", "Custom bronze fireplace"],
  },
  {
    id: "forest-sanctuary",
    title: "Forest Edge Pavilion",
    subtitle: "Biophilic modernism immersed in tranquil indigenous woodland",
    category: "Modernist Residence",
    location: "Pine Reserve",
    specs: "520 m² • Single Level",
    year: "2023",
    area: "520 m²",
    badge: "Eco-Luxury",
    imageUrl: "/photos/1794461366967.jpg",
    galleryImages: [
      "/photos/1794461366967.jpg",
      "/photos/1794461599351.jpg",
      "/photos/1794461631162.jpg",
      "/photos/1794461634253.jpg",
      "/photos/1794461641535.jpg",
    ],
    description:
      "Seamless indoor-outdoor living pavilion featuring green slate floors, expansive sliding pocket doors, and sustainable cross-laminated timber beams.",
    overview:
      "Embedded in ancient pine woodland, the Forest Edge Pavilion blurs structural boundaries with invisible floor-to-ceiling pocket sliders, tactile timber ceilings, and geothermal floor warming throughout.",
    materials: ["Cross-Laminated Timber", "Rough-Hewn Green Slate", "Cast Glass Screens", "Brushed Gunmetal"],
    features: ["Zero-threshold transitions", "Zen gravel meditation room", "Natural radiant geothermal heating", "Library reading lounge"],
  },
  {
    id: "kigali-lounge",
    title: "The Atelier Residence",
    subtitle: "Bespoke residential haven with bespoke artisan joinery",
    category: "Modernist Residence",
    location: "Old Town Quarter",
    specs: "390 m² • 2 Levels",
    year: "2024",
    area: "390 m²",
    badge: "Craft Heritage",
    imageUrl: "/photos/1794461373777.jpg",
    galleryImages: [
      "/photos/1794461373777.jpg",
      "/photos/1794461645076.jpg",
      "/photos/1794461665325.jpg",
      "/photos/1794461688606.jpg",
      "/photos/1794461697679.jpg",
    ],
    description:
      "Refined craft-first interior integrating hand-carved local timber accents, bronze hardware, linen wall-coverings, and warm museum-grade accent lighting.",
    overview:
      "Designed as a tranquil sanctuary for an architect and artist couple, this residence features hand-joined architectural cabinetry, customized bronze hardware, and soft, indirect illumination.",
    materials: ["Malawian Teak Accents", "Raw Silk Wall Panels", "Brushed Champagne Bronze", "Polished Terrazzo"],
    features: ["Custom bespoke dining table", "Sculptural fireplace", "Tea ceremony lounge", "Private terrace garden"],
  },
  {
    id: "elysian-villa",
    title: "Elysian Glasshouse",
    subtitle: "Crisp white stone villa with seamless courtyard reflection pools",
    category: "Private Villa",
    location: "Lakeview Plateau",
    specs: "750 m² • 2 Levels",
    year: "2024",
    area: "750 m²",
    badge: "Master Collection",
    imageUrl: "/photos/1794461431811.jpg",
    galleryImages: [
      "/photos/1794461431811.jpg",
      "/photos/1794461701749.jpg",
      "/photos/1794461707791.jpg",
      "/photos/1794461710939.jpg",
      "/photos/1794461731174.jpg",
    ],
    description:
      "Luminous geometry defined by pure limestone volumes, water courtyards, and ethereal sheer drapery that catches natural lakeside breezes.",
    overview:
      "Perched on Lakeview Plateau, Elysian Glasshouse stands as an ode to sunlight and tranquility. The double-height great room flows seamlessly into an outdoor culinary pavilion and private reflection pools.",
    materials: ["Portuguese Moleanos Limestone", "Extra-Clear Low-Iron Glass", "Brushed Nickel Detailing", "Pure Linen Drapery"],
    features: ["Infinity pool connection", "Private gallery corridor", "Bespoke master spa", "Outdoor culinary pavilion"],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Double-Height Travertine Hearth & Living Pavilion",
    category: "Living Pavilions",
    aspect: "landscape",
    imageUrl: "/photos/1794461435215.jpg",
    location: "Villa Solaria, Lilongwe",
    year: "2024",
    materials: "Navona Travertine & Smoked Oak",
    area: "140 m² Pavilion",
    featured: true,
  },
  {
    id: "gal-2",
    title: "Bespoke Fluted Oak Island & Chef Atelier",
    category: "Artisan Joinery",
    aspect: "square",
    imageUrl: "/photos/1794461438372.jpg",
    location: "Highland Ridge Estate",
    year: "2024",
    materials: "European White Oak & Calacatta Viola",
    area: "85 m² Culinary Suite",
  },
  {
    id: "gal-3",
    title: "Minimalist Master Bath with Freestanding Stone Tub",
    category: "Travertine & Stone",
    aspect: "portrait",
    imageUrl: "/photos/1794461445300.jpg",
    location: "The Glasshouse Residence",
    year: "2023",
    materials: "Monolithic Roman Travertine",
    area: "48 m² Spa Wing",
  },
  {
    id: "gal-4",
    title: "Skyline Duplex Lounge with Curated Sculpture",
    category: "Private Penthouses",
    aspect: "landscape",
    imageUrl: "/photos/1794461464558.jpg",
    location: "Skyline Duplex, Metropolitan",
    year: "2024",
    materials: "Brushed Bronze & Belgian Linen",
    area: "520 m² Duplex",
    featured: true,
  },
  {
    id: "gal-5",
    title: "Architectural Bookcase & Concealed Bar Joinery",
    category: "Artisan Joinery",
    aspect: "square",
    imageUrl: "/photos/1794461500006.jpg",
    location: "The Obsidian Pavilion",
    year: "2024",
    materials: "Charred Ash & Polished Brass",
    area: "Study & Cigar Salon",
  },
  {
    id: "gal-6",
    title: "Country Estate Courtyard & Integrated Reflection Pool",
    category: "Country Estates",
    aspect: "portrait",
    imageUrl: "/photos/1794461520065.jpg",
    location: "Nyambadwe Hillside, Blantyre",
    year: "2023",
    materials: "Local Granite & Teak Pergola",
    area: "1,200 m² Estate",
  },
  {
    id: "gal-7",
    title: "Sunken Conversation Pit with Museum Lighting",
    category: "Living Pavilions",
    aspect: "landscape",
    imageUrl: "/photos/1794461528224.jpg",
    location: "Area 43 Residence",
    year: "2024",
    materials: "Wool Bouclé & Pietra Serena",
    area: "90 m² Living Core",
  },
  {
    id: "gal-8",
    title: "Bookmatched Calacatta Viola Vanity Suite",
    category: "Travertine & Stone",
    aspect: "square",
    imageUrl: "/photos/1794461530694.jpg",
    location: "Lakeview Glasshouse",
    year: "2023",
    materials: "Calacatta Viola & Gunmetal Fixtures",
    area: "Powder Room",
  },
  {
    id: "gal-9",
    title: "Master Suite with Fluted Acoustic Wall Panels",
    category: "Private Penthouses",
    aspect: "portrait",
    imageUrl: "/photos/1794461535928.jpg",
    location: "Highland Ridge Villa",
    year: "2024",
    materials: "Acoustic Slatted Oak & Alcantara",
    area: "65 m² Suite",
  },
];

export const SERVICES = [
  {
    number: "01",
    title: "Interior Architecture & Spatial Design",
    description:
      "Comprehensive spatial reconfiguration, structural alterations, lighting plans, and electrical layouts engineered for harmonious daily living.",
    deliverables: ["Photorealistic 3D Renders", "CAD Technical Blueprints", "Permit & Contractor Documentation"],
  },
  {
    number: "02",
    title: "Bespoke Millwork & Joinery",
    description:
      "Custom designed kitchens, walk-in closets, architectural paneling, and statement furniture handcrafted in our partner ateliers with rare timber and metals.",
    deliverables: ["Custom Cabinetry & Pantries", "Integrated Headboards & Bookcases", "Material Sample Boards"],
  },
  {
    number: "03",
    title: "Fine Art & Furniture Curation",
    description:
      "Access to exclusive European design galleries, collectible contemporary art, custom hand-knotted rugs, and custom textile upholstery.",
    deliverables: ["Procurement & White-Glove Shipping", "Custom Framing & Curation", "Vintage & Gallery Sourcing"],
  },
  {
    number: "04",
    title: "Turnkey Project Management",
    description:
      "Complete white-glove site supervision, trade coordination, timeline governance, and seamless turnkey handover with zero friction for the homeowner.",
    deliverables: ["Weekly Milestone Reports", "Budget & Quality Auditing", "Final Staging & White-Glove Handover"],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "A&M HOME INTERIORS transformed our villa into a sanctuary. The sensitivity to natural light and the custom timber millwork is unmatched by any studio we have worked with across Europe or Africa.",
    author: "David & Eleanor Vance",
    project: "Villa Solaria Private Residence",
    location: "Lilongwe, MW",
  },
  {
    quote:
      "The execution was impeccable. Every drawer, pocket door, and lighting scene functions with Swiss watchmaker precision. They delivered on time without compromising an ounce of vision.",
    author: "Tariq Al-Mansoor",
    project: "Skyline Duplex Penthouse",
    location: "Metropolitan District",
  },
];

