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
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Social Proof
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance" style={{ lineHeight: "2rem" }}>
            Join 1,500+ Successful VR Entrepreneurs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            These are real people who started with zero VR experience and built thriving agencies using the exact system
            you'll get access to today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`p-8 ${testimonial.featured ? "ring-2 ring-primary/20 bg-primary/5" : ""}`}>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                  {testimonial.featured && (
                    <Badge variant="secondary" className="ml-auto">
                      Featured
                    </Badge>
                  )}
                </div>

                <blockquote className="text-lg italic leading-relaxed">"{testimonial.quote}"</blockquote>

                <div className="flex flex-wrap gap-2">
                  {testimonial.results.map((result, resultIndex) => (
                    <Badge key={resultIndex} variant="outline" className="text-xs">
                      {result}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card px-8 py-4 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 bg-primary/20 rounded-full border-2 border-background" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold">1,500+ Members</div>
              <div className="text-sm text-muted-foreground">Average: $8,500/month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
