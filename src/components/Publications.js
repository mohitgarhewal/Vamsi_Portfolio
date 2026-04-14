"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const publications = [
  {
    year: "2024",
    title: "Antiphase Boundaries in Intermetallics: Proximate Structures, Formation Energies, and Chemical Stability",
    authors: "K.V. Vamsi, Ram Seshadri",
    doi: "10.1103/PhysRevMaterials.8.013610",
    scholarUrl: "https://doi.org/10.1103/PhysRevMaterials.8.013610",
  },
  {
    year: "2022",
    title: "Phase Transformation Temperatures, γ–γ′ Lattice Parameter Misfit, and γ′ Precipitate Morphology in Co–Ti–V Alloys",
    authors: "Verma, S.K., Pramanik, A., Jyothsna, K., ..., K.V. Vamsi, S. Karthikeyan",
    doi: "10.1007/s11661-022-06806-y",
    scholarUrl: "https://doi.org/10.1007/s11661-022-06806-y",
  },
  {
    year: "2021",
    title: "Precipitate Shearing, Fault Energies, and Solute Segregation to Planar Faults in Ni-, CoNi-, and Co-Base Superalloys",
    authors: "Y.M. Eggeler, K.V. Vamsi, T.M. Pollock",
    doi: "10.1146/annurev-matsci-102419-011433",
    scholarUrl: "https://doi.org/10.1146/annurev-matsci-102419-011433",
  },
  {
    year: "2020",
    title: "A New Proximate Structure for the APB (111) in L12 Compounds",
    authors: "K.V. Vamsi, T.M. Pollock",
    doi: "10.1016/j.scriptamat.2020.02.021",
    scholarUrl: "https://doi.org/10.1016/j.scriptamat.2020.02.021",
  },
  {
    year: "2018",
    title: "High-Throughput Estimation of Planar Fault Energies in A3B Compounds with L12 Structure",
    authors: "K.V. Vamsi, S. Karthikeyan",
    doi: "10.1016/j.actamat.2017.11.051",
    scholarUrl: "https://doi.org/10.1016/j.actamat.2017.11.051",
  },
  {
    year: "2017",
    title: "Yield Anomaly in L12 Co3AlxW1−x vis-à-vis Ni3Al",
    authors: "K.V. Vamsi, S. Karthikeyan",
    doi: "10.1016/j.scriptamat.2016.11.019",
    scholarUrl: "https://doi.org/10.1016/j.scriptamat.2016.11.019",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v6H5V5h6" />
    </svg>
  );
}

export default function Publications() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("publications");

  useEffect(() => {
    const tabParam = searchParams?.get("tab");
    if (tabParam && ["publications", "proceedings", "talks"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  return (
    <section
      id="contributions"
      className={`${inter.className} bg-white px-6 py-16 md:px-10 md:py-20 lg:px-16`}
    >
      <div className="mx-auto w-full max-w-[1160px]">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-[-0.02em] text-[#1F2937] md:text-5xl">
            {activeTab === "publications" && "Publications"}
            {activeTab === "proceedings" && "Conference Proceedings"}
            {activeTab === "talks" && "Talks"}
          </h2>
          <p className="mt-3 text-base font-medium text-[#0D0D0D]/75 md:text-lg">
            {activeTab === "publications" && "Our research publications"}
            {activeTab === "proceedings" && "Conference proceedings and presentations"}
            {activeTab === "talks" && "Invited talks and seminars"}
          </p>
        </div>

        {/* Publications Tab */}
        {activeTab === "publications" && (
          <div className="mt-12 space-y-6 md:mt-16 md:space-y-7">
            {publications.slice(0, 6).map((item, index) => (
              <motion.article
                key={`${item.doi}`}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="rounded-2xl border border-[#BF7AB4]/30 bg-white px-5 py-6 shadow-[0_2px_14px_rgba(166,65,149,0.06)] hover:shadow-[0_8px_28px_rgba(166,65,149,0.08)] md:px-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[1.1rem] font-semibold leading-snug text-[#1F2937] md:text-[1.25rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#0D0D0D]/75 md:text-[0.95rem]">{item.authors}</p>
                    <a
                      href={item.scholarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-[0.79rem] font-medium text-[#A64195] transition-colors hover:text-[#964196]"
                    >
                      <ExternalLinkIcon />
                      <span>DOI: {item.doi}</span>
                    </a>
                  </div>
                  <motion.a
                    href={item.scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="inline-flex h-10 items-center justify-center rounded-xl bg-[#A64195] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#964196] md:min-w-[120px]"
                  >
                    View Paper
                  </motion.a>
                </div>
              </motion.article>
            ))}

            {publications.length > 6 && (
              <div className="mt-8 flex justify-center">
                <a
                  href="https://scholar.google.com/citations?user=ducGUjAAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#A64195] px-6 py-3 text-base font-semibold text-[#A64195] transition-colors hover:bg-[#A64195] hover:text-white"
                >
                  View All Publications
                  <ExternalLinkIcon />
                </a>
              </div>
            )}
          </div>
        )}

        {/* Conference Proceedings Tab */}
        {activeTab === "proceedings" && (
          <div className="mt-12">
            <p className="text-center text-[#0D0D0D]/75">
              Conference proceedings data coming soon. <br />
              <a
                href="https://scholar.google.com/citations?user=ducGUjAAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A64195] hover:text-[#964196] underline"
              >
                View full list on Google Scholar
              </a>
            </p>
          </div>
        )}

        {/* Talks Tab */}
        {activeTab === "talks" && (
          <div className="mt-12">
            <p className="text-center text-[#0D0D0D]/75">
              Talks data coming soon. Please provide the list.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function ScholarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4" />
    </svg>
  );
}