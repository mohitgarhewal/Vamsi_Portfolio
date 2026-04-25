"use client";

import { motion } from "framer-motion";

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
    <section id="contact" className="bg-white px-6 py-16 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-[-0.02em] text-[#800020] md:text-5xl">Get in Touch</h2>
          <p className="mt-3 text-base font-medium leading-relaxed text-[#0D0D0D]/75 md:text-lg">
            Interested in joining our research group or collaborating? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-16">
          <motion.div {...columnMotion}>
            <h3 className="text-[1.95rem] font-semibold text-[#800020]">Contact Information</h3>

            <div className="mt-7 space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F6E4E8] text-[#800020]">
                  <IconMail />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#800020]">Email</p>
                  <p className="mt-1 text-base text-[#0D0D0D]/75">kvamsi@iiti.ac.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F6E4E8] text-[#800020]">
                  <IconMap />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#800020]">Office Address</p>
                  <p className="mt-1 text-base leading-relaxed text-[#0D0D0D]/75">
                    FC-504, 4th Floor<br />
                    Learning Resource Centre<br />
                    IIT Indore, Simrol-453552<br />
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F6E4E8] text-[#800020]">
                  <IconOffice />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#800020]">Department Office</p>
                  <p className="mt-1 text-base leading-relaxed text-[#0D0D0D]/75">
                    Metallurgical Engineering and Materials Science<br />
                    Indian Institute of Technology Indore<br />
                    Khandwa Road, Simrol-453552<br />
                    Indore, Madhya Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-[#E4B5C0] pt-7">
              <h4 className="text-[1.1rem] font-semibold text-[#800020]">Connect With Us</h4>
              <div className="mt-4 flex items-center gap-3">
                <motion.a
                  href="#contact"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F6E4E8] text-[#800020] transition-colors hover:bg-[#800020] hover:text-white"
                >
                  <IconLinkedIn />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-label="Twitter"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F6E4E8] text-[#800020] transition-colors hover:bg-[#800020] hover:text-white"
                >
                  <IconTwitter />
                </motion.a>
                <motion.a
                  href="#publications"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-label="Scholar"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#F6E4E8] text-[#800020] transition-colors hover:bg-[#800020] hover:text-white"
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
              className="rounded-3xl border border-[#E4B5C0] bg-white overflow-hidden shadow-[0_6px_26px_rgba(128,0,32,0.05)] md:p-0"
            >
              <h3 className="text-[2rem] font-semibold text-[#800020] p-6 md:p-8 pb-2">Location</h3>
              
              {/* Map */}
              <div className="w-full h-80">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.156484099486!2d75.88208!3d22.309301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396446cc4cd6a9e5%3A0xfe9eaa7e0d1e8d89!2sIndian%20Institute%20of%20Technology%20Indore!5e0!3m2!1sen!2sin!4v1608550000000"
                  title="IIT Indore Location"
                />
              </div>

              {/* Gallery Link */}
              <div className="p-6 md:p-8">
                <motion.a
                  href="/gallery"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex items-center justify-between rounded-xl border border-[#E4B5C0] bg-[#FFF8FA] px-4 py-3 text-center font-semibold text-[#800020] transition-all hover:border-[#800020] hover:bg-[#F6E4E8]"
                >
                  <span className="flex-1">Explore Our Gallery</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 ml-2">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
