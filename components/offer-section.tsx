"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function OfferSection() {
  const tiers = [
    {
      name: "VTPS Core Program",
      price: "$997",
      originalPrice: "$2,997",
      description: "Complete Virtual Tour Profit System - Everything you need to start earning",
      popular: false,
      features: [
        "Complete VR Business Blueprint (8+ hours of video)",
        "40+ hours of comprehensive training library",
        "Client Acquisition Masterclass",
        "Pricing & Packaging Strategies",
        "Done-For-You Sales Scripts & Email Templates",
        "Professional Proposal Templates",
        "Marketing Funnels & Landing Pages",
        "Contract Templates & Legal Documents",
        "Equipment & Software Guide",
        "19 White Label Tours (portfolio examples)",
        "70+ Target Industries Guide",
        "Private Community Access (1,500+ members)",
        "Email Support",
        "Lifetime Updates",
        "90-Day Money-Back Guarantee",
      ],
    },
    {
      name: "VTPS + Personal Coaching",
      price: "$4997",
      originalPrice: "$7,997",
      description: "Everything in Core Program PLUS personal coaching with Zach",
      popular: true,
      features: [
        "Everything in VTPS Core Program",
        "Coaching calls one-on-one.",
        "Personal Success Manager",
        "Priority Support (24-hour response)",
        "Done-For-You Marketing Setup",
        "Advanced Sales Training & Role-Play Sessions",
        "Team Building & Scaling Blueprints",
        "VIP Mastermind Access",
        "Direct Phone/Text Access to Zach",
        "Custom Business Strategy Sessions",
        "Live Deal Review & Feedback",
        "Recurring Revenue Playbook",
        "VR Marketing Automation Suite ($2,497 value)",
        "High-Ticket Sales Training ($1,997 value)",
        "Lifetime VIP Support",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="glass-strong mb-4 text-primary animate-glow">Limited Time Offer</Badge>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-balance gradient-text text-glow"
            style={{ lineHeight: "1.2" }}
          >
            Choose Your Path to Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-8">
            Get the complete Virtual Tour Profit System and start building your profitable VR business today. Choose the
            level of support that matches your goals.
          </p>

          <div className="glass-strong inline-flex items-center gap-2 px-6 py-3 rounded-full animate-glow">
            <span className="animate-pulse">🔥</span>
            <span className="font-medium text-foreground">Save up to $4,997 - Limited Time Only</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`glass-card relative hover-lift ${
                tier.popular ? "ring-2 ring-primary/30 scale-105 animate-glow" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 animate-float">
                    Most Popular Choice
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">{tier.name}</CardTitle>
                <p className="text-muted-foreground mb-6">{tier.description}</p>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground line-through">Regular Price: {tier.originalPrice}</div>
                  <div className="text-5xl font-bold gradient-text">{tier.price}</div>
                  <div className="text-sm text-muted-foreground">One-time payment • Lifetime access</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full hover-lift text-lg py-6 ${
                    tier.popular
                      ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 animate-glow"
                      : "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:bg-white hover:text-foreground"
                  }`}
                  size="lg"
                  onClick={() =>
                    window.open("https://wnh.thrivecart.com/virtual-tour-profit-system/?coupon=START1000", "_blank")
                  }
                >
                  Get Started Now →
                </Button>

                <div className="text-center space-y-2">
                  <div className="text-sm text-muted-foreground">💰 90-Day Money-Back Guarantee</div>
                  <div className="text-xs text-muted-foreground">
                    Average member earns back investment in first project
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center space-y-6">
          <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto hover-lift">
            <h3 className="text-2xl font-bold text-foreground mb-4">🎯 Why Choose VTPS + Personal Coaching?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Direct Access to Zach</h4>
                <p className="text-sm text-muted-foreground">
                  Get personal guidance from the creator of VTPS with monthly 1-on-1 calls
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Faster Results</h4>
                <p className="text-sm text-muted-foreground">
                  Skip the trial and error - get proven strategies that work immediately
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">VIP Treatment</h4>
                <p className="text-sm text-muted-foreground">
                  Priority support, mastermind access, and done-for-you marketing setup
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-medium text-foreground mb-2">
              🚀 Most VTPS members earn back their investment in their first project
            </p>
            <p className="text-muted-foreground">
              Average project value: $2,500 - $15,000 • Top performers: $25,000+ per project
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  )
}
