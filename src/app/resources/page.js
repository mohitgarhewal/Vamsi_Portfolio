import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/ResourceCard";

const externalLinks = [
  {
    title: "Google Scholar",
    description: "Explore publications, citation records, and scholarly profiles relevant to the research group.",
    href: "https://scholar.google.com",
  },
  {
    title: "ResearchGate",
    description: "Access research updates, project discussions, and collaborative academic networks.",
    href: "https://www.researchgate.net",
  },
  {
    title: "IIT Indore",
    description: "Visit the official IIT Indore website for institutional updates, facilities, and announcements.",
    href: "https://www.iiti.ac.in",
  },
  {
    title: "Join Us",
    description: "Learn about openings and opportunities to work with the group in current projects.",
    href: "/#positions",
    actionLabel: "View Positions",
  },
];

const toolsAndDatasets = [
  {
    title: "High-Temperature Alloy Dataset",
    description: "Curated dataset placeholder for phase stability, defect energetics, and benchmark compositions.",
    href: "#",
    actionLabel: "Coming Soon",
  },
  {
    title: "CALPHAD Workflow Toolkit",
    description: "Placeholder for scripts and templates used in thermodynamic modeling workflows.",
    href: "#",
    actionLabel: "Coming Soon",
  },
  {
    title: "DFT Setup Templates",
    description: "Placeholder collection of reusable simulation input templates and convergence guidelines.",
    href: "#",
    actionLabel: "Coming Soon",
  },
];

const usefulMaterials = [
  {
    title: "Project Reporting Template",
    description: "Placeholder document for preparing periodic project summaries and technical deliverables.",
    href: "#",
    actionLabel: "Preview",
  },
  {
    title: "Group Handbook",
    description: "Placeholder PDF guide for lab processes, documentation standards, and onboarding.",
    href: "#",
    actionLabel: "Preview",
  },
  {
    title: "Seminar Slide Format",
    description: "Placeholder slide deck template for research group talks and conference updates.",
    href: "#",
    actionLabel: "Preview",
  },
];

function SectionBlock({ title, subtitle, items }) {
  return (
    <section className="mt-14 first:mt-0">
      <header className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-[#1F2937] sm:text-[1.9rem]">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm text-[#0D0D0D]/75 sm:text-base">{subtitle}</p>
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
            External platforms, tools, and useful documents to support research activities, collaboration, and
            academic workflows.
          </p>
        </section>

        <SectionBlock
          title="External Links"
          subtitle="Direct access to major research and institutional platforms relevant to the group."
          items={externalLinks}
        />

        <SectionBlock
          title="Resources / Tools"
          subtitle="Datasets and computational resources that will be published for group members and collaborators."
          items={toolsAndDatasets}
        />

        <SectionBlock
          title="Useful Materials"
          subtitle="Reference files and documents for academic presentations, reporting, and internal workflows."
          items={usefulMaterials}
        />
      </main>

      <Footer />
    </div>
  );
}
