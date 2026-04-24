"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    title: "Lab Research",
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop",
  },
  {
    id: 2,
    title: "Team Collaboration",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
  },
  {
    id: 3,
    title: "Research Facility",
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop",
  },
  {
    id: 4,
    title: "Computational Work",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
  },
  {
    id: 5,
    title: "Materials Testing",
    src: "https://images.unsplash.com/photo-1576987757859-4f3cd83b0ed4?w=500&h=500&fit=crop",
  },
  {
    id: 6,
    title: "Lab Equipment",
    src: "https://images.unsplash.com/photo-1584308666744-24d5f400f6f1?w=500&h=500&fit=crop",
  },
  {
    id: 7,
    title: "Seminar Discussion",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
  },
  {
    id: 8,
    title: "Data Analysis",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop",
  },
  {
    id: 9,
    title: "Group Meeting",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
  },
];

function GalleryCard({ image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-[0_4px_16px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(128,0,32,0.15)]"
    >
      <div className="relative h-64 w-full overflow-hidden bg-slate-200">
        <Image
          src={image.src}
          alt={image.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#800020]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="absolute inset-0 flex items-end justify-start p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-white">{image.title}</h3>
      </div>
    </motion.div>
  );
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-[#0D0D0D]">
      <Header />
      <main className="mx-auto w-full max-w-[1240px] px-4 py-12 sm:px-6 md:px-8 lg:px-10">
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[#800020] sm:text-5xl">Gallery</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#0D0D0D]/75 sm:text-lg">
            Explore our research group activities, collaborations, and moments from our journey in computational materials science.
          </p>
        </section>

        {/* Gallery Grid */}
        <section>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <GalleryCard key={image.id} image={image} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
