"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Group Meeting Highlights",
    caption: "Weekly discussions on alloy design workflows and simulation updates.",
    image: "/photo.png",
  },
  {
    title: "Research Progress Snapshot",
    caption: "Current work in multiscale modeling and thermodynamic analysis.",
    image: "/hero-placeholder.svg",
  },
  {
    title: "Lab and Team Activities",
    caption: "Moments from mentoring, collaboration, and project planning.",
    image: "/iiti-logo.jpg",
  },
];

export default function PhotoCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-14 sm:py-16 lg:py-20" aria-label="News and events gallery">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-7 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl">News and Events</h2>
          <p className="mt-3 text-sm text-[#0D0D0D]/75 sm:text-base">
            Gallery updates from group activities, milestones, and announcements.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.12)]">
          <div className="relative h-[280px] sm:h-[360px] md:h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[active].title}
                initial={{ opacity: 0.2, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0.2, x: -24 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[active].image}
                  alt={slides[active].title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1180px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7 md:p-8">
                  <h3 className="text-xl font-semibold sm:text-2xl">{slides[active].title}</h3>
                  <p className="mt-2 max-w-3xl text-sm text-white/90 sm:text-base">{slides[active].caption}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/85 px-3 py-2 backdrop-blur-sm sm:bottom-5 sm:right-5">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  active === index ? "bg-[#1F2937]" : "bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
