"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Contact us",
    description: "For solo plumbers",
    features: [
      "AI Receptionist (24/7)",
      "Unlimited lead capture",
      "Cross-device sync",
      "2GB storage",
      "Starter templates",
      "Core automation",
      "Cancel anytime",
    ],
    cta: "Book Demo",
    popular: false,
  },
  {
    name: "Pro",
    price: "Contact us",
    description: "For small teams",
    features: [
      "Everything in Starter",
      "Team dashboards",
      "10GB storage",
      "Full support",
      "Advanced automation",
      "Quote follow-ups",
      "Review automation",
      "Priority support",
    ],
    cta: "Book Demo",
    popular: true,
  },
  {
    name: "Scale",
    price: "Contact us",
    description: "For multi-techs",
    features: [
      "Everything in Pro",
      "Multi-technician ops",
      "Advanced analytics",
      "Local SEO optimization",
      "Custom integrations",
      "Lead re-engagement",
      "Payment automation",
      "Dedicated account manager",
    ],
    cta: "Book Demo",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-28 relative">
      <div className="absolute inset-0 radial-gradient opacity-30" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6"
        >
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.15em] mb-3 sm:mb-4">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text leading-[1.1] tracking-[-0.03em]">
            Simple, trade-friendly pricing
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-dark-muted text-base sm:text-lg text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          Book a demo to see pricing
        </motion.p>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "bg-dark-card border-2 border-primary/30 shadow-[0_0_60px_rgba(237,190,76,0.08)]"
                  : "bg-dark-card/50 border border-dark-border hover:border-dark-border"
              } ${index === 2 ? "sm:col-span-2 sm:max-w-md sm:mx-auto md:col-span-1 md:max-w-none" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-primary text-dark-bg text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6 sm:mb-8 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-[#f6dba4] mb-1 heading-italic">
                  {plan.name}
                </h3>
                <p className="text-dark-muted text-xs sm:text-sm">{plan.description}</p>
              </div>

              <div className="mb-6 sm:mb-8 text-center">
                <span className="text-xl sm:text-2xl font-bold text-white">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 sm:space-y-3.5 mb-8 sm:mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2.5 sm:gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs sm:text-sm text-dark-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`block text-center w-full py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                  plan.popular
                    ? "bg-primary text-dark-bg hover:bg-primary-light hover:shadow-[0_0_20px_rgba(237,190,76,0.3)]"
                    : "border border-dark-border text-white hover:bg-dark-card-hover hover:border-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
