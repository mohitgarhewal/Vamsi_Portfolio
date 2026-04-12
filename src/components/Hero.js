import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="grid items-center justify-items-center gap-6 py-4 lg:grid-cols-[1fr_0.9fr] lg:gap-8"
      >
        <div className="mx-auto max-w-[560px] ">
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="VAMSI Research Group"
              width={160}
              height={44}
              priority
              className="h-8 w-auto"
            />
          </div>

          <h1
            className="text-[1.5rem] font-semibold leading-[1.06] tracking-[-0.02em] text-[#1F2937] sm:text-[1.85rem] lg:text-[2.35rem]"
          >
            Virtual Alloys Modelling, Simulation &amp; Informatics
            (VAMSI) Research Group
          </h1>

          <p className="mt-3 text-sm font-normal leading-relaxed text-[#0D0D0D]/75 sm:text-[0.97rem] lg:text-[1.15rem]">
            Advancing computational materials science at IIT Indore
          </p>

          <div className="mt-5 flex flex-wrap items-start justify-start gap-3">
            <a
              href="#research"
              className="inline-flex min-h-[38px] items-center justify-center rounded-xl bg-[#A64195] px-5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#964196]"
            >
              Explore Research
            </a>
            <a
              href="#publications"
              className="inline-flex min-h-[38px] items-center justify-center rounded-xl border border-[#A64195]/30 bg-transparent px-5 text-sm font-medium text-[#A64195] transition-colors duration-300 hover:border-[#A64195] hover:bg-white/60"
            >
              Publications
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[340px] lg:-translate-y-1">
          <div className="relative h-[215px] overflow-hidden rounded-[18px] shadow-[0_8px_28px_rgba(13,23,51,0.12)] sm:h-[260px] lg:h-[320px]">
            <Image
              src="/photo.png"
              alt="Research group profile"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-3 right-2 rounded-xl border border-slate-200 bg-white/95 px-3 py-2.5 shadow-[0_10px_24px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:-bottom-4 sm:right-3 sm:px-4 sm:py-3">
            <p className="text-sm font-semibold leading-none text-[#0D0D0D]">
              Dr. K. V. Vamsi
            </p>
            <p className="mt-1.5 text-xs leading-none text-[#0D0D0D]/75">
              Assistant Professor
            </p>
            <p className="mt-1.5 text-xs leading-none text-[#0D0D0D]/75">
              MEMS, IIT Indore
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="relative left-1/2 w-screen -translate-x-1/2 scroll-mt-28">
        <div className="mx-auto max-w-[1320px] px-6 py-12 sm:px-8 sm:py-14 lg:py-18">
          <div className="mx-auto max-w-4xl space-y-5 text-base font-normal leading-[1.75] text-[#0D0D0D]/75 sm:text-[1.05rem]">
            <p>
              I am pleased to introduce the Virtual Alloys Modelling, Simulation &amp; Informatics (VAMSI)
              Research Group at the Indian Institute of Technology Indore (IITI). We warmly invite motivated
              and curious students to join our research efforts.
            </p>
            <p>
              Our group focuses on advancing materials science and engineering, with particular emphasis on
              understanding deformation behaviour and developing high-throughput methods and tailored
              computational frameworks for structural materials and beyond. A central goal of our work is to
              establish Integrated Computational Materials Engineering (ICME) frameworks that connect models
              across multiple processes and length scales, while incorporating tools to address complex
              multi-physics challenges. This integrated approach has the potential to significantly accelerate
              materials discovery and design.
            </p>
            <p>
              At VAMSI, we aim to address fundamental questions in deformation by combining physics-based
              models with underlying phenomenology. Our approach integrates atomistic simulations,
              computational thermodynamics, analytical modelling, high-throughput modelling, and materials
              informatics.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}