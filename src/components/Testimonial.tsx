"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="py-24 relative">
      <div className="max-w-[950px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/testimonial.jpg"
            alt="Happy plumber using Plumber's Mate AI on the job"
            width={950}
            height={1136}
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
