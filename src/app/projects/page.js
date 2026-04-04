"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_PROJECTS } from "@/components/Projects";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const ALL_AREAS = ["All", ...Array.from(new Set(ALL_PROJECTS.map((p) => p.area)))];
const ALL_STATUSES = ["All", "Ongoing", "Completed"];

const areaColors = {
  "Alloy Design": "bg-blue-50 text-blue-700",
  Superalloys: "bg-orange-50 text-orange-700",
  ICME: "bg-violet-50 text-violet-700",
  "Computational Methods": "bg-teal-50 text-teal-700",
  Intermetallics: "bg-rose-50 text-rose-700",
};

const statusColors = {
  Ongoing: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Completed: "bg-slate-100 text-slate-600 border-slate-200",
};

const stripeColors = {
  "Alloy Design": "from-blue-400 to-blue-600",
  Superalloys: "from-orange-400 to-red-500",
  ICME: "from-violet-400 to-purple-600",
  "Computational Methods": "from-teal-400 to-cyan-500",
  Intermetallics: "from-rose-400 to-pink-500",
};

function ProjectCard({ project, index }) {
  return (
    <motion.article
      key={project.id}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.38, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_2px_14px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_8px_28px_rgba(15,23,42,0.1)] ${
        project.highlight ? "border-[#0D1733]/30 ring-1 ring-[#0D1733]/10" : "border-slate-200"
      }`}
    >
      {project.highlight && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#0D1733] px-2.5 py-0.5 text-[10px] font-bold text-white tracking-wide uppercase">
            ★ Featured
          </span>
        </div>
      )}
      <div className={`h-1 w-full bg-gradient-to-r ${stripeColors[project.area] || "from-slate-400 to-slate-600"}`} />
      <div className="flex flex-1 flex-col px-5 py-5">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${areaColors[project.area] || "bg-slate-100 text-slate-600"}`}>
            {project.area}
          </span>
          <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${statusColors[project.status]}`}>
            {project.status}
          </span>
          <span className="text-[11px] text-slate-400">{project.period}</span>
        </div>
        <h3 className={`${playfair.className} text-[1.1rem] font-semibold leading-snug text-[#0D1733]`}>
          {project.title}
        </h3>
        <p className={`${inter.className} mt-1 text-[0.78rem] text-slate-500`}>{project.funder}</p>
        <p className={`${inter.className} mt-3 flex-1 text-[0.88rem] leading-relaxed text-[#4B607E]`}>
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const [areaFilter, setAreaFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = ALL_PROJECTS.filter((p) => {
    const areaOk = areaFilter === "All" || p.area === areaFilter;
    const statusOk = statusFilter === "All" || p.status === statusFilter;
    return areaOk && statusOk;
  });

  return (
    <div className={`${inter.className} min-h-screen bg-[#f8fafc]`}>
      <Header />

      <main className="mx-auto w-full max-w-[1240px] px-4 py-10 sm:px-6 md:px-8 lg:px-10">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">All Projects</span>
        </nav>

        {/* Page header */}
        <div className="mb-10">
          <h1 className={`${playfair.className} text-3xl font-bold tracking-[-0.02em] text-[#0D1733] sm:text-4xl`}>
            Research Projects
          </h1>
          <p className={`${inter.className} mt-3 max-w-3xl text-base text-[#4B607E]`}>
            A complete overview of funded, ongoing, and completed research initiatives at the VAMSI Research Group, IIT Indore.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-6">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Research Area</p>
            <div className="flex flex-wrap gap-2">
              {ALL_AREAS.map((area) => (
                <button
                  key={area}
                  onClick={() => setAreaFilter(area)}
                  className={`rounded-lg px-3 py-1.5 text-[12px] font-medium transition-all ${
                    areaFilter === area
                      ? "bg-[#0D1733] text-white shadow-sm"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-slate-400"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Status</p>
            <div className="flex gap-2">
              {ALL_STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`rounded-lg px-3 py-1.5 text-[12px] font-medium transition-all ${
                    statusFilter === s
                      ? "bg-[#0D1733] text-white shadow-sm"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-slate-400"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Count */}
        <p className={`${inter.className} mb-6 text-sm text-slate-500`}>
          Showing <span className="font-semibold text-[#0D1733]">{filtered.length}</span> of{" "}
          <span className="font-semibold">{ALL_PROJECTS.length}</span> projects
        </p>

        {/* Grid */}
        <motion.div layout className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-3 h-10 w-10">
              <path d="M9.172 16.172a4 4 0 0 1 5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
            </svg>
            <p className="text-sm">No projects match the selected filters.</p>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}