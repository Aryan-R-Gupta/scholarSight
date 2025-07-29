import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    title: "Principal, Northwood High",
    avatar: "https://placehold.co/40x40.png",
    text: "ScholarSight has been a game-changer. The ability to identify at-risk students before they fall behind is invaluable. It's transformed our approach to student support.",
    aiHint: "educator headshot"
  },
  {
    name: "Mr. David Chen",
    title: "11th Grade Teacher",
    avatar: "https://placehold.co/40x40.png",
    text: "The AI-generated study plans are incredibly detailed and helpful. It saves me time and gives my students a clear, actionable path to improvement. I can't imagine teaching without it now.",
     aiHint: "teacher portrait"
  },
  {
    name: "Emily Rodriguez",
    title: "University Student",
    avatar: "https://placehold.co/40x40.png",
    text: "Seeing my predicted performance and getting a custom study plan was so motivating. The AI analysis helped me understand exactly where I needed to focus my energy.",
     aiHint: "student headshot"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Loved by Educators and Students
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from those who are already experiencing the benefits of
            ScholarSight.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <blockquote className="italic text-lg text-muted-foreground">
                  “{testimonial.text}”
                </blockquote>
              </CardContent>
              <div className="p-6 bg-muted/40 flex items-center gap-4 mt-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
