import React from "react";
import ContactPage from "@/components/contact/ContactMainPage";

export const metadata = {
  title:
    "Contact M&E Construction and Renovations LLC | Expert Renovation Services",
  description:
    "Get in touch with M&E Construction and Renovations LLC for expert bathroom, kitchen, and basement renovations. Our team is ready to provide fast, high-quality service and answer all your renovation questions.",
};

const page = () => {
  return (
    <div className="min-h-screen">
      <ContactPage />
    </div>
  );
};

export default page;
