import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const currentMembers = [
  {
    name: "Burra Vijayusha",
    role: "Undergraduate Student",
    summary: "Computational modeling of alloy properties and phase stability",
    image: "/vijusha.jpeg",
  },
  {
    name: "Pohrselvan",
    role: "Undergraduate Student",
    summary: "Atomistic simulations and material deformation mechanisms",
    image: "/pohrselvan.jpg",
  },
  {
    name: "Keerthan",
    role: "Undergraduate Student",
    summary: "High-throughput screening and machine learning for materials",
    image: "/kirtan.jpeg",
  },
  {
    name: "Arham Aneeq",
    role: "Undergraduate Student",
    summary: "Thermodynamic modeling of multi-component alloy systems",
    image: "/arham.jpg",
  },
];

const alumniMembers = [
  {
    name: "Amirthan",
    role: "Undergraduate Student",
    batch: "Class of 2025",
    image: "/Amirthan.avif",
  },
  {
    name: "Nitheesvar",
    role: "Undergraduate Student",
    batch: "Class of 2025",
    image: "/Nitheesvar.avif",
  },
  {
    name: "Vamshi Krishna Rao",
    role: "Undergraduate Student",
    batch: "Class of 2025",
    image: "/Vamshi Krishna Rao.avif",
  },
];

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-white text-[#0D0D0D]">
      <Header />
      <main className="mx-auto w-full max-w-[1240px] px-4 pt-8 sm:px-6 md:px-8 lg:px-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:p-8">
          <h1 className="text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl">People</h1>
        </section>

        <section className="mt-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-[#1F2937] sm:text-[1.8rem]">Group Leader</h2>
              <p className="mt-1 text-sm text-[#0D0D0D]/75">Dr. Vamsi</p>
            </div>
            <Link
              href="/faculty"
              className="inline-flex items-center rounded-full border border-[#BF7AB4]/40 bg-white px-4 py-2 text-sm font-medium text-[#1F2937] transition-colors hover:border-[#A64195] hover:text-[#A64195]"
            >
              View full profile
            </Link>
          </div>

          <Link href="/faculty" className="group block">
            <article className="overflow-hidden rounded-2xl border border-[#BF7AB4]/30 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(15,23,42,0.1)]">
              <div className="grid gap-0 lg:grid-cols-[280px_1fr]">
                <div className="relative min-h-[260px] bg-slate-100">
                  <Image
                    src="/photo.png"
                    alt="Dr. K. V. Vamsi"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <span className="inline-flex rounded-full bg-[#BF7AB4]/15 px-3 py-1 text-xs font-semibold text-[#A64195]">
                    Principal Investigator
                  </span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1F2937] sm:text-[2.25rem]">
                    Dr. K. V. Vamsi
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#0D0D0D]/75">
                    Assistant Professor, Department of Metallurgical Engineering and Materials Science, IIT Indore
                  </p>
                  <p className="mt-4 max-w-3xl text-[0.98rem] leading-relaxed text-[#0D0D0D]/75">
                    Leading the VAMSI Research Group with expertise in computational materials science,
                    high-temperature alloys, and ICME frameworks.
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </section>

        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-[#1F2937] sm:text-[1.8rem]">Current Team Members</h2>
            <p className="mt-1 text-sm text-[#0D0D0D]/75">Active students and researchers in the group.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {currentMembers.map((member, index) => (
              <article
                key={member.name}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center shadow-[0_6px_18px_rgba(15,23,42,0.05)]"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="mx-auto h-24 w-24 rounded-full object-cover"
                  style={{ objectPosition: `${35 + index * 10}% 35%` }}
                />
                <h3 className="mt-5 text-[1.35rem] font-semibold leading-tight text-[#1F2937]">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-[#0D0D0D]/75">{member.role}</p>
                <p className="mt-3 min-h-[56px] text-[0.98rem] leading-relaxed text-[#0D0D0D]/75">
                  {member.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 pb-6">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-[#1F2937] sm:text-[1.8rem]">Alumni</h2>
            <p className="mt-1 text-sm text-[#0D0D0D]/75">Former members of the group.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {alumniMembers.map((member, index) => (
              <article
                key={member.name}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-7 text-center shadow-[0_6px_18px_rgba(15,23,42,0.05)]"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={92}
                  height={92}
                  className="mx-auto h-[92px] w-[92px] rounded-full object-cover"
                  style={{ objectPosition: `${35 + index * 10}% 35%` }}
                />
                <h3 className="mt-5 text-[1.35rem] font-semibold leading-tight text-[#1F2937]">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-[#0D0D0D]/75">{member.role}</p>
                <p className="mt-1 text-[0.92rem] text-[#6A7D99]">{member.batch}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
