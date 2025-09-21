import { Card, CardContent } from "@/components/ui/card"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Pre-Sell & Book Clients",
      description:
        "Use our proven scripts and templates to book high-value clients before you even own a camera. Start generating revenue immediately.",
      icon: "📞",
    },
    {
      number: "02",
      title: "Build Your Dream Team",
      description:
        "Hire and train photographers using our step-by-step system. Scale without being tied to every shoot personally.",
      icon: "👥",
    },
    {
      number: "03",
      title: "Scale Your Marketing",
      description:
        "Deploy our automated marketing funnels and referral systems to generate a consistent flow of qualified leads.",
      icon: "📈",
    },
    {
      number: "04",
      title: "Maximize Recurring Revenue",
      description:
        "Implement hosting fees, maintenance contracts, and premium upsells to build predictable monthly income streams.",
      icon: "💰",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance leading-tight">
            The Simple 4-Step VTPS Framework
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our proven system takes you from complete beginner to profitable VR agency owner, even if you've never
            touched a 360° camera before.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">{step.number}</div>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{step.icon}</div>
                  <div>
                    <div className="text-sm font-medium text-primary mb-1">Step {step.number}</div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full">
            <span className="text-green-500">✓</span>
            <span className="font-medium">Complete system works even for absolute beginners</span>
          </div>
        </div>
      </div>
    </section>
  )
}
