import Image from "next/image";
import { Icon } from "@iconify/react";
import { propertyInVrindavan } from "@/content/sites";
import { LeadForm } from "@/components/lead-form";
import { HeroCardsCarousel } from "@/components/hero-cards-carousel";
import { SiteNavbar } from "@/components/site-navbar";
import { FloatingContactButton } from "@/components/floating-contact-button";

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
  { href: "#contact", label: "Contact" },
];

function splitCardTitle(title: string) {
  const parts = title.split(". ");
  if (parts.length > 1) {
    return { index: parts[0], label: parts.slice(1).join(". ") };
  }

  return { index: "", label: title };
}

function SectionWordmark({
  top,
  bottom,
  className = "",
}: {
  top: string;
  bottom?: string;
  className?: string;
}) {
  return (
    <div className={`font-heading uppercase leading-[0.82] tracking-[0.03em] text-[#caa44f] ${className}`}>
      {bottom ? (
        <>
          <div className="text-[2.7rem] sm:hidden">{`${top} ${bottom}`}</div>
          <div className="hidden text-[4.2rem] sm:block lg:text-[5.4rem]">{top}</div>
          <div className="hidden text-[4.2rem] sm:block lg:text-[5.4rem]">{bottom}</div>
        </>
      ) : (
        <div className="text-[2.7rem] sm:text-[4.2rem] lg:text-[5.4rem]">{top}</div>
      )}
    </div>
  );
}

export default function Home() {
  const phoneHref = `tel:+91${site.contactPhone.replace(/\D/g, "")}`;
  const phoneDisplay = `+91 ${site.contactPhone}`;
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
          <SiteNavbar brandName={site.brandName} navLinks={navLinks} propertyLinks={propertyTypeLinks} />
        </div>

        <div id="home" className="pt-34 sm:pt-36">
          <div className="relative min-h-[100svh] w-full overflow-hidden rounded-t-[0.8rem]">
            <Image
              src="/sites/propertyinvrindavan/hero-clean.png"
              alt="Vrindavan riverside temple background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(245,229,193,0.34)_0%,rgba(54,31,16,0.18)_26%,rgba(19,13,10,0.48)_60%,rgba(18,13,10,0.72)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,228,156,0.5),transparent_17%),radial-gradient(circle_at_72%_16%,rgba(255,255,255,0.12),transparent_24%)]" />

            <div className="relative z-10 flex min-h-[100svh] justify-center px-4 pb-10 pt-12 sm:px-6 sm:pb-12 lg:px-8">
              <div className="flex w-full max-w-[1280px] flex-col justify-between">
                <div className="mx-auto w-full max-w-[980px] px-5 py-8 text-center sm:px-9 sm:py-10">
                  <h1 className="font-heading text-[2.7rem] uppercase leading-[0.9] tracking-[0.07em] text-[#e2bd68] [text-shadow:0_3px_0_rgba(70,39,10,0.35),0_10px_24px_rgba(0,0,0,0.28)] sm:text-[4.2rem] lg:text-[5.1rem]">
                    {site.headlineTop}
                  </h1>
                  <h2 className="mt-2 font-display text-[2rem] uppercase leading-none tracking-[0.06em] text-white [text-shadow:0_6px_18px_rgba(0,0,0,0.34)] sm:text-[3.2rem] lg:text-[4rem]">
                    {site.headlineBottom}
                  </h2>
                  <p className="mx-auto mt-5 max-w-[760px] text-[1.05rem] leading-8 text-white/92 sm:text-[1.24rem]">
                    {site.subheadline}
                  </p>
                </div>

                <div className="mt-16 sm:mt-20">
                  <HeroCardsCarousel items={heroCardItems} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-[linear-gradient(180deg,#faf5ec_0%,#f8f1e7_100%)] [background-image:radial-gradient(circle_at_20px_20px,rgba(201,165,79,0.08)_1px,transparent_0)] [background-size:34px_34px] px-4 pb-18 pt-24 sm:px-6 md:pt-18 lg:px-8"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 rounded-[2.2rem] border border-[#eadcc7] bg-[linear-gradient(180deg,rgba(255,251,245,0.92)_0%,rgba(250,243,232,0.92)_100%)] px-6 py-8 shadow-[0_20px_44px_rgba(88,60,22,0.07)] lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:px-10 lg:py-10">
            <div className="flex justify-center lg:justify-start">
              <SectionWordmark
                top="About"
                bottom="Us"
                className="sm:[&>div]:text-[4.85rem] lg:leading-[0.88] lg:[&>div]:text-[10.625rem]"
              />
            </div>

            <div className="space-y-7 pt-3 text-center lg:text-left">
              <p className="text-justify text-[1.18rem] leading-9 text-[#4c3a2d] sm:text-[1.28rem] lg:text-left">
                With a legacy of 10 years in the real estate industry, our journey over the last decade has
                been defined by a deep commitment to excellence and a passion for helping our clients find
                their perfect space, whether it&apos;s a divine home or a strategic investment.
              </p>
              <p className="text-justify text-[1.12rem] leading-8 text-[#5d4a3c] sm:text-[1.2rem] lg:text-left">
                Having collaborated with a diverse range of reputed builders, we bring a wealth of expertise
                and a proven track record to every project we undertake.
              </p>
              <div className="space-y-2 text-[1.08rem] leading-8 text-[#5d4a3c]">
                <p className="text-justify lg:text-left">Our portfolio is as diverse as the needs of our clients, spanning across various sectors including:</p>
                <ul className="list-disc pl-6 text-left lg:pl-6">
                  <li>Residential Plots & Apartments</li>
                  <li>Villas & Independent Houses</li>
                  <li>Commercial Spaces</li>
                  <li>Luxury Farmhouses & Resorts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-[2.3rem] border border-[#e2d4c0] bg-[linear-gradient(180deg,#f7f0e4_0%,#fbf6ee_100%)] shadow-[0_18px_38px_rgba(88,60,22,0.06)]">
            <div className="bg-[radial-gradient(circle_at_24px_24px,rgba(202,164,79,0.08)_2px,transparent_0)] [background-size:42px_42px] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
              <div className="grid gap-8 sm:grid-cols-3">
                {values.map((value) => (
                  <div key={value.title} className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(180deg,#d6b15a_0%,#c79f45_100%)] text-[#fff8ea] shadow-[0_10px_22px_rgba(169,122,31,0.18)]">
                      <Icon icon={value.icon} width="28" height="28" />
                    </div>
                    <h3 className="mt-4 font-display text-[1.55rem] text-[#3b2c22]">{value.title}</h3>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <SectionWordmark top="Our" bottom="Vision" className="inline-block" />
                <p className="mx-auto mt-5 max-w-[980px] text-justify text-[1.04rem] leading-8 text-[#4e3c30] sm:text-center sm:text-[1.12rem] sm:leading-8">
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
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex flex-col items-center gap-3 lg:items-start">
                <SectionWordmark top="Properties" />
                <span className="h-[3px] w-28 rounded-full bg-[linear-gradient(90deg,#caa44f_0%,#e0c37d_100%)]" />
              </div>
            </div>
            <div />
          </div>

          <div className="mt-10 space-y-8">
            {propertySections.map((section, index) => {
              const isRight = index % 2 === 1;

              return (
                <article
                  key={section.title}
                  id={section.id}
                  className="rounded-[1.15rem] bg-[#fff8ee] p-5 shadow-[0_4px_10px_rgba(0,0,0,0.12)] sm:p-6"
                >
                  <div
                    className={`flex flex-col gap-6 md:items-center md:gap-6 ${isRight ? "md:flex-row-reverse" : "md:flex-row"}`}
                  >
                    <div
                      className="relative h-[225px] w-full shrink-0 overflow-hidden rounded-[0.75rem] bg-[#d9d9d9] sm:h-[275px] md:h-[320px] md:w-[520px] lg:h-[360px] lg:w-[560px] xl:h-[380px] xl:w-[600px]"
                    >
                      <Image src={section.image} alt={section.imageAlt} fill className="object-cover" />
                    </div>

                    <div className="min-w-0 flex-1 text-center md:text-left">
                      <h3 className="font-display text-[1.85rem] leading-tight text-[#4b2e1f] sm:text-[2rem] md:text-[2.1rem]">
                        {section.title}
                      </h3>
                      <div className="mt-3 space-y-3 text-[1.08rem] leading-[1.75] text-[#555555] sm:text-[1.12rem]">
                        {section.copy.map((paragraph) => (
                          <p key={paragraph} className="text-justify lg:text-left">{paragraph}</p>
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
            <div className="rounded-[2rem] border border-[#d8c2a1] bg-[linear-gradient(180deg,#fffaf2_0%,#f4ead7_100%)] p-6 text-center shadow-[0_24px_60px_rgba(86,57,18,0.12)] sm:p-8 lg:p-10 lg:text-left">
              <p className="font-display text-[0.95rem] uppercase tracking-[0.18em] text-[#9e7420]">
                Enquiry Form
              </p>
              <h3 className="mt-3 font-heading text-[2rem] leading-tight text-[#3d2818] sm:text-[2.5rem]">
                Tell us what property you are looking for
              </h3>
              <p className="mt-4 max-w-[44rem] text-justify text-[1.08rem] leading-8 text-[#6e5540] lg:text-left">
                Share your details and our team will get in touch with curated options, pricing, and visit support.
              </p>

              <LeadForm
                endpoint={site.leadFormEndpoint}
                propertyOptions={site.propertyOptions}
                siteDomain={site.domain}
              />
            </div>

            <aside className="rounded-[2rem] border border-[#c39a59] bg-[linear-gradient(160deg,#6b4320_0%,#3c2818_46%,#241916_100%)] p-6 text-center text-white shadow-[0_24px_60px_rgba(38,20,7,0.22)] sm:p-8 lg:p-10 lg:text-left">
              <p className="font-display text-[0.95rem] uppercase tracking-[0.18em] text-[#f4d48d]">
                Contact For More Info
              </p>
              <h3 className="mt-3 font-heading text-[2rem] leading-tight text-[#fff4dc] sm:text-[2.4rem]">
                {site.ctaTitle}
              </h3>
              <p className="mt-5 text-justify text-[1.08rem] leading-8 text-white/80 lg:text-left">{site.ctaBody}</p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[1.2rem] border border-white/14 bg-white/8 px-5 py-4 text-left">
                  <p className="font-display text-[0.88rem] uppercase tracking-[0.14em] text-[#efc56a]">
                    Call Us
                  </p>
                  <a href={phoneHref} className="mt-2 block text-[1.15rem] text-white">
                    {phoneDisplay}
                  </a>
                </div>
                <div className="rounded-[1.2rem] border border-white/14 bg-white/8 px-5 py-4 text-left">
                  <p className="font-display text-[0.88rem] uppercase tracking-[0.14em] text-[#efc56a]">
                    Email Us
                  </p>
                  <a href={`mailto:${site.contactEmail}`} className="mt-2 block break-all text-[1.05rem] text-white">
                    {site.contactEmail}
                  </a>
                </div>
              </div>

              <a
                href={phoneHref}
                className="button-gold mt-8 inline-flex h-14 items-center justify-center rounded-[1rem] border border-[#8f6116] px-8 font-display text-[1rem] uppercase tracking-[0.08em] text-[#fff5d8]"
              >
                Contact Now
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section id="footer-callout" className="bg-white px-4 py-10 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-heading text-[2.6rem] uppercase tracking-[0.03em] text-[#caa44f] sm:text-[4rem] lg:text-[5.6rem]">
            Call Us For Any Inquiry
          </p>
          <a
            href={phoneHref}
            className="blink-callout mt-2 inline-block font-heading text-[4.7rem] leading-none tracking-[0.02em] text-[#5a4332] sm:text-[6.8rem] lg:text-[9rem]"
          >
            {phoneDisplay}
          </a>
        </div>
      </section>

      <FloatingContactButton
        heroId="home"
        hideAtId="contact"
        contactHref="#contact"
        whatsappHref="https://wa.me/919592535453"
        contactLabel="Contact Us"
      />
    </main>
  );
}
