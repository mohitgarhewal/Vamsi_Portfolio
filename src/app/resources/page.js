import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/ResourceCard";
import Teaching from "@/components/Teaching";

const sectionHeadingClass = "text-2xl font-bold tracking-tight text-[#1F2937] sm:text-[1.9rem]";
const sectionSubtextClass = "mt-2 max-w-3xl text-sm text-[#0D0D0D]/75 sm:text-base";

const softwareTools = [
  {
    title: "Density Functional Theory",
    description: "Electronic-structure tools used for first-principles simulations.",
    items: [
      { label: "VASP", href: "https://www.vasp.at/" },
      { label: "Quantum Espresso", href: "https://www.quantum-espresso.org/" },
      { label: "ABINIT", href: "https://www.abinit.org/" },
    ],
  },
  {
    title: "Cluster Expansion",
    description: "Software for first-principles statistical mechanical alloy modelling.",
    items: [
      {
        label: "CASM",
        href: "https://prisms-center.github.io/CASMcode_docs/",
      },
      {
        label: "ICET",
        href: "https://icet.materialsmodeling.org/index.html",
      },
      {
        label: "ATAT",
        href: "https://www.brown.edu/Departments/Engineering/Labs/avdw/atat/",
      },
    ],
  },
  {
    title: "Molecular Dynamics",
    description: "Tools for atomistic dynamics and thermodynamic studies.",
    items: [
      { label: "LAMMPS", href: "https://www.lammps.org/#gsc.tab=0" },
    ],
  },
  {
    title: "Processing Tools",
    description: "Utilities for structure building, conversion, and atomistic workflows.",
    items: [
      { label: "Atomsk", href: "https://atomsk.univ-lille.fr/links.php" },
      { label: "ASE", href: "https://wiki.fysik.dtu.dk/ase/" },
      { label: "Multishifter", href: "https://github.com/goirijo/multishifter" },
    ],
  },
  {
    title: "Materials Databases & Repositories",
    description: "Reference databases used for screening, comparison, and validation.",
    items: [
      { label: "Materials Project", href: "https://materialsproject.org/" },
      { label: "AFLOW", href: "http://www.aflow.org/" },
      {
        label: "Crystalium",
        href: "http://crystalium.materialsvirtuallab.org/",
      },
      { label: "NIST GitHub Repository", href: "https://github.com/usnistgov" },
      {
        label: "Interatomic Potentials Repository",
        href: "https://www.ctcms.nist.gov/potentials/",
      },
    ],
  },
  {
    title: "Visualization Tools",
    description: "Applications for crystal structure and atomistic simulation visualization.",
    items: [
      { label: "OVITO", href: "https://www.ovito.org/about/" },
      { label: "VESTA", href: "https://jp-minerals.org/vesta/en/" },
      { label: "XcrySDen", href: "http://www.xcrysden.org/" },
      { label: "VMD", href: "http://www.ks.uiuc.edu/Research/vmd/" },
    ],
  },
];

const templates = [
  {
    title: "Project Reporting Template",
    description: "Template for periodic project summaries and technical deliverables.",
    href: "#",
    actionLabel: "Preview",
  },
  {
    title: "Group Handbook",
    description: "Guide for lab processes, documentation standards, and onboarding.",
    href: "#",
    actionLabel: "Preview",
  },
  {
    title: "Seminar Slide Format",
    description: "Slide deck format for research group talks and conference updates.",
    href: "#",
    actionLabel: "Preview",
  },
];

function SectionBlock({ title, subtitle, items }) {
  return (
    <section className="mt-14 first:mt-0">
      <header className="mb-6">
        <h2 className={sectionHeadingClass}>{title}</h2>
        <p className={sectionSubtextClass}>{subtitle}</p>
      </header>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-[#BF7AB4]/25 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition-shadow duration-200 hover:shadow-[0_14px_30px_rgba(15,23,42,0.1)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex rounded-full bg-[#BF7AB4]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A64195]">
                  Software
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#1F2937]">
                  {item.title}
                </h3>
              </div>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-[#0D0D0D]/75">{item.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {item.items.map((linkItem) => (
                <li key={linkItem.label}>
                  <a
                    href={linkItem.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-[#BF7AB4]/25 bg-[#F2F2F2] px-3.5 py-2 text-sm font-medium text-[#1F2937] transition-colors hover:border-[#A64195] hover:bg-[#A64195] hover:text-white"
                  >
                    <span>{linkItem.label}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M8 7h9v9" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function TemplateSection({ title, subtitle, items }) {
  return (
    <section className="mt-14 first:mt-0">
      <header className="mb-6">
        <h2 className={sectionHeadingClass}>{title}</h2>
        <p className={sectionSubtextClass}>{subtitle}</p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <ResourceCard
            key={item.title}
            title={item.title}
            description={item.description}
            href={item.href}
            actionLabel={item.actionLabel}
          />
        ))}
      </div>
    </section>
  );
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#0D0D0D]">
      <Header />

      <main className="mx-auto w-full max-w-[1240px] px-4 py-10 sm:px-6 md:px-8 lg:px-10">
        <nav className="mb-8 flex items-center gap-2 text-sm text-[#0D0D0D]/60">
          <Link href="/" className="transition-colors hover:text-[#A64195]">
            Home
          </Link>
          <span>/</span>
          <span className="font-medium text-[#0D0D0D]">Resources</span>
        </nav>

        <section className="rounded-2xl border border-[#BF7AB4]/30 bg-white p-6 shadow-[0_10px_22px_rgba(166,65,149,0.08)] sm:p-7">
          <h1 className="text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl">Resources</h1>
          <p className="mt-3 max-w-4xl text-base leading-relaxed text-[#0D0D0D]/75">
            Software, teaching material, and templates to support research activities and collaboration.
          </p>
        </section>

        <SectionBlock
          title="Software / Tools"
          subtitle="Selected software and toolsets used across simulation, processing, databases, and visualization."
          items={softwareTools}
        />

        <Teaching />

        <TemplateSection
          title="Templates"
          subtitle="Reference files and documents for presentations, reporting, and internal workflows."
          items={templates}
        />
      </main>

      <Footer />
    </div>
  );
}
