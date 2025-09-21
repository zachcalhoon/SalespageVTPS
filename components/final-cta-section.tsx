import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FinalCTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance" style={{ lineHeight: "2rem" }}>
            Your VR Empire Starts Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Imagine 12 months from now: You're running a thriving VR agency, earning $10K+ monthly in recurring revenue,
            working with premium clients, and having the freedom to work from anywhere. This is your moment to make it
            happen.
          </p>
        </div>

        <Card className="p-8 mb-8 bg-card/50 backdrop-blur">
          <CardContent className="space-y-6">
            <h3 className="text-2xl font-bold">Picture This Future:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>Waking up to new client inquiries in your inbox every morning</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>Charging premium rates while competitors fight over scraps</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>Building a team that handles the work while you focus on growth</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>Predictable monthly income from hosting and maintenance contracts</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>Working with exciting businesses instead of boring commoditized services</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p>Having the lifestyle freedom you've always wanted</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div className="space-y-4">
            <Button size="lg" className="text-xl px-12 py-6 font-bold bg-primary hover:bg-primary/90">
              Join VTPS & Transform My Business →
            </Button>
            <p className="text-sm text-muted-foreground">
              ⚡ Special pricing ends soon - Don't miss out on saving $2,000+
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Lifetime Updates</span>
            </div>
          </div>
        </div>

        <div className="mt-16 p-6 bg-muted/50 rounded-lg">
          <p className="text-lg font-medium mb-2">
            "The best time to plant a tree was 20 years ago. The second best time is now."
          </p>
          <p className="text-muted-foreground">
            Don't let another year pass wondering "what if." Your VR empire starts with a single decision.
          </p>
        </div>
      </div>
    </section>
  )
}
