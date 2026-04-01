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
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 18);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);

    return () => {
      window.removeEventListener("resize", closeOnResize);
    };
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ease-out ${
        hasScrolled
          ? "border-slate-200/80 bg-white/72 backdrop-blur-[50px]"
          : "border-transparent bg-white"
      }`}
      animate={{
        boxShadow: hasScrolled
          ? "0 10px 32px rgba(15, 23, 42, 0.08)"
          : "0 0 0 rgba(0, 0, 0, 0)",
        y: hasScrolled ? 0 : 0,
      }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-24 w-full max-w-[1320px] items-center justify-between px-6 md:px-10 xl:px-14">
        <Link href="/" className="flex shrink-0 items-center py-2">
          <Image
            src="/logo.png"
            alt="VAMSI Research Group"
            width={220}
            height={60}
            priority
            className="h-10 w-auto md:h-11"
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9 lg:gap-11">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <motion.a
                  href={item.href}
                  className="group relative inline-flex text-sm font-medium tracking-[0.01em] text-slate-600/90 transition-colors duration-300 hover:text-slate-900"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  {item.label}
                  <span className="pointer-events-none absolute -bottom-[6px] left-0 h-[1px] w-full origin-left scale-x-0 bg-slate-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Open menu</span>
          <span className="relative block h-[14px] w-[18px]">
            <span
              className={`absolute left-0 top-0 block h-[2px] w-full bg-slate-700 transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] block h-[2px] w-full bg-slate-700 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] block h-[2px] w-full bg-slate-700 transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="border-t border-slate-200/80 bg-white/95 px-6 pb-6 pt-4 backdrop-blur-[50px] md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block text-sm font-medium tracking-[0.01em] text-slate-600 transition-colors hover:text-slate-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
