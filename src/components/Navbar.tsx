"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useConsultation } from "./ConsultationProvider";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faqs", label: "FAQs" },
  { href: "/blog", label: "Blogs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openConsultation = useConsultation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-14 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Plumber's Mate AI"
              width={180}
              height={103}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={openConsultation}
              className="px-5 py-2 lg:px-6 lg:py-2.5 bg-primary/10 border border-primary/30 text-primary text-sm font-semibold rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-200"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-1"
          >
            {isOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-dark-border bg-dark-bg/95 backdrop-blur-xl"
          >
            <div className="px-4 sm:px-6 py-4 sm:py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white/60 hover:text-white transition-colors text-sm font-medium py-2.5 sm:py-3"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 sm:pt-3">
                <button
                  onClick={() => { setIsOpen(false); openConsultation(); }}
                  className="block w-full text-center px-5 py-2.5 sm:py-3 bg-primary/10 border border-primary/30 text-primary text-sm font-semibold rounded-full hover:bg-primary/20"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
