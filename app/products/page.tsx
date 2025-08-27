import type { Metadata } from "next"
import ProductsClientPage from "./ProductsClientPage"

export const metadata: Metadata = {
  title: "Premium Audio Products - Headphones, Earbuds, Speakers | boAt",
  description:
    "Shop boAt's complete collection of premium wireless headphones, earbuds, Bluetooth speakers, and smartwatches. Find the perfect audio companion with advanced features and superior sound quality.",
  keywords: [
    "boAt products",
    "wireless headphones",
    "bluetooth earbuds",
    "portable speakers",
    "smartwatches",
    "audio accessories",
    "premium audio",
  ],
  openGraph: {
    title: "Premium Audio Products - Headphones, Earbuds, Speakers | boAt",
    description:
      "Shop boAt's complete collection of premium wireless headphones, earbuds, Bluetooth speakers, and smartwatches.",
    url: "https://boat-lifestyle.com/products",
    images: [
      {
        url: "/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "boAt Premium Audio Products Collection",
      },
    ],
  },
  alternates: {
    canonical: "https://boat-lifestyle.com/products",
  },
}

export default function ProductsPage() {
  return <ProductsClientPage />
}
