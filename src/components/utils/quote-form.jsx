"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Link from "next/link";

export default function QuoteForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
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
      alert("Please accept the consent notice to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      alert("Thank you! We will contact you shortly.");
      onSuccess();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">First Name *</label>
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
          <label className="block text-sm font-medium mb-2">Last Name *</label>
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

      {/* Email */}
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

      {/* Phone Number */}
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
            Installation Zip Code *
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
            placeholder="12345"
          />
        </div>
      </div>

      {/* Consent Notice */}
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
            By clicking "Submit," you are providing your electronic signature as
            consent for us to contact you via phone, email, or text message —
            including the use of automated technology — regarding our products
            and services. You also consent to the collection and use of your
            personal information in accordance with our{" "}
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
            . Your consent is not a condition of purchase, and you may withdraw
            it at any time by contacting us or unsubscribing from future
            communications.
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || !formData.consent}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
