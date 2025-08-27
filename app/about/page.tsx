import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Menu, Users, Globe, Heart, Zap, Target, Headphones, Play } from "lucide-react"
import Footer from "@/components/footer"
import type { Metadata } from "next"

const milestones = [
  {
    year: "2016",
    title: "The Beginning",
    description: "Founded with a vision to make premium audio accessible to everyone",
  },
  {
    year: "2018",
    title: "Market Leader",
    description: "Became India's #1 audio brand with innovative wireless solutions",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description: "Expanded internationally and launched premium Nirvana series",
  },
  {
    year: "2023",
    title: "50M+ Customers",
    description: "Reached 50 million happy customers worldwide with 500+ products",
  },
]

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "Constantly pushing boundaries with cutting-edge audio technology and design",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description: "Every decision we make is centered around delivering exceptional customer experiences",
  },
  {
    icon: Target,
    title: "Quality Excellence",
    description: "Uncompromising commitment to premium quality in every product we create",
  },
  {
    icon: Globe,
    title: "Accessible Premium",
    description: "Making premium audio technology accessible to everyone, everywhere",
  },
]

const stats = [
  { number: "50M+", label: "Happy Customers" },
  { number: "500+", label: "Products Launched" },
  { number: "#1", label: "Audio Brand in India" },
  { number: "4.8/5", label: "Customer Rating" },
]

export const metadata: Metadata = {
  title: "About boAt - India's #1 Audio Lifestyle Brand Story",
  description:
    "Discover boAt's journey from startup to India's most loved audio brand. Learn about our mission, values, and commitment to making premium audio accessible to everyone.",
  keywords: [
    "boAt story",
    "audio brand India",
    "boAt founders",
    "audio lifestyle",
    "boAt mission",
    "premium audio India",
  ],
  openGraph: {
    title: "About boAt - India's #1 Audio Lifestyle Brand Story",
    description:
      "Discover boAt's journey from startup to India's most loved audio brand. Learn about our mission, values, and commitment to making premium audio accessible to everyone.",
    url: "https://boat-lifestyle.com/about",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "boAt Brand Story and Mission",
      },
    ],
  },
  alternates: {
    canonical: "https://boat-lifestyle.com/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About boAt Lifestyle",
            description:
              "Learn about boAt's journey from startup to India's #1 audio lifestyle brand, our mission, values, and leadership team.",
            url: "https://boat-lifestyle.com/about",
            mainEntity: {
              "@type": "Organization",
              name: "boAt Lifestyle",
              foundingDate: "2016",
              description:
                "India's #1 audio lifestyle brand offering premium headphones, wireless earbuds, Bluetooth speakers, and smartwatches.",
              numberOfEmployees: "500+",
              award: "India's #1 Audio Brand",
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
                <a href="/about" className="text-primary font-medium">
                  About
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Support
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Our Story
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-balance font-[family-name:var(--font-playfair)]">
                  Redefining Audio
                  <span className="text-primary"> Lifestyle</span>
                </h1>
                <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                  From a startup dream to India's #1 audio brand, boAt has revolutionized how millions experience sound.
                  Our journey is built on innovation, passion, and an unwavering commitment to premium quality.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Our Story
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  Explore Products
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/abstract-geometric-shapes.png?height=500&width=500&query=modern%20audio%20lifestyle%20collage%20with%20headphones%20speakers"
                  alt="boAt Audio Lifestyle"
                  className="w-full h-auto max-w-lg mx-auto rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10 transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-[family-name:var(--font-playfair)]">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground text-pretty mb-6">
                  To democratize premium audio experiences by creating innovative, accessible, and lifestyle-focused
                  products that resonate with the modern generation.
                </p>
                <p className="text-muted-foreground text-pretty">
                  We believe that exceptional sound quality shouldn't be a luxury. Every boAt product is crafted with
                  meticulous attention to detail, combining cutting-edge technology with contemporary design to deliver
                  experiences that exceed expectations.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Premium for Everyone</div>
                  <div className="text-sm text-muted-foreground">Making high-quality audio accessible worldwide</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/abstract-geometric-shapes.png?height=400&width=400&query=team%20collaboration%20modern%20office%20workspace"
                alt="boAt Team Mission"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From humble beginnings to becoming India's most loved audio brand
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="bg-card/50 backdrop-blur border-0">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2 font-[family-name:var(--font-playfair)]">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do at boAt
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-pretty">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The visionaries driving boAt's mission to revolutionize audio experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aman Gupta",
                role: "Co-Founder & CMO",
                image: "professional%20headshot%20indian%20business%20leader%20male",
              },
              {
                name: "Sameer Mehta",
                role: "Co-Founder & CEO",
                image: "professional%20headshot%20indian%20business%20executive%20male",
              },
              {
                name: "Priya Sharma",
                role: "Head of Design",
                image: "professional%20headshot%20indian%20design%20leader%20female",
              },
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted/30 rounded-t-lg overflow-hidden">
                    <img
                      src={`/abstract-geometric-shapes.png?height=300&width=300&query=${member.image}`}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-playfair)]">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Join Our Journey
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 text-pretty">
            Be part of the boAt family and experience the future of audio lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Explore Products
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Users className="mr-2 h-4 w-4" />
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
