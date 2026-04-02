"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long is setup and what does it require?",
    answer:
      "Setup takes three weeks. We handle integrations — you just answer some basic questions.",
  },
  {
    question: "Does this help my business show up on Google?",
    answer:
      "Yes. Our automation boosts local SEO and helps generate more reviews.",
  },
  {
    question: "What systems does it integrate with?",
    answer:
      "We integrate with leading job calendars, inboxes, and phone platforms.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-16 sm:py-20 md:py-28 relative">
      {/* Top divider */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-10 mb-10 sm:mb-16">
        <div className="section-divider" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-3 sm:mb-4">
            Got questions?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text tracking-[-0.03em]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-lg sm:rounded-xl bg-dark-card/80 border border-dark-border overflow-hidden hover:border-dark-border transition-colors"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-center gap-3 sm:gap-4 p-4 sm:p-5 text-center"
              >
                <span
                  className={`shrink-0 transition-colors ${
                    openIndex === index ? "text-primary" : "text-dark-muted"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </span>
                <span className="text-white font-medium text-sm sm:text-base">{faq.question}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-dark-muted leading-relaxed text-xs sm:text-sm text-center">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
