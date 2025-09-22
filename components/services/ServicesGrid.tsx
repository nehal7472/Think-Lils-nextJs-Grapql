"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variants";
import Link from "next/link";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";

export default function ServicesGrid() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        What We Offer
      </motion.h2>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {visibleServices.map((service, idx) => (
          <motion.div
            key={service.id}
            variants={fadeIn("up", idx * 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#1E293B] p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <Link href={`/services/${service.slug}`}>
              <div>
                <div className="mb-4">
                  <service.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center pt-24">
        <Button onClick={() => setShowAll(!showAll)} size="lg">
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </div>
    </section>
  );
}
