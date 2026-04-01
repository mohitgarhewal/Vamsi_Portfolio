import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function IconLinkedIn() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6.9 8.5a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM5.5 10h2.8v8.5H5.5V10Zm4.4 0h2.7v1.2h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 1.9 3.5 4.4v4.4h-2.8v-3.9c0-.9 0-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2v4h-2.8V10Z" />
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M22 5.8a8.8 8.8 0 0 1-2.5.7 4.2 4.2 0 0 0 1.8-2.4c-.9.6-2 .9-3 .1a4.3 4.3 0 0 0-7.4 4A12.1 12.1 0 0 1 3 4.9a4.3 4.3 0 0 0 1.3 5.8 4.2 4.2 0 0 1-1.9-.5v.1a4.3 4.3 0 0 0 3.4 4.2c-.4.1-.8.1-1.2 0a4.3 4.3 0 0 0 4 3 8.6 8.6 0 0 1-5.3 1.8c-.3 0-.7 0-1-.1A12.2 12.2 0 0 0 9 21c8 0 12.5-6.8 12.2-12.8A8.8 8.8 0 0 0 22 5.8Z" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-1-.6.1-.6.1-.6 1.1.1 1.7 1.1 1.7 1.1 1 .1 2.1.8 2.6 1.8.9.1 1.9 0 2.7-.4.1-.7.4-1.3.9-1.7-2.2-.2-4.5-1.1-4.5-4.9 0-1 .3-1.9 1-2.6-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 4.8 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.6 0 3.8-2.3 4.7-4.5 4.9.5.5.9 1.1.9 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className={`${inter.className} border-t border-slate-200 bg-[#f6f8fb] px-6 py-10 md:px-10 md:py-12 lg:px-12`}
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 md:grid-cols-[1.35fr_0.7fr_0.7fr] md:items-start md:gap-12 lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/vamsi-logo.svg"
                alt="VAMSI Research Group"
                width={112}
                height={32}
                className="h-7 w-auto"
              />
              <span className="text-2xl font-bold tracking-tight text-[#0D1733]">
                VAMSI
              </span>
            </div>

            <p className="mt-4 mr-16 max-w-[620px] text-[16px] leading-[1.55] text-[#355178] md:text-[17px]">
              Virtual Alloys Modelling, Simulation & Informatics Research
              Group at IIT Indore
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:text-[#0D1733]"
              >
                <IconLinkedIn />
              </a>
              <a
                href="#contact"
                aria-label="Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:text-[#0D1733]"
              >
                <IconTwitter />
              </a>
              <a
                href="#contact"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:text-[#0D1733]"
              >
                <IconGithub />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-[#0D1733]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-[15px] leading-6 text-[#355178]">
              <li>
                <a href="#research" className="transition-colors hover:text-[#0D1733]">
                  Research
                </a>
              </li>
              <li>
                <a href="#people" className="transition-colors hover:text-[#0D1733]">
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="transition-colors hover:text-[#0D1733]"
                >
                  Publications
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-[#0D1733]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-[#0D1733]">
              Resources
            </h3>
            <ul className="mt-4 space-y-2.5 text-[15px] leading-6 text-[#355178]">
              <li>
                <a
                  href="#publications"
                  className="transition-colors hover:text-[#0D1733]"
                >
                  Google Scholar
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="transition-colors hover:text-[#0D1733]"
                >
                  ResearchGate
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-[#0D1733]">
                  IIT Indore
                </a>
              </li>
              <li>
                <a href="#positions" className="transition-colors hover:text-[#0D1733]">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-5">
          <div className="flex flex-col items-start justify-between gap-3 text-[14px] text-[#4B607E] sm:flex-row sm:items-center">
            <p>© 2026 VAMSI Research Group, IIT Indore. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="transition-colors hover:text-[#0D1733]">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-[#0D1733]">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}