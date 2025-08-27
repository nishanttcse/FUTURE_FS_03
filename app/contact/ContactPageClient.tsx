"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import { ShoppingCart, Menu, Mail, Phone, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our support team",
    contact: "1800-123-BOAT (2628)",
    availability: "Mon-Sat, 9 AM - 7 PM",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    contact: "support@boat-lifestyle.com",
    availability: "24/7 Response",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our experts",
    contact: "Start Chat",
    availability: "Mon-Sat, 9 AM - 7 PM",
  },
]

const supportCategories = [
  "Product Support",
  "Order & Shipping",
  "Returns & Exchange",
  "Warranty Claim",
  "Technical Issue",
  "General Inquiry",
]

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact boAt Customer Support",
            description:
              "Get in touch with boAt's customer support team for product help, warranty claims, and technical support.",
            url: "https://boat-lifestyle.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "boAt Lifestyle",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-1800-123-2628",
                  contactType: "customer service",
                  availableLanguage: ["English", "Hindi"],
                  hoursAvailable: "Mo-Sa 09:00-19:00",
                },
                {
                  "@type": "ContactPoint",
                  email: "support@boat-lifestyle.com",
                  contactType: "customer service",
                  availableLanguage: ["English", "Hindi"],
                },
              ],
            },
          }),
        }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold text-primary font-[family-name:var(--font-playfair)]">boAt</div>
              <div className="hidden md:flex items-center gap-6">
                <a href="/" className="text-foreground hover:text-primary transition-colors">
                  Home
                </a>
                <a href="/products" className="text-foreground hover:text-primary transition-colors">
                  Products
                </a>
                <a href="/about" className="text-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="/contact" className="text-primary font-medium">
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              We're Here to Help
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have questions about our products or need support? Our team is ready to assist you with anything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <div className="space-y-2">
                      <div className="font-medium text-primary">{method.contact}</div>
                      <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                        <Clock className="h-3 w-3" />
                        {method.availability}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Send us a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <Card className="border-0 bg-card/50 backdrop-blur">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium mb-2">
                        Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a category</option>
                        {supportCategories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What is the warranty period for boAt products?",
                answer:
                  "Most boAt products come with a 1-year warranty from the date of purchase. Some premium products may have extended warranty periods.",
              },
              {
                question: "How can I track my order?",
                answer:
                  "You can track your order using the tracking link sent to your email or by visiting our Track Order page with your order number.",
              },
              {
                question: "What is your return policy?",
                answer:
                  "We offer a 7-day return policy for unopened products in original packaging. Defective products can be returned within 15 days.",
              },
              {
                question: "Do you offer international shipping?",
                answer:
                  "Currently, we ship within India only. We're working on expanding our international shipping options.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 bg-card">
                <CardHeader>
                  <CardTitle className="text-lg font-[family-name:var(--font-playfair)]">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
