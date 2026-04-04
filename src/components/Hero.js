import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="grid items-center gap-6 py-4 lg:grid-cols-[1fr_0.9fr] lg:gap-8"
      >
        <div className="max-w-[560px]">
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
            className="text-[1.5rem] font-semibold leading-[1.06] tracking-[-0.02em] text-[#0D1733] sm:text-[1.85rem] lg:text-[2.6rem]"
            style={{ fontFamily: '"Iowan Old Style", "Georgia", serif' }}
          >
            Welcome to Virtual Alloys Modelling, Simulation &amp; Informatics
            (VAMSI) Research Group
          </h1>

          <p className="mt-3 text-sm font-normal leading-relaxed text-[#355178] sm:text-[0.97rem] lg:text-[1.15rem]">
            Advancing computational materials science at IIT Indore
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#research"
              className="inline-flex min-h-[38px] items-center justify-center rounded-xl bg-[#0D1733] px-5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#1B2B53]"
            >
              Explore Research
            </a>
            <a
              href="#publications"
              className="inline-flex min-h-[38px] items-center justify-center rounded-xl border border-slate-300/90 bg-transparent px-5 text-sm font-medium text-[#0D1733] transition-colors duration-300 hover:border-[#0D1733] hover:bg-white/60"
            >
              Publications
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[400px] lg:-translate-y-3 lg:mx-0">
          <div className="relative h-[240px] overflow-hidden rounded-[18px] shadow-[0_8px_28px_rgba(13,23,51,0.12)] sm:h-[290px] lg:h-[360px]">
            <Image
              src="/photo.png"
              alt="Research group profile"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-4 right-2 rounded-xl border border-slate-200 bg-white/95 px-3.5 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:-bottom-5 sm:right-3 sm:px-4 sm:py-3.5">
            <p className="text-sm font-semibold leading-none text-[#0D1733]">
              Dr. K. V. Vamsi
            </p>
            <p className="mt-1.5 text-xs leading-none text-[#3A5071]">
              Assistant Professor
            </p>
            <p className="mt-1.5 text-xs leading-none text-[#3A5071]">
              MEMS, IIT Indore
            </p>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="mx-auto max-w-[1320px] px-6 py-12 sm:px-8 sm:py-14 lg:py-18">
          <p className="mx-auto max-w-4xl text-center text-lg font-normal leading-[1.7] tracking-[0.005em] text-[#23436B] sm:text-xl">
            We develop computational frameworks for the design of advanced
            alloys by integrating atomistic simulations, thermodynamics, and
            data-driven approaches across multiple length scales.
          </p>
        </div>
      </section>
    </>
  );
}