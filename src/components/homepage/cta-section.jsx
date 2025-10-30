"use client";

import { Button } from "../ui/button";
import { Phone, Mail } from "lucide-react";
import { contactNumber, primaryEmail } from "@/data/contact-data";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/quoteModalSlice";

export function CtaSection() {
  const dispatch = useDispatch();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 text-pretty max-w-2xl mx-auto">
            Get started today with a free consultation. Our experts will help
            you design the perfect bathroom solution tailored to your needs and
            budget.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5" />
              <a
                href={`tel:${contactNumber.value}`}
                className="hover:underline font-semibold"
              >
                {contactNumber.displayValue}
              </a>
            </div>
            <div className="hidden sm:block text-primary-foreground/50">|</div>
            <div className="flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5" />
              <a
                href={`mailto:${primaryEmail}`}
                className="hover:underline font-semibold"
              >
                {primaryEmail}
              </a>
            </div>
          </div>

          <Button
            onClick={() => dispatch(openModal())}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 h-auto"
          >
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
