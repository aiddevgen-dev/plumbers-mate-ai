import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Plumber's Mate AI",
  description:
    "Review the terms governing your use of Plumber's Mate AI services.",
};

export default function TermsConditionsPage() {
  return (
    <section className="min-h-screen py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-dark-muted text-sm mb-12">
          Last updated: 26 February 2026
        </p>

        <div className="space-y-10 text-dark-text/90 text-sm sm:text-base leading-relaxed">
          <div>
            <p>
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your
              access to and use of the Plumber&apos;s Mate AI website and
              services (&ldquo;Services&rdquo;). By accessing our website or
              using our Services, you agree to these Terms.
            </p>
            <p className="mt-3">
              Plumber&apos;s Mate AI provides managed AI automation and business
              communications services for plumbing and trade businesses,
              including call handling, lead intake, follow-up automation, and
              operational workflows. Company registration: Hong Kong. Primary
              service market: Australia (including Brisbane and surrounding
              regions).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Our Services
            </h2>
            <p>
              We provide a managed service that may include:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-dark-muted">
              <li>AI-assisted call handling and enquiry intake</li>
              <li>Appointment or job-request capture and routing</li>
              <li>Automated customer follow-ups via SMS/email</li>
              <li>Review request workflows</li>
              <li>
                Operational workflows and integrations (where applicable)
              </li>
            </ul>
            <p className="mt-3">
              Service scope, deliverables, and timelines may vary depending on
              your chosen plan and onboarding requirements.
            </p>
            <p className="mt-3">
              Plumber&apos;s Mate AI is a technology and managed services
              provider. We do not provide plumbing, construction, or emergency
              trade services, and we do not dispatch tradespeople. Any references
              to &ldquo;jobs&rdquo;, &ldquo;bookings&rdquo;, or
              &ldquo;customers&rdquo; relate to the operation of our
              clients&apos; businesses.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Client Responsibilities
            </h2>
            <p>
              You agree to provide accurate business information and any required
              access (for example, phone system settings, messaging numbers,
              calendars, or CRM tools) where needed. You are responsible for
              ensuring your use of the Services complies with applicable laws
              (including privacy, spam, telemarketing, and consumer laws).
            </p>
            <p className="mt-3">
              You are responsible for obtaining any customer consents required for
              communications, recordings, messaging, or automated processing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Fees &amp; Billing
            </h2>
            <p>
              Fees, billing frequency, and inclusions are provided during
              onboarding or in your proposal. Unless stated otherwise, fees are
              billed in advance for each billing period. Late or failed payments
              may result in service suspension.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Cancellations &amp; Refunds
            </h2>
            <p>
              You may cancel according to your plan terms. Where
              setup/onboarding work has been performed, setup fees may be
              non-refundable. If you cancel mid-billing period, access may
              continue until the period ends unless stated otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Third-Party Integrations
            </h2>
            <p>
              We may integrate with third-party tools (for example, telephony,
              SMS, email, calendars, CRM, analytics, or hosting). Your use of
              third-party tools is subject to their terms, pricing, and
              availability. We are not responsible for third-party outages,
              deliverability issues, policy changes, or service interruptions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              AI &amp; Accuracy
            </h2>
            <p>
              AI systems can produce incorrect or incomplete outputs. You remain
              responsible for verifying critical details including pricing,
              scheduling, compliance, and customer communications before relying
              on them. We do not guarantee outcomes such as increased revenue,
              rankings, bookings, lead volume, or review counts.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Acceptable Use
            </h2>
            <p>
              You must not use our Services to send unlawful, misleading,
              deceptive, or harassing communications; spam customers; or send
              messages without proper consent where required. You must not
              collect sensitive information without appropriate safeguards or
              violate platform policies (including Meta, Google, and telecom
              carrier rules).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Intellectual Property
            </h2>
            <p>
              All website content, branding, and service materials are owned by
              Plumber&apos;s Mate AI or licensors. You may not copy, resell, or
              reverse engineer our materials without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Plumber&apos;s Mate AI is
              not liable for indirect, incidental, or consequential damages,
              including lost profits, lost opportunities, or business
              interruption.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Indemnity
            </h2>
            <p>
              You agree to indemnify Plumber&apos;s Mate AI from claims arising
              from your misuse of the Services or your breach of these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">
              Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              Services indicates acceptance of updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-accent mb-3">Contact</h2>
            <p>
              For questions about these Terms, contact:{" "}
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
