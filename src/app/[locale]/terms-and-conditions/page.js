export default function TermsAndConditions() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <div className="prose prose-sm md:prose-base max-w-none">
          <h1 className="text-4xl font-bold mb-2">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">
            Effective Date: October 29, 2025
          </p>

          <section className="mb-8">
            <p className="text-lg mb-4">
              Welcome to M&E Construction and Renovation LLC (&quot;M&E
              Construction,&quot; &quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;)
              govern your access to and use of our website located at{" "}
              <a
                href="https://www.meconstructionrenovations.com"
                className="text-primary hover:underline"
              >
                https://www.meconstructionrenovations.com
              </a>{" "}
              (the &quot;Site&quot;) and any tools, features, or services
              provided through it (collectively, the &quot;Services&quot;).
            </p>
            <p className="text-lg mb-4">
              By accessing or using our Site, you agree to be bound by these
              Terms. If you do not agree, please discontinue use immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Use of Our Services</h2>
            <p className="mb-4">
              You agree to use our Services only for lawful purposes and in
              accordance with these Terms. You must not:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>
                Use the Site in a way that violates any applicable law or
                regulation.
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the Site,
                our servers, or databases.
              </li>
              <li>
                Interfere with the operation, security, or performance of the
                Site.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              2. User Accounts and Saved Designs
            </h2>
            <p className="mb-4">
              If you choose to save your bathroom design using our design tool,
              you may be required to provide certain personal information,
              including your first name, last name, email, contact number, and
              installation ZIP code. You are responsible for ensuring that your
              information is accurate and up to date.
            </p>
            <p className="mb-4">
              By saving a design, you consent to the storage of your design data
              and related information in our systems (including Supabase) for
              the purpose of saving, retrieving, and improving your user
              experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Communications</h2>
            <p className="mb-4">
              By providing your contact information (including your email and
              phone number), you consent to receive communications from us,
              including:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Updates or notifications regarding your design</li>
              <li>
                Marketing or promotional messages (via email, SMS, or phone)
              </li>
            </ul>
            <p className="mb-4">
              You may opt out of promotional communications at any time by
              following the unsubscribe link in our emails or contacting us
              directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              4. Intellectual Property
            </h2>
            <p className="mb-4">
              All content, trademarks, logos, images, and software on this Site
              are owned by or licensed to M&E Construction and Renovation LLC
              and are protected under applicable intellectual property laws. You
              may not copy, reproduce, modify, distribute, or exploit any part
              of the Site without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Disclaimer</h2>
            <p className="mb-4">
              Our Site and Services are provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, either express or
              implied. We make no guarantees regarding the accuracy,
              completeness, or reliability of any information provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              6. Limitation of Liability
            </h2>
            <p className="mb-4">
              To the fullest extent permitted by law, M&E Construction and
              Renovation LLC shall not be liable for any indirect, incidental,
              consequential, or punitive damages arising from your use of the
              Site or Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
            <p className="mb-4">
              Our Site may integrate with or link to third-party services such
              as Mailchimp or Supabase. We are not responsible for the content,
              security, or privacy practices of these third parties. Your
              interactions with them are governed by their respective terms and
              policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              8. Changes to These Terms
            </h2>
            <p className="mb-4">
              We may update these Terms from time to time. Any changes will be
              posted on this page with an updated &quot;Effective Date.&quot;
              Your continued use of the Site after changes are posted
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have questions about these Terms, please contact us at:
            </p>
            <div className="bg-muted p-6 rounded-lg">
              <p className="font-semibold mb-2">
                M&E Construction and Renovation LLC
              </p>
              <p className="mb-2">📍 United States</p>
              <p className="mb-2">
                📧 Email:{" "}
                <a
                  href="mailto:marc@meconstructionrenovations.com"
                  className="text-primary hover:underline"
                >
                  marc@meconstructionrenovations.com
                </a>
              </p>
              <p>
                📞{" "}
                <a
                  href="tel:+18155819633"
                  className="text-primary hover:underline"
                >
                  (815) 581-9633
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
