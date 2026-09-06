"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useToast } from "../ui/use-toast";
import Link from "next/link";
import { ArrowRight, Calendar, Mail, MapPin, Phone } from "lucide-react";
import {
  primaryEmail,
  secondaryEmail,
  contactNumber,
  calendly,
  socials,
} from "@/data/contact-data";
import { GA_EVENTS, trackEvent } from "@/lib/analytics";
import ContactLink from "../analytics/contact-link";
import Reveal from "../motion/reveal";

const FORM_ID = "contact_page";

const inputClass =
  "w-full border border-input bg-background px-4 py-2.5 text-base transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent";

const labelClass = "type-eyebrow mb-2 block text-muted-foreground";

/**
 * Contact page.
 *
 * The form here posts to the same endpoint as the quote modal and collects the
 * same fields — name, email, phone, zip — but was headed "Subscribe to Our
 * Newsletter" with a "Subscribe" button, and confirmed with "You're
 * successfully subscribed". A visitor who came to ask for a quote was being
 * told they had joined a mailing list. Relabelled to what it actually does;
 * nothing about the submission changed.
 *
 * The section headings were "Our Contact Cards" and "Our Social Card" — naming
 * the UI component rather than what the visitor gets from it.
 *
 * Note: every string on this page is hardcoded English rather than coming from
 * messages/*.json, so /es renders it untranslated. Left as-is because moving it
 * would mean authoring Spanish marketing copy.
 */
export default function ContactPage() {
  const { toast } = useToast();

  // Same manual instrumentation as the quote modal: this form also submits with
  // preventDefault + fetch, which enhanced measurement cannot see.
  const hasStarted = useRef(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const markFormStarted = () => {
    if (hasStarted.current) return;
    hasStarted.current = true;
    trackEvent(GA_EVENTS.FORM_START, { form_id: FORM_ID });
  };

  const handleInputChange = (e) => {
    markFormStarted();

    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhoneChange = (value) => {
    markFormStarted();

    setFormData((prev) => ({
      ...prev,
      phone: value || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error("Please accept the consent notice to continue.");
      trackEvent(GA_EVENTS.FORM_ERROR, {
        form_id: FORM_ID,
        error_type: "consent_missing",
      });
      return;
    }

    setIsSubmitting(true);
    let errorReported = false;

    try {
      const { consent, ...payload } = formData;

      const res = await fetch("/api/mailchimp/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        // The API upserts, so an existing subscriber is a success, not an error;
        // the old "Member Exists" branch was unreachable.
        toast.error(data.error?.title ?? "Something went wrong.");
        errorReported = true;
        trackEvent(GA_EVENTS.FORM_ERROR, {
          form_id: FORM_ID,
          error_type: "submit_rejected",
          status: res.status,
        });

        throw new Error(data.error?.title ?? "Something went wrong.");
      }

      toast.success("Thank you — we'll be in touch shortly.");

      trackEvent(GA_EVENTS.GENERATE_LEAD, {
        form_id: FORM_ID,
        method: "contact_page",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        zip: "",
        consent: false,
      });
      hasStarted.current = false;
    } catch (error) {
      console.log(error);
      if (!errorReported) {
        trackEvent(GA_EVENTS.FORM_ERROR, {
          form_id: FORM_ID,
          error_type: "network_error",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Every route in is a row, ordered by how quickly it reaches a human.
  const CHANNELS = [
    {
      icon: Phone,
      label: "Call us",
      value: contactNumber.displayValue,
      href: `tel:${contactNumber.value}`,
      method: "phone",
      placement: "contact_page",
      note: "Fastest way to reach the team",
    },
    {
      icon: Calendar,
      label: "Book a consultation",
      value: "Pick a time that suits you",
      href: calendly.href,
      method: "calendly",
      placement: "contact_page",
      external: true,
      note: "On-site visit, no obligation",
    },
    {
      icon: Mail,
      label: "Email Marc directly",
      value: primaryEmail,
      href: `mailto:${primaryEmail}`,
      method: "email",
      placement: "contact_page_primary",
    },
    {
      icon: Mail,
      label: "Email our admin team",
      value: secondaryEmail,
      href: `mailto:${secondaryEmail}`,
      method: "email",
      placement: "contact_page_admin",
    },
  ];

  return (
    <>
      {/* ---- Page head ---- */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-10">
          <Reveal
            as="p"
            className="type-eyebrow flex items-center gap-3 text-accent"
          >
            <span
              className="animate-rule-draw h-px w-8 bg-accent"
              aria-hidden="true"
            />
            Get in touch
          </Reveal>

          {/* Headline left, supporting copy right — the same section-head grid
              the rest of the site uses. A single left-aligned stack left the
              right half of the band empty. */}
          <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-end">
            <Reveal
              as="h1"
              delay={70}
              className="type-display text-[clamp(2.5rem,5.4vw,4.5rem)] text-white md:col-span-7"
            >
              Let&rsquo;s talk about your project.
            </Reveal>

            <Reveal
              as="p"
              delay={140}
              className="measure text-base leading-relaxed text-white/85 md:col-span-5"
            >
              Whether it&rsquo;s a bathroom upgrade, a kitchen remodel or
              finishing a basement, tell us what you have in mind and
              we&rsquo;ll come back with a plan and a price.
            </Reveal>
          </div>

          <Reveal
            delay={200}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/20 pt-6"
          >
            <span className="type-eyebrow flex items-center gap-2 text-white/75">
              <MapPin aria-hidden="true" className="h-4 w-4 text-accent" />
              Northbrook, Illinois
            </span>
            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-white/30 sm:block"
            />
            <span className="type-eyebrow text-white/75">
              17 communities served
            </span>
          </Reveal>
        </div>
      </section>

      {/* ---- Channels + form ---- */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-4 md:px-10 lg:grid-cols-12 lg:gap-16">
          {/* Ways in */}
          <div className="lg:col-span-5">
            <Reveal
              as="h2"
              className="type-display text-[clamp(1.65rem,2.6vw,2.25rem)] text-primary"
            >
              Ways to reach us
            </Reveal>

            <ul className="rule-hairline mt-8 border-t">
              {CHANNELS.map((c) => (
                <li key={c.label} className="rule-hairline border-b">
                  <ContactLink
                    method={c.method}
                    placement={c.placement}
                    href={c.href}
                    {...(c.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-start gap-4 py-5 focus-visible:outline-none"
                  >
                    <c.icon
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      strokeWidth={1.5}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="type-eyebrow block text-muted-foreground">
                        {c.label}
                      </span>
                      <span className="mt-1.5 block break-words text-base text-primary transition-colors group-hover:text-accent group-focus-visible:text-accent">
                        {c.value}
                      </span>
                      {c.note ? (
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {c.note}
                        </span>
                      ) : null}
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 -translate-x-1 text-accent opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                    />
                  </ContactLink>
                </li>
              ))}
            </ul>

            <Reveal delay={120} className="mt-10">
              <p className="type-eyebrow text-muted-foreground">Follow along</p>
              <div className="mt-4 flex gap-2">
                {socials.map((social) => (
                  <Button
                    key={social.id}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-11 w-11 hover:bg-primary/10"
                  >
                    <Link
                      href={social.link}
                      target={social.target}
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon aria-hidden="true" className="h-5 w-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={100} className="lg:col-span-7">
            <div className="rule-hairline border-t bg-tinted p-6 md:p-10">
              <h2 className="type-display text-[clamp(1.65rem,2.6vw,2.25rem)] text-primary">
                Request a free quote
              </h2>
              <p className="measure mt-3 text-sm leading-relaxed text-muted-foreground">
                Send us your details and we&rsquo;ll get back to you. No
                obligation, and your information is never shared.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>
                      First name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      autoComplete="given-name"
                      className={inputClass}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>
                      Last name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      autoComplete="family-name"
                      className={inputClass}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone number *
                    </label>
                    <PhoneInput
                      id="phone"
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="US"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      required
                      className={inputClass}
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="zip" className={labelClass}>
                      Installation zip code *
                    </label>
                    <input
                      id="zip"
                      type="text"
                      name="zip"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      value={formData.zip}
                      onChange={handleInputChange}
                      required
                      className={inputClass}
                      placeholder="12345"
                    />
                  </div>
                </div>

                <div className="rule-hairline border-t pt-5">
                  <label className="flex cursor-pointer gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1 h-5 w-5 shrink-0 cursor-pointer border-input"
                    />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      By clicking &ldquo;Request my quote,&rdquo; you are
                      providing your electronic signature as consent for us to
                      contact you via phone, email, or text message — including
                      the use of automated technology — regarding our products
                      and services. You also consent to the collection and use
                      of your personal information in accordance with our{" "}
                      <Link
                        href="/privacy-policy"
                        target="_blank"
                        className="font-semibold underline underline-offset-2"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/terms-and-conditions"
                        target="_blank"
                        className="font-semibold underline underline-offset-2"
                      >
                        Terms of Service
                      </Link>
                      . Your consent is not a condition of purchase, and you may
                      withdraw it at any time by contacting us or unsubscribing
                      from future communications.
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  disabled={isSubmitting || !formData.consent}
                  className="group w-full"
                >
                  {isSubmitting ? "Sending…" : "Request my quote"}
                  {!isSubmitting && (
                    <ArrowRight
                      aria-hidden="true"
                      className="ml-2 h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
                    />
                  )}
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
