import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — Plumber's Mate AI",
  description:
    "Read the disclaimer for Plumber's Mate AI services and website.",
};

export default function DisclaimerPage() {
  return (
    <section className="min-h-screen py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
          Disclaimer
        </h1>
        <p className="text-dark-muted text-sm mb-12">
          Last updated: 26 February 2026
        </p>

        <div className="space-y-10 text-dark-text/90 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              No Professional Advice
            </h2>
            <p>
              Nothing on this website constitutes legal, financial, or
              professional advice. You should seek appropriate advice tailored to
              your situation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              No Guarantees
            </h2>
            <p>
              Plumber&apos;s Mate AI provides automation and communications
              systems designed to help plumbing businesses operate more
              efficiently. Results vary based on many factors (market conditions,
              offer, responsiveness, service quality, and operational capacity).
              We make no promises regarding revenue increases, booking volumes,
              rankings, lead generation, or review counts.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              AI Limitations
            </h2>
            <p>
              Our AI systems may generate incorrect or incomplete outputs. You
              are responsible for reviewing and verifying critical information
              before relying on it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Third-Party Links and Services
            </h2>
            <p>
              Plumber&apos;s Mate AI may link to or integrate with external
              platforms and services. We are not responsible for their content,
              functionality, availability, or policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">Contact</h2>
            <p>
              For questions about this Disclaimer, contact:{" "}
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
