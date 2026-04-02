"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ConsultationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    company_url: "",
    date: "",
    time: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://haziqadg.app.n8n.cloud/webhook/plumbers_form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleClose() {
    onClose();
    if (submitted) {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        company_url: "",
        date: "",
        time: "",
      });
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-dark-border bg-dark-card p-6 sm:p-8 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-dark-muted hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Thank you!
                </h3>
                <p className="text-dark-muted text-sm">
                  Our team will contact you to schedule a time that suits you
                  best.
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold gradient-text mb-2">
                    Book a Consultation
                  </h2>
                  <p className="text-dark-muted text-sm">
                    Fill out the form below and our team will contact you to
                    schedule a time that suits you best.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-dark-border bg-dark-bg px-4 py-2.5 text-sm text-white placeholder:text-dark-muted/50 outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Phone <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g., 04XX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-dark-border bg-dark-bg px-4 py-2.5 text-sm text-white placeholder:text-dark-muted/50 outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-dark-border bg-dark-bg px-4 py-2.5 text-sm text-white placeholder:text-dark-muted/50 outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Company <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-dark-border bg-dark-bg px-4 py-2.5 text-sm text-white placeholder:text-dark-muted/50 outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Company URL */}
                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Company URL
                    </label>
                    <input
                      type="url"
                      name="company_url"
                      placeholder="e.g., https://company.com"
                      value={formData.company_url}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-dark-border bg-dark-bg px-4 py-2.5 text-sm text-white placeholder:text-dark-muted/50 outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Date & Time row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-white mb-1.5">
                        Preferred Date <span className="text-primary">*</span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-dark-border bg-dark-bg px-4 py-2.5 text-sm text-white outline-none focus:border-primary/50 transition-colors [color-scheme:dark]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-1.5">
                        Preferred Time <span className="text-primary">*</span>
                      </label>
                      <input
                        type="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-dark-border bg-dark-bg px-4 py-2.5 text-sm text-white outline-none focus:border-primary/50 transition-colors [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-2 px-6 py-3 bg-primary text-dark-bg font-bold text-sm rounded-full hover:bg-primary-light hover:shadow-[0_0_30px_rgba(237,190,76,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Book Consultation"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
