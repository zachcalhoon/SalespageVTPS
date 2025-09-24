"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

const getJotFormURL = (source: string, campaign = "360-profit-accelerator") => {
  const baseURL = "https://form.jotform.com/240724167404149"
  const utmParams = new URLSearchParams({
    utm_source: source,
    utm_medium: "website",
    utm_campaign: campaign,
    utm_content: source.replace(/-/g, "_"),
  })
  return `${baseURL}?${utmParams.toString()}`
}

export default function ProfitBreakdown360() {
  // Add mobile detection
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Simplify animations
  const fadeInUp = isMobile
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: "easeOut" },
      }

  const staggerContainer = isMobile
    ? {}
    : {
        animate: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }

  const glassmorphicCard = "backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg font-semibold mb-4 md:mb-6">
              💰 Complete Value Breakdown
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8 px-4">
              Everything Included in the <span className="text-orange-400">360º Profit Software Bundle</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 md:mb-12 px-4">
              See the complete value breakdown of everything you get when you join the 360º Profit Software Bundle. This
              isn't just software - it's a complete business transformation package.
            </p>

            {/* Updated Software Bundle Image */}
            <div className="text-center mb-8 md:mb-12 px-4">
              <img
                src="/placeholder.svg?key=bundle&width=1200&height=800"
                alt="Complete 360° Profit System Software Bundle - CloudPano, Floor Plan Scanner, LeadStack, Lead Finder App, and PhotoAI Video"
                className="w-full max-w-5xl mx-auto rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Value Breakdown Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Software Tools Column */}
            <motion.div variants={fadeInUp} className={`${glassmorphicCard} p-6 md:p-8 rounded-2xl`}>
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">🛠️ Premium Software Tools</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Professional-grade tools that would cost thousands separately
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    name: "CloudPano Pro+",
                    description: "Professional 360° virtual tour platform",
                    value: "$1,200/year",
                    features: [
                      "Unlimited virtual tours",
                      "Custom branding",
                      "Lead capture forms",
                      "Analytics dashboard",
                    ],
                  },
                  {
                    name: "21 Lead Finder App",
                    description: "Automated lead generation system",
                    value: "$1,200/year",
                    features: [
                      "Daily qualified leads",
                      "Contact information",
                      "Business intelligence",
                      "Local targeting",
                    ],
                  },
                  {
                    name: "LeadStack CRM",
                    description: "Complete customer relationship management",
                    value: "$4,764/year",
                    features: ["Lead management", "Automated follow-up", "Pipeline tracking", "Email campaigns"],
                  },
                  {
                    name: "PhotoAI Video.com",
                    description: "AI-powered video creation platform",
                    value: "$800/year",
                    features: [
                      "Automated video creation",
                      "Custom templates",
                      "Brand integration",
                      "Social media ready",
                    ],
                  },
                  {
                    name: "Pictastic.ai Property Sites",
                    description: "Professional property website builder",
                    value: "$420/year",
                    features: [
                      "Custom property websites",
                      "SEO optimization",
                      "Mobile responsive",
                      "Lead capture integration",
                    ],
                  },
                  {
                    name: "Pictastic.ai Virtual Staging",
                    description: "AI-powered virtual staging solution",
                    value: "$1,089/year",
                    features: [
                      "Instant virtual staging",
                      "Multiple design styles",
                      "High-quality renders",
                      "Fast turnaround",
                    ],
                  },
                ].map((tool, index) => (
                  <div key={index} className="border-l-4 border-orange-400 pl-4 md:pl-6 py-3 md:py-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                      <h4 className="text-base md:text-lg font-bold text-white">{tool.name}</h4>
                      <span className="text-orange-400 font-bold text-sm md:text-base">{tool.value}</span>
                    </div>
                    <p className="text-gray-300 mb-3 text-sm md:text-base">{tool.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                          <span className="text-gray-400 text-xs md:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-600">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="text-lg md:text-xl font-bold text-white">Software Tools Total:</span>
                  <span className="text-xl md:text-2xl font-bold text-red-400">$9,473/year</span>
                </div>
              </div>
            </motion.div>

            {/* Training & Support Column */}
            <motion.div variants={fadeInUp} className={`${glassmorphicCard} p-6 md:p-8 rounded-2xl`}>
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">📚 Training & Support</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Complete business training and ongoing support system
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    name: "Virtual Tour Profit System",
                    description: "Complete business action plan and training",
                    value: "$2,000 value",
                    features: [
                      "Step-by-step business setup",
                      "Marketing strategies",
                      "Sales scripts & templates",
                      "Client acquisition system",
                    ],
                  },
                  {
                    name: "1-on-1 Strategy Sessions",
                    description: "Personal coaching and business guidance",
                    value: "$6,000/year",
                    features: [
                      "Weekly strategy calls",
                      "Personalized action plans",
                      "Problem-solving support",
                      "Business optimization",
                    ],
                  },
                  {
                    name: "Done-For-You Marketing",
                    description: "Complete marketing materials and campaigns",
                    value: "$3,600/year",
                    features: ["Email templates", "Social media content", "Proposal templates", "Marketing automation"],
                  },
                  {
                    name: "Private Community Access",
                    description: "Exclusive mastermind group and networking",
                    value: "$2,400/year",
                    features: [
                      "24/7 community support",
                      "Peer networking",
                      "Success case studies",
                      "Monthly group calls",
                    ],
                  },
                  {
                    name: "Technical Support",
                    description: "Complete setup and ongoing technical help",
                    value: "$1,800/year",
                    features: [
                      "Software setup assistance",
                      "Technical troubleshooting",
                      "Integration support",
                      "Updates and maintenance",
                    ],
                  },
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-400 pl-4 md:pl-6 py-3 md:py-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                      <h4 className="text-base md:text-lg font-bold text-white">{item.name}</h4>
                      <span className="text-blue-400 font-bold text-sm md:text-base">{item.value}</span>
                    </div>
                    <p className="text-gray-300 mb-3 text-sm md:text-base">{item.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                          <span className="text-gray-400 text-xs md:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-600">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="text-lg md:text-xl font-bold text-white">Training & Support Total:</span>
                  <span className="text-xl md:text-2xl font-bold text-red-400">$15,800/year</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Total Value Summary */}
          <motion.div variants={fadeInUp} className={`${glassmorphicCard} p-6 md:p-8 rounded-2xl mb-8 md:mb-12`}>
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">💎 Complete Bundle Value</h3>
              <p className="text-gray-300 text-base md:text-lg">
                This is what you'd pay if you purchased everything separately
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-orange-400 mb-2">$9,473/year</div>
                <p className="text-gray-300 text-sm md:text-base">Premium Software Tools</p>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-blue-400 mb-2">$15,800/year</div>
                <p className="text-gray-300 text-sm md:text-base">Training & Support</p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">$25,273/year</div>
                <p className="text-gray-300 font-semibold text-sm md:text-base">Total Annual Value</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 p-6 md:p-8 rounded-xl text-center">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">🎯 Your Investment Today</h4>
              <div className="text-3xl md:text-5xl font-bold text-green-400 mb-3 md:mb-4">Bundle Discount</div>
              <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6">
                Get everything above when you book your free strategy call
              </p>

              <div className="bg-orange-500/20 border border-orange-500/30 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
                <p className="text-orange-300 font-semibold text-base md:text-lg">
                  💰 If Accepted. You Can Save Up To $20,000+/year in software and training costs.
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl rounded-full shadow-2xl w-full md:w-auto"
                  onClick={() => window.open(getJotFormURL("profit-breakdown"), "_blank")}
                >
                  <Phone className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                  Claim Your Bundle Discount Now
                  <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
                </Button>
              </motion.div>

              <p className="text-gray-400 mt-3 md:mt-4 text-xs md:text-sm">
                Limited time offer • No credit card required • 100% Free consultation
              </p>
            </div>
          </motion.div>

          {/* Risk-Free Guarantee */}
          <motion.div variants={fadeInUp} className={`${glassmorphicCard} p-6 md:p-8 rounded-2xl text-center`}>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">🛡️ 90-Day Success Guarantee</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6 max-w-3xl mx-auto px-4">
              We're so confident in the 360º Profit System that we guarantee you'll land your first paying client within
              90 days, or we'll refund every penny. No questions asked.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">First client within 90 days guaranteed</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">100% money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">Complete system setup included</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">Personal support throughout</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
