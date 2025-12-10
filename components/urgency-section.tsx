import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function UrgencySection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-destructive/5 to-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance" style={{ lineHeight: "2rem" }}>
            Don't Wait - The Window is Closing Fast
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Every day you delay, more competitors enter the market and the opportunity becomes harder to capture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <CardContent className="space-y-3">
              <div className="text-3xl">⏰</div>
              <h3 className="font-bold">Limited Time Pricing</h3>
              <p className="text-sm text-muted-foreground">
                This special pricing ends soon. Regular price returns without notice.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardContent className="space-y-3">
              <div className="text-3xl">📈</div>
              <h3 className="font-bold">Market Saturation</h3>
              <p className="text-sm text-muted-foreground">
                More people discover VR tours daily. Early movers have the biggest advantage.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center">
            <CardContent className="space-y-3">
              <div className="text-3xl">💰</div>
              <h3 className="font-bold">Revenue Opportunity</h3>
              <p className="text-sm text-muted-foreground">
                Every month you wait is potentially $10K+ in lost revenue opportunity.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">What Happens If You Don't Act Today?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">✗</span>
                <p>You'll continue struggling with low-paying, commoditized services</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">✗</span>
                <p>Competitors will establish themselves in your market first</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">✗</span>
                <p>You'll miss the "early adopter" advantage that makes sales easier</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">✗</span>
                <p>The pricing will return to full price ($2,000+ more expensive)</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">✗</span>
                <p>You'll waste months trying to figure this out on your own</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">✗</span>
                <p>You'll regret not starting when the opportunity was clearest</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Button size="lg" className="text-xl px-12 py-6 font-bold">
            Secure My Spot in VTPS Now →
          </Button>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              30-Day Money-Back Guarantee
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Instant Access After Payment
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Regular Updates Included
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
