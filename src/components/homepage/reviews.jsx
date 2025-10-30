import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    location: "Austin, TX",
    rating: 5,
    text: "The team was professional, efficient, and the results exceeded our expectations. Our new shower looks amazing!",
  },
  {
    name: "Michael Chen",
    location: "Seattle, WA",
    rating: 5,
    text: "From consultation to installation, everything was seamless. They truly completed the job in one day as promised.",
  },
  {
    name: "Emily Rodriguez",
    location: "Miami, FL",
    rating: 5,
    text: "Outstanding quality and service. The lifetime warranty gives us complete peace of mind. Highly recommend!",
  },
];

export function Reviews() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold">5.0</span>
            <span className="text-muted-foreground">from 12,000+ reviews</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-pretty">{review.text}</p>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
