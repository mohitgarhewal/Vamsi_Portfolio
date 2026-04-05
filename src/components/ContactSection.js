"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const columnMotion = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function IconMap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path d="M12 22s7-5.6 7-12a7 7 0 1 0-14 0c0 6.4 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function IconOffice() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M6.9 8.5a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM5.5 10h2.8v8.5H5.5V10Zm4.4 0h2.7v1.2h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 1.9 3.5 4.4v4.4h-2.8v-3.9c0-.9 0-2.1-1.3-2.1-1.3 0-1.5 1-1.5 2v4h-2.8V10Z" />
    </svg>
  );
}

function IconScholar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="m3 10 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v4c0 1.1 2.2 2 5 2s5-.9 5-2v-4" />
    </svg>
  );
}

function IconTwitter() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-4 w-4" aria-hidden="true">
      <path d="M22 5.8a8.8 8.8 0 0 1-2.5.7 4.2 4.2 0 0 0 1.8-2.4c-.9.6-2 .9-3 .1a4.3 4.3 0 0 0-7.4 4A12.1 12.1 0 0 1 3 4.9a4.3 4.3 0 0 0 1.3 5.8 4.2 4.2 0 0 1-1.9-.5v.1a4.3 4.3 0 0 0 3.4 4.2c-.4.1-.8.1-1.2 0a4.3 4.3 0 0 0 4 3 8.6 8.6 0 0 1-5.3 1.8c-.3 0-.7 0-1-.1A12.2 12.2 0 0 0 9 21c8 0 12.5-6.8 12.2-12.8A8.8 8.8 0 0 0 22 5.8Z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className={`${inter.className} bg-[#f6f8fb] px-6 py-16 md:px-10 md:py-20 lg:px-16`}>
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-[-0.02em] text-[#A64195] md:text-5xl">Get in Touch</h2>
          <p className="mt-3 text-base font-medium leading-relaxed text-[#0D0D0D]/75 md:text-lg">
            Interested in joining our research group or collaborating? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-16">
          <motion.div {...columnMotion}>
            <h3 className="text-[1.95rem] font-semibold text-[#A64195]">Contact Information</h3>

            <div className="mt-7 space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#BF7AB4]/15 text-[#A64195]">
                  <IconMail />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#A64195]">Email</p>
                  <p className="mt-1 text-base text-[#0D0D0D]/75">kvamsi@iiti.ac.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#BF7AB4]/15 text-[#A64195]">
                  <IconMap />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#A64195]">Office Address</p>
                  <p className="mt-1 text-base leading-relaxed text-[#0D0D0D]/75">
                    FC-504, 4th Floor<br />
                    Learning Resource Centre<br />
                    IIT Indore, Simrol-453552<br />
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#BF7AB4]/15 text-[#A64195]">
                  <IconOffice />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#A64195]">Department Office</p>
                  <p className="mt-1 text-base leading-relaxed text-[#0D0D0D]/75">
                    Metallurgical Engineering and Materials Science<br />
                    Indian Institute of Technology Indore<br />
                    Khandwa Road, Simrol-453552<br />
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#BF7AB4]/30 pt-7">
              <h4 className="text-[1.1rem] font-semibold text-[#A64195]">Connect With Us</h4>
              <div className="mt-4 flex items-center gap-3">
                <motion.a
                  href="#contact"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#BF7AB4]/15 text-[#A64195] transition-colors hover:text-[#964196]"
                >
                  <IconLinkedIn />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-label="Twitter"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#BF7AB4]/15 text-[#A64195] transition-colors hover:text-[#964196]"
                >
                  <IconTwitter />
                </motion.a>
                <motion.a
                  href="#publications"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-label="Scholar"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#BF7AB4]/15 text-[#A64195] transition-colors hover:text-[#964196]"
                >
                  <IconScholar />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div {...columnMotion} transition={{ ...columnMotion.transition, delay: 0.08 }}>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="rounded-3xl border border-[#BF7AB4]/30 bg-[#BF7AB4]/5 p-6 shadow-[0_6px_26px_rgba(166,65,149,0.05)] md:p-8"
            >
              <h3 className="text-[2rem] font-semibold text-[#A64195]">Send a Message</h3>

              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-[#A64195]">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    className="h-11 w-full rounded-xl border border-[#BF7AB4]/30 bg-white px-4 text-sm text-[#0D0D0D] outline-none transition focus:border-[#A64195] focus:ring-2 focus:ring-[#A64195]/20"
                  />
                </div>

                <div>
                  <label htmlFor="emailAddress" className="mb-2 block text-sm font-semibold text-[#A64195]">
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    placeholder="john@example.com"
                    className="h-11 w-full rounded-xl border border-[#BF7AB4]/30 bg-white px-4 text-sm text-[#0D0D0D] outline-none transition focus:border-[#A64195] focus:ring-2 focus:ring-[#A64195]/20"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-[#A64195]">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="h-11 w-full rounded-xl border border-[#BF7AB4]/30 bg-white px-4 text-sm text-[#0D0D0D] outline-none transition focus:border-[#A64195] focus:ring-2 focus:ring-[#A64195]/20"
                    defaultValue="PhD Application"
                  >
                    <option>PhD Application</option>
                    <option>Postdoctoral Fellowship</option>
                    <option>Collaboration Inquiry</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#A64195]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your research interests and background..."
                    className="h-28 w-full resize-none rounded-xl border border-[#BF7AB4]/30 bg-white px-4 py-3 text-sm text-[#0D0D0D] outline-none transition focus:border-[#A64195] focus:ring-2 focus:ring-[#A64195]/20"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#A64195] text-base font-semibold text-white transition-colors hover:bg-[#964196]"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
