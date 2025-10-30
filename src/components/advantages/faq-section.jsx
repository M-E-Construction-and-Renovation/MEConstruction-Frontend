"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does the installation take?",
    answer:
      "Most M&E Construction and Renovation installations are completed in just one day! Our expert installers work efficiently to minimize disruption to your daily routine. The exact time depends on the scope of your project, but you can typically enjoy your new bathroom within 24 hours.",
  },
  {
    question: "Do you remove my existing bathtub or shower?",
    answer:
      "No demolition required! M&E Construction and Renovation products are designed to fit directly over your existing bathtub or shower, which saves time, reduces mess, and lowers costs. Our custom-measured acrylic products ensure a perfect fit every time.",
  },
  {
    question: "What is included in the lifetime warranty?",
    answer:
      "Our lifetime warranty covers the M&E Construction and Renovation acrylic product and installation for as long as you own your home. This includes protection against manufacturing defects, peeling, cracking, and discoloration. Your satisfaction and peace of mind are our top priorities.",
  },
  {
    question: "Can I customize the design and colors?",
    answer:
      "M&E Construction and Renovation offers a wide variety of colors, patterns, and accessories to match your style and preferences. From classic white to modern stone patterns, we have options to complement any bathroom décor. Our design consultants will help you create the perfect look.",
  },
  {
    question: "How do I maintain my Construction and Renovation products?",
    answer:
      "M&E Construction and Renovation products are incredibly easy to maintain! The non-porous acrylic surface resists mold and mildew, and can be cleaned with standard household cleaners. Simply wipe down after use and clean regularly with a mild soap solution to keep your bathroom looking beautiful for years.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about M&E Construction and
              Renovation products and services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background rounded-lg border overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-muted-foreground animate-in slide-in-from-top-2">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
