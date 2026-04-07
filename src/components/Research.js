import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const researchItems = [
  {
    title: "Computational Design of Advanced Alloys",
    description:
      "Design of complex alloy systems guided by physics-based modelling and thermodynamics:",
    bullets: [
      "Superalloys for high-temperature applications",
      "Multi-principal element alloys (FCC, BCC, BCC+B2 systems)",
      "Intermetallic systems",
    ],
    icon: "flask",
    image: "/hero-placeholder.svg",
  },
  {
    title: "Phase Stability & Defect Physics",
    description:
      "Understanding how composition and defects control microstructure and properties:",
    bullets: [
      "Phase stability and evolution in multi-component systems",
      "Defect energetics (stacking faults, diffusion, interfaces)",
      "Microstructure-property relationships",
    ],
    icon: "bolt",
    image: "/hero-placeholder.svg",
  },
  {
    title: "Multiscale Modelling & ICME",
    description: "Bridging length scales for predictive materials design:",
    bullets: [
      "Linking atomistic mechanisms to macroscopic properties",
      "Process-structure-property-performance relationships",
      "ICME frameworks for alloy optimization",
    ],
    icon: "grid",
    image: "/hero-placeholder.svg",
  },
];

function Icon({ type }) {
  if (type === "flask") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M9 3h6" />
        <path d="M10 3v5l-5.1 8.5A3 3 0 0 0 7.5 21h9a3 3 0 0 0 2.6-4.5L14 8V3" />
        <path d="M8.6 14h6.8" />
      </svg>
    );
  }

  if (type === "bolt") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
    </svg>
  );
}

export default function Research() {
  return (
    <section id="research" className="py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <h2
            className={`${playfair.className} text-[2.25rem] font-bold leading-none tracking-[-0.01em] text-[#1F2937] sm:text-[2.9rem]`}
          >
            Research
          </h2>
          <p
            className={`${inter.className} mx-auto mt-3 max-w-3xl text-base text-[#0D0D0D]/75 sm:text-lg `}
          >
            Advancing computational materials science through multi-scale modeling and simulation
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {researchItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-[#BF7AB4]/30 bg-white shadow-[0_2px_14px_rgba(166,65,149,0.06)]"
            >
              <div className="relative h-[180px] sm:h-[195px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent" />
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#BF7AB4]/15 text-[#A64195]">
                  <Icon type={item.icon} />
                </div>

                <h3
                  className={`${playfair.className} text-[1.3rem] font-semibold leading-[1.2] text-[#1F2937] sm:text-[1.5rem]`}
                >
                  {item.title}
                </h3>

                <p
                  className={`${inter.className} mt-3 text-[0.95rem] leading-[1.5] text-[#0D0D0D]/75`}
                >
                  {item.description}
                </p>

                <ul
                  className={`${inter.className} mt-4 space-y-2.5 text-[0.98rem] leading-[1.5] text-[#0D0D0D]/75`}
                >
                  {item.bullets.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="mt-1 text-[#6F87A8]">.</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
