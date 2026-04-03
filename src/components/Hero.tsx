"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useConsultation } from "./ConsultationProvider";

export default function Hero() {
  const openConsultation = useConsultation();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 sm:pt-20 sm:pb-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #070e24 0%, #0c1f42 60%, #132952 100%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* Radial glow behind heading */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[500px] rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 lg:px-10 text-center">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <Image
            src="/logo.png"
            alt="Plumber's Mate AI"
            width={180}
            height={103}
            className="h-10 sm:h-14 w-auto"
          />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[2rem] sm:text-5xl md:text-6xl lg:text-[84px] leading-[1.08] mb-5 sm:mb-7 tracking-[-0.03em]"
        >
          <span className="heading-italic gradient-text">Never Miss </span>
          <span className="gradient-text font-bold">Another</span>
          <br />
          <span className="gradient-text font-bold">Plumbing Job</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl lg:text-2xl text-white/80 font-medium max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        >
          AI that captures leads, books work, and boosts your business.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
        >
          <Link
            href="/free-offer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-primary text-dark-bg font-semibold rounded-full hover:bg-primary-light hover:shadow-[0_0_30px_rgba(237,190,76,0.3)] transition-all duration-300 text-sm sm:text-base"
          >
            Watch 60-second Video
          </Link>
          <button
            onClick={openConsultation}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 text-sm sm:text-base"
          >
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
