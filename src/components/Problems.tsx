"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const problems = [
  {
    image: "/images/chat-widget.png",
    title: "Admin wastes time.",
    description:
      "Missed calls cost jobs, follow-ups go unanswered, and evenings disappear to manual booking.",
    imagePosition: "right" as const,
  },
  {
    image: "/images/dashboard-2.png",
    title: "No online presence.",
    description:
      "SEO is weak, visibility is low, and poor Google rankings mean fewer leads.",
    imagePosition: "left" as const,
  },
  {
    image: "/images/dashboard-3.png",
    title: "Job loss cycle.",
    description:
      "Unanswered inquiries, no reviews, and lack of automation means lost revenue.",
    imagePosition: "right" as const,
  },
];

export default function Problems() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/dashboard-1.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[#0c1f42]/90" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-3 sm:mb-4">
            Does this sound like you?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text tracking-[-0.03em] leading-[1.1]">
            The problems holding you back
          </h2>
        </motion.div>

        {/* Problem rows */}
        <div className="space-y-14 sm:space-y-20 md:space-y-24">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center"
            >
              {/* Image */}
              <div
                className={
                  problem.imagePosition === "right" ? "md:order-2" : "md:order-1"
                }
              >
                <div className="relative aspect-[3/2] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src={problem.image}
                    alt={problem.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div
                className={`text-center ${
                  problem.imagePosition === "right" ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
                  <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs sm:text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold gradient-text mb-3 sm:mb-4 leading-[1.1] tracking-[-0.02em]">
                  {problem.title}
                </h3>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
