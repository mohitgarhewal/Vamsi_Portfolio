"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Joining() {
  return (
    <section id="positions" className="relative left-1/2 w-screen -translate-x-1/2 py-14 sm:py-16 lg:py-20">
      <div className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-white" />

        <div className="relative mx-auto max-w-[1180px] px-6 md:px-10 lg:px-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#A64195]/40 bg-[#A64195]/10 px-5 py-2 text-sm font-semibold text-[#A64195]">
              <span className="h-2 w-2 rounded-full bg-[#F27405]" />
              Open Roles
            </span>

            <h2 className="mt-7 text-3xl font-bold tracking-[-0.02em] text-[#1F2937] sm:text-4xl md:text-5xl">
              Join Our Research Group
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#0D0D0D]/75 sm:text-lg md:text-lg">
              We are looking for motivated researchers to join the VAMSI Research Group. Explore opportunities and learn more about our open positions.
            </p>
          </div>

          <div className="mx-auto mt-12 flex max-w-md justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
            >
              <Link
                href="/join"
                className="block rounded-2xl border border-slate-200 bg-white px-8 py-8 text-center shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-md transition-colors hover:border-[#A64195]/50 hover:shadow-[0_12px_32px_rgba(166,65,149,0.15)]"
              >
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center text-[#A64195]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
                    <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2Z" />
                    <path d="M12 6v6l4 2.4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#1F2937]">Join the Group</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#0D0D0D]/75">
                  Explore available positions and apply to be part of our research team.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-[#A64195]">
                  <span>View Positions</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
