import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "boAt - India's #1 Premium Audio Lifestyle Brand",
  description:
    "Discover boAt's premium collection of wireless headphones, earbuds, Bluetooth speakers, and smartwatches. Experience superior sound quality with India's most loved audio brand.",
  keywords: [
    "boAt India",
    "wireless headphones",
    "bluetooth earbuds",
    "premium speakers",
    "smartwatches",
    "audio lifestyle",
    "boAt products",
  ],
  openGraph: {
    title: "boAt - India's #1 Premium Audio Lifestyle Brand",
    description:
      "Discover boAt's premium collection of wireless headphones, earbuds, Bluetooth speakers, and smartwatches.",
    url: "https://boat-lifestyle.com",
    images: [
      {
        url: "/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "boAt Premium Audio Collection",
      },
    ],
  },
  alternates: {
    canonical: "https://boat-lifestyle.com",
  },
}

export default function HomePage() {
  return <ClientPage />
}
