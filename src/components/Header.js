"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Research", href: "#research" },
  { label: "News", href: "#news" },
  { label: "Positions", href: "#positions" },
  { label: "People", href: "#people" },
  { label: "Teaching", href: "#teaching" },
  { label: "Projects", href: "#projects" },
  { label: "Resources", href: "/resources" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ease-out ${
        hasScrolled
          ? "border-slate-200/80 bg-white/80 backdrop-blur-[50px]"
          : "border-transparent bg-white"
      }`}
      animate={{
        boxShadow: hasScrolled
          ? "0 10px 32px rgba(15, 23, 42, 0.08)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1320px] items-center justify-between px-5 md:px-10 xl:px-14">

        {/* ── Dual Logo ── */}
        <Link href="/" className="flex shrink-0 items-center gap-4 py-1">
          {/* VAMSI wordmark */}
          <Image
            src="/logo.png"
            alt="VAMSI Research Group"
            width={260}
            height={70}
            priority
            className="h-[44px] w-auto md:h-[50px]"
          />

          {/* Divider */}
          <span className="hidden h-9 w-px bg-slate-200 sm:block" />

          {/* IIT Indore logo image */}
          <Image
            src="/iiti-logo.jpg"
            alt="IIT Indore"
            width={120}
            height={60}
            priority
            className="hidden h-[40px] w-auto object-contain sm:block md:h-[44px]"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.22, ease: "easeOut" }}>
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      className="group relative inline-flex text-[12.5px] font-medium tracking-[0.01em] text-slate-600/90 transition-colors duration-300 hover:text-slate-900"
                    >
                      {item.label}
                      <span className="pointer-events-none absolute -bottom-[5px] left-0 h-[1.5px] w-full origin-left scale-x-0 bg-[#A64195] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="group relative inline-flex text-[12.5px] font-medium tracking-[0.01em] text-slate-600/90 transition-colors duration-300 hover:text-slate-900"
                    >
                      {item.label}
                      <span className="pointer-events-none absolute -bottom-[5px] left-0 h-[1.5px] w-full origin-left scale-x-0 bg-[#A64195] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </Link>
                  )}
                </motion.div>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Hamburger ── */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#0D0D0D] transition-colors hover:bg-[#BF7AB4]/10 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((p) => !p)}
        >
          <span className="relative block h-[14px] w-[18px]">
            <span className={`absolute left-0 top-0 block h-[2px] w-full bg-[#0D0D0D] transition-all duration-300 ${isMobileMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[6px] block h-[2px] w-full bg-[#0D0D0D] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 top-[12px] block h-[2px] w-full bg-[#0D0D0D] transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="border-t border-[#BF7AB4]/30 bg-white/95 px-6 pb-6 pt-4 backdrop-blur-[50px] lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      className="block text-sm font-medium tracking-[0.01em] text-slate-600 transition-colors hover:text-slate-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-sm font-medium tracking-[0.01em] text-slate-600 transition-colors hover:text-slate-900"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}