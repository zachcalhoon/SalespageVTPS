import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PricingSection() {
  const plans = [
    {
      name: "VTPS Core",
      originalPrice: "$2,997",
      price: "$1,497",
      description: "Perfect for getting started with virtual tours",
      features: [
        "Complete VR Business Training",
        "Done-For-You Templates",
        "Equipment & Software Guide",
        "Private Community Access",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "VTPS Gold",
      originalPrice: "$4,997",
      price: "$2,497",
      description: "Most popular - includes advanced scaling strategies",
      features: [
        "Everything in Core",
        "Advanced Sales Training",
        "Team Building Blueprints",
        "Marketing Automation Suite",
        "Monthly Live Coaching Calls",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "VTPS Platinum",
      originalPrice: "$7,997",
      price: "$3,997",
      description: "Complete done-with-you implementation",
      features: [
        "Everything in Gold",
        "1-on-1 Strategy Sessions (3x)",
        "Done-For-You Marketing Setup",
        "Personal Success Manager",
        "VIP Mastermind Access",
        "Lifetime Updates",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance" style={{ lineHeight: "2rem" }}>
            Choose Your Success Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Every plan includes our complete Virtual Tour Profit System with lifetime access. Choose the level of
            support that fits your goals.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full">
            <span className="animate-pulse">🔥</span>
            <span className="font-medium">Limited Time: Save up to $4,000</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-primary scale-105" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground line-through">Regular Price: {plan.originalPrice}</div>
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">One-time payment • Lifetime access</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`} size="lg">
                  Get Started Now →
                </Button>

                <div className="text-center">
                  <div className="text-sm text-muted-foreground">💰 30-Day Money-Back Guarantee</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-lg font-medium">
            🎯 Average VTPS member earns back their investment in their first project
          </p>
          <p className="text-muted-foreground">Most successful members report 10x ROI within 90 days</p>
        </div>
      </div>
    </section>
  )
}
