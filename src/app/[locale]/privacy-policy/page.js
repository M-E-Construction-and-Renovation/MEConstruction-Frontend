import { Button } from "../../../components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Effective Date: October 29, 2025
            </p>

            <div className="prose prose-sm md:prose-base max-w-none space-y-6 text-foreground">
              <p className="text-base leading-relaxed">
                This Privacy Policy explains how M&E Construction and Renovation
                LLC (&quot;M&E Construction,&quot; &quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;) collects, uses, discloses,
                and protects personal information obtained through our website{" "}
                <a
                  href="https://www.meconstructionrenovations.com"
                  className="text-primary hover:underline"
                >
                  https://www.meconstructionrenovations.com
                </a>{" "}
                (the &quot;Site&quot;) and associated tools and services.
              </p>

              <p className="text-base leading-relaxed">
                By using our Site, you consent to the collection and use of your
                personal information as described in this Policy.
              </p>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  We collect the following personal information when you use our
                  Site or Services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>First Name and Last Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Installation ZIP Code</li>
                  <li>
                    Saved Bathroom Design Preferences (stored via Supabase)
                  </li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  We may also automatically collect technical data such as your
                  browser type, IP address, and usage statistics via analytics
                  tools.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>Provide and improve our Services and design tools</li>
                  <li>Allow you to save and retrieve bathroom designs</li>
                  <li>
                    Communicate updates, offers, and promotions (via Mailchimp)
                  </li>
                  <li>Respond to customer inquiries and support requests</li>
                  <li>
                    Analyze usage trends to enhance our website experience
                  </li>
                  <li>Comply with applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  3. Data Storage and Security
                </h2>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>
                    Your design and personal information are securely stored
                    using Supabase, a trusted cloud database provider.
                  </li>
                  <li>
                    We take reasonable measures to protect your information
                    against unauthorized access, alteration, or destruction.
                  </li>
                  <li>
                    However, no system is 100% secure, and we cannot guarantee
                    absolute security.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  4. Sharing and Disclosure
                </h2>
                <p className="text-base leading-relaxed mb-4">
                  We do not sell or rent your personal information. We may share
                  limited data with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>
                    Service providers (e.g., Supabase for database storage,
                    Mailchimp for email delivery)
                  </li>
                  <li>
                    Authorized employees or contractors who assist in operations
                  </li>
                  <li>
                    Legal authorities when required by law or to protect our
                    rights
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  5. Email Marketing and Consent
                </h2>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>
                    By submitting your contact information, you consent to
                    receive marketing communications and updates from us.
                  </li>
                  <li>
                    We use Mailchimp to manage our email list and send updates.
                  </li>
                  <li>
                    You can unsubscribe at any time by clicking the
                    &quot;Unsubscribe&quot; link in any email or by contacting
                    us directly.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  6. Cookies and Tracking
                </h2>
                <p className="text-base leading-relaxed">
                  Our Site may use cookies and similar tracking technologies to
                  improve user experience and analyze website traffic. You can
                  disable cookies through your browser settings, but some
                  features of the Site may not function properly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
                <p className="text-base leading-relaxed">
                  We retain personal information for as long as your saved
                  designs remain active or as necessary to fulfill the purposes
                  described in this Policy. You may request deletion of your
                  data at any time by contacting us at{" "}
                  <a
                    href="mailto:marc@meconstructionrenovations.com"
                    className="text-primary hover:underline"
                  >
                    marc@meconstructionrenovations.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
                <p className="text-base leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
                <p className="text-base leading-relaxed mt-4">
                  To exercise these rights, please email us at{" "}
                  <a
                    href="mailto:marc@meconstructionrenovations.com"
                    className="text-primary hover:underline"
                  >
                    marc@meconstructionrenovations.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  9. Children&apos;s Privacy
                </h2>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>
                    Our Services are not intended for individuals under the age
                    of 18.
                  </li>
                  <li>
                    We do not knowingly collect personal information from
                    minors. If you believe a minor has provided us with
                    information, please contact us so we can delete it.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">
                  10. Changes to This Privacy Policy
                </h2>
                <p className="text-base leading-relaxed">
                  We may update this Policy periodically. Any changes will be
                  posted on this page with an updated &quot;Effective
                  Date.&quot; Continued use of our Site after such changes
                  constitutes your acknowledgment and acceptance of the revised
                  Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                <p className="text-base leading-relaxed mb-4">
                  For questions or concerns about this Privacy Policy or your
                  personal data, please contact:
                </p>
                <div className="bg-secondary/50 p-6 rounded-lg space-y-3">
                  <p className="font-semibold">
                    M&E Construction and Renovation LLC
                  </p>
                  <p className="text-base">
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href="mailto:marc@meconstructionrenovations.com"
                      className="text-primary hover:underline"
                    >
                      marc@meconstructionrenovations.com
                    </a>
                  </p>
                  <p className="text-base">
                    <span className="font-semibold">Phone:</span>{" "}
                    <a
                      href="tel:+18155819633"
                      className="text-primary hover:underline"
                    >
                      (815) 581-9633
                    </a>
                  </p>
                  <p className="text-base">
                    <span className="font-semibold">Website:</span>{" "}
                    <a
                      href="https://www.meconstructionrenovations.com"
                      className="text-primary hover:underline"
                    >
                      https://www.meconstructionrenovations.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
