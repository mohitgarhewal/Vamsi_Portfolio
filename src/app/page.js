import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import CoreExpertise from "@/components/CoreExpertise";
import Team from "@/components/Team";
import Alumni from "@/components/Alumni";
import Publications from "@/components/Publications";
import Joining from "@/components/Joining";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Teaching from "@/components/Teaching";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen  text-slate-800">
      <Header />

      <main className="mx-auto w-full max-w-[1240px] px-4 pt-6 sm:px-6 md:px-8 lg:px-10">
        <Hero />
        <Research />
        <CoreExpertise />
        <Team />
        <Alumni />
        <Teaching/>
        <Projects/>
        <Publications />
        <Joining />
        <ContactSection />

        <section id="news" className="scroll-mt-28 pt-14" />
      </main>

      <Footer />
    </div>
  );
}
