import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "VTPS Training - Build a Profitable 360° VR Agency | Virtual Tour Business System",
  description:
    "Learn how to build a wildly profitable 360° VR agency with our proven Virtual Tour Photography System. Start earning $10,000+ per month with virtual tours, even with zero experience. Get automated lead generation, high-ticket sales training, and subscription revenue models.",
  keywords: [
    "360 virtual tours",
    "VR business",
    "virtual tour photography",
    "VTPS training",
    "360 degree camera business",
    "virtual reality agency",
    "high ticket sales",
    "subscription business model",
    "automated lead generation",
    "virtual tour software",
    "CloudPano",
    "real estate virtual tours",
    "commercial photography",
    "VR marketing",
  ],
  authors: [{ name: "VTPS Training" }],
  creator: "VTPS Training",
  publisher: "VTPS Training",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vtps-training.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Build a Profitable 360° VR Agency - VTPS Training System",
    description:
      "The complete system to build a wildly profitable 360° VR agency. Learn high-ticket sales, subscription models, and automated lead generation for virtual tours.",
    url: "https://vtps-training.com",
    siteName: "VTPS Training",
    images: [
      {
        url: "/vtps-success-visual.png",
        width: 1200,
        height: 630,
        alt: "VTPS Training - Virtual Tour Business Success",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Build a Profitable 360° VR Agency - VTPS Training",
    description:
      "Learn the complete system to build a wildly profitable 360° VR agency with automated lead generation and high-ticket sales.",
    images: ["/vtps-success-visual.png"],
    creator: "@vtpstraining",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "business training",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  )
}
