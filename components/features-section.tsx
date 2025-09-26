import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturesSection() {
  const features = [
    {
      category: "Core Training",
      items: [
        "Complete VR Business Blueprint (8+ hours of video)",
        "Client Acquisition Masterclass",
        "Pricing & Packaging Strategies",
        "Team Building & Scaling Systems",
      ],
    },
    {
      category: "Done-For-You Assets",
      items: [
        "Proven Sales Scripts & Email Templates",
        "Professional Proposal Templates",
        "Marketing Funnels & Landing Pages",
        "Contract Templates & Legal Documents",
      ],
    },
    {
      category: "Technology & Tools",
      items: [
        "Recommended Camera & Equipment Guide",
        "Software Training & Tutorials",
        "Hosting Platform Setup",
        "Quality Control Checklists",
      ],
    },
    {
      category: "Ongoing Support",
      items: [
        "Private Facebook Community (1,500+ Members)",
        "Monthly Live Q&A Calls",
        "Direct Access to Successful Operators",
        "Lifetime Updates & New Content",
      ],
    },
  ]

  const bonuses = [
    {
      title: "VR Marketing Automation Suite",
      value: "$2,497",
      description: "Complete email sequences, social media templates, and automated follow-up systems.",
    },
    {
      title: "High-Ticket Sales Training",
      value: "$1,997",
      description: "Advanced techniques for closing $5K-$40K projects with confidence.",
    },
    {
      title: "Recurring Revenue Playbook",
      value: "$997",
      description: "Step-by-step guide to building $10K+ monthly recurring income streams.",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance" style={{ lineHeight: "2rem" }}>
            Everything You Need to Succeed
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">The Virtual Tour Profit System</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            This comprehensive system removes all guesswork and gives you a proven roadmap to building a profitable VR
            business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">{feature.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              Limited Time Bonuses
            </Badge>
            <h3 className="text-2xl font-bold mb-2">Act Now & Get These Exclusive Bonuses</h3>
            <p className="text-muted-foreground">Worth over $5,491 - Yours FREE when you join today</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-primary">{bonus.value}</div>
                  <h4 className="font-semibold">{bonus.title}</h4>
                  <p className="text-sm text-muted-foreground">{bonus.description}</p>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    FREE Bonus
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
