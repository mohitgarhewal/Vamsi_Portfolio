"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const ALL_PROJECTS = [
  {
    id: "yfrsg-2023",
    title: "Computational Design of Multi-Principal Element Alloys",
    funder: "Young Faculty Research Seed Grant (YFRSG), IIT Indore",
    period: "2023 – 2025",
    status: "Ongoing",
    area: "Alloy Design",
    description:
      "Develops first-principles and CALPHAD-based frameworks for the design of novel MPEAs and refractory high-entropy alloys. The project targets high-temperature structural applications by mapping phase stability, planar fault energetics, and deformation pathways across vast composition spaces.",
    tags: ["DFT", "CALPHAD", "MPEAs", "HEAs", "Phase Stability"],
    highlight: true,
  },
  {
    id: "superalloy-apb",
    title: "Antiphase Boundary Energetics in L12 Superalloys",
    funder: "Institute Research, IIT Indore",
    period: "2023 – Present",
    status: "Ongoing",
    area: "Superalloys",
    description:
      "Investigates the formation energies and proximate structures of antiphase boundaries (APBs) in L12 intermetallics. Combining DFT with thermodynamic modelling to predict solute effects on APB energies in multicomponent Ni- and Co-base superalloys relevant to turbine blade applications.",
    tags: ["APB Energies", "L12 Compounds", "Ni-base Superalloys", "DFT"],
    highlight: false,
  },
  {
    id: "icme-framework",
    title: "ICME Frameworks for Process–Structure–Property Linkages",
    funder: "Collaborative / TCS Research",
    period: "2022 – Present",
    status: "Ongoing",
    area: "ICME",
    description:
      "Establishes integrated computational frameworks linking atomistic simulations, thermodynamics, and data-driven models to macroscopic alloy properties. Applies generative adversarial networks and machine learning for process–structure linkage prediction in metallic systems.",
    tags: ["ICME", "Machine Learning", "GANs", "Multiscale Modelling"],
    highlight: false,
  },
  {
    id: "high-throughput-planar",
    title: "High-Throughput Estimation of Planar Fault Energies",
    funder: "Institute Research, IISc / UCSB",
    period: "2017 – 2022",
    status: "Completed",
    area: "Computational Methods",
    description:
      "Developed scalable DFT workflows to compute stacking fault energies and intrinsic barriers across hundreds of A3B compounds with L12 structure. Enabled rapid alloy screening for deformation resistance in Ni-, Co-, and multi-principal-element systems.",
    tags: ["DFT", "High-Throughput", "Stacking Fault Energy", "L12"],
    highlight: false,
  },
  {
    id: "co-ni-mpea-design",
    title: "Design of Ni–Co–Ru Multi-Principal Element Alloys",
    funder: "UCSB Pollock Group (Postdoctoral Research)",
    period: "2019 – 2022",
    status: "Completed",
    area: "Alloy Design",
    description:
      "Systematically designed and characterised novel Ni–Co–Ru MPEAs using CALPHAD-guided composition optimisation. Investigated yield strength anomaly, deformation microstructure, and precipitate phase stability to identify promising high-performance alloy compositions.",
    tags: ["Ni-Co-Ru", "CALPHAD", "Yield Anomaly", "MPEAs"],
    highlight: false,
  },
  {
    id: "tial-creep",
    title: "Phase Stability in γ-TiAl Alloys During Creep",
    funder: "IISc Research (PhD)",
    period: "2016 – 2018",
    status: "Completed",
    area: "Intermetallics",
    description:
      "Characterised the formation and stability of precipitate phases in near-lamellar γ-TiAl alloys under sustained creep loading. Combined experimental transmission electron microscopy with thermodynamic modelling to rationalise microstructural evolution.",
    tags: ["TiAl", "Creep", "Precipitate Stability", "TEM"],
    highlight: false,
  },
];

const statusColors = {
  Ongoing: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Completed: "bg-slate-100 text-slate-600 border-slate-200",
};

const areaColors = {
  "Alloy Design": "bg-blue-50 text-blue-700",
  Superalloys: "bg-orange-50 text-orange-700",
  ICME: "bg-violet-50 text-violet-700",
  "Computational Methods": "bg-teal-50 text-teal-700",
  Intermetallics: "bg-rose-50 text-rose-700",
};

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_2px_14px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_8px_28px_rgba(15,23,42,0.1)] ${
        project.highlight ? "border-[#0D1733]/30 ring-1 ring-[#0D1733]/10" : "border-slate-200"
      }`}
    >
      {project.highlight && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#0D1733] px-2.5 py-0.5 text-[10px] font-bold text-white tracking-wide uppercase">
            ★ Featured
          </span>
        </div>
      )}

      {/* Colour stripe */}
      <div className={`h-1 w-full bg-gradient-to-r ${
        project.area === "Alloy Design" ? "from-blue-400 to-blue-600" :
        project.area === "Superalloys" ? "from-orange-400 to-red-500" :
        project.area === "ICME" ? "from-violet-400 to-purple-600" :
        project.area === "Computational Methods" ? "from-teal-400 to-cyan-500" :
        "from-rose-400 to-pink-500"
      }`} />

      <div className="flex flex-1 flex-col px-5 py-5">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${areaColors[project.area] || "bg-slate-100 text-slate-600"}`}>
            {project.area}
          </span>
          <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${statusColors[project.status]}`}>
            {project.status}
          </span>
          <span className="text-[11px] text-slate-400">{project.period}</span>
        </div>

        <h3 className={`${playfair.className} text-[1.1rem] font-semibold leading-snug text-[#0D1733] sm:text-[1.18rem]`}>
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

export default function Projects() {
  const featured = ALL_PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-24 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px]">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className={`${playfair.className} text-[2.2rem] font-bold leading-none tracking-[-0.01em] text-[#0D1733] sm:text-[3rem]`}>
              Projects
            </h2>
            <p className={`${inter.className} mt-3 max-w-2xl text-base text-[#355178] sm:text-[1.05rem]`}>
              Funded research initiatives and ongoing investigations at the VAMSI Research Group
            </p>
          </div>
          <Link
            href="/projects"
            className={`${inter.className} inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#0D1733] transition-all hover:border-[#0D1733] hover:shadow-md`}
          >
            View All Projects
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        {/* More projects teaser */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex items-center justify-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 px-6 py-5"
        >
          <div className="flex -space-x-2">
            {["bg-blue-400", "bg-orange-400", "bg-violet-400"].map((c, i) => (
              <div key={i} className={`h-7 w-7 rounded-full border-2 border-white ${c}`} />
            ))}
          </div>
          <p className={`${inter.className} text-sm text-slate-600`}>
            <span className="font-semibold text-[#0D1733]">{ALL_PROJECTS.length - 3} more projects</span> available — completed &amp; collaborative work
          </p>
          <Link
            href="/projects"
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-[#0D1733] px-4 py-2 text-xs font-semibold text-white hover:bg-[#172650] transition-colors"
          >
            See All
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}