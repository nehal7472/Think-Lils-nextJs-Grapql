"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    role: "Lead Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "Creative Director",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        Meet Our Team
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-12">
        {team.map((member, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn("up", idx * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <Image
              src={member.img}
              alt={member.name}
              width={150}
              height={150}
              className="rounded-full mx-auto border-4 border-emerald-500/30 shadow-lg"
            />
            <h3 className="mt-6 text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
