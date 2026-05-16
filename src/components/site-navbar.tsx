"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type NavLink = {
  href: string;
  label: string;
};

type SiteNavbarProps = {
  brandName: string;
  navLinks: NavLink[];
  propertyLinks: NavLink[];
};

export function SiteNavbar({ brandName, navLinks, propertyLinks }: SiteNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPropertyMenuOpen, setIsPropertyMenuOpen] = useState(false);
  const propertyMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeMenus() {
      setIsPropertyMenuOpen(false);
      setIsMobileMenuOpen(false);
    }

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (propertyMenuRef.current && !propertyMenuRef.current.contains(target)) {
        setIsPropertyMenuOpen(false);
      }

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener("scroll", closeMenus, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", closeMenus);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleNavClick() {
    setIsMobileMenuOpen(false);
    setIsPropertyMenuOpen(false);
  }

  return (
    <header className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 rounded-[1.8rem] border border-[#ead9bc]/95 bg-[#fbf5ea]/95 px-4 py-4 shadow-[0_14px_36px_rgba(86,57,18,0.08)] backdrop-blur-md sm:px-5">
      <div className="flex items-center gap-3">
        <Image
          src="/shared/logo-transparent.png"
          alt={`${brandName} logo`}
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
            onClick={handleNavClick}
            className="font-body text-[0.98rem] text-[#3a2b1f] transition hover:text-[#b9851d]"
          >
            {link.label}
          </a>
        ))}

        <div ref={propertyMenuRef} className="relative">
          <button
            type="button"
            onClick={() => setIsPropertyMenuOpen((open) => !open)}
            className="inline-flex items-center gap-2 font-body text-[0.98rem] text-[#3a2b1f] transition hover:text-[#b9851d]"
          >
            Properties
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className={`h-4 w-4 transition ${isPropertyMenuOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {isPropertyMenuOpen ? (
            <div className="absolute left-1/2 top-full z-20 mt-4 w-64 -translate-x-1/2 rounded-[1.35rem] border border-[#e4d3b7] bg-[#fffaf2]/98 p-3 shadow-[0_20px_45px_rgba(55,35,13,0.18)] backdrop-blur-sm">
              <div className="grid gap-2">
                {propertyLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="rounded-[0.9rem] border border-[#ecdfca] bg-white px-4 py-3 font-body text-[0.96rem] text-[#3e2c1d] transition hover:border-[#d6b06d] hover:text-[#b9851d]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </nav>

      <div ref={mobileMenuRef} className="relative flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-[0.85rem] border border-[#dec8a5] bg-white/88 text-[#5d452f] shadow-[0_8px_18px_rgba(86,57,18,0.08)] transition hover:border-[#cda96b] lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {isMobileMenuOpen ? (
          <div className="absolute right-0 top-full z-20 mt-3 w-[min(88vw,23rem)] rounded-[1.4rem] border border-[#e4d3b7] bg-[#fffaf2]/98 p-4 shadow-[0_20px_45px_rgba(55,35,13,0.18)] backdrop-blur-sm lg:hidden">
            <p className="font-display text-[0.8rem] uppercase tracking-[0.18em] text-[#a57924]">
              Navigate
            </p>
            <div className="mt-3 grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="rounded-[0.95rem] border border-[#ecdfca] bg-white px-4 py-3 font-body text-[0.98rem] text-[#3e2c1d] transition hover:border-[#d6b06d] hover:text-[#b9851d]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 border-t border-[#ead9bc] pt-4">
              <p className="font-display text-[0.75rem] uppercase tracking-[0.18em] text-[#a57924]">
                Properties
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {propertyLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="rounded-[0.9rem] border border-[#ecdfca] bg-white px-3 py-3 text-center font-body text-[0.92rem] text-[#3e2c1d] transition hover:border-[#d6b06d] hover:text-[#b9851d]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <a
          href="#contact"
          className="hidden rounded-[0.8rem] bg-[linear-gradient(180deg,#efcf7c_0%,#d7a94f_100%)] px-4 py-2 text-center font-body text-[0.94rem] text-[#402c17] shadow-[0_10px_18px_rgba(156,112,24,0.22)] transition hover:-translate-y-0.5 hover:brightness-[1.03] sm:px-5 sm:text-[1.02rem] lg:inline-flex"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
