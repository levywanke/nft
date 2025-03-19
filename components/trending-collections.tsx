"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface Collection {
  id: string
  name: string
  creator: string
  floorPrice: number
  currency: string
  volume: number
  change: number
  images: string[]
  blockchain: "ethereum" | "polygon" | "solana"
}

const mockCollections: Collection[] = [
  {
    id: "1",
    name: "Bored Ape Yacht Club",
    creator: "YugaLabs",
    floorPrice: 68.5,
    currency: "ETH",
    volume: 1245.8,
    change: 12.4,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    blockchain: "ethereum",
  },
  {
    id: "2",
    name: "Azuki",
    creator: "Azuki",
    floorPrice: 12.2,
    currency: "ETH",
    volume: 876.3,
    change: -5.2,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    blockchain: "ethereum",
  },
  {
    id: "3",
    name: "Doodles",
    creator: "Doodles",
    floorPrice: 5.8,
    currency: "ETH",
    volume: 432.1,
    change: 8.7,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    blockchain: "ethereum",
  },
  {
    id: "4",
    name: "DeGods",
    creator: "DeGods",
    floorPrice: 35.2,
    currency: "SOL",
    volume: 12543.8,
    change: 24.6,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    blockchain: "solana",
  },
]

export function TrendingCollections() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {mockCollections.map((collection) => (
        <Card
          key={collection.id}
          className="overflow-hidden bg-background/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <CardContent className="p-0">
            <div className="grid grid-cols-2 gap-1 p-1">
              {collection.images.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-md">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${collection.name} #${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <Link href={`/collection/${collection.id}`} className="font-medium hover:underline">
                  {collection.name}
                </Link>
                <div className="flex items-center">
                  {collection.blockchain === "ethereum" && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">ETH</span>
                  )}
                  {collection.blockchain === "polygon" && (
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">MATIC</span>
                  )}
                  {collection.blockchain === "solana" && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">SOL</span>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <Link
                  href={`/creator/${collection.creator}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  @{collection.creator}
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div>
                  <p className="text-xs text-muted-foreground">Floor Price</p>
                  <p className="font-medium">
                    {collection.floorPrice} {collection.currency}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">24h Volume</p>
                  <div className="flex items-center">
                    <p className="font-medium mr-1">
                      {collection.volume} {collection.currency}
                    </p>
                    <span className={`text-xs ${collection.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {collection.change >= 0 ? "+" : ""}
                      {collection.change}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center mt-6">
        <Button variant="outline" className="gap-2">
          View all collections
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

