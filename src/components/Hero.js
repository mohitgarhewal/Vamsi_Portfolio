import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="grid items-center gap-8 py-6 lg:grid-cols-[1fr_0.95fr] lg:gap-10"
      >
        <div className="max-w-[640px]">
          <div className="mb-6">
            <Image
              src="/logo.png"
              alt="VAMSI Research Group"
              width={190}
              height={52}
              priority
              className="h-10 w-auto"
            />
          </div>

          <h1
            className="text-[1.9rem] font-semibold leading-[1.03] tracking-[-0.02em] text-[#0D1733] sm:text-[2.35rem] lg:text-[3.55rem]"
            style={{ fontFamily: '"Iowan Old Style", "Georgia", serif' }}
          >
            Welcome to Virtual Alloys Modelling, Simulation &amp; Informatics
            (VAMSI) Research Group
          </h1>

          <p className="mt-5 text-base font-normal leading-relaxed text-[#355178] sm:text-lg lg:text-[1.45rem]">
            Advancing computational materials science at IIT Indore
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#research"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0D1733] px-6 text-base font-medium text-white transition-colors duration-300 hover:bg-[#1B2B53]"
            >
              Explore Research
            </a>
            <a
              href="#publications"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300/90 bg-transparent px-6 text-base font-medium text-[#0D1733] transition-colors duration-300 hover:border-[#0D1733] hover:bg-white/60"
            >
              Publications
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[540px] lg:-translate-y-5 lg:mx-0 xl:-translate-y-7">
          <div className="relative h-[320px] overflow-hidden rounded-[22px] shadow-[0_12px_40px_rgba(13,23,51,0.14)] sm:h-[390px] lg:h-[480px]">
            <Image
              src="/photo.png"
              alt="Research group profile placeholder"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-5 right-2 rounded-2xl border border-slate-200 bg-white/95 px-5 py-4 shadow-[0_14px_30px_rgba(15,23,42,0.15)] backdrop-blur-sm sm:-bottom-8 sm:right-4 sm:px-6 sm:py-5">
            <p className="text-base font-semibold leading-none text-[#0D1733] sm:text-lg">
              Dr. K. V. Vamsi
            </p>
            <p className="mt-2 text-sm leading-none text-[#3A5071] sm:text-base">
              Assistant Professor
            </p>
            <p className="mt-2 text-sm leading-none text-[#3A5071] sm:text-base">
              MEMS, IIT Indore
            </p>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-8 sm:py-20 lg:py-28">
          <p className="mx-auto max-w-5xl text-center text-2xl font-normal leading-[1.7] tracking-[0.005em] text-[#23436B] ">
            We develop computational frameworks for the design of advanced
            alloys by integrating atomistic simulations, thermodynamics, and
            data-driven approaches across multiple length scales.
          </p>
        </div>
      </section>
    </>
  );
}
