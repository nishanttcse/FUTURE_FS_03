import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact boAt - Customer Support & Help Center",
  description:
    "Get in touch with boAt's customer support team. Find help with products, orders, warranty claims, and technical support. Multiple ways to reach us including phone, email, and live chat.",
  keywords: [
    "boAt contact",
    "customer support",
    "boAt help",
    "warranty support",
    "technical support",
    "boAt phone number",
  ],
  openGraph: {
    title: "Contact boAt - Customer Support & Help Center",
    description:
      "Get in touch with boAt's customer support team. Find help with products, orders, warranty claims, and technical support.",
    url: "https://boat-lifestyle.com/contact",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "boAt Customer Support Contact",
      },
    ],
  },
  alternates: {
    canonical: "https://boat-lifestyle.com/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
