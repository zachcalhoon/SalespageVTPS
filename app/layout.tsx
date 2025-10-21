import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '876810729805531');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=876810729805531&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Script id="vtp-tracking" strategy="afterInteractive">
          {`
            var head = document.head;
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = "https://t.virtualtourprofit.com/v1/lst/universal-script?ph=3497790c2bc9033ae79725f86bba7a43e67712f507789e8ce6c6999c40c68a3a&tag=!clicked&ref_url=" + encodeURI(document.URL);
            head.appendChild(script);
          `}
        </Script>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NBFHGML');
          `}
        </Script>

        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-715239482" strategy="afterInteractive" />
        <Script id="google-ads-715239482" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-715239482');
          `}
        </Script>

        {/* Existing Google tag AW-1007264957 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-1007264957" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-1007264957');
          `}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
