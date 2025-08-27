import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Headphones,
  Speaker,
  Watch,
  ShoppingBag,
} from "lucide-react"

const footerLinks = {
  products: [
    { name: "Headphones", href: "/products?category=headphones" },
    { name: "Earbuds", href: "/products?category=earbuds" },
    { name: "Speakers", href: "/products?category=speakers" },
    { name: "Smartwatches", href: "/products?category=smartwatches" },
    { name: "Accessories", href: "/products?category=accessories" },
  ],
  support: [
    { name: "Customer Support", href: "/contact" },
    { name: "Warranty", href: "/warranty" },
    { name: "Returns & Exchange", href: "/returns" },
    { name: "Track Order", href: "/track-order" },
    { name: "FAQ", href: "/faq" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Investor Relations", href: "/investors" },
    { name: "Corporate Info", href: "/corporate" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Shipping Policy", href: "/shipping" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/boat" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/boat" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/boat" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/boat" },
]

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Stay in the Loop</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Get the latest updates on new launches, exclusive offers, and audio innovations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70 focus:ring-white/30"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-4 font-[family-name:var(--font-playfair)]">boAt</div>
              <p className="text-muted-foreground text-pretty max-w-sm">
                India's #1 audio lifestyle brand, creating premium audio experiences for the modern generation.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@boat-lifestyle.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>1800-123-BOAT (2628)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 font-[family-name:var(--font-playfair)]">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 font-[family-name:var(--font-playfair)]">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 font-[family-name:var(--font-playfair)]">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 font-[family-name:var(--font-playfair)]">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">© 2024 boAt Lifestyle. All rights reserved.</div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Made with ❤️ in India</span>
              <div className="flex items-center gap-4">
                <Headphones className="h-4 w-4" />
                <Speaker className="h-4 w-4" />
                <Watch className="h-4 w-4" />
                <ShoppingBag className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
