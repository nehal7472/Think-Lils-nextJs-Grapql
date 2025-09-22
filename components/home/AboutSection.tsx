"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-[#0A1019] text-white relative overflow-hidden"
    >
      {/* Background gradient decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        {/* Left Content */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-emerald-400 mb-3 font-semibold tracking-wide uppercase">
            — About Company
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            The World-Class Digital <br /> Marketing Agency
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            At{" "}
            <span className="text-white font-semibold">Think & LilaTech</span>,
            creativity meets technology. We provide world-class digital
            marketing services to help brands grow with innovative strategies,
            branding, and tech-driven solutions. Our mission is to connect you
            with your audience in ways that create lasting impact.
          </p>

          {/* Clients */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex:row md:flex items-center gap-5 border-t border-gray-700 pt-6"
          >
            {/* Client Avatars */}
            <div className="flex -space-x-3">
              {[
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/56.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg",
              ].map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt="client"
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-[#0A1019] shadow-md"
                />
              ))}
            </div>
            {/* Client Text */}
            <p className="text-base md:text-lg font-medium">
              Trusted by{" "}
              <span className="text-emerald-400 font-semibold">
                Global Clients
              </span>{" "}
              Around the World
            </p>
          </motion.div>
        </motion.div>

        {/* Right Images */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3, delayChildren: 0.3 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative flex flex-col gap-6"
        >
          {/* Top Image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1681164315014-06bf36b2597a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Team meeting"
              width={520}
              height={360}
              className="rounded-2xl shadow-xl transition-transform duration-300"
            />
          </motion.div>

          {/* Bottom Image */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Working professional"
              width={520}
              height={360}
              className="rounded-2xl shadow-xl self-end transition-transform duration-300"
            />
          </motion.div>

          {/* Decorative circle */}
          <div className="absolute -z-10 -top-10 -left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
