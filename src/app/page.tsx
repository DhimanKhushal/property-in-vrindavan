import Image from "next/image";
import { Icon } from "@iconify/react";
import { propertyInVrindavan } from "@/content/sites";
import { LeadForm } from "@/components/lead-form";
import { HeroCardsCarousel } from "@/components/hero-cards-carousel";

const site = propertyInVrindavan;

const values = [
  { title: "Transparency", icon: "mdi:shield-check-outline" },
  { title: "Integrity", icon: "mdi:handshake-outline" },
  { title: "Community", icon: "mdi:account-group-outline" },
] as const;

const propertySections = [
  {
    id: "residential-plots",
    title: "Residential Plots",
    image: "/sites/propertyinvrindavan/plots.png",
    imageAlt: "Residential plots in Vrindavan",
    imageSide: "left" as const,
    tone: "white" as const,
    copy: [
      "Discover premium residential plots in Vrindavan, one of India's fastest-growing spiritual and investment destinations. Plots are available in multiple sizes including 100, 120, 160, 200, and 300 sq. yards, suitable for compact homes, villas, and long-term investments.",
      "Current price ranges generally start from Rs. 8,000 to Rs. 20,000 per sq. yard in developing areas, while premium township plots near major temples and highways range between Rs. 40,000 and Rs. 90,000+ per sq. yard depending on location and amenities.",
      "With excellent connectivity, rising tourism, and rapid infrastructure development, Vrindavan offers a perfect blend of peaceful living and high future appreciation for homebuyers and investors alike.",
    ],
  },
  {
    id: "villas-houses",
    title: "Villas / Houses",
    image: "/sites/propertyinvrindavan/villa.png",
    imageAlt: "Luxury villas in Vrindavan",
    imageSide: "right" as const,
    tone: "cream" as const,
    copy: [
      "Experience luxurious living with premium villas and independent houses in Vrindavan, a rapidly developing spiritual and residential destination. Properties are available in popular sizes ranging from 900 sq. ft. to 5,000 sq. ft., including 2 BHK, 3 BHK, 4 BHK, and spacious duplex villas designed for modern family living.",
      "Price ranges generally start from Rs. 45 lakh for compact independent homes and can go beyond Rs. 6 crore for luxury villas in gated townships with premium amenities.",
      "Areas near Chhatikara Road, Raal Road, ISKCON Temple, and premium integrated townships are witnessing strong demand due to excellent connectivity, peaceful surroundings, and high investment appreciation potential in Vrindavan's growing real estate market.",
    ],
  },
  {
    id: "farmhouses-resorts",
    title: "Farmhouses / Resorts",
    image: "/sites/propertyinvrindavan/farmhouse.png",
    imageAlt: "Farmhouses and resorts in Vrindavan",
    imageSide: "left" as const,
    tone: "white" as const,
    copy: [
      "Own a luxurious farmhouse or resort property in Vrindavan, a rapidly growing destination for spiritual tourism, wellness retreats, and premium investments. Farmhouses and resort-style properties are available in sizes ranging from 5,000 sq. ft. to several acres, offering spacious landscapes, private gardens, swimming pools, and modern lifestyle amenities.",
      "Price ranges generally start from Rs. 80 lakh for small farmhouse units and can exceed Rs. 10 crore for premium resort properties located near Chhatikara Road, Goverdhan Road, and major temple zones.",
      "With rising tourist demand, excellent connectivity, and peaceful surroundings, Vrindavan presents an ideal opportunity for hospitality businesses, vacation homes, and long-term real estate appreciation.",
    ],
  },
  {
    id: "flats-apartments",
    title: "Flats / Apartments",
    image: "/sites/propertyinvrindavan/apartment.png",
    imageAlt: "Flats and apartments in Vrindavan",
    imageSide: "right" as const,
    tone: "cream" as const,
    copy: [
      "Discover modern flats and apartments in Vrindavan, one of the fastest-growing spiritual and residential hubs in North India. Apartments are available in popular configurations including 1 BHK, 2 BHK, 3 BHK, and luxury penthouses, with sizes ranging from 450 sq. ft. to over 2,500 sq. ft.",
      "Price ranges generally start from Rs. 18 lakh for compact studio and 1 BHK units, while premium apartments in gated townships and temple-view residences can exceed Rs. 2 crore.",
      "Areas near Chhatikara Road, ISKCON Temple, and NH-19 are witnessing strong demand due to excellent connectivity, modern amenities, peaceful surroundings, and high rental and investment potential in Vrindavan's growing real estate market.",
    ],
  },
  {
    id: "commercial-showrooms-shops",
    title: "Commercial Showrooms / Shops",
    image: "/sites/propertyinvrindavan/commercial.png",
    imageAlt: "Commercial shops and showrooms in Vrindavan",
    imageSide: "left" as const,
    tone: "white" as const,
    copy: [
      "Invest in premium commercial showrooms and shops in Vrindavan, a rapidly growing destination for retail, hospitality, and spiritual tourism businesses. Commercial spaces are available in sizes ranging from 150 sq. ft. to over 5,000 sq. ft., suitable for retail outlets, restaurants, branded stores, cafes, and investment purposes.",
      "Price ranges generally start from Rs. 15 lakh for small retail shops and can exceed Rs. 8 crore for premium showrooms located near major temples, Chhatikara Road, NH-19, and high-footfall market areas.",
      "With increasing tourist traffic, expanding infrastructure, and rising commercial demand, Vrindavan offers excellent rental income opportunities and strong long-term appreciation for business owners and real estate investors alike.",
    ],
  },
];

function getPropertySectionId(categoryId: string) {
  switch (categoryId) {
    case "plots":
      return "residential-plots";
    case "apartments":
      return "flats-apartments";
    case "villas":
      return "villas-houses";
    case "farmhouses":
      return "farmhouses-resorts";
    case "commercial":
      return "commercial-showrooms-shops";
    default:
      return "properties";
  }
}

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#properties", label: "Explore" },
  { href: "#contact", label: "Contact" },
];

function splitCardTitle(title: string) {
  const parts = title.split(". ");
  if (parts.length > 1) {
    return { index: parts[0], label: parts.slice(1).join(". ") };
  }

  return { index: "", label: title };
}

function SectionWordmark({ top, bottom }: { top: string; bottom?: string }) {
  return (
    <div className="font-heading uppercase leading-[0.82] tracking-[0.03em] text-[#caa44f]">
      <div className="text-[3.15rem] sm:text-[4.2rem] lg:text-[5.4rem]">{top}</div>
      {bottom ? <div className="text-[3.15rem] sm:text-[4.2rem] lg:text-[5.4rem]">{bottom}</div> : null}
    </div>
  );
}

export default function Home() {
  const propertyTypeLinks = site.categories.map((category) => ({
    href: `#${getPropertySectionId(category.id)}`,
    label:
      category.id === "plots"
        ? "Plots"
        : category.id === "apartments"
          ? "Flats"
          : category.id === "villas"
            ? "Villas"
            : category.id === "farmhouses"
              ? "Farmhouses"
              : "Commercial",
  }));

  const heroCardItems = site.categories.map((category) => ({
    category,
    sectionId: getPropertySectionId(category.id),
    ...splitCardTitle(category.title),
  }));

  return (
    <main className="min-h-screen bg-[#f7f1e8]">
      <section className="bg-[#f6efe4]">
        <div className="fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:px-6 lg:px-8">
          <header className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 rounded-[1.8rem] border border-[#ead9bc]/95 bg-[#fbf5ea]/95 px-4 py-4 shadow-[0_14px_36px_rgba(86,57,18,0.08)] backdrop-blur-md sm:px-5">
            <div className="flex items-center gap-3">
              <Image
                src="/shared/logo-transparent.png"
                alt={`${site.brandName} logo`}
                width={88}
                height={88}
                className="h-14 w-14 object-contain sm:h-16 sm:w-16"
              />
              <div className="leading-none">
                <p className="font-heading text-[1rem] tracking-[0.08em] text-[#b28a35] sm:text-[1.2rem]">
                  Property In
                </p>
                <p className="font-heading text-[0.95rem] tracking-[0.08em] text-[#8f6f2b] sm:text-[1.15rem]">
                  Vrindavan
                </p>
              </div>
            </div>

            <nav className="hidden lg:flex lg:max-w-[42rem] lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-5 lg:gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-[0.98rem] text-[#3a2b1f] transition hover:text-[#b9851d]"
                >
                  {link.label}
                </a>
              ))}

              <details className="group relative">
                <summary className="cursor-pointer list-none font-body text-[0.98rem] text-[#3a2b1f] transition hover:text-[#b9851d] marker:content-none">
                  Types
                </summary>
                <div className="absolute left-1/2 top-full z-20 mt-4 w-64 -translate-x-1/2 rounded-[1.35rem] border border-[#e4d3b7] bg-[#fffaf2]/98 p-3 shadow-[0_20px_45px_rgba(55,35,13,0.18)] backdrop-blur-sm">
                  <div className="grid gap-2">
                    {propertyTypeLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="rounded-[0.9rem] border border-[#ecdfca] bg-white px-4 py-3 font-body text-[0.96rem] text-[#3e2c1d] transition hover:border-[#d6b06d] hover:text-[#b9851d]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </details>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <details className="group relative lg:hidden">
                <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-[0.85rem] border border-[#dec8a5] bg-white/88 text-[#5d452f] shadow-[0_8px_18px_rgba(86,57,18,0.08)] transition marker:content-none hover:border-[#cda96b]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </summary>
                <div className="absolute right-0 top-full z-20 mt-3 w-[min(88vw,23rem)] rounded-[1.4rem] border border-[#e4d3b7] bg-[#fffaf2]/98 p-4 shadow-[0_20px_45px_rgba(55,35,13,0.18)] backdrop-blur-sm">
                  <p className="font-display text-[0.8rem] uppercase tracking-[0.18em] text-[#a57924]">
                    Navigate
                  </p>
                  <div className="mt-3 grid gap-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="rounded-[0.95rem] border border-[#ecdfca] bg-white px-4 py-3 font-body text-[0.98rem] text-[#3e2c1d] transition hover:border-[#d6b06d] hover:text-[#b9851d]"
                        >
                          {link.label}
                        </a>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-[#ead9bc] pt-4">
                    <p className="font-display text-[0.75rem] uppercase tracking-[0.18em] text-[#a57924]">
                      Property Types
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {propertyTypeLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="rounded-[0.9rem] border border-[#ecdfca] bg-white px-3 py-3 text-center font-body text-[0.92rem] text-[#3e2c1d] transition hover:border-[#d6b06d] hover:text-[#b9851d]"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </details>

              <a
                href="#contact"
                className="rounded-[0.8rem] bg-[linear-gradient(180deg,#efcf7c_0%,#d7a94f_100%)] px-4 py-2 text-center font-body text-[0.94rem] text-[#402c17] shadow-[0_10px_18px_rgba(156,112,24,0.22)] transition hover:-translate-y-0.5 hover:brightness-[1.03] sm:px-5 sm:text-[1.02rem]"
              >
                Contact Us
              </a>
            </div>
          </header>
        </div>

        <div id="home" className="pt-34 sm:pt-36">
          <div className="relative aspect-[16/8.2] w-full overflow-hidden rounded-t-[0.8rem] sm:aspect-[16/7.2]">
            <Image
              src="/sites/propertyinvrindavan/hero-clean.png"
              alt="Vrindavan riverside temple background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,229,193,0.34)_0%,rgba(54,31,16,0.18)_26%,rgba(19,13,10,0.48)_60%,rgba(18,13,10,0.72)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,228,156,0.5),transparent_17%),radial-gradient(circle_at_72%_16%,rgba(255,255,255,0.12),transparent_24%)]" />

            <div className="relative z-10 flex h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
              <div className="w-full max-w-[1280px]">
                <div className="mx-auto w-full max-w-[980px] rounded-[2rem] border border-white/24 bg-[linear-gradient(180deg,rgba(23,16,11,0.18)_0%,rgba(23,16,11,0.34)_100%)] px-5 py-8 text-center shadow-[0_26px_60px_rgba(20,10,5,0.28)] backdrop-blur-[4px] sm:px-9 sm:py-10">
                  <h1 className="font-heading text-[2.7rem] uppercase leading-[0.9] tracking-[0.07em] text-[#e2bd68] [text-shadow:0_3px_0_rgba(70,39,10,0.35),0_10px_24px_rgba(0,0,0,0.28)] sm:text-[4.2rem] lg:text-[5.1rem]">
                    Find Your Divine Home
                  </h1>
                  <h2 className="mt-2 font-display text-[2rem] uppercase leading-none tracking-[0.06em] text-white [text-shadow:0_6px_18px_rgba(0,0,0,0.34)] sm:text-[3.2rem] lg:text-[4rem]">
                    In Vrindavan
                  </h2>
                  <p className="mx-auto mt-5 max-w-[760px] text-[1.05rem] leading-8 text-white/92 sm:text-[1.24rem]">
                    &quot;plots, flats, and commercial properties in the heart of Krishna Janambhoomi&quot;
                  </p>

                  <form className="mx-auto mt-8 flex w-full max-w-[720px] flex-col gap-3 rounded-[1.3rem] border border-white/30 bg-white/8 p-2 shadow-[0_18px_35px_rgba(12,8,6,0.18)] backdrop-blur-[3px] sm:flex-row">
                    <input
                      type="text"
                      placeholder="Search Location/Type"
                      className="h-14 flex-1 rounded-[0.95rem] border border-[#eadfce] bg-white px-5 text-[1.05rem] text-[#2d241c] outline-none placeholder:text-[#7b7064]"
                    />
                    <button
                      type="button"
                      className="inline-flex h-14 items-center justify-center rounded-[0.95rem] border border-[#8f6116] bg-[linear-gradient(180deg,#d5ab48_0%,#b9851d_46%,#8f6215_100%)] px-7 font-display text-[1rem] uppercase tracking-[0.06em] text-[#fff5d8] shadow-[inset_0_1px_0_rgba(255,244,214,0.7),0_12px_24px_rgba(50,28,7,0.28)]"
                    >
                      Browse Properties
                    </button>
                  </form>
                </div>

                <HeroCardsCarousel items={heroCardItems} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-[linear-gradient(180deg,#faf5ec_0%,#f8f1e7_100%)] [background-image:radial-gradient(circle_at_20px_20px,rgba(201,165,79,0.08)_1px,transparent_0)] [background-size:34px_34px] px-4 py-18 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 rounded-[2.2rem] border border-[#eadcc7] bg-[linear-gradient(180deg,rgba(255,251,245,0.92)_0%,rgba(250,243,232,0.92)_100%)] px-6 py-8 shadow-[0_20px_44px_rgba(88,60,22,0.07)] lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-10 lg:py-10">
            <div>
              <SectionWordmark top="About" bottom="Us" />
            </div>

            <div className="space-y-7 pt-3">
              <p className="text-[1.18rem] leading-9 text-[#4c3a2d] sm:text-[1.28rem]">
                With a legacy of 10 years in the real estate industry, our journey over the last decade has
                been defined by a deep commitment to excellence and a passion for helping our clients find
                their perfect space, whether it&apos;s a divine home or a strategic investment.
              </p>
              <p className="text-[1.12rem] leading-8 text-[#5d4a3c] sm:text-[1.2rem]">
                Having collaborated with a diverse range of reputed builders, we bring a wealth of expertise
                and a proven track record to every project we undertake.
              </p>
              <div className="space-y-2 text-[1.08rem] leading-8 text-[#5d4a3c]">
                <p>Our portfolio is as diverse as the needs of our clients, spanning across various sectors including:</p>
                <ul className="list-disc pl-6">
                  <li>Residential Plots & Apartments</li>
                  <li>Villas & Independent Houses</li>
                  <li>Commercial Spaces</li>
                  <li>Luxury Farmhouses & Resorts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[1.8rem] border border-[#e3d3bc] bg-[rgba(255,252,246,0.92)] px-6 py-8 text-center shadow-[0_14px_30px_rgba(80,54,20,0.05)]"
              >
                <div className="mx-auto flex h-22 w-22 items-center justify-center rounded-full bg-[linear-gradient(180deg,#d6b15a_0%,#c79f45_100%)] text-[#fff8ea] shadow-[0_12px_24px_rgba(169,122,31,0.22)]">
                  <Icon icon={value.icon} width="42" height="42" />
                </div>
                <h3 className="mt-5 font-display text-[1.85rem] text-[#3b2c22]">{value.title}</h3>
                <p className="mt-3 text-[1rem] leading-7 text-[#6c5642]">
                  {value.title === "Transparency" && "Clear dealings, no hidden facts."}
                  {value.title === "Integrity" && "Honest service, ten years strong."}
                  {value.title === "Community" && "Building lasting, spiritual connections."}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[2.3rem] border border-[#e2d4c0] bg-[linear-gradient(180deg,#f5ecde_0%,#fbf6ee_100%)] px-6 py-10 shadow-[0_18px_38px_rgba(88,60,22,0.06)] lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div className="lg:border-r lg:border-[#e3d3bb] lg:pr-8">
                <SectionWordmark top="Our" bottom="Vision" />
              </div>
              <div className="rounded-[1.6rem] bg-white/60 px-5 py-5 shadow-[inset_0_0_0_1px_rgba(226,212,192,0.7)] sm:px-7 sm:py-7">
                <p className="text-[1.08rem] leading-8 text-[#4e3c30] sm:text-[1.18rem]">
                  To be the most trusted and preferred real estate partners. Drawing on our 10-year legacy of
                  excellence and deep-rooted local expertise, we envision a future where every seeker finds
                  their &quot;Divine Abode&quot; through our transparent, professional, and heritage-connected services.
                  We strive to set new benchmarks in the industry by delivering high-quality residential,
                  commercial, and long-term value for our clients and the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="properties"
        className="bg-[linear-gradient(180deg,#f9f2e8_0%,#f5ecdf_100%)] [background-image:radial-gradient(circle_at_20px_20px,rgba(201,165,79,0.08)_1px,transparent_0)] [background-size:34px_34px] px-4 py-18 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionWordmark top="Properties" />
            <div />
          </div>

          <div className="mt-10 space-y-8">
            {propertySections.map((section) => {
              const isRight = section.imageSide === "right";
              const cardBg =
                section.tone === "cream"
                  ? "bg-[linear-gradient(180deg,#fcf3df_0%,#f8ecd4_100%)]"
                  : "bg-white";

              return (
                <article
                  key={section.title}
                  id={section.id}
                  className={`rounded-[2rem] border border-[#e8dcc7] ${cardBg} p-5 shadow-[0_14px_28px_rgba(73,49,20,0.12)] sm:p-7`}
                >
                  <div className={`grid gap-7 lg:grid-cols-[0.85fr_1.15fr] ${isRight ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>
                    <div className="relative min-h-[240px] overflow-hidden rounded-[1rem]">
                      <Image src={section.image} alt={section.imageAlt} fill className="object-cover" />
                    </div>

                    <div className="flex flex-col justify-center">
                      <h3 className="font-display text-[2rem] leading-tight text-[#3d2b1f] sm:text-[2.4rem]">
                        {section.title}
                      </h3>
                      <div className="mt-4 space-y-5 text-[1.06rem] leading-8 text-[#554234] sm:text-[1.12rem]">
                        {section.copy.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#f2ece2] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-[#d8c2a1] bg-[linear-gradient(180deg,#fffaf2_0%,#f4ead7_100%)] p-6 shadow-[0_24px_60px_rgba(86,57,18,0.12)] sm:p-8 lg:p-10">
              <p className="font-display text-[0.95rem] uppercase tracking-[0.18em] text-[#9e7420]">
                Enquiry Form
              </p>
              <h3 className="mt-3 font-heading text-[2rem] leading-tight text-[#3d2818] sm:text-[2.5rem]">
                Tell us what property you are looking for
              </h3>
              <p className="mt-4 max-w-[44rem] text-[1.08rem] leading-8 text-[#6e5540]">
                Share your details and our team will get in touch with curated options, pricing, and visit support.
              </p>

              <LeadForm
                endpoint={site.leadFormEndpoint}
                propertyOptions={site.propertyOptions}
                siteDomain={site.domain}
              />
            </div>

            <aside className="rounded-[2rem] border border-[#c39a59] bg-[linear-gradient(160deg,#6f4721_0%,#3f2a18_46%,#251915_100%)] p-6 text-white shadow-[0_24px_60px_rgba(38,20,7,0.28)] sm:p-8 lg:p-10">
              <p className="font-display text-[0.95rem] uppercase tracking-[0.18em] text-[#f4d48d]">
                Contact For More Info
              </p>
              <h3 className="mt-3 font-heading text-[2rem] leading-tight text-[#fff4dc] sm:text-[2.4rem]">
                {site.ctaTitle}
              </h3>
              <p className="mt-5 text-[1.08rem] leading-8 text-white/80">{site.ctaBody}</p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[1.2rem] border border-white/14 bg-white/8 px-5 py-4">
                  <p className="font-display text-[0.88rem] uppercase tracking-[0.14em] text-[#efc56a]">
                    Call Us
                  </p>
                  <a href={`tel:${site.contactPhone}`} className="mt-2 block text-[1.15rem] text-white">
                    {site.contactPhone}
                  </a>
                </div>
                <div className="rounded-[1.2rem] border border-white/14 bg-white/8 px-5 py-4">
                  <p className="font-display text-[0.88rem] uppercase tracking-[0.14em] text-[#efc56a]">
                    Email Us
                  </p>
                  <a href={`mailto:${site.contactEmail}`} className="mt-2 block break-all text-[1.05rem] text-white">
                    {site.contactEmail}
                  </a>
                </div>
              </div>

              <a
                href={`tel:${site.contactPhone}`}
                className="button-gold mt-8 inline-flex h-14 items-center justify-center rounded-[1rem] border border-[#8f6116] px-8 font-display text-[1rem] uppercase tracking-[0.08em] text-[#fff5d8]"
              >
                Contact Now
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-[#ddc8aa] bg-[linear-gradient(180deg,#f5eee3_0%,#efe2cd_100%)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1260px] overflow-hidden rounded-[2rem] border border-[#d3ba95] bg-[linear-gradient(180deg,#fffaf2_0%,#f6ecdc_100%)] shadow-[0_24px_50px_rgba(83,56,22,0.1)]">
          <div className="grid gap-8 px-6 py-7 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-9">
            <div>
              <p className="font-display text-[0.9rem] uppercase tracking-[0.22em] text-[#a57924]">
                Ready To Connect
              </p>
              <h3 className="mt-3 max-w-[34rem] font-heading text-[1.95rem] leading-tight text-[#3c2818] sm:text-[2.35rem]">
                Contact us for more information and personalized property assistance
              </h3>
              <p className="mt-4 max-w-[36rem] text-[1.02rem] leading-7 text-[#6e5540]">
                Whether you are searching for plots, villas, apartments, or commercial options, our team can guide you with pricing, availability, and the right next step.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href={`tel:${site.contactPhone}`}
                  className="rounded-[1.1rem] border border-[#dcc5a0] bg-white px-5 py-4 transition hover:border-[#c7a36a] hover:shadow-[0_12px_24px_rgba(81,56,24,0.08)]"
                >
                  <p className="font-display text-[0.82rem] uppercase tracking-[0.18em] text-[#a57924]">
                    Call Us
                  </p>
                  <p className="mt-2 text-[1.08rem] text-[#3e2b1c]">{site.contactPhone}</p>
                </a>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="rounded-[1.1rem] border border-[#dcc5a0] bg-white px-5 py-4 transition hover:border-[#c7a36a] hover:shadow-[0_12px_24px_rgba(81,56,24,0.08)]"
                >
                  <p className="font-display text-[0.82rem] uppercase tracking-[0.18em] text-[#a57924]">
                    Email Us
                  </p>
                  <p className="mt-2 break-all text-[1rem] text-[#5f4835]">{site.contactEmail}</p>
                </a>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-row">
                <a
                  href={`tel:${site.contactPhone}`}
                  className="button-gold inline-flex h-13 flex-1 items-center justify-center rounded-[1rem] border border-[#8f6116] px-6 font-display text-[0.98rem] uppercase tracking-[0.08em] text-[#fff5d8]"
                >
                  Schedule a Call
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-13 flex-1 items-center justify-center rounded-[1rem] border border-[#ccb28d] bg-transparent px-6 font-display text-[0.98rem] uppercase tracking-[0.08em] text-[#6b4a24] transition hover:bg-white/65"
                >
                  Get More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-heading text-[2.6rem] uppercase tracking-[0.03em] text-[#caa44f] sm:text-[4rem] lg:text-[5.6rem]">
            Call Us For Any Inquiry
          </p>
          <a
            href={`tel:${site.contactPhone}`}
            className="blink-callout mt-2 inline-block font-heading text-[4.7rem] leading-none tracking-[0.02em] text-[#5a4332] sm:text-[6.8rem] lg:text-[9rem]"
          >
            {site.contactPhone}
          </a>
        </div>
      </section>

      <a
        href="#contact"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-[#8f6116] bg-[linear-gradient(180deg,#d5ab48_0%,#b9851d_46%,#8f6215_100%)] px-5 py-3 font-display text-[0.98rem] uppercase tracking-[0.06em] text-[#fff5d8] shadow-[inset_0_1px_0_rgba(255,244,214,0.7),0_14px_28px_rgba(50,28,7,0.28)] transition hover:-translate-y-1 hover:brightness-[1.03]"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/18 text-[1.1rem]">
          ✆
        </span>
        Contact Us
      </a>
    </main>
  );
}
