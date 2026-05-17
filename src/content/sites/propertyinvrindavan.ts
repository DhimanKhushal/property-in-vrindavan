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
  brandTopLine: string;
  brandBottomLine: string;
  browserTitle: string;
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

const sharedLeadFormEndpoint =
  "https://script.google.com/macros/s/AKfycbyag9oXAYYAbUmwP7dOJbF9I-1zNIKwWxeD-w0s_PSPduY6Op6CVzMXfAAdm-fBTtog/exec";

const sharedCategories: SiteCategory[] = [
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
];

const baseSiteConfig = {
  leadFormEndpoint: sharedLeadFormEndpoint,
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
  contactEmail: "inquiry.vrindavan@gmail.com",
  footerText: "© 2024 Property In Vrindavan",
  categories: sharedCategories,
} satisfies Omit<
  SiteConfig,
  "domain" | "brandName" | "brandTopLine" | "brandBottomLine" | "browserTitle"
>;

function createSiteConfig(
  domain: string,
  brandName: string,
  brandTopLine: string,
  brandBottomLine: string,
  browserTitle: string,
) {
  return {
    ...baseSiteConfig,
    domain,
    brandName,
    brandTopLine,
    brandBottomLine,
    browserTitle,
  } satisfies SiteConfig;
}

export const propertyInVrindavan = createSiteConfig(
  "propertyinvrindavan.co.in",
  "Property In Vrindavan",
  "Property In",
  "Vrindavan",
  "Property in Vrindavan",
);

export const flatsInVrindavan = createSiteConfig(
  "flatsinvrindavan.com",
  "Flats In Vrindavan",
  "Flats In",
  "Vrindavan",
  "Flats in Vrindavan",
);

export const heroHomesVrindavan = createSiteConfig(
  "herohomesvrindavan.in",
  "Hero Homes Vrindavan",
  "Hero Homes",
  "Vrindavan",
  "Hero Homes Vrindavan",
);

export const laadliGroupVrindavan = createSiteConfig(
  "laadligroupvrindavan.com",
  "Laadli Group Vrindavan",
  "Laadli Group",
  "Vrindavan",
  "Laadli Group Vrindavan",
);

export const lodhaVrindavan = createSiteConfig(
  "lodhavrindavan.com",
  "Lodha Vrindavan",
  "Lodha",
  "Vrindavan",
  "Lodha Vrindavan",
);

export const plotsInVrindavan = createSiteConfig(
  "plotsinvrindavan.co.in",
  "Plots In Vrindavan",
  "Plots In",
  "Vrindavan",
  "Plots in Vrindavan",
);

export const mvdaApprovedPlotting = createSiteConfig(
  "mvdaapprovedplotting.com",
  "MVDA Approved Plotting",
  "MVDA Approved",
  "Plotting",
  "MVDA Approved Plotting",
);

export const sobhaVrindavan = createSiteConfig(
  "sobhavrindavan.com",
  "Sobha Vrindavan",
  "Sobha",
  "Vrindavan",
  "Sobha Vrindavan",
);

export const allSites = [
  propertyInVrindavan,
  flatsInVrindavan,
  heroHomesVrindavan,
  laadliGroupVrindavan,
  lodhaVrindavan,
  plotsInVrindavan,
  mvdaApprovedPlotting,
  sobhaVrindavan,
] as const;

export function getSiteConfigByDomain(host: string | null | undefined) {
  const normalizedHost = host?.split(":")[0].toLowerCase().replace(/^www\./, "");

  return allSites.find((site) => site.domain === normalizedHost) ?? propertyInVrindavan;
}

export function getSiteConfigByPreviewKey(previewKey: string | null | undefined) {
  const normalizedPreviewKey = previewKey?.trim().toLowerCase();

  if (!normalizedPreviewKey) {
    return null;
  }

  return (
    allSites.find(
      (site) =>
        site.domain === normalizedPreviewKey ||
        site.brandName.toLowerCase() === normalizedPreviewKey,
    ) ?? null
  );
}
