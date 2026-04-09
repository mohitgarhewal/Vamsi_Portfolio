import Image from "next/image";
import Link from "next/link";

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
      className="border-t border-[#BF7AB4]/30 bg-[#F2F2F2] px-6 py-10 md:px-10 md:py-12 lg:px-12"
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
              <span className="text-2xl font-bold tracking-tight text-[#4B5563]">
                VAMSI
              </span>
            </div>

            <p className="mt-4 mr-16 max-w-[620px] text-[16px] leading-[1.55] text-[#0D0D0D]/75 md:text-[17px]">
              Virtual Alloys Modelling, Simulation & Informatics Research
              Group at IIT Indore
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#BF7AB4]/30 bg-white text-[#4B5563] transition-colors hover:text-[#3D4556]"
              >
                <IconLinkedIn />
              </a>
              <a
                href="#contact"
                aria-label="Twitter"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#BF7AB4]/30 bg-white text-[#4B5563] transition-colors hover:text-[#3D4556]"
              >
                <IconTwitter />
              </a>
              <a
                href="#contact"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#BF7AB4]/30 bg-white text-[#4B5563] transition-colors hover:text-[#3D4556]"
              >
                <IconGithub />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-[#4B5563]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-[15px] leading-6 text-[#0D0D0D]/75">
              <li>
                <Link href="/about" className="transition-colors hover:text-[#A64195]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/people" className="transition-colors hover:text-[#A64195]">
                  People
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="transition-colors hover:text-[#A64195]"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link href="/projects" className="transition-colors hover:text-[#A64195]">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-bold text-[#4B5563]">
              More
            </h3>
            <ul className="mt-4 space-y-2.5 text-[15px] leading-6 text-[#0D0D0D]/75">
              <li>
                <Link
                  href="/publications"
                  className="transition-colors hover:text-[#A64195]"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="transition-colors hover:text-[#A64195]"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="transition-colors hover:text-[#A64195]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#positions" className="transition-colors hover:text-[#A64195]">
                  Open Roles
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#BF7AB4]/30 pt-5">
          <div className="flex flex-col items-start justify-between gap-3 text-[14px] text-[#0D0D0D]/75 sm:flex-row sm:items-center">
            <p>© 2026 VAMSI Research Group, IIT Indore. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="transition-colors hover:text-[#A64195]">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-[#A64195]">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}