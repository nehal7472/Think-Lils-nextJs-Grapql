"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";
import PageHeader from "../PageHeader";

export default function AboutHero() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-b from-emerald-600/10 via-transparent to-[#0A1019] text-center overflow-hidden">
        <PageHeader
          title="About us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About us" }]}
        />
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-6xl font-extrabold"
        >
          About <span className="text-emerald-400">Think & LilaTech</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
        >
          We’re more than a digital agency — we’re innovators, creators, and
          problem-solvers dedicated to building impactful digital experiences.
        </motion.p>
      </section>
    </>
  );
}
