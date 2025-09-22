import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function VirtualTourExamples() {
  const tourExamples = [
    {
      title: "Luxury Real Estate",
      description: "High-end property showcasing with immersive 360° views",
      image: "/luxury-modern-house-interior-living-room.jpg",
      price: "$2,500 - $5,000",
      features: ["360° Photography", "Virtual Staging", "Floor Plans", "Drone Footage"],
    },
    {
      title: "Restaurant & Hospitality",
      description: "Interactive dining experiences that drive reservations",
      image: "/elegant-restaurant-interior-dining-room.jpg",
      price: "$1,500 - $3,000",
      features: ["Menu Integration", "Reservation Links", "Ambiance Capture", "Social Sharing"],
    },
    {
      title: "Retail Showrooms",
      description: "Virtual shopping experiences for modern consumers",
      image: "/modern-retail-store-showroom-interior.jpg",
      price: "$2,000 - $4,000",
      features: ["Product Hotspots", "E-commerce Links", "Brand Storytelling", "Mobile Optimized"],
    },
    {
      title: "Corporate Offices",
      description: "Professional spaces for recruitment and client presentations",
      image: "/modern-corporate-office-workspace.jpg",
      price: "$3,000 - $6,000",
      features: ["Team Introductions", "Company Culture", "Meeting Rooms", "Facility Tours"],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="glass-strong mb-4 text-primary">Portfolio Examples</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text text-glow">Virtual Tours That Convert</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            See the types of high-value virtual tours you'll be creating for clients across different industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tourExamples.map((example, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden hover-lift group">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={example.image || "/placeholder.svg"}
                  alt={example.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="glass-strong text-white border-white/20">
                    View Tour
                  </Button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{example.title}</h3>
                    <p className="text-muted-foreground">{example.description}</p>
                  </div>
                  <Badge className="glass text-primary font-semibold">{example.price}</Badge>
                </div>

                <div className="flex flex-wrap gap-2">
                  {example.features.map((feature, featureIndex) => (
                    <Badge
                      key={featureIndex}
                      variant="outline"
                      className="glass text-xs"
                      style={{ animationDelay: `${featureIndex * 0.1}s` }}
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-3xl p-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text">
              Learn the equipment needed without over paying!
            </h3>
            <p className="text-lg text-muted-foreground">
              Get access to professional-grade 360° cameras and equipment recommendations to create stunning virtual
              tours
            </p>

            <div className="flex justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U9mTypZJkTnhDVEqxskkEekEDrBxl5.png"
                alt="Professional 360° Camera Equipment Collection"
                className="max-w-md rounded-lg shadow-xl hover-lift"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="glass rounded-xl p-4 hover-lift">
                <h4 className="font-semibold text-foreground mb-2">Camera Recommendations</h4>
                <p className="text-sm text-muted-foreground">Professional 360° cameras for every budget</p>
              </div>
              <div className="glass rounded-xl p-4 hover-lift">
                <h4 className="font-semibold text-foreground mb-2">Setup Guides</h4>
                <p className="text-sm text-muted-foreground">Step-by-step equipment configuration</p>
              </div>
              <div className="glass rounded-xl p-4 hover-lift">
                <h4 className="font-semibold text-foreground mb-2">Best Practices</h4>
                <p className="text-sm text-muted-foreground">Professional shooting techniques</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
