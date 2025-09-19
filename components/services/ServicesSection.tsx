import { Card, CardContent } from "@/components/ui/card";
import { Search, Share2, BarChart3, Cpu } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Search Engine Optimization",
    icon: <Search className="w-6 h-6 text-emerald-400" />,
  },
  {
    id: "02",
    title: "Social Media Marketing",
    icon: <Share2 className="w-6 h-6 text-emerald-400" />,
  },
  {
    id: "03",
    title: "Online Marketing Strategy",
    icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
  },
  {
    id: "04",
    title: "Digital Product Development",
    icon: <Cpu className="w-6 h-6 text-emerald-400" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-emerald-400 mb-3 text-lg font-semibold tracking-wide">
          — What We Offer
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 leading-tight">
          Amazing Services For Modern Businesses
        </h2>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group relative bg-[#0A1019] border border-transparent hover:border-emerald-400 transition-all rounded-xl shadow-lg hover:shadow-emerald-400/20 overflow-hidden"
            >
              <CardContent className="p-8 flex flex-col justify-between h-full text-left relative z-10">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                    {service.icon}
                  </div>

                  {/* ID */}
                  <span className="text-5xl font-extrabold text-gray-800/30 absolute top-4 right-6 group-hover:text-emerald-400/20 transition-colors">
                    {service.id}
                  </span>

                  {/* Title */}
                  <h3 className="font-semibold text-xl md:text-2xl text-white leading-snug group-hover:text-emerald-400 transition-colors cursor-pointer">
                    {service.title}
                  </h3>
                </div>

                {/* Arrow */}
                <span className="text-emerald-400 text-2xl mt-8 inline-block group-hover:translate-x-2 transition-transform cursor-pointer">
                  →
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
