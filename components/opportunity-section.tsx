import { Card, CardContent } from "@/components/ui/card"

export function OpportunitySection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance leading-tight">
            The Virtual Tour Revolution is Here
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            While everyone else is stuck in the past, smart entrepreneurs are capitalizing on the explosive growth of VR
            and 360° marketing. The market is wide open, competition is minimal, and businesses are desperate for this
            cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8">
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold text-primary">$40B+</div>
              <h3 className="text-xl font-semibold">VR Market Size</h3>
              <p className="text-muted-foreground">
                The virtual reality market is exploding, with businesses scrambling to adopt immersive technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8">
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold text-primary">89%</div>
              <h3 className="text-xl font-semibold">Higher Engagement</h3>
              <p className="text-muted-foreground">
                Virtual tours generate 89% more engagement than traditional photos and videos.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8">
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold text-primary">3x</div>
              <h3 className="text-xl font-semibold">Faster Sales</h3>
              <p className="text-muted-foreground">
                Properties with virtual tours sell 3x faster than those without immersive experiences.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-card rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-center">The Problem Most People Face:</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">✗</span>
                <p>Struggling to find high-paying clients in saturated markets</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">✗</span>
                <p>Overwhelmed by complex technology and software</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">✗</span>
                <p>No clear system for scaling beyond trading time for money</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">✗</span>
                <p>Competing on price instead of value and innovation</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">✗</span>
                <p>Missing out on recurring revenue opportunities</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-destructive text-xl">✗</span>
                <p>Lack of proven sales scripts and marketing materials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
