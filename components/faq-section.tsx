import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Do I need any tech skills or VR experience to succeed?",
      answer:
        "Absolutely not! VTPS is designed for complete beginners. We provide step-by-step training that assumes zero prior knowledge. Many of our most successful members started with no tech background whatsoever. The system includes everything you need to learn, from basic camera operation to advanced business scaling strategies.",
    },
    {
      question: "How long until I see my first income?",
      answer:
        "Most members land their first paid client within 30-60 days of starting the program. However, using our pre-selling strategies, some members start generating revenue even before they own equipment. The key is following our proven client acquisition system rather than trying to figure it out alone.",
    },
    {
      question: "What if I don't have money for expensive VR equipment?",
      answer:
        "You don't need expensive equipment to start! We show you how to begin with budget-friendly options (under $500) and upgrade as you grow. Plus, our pre-selling strategies help you use client deposits to fund your equipment purchases. Many members are profitable before investing in premium gear.",
    },
    {
      question: "Is this just another course, or do I get real support?",
      answer:
        "VTPS is far more than a course - it's a complete business system with ongoing support. You get access to our private community of 1,500+ members, monthly live coaching calls, direct access to successful operators, and lifetime updates. We're invested in your success, not just selling you information.",
    },
    {
      question: "How is this different from learning VR on YouTube or other free resources?",
      answer:
        "Free resources teach you how to create virtual tours, but they don't teach you how to build a profitable business. VTPS provides the complete business system: client acquisition, pricing strategies, sales scripts, team building, scaling methods, and recurring revenue models. It's the difference between a hobby and a business.",
    },
    {
      question: "What if virtual tours don't work in my area?",
      answer:
        "Virtual tours work everywhere there are businesses and properties. Real estate, restaurants, retail stores, hotels, event venues, and service businesses in every market can benefit from VR tours. We provide market research tools and local marketing strategies to help you identify opportunities in any area.",
    },
    {
      question: "Can I really build recurring revenue, or is this just one-time projects?",
      answer:
        "Recurring revenue is a core part of the VTPS system. We teach you how to implement hosting fees, maintenance contracts, update services, and premium add-ons that generate monthly income. Many members build $5K-$15K+ in monthly recurring revenue within their first year.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not completely satisfied with VTPS for any reason within 30 days, we'll refund every penny. We're confident in the system because we've seen it work for over 1,500 members, but we want you to feel completely secure in your investment.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance" style={{ lineHeight: "2rem" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Get answers to the most common questions about the Virtual Tour Profit System.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions? We're here to help.</p>
          <p className="text-sm">
            Email us at: <span className="text-primary font-medium">support@vtps.com</span>
          </p>
        </div>
      </div>
    </section>
  )
}
