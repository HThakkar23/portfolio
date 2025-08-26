"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const galleryItems = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=400",
    description: "A modern dashboard for e-commerce analytics",
  },
  {
    id: 2,
    title: "Mobile App Design",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=400",
    description: "Clean and intuitive mobile application design",
  },
  {
    id: 3,
    title: "Data Visualization",
    category: "Data Science",
    image: "/placeholder.svg?height=300&width=400",
    description: "Interactive charts and data visualization",
  },
  {
    id: 4,
    title: "Landing Page",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=400",
    description: "Responsive landing page with modern design",
  },
  {
    id: 5,
    title: "API Documentation",
    category: "Documentation",
    image: "/placeholder.svg?height=300&width=400",
    description: "Comprehensive API documentation portal",
  },
  {
    id: 6,
    title: "Code Editor Theme",
    category: "Tools",
    image: "/placeholder.svg?height=300&width=400",
    description: "Custom dark theme for code editors",
  },
  {
    id: 7,
    title: "Portfolio Website",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=400",
    description: "Personal portfolio with interactive elements",
  },
  {
    id: 8,
    title: "Conference Talk",
    category: "Speaking",
    image: "/placeholder.svg?height=300&width=400",
    description: "Speaking at tech conference about React",
  },
]

const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-muted-foreground text-lg">A visual showcase of my projects, designs, and experiences</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer px-4 py-2"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="text-white font-semibold">{item.title}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                      <Badge className="mt-2">{item.category}</Badge>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
