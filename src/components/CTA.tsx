"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section id="book" className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 radial-gradient opacity-40" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-8 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Plumber image */}
          <div className="max-w-3xl mx-auto mb-8 sm:mb-12 rounded-xl sm:rounded-2xl overflow-hidden border border-dark-border shadow-2xl">
            <Image
              src="/images/testimonial.jpg"
              alt="Happy plumber using Plumber's Mate AI"
              width={950}
              height={1136}
              className="w-full h-auto object-cover max-h-[280px] sm:max-h-[350px] md:max-h-[420px] object-top"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-[1.1] tracking-[-0.03em]">
            <span className="gradient-text">Stop Losing Jobs </span>
            <span className="heading-italic gradient-text font-normal">
              You Never Even Knew You Missed
            </span>
          </h2>
          <p className="text-dark-muted text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Book your free demo or watch the video to see how much you&apos;re
            leaving behind.
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-10 sm:py-4 bg-primary text-dark-bg font-semibold rounded-full hover:bg-primary-light hover:shadow-[0_0_30px_rgba(237,190,76,0.3)] transition-all duration-300 text-sm sm:text-base"
          >
            Book Free Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
