"use client";

import { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";

type FloatingContactButtonProps = {
  heroId: string;
  hideAtId: string;
  contactHref: string;
  whatsappHref: string;
  contactLabel: string;
};

export function FloatingContactButton({
  heroId,
  hideAtId,
  contactHref,
  whatsappHref,
  contactLabel,
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

  const visibilityClass = showButton
    ? "pointer-events-auto translate-y-0 opacity-100"
    : "pointer-events-none translate-y-4 opacity-0";

  return (
    <>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat"
        className="fixed bottom-5 left-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#98d8ad] bg-[linear-gradient(180deg,#34d269_0%,#159447_100%)] text-white shadow-[0_14px_28px_rgba(16,96,45,0.28)] transition duration-300 hover:-translate-y-1 hover:brightness-[1.03] sm:bottom-6 sm:left-6 sm:h-13 sm:w-13"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
          <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.6 2 2.2 6.4 2.2 11.83c0 1.74.45 3.45 1.31 4.96L2 22l5.37-1.41a9.77 9.77 0 0 0 4.66 1.18h.01c5.42 0 9.82-4.4 9.82-9.83 0-2.63-1.02-5.09-2.81-6.93ZM12.04 20.1h-.01a8.17 8.17 0 0 1-4.16-1.13l-.3-.18-3.18.83.85-3.1-.2-.32a8.15 8.15 0 0 1-1.25-4.37c0-4.5 3.66-8.16 8.16-8.16 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.38 5.77c0 4.5-3.66 8.16-8.16 8.16Zm4.48-6.12c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.52.58.18 1.11.15 1.53.09.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>

      <a
        href={contactHref}
        className={`fixed bottom-5 right-4 z-50 inline-flex items-center gap-3 rounded-full border border-[#8f6116] bg-[linear-gradient(180deg,#d5ab48_0%,#b9851d_46%,#8f6215_100%)] px-5 py-3 font-display text-[0.98rem] uppercase tracking-[0.06em] text-[#fff5d8] shadow-[inset_0_1px_0_rgba(255,244,214,0.7),0_14px_28px_rgba(50,28,7,0.28)] transition duration-300 hover:-translate-y-1 hover:brightness-[1.03] sm:bottom-6 sm:right-6 ${visibilityClass}`}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/18">
          <PhoneCall className="h-5.5 w-5.5" strokeWidth={2.2} />
        </span>
        {contactLabel}
      </a>
    </>
  );
}
