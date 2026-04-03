"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useConsultation } from "@/components/ConsultationProvider";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const marqueeText =
  "Stop Missing Plumbing Jobs — Upgrade to an AI Receptionist — Free for 90 Days";

export default function FreeOfferPage() {
  const openConsultation = useConsultation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #070e24 0%, #0c1f42 60%, #132952 100%)",
        }}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[500px] rounded-full bg-primary/[0.04] blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <Image
              src="/logo.png"
              alt="Plumber's Mate AI"
              width={180}
              height={103}
              className="h-10 sm:h-14 w-auto mx-auto mb-8 sm:mb-12"
            />
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.08] mb-6 tracking-[-0.03em]"
          >
            <span className="heading-italic gradient-text">If You </span>
            <span className="gradient-text font-bold">Miss Calls,</span>
            <br />
            <span className="gradient-text font-bold">
              You&apos;re Losing Jobs
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Every missed call is a hot prospect calling the next plumber. It
            only takes one missed ring for a{" "}
            <span className="text-primary font-semibold">
              $500&ndash;$2,000 job
            </span>{" "}
            to disappear.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Plumbers-Mate AI makes sure that never happens again.
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            If you&apos;ve never used AI in your business, this is the safest
            way to start. See how it handles real customers, real emergencies,
            and real bookings &mdash;{" "}
            <span className="text-primary font-semibold">
              free for 90 days.
            </span>
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <button
              onClick={openConsultation}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-primary text-dark-bg font-semibold rounded-full hover:bg-primary-light hover:shadow-[0_0_30px_rgba(237,190,76,0.3)] transition-all duration-300 text-sm sm:text-base"
            >
              Get a 24/7 AI Receptionist FREE for 3 Months
            </button>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="overflow-hidden py-4 sm:py-5 border-y border-dark-border bg-dark-card/40">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="mx-8 text-sm sm:text-base font-semibold text-primary/80 tracking-wide"
            >
              {marqueeText} &nbsp;&bull;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* YouTube Video Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 radial-gradient opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <div className="aspect-video rounded-2xl overflow-hidden border border-dark-border shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/5HypmV_n-Mg?rel=0&modestbranding=1&playsinline=1"
                title="Plumber's Mate AI Demo"
                allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-12 sm:py-16 border-y border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            {[
              {
                title: "24/7 Call Answering",
                desc: "Never miss a call again, day or night.",
              },
              {
                title: "Lead Qualification On Every Call",
                desc: "Know which leads are worth chasing.",
              },
              {
                title: "Call Transcripts and Recordings",
                desc: "Full visibility on every conversation.",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                {...fadeUp}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-xl border border-dark-border bg-dark-card/50"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-dark-muted text-sm sm:text-base">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Offer Details */}
      <section className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 radial-gradient opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold text-sm sm:text-base uppercase tracking-wider mb-4"
          >
            Limited Time Offer
          </motion.p>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-[-0.03em]"
          >
            <span className="gradient-text">
              Stop Missing Plumbing Jobs
            </span>
            <br />
            <span className="heading-italic gradient-text font-normal">
              Upgrade to an AI Receptionist
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            For a limited number of Australian plumbing businesses, we&apos;re
            offering{" "}
            <span className="text-white font-semibold">
              3 Months of AI Receptionist &mdash; 100% Free
            </span>
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-sm sm:text-base max-w-xl mx-auto mb-10"
          >
            Plumbers-Mate AI answers every call, qualifies every lead, and sends
            everything straight to your dashboard. See how it handles real
            customers, real emergencies, and real bookings.
            <br />
            <span className="text-primary font-semibold">
              FREE for 90 days. (Limited Time Offer)
            </span>
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <button
              onClick={openConsultation}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-dark-bg font-semibold rounded-full hover:bg-primary-light hover:shadow-[0_0_30px_rgba(237,190,76,0.3)] transition-all duration-300 text-sm sm:text-base"
            >
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Exclusive Bonus Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Exclusive Bonus
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-[-0.03em]">
              <span className="gradient-text">
                Exclusive Bonus for Our
              </span>
              <br />
              <span className="heading-italic gradient-text font-normal">
                Top 3 Plumbing Picks
              </span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We&apos;re selecting 3 standout plumbing businesses to receive
              advanced growth support on top of the free AI receptionist &mdash;
              at no extra cost.
            </p>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center text-primary font-semibold text-lg sm:text-xl mb-8"
          >
            What Our Top 3 Picks Receive
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl border border-dark-border bg-dark-card/60 hover:bg-dark-card-hover transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Automated Google Reviews
              </h3>
              <p className="text-dark-muted text-base leading-relaxed">
                Turn more happy customers into 5-star reviews &mdash;
                automatically after every completed job.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl border border-dark-border bg-dark-card/60 hover:bg-dark-card-hover transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Google Business Profile Management
              </h3>
              <p className="text-dark-muted text-base leading-relaxed">
                We optimise your listing to improve local rankings, increase call
                volume, and boost visibility for &ldquo;near me&rdquo; and local
                searches.
              </p>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-white/50 text-sm mb-2">
              Only the top 3 applicants in each intake will be selected for this
              bonus.
            </p>
            <p className="text-primary/80 text-sm font-medium mb-8">
              Spots are limited. Applications reviewed daily.
            </p>
            <button
              onClick={openConsultation}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-dark-bg font-semibold rounded-full hover:bg-primary-light hover:shadow-[0_0_30px_rgba(237,190,76,0.3)] transition-all duration-300 text-sm sm:text-base"
            >
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 sm:py-24 relative"
        style={{
          background:
            "linear-gradient(180deg, #132952 0%, #0c1f42 60%, #070e24 100%)",
        }}
      >
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-[-0.03em]"
          >
            <span className="heading-italic gradient-text font-normal">
              Modernise{" "}
            </span>
            <span className="gradient-text">Your Plumbing Business</span>
            <br />
            <span className="gradient-text">Without the Risk</span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary font-semibold text-lg sm:text-xl mb-10"
          >
            Free for 90 Days
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={openConsultation}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-dark-bg font-semibold rounded-full hover:bg-primary-light hover:shadow-[0_0_30px_rgba(237,190,76,0.3)] transition-all duration-300 text-sm sm:text-base"
            >
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
