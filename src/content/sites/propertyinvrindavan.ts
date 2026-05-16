export type SiteCategory = {
  id: string;
  title: string;
  cta: string;
  accent: string;
  icon: "plots" | "apartments" | "villa" | "farmhouse" | "commercial" | "search";
};

export type SiteConfig = {
  domain: string;
  brandName: string;
  leadFormEndpoint: string;
  headlineTop: string;
  headlineBottom: string;
  subheadline: string;
  navItems: string[];
  primaryCta: string;
  searchPlaceholder: string;
  searchCta: string;
  propertyOptions: string[];
  ctaTitle: string;
  ctaBody: string;
  contactPhone: string;
  contactEmail: string;
  footerText: string;
  categories: SiteCategory[];
};

export const propertyInVrindavan: SiteConfig = {
  domain: "propertyinvrindavan.co.in",
  brandName: "Property In Vrindavan",
  leadFormEndpoint: "",
  headlineTop: "Find Your Divine Home",
  headlineBottom: "In Vrindavan",
  subheadline:
    '"plots, flats, and commercial properties in the heart of Krishna Janambhoomi"',
  navItems: ["Home", "Plots", "Apartments (Flats)", "Commercial", "Other", "Contact"],
  primaryCta: "Find Your Home",
  searchPlaceholder: "Search Location/Type",
  searchCta: "Browse Properties",
  propertyOptions: [
    "Residential Plot",
    "Flat / Apartment",
    "Villa / Independent House",
    "Farmhouse / Resort",
    "Commercial Property",
  ],
  ctaTitle: "Need More Information?",
  ctaBody:
    "Talk to our team for site visits, pricing details, availability updates, and the right property recommendations in Vrindavan.",
  contactPhone: "959-253-5453",
  contactEmail: "propertyinvrindavan11@gmail.com",
  footerText: "© 2024 Property In Vrindavan",
  categories: [
    {
      id: "plots",
      title: "1. Residential Plots",
      cta: "Explore Plots",
      accent: "#5e9ab8",
      icon: "plots",
    },
    {
      id: "apartments",
      title: "2. Flats & Apartments",
      cta: "View Apartments",
      accent: "#609978",
      icon: "apartments",
    },
    {
      id: "villas",
      title: "3. Villas & Independent Houses",
      cta: "Find a Villa",
      accent: "#4e8d87",
      icon: "villa",
    },
    {
      id: "farmhouses",
      title: "4. Farmhouses & Resorts",
      cta: "Explore Resorts",
      accent: "#d2ad57",
      icon: "farmhouse",
    },
    {
      id: "commercial",
      title: "5. Commercials",
      cta: "Explore Commercials",
      accent: "#7b4638",
      icon: "commercial",
    },
  ],
};
