"use client";

import { motion } from "framer-motion";
import { Wrench, Users, Sun, Zap } from "lucide-react";
import Image from "next/image";

const solutions = [
  {
    image: "/images/phone-1.png",
    label: "Capture",
    title: "Leads instantly",
  },
  {
    image: "/images/phone-2.png",
    label: "Qualify",
    title: "Book jobs fast",
  },
  {
    image: "/images/phone-3.png",
    label: "Automate",
    title: "Follow ups & reviews",
  },
];

const segments = [
  { icon: Wrench, label: "Solo plumbers" },
  { icon: Users, label: "Small teams" },
  { icon: Sun, label: "After-hours" },
  { icon: Zap, label: "Growth ready" },
];

export default function Solution() {
  return (
    <section className="py-16 sm:py-20 md:py-28 relative">
      <div className="absolute inset-0 radial-gradient opacity-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] leading-[1.1] tracking-[-0.03em]">
            <span className="gradient-text heading-italic font-normal">
              Plumber&apos;s Mate AI fixes these problems automatically.
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20 leading-relaxed"
        >
          No more admin chaos, no extra hires, no complex tech.
        </motion.p>

        {/* 3-column staggered portrait images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 md:mb-20 items-end">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`text-center ${
                index === 1 ? "md:-mt-8" : "md:mt-8"
              } ${index === 2 ? "sm:col-span-2 sm:max-w-[50%] sm:mx-auto md:col-span-1 md:max-w-none" : ""}`}
            >
              <div
                className={`relative aspect-[2/3] rounded-2xl sm:rounded-3xl overflow-hidden border-2 transition-shadow duration-500 ${
                  index === 1
                    ? "border-primary/40 shadow-[0_0_50px_rgba(237,190,76,0.15)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay + text at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-5 text-center">
                  <p className="text-xs font-semibold text-primary uppercase tracking-[0.15em] mb-1.5 sm:mb-2">
                    {solution.label}
                  </p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    {solution.title}
                  </h3>
                </div>
              </div>

              {/* Step indicator */}
              <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center text-primary text-xs sm:text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-sm text-white/50 font-medium">
                  {solution.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Target segments bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl sm:rounded-2xl bg-dark-card/80 border border-dark-border py-6 px-4 sm:py-10 sm:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
            {segments.map((segment) => (
              <div
                key={segment.label}
                className="flex flex-col items-center gap-2 sm:gap-3 text-center"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center">
                  <segment.icon
                    className="w-5 h-5 sm:w-7 sm:h-7 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-sm sm:text-base font-semibold text-white">
                  {segment.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
