import React from "react";

const items = [
  {
    key: "screenedAndApproved",
    title: "HomeAdvisor - Screened and Approved",
    imgSrc: "/images/home-advisor-screened-and-approved.png",
    imgAlt: "HomeAdvisor Screened and Approved Logo",
    description:
      "Screened and approved contractor with a proven track record of quality work.",
  },
  {
    key: "topRatedService",
    title: "HomeAdvisor - Top Rated Service",
    imgSrc: "/images/home-advisor-top-rated.png",
    imgAlt: "HomeAdvisor Top Rated Logo",
    description:
      "Consistently ranked among the top contractors with excellent ratings.",
  },
  {
    key: "eliteService",
    title: "HomeAdvisor - Elite Service",
    imgSrc: "/images/home-advisor-elite-service.png",
    imgAlt: "HomeAdvisor Elite Service Logo",
    description:
      "Recognized for consistently delivering exceptional quality and customer satisfaction.",
  },
  {
    key: "screenedAndApprovedOneYear",
    title: "HomeAdvisor - 1 Year Screened and Approved",
    imgSrc: "/images/home-advisor-1-year.png",
    imgAlt: "HomeAdvisor Screened and Approved 1 Year Logo",
    description: "Trusted and verified by HomeAdvisor for over a year.",
  },
  {
    key: "superService2023",
    title: "Angi - Super Service Award 2023",
    imgSrc: "/images/angi-super-service-2023.png",
    imgAlt: "Angi Super Service Award 2023 Logo",
    description: "Awarded for outstanding quality and customer satisfaction.",
  },
];

const AwardsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Awards &amp; <span className="text-accent">Recognition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certified, screened, and approved by leading home improvement
            authorities. Our commitment to excellence has earned us prestigious
            industry recognition and thousands of satisfied customers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-12">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-between p-6 rounded-lg border border-accent/20 bg-gradient-to-b from-accent/20 to-accent/5 shadow-md"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <div className="w-30 h-30 mx-auto my-2">
                  <img
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    className="aspect-square object-contain"
                  />
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
