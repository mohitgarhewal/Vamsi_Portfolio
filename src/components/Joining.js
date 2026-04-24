"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Joining() {
  return (
    <section id="positions" className="relative left-1/2 w-screen -translate-x-1/2 py-12 sm:py-14 lg:py-16">
      <div className="relative mx-auto max-w-[1180px] px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#1F2937] sm:text-3xl">
            Join Our Team
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -2 }}
          >
            <Link
              href="/people"
              className="inline-flex items-center gap-2 rounded-lg border border-[#A64195] px-4 py-2 text-sm font-semibold text-[#A64195] transition-colors hover:bg-[#A64195] hover:text-white"
            >
              Explore
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
