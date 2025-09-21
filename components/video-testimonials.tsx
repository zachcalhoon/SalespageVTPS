export function VideoTestimonials() {
  const videoTestimonials = [
    {
      name: "Ron",
      title: "Hear How Ron Made $10,000+",
      subtitle: "With This Content...",
      videoUrl: "https://rontestimonial.s3-us-west-2.amazonaws.com/ron+testimonail.mp4",
      description:
        "Watch Ron share his incredible success story and how he generated over $10,000 using the VTPS system and content strategies.",
      gradient: "from-primary to-primary/80",
      initial: "R",
    },
    {
      name: "Bobby",
      title: "Hear How Bobby Got His First 2 Clients Fast",
      subtitle: "With VTPS",
      videoUrl: "https://testimonialbobby.s3-us-west-2.amazonaws.com/bobby+testimonial.mp4",
      description:
        "Watch Bobby share how he quickly landed his first two clients using the VTPS system and strategies.",
      gradient: "from-accent to-accent/80",
      initial: "B",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text text-glow">Real Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch actual VTPS members share their transformation stories and results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {videoTestimonials.map((testimonial, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 text-center hover-lift">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{testimonial.title}</h3>
                <h4 className="text-xl font-bold text-primary mb-4">{testimonial.subtitle}</h4>
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg animate-glow`}
                >
                  {testimonial.initial}
                </div>
                <h5 className="text-xl font-bold text-foreground">{testimonial.name}</h5>
                <p className="text-sm text-muted-foreground">VTPS Success Story</p>
              </div>

              <div className="glass rounded-lg p-6 mb-6">
                <div className="relative aspect-video rounded-lg overflow-hidden group">
                  <video controls className="w-full h-full object-cover">
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="glass-strong rounded-full p-4 shadow-lg animate-glow">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">{testimonial.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
