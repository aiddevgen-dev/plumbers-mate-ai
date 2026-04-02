import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Plumber's Mate AI",
  description:
    "Learn how Plumber's Mate AI collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
          Privacy Policy
        </h1>
        <p className="text-dark-muted text-sm mb-12">
          Last updated: 26 February 2026
        </p>

        <div className="space-y-10 text-dark-text/90 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Introduction
            </h2>
            <p>
              Plumber&apos;s Mate AI collects and processes information only to
              provide and improve our services. By using this website, you agree
              to the terms outlined here.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Data Collection
            </h2>
            <p>
              We collect personal and usage data you provide, including contact
              details and data necessary to deliver features.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Data Use
            </h2>
            <p>
              Your data is used solely to operate Plumber&apos;s Mate AI,
              communicate with you, and improve our product. It will not be sold
              or shared outside required legal or service operations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Cookies &amp; Tracking
            </h2>
            <p>
              We use cookies for session management and analytics. You can set
              your browser to refuse some cookies, but this may affect certain
              features.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Third-Party Services
            </h2>
            <p>
              External services, such as payment processors, may collect data as
              governed by their privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Data Security
            </h2>
            <p>
              We employ standard security measures to protect your information,
              but no system can guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              User Rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              data by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Children&apos;s Privacy
            </h2>
            <p>
              Our services are not intended for children under 13. We do not
              knowingly collect information from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Updates to Policy
            </h2>
            <p>
              We may update this policy. Check this page for updates. Continued
              use after changes means you accept the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">Contact</h2>
            <p>
              For questions about this Privacy Policy, contact:{" "}
              <a
                href="mailto:connect@plumbers-mate.ai"
                className="text-primary hover:underline"
              >
                connect@plumbers-mate.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
