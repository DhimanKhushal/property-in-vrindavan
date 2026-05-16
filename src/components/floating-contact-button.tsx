"use client";

import { useEffect, useState } from "react";

type FloatingContactButtonProps = {
  heroId: string;
  hideAtId: string;
  href: string;
  label: string;
};

export function FloatingContactButton({
  heroId,
  hideAtId,
  href,
  label,
}: FloatingContactButtonProps) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById(heroId);
    const hideAtElement = document.getElementById(hideAtId);

    if (!heroElement || !hideAtElement) {
      return;
    }

    let heroPassed = false;
    let footerVisible = false;

    const syncVisibility = () => {
      setShowButton(heroPassed && !footerVisible);
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroPassed = !entry.isIntersecting;
        syncVisibility();
      },
      { threshold: 0.2 }
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        footerVisible = entry.isIntersecting;
        syncVisibility();
      },
      { threshold: 0.01, rootMargin: "0px 0px 25% 0px" }
    );

    heroObserver.observe(heroElement);
    footerObserver.observe(hideAtElement);

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, [heroId, hideAtId]);

  return (
    <a
      href={href}
      className={`fixed bottom-5 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-[#dcc9a7]/90 bg-[rgba(255,249,239,0.84)] px-3.5 py-2 font-display text-[0.82rem] uppercase tracking-[0.09em] text-[#5d452f] shadow-[0_10px_24px_rgba(60,38,14,0.12)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#cfa666] hover:bg-[rgba(255,251,243,0.94)] sm:bottom-6 sm:px-4 sm:py-2.5 ${
        showButton ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(180deg,#ead39e_0%,#d4a953_100%)] text-[0.95rem] text-[#4a3217] shadow-[inset_0_1px_0_rgba(255,248,225,0.9)]">
        ✆
      </span>
      {label}
    </a>
  );
}
