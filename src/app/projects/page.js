"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS_DATA } from "@/lib/projectsData";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto w-full max-w-[1240px] px-4 py-10 sm:px-6 md:px-8 lg:px-10">
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-800 transition-colors">Home</Link>
          <span>/</span>
          <span className="font-medium text-[#0D0D0D]">Projects</span>
        </nav>

        <div className="mb-8 rounded-2xl border border-[#BF7AB4]/30 bg-white p-6 shadow-[0_8px_20px_rgba(166,65,149,0.08)] sm:p-7">
          <h1 className="text-3xl font-bold tracking-tight text-[#800020] sm:text-4xl">
            Research Projects
          </h1>
        </div>

        <p className="mb-6 text-sm text-[#0D0D0D]/70">
          Showing <span className="font-semibold text-[#A64195]">{PROJECTS_DATA.length}</span> funded projects
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}