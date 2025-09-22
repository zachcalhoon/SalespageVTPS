import { Badge } from "@/components/ui/badge"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-3xl p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">Virtual Tour Profit System</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of entrepreneurs building profitable VR agencies with our complete training system and
              ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Training</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Complete VR Course</li>
                <li>Business Templates</li>
                <li>Marketing Materials</li>
                <li>Equipment Guides</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Private Community</li>
                <li>Live Coaching Calls</li>
                <li>Email Support</li>
                <li>Success Managers</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>CloudPano Pro+</li>
                <li>Client Proposals</li>
                <li>Pricing Guides</li>
                <li>Case Studies</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Guarantee</h4>
              <div className="space-y-3">
                <Badge className="glass-strong text-green-600">30-Day Money Back</Badge>
                <p className="text-sm text-muted-foreground">Risk-free trial with full refund guarantee</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <Badge className="glass text-green-600">98% Success Rate</Badge>
              </div>

              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground">
                  © {currentYear} Virtual Tour Profit System. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Results may vary. Individual success depends on effort and market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="glass rounded-full px-6 py-3 inline-flex items-center gap-2 animate-float">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-foreground font-medium">Join the VR revolution today</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
