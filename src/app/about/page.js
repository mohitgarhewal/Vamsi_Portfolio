import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#0D0D0D]">
      <Header />

      <main className="mx-auto w-full max-w-[1240px] px-4 py-10 sm:px-6 md:px-8 lg:px-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:p-8">
          <h1 className="text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl">About</h1>

          <div className="mt-6 flex justify-center">
            <Image
              src="/photo.png"
              alt="VAMSI research group"
              width={520}
              height={330}
              priority
              className="h-auto w-full max-w-[520px] rounded-2xl border border-slate-200 object-cover shadow-[0_10px_30px_rgba(15,23,42,0.12)]"
            />
          </div>

          <div className="mt-5 space-y-6 text-[1.02rem] leading-relaxed text-[#0D0D0D]/85">
            <p>
              I am thrilled to introduce the Virtual Alloys Modelling, Simulation &amp; Informatics (VAMSI)
              Research Group at the Indian Institute of Technology Indore (IITI). We extend a warm invitation
              to enthusiastic students who are eager to join our innovative research efforts. Our group is
              committed to advancing the field of materials science and engineering, with a primary focus on
              comprehending deformation behaviour and developing high-throughput techniques and tailored frameworks
              for investigating materials suitable for structural applications and beyond. Our ultimate objective
              is to establish Integrated Computational Materials Engineering (ICME) frameworks that seamlessly
              combine models across various processes and length scales, along with tools designed to address
              multi-physics challenges. This integrated approach can potentially revolutionize materials discovery
              by accelerating the development of innovative materials.
            </p>

            <p>
              At the VAMSI Research Group, we aim to tackle fundamental deformation-related issues by integrating
              physics-based models with underlying phenomenology. We achieve this by employing atomistic simulations,
              computational thermodynamics, and analytical modelling. Within our research group, we will explore the
              following key areas:
            </p>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <span className="font-semibold text-[#1F2937]">Understanding Deformation Mechanisms:</span> We aim
                to unravel the intricate mechanisms underlying material deformation and develop a mechanistic approach
                to alloy design. This understanding will guide us in creating materials with enhanced structural
                integrity.
              </li>
              <li>
                <span className="font-semibold text-[#1F2937]">
                  High-Throughput Exploration of Complex Composition Domains:
                </span>{" "}
                Our group will pioneer high-throughput methods and frameworks to explore intricate and previously
                uncharted composition domains within Multi-Principal Element Alloys (MPEAs), especially tailored for
                high-temperature structural applications.
              </li>
              <li>
                <span className="font-semibold text-[#1F2937]">
                  Integrated Computational Materials Engineering (ICME) Frameworks:
                </span>{" "}
                We are dedicated to establishing ICME frameworks that seamlessly integrate models from diverse
                processes and length scales. Additionally, we will integrate tools to tackle multi-physics problems.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
