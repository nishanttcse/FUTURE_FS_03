import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Search, Menu, Star, Play, Headphones, Speaker, Watch } from "lucide-react"
import Footer from "@/components/footer"
import type { Metadata } from "next"

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
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "boAt Lifestyle",
            url: "https://boat-lifestyle.com",
            description:
              "India's #1 audio lifestyle brand offering premium headphones, wireless earbuds, Bluetooth speakers, and smartwatches.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://boat-lifestyle.com/products?search={search_term_string}",
              "query-input": "required name=search_term_string",
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
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Categories
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Nirvana
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Lifestyle
                </a>
                <a href="#" className="text-foreground hover:text-primary transition-colors">
                  Support
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center bg-muted rounded-lg px-3 py-2 max-w-sm">
                <Search className="h-4 w-4 text-muted-foreground mr-2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent border-none outline-none text-sm flex-1"
                />
              </div>
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  New Launch
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-balance font-[family-name:var(--font-playfair)]">
                  Immerse in
                  <span className="text-primary"> Premium</span> Audio
                </h1>
                <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                  Experience the future of sound with boAt's revolutionary audio technology. Crafted for the modern
                  lifestyle, designed for pure excellence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Shop Now
                  <ShoppingCart className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.8/5</span>
                  <span>Rating</span>
                </div>
                <div>
                  <span className="font-medium">50M+</span>
                  <span className="ml-1">Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/premium-wireless-headphones-floating-with-dynamic-.png"
                  alt="Premium boAt Headphones - Wireless Audio Technology"
                  className="w-full h-auto max-w-lg mx-auto"
                  loading="eager"
                  width={500}
                  height={500}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10 transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Explore Our Universe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From wireless earbuds to premium speakers, discover the perfect audio companion for every moment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
                  Headphones & Earbuds
                </h3>
                <p className="text-muted-foreground mb-6">
                  Premium wireless and wired audio solutions for every lifestyle
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Explore Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Speaker className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">Speakers</h3>
                <p className="text-muted-foreground mb-6">
                  Powerful portable speakers that deliver exceptional sound quality
                </p>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  Explore Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Watch className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">Smartwatches</h3>
                <p className="text-muted-foreground mb-6">
                  Smart wearables that blend technology with style seamlessly
                </p>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  Explore Collection
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
                Trending Now
              </h2>
              <p className="text-lg text-muted-foreground">Discover our most popular products loved by millions</p>
            </div>
            <Button variant="outline" className="hidden sm:flex bg-transparent">
              View All Products
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Airdopes 141", price: "₹1,299", image: "wireless%20earbuds%20in%20sleek%20case", rating: 4.5 },
              { name: "Rockerz 450", price: "₹1,599", image: "over%20ear%20wireless%20headphones", rating: 4.7 },
              { name: "Stone 352", price: "₹1,799", image: "portable%20bluetooth%20speaker", rating: 4.6 },
              { name: "Wave Call", price: "₹2,299", image: "smartwatch%20with%20calling%20feature", rating: 4.4 },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted/30 rounded-t-lg overflow-hidden">
                    <img
                      src={`/abstract-geometric-shapes.png?height=300&width=300&query=${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
                    </div>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="opacity-0 group-hover:opacity-100 transition-opacity bg-transparent"
                      >
                        Add to Cart
                      </Button>
                    </div>
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
            Join the boAt Lifestyle
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 text-pretty">
            Be the first to know about new launches, exclusive offers, and the latest in audio innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
