import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";

export function Reviews({ reviews }) {
  const { sectionTitle, rating, items } = reviews;

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-[url('/images/reviews-bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
            {sectionTitle}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold">{rating.score}</span>
            <span className="text-muted-foreground">{rating.summary}</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((review, index) => (
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
