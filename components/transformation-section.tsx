import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TransformationSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance" style={{ lineHeight: "2rem" }}>
            Real Results from Real People
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            These entrepreneurs started with zero VR experience and built thriving agencies generating consistent
            monthly revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mike Chen</h3>
                  <p className="text-muted-foreground">Former Insurance Agent</p>
                </div>
              </div>
              <blockquote className="text-lg italic">
                "I went from struggling to make $3K/month selling insurance to consistently earning $15K+ monthly with
                virtual tours. My first $40,000 project came just 3 months after starting VTPS."
              </blockquote>
              <div className="flex gap-4 text-sm">
                <Badge variant="secondary">$40K Project</Badge>
                <Badge variant="secondary">3 Months</Badge>
                <Badge variant="secondary">5x Income</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👩‍💻</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Sarah Martinez</h3>
                  <p className="text-muted-foreground">Stay-at-Home Mom</p>
                </div>
              </div>
              <blockquote className="text-lg italic">
                "With no tech background, I built a virtual tour business that generates $8K/month in recurring revenue.
                I work 20 hours a week and have complete flexibility with my schedule."
              </blockquote>
              <div className="flex gap-4 text-sm">
                <Badge variant="secondary">$8K Monthly</Badge>
                <Badge variant="secondary">20 hrs/week</Badge>
                <Badge variant="secondary">Recurring Revenue</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">What You Can Expect:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$500-$2,000</div>
              <p className="text-sm text-muted-foreground">Per project for half-day shoots</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$10K+</div>
              <p className="text-sm text-muted-foreground">Monthly recurring revenue potential</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <p className="text-sm text-muted-foreground">Profit margins on hosting & upsells</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
