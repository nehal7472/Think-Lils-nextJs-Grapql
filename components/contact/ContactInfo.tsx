"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";
import { Phone, Mail, MapPin } from "lucide-react";

const info = [
  {
    id: 1,
    icon: <Phone className="w-6 h-6 text-emerald-400" />,
    title: "Phone",
    detail: "+880 1234 567 890",
  },
  {
    id: 2,
    icon: <Mail className="w-6 h-6 text-emerald-400" />,
    title: "Email",
    detail: "info@agency.com",
  },
  {
    id: 3,
    icon: <MapPin className="w-6 h-6 text-emerald-400" />,
    title: "Office",
    detail: "Dhaka, Bangladesh",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-24 bg-[#1E293B]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
        {info.map((item, idx) => (
          <motion.div
            key={item.id}
            variants={fadeIn("up", idx * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#0A1019] p-8 rounded-2xl shadow-lg"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
