"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "One Dashboard, One Brain",
    description:
      "View all leads, quotes, payments, and reviews in one place — simple, clear, automated.",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate complex business processes to boost speed, clarity, and efficiency.",
  },
  {
    title: "Quotes & Follow-Ups",
    description:
      "Automated reminders and follow-up messages close jobs faster — no chasing or missed quotes.",
  },
  {
    title: "Review & Google Rating Engine",
    description:
      "Every completed job triggers a Google review request — lifts ratings, boosts SEO, and AI visibility.",
  },
  {
    title: "Re-Engage Old Leads",
    description:
      "System reconnects with past enquiries to spark repeat work automatically.",
  },
  {
    title: "Debt Collection Automation",
    description:
      "Smart reminders and polite payment nudges keep cashflow steady.",
  },
  {
    title: "AI Agent Installation",
    description:
      "We install a custom AI agent that acts as your 24/7 website receptionist, chatting with visitors, capturing leads, and booking jobs.",
  },
];

export default function Features() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-3 sm:mb-4">
            How the Ecosystem Works
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-0.03em]">
            <span className="gradient-text heading-italic font-normal">
              The One Brain Hub
            </span>
          </h2>
        </motion.div>

        {/* Demo video with team photo as thumbnail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="demo"
          className="mb-14 sm:mb-20 md:mb-24 rounded-xl sm:rounded-2xl overflow-hidden border border-dark-border shadow-2xl"
        >
          <video
            ref={videoRef}
            controls
            muted
            playsInline
            className="w-full aspect-video object-cover"
            poster="/images/team-photo.jpeg"
          >
            <source src="/images/demo-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-14 sm:mb-20 md:mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="p-5 sm:p-6 rounded-xl bg-dark-card/50 border border-dark-border hover:border-primary/20 transition-colors duration-300 text-center"
            >
              <h3 className="text-sm sm:text-base font-bold text-[#f6dba4] mb-2 sm:mb-3 heading-italic">
                {feature.title}
              </h3>
              <p className="text-dark-muted text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* "We Do It All For You" section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-dark-border shadow-2xl">
            <Image
              src="/images/feature-dashboard.png"
              alt="We set it up, tailored to your business"
              width={1536}
              height={1024}
              className="w-full h-auto rounded-xl sm:rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center text-center">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-3 sm:mb-4">
              We set everything up for you
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4 sm:mb-5 tracking-[-0.03em] leading-[1.1]">
              We Do It All{" "}
              <span className="heading-italic font-normal">
                For You.
              </span>
            </h3>
            <p className="text-dark-muted text-sm sm:text-base leading-relaxed">
              We learn how your business runs, then build and connect every
              integration so your system works seamlessly from day one.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
