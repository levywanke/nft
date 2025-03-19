"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface NFT {
  id: string
  name: string
  creator: string
  price: number
  currency: string
  image: string
  likes: number
  category: string
}

const mockNFTs: NFT[] = [
  {
    id: "1",
    name: "Cosmic Perspective #42",
    creator: "0xArtist",
    price: 1.5,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
    likes: 128,
    category: "art",
  },
  {
    id: "2",
    name: "Digital Dreamscape #17",
    creator: "CryptoCreator",
    price: 0.8,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
    likes: 95,
    category: "art",
  },
  {
    id: "3",
    name: "Neon Nights #23",
    creator: "DigitalArtLabs",
    price: 2.2,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
    likes: 210,
    category: "art",
  },
  {
    id: "4",
    name: "CryptoPunk #9999",
    creator: "PunkCreator",
    price: 12.5,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
    likes: 543,
    category: "collectibles",
  },
  {
    id: "5",
    name: "Bored Ape #8888",
    creator: "ApeCreator",
    price: 85.0,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
    likes: 1024,
    category: "collectibles",
  },
  {
    id: "6",
    name: "Synthwave Beats #3",
    creator: "AudioArtist",
    price: 0.5,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
    likes: 76,
    category: "music",
  },
  {
    id: "7",
    name: "Urban Landscapes #12",
    creator: "StreetPhotographer",
    price: 0.35,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
    likes: 42,
    category: "photography",
  },
  {
    id: "8",
    name: "Nature's Beauty #7",
    creator: "NatureCapture",
    price: 0.28,
    currency: "ETH",
    image: "/placeholder.svg?height=400&width=400",
    likes: 38,
    category: "photography",
  },
]

interface FeaturedNFTsProps {
  category?: string
}

export function FeaturedNFTs({ category }: FeaturedNFTsProps) {
  const [likedNFTs, setLikedNFTs] = useState<string[]>([])

  const toggleLike = (id: string) => {
    if (likedNFTs.includes(id)) {
      setLikedNFTs(likedNFTs.filter((nftId) => nftId !== id))
    } else {
      setLikedNFTs([...likedNFTs, id])
    }
  }

  const filteredNFTs = category ? mockNFTs.filter((nft) => nft.category === category) : mockNFTs

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredNFTs.map((nft) => (
        <Card
          key={nft.id}
          className="overflow-hidden bg-background/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <CardContent className="p-0">
            <div className="relative">
              <Link href={`/nft/${nft.id}`}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={nft.image || "/placeholder.svg"}
                    alt={nft.name}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
                onClick={() => toggleLike(nft.id)}
              >
                <Heart
                  className={`h-5 w-5 ${likedNFTs.includes(nft.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
                />
              </Button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <Link href={`/nft/${nft.id}`} className="font-medium hover:underline">
                  {nft.name}
                </Link>
                <span className="text-xs text-muted-foreground">
                  {nft.likes + (likedNFTs.includes(nft.id) ? 1 : 0)} likes
                </span>
              </div>
              <div className="flex justify-between items-center">
                <Link href={`/creator/${nft.creator}`} className="text-sm text-muted-foreground hover:text-primary">
                  @{nft.creator}
                </Link>
                <div className="text-sm font-semibold">
                  {nft.price} {nft.currency}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

