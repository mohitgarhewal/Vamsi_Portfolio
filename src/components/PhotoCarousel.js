"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const newsItems = [
  {
    id: 1,
    date: "2024-01-15",
    displayDate: "15 Jan 2024",
    content:
      'Vamsi delivers a talk in a one-day workshop-cum-training program (hybrid mode) on "Thermodynamic Insights for Materials Design: A CALPHAD Perspective" organized by the Materials Advantage Student Chapter of the Department of Metallurgical Engineering and Materials Science, IIT Indore.',
  },
  {
    id: 2,
    date: "2023-12-26",
    displayDate: "26 Dec 2023",
    content:
      'Vamsi visited DMRL Hyderabad and delivered an expert talk. The title of the talk was "Modelling planar fault energies in A3B-L12 compositions: Challenges and Prospects."',
  },
  {
    id: 3,
    date: "2023-01-01",
    displayDate: "2023",
    content:
      "Vamsi receives the Young Faculty Research Seed Grant provided by IIT Indore.",
  },
];

const sortedNews = [...newsItems].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function PhotoCarousel() {
  const [active, setActive] = useState(0);

  const showPrev = () => {
    setActive((prev) => (prev - 1 + sortedNews.length) % sortedNews.length);
  };

  const showNext = () => {
    setActive((prev) => (prev + 1) % sortedNews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % sortedNews.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-14 sm:py-16 lg:py-20" aria-label="News gallery">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-7 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#800020] sm:text-4xl">News</h2>
          {/* <p className="mt-3 text-sm text-black sm:text-base">
            Recent updates, milestones, and announcements.
          </p> */}
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#E4B5C0] bg-white shadow-[0_14px_40px_rgba(128,0,32,0.12)]">
          <button
            type="button"
            aria-label="Previous news"
            onClick={showPrev}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#E4B5C0] bg-white p-2 text-[#800020] transition-colors hover:bg-[#F6E4E8] sm:left-4"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next news"
            onClick={showNext}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#E4B5C0] bg-white p-2 text-[#800020] transition-colors hover:bg-[#F6E4E8] sm:right-4"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="relative min-h-[220px] sm:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={sortedNews[active].id}
                initial={{ opacity: 0.2, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0.2, x: -24 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full p-6 sm:p-8 md:p-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#E4B5C0] bg-[#F6E4E8] px-3 py-1.5 text-xs font-semibold text-[#800020]">
                    <span>{sortedNews[active].displayDate}</span>
                    <span className="h-1 w-1 rounded-full bg-[#800020]" />
                    <span>{new Date(sortedNews[active].date).getFullYear()}</span>
                  </div>
                  <p className="mt-4 max-w-4xl text-base leading-relaxed text-black sm:text-lg">
                    {sortedNews[active].content}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/85 px-3 py-2 backdrop-blur-sm sm:bottom-5 sm:right-5">
            {sortedNews.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show news item ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  active === index ? "bg-[#800020]" : "bg-[#D6A0AE]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
