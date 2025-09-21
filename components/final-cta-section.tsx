import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FinalCTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 text-balance gradient-text text-glow"
            style={{ lineHeight: "1.2" }}
          >
            Your VR Empire Starts Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Imagine 12 months from now: You're running a thriving VR agency, earning $10K+ monthly in recurring revenue,
            working with premium clients, and having the freedom to work from anywhere. This is your moment to make it
            happen.
          </p>
        </div>

        <Card className="glass-card p-8 mb-8 hover-lift">
          <CardContent className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Picture This Future:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-foreground">Waking up to new client inquiries in your inbox every morning</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-foreground">Charging premium rates while competitors fight over scraps</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-foreground">Building a team that handles the work while you focus on growth</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-foreground">Predictable monthly income from hosting and maintenance contracts</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-foreground">
                    Working with exciting businesses instead of boring commoditized services
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-foreground">Having the lifestyle freedom you've always wanted</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div className="space-y-4">
            <Button
              size="lg"
              className="text-xl px-12 py-6 font-bold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover-lift animate-glow text-primary-foreground"
            >
              Join VTPS & Transform My Business →
            </Button>
            <p className="text-sm text-muted-foreground">
              ⚡ Special pricing ends soon - Don't miss out on saving $2,000+
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="glass rounded-full px-4 py-2 flex items-center justify-center gap-2 hover-lift">
              <span className="text-green-500">✓</span>
              <span className="text-foreground">30-Day Guarantee</span>
            </div>
            <div className="glass rounded-full px-4 py-2 flex items-center justify-center gap-2 hover-lift">
              <span className="text-green-500">✓</span>
              <span className="text-foreground">Instant Access</span>
            </div>
            <div className="glass rounded-full px-4 py-2 flex items-center justify-center gap-2 hover-lift">
              <span className="text-green-500">✓</span>
              <span className="text-foreground">Lifetime Updates</span>
            </div>
          </div>
        </div>

        <div className="mt-16 glass-card p-6 rounded-lg hover-lift animate-float">
          <p className="text-lg font-medium mb-2 text-foreground">
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
