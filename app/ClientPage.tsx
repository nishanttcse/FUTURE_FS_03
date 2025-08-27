"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Search, Menu, Star, Play, Headphones, Speaker, Watch } from "lucide-react"
import Footer from "@/components/footer"
import { CartIcon } from "@/components/cart-icon"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

interface Product {
  id: string
  name: string
  price: number
  image_url: string
  rating: number
  reviews_count: number
}

export default function ClientPage() {
  const { addToCart } = useCart()
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("id, name, price, image_url, rating, reviews_count")
          .limit(4)

        if (error) throw error
        setFeaturedProducts(data || [])
      } catch (error) {
        console.error("Error fetching products:", error)
        // Fallback to static data if database fails
        setFeaturedProducts([
          {
            id: "1",
            name: "Airdopes 141",
            price: 1299,
            image_url: "/premium-wireless-headphones-floating-with-dynamic-.png",
            rating: 4.5,
            reviews_count: 2847,
          },
          {
            id: "2",
            name: "Rockerz 450",
            price: 1599,
            image_url: "/premium-wireless-headphones-floating-with-dynamic-.png",
            rating: 4.7,
            reviews_count: 1923,
          },
          {
            id: "3",
            name: "Stone 352",
            price: 1799,
            image_url: "/premium-wireless-headphones-floating-with-dynamic-.png",
            rating: 4.6,
            reviews_count: 1456,
          },
          {
            id: "4",
            name: "Wave Call",
            price: 2299,
            image_url: "/premium-wireless-headphones-floating-with-dynamic-.png",
            rating: 4.4,
            reviews_count: 987,
          },
        ])
      } finally {
        setIsLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [supabase])

  const handleAddToCart = async (productId: string) => {
    try {
      await addToCart(productId)
    } catch (error) {
      console.error("Error adding to cart:", error)
    }
  }

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
                <a href="/products" className="text-foreground hover:text-primary transition-colors">
                  Categories
                </a>
                <a href="/about" className="text-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="/products" className="text-foreground hover:text-primary transition-colors">
                  Products
                </a>
                <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                  Support
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:flex items-center bg-muted rounded-lg px-3 py-2 w-full max-w-xs lg:max-w-sm">
                <Search className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent border-none outline-none text-sm flex-1 min-w-0"
                />
              </div>
              <Button variant="ghost" size="icon" className="sm:hidden">
                <Search className="h-5 w-5" />
              </Button>
              <CartIcon />
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open mobile menu">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
            <div className="px-4 py-3 space-y-2">
              <a href="/products" className="block py-2 text-foreground hover:text-primary transition-colors">
                Categories
              </a>
              <a href="/about" className="block py-2 text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/products" className="block py-2 text-foreground hover:text-primary transition-colors">
                Products
              </a>
              <a href="/contact" className="block py-2 text-foreground hover:text-primary transition-colors">
                Support
              </a>
              <div className="pt-2">
                <div className="flex items-center bg-muted rounded-lg px-3 py-2">
                  <Search className="h-4 w-4 text-muted-foreground mr-2" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="bg-transparent border-none outline-none text-sm flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  New Launch
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance font-[family-name:var(--font-playfair)] leading-tight">
                  Immerse in
                  <span className="text-primary"> Premium</span> Audio
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-lg mx-auto lg:mx-0">
                  Experience the future of sound with boAt's revolutionary audio technology. Crafted for the modern
                  lifestyle, designed for pure excellence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 min-h-[44px]" asChild>
                  <Link href="/products">
                    Shop Now
                    <ShoppingCart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5 bg-transparent min-h-[44px]"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-muted-foreground">
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
            <div className="relative order-first lg:order-last">
              <div className="relative z-10">
                <img
                  src="/premium-wireless-headphones-floating-with-dynamic-.png"
                  alt="Premium boAt Headphones - Wireless Audio Technology"
                  className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
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
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Explore Our Universe
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              From wireless earbuds to premium speakers, discover the perfect audio companion for every moment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <Headphones className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
                  Headphones & Earbuds
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Premium wireless and wired audio solutions for every lifestyle
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent min-h-[44px] w-full sm:w-auto"
                  asChild
                >
                  <Link href="/products?category=earbuds">Explore Collection</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-accent/20 transition-colors">
                  <Speaker className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
                  Speakers
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Powerful portable speakers that deliver exceptional sound quality
                </p>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent min-h-[44px] w-full sm:w-auto"
                  asChild
                >
                  <Link href="/products?category=speakers">Explore Collection</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Watch className="h-7 w-7 sm:h-8 sm:w-8 text-secondary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 font-[family-name:var(--font-playfair)]">
                  Smartwatches
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Smart wearables that blend technology with style seamlessly
                </p>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent min-h-[44px] w-full sm:w-auto"
                  asChild
                >
                  <Link href="/products?category=smartwatches">Explore Collection</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 lg:mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 font-[family-name:var(--font-playfair)]">
                Trending Now
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Discover our most popular products loved by millions
              </p>
            </div>
            <Button variant="outline" className="bg-transparent w-full sm:w-auto" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {isLoading
              ? // Loading skeleton
                [...Array(4)].map((_, index) => (
                  <Card key={index} className="border-0 bg-card">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-muted/30 rounded-t-lg animate-pulse"></div>
                      <div className="p-4 sm:p-6 space-y-3">
                        <div className="h-4 bg-muted/30 rounded animate-pulse"></div>
                        <div className="h-4 bg-muted/30 rounded w-3/4 animate-pulse"></div>
                        <div className="h-8 bg-muted/30 rounded animate-pulse"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : featuredProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-muted/30 rounded-t-lg overflow-hidden">
                        <img
                          src={product.image_url || "/premium-wireless-headphones-floating-with-dynamic-.png"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 sm:p-6">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                          <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
                        </div>
                        <h3 className="font-semibold mb-2 text-sm sm:text-base">{product.name}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-transparent min-h-[36px] w-full sm:w-auto sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
                            onClick={() => handleAddToCart(product.id)}
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-[family-name:var(--font-playfair)]">
            Join the boAt Lifestyle
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-primary-foreground/90 text-pretty">
            Be the first to know about new launches, exclusive offers, and the latest in audio innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/70 focus:outline-none focus:ring-2 focus:ring-white/30 min-h-[44px]"
            />
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 min-h-[44px] w-full sm:w-auto"
            >
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
