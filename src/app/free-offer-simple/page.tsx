"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useConsultation } from "@/components/ConsultationProvider";
import { useState, useRef, useEffect } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function AutoPlayVideo() {
  const [playing, setPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !playing) {
          setPlaying(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [playing]);

  return (
    <div ref={containerRef} className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      {playing ? (
        <iframe
          src="https://www.youtube.com/embed/5HypmV_n-Mg?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1"
          title="Plumber's Mate AI Demo"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full absolute inset-0"
        />
      ) : (
        <Image
          src="/images/feature-dashboard.png"
          alt="Plumber's Mate AI Dashboard"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

export default function FreeOfferSimplePage() {
  const openConsultation = useConsultation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #070e24 0%, #0c1f42 60%, #132952 100%)",
        }}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] md:w-[800px] h-[250px] sm:h-[400px] md:h-[500px] rounded-full bg-primary/[0.04] blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-4 sm:mb-6 tracking-[-0.03em]"
          >
            <span className="heading-italic gradient-text">Never Miss </span>
            <span className="gradient-text font-bold">Another</span>
            <br />
            <span className="gradient-text font-bold">Plumbing Job</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold max-w-2xl mx-auto mb-4 sm:mb-6"
          >
            Get a 24/7 AI Receptionist FREE for 3 Months
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/70 text-xs sm:text-sm md:text-base max-w-xl sm:max-w-2xl mx-auto mb-2 leading-relaxed px-2"
          >
            Plumbers-Mate AI answers every call, qualifies every lead, and sends
            everything straight to your dashboard. See how it handles real
            customers, real emergencies, and real bookings.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-xs sm:text-sm md:text-base mb-4 sm:mb-6"
          >
            FREE for 90 days. (Limited Time Offer)
          </motion.p>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-10 sm:py-16 md:py-24 relative">
        <div className="absolute inset-0 radial-gradient opacity-20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-[1.15]">
                <span className="text-white">If You Miss Calls, </span>
                <span className="text-primary italic">
                  You&apos;re Losing Jobs.
                </span>
              </h2>

              <p className="text-primary/90 text-sm sm:text-base md:text-lg italic mb-4 sm:mb-6 leading-relaxed">
                Plumbers-Mate AI makes sure that never happens again.
              </p>

              <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed">
                For a limited number of Australian plumbing businesses,
                we&apos;re offering 3 Months of AI Receptionist &mdash; 100%
                Free
              </p>
            </motion.div>

            {/* Right - Video */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <AutoPlayVideo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              "24/7 Call Answering",
              "Lead Qualification On Every Call",
              "Call Transcripts and Recordings",
            ].map((title) => (
              <motion.div
                key={title}
                {...fadeUp}
                transition={{ duration: 0.5 }}
                className="p-4 sm:p-6 rounded-xl border border-dark-border bg-dark-card/50"
              >
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                  {title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 sm:py-12 md:py-16 pb-16 sm:pb-20 md:pb-28">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <button
              onClick={openConsultation}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-primary text-dark-bg font-semibold rounded-full hover:bg-primary-light hover:shadow-[0_0_30px_rgba(237,190,76,0.3)] transition-all duration-300 text-xs sm:text-sm md:text-base cursor-pointer"
            >
              Book Free 15-Minute Demo
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
