"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const workExperience = [
  {
    id: 1,
    title: "Assistant Professor",
    org: "IIT Indore",
    logo: "/iiti-logo.jpg",
    dept: "Department of Metallurgical Engineering and Materials Science (MEMS)",
    period: "Mar 2023 – Present",
    type: "academic",
    current: true,
    description:
      "Leading the VAMSI Research Group, focusing on computational design of advanced alloys, multiscale modelling, and materials informatics. Mentoring PhD students, postdoctoral researchers, and undergraduate students.",
  },
  {
    id: 2,
    title: "Consultant",
    org: "TCS Research, Tata Consultancy Services",
    logo: "/logos/tcs.jpeg",
    dept: "ICME Group",
    period: "Apr 2022 – Mar 2023",
    type: "industry",
    current: false,
    description:
      "Applied Integrated Computational Materials Engineering (ICME) frameworks to industrial materials challenges. Bridged academic research and industrial application in computational metallurgy.",
  },
  {
    id: 3,
    title: "Postdoctoral Researcher",
    org: "University of California Santa Barbara",
    logo: "/logos/pollock.gif",
    dept: "Pollock Group, Materials Department",
    period: "Dec 2018 – Mar 2022",
    type: "research",
    current: false,
    description:
      "Conducted advanced research on superalloys, Multi-Principal Element Alloys (MPEAs) and Refractory High-Entropy Alloys (HEAs). Investigated deformation pathways, thermodynamics, and phase stability of high-temperature structural materials.",
  },
  {
    id: 4,
    title: "Research Assistant",
    org: "Indian Institute of Science, Bangalore",
    logo: "/logos/pspm.jpeg",
    dept: "DMMG & PSPM Groups",
    period: "2017 – 2018",
    type: "research",
    current: false,
    description:
      "Contributed to research at the Deformation Mechanisms and Modelling Group (DMMG) and Processing, Structure and Properties of Materials Group (PSPM), advancing understanding of deformation in high-temperature alloys.",
  },
  {
    id: 5,
    title: "Researcher",
    org: "TATA Steel",
    logo: "/logos/tata.jpeg",
    dept: "Materials Modelling and Product Development Group, TATA Steel R&D",
    period: "2009 – 2010",
    type: "industry",
    current: false,
    description:
      "Worked on computational materials modelling and product development for steel applications at Jamshedpur, gaining foundational industry experience in materials research.",
  },
  {
    id: 6,
    title: "Senior Engineer",
    org: "ISPAT Industries Ltd.",
    logo: "/logos/ispat.png",
    dept: "Raw Materials Handling Department",
    period: "2006 – 2007",
    type: "industry",
    current: false,
    description:
      "Managed raw materials handling operations at Dolvi, Maharashtra. Gained practical industrial experience in steel manufacturing processes.",
  },
];

const education = [
  {
    degree: "Ph.D. in Materials Engineering",
    institution: "Indian Institute of Science, Bangalore",
    year: "2018",
    description: "Doctoral research on superalloys and high-temperature structural materials, focusing on deformation pathways and alloy design principles.",
  },
  {
    degree: "M.E. in Materials Engineering",
    institution: "Indian Institute of Science, Bangalore",
    year: "2009",
    description: "Advanced coursework and research in materials engineering, laying the foundation for computational materials science.",
  },
  {
    degree: "B.E. in Metallurgical Engineering",
    institution: "Andhra University College of Engineering",
    year: "2006",
    description: "Undergraduate studies in metallurgical engineering, building core competencies in materials science and engineering.",
  },
];

const typeColors = {
  academic: "bg-[#F6E4E8] text-[#800020] border-[#E4B5C0]",
  research: "bg-[#F2D7DE] text-[#6F001B] border-[#D89AA9]",
  industry: "bg-[#EBC7D0] text-[#8E1733] border-[#C86F8A]",
};

const typeLabels = {
  academic: "Academia",
  research: "Research",
  industry: "Industry",
};

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 13 13 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 13 13 0 0 0 2.8.7A2 2 0 0 1 22 16.9Z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M6.9 8.5a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM5.5 10h2.8v8.5H5.5V10Zm4.4 0h2.7v1.2h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 1.9 3.5 4.4v4.4h-2.8v-3.9c0-.9 0-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2v4h-2.8V10Z" />
    </svg>
  );
}

function IconScholar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4" />
    </svg>
  );
}

function IconResearchGate() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M19.586 0H4.414A4.414 4.414 0 0 0 0 4.414v15.172A4.414 4.414 0 0 0 4.414 24h15.172A4.414 4.414 0 0 0 24 19.586V4.414A4.414 4.414 0 0 0 19.586 0zm-7.04 17.544c-.26 0-.52-.03-.78-.075l-1.664 1.664a.52.52 0 0 1-.37.153h-1.39a.52.52 0 0 1-.519-.52v-1.39a.52.52 0 0 1 .153-.37l1.664-1.664a4.17 4.17 0 0 1-.075-.78c0-2.303 1.867-4.17 4.17-4.17s4.17 1.867 4.17 4.17-1.867 4.17-4.17 4.17h.01zm0-6.775a2.605 2.605 0 1 0 0 5.21 2.605 2.605 0 0 0 0-5.21zm-5.94-2.035V6.68c0-.287.233-.52.52-.52h2.035c.287 0 .52.233.52.52v2.054c0 .287-.233.52-.52.52H7.126a.52.52 0 0 1-.52-.52z" />
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="M22 5.8a8.8 8.8 0 0 1-2.5.7 4.2 4.2 0 0 0 1.8-2.4c-.9.6-2 .9-3 .1a4.3 4.3 0 0 0-7.4 4A12.1 12.1 0 0 1 3 4.9a4.3 4.3 0 0 0 1.3 5.8 4.2 4.2 0 0 1-1.9-.5v.1a4.3 4.3 0 0 0 3.4 4.2c-.4.1-.8.1-1.2 0a4.3 4.3 0 0 0 4 3 8.6 8.6 0 0 1-5.3 1.8c-.3 0-.7 0-1-.1A12.2 12.2 0 0 0 9 21c8 0 12.5-6.8 12.2-12.8A8.8 8.8 0 0 0 22 5.8Z" />
    </svg>
  );
}

function IconGraduate() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4" />
      <path d="M21 10v5" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
    </svg>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function FacultyPage() {
  return (
    <div className={`${inter.className} min-h-screen bg-white text-[#4A0013]`}>
      <Header />

      <main className="mx-auto w-full max-w-[1240px] px-4 py-10 sm:px-6 md:px-8 lg:px-10">
        {/* Breadcrumb */}
        {/* <nav className="mb-8 flex items-center gap-2 text-sm text-[#8A5A67]">
          <Link href="/" className="transition-colors hover:text-[#800020]">Home</Link>
          <span>/</span>
          <Link href="/#people" className="transition-colors hover:text-[#800020]">Team</Link>
          <span>/</span>
          <span className="font-medium text-[#800020]">Dr. K. V. Vamsi</span>
        </nav> */}

        {/* Profile Header Card */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 overflow-hidden rounded-2xl border border-[#E4B5C0] bg-white shadow-[0_2px_20px_rgba(128,0,32,0.08)]"
        >
          {/* Banner */}
          <div className="relative h-32 bg-gradient-to-br from-[#5F0017] via-[#800020] to-[#B24A67]">
            <div
              className="absolute inset-0 opacity-18"
              style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 40%)",
              }}
            />
          </div>

          <div className="px-6 pb-6 sm:px-8 sm:pb-8">
            {/* Avatar */}
            <div className="relative -mt-14 mb-4">
              <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-[#F3DDE3] shadow-md sm:h-28 sm:w-28">
                <Image
                  src="/vamsi_pfp.jpeg"
                  alt="Dr. K. V. Vamsi"
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className={`${playfair.className} text-2xl font-bold text-[#800020] sm:text-3xl`}>
                    Dr. K. V. Vamsi
                  </h1>
                  <span className="rounded-full border border-[#E4B5C0] bg-[#F6E4E8] px-2.5 py-0.5 text-xs font-semibold text-[#800020]">
                    Principal Investigator
                  </span>
                </div>

                <p className="mt-1 text-base font-medium text-[#6F3141]">
                  Assistant Professor · Department of Metallurgical Engineering and Materials Science
                </p>
                <p className="text-sm text-[#8A5A67]">Indian Institute of Technology Indore</p>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#7F4B59]">
                  <a href="mailto:kvvamsi@iiti.ac.in" className="flex items-center gap-1.5 transition-colors hover:text-[#800020]">
                    <IconMail /> kvvamsi@iiti.ac.in
                  </a>
                  <span className="flex items-center gap-1.5">
                    <IconPhone /> +91-731-660-3333 ext. 5568
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href="https://www.linkedin.com/in/kvvamsi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5E3E7] text-[#800020] transition-all hover:bg-[#800020] hover:text-white"
                >
                  <IconLinkedIn />
                </a>
                <a
                  href="https://scholar.google.co.in/citations?user=ducGUjAAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Scholar"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5E3E7] text-[#800020] transition-all hover:bg-[#800020] hover:text-white"
                >
                  <IconScholar />
                </a>
                <a
                  href="https://www.researchgate.net/profile/K-V-Vamsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ResearchGate"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5E3E7] text-[#800020] transition-all hover:bg-[#800020] hover:text-white"
                >
                  <IconResearchGate />
                </a>
                <a
                  href="https://twitter.com/kvvamsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5E3E7] text-[#800020] transition-all hover:bg-[#800020] hover:text-white"
                >
                  <IconTwitter />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* LEFT – Timeline sections */}
          <div className="space-y-8">

            {/* About */}
            <motion.section
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#E4B5C0] bg-white px-6 py-6 shadow-[0_2px_14px_rgba(128,0,32,0.06)] sm:px-8"
            >
              <h2 className={`${playfair.className} mb-4 text-xl font-semibold text-[#800020]`}>About</h2>
              <div className="space-y-3 text-[0.97rem] leading-relaxed text-[#6F3141]">
                <p>
                  Welcome to my profile! I am Dr. K. V. Vamsi, an Assistant Professor in the Department of
                  Metallurgical Engineering and Materials Science at the Indian Institute of Technology Indore, India.
                </p>
                <p>
                  A deep fascination with high-temperature structural alloys has driven my research journey.
                  Specifically, my expertise lies in superalloys — a field that has been a central focus since my PhD
                  studies. I have dedicated my career to unravelling the intricacies of these exceptional materials,
                  exploring alloy design principles and deformation pathways crucial for high-temperature applications.
                </p>
                <p>
                  In addition to my work on superalloys, I have also ventured into the exciting domain of
                  Multi-Principal Element Alloys (MPEAs) during my Postdoctoral research. This exploration has
                  broadened my perspective, allowing me to draw insights from diverse alloy systems and apply them to
                  the challenges of high-temperature structural materials.
                </p>
                <p>
                  I am deeply passionate about both research and education. My work is driven by the pursuit of pushing
                  the boundaries of our understanding of superalloys and high-temperature structural materials.
                  Equally important to me is mentoring the next generation of materials scientists and engineers.
                </p>
              </div>
            </motion.section>

            {/* Work Experience Timeline */}
            <motion.section
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#E4B5C0] bg-white px-6 py-6 shadow-[0_2px_14px_rgba(128,0,32,0.06)] sm:px-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#F5E3E7] text-[#800020]">
                  <IconBriefcase />
                </div>
                <h2 className={`${playfair.className} text-xl font-semibold text-[#800020]`}>Work Experience</h2>
              </div>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-[#E4B5C0]" />

                <ol className="space-y-0">
                  {workExperience.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      className="relative pl-10 pb-8 last:pb-0"
                    >
                      {/* Organization logo marker */}
                      <div className={`absolute left-0 top-1 inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[#E4B5C0] bg-white p-0.5 shadow-sm ${item.current ? "ring-2 ring-offset-1 ring-[#800020]/35" : ""}`}>
                        <Image
                          src={item.logo}
                          alt={`${item.org} logo`}
                          width={28}
                          height={28}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="rounded-xl border border-[#F1DCE2] bg-[#FFF8FA] px-4 py-4 transition-all duration-200 hover:border-[#E4B5C0] hover:bg-white">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-[1rem] font-semibold text-[#800020]">{item.title}</h3>
                              {item.current && (
                                <span className="rounded-full border border-[#E4B5C0] bg-[#F6E4E8] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#800020]">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="mt-0.5 text-sm font-medium text-[#6F3141]">{item.org}</p>
                            <p className="text-xs text-[#8A5A67]">{item.dept}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${typeColors[item.type]}`}>
                              {typeLabels[item.type]}
                            </span>
                            <span className="whitespace-nowrap text-xs text-[#A06A78]">{item.period}</span>
                          </div>
                        </div>
                        <p className="mt-2.5 text-[0.88rem] leading-relaxed text-[#6F3141]">{item.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </motion.section>

            {/* Education Timeline */}
            <motion.section
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#E4B5C0] bg-white px-6 py-6 shadow-[0_2px_14px_rgba(128,0,32,0.06)] sm:px-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#F5E3E7] text-[#800020]">
                  <IconGraduate />
                </div>
                <h2 className={`${playfair.className} text-xl font-semibold text-[#800020]`}>Education</h2>
              </div>

              <div className="relative">
                <div className="absolute left-[9px] top-2 bottom-2 w-[2px] bg-[#E4B5C0]" />

                <ol className="space-y-0">
                  {education.map((item, index) => (
                    <motion.li
                      key={item.degree}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      className="relative pl-8 pb-8 last:pb-0"
                    >
                      <div className="absolute left-0 top-1 h-5 w-5 rounded-full border-[3px] border-white bg-[#800020] shadow-sm" />

                      <div className="rounded-xl border border-[#F1DCE2] bg-[#FFF8FA] px-4 py-4 transition-all duration-200 hover:border-[#E4B5C0] hover:bg-white">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className="text-[1rem] font-semibold text-[#800020]">{item.degree}</h3>
                            <p className="mt-0.5 text-sm font-medium text-[#6F3141]">{item.institution}</p>
                          </div>
                          <span className="shrink-0 rounded-full border border-[#E4B5C0] bg-[#F6E4E8] px-2.5 py-0.5 text-xs font-semibold text-[#800020]">
                            {item.year}
                          </span>
                        </div>
                        <p className="mt-2.5 text-[0.88rem] leading-relaxed text-[#6F3141]">{item.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </motion.section>
          </div>

          {/* RIGHT Sidebar */}
          <div className="space-y-6">

            {/* Research Interests */}
            <motion.aside
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#E4B5C0] bg-white px-5 py-5 shadow-[0_2px_14px_rgba(128,0,32,0.06)]"
            >
              <h2 className={`${playfair.className} mb-4 text-lg font-semibold text-[#800020]`}>Research Interests</h2>
              <ul className="space-y-2.5">
                {[
                  "Superalloys & High-Temperature Structural Materials",
                  "Multi-Principal Element Alloys (MPEAs)",
                  "Refractory High-Entropy Alloys (HEAs)",
                  "Computational Thermodynamics (CALPHAD)",
                  "Density Functional Theory (DFT)",
                  "Deformation Mechanisms & Modelling",
                  "Integrated Computational Materials Engineering (ICME)",
                  "Materials Informatics & Data-Driven Design",
                ].map((interest) => (
                  <li key={interest} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#800020]" />
                    <span className="text-[0.875rem] leading-snug text-[#6F3141]">{interest}</span>
                  </li>
                ))}
              </ul>
            </motion.aside>

            {/* Quick Stats */}
            <motion.aside
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#6F001B] bg-gradient-to-br from-[#6F001B] via-[#800020] to-[#9E2F4F] px-5 py-5 shadow-[0_2px_14px_rgba(128,0,32,0.15)]"
            >
              <h2 className={`${playfair.className} mb-4 text-lg font-semibold text-white`}>Quick Facts</h2>
              <div className="space-y-3">
                {[
                  { label: "Years of Experience", value: "17+" },
                  { label: "Positions Held", value: "6" },
                  { label: "Institutions", value: "4" },
                  { label: "Research Focus", value: "Superalloys & MPEAs" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between rounded-lg bg-white/12 px-3 py-2.5">
                    <span className="text-xs text-[#F6E4E8]">{stat.label}</span>
                    <span className="text-sm font-semibold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.aside>

            {/* External Links */}
            <motion.aside
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#E4B5C0] bg-white px-5 py-5 shadow-[0_2px_14px_rgba(128,0,32,0.06)]"
            >
              <h2 className={`${playfair.className} mb-4 text-lg font-semibold text-[#800020]`}>External Profiles</h2>
              <div className="space-y-2.5">
                {[
                  { label: "Google Scholar", href: "https://scholar.google.co.in/citations?user=ducGUjAAAAAJ&hl=en", icon: <IconScholar /> },
                  { label: "ResearchGate", href: "https://www.researchgate.net/profile/K-V-Vamsi", icon: <IconResearchGate /> },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/kvvamsi/", icon: <IconLinkedIn /> },
                  { label: "IIT Indore – MEMS Dept.", href: "http://mems.iiti.ac.in/", icon: <IconGraduate /> },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-[#F1DCE2] bg-[#FFF8FA] px-3 py-2.5 text-sm font-medium text-[#6F3141] transition-all hover:border-[#E4B5C0] hover:bg-white hover:text-[#800020]"
                  >
                    <span className="text-[#800020]">{link.icon}</span>
                    {link.label}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto h-3.5 w-3.5 text-[#B18A94]">
                      <path d="M14 5h5v5M10 14 19 5M19 13v6H5V5h6" />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.aside>

            {/* CTA */}
            <motion.aside
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-[#E4B5C0] bg-white px-5 py-5 shadow-[0_2px_14px_rgba(128,0,32,0.06)]"
            >
              <h2 className={`${playfair.className} mb-2 text-lg font-semibold text-[#800020]`}>Interested in joining?</h2>
              <p className="mb-4 text-sm leading-relaxed text-[#6F3141]">
                We are actively looking for PhD students and postdoctoral researchers in computational materials science.
              </p>
              <a
                href="#contact"
                className="inline-flex h-10 w-full items-center justify-center rounded-xl bg-[#800020] text-sm font-semibold text-white transition-colors hover:bg-[#5F0017]"
              >
                Get in Touch
              </a>
            </motion.aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}