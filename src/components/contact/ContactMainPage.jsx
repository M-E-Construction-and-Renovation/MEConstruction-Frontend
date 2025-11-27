"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useToast } from "../ui/use-toast";
import Link from "next/link";
import { MailIcon, PhoneIcon } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  primaryEmail,
  secondaryEmail,
  contactNumber,
  socials,
} from "@/data/contact-data";

export default function ContactPage() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error("Please accept the consent notice to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { consent, ...payload } = formData;

      const res = await fetch("/api/mailchimp/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.error?.title?.includes("Member Exists")) {
          toast.info("This email is already subscribed.");
        } else {
          toast.error(data.error?.title ?? "Something went wrong.");
        }
        throw new Error(data.error?.title ?? "Something went wrong.");
      }

      toast.success("Thank you! You're successfully subscribed.");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        zip: "",
        consent: false,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6 md:p-12">
      <h1 className="text-4xl font-bold mb-5 text-center text-primary">
        Get in Touch with M&E Construction
      </h1>

      <p className="px-4 mb-10 text-center">
        We would love to hear from you! Whether it is a bathroom upgrade, shower
        installation, or general inquiry, our team is here to help every step of
        the way.
      </p>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column - Contact Info */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl text-primary font-bold text-center">
            Our Contact Cards
          </h2>
          <p className="text-center px-2">
            You can reach out and send us a message through these contact cards.
          </p>
          {/* Email Card */}
          <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl shadow hover:shadow-lg transition-shadow">
            <MailIcon className="w-10 h-10 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">Email Us Directly!</h3>
              <a
                href={`mailto:${primaryEmail}`}
                className="text-primary underline hover:text-primary/80"
              >
                {primaryEmail}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl shadow hover:shadow-lg transition-shadow">
            <MailIcon className="w-10 h-10 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">
                Email Us Through Our Admins!
              </h3>
              <a
                href={`mailto:${secondaryEmail}`}
                className="text-primary underline hover:text-primary/80"
              >
                {secondaryEmail}
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-accent/20 to-accent/10 rounded-xl shadow hover:shadow-lg transition-shadow">
            <PhoneIcon className="w-10 h-10 text-accent" />
            <div>
              <h3 className="text-lg font-semibold">Call Us Today!</h3>
              <a
                href={`tel:${contactNumber.value}`}
                className="text-accent underline hover:text-accent/80"
              >
                {contactNumber.displayValue}
              </a>
            </div>
          </div>

          <h2 className="text-2xl text-primary font-bold text-center">
            Our Social Card
          </h2>
          <p className="text-center px-2">
            You can visit and see our social media activities or reach out and
            send us a message through these social card.
          </p>
          {/* Social Card */}
          <div className="flex flex-col gap-3 p-6 bg-gradient-to-br from-primary/80 via-primary/100 to-primary/80 rounded-xl shadow hover:shadow-lg transition-shadow">
            <h3 className="text-lg text-accent font-bold">
              Follow us on these social media platforms!
            </h3>
            <div className="flex gap-4 mt-2 text-white">
              {socials.map((social) => (
                <Link key={social.id} href={social.link} target={social.target}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-16 h-16 p-4 flex items-center justify-center"
                  >
                    <social.icon className="h-8 w-8 md:h-10 md:w-10" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Subscription Form */}
        <div className="md:w-1/2 bg-muted/50 border border-muted rounded-xl p-6 md:p-12 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left text-primary">
            Subscribe to Our Newsletter
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                placeholder="john@example.com"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="US"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Zip Code *
                </label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  placeholder="12345"
                />
              </div>
            </div>

            <div className="bg-muted/50 border border-muted rounded-lg p-4">
              <label className="flex gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 rounded border-input cursor-pointer"
                />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  By clicking "Submit," you are providing your electronic
                  signature as consent for us to contact you via phone, email,
                  or text message — including the use of automated technology —
                  regarding our products and services. You also consent to the
                  collection and use of your personal information in accordance
                  with our{" "}
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    className="underline font-bold"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms-and-conditions"
                    target="_blank"
                    className="underline font-bold"
                  >
                    Terms of Service
                  </Link>
                  . Your consent is not a condition of purchase, and you may
                  withdraw it at any time by contacting us or unsubscribing from
                  future communications.
                </span>
              </label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !formData.consent}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
            >
              {isSubmitting ? "Submitting..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
