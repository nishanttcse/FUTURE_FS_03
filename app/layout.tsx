import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "boAt - Premium Audio Lifestyle Brand | Headphones, Earbuds, Speakers",
    template: "%s | boAt - Premium Audio Lifestyle",
  },
  description:
    "India's #1 audio lifestyle brand offering premium headphones, wireless earbuds, Bluetooth speakers, and smartwatches. Experience superior sound quality with boAt's innovative audio technology.",
  keywords: [
    "boAt",
    "headphones",
    "earbuds",
    "wireless earbuds",
    "bluetooth speakers",
    "smartwatches",
    "audio",
    "premium audio",
    "India audio brand",
  ],
  authors: [{ name: "boAt Lifestyle" }],
  creator: "boAt Lifestyle",
  publisher: "boAt Lifestyle",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://boat-lifestyle.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://boat-lifestyle.com",
    title: "boAt - Premium Audio Lifestyle Brand",
    description:
      "India's #1 audio lifestyle brand offering premium headphones, wireless earbuds, Bluetooth speakers, and smartwatches.",
    siteName: "boAt Lifestyle",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "boAt Premium Audio Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "boAt - Premium Audio Lifestyle Brand",
    description:
      "India's #1 audio lifestyle brand offering premium headphones, wireless earbuds, Bluetooth speakers, and smartwatches.",
    images: ["/twitter-image.jpg"],
    creator: "@boatlifestyle",
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
  category: "technology",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "boAt Lifestyle",
              alternateName: "boAt",
              url: "https://boat-lifestyle.com",
              logo: "https://boat-lifestyle.com/logo.png",
              description:
                "India's #1 audio lifestyle brand offering premium headphones, wireless earbuds, Bluetooth speakers, and smartwatches.",
              foundingDate: "2016",
              founders: [
                {
                  "@type": "Person",
                  name: "Aman Gupta",
                },
                {
                  "@type": "Person",
                  name: "Sameer Mehta",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-1800-123-2628",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://www.facebook.com/boatlifestyle",
                "https://www.instagram.com/boatlifestyle",
                "https://twitter.com/boatlifestyle",
                "https://www.youtube.com/boatlifestyle",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfairDisplay.variable} antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
