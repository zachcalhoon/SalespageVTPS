import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "David Rodriguez",
      role: "Real Estate Agent → VR Agency Owner",
      image: "/professional-man-headshot.png",
      quote:
        "I was skeptical at first, but VTPS completely transformed my business. I went from selling a few houses a year to running a $25K/month VR agency. The recurring revenue alone pays my mortgage.",
      results: ["$25K Monthly Revenue", "6-Figure Business", "Passive Income"],
      featured: true,
    },
    {
      name: "Jennifer Kim",
      role: "Marketing Consultant",
      image: "/professional-woman-headshot.png",
      quote:
        "The done-for-you templates saved me months of work. I landed my first $8K client using the exact scripts provided in VTPS. Now I have a waiting list of clients.",
      results: ["$8K First Client", "Booked Solid", "Premium Pricing"],
    },
    {
      name: "Robert Thompson",
      role: "Former Corporate Manager",
      image: "/professional-headshot-man-corporate.jpg",
      quote:
        "After 20 years in corporate, I wanted freedom. VTPS gave me a clear path to build a business that generates $12K/month while working from anywhere.",
      results: ["$12K Monthly", "Location Freedom", "Corporate Exit"],
    },
    {
      name: "Lisa Chang",
      role: "Photographer",
      image: "/professional-headshot-woman-photographer.jpg",
      quote:
        "I was already a photographer but struggling to charge premium rates. VTPS taught me how to position VR tours as high-value services. My average project went from $500 to $3,000.",
      results: ["6x Price Increase", "$3K Average", "Premium Positioning"],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="glass-strong mb-4 text-primary">Social Proof</Badge>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 text-balance gradient-text text-glow"
            style={{ lineHeight: "1.2" }}
          >
            Join 1,500+ Successful VR Entrepreneurs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            These are real people who started with zero VR experience and built thriving agencies using the exact system
            you'll get access to today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`glass-card p-8 hover-lift ${testimonial.featured ? "ring-2 ring-primary/30 animate-glow" : ""}`}
            >
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-white/20"
                    />
                    {testimonial.featured && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">★</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                  {testimonial.featured && <Badge className="glass-strong text-primary animate-float">Featured</Badge>}
                </div>

                <blockquote className="text-lg italic leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex flex-wrap gap-2">
                  {testimonial.results.map((result, resultIndex) => (
                    <Badge
                      key={resultIndex}
                      className="glass text-xs hover-lift"
                      style={{ animationDelay: `${resultIndex * 0.1}s` }}
                    >
                      {result}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
