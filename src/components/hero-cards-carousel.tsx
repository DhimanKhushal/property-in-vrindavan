"use client";

import { useRef } from "react";
import type { SiteCategory } from "@/content/sites/propertyinvrindavan";

type HeroCardItem = {
  category: SiteCategory;
  sectionId: string;
  index: string;
  label: string;
};

function HeroCardIcon({ icon }: { icon: SiteCategory["icon"] }) {
  const classes = "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]";

  switch (icon) {
    case "plots":
      return (
        <svg viewBox="0 0 96 96" fill="none" className={classes} aria-hidden="true">
          <path d="M18 63 48 27l30 36-30 15-30-15Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M48 27v35m-15-13 15 8 16-8M25 68l8-4m38 4-8-4" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 76h60" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      );
    case "apartments":
      return (
        <svg viewBox="0 0 96 96" fill="none" className={classes} aria-hidden="true">
          <path d="M26 22h20v54H26zM50 30h20v46H50z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M33 31h6m-6 9h6m-6 9h6m-6 9h6m24-18h6m-6 9h6m-6 9h6M39 76V62h10v14" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M20 76h56" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      );
    case "villa":
      return (
        <svg viewBox="0 0 96 96" fill="none" className={classes} aria-hidden="true">
          <path d="M16 47 48 24l32 23v27H16V47Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M30 74V56h14v18M52 42h11M52 53h11M22 74h52" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M24 38 48 21l24 17M40 35h6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M60 74V58h12v16" stroke="currentColor" strokeWidth="3.2" />
        </svg>
      );
    case "farmhouse":
      return (
        <svg viewBox="0 0 96 96" fill="none" className={classes} aria-hidden="true">
          <path d="M24 47 48 30l24 17v23H24V47Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M36 70V54h24v16M18 70h60" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M24 45c-2-9-2-16 1-21m0 0c4 1 7 5 9 11m34 10c2-9 2-16-1-21m0 0c-4 1-7 5-9 11M48 22v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.82" />
        </svg>
      );
    case "commercial":
      return (
        <svg viewBox="0 0 96 96" fill="none" className={classes} aria-hidden="true">
          <path d="M18 76h60M24 76V38h18v38M48 76V24h24v52" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M30 46h5m-5 9h5m-5 9h5m25-21h7m-7 9h7m-7 9h7m-7 9h7" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M33 76V62h7v14M56 76V62h8v14" stroke="currentColor" strokeWidth="3.2" />
        </svg>
      );
    default:
      return null;
  }
}

function HeroCard({ item }: { item: HeroCardItem }) {
  const { category, index, label, sectionId } = item;

  return (
    <a
      href={`#${sectionId}`}
      className="flex min-h-[240px] shrink-0 snap-center flex-col rounded-[1.65rem] border bg-[rgba(255,251,244,0.96)] px-5 pb-5 pt-4 text-center shadow-[0_18px_36px_rgba(30,18,8,0.18)] backdrop-blur-[2px] md:min-h-[250px]"
      style={{ borderColor: `${category.accent}99` }}
    >
      <div
        className="h-1.5 w-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${category.accent}, transparent)` }}
      />
      <div className="mt-4 flex items-start justify-between gap-3">
        <span
          className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border px-3 font-display text-[0.88rem] uppercase tracking-[0.08em]"
          style={{
            borderColor: `${category.accent}66`,
            color: category.accent,
            backgroundColor: `${category.accent}12`,
          }}
        >
          {index}
        </span>
        <div
          className="flex h-18 w-18 items-center justify-center rounded-[1.25rem] border"
          style={{
            borderColor: `${category.accent}4d`,
            color: category.accent,
            backgroundColor: `${category.accent}10`,
          }}
        >
          <HeroCardIcon icon={category.icon} />
        </div>
      </div>
      <h3 className="mt-5 min-h-[62px] font-display text-[1.12rem] uppercase leading-[1.08] tracking-[0.015em] text-[#231915]">
        {label}
      </h3>
      <span
        className="mt-auto inline-flex h-11 w-full items-center justify-center rounded-[0.95rem] border bg-white/92 px-4 font-display text-[0.92rem] uppercase tracking-[0.05em] text-[#241b16] transition hover:bg-white"
        style={{ borderColor: `${category.accent}80` }}
      >
        {category.cta}
      </span>
    </a>
  );
}

export function HeroCardsCarousel({ items }: { items: HeroCardItem[] }) {
  const sliderRef = useRef<HTMLDivElement>(null);

  function scrollByAmount(direction: "prev" | "next") {
    const slider = sliderRef.current;
    if (!slider) return;

    const amount = Math.min(slider.clientWidth * 0.92, 340);
    slider.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="mt-8 md:hidden">
        <div className="mb-4 flex items-center justify-end gap-2">
          <button
            type="button"
            aria-label="Previous cards"
            onClick={() => scrollByAmount("prev")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eedcbd] bg-[#fff8ee]/96 font-display text-[1.2rem] text-[#4e3824] shadow-[0_10px_20px_rgba(36,23,10,0.16)] transition hover:border-[#c99f55] hover:text-[#b9851d]"
          >
            {"<"}
          </button>
          <button
            type="button"
            aria-label="Next cards"
            onClick={() => scrollByAmount("next")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eedcbd] bg-[#fff8ee]/96 font-display text-[1.2rem] text-[#4e3824] shadow-[0_10px_20px_rgba(36,23,10,0.16)] transition hover:border-[#c99f55] hover:text-[#b9851d]"
          >
            {">"}
          </button>
        </div>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <div key={item.category.id} className="w-[85vw] max-w-[21rem]">
              <HeroCard item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 hidden max-w-[1220px] gap-4 md:grid md:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => (
          <HeroCard key={item.category.id} item={item} />
        ))}
      </div>
    </>
  );
}
