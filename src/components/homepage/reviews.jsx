import { Card, CardContent } from "../ui/card";
import { Star, CheckCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { reviewsPlatforms } from "@/data/contact-data";
import Link from "next/link";

export function Reviews({ reviews }) {
  const { sectionTitle, rating, items } = reviews;

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-[url('/images/reviews-bg.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      <div className="relative container mx-auto px-4">
        <Star
          className="animate-ping absolute -top-14 -right-14 h-64 w-64 text-accent/10"
          strokeWidth={1}
        />
        <Star
          className="animate-ping absolute -bottom-14 -left-14 h-64 w-64 text-accent/10"
          strokeWidth={1}
        />
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

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((review, index) => (
            <Card
              key={index}
              className="relative overflow-hidden rounded-2xl border hover:shadow-lg break-inside-avoid"
            >
              <CardContent className="p-6 relative z-10 flex flex-col">
                {/* Rating */}

                <div className="flex justify-between">
                  <div className="mb-4 flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{review.date}</p>
                </div>

                <hr className="text-primary" />

                {/* Review */}
                <p className="my-2 text-lg text-pretty text-muted-foreground">
                  {review.text}
                </p>

                <hr className="text-primary" />

                {/* Reviewer */}
                <div className="flex items-center gap-3 mt-6">
                  <Avatar className="aspect-square border border-primary">
                    {review.avatar ? (
                      <AvatarImage src={review.avatar} alt={review.name} />
                    ) : (
                      <AvatarFallback>
                        {review.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    )}
                  </Avatar>

                  <div>
                    <p className="font-semibold flex items-center gap-1 text-xl">
                      {review.name}{" "}
                      <CheckCheck className="h-8 w-8 text-accent" />
                    </p>
                    <p className="text-lg text-muted-foreground">
                      {review.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl text-muted-foreground mb-8">
            Check out more of our reviews and what they say about us on Angi and
            Yelp!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            {reviewsPlatforms.map((review, index) => (
              <Link
                key={review.id}
                href={review.link}
                target={review.target}
                className="text-xl px-6 py-3 bg-accent text-white font-semibold rounded-xl shadow hover:bg-accent/90 transition underline"
              >
                <p className="animate-bounce">{review.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
