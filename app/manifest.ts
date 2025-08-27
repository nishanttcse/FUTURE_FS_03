import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "boAt - Premium Audio Lifestyle",
    short_name: "boAt",
    description:
      "India's #1 audio lifestyle brand offering premium headphones, wireless earbuds, Bluetooth speakers, and smartwatches.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#be123c",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
