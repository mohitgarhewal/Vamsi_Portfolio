import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#0D0D0D]">
      <Header />
      <main className="mx-auto w-full max-w-[1240px] px-4 pt-8 sm:px-6 md:px-8 lg:px-10">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] sm:p-7">
          <h1 className="text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl">Research</h1>
          <p className="mt-2 text-[#0D0D0D]/75">Research themes and details will be updated here.</p>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_6px_18px_rgba(15,23,42,0.05)]">
            <h2 className="text-lg font-semibold text-[#1F2937]">Theme 1</h2>
            <p className="mt-2 text-sm text-[#0D0D0D]/75">Content placeholder for research area details.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_6px_18px_rgba(15,23,42,0.05)]">
            <h2 className="text-lg font-semibold text-[#1F2937]">Theme 2</h2>
            <p className="mt-2 text-sm text-[#0D0D0D]/75">Content placeholder for methods and workflows.</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_6px_18px_rgba(15,23,42,0.05)]">
            <h2 className="text-lg font-semibold text-[#1F2937]">Theme 3</h2>
            <p className="mt-2 text-sm text-[#0D0D0D]/75">Content placeholder for ongoing technical focus.</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
