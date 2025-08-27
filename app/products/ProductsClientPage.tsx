"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Footer from "@/components/footer"
import { CartIcon } from "@/components/cart-icon"
import { useCart } from "@/lib/cart-context"
import { createClient } from "@/lib/supabase/client"
import { useSearchParams } from "next/navigation"
import {
  ShoppingCart,
  Search,
  Menu,
  Star,
  Filter,
  Headphones,
  Speaker,
  Watch,
  Heart,
  Eye,
  SlidersHorizontal,
} from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  price: number
  image_url: string
  rating: number
  reviews_count: number
  features: string[]
}

const categories = [
  { id: "all", name: "All Products", icon: SlidersHorizontal },
  { id: "earbuds", name: "Earbuds", icon: Headphones },
  { id: "headphones", name: "Headphones", icon: Headphones },
  { id: "speakers", name: "Speakers", icon: Speaker },
  { id: "smartwatches", name: "Smartwatches", icon: Watch },
]

export default function ProductsClientPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [usingFallbackData, setUsingFallbackData] = useState(false)
  const { addToCart } = useCart()
  const supabase = createClient()

  const fallbackProducts: Product[] = [
    {
      id: "1",
      name: "Airdopes 141",
      category: "earbuds",
      price: 1299,
      image_url: "/premium-wireless-headphones-floating-with-dynamic-.png",
      rating: 4.5,
      reviews_count: 2847,
      features: ["28H Playback", "ENx Technology", "IWP Technology"],
    },
    {
      id: "2",
      name: "Rockerz 450",
      category: "headphones",
      price: 1599,
      image_url: "/premium-wireless-headphones-floating-with-dynamic-.png",
      rating: 4.7,
      reviews_count: 1923,
      features: ["15H Playback", "40mm Drivers", "Plush Earcups"],
    },
    {
      id: "3",
      name: "Stone 352",
      category: "speakers",
      price: 1799,
      image_url: "/premium-wireless-headphones-floating-with-dynamic-.png",
      rating: 4.6,
      reviews_count: 1456,
      features: ["12W Output", "IPX7", "12H Playback"],
    },
    {
      id: "4",
      name: "Wave Call",
      category: "smartwatches",
      price: 2299,
      image_url: "/premium-wireless-headphones-floating-with-dynamic-.png",
      rating: 4.4,
      reviews_count: 987,
      features: ["BT Calling", '1.69" Display', "7 Days Battery"],
    },
    {
      id: "5",
      name: "Airdopes 131",
      category: "earbuds",
      price: 999,
      image_url: "/premium-wireless-headphones-floating-with-dynamic-.png",
      rating: 4.3,
      reviews_count: 3421,
      features: ["20H Playback", "IPX4", "Voice Assistant"],
    },
    {
      id: "6",
      name: "Rockerz 255 Pro+",
      category: "headphones",
      price: 1299,
      image_url: "/premium-wireless-headphones-floating-with-dynamic-.png",
      rating: 4.6,
      reviews_count: 2156,
      features: ["25H Playback", "Magnetic Earbuds", "Fast Charge"],
    },
    {
      id: "7",
      name: "Stone 1000",
      category: "speakers",
      price: 2499,
      image_url: "/premium-wireless-headphones-floating-with-dynamic-.png",
      rating: 4.8,
      reviews_count: 1789,
      features: ["14W Output", "TWS Feature", "IPX5"],
    },
    {
      id: "8",
      name: "Wave Sigma",
      category: "smartwatches",
      price: 3299,
      image_url: "/premium-wireless-headphones-floating-with-dynamic-.png",
      rating: 4.5,
      reviews_count: 1234,
      features: ["BT Calling", '1.96" Display', "Health Tracking"],
    },
  ]

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("id, name, category, price, image_url, rating, reviews_count, features")

        if (error) {
          console.log("[v0] Database not ready, using fallback data:", error.message)
          setUsingFallbackData(true)
          setProducts(fallbackProducts)
        } else {
          console.log("[v0] Successfully loaded products from database")
          setProducts(data || fallbackProducts)
          setUsingFallbackData(false)
        }
      } catch (error) {
        console.log("[v0] Database connection failed, using fallback data")
        setUsingFallbackData(true)
        setProducts(fallbackProducts)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [supabase])

  const handleAddToCart = async (productId: string) => {
    try {
      await addToCart(productId)
    } catch (error) {
      console.error("Error adding to cart:", error)
    }
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id.localeCompare(a.id)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "boAt Premium Audio Products",
            description:
              "Complete collection of premium wireless headphones, earbuds, Bluetooth speakers, and smartwatches from boAt.",
            url: "https://boat-lifestyle.com/products",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: products.length,
              itemListElement: products.map((product, index) => ({
                "@type": "Product",
                position: index + 1,
                name: product.name,
                description: `${product.name} - ${product.features.join(", ")}`,
                image: `https://boat-lifestyle.com/products/${product.image_url}`,
                offers: {
                  "@type": "Offer",
                  price: product.price,
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: product.rating,
                  reviewCount: product.reviews_count,
                },
              })),
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
                <a href="/products" className="text-primary font-medium">
                  Products
                </a>
                <a href="/about" className="text-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                  Support
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CartIcon />
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Discover Premium Audio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore our complete collection of headphones, earbuds, speakers, and smartwatches designed for the modern
              lifestyle
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/80 backdrop-blur"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            <div>
              <h3 className="font-semibold mb-4 font-[family-name:var(--font-playfair)]">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        selectedCategory === category.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {category.name}
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 font-[family-name:var(--font-playfair)]">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <p className="text-muted-foreground">Showing {sortedProducts.length} products</p>
                {usingFallbackData && (
                  <Badge variant="outline" className="text-xs">
                    Demo Mode
                  </Badge>
                )}
              </div>
              <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading
                ? // Loading skeleton
                  [...Array(6)].map((_, index) => (
                    <Card key={index} className="border-0 bg-card">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-muted/30 rounded-t-lg animate-pulse"></div>
                        <div className="p-6 space-y-3">
                          <div className="h-4 bg-muted/30 rounded animate-pulse"></div>
                          <div className="h-4 bg-muted/30 rounded w-3/4 animate-pulse"></div>
                          <div className="h-8 bg-muted/30 rounded animate-pulse"></div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                : sortedProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="group hover:shadow-lg transition-all duration-300 border-0 bg-card"
                    >
                      <CardContent className="p-0">
                        <div className="relative aspect-square bg-muted/30 rounded-t-lg overflow-hidden">
                          <img
                            src={product.image_url || "/premium-wireless-headphones-floating-with-dynamic-.png"}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button size="icon" variant="secondary" className="h-8 w-8">
                              <Heart className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="secondary" className="h-8 w-8">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="text-xs text-muted-foreground ml-1">({product.reviews_count})</span>
                          </div>
                          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {product.features?.slice(0, 2).map((feature, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <span className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</span>
                            </div>
                            <Button
                              size="sm"
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => handleAddToCart(product.id)}
                            >
                              <ShoppingCart className="h-4 w-4 mr-1" />
                              Add
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
