"use client"

import { useState } from "react"

const programs = [
  {
    title: "The Digital Media Business Blueprint - How To Sell Virtual Tours For Profit",
    description: "Master the fundamentals of selling virtual tours and building your business from scratch",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0nH70fpzuFzMUaWAf94KicUbA6jvZD.png",
    lessons: [
      "Introduction: Virtual Tour Sales. Getting Started Selling Virtual Tours",
      "How To Start a Virtual Tour Business From Scratch",
      "How To Pick a Virtual Tour Niche With Exact Examples",
      "How To Find Leads And Niches With Google",
      "How To Find And Email 2000 Prospects",
      "How To Handle Hot and Cold Leads",
      "How To Have a Successful Cold Call",
      "Live Cold Call - Bonus",
      "How To Sell Your Virtual Tours In Person",
      "How To Get Referrals and Charge Hosting Fees",
      "The Value Ladder - How To Structure a Digital Media Business To Your First $100,000",
    ],
  },
  {
    title: "Outbound Sales Growth Hacking Secrets",
    description: "Learn the automated system that generates $10K per month",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rn0ESS2Uv9oL2vgYIQ1kc5FjkjjLHw.png",
    lessons: [
      "[The Virtual Tour Profit System Video 1 of 2] Virtual Tour Business Automation Explained",
      "[The Virtual Tour Profit System 2 of 2] How To Build A System That Generates $10K Per Month Automatically",
      "Pre-selling Pack: 360 Virtual Tour Demos To Sell With",
      "Business Page Set Up - The Simple Method For Pre-selling",
      "Getting Started With Your Website",
    ],
  },
  {
    title: "Outbound Sales Growth Hacking",
    description: "Scale your business with proven outbound selling strategies",
    image: "/email-marketing-sales-funnel.jpg",
    lessons: [
      "Introduction: Outbound Selling and The Path To Scaleable Profit",
      "Picking a Niche: How To Accelerate Profit One Niche At A Time",
      "The Customer Journey - How To Understand The Deep Desires Of Your Niche",
      "How To Use Email To Become A Sales Juggernaut",
      "How To Write Great Cold Emails",
      "How To Build a List For Your Email Marketing",
      "How To Find Prebuilt List [3 Examples]",
      "How To Outsource List Building With Real World Examples",
      "Outbound Document List - Written Emails, Niche List, Pricing Pack Example",
      "[Design Kit] Brochure, Tri Fold, Pitch Deck, Pricing Presentation and Stock Images",
    ],
  },
  {
    title: "CloudPano Power User Training",
    description: "Master the industry-leading virtual tour software",
    image: "/virtual-tour-software-interface.jpg",
    lessons: [
      "CloudPano.com Getting Started",
      "Power User Training Introduction - 360° Photos Explained",
      "Virtual Tour Software Full Walkthrough CloudPano.com",
      "Dashboard Demo and Tour Management",
      "How To Embed Content Onto Your Virtual Tour Software CloudPano",
      "How To White Label Your Virtual Tour On CloudPano.com - And Keep Your Domain",
      "Lead Generation Advanced Feature",
      "How To Create A Virtual Tour 'Walk Through'",
      "Advanced HTML School 1-3: Custom Info Spots and Buttons",
      "How To Add a Floor Plan To Your Virtual Tour",
      "How To Create and Share Real Estate In Virtual Reality With CloudPano",
    ],
  },
  {
    title: "360° Photography Mastery",
    description: "Professional 360° photography techniques and post-processing",
    image: "/360-photography-equipment-collection.png",
    lessons: [
      "Introduction and Interior Setup On The Z1",
      "Interior Set Up (2) With Bracketed Exposures Z1",
      "Exterior Manual Bracketing Set Up Walkthrough Z1",
      "Getting Started and The Ricoh Theta Stitcher",
      "Lightroom Walkthrough Z1 Examples",
      "Photoshop Walkthrough Z1 Examples",
      "Nadir Change and Metadata Correction",
      "Interior and Exterior Post Processing Examples",
      "How To Photograph and Create a 360 Virtual Tour On Location With The Insta 360 One X",
      "Noise Reduction - Full Tutorial",
    ],
  },
  {
    title: "Inbound Advertising Mastery",
    description: "Buy customers for profit with Google Ads and Facebook Ads",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pf1P5rvvyPLEG6hJvburT21rAQIoih.png",
    lessons: [
      "Google Adwords Overview: How To Determine Your Local Keyword Targets",
      "Google Adwords Campaign Example: How To Build Your First PPC Campaign",
      "Facebook Ads: Getting Started With Facebook Ads",
      "How To Install Your Facebook Pixel",
      "How To Run an Engagement Ad On Facebook",
      "How To Create a Custom Conversion On Facebook Ads",
      "Facebook Ads Funnel Example",
      "Facebook Ad Copy and Video Examples",
      "Facebook Ads Live Training - Algorithm, Structure, Targeting, Funnels and CTA",
    ],
  },
  {
    title: "High Ticket Upsell Program",
    description: "Upsell your way to $10K/month with fewer clients",
    image: "/high-ticket-training-video.png",
    lessons: [
      "Introduction: How To Upsell Your Way To 10k a Month With a Few Clients",
      "Session 1: Lead Generation System Explained",
      "Session 2: The Tools Needed - AC and CF Explained",
      "Session 3: Automation Set Up and Connecting AC to CF",
      "Section 4: How To Run Facebook Ads For Clients",
      "[Downloads] Lead Generation Files (Everything done for you)",
    ],
  },
  {
    title: "Outsourcing Mastery Program",
    description: "Build lasting resources for your business life",
    image: "/virtual-assistant-team-collaboration.jpg",
    lessons: [
      "Introduction: Outsourcing - How To Be Resourced For All Your Business Life",
      "Outsourcing Overview 1: How to build lasting resources",
      "[Document]: Example Job Post",
      "[Interview] Joe My Virtual Assistant",
      "[Document] List of Post Processing Editors",
      "[People] List of professional 360º photo editors",
      "[Resource] Data Mining Team",
    ],
  },
]

const bonusItems = [
  { title: "Full Website Template", icon: "🌐" },
  { title: "Pitch Deck & Presentations", icon: "📊" },
  { title: "Tri-Fold Brochures", icon: "📄" },
  { title: "Pricing Presentation Package", icon: "💰" },
  { title: "Proposal Examples", icon: "📝" },
  { title: "Media & Stock Images Folder", icon: "🖼️" },
  { title: "70+ Profitable Niche Ideas", icon: "🎯" },
  { title: "Pre-Written Email Campaigns", icon: "📧" },
  { title: "Sales Design Kit", icon: "🎨" },
  { title: "Power Presell Demos", icon: "🚀" },
]

export function ProgramBreakdown() {
  const [expandedProgram, setExpandedProgram] = useState<number | null>(null)
  const [allExpanded, setAllExpanded] = useState(true)

  const toggleProgram = (index: number) => {
    if (allExpanded) {
      setExpandedProgram(expandedProgram === index ? null : index)
    } else {
      setExpandedProgram(expandedProgram === index ? null : index)
    }
  }

  const isProgramExpanded = (index: number) => {
    return allExpanded || expandedProgram === index
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black leading-tight">Complete Program Breakdown</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Everything you need to build a wildly profitable 360° virtual tour business - from complete beginner to
            $10K/month
          </p>
        </div>

        <div className="text-center mb-8">
          <button
            onClick={() => setAllExpanded(!allExpanded)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            {allExpanded ? "Collapse All Programs" : "Expand All Programs"}
          </button>
        </div>

        {/* Value Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white text-2xl">▶</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">200+ Videos</h3>
            <p className="text-gray-600">Step-by-step training modules</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white text-2xl">⬇</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">50+ Templates</h3>
            <p className="text-gray-600">Done-for-you business assets</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white text-2xl">$</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">$10K/Month</h3>
            <p className="text-gray-600">Proven profit system</p>
          </div>
        </div>

        {/* Programs */}
        <div className="space-y-6 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              <div
                className="p-6 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleProgram(index)}
              >
                <div className="flex items-center space-x-6">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-32 h-24 rounded-lg object-cover shadow-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-black mb-1">
                      Program {index + 1}: {program.title}
                    </h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
                <span className="text-gray-600 text-xl">{isProgramExpanded(index) ? "▼" : "▶"}</span>
              </div>

              {isProgramExpanded(index) && (
                <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                  <div className="pt-6 mb-6">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-64 rounded-lg object-cover shadow-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    {program.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="flex items-center space-x-3 py-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-800">{lesson}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bonus Section */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            🎁 Bonus Materials Included
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {bonusItems.map((item, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 border border-gray-100"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-sm text-gray-800">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Affiliate Program */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl mr-3">👥</span>
            <h3 className="text-2xl font-bold text-black">Affiliate Program Included</h3>
          </div>
          <p className="text-gray-600 mb-4">Earn $300 for every person you refer to the program</p>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold">
            <span className="text-xl">$</span>
            <span>$300 Per Referral</span>
          </div>
        </div>
      </div>
    </section>
  )
}
