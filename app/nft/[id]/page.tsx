"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, MoreHorizontal, Eye, Clock, Tag, ExternalLink } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function NFTPage({ params }: { params: { id: string } }) {
  const [liked, setLiked] = useState(false)

  // Mock NFT data - in a real app, this would be fetched from an API
  const nft = {
    id: params.id,
    name: "Cosmic Perspective #42",
    description:
      "A mesmerizing digital artwork that explores the vastness of the cosmos through a unique perspective. This piece represents the artist's interpretation of our place in the universe.",
    image: "/placeholder.svg?height=600&width=600",
    creator: {
      name: "0xArtist",
      address: "0x1234...5678",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    owner: {
      name: "CryptoCollector",
      address: "0x8765...4321",
      avatar: "/placeholder.svg?height=40&width=40",
      verified: false,
    },
    price: 1.5,
    currency: "ETH",
    likes: 128,
    views: 1024,
    created: "2023-06-15T14:30:00Z",
    blockchain: "ethereum",
    collection: {
      name: "Cosmic Series",
      verified: true,
    },
    history: [
      { event: "Minted", from: "0xArtist", to: "0xArtist", price: 0, date: "2023-06-15T14:30:00Z" },
      { event: "Listed", from: "0xArtist", to: null, price: 1.5, date: "2023-06-15T15:00:00Z" },
      { event: "Offer", from: "Collector1", to: null, price: 1.2, date: "2023-06-16T10:00:00Z" },
      { event: "Offer", from: "Collector2", to: null, price: 1.3, date: "2023-06-17T11:30:00Z" },
    ],
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <Card className="overflow-hidden border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="object-cover w-full h-full" />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setLiked(!liked)}
                className={liked ? "text-red-500" : ""}
              >
                <Heart className={`h-5 w-5 ${liked ? "fill-red-500" : ""}`} />
              </Button>
              <span className="text-sm text-muted-foreground">{liked ? nft.likes + 1 : nft.likes} favorites</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <ExternalLink className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Report</DropdownMenuItem>
                  <DropdownMenuItem>Add to watchlist</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link
                href={`/collection/${nft.collection.name}`}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {nft.collection.name}
              </Link>
              {nft.collection.verified && (
                <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                  Verified
                </Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold">{nft.name}</h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{nft.views} views</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Created {new Date(nft.created).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Creator</p>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={nft.creator.avatar} alt={nft.creator.name} />
                  <AvatarFallback>{nft.creator.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <Link href={`/creator/${nft.creator.address}`} className="text-sm font-medium hover:underline">
                    {nft.creator.name}
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Current Owner</p>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={nft.owner.avatar} alt={nft.owner.name} />
                  <AvatarFallback>{nft.owner.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <Link href={`/user/${nft.owner.address}`} className="text-sm font-medium hover:underline">
                    {nft.owner.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Current price</p>
                  <p className="text-3xl font-bold">
                    {nft.price} {nft.currency}
                  </p>
                  <p className="text-sm text-muted-foreground">≈ $2,658.73</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <Tag className="h-3 w-3 mr-1" /> For Sale
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">Buy Now</Button>
                <Button variant="outline">Make Offer</Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="details">
            <TabsList className="w-full">
              <TabsTrigger value="details" className="flex-1">
                Details
              </TabsTrigger>
              <TabsTrigger value="properties" className="flex-1">
                Properties
              </TabsTrigger>
              <TabsTrigger value="history" className="flex-1">
                History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4 mt-4">
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-muted-foreground">{nft.description}</p>
              </div>

              <Separator />

              <div className="space-y-2">
                <h3 className="font-medium mb-2">Blockchain Info</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Contract Address</p>
                    <p className="text-sm font-mono break-all">0x1234567890abcdef1234567890abcdef12345678</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Token ID</p>
                    <p className="text-sm font-mono">{nft.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Blockchain</p>
                    <p className="text-sm">Ethereum</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Token Standard</p>
                    <p className="text-sm">ERC-721</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="properties" className="mt-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="border rounded-lg p-3 text-center bg-muted/20">
                  <p className="text-xs text-muted-foreground uppercase">Background</p>
                  <p className="font-medium">Deep Space</p>
                  <p className="text-xs text-muted-foreground">12% have this trait</p>
                </div>
                <div className="border rounded-lg p-3 text-center bg-muted/20">
                  <p className="text-xs text-muted-foreground uppercase">Style</p>
                  <p className="font-medium">Abstract</p>
                  <p className="text-xs text-muted-foreground">8% have this trait</p>
                </div>
                <div className="border rounded-lg p-3 text-center bg-muted/20">
                  <p className="text-xs text-muted-foreground uppercase">Color Palette</p>
                  <p className="font-medium">Nebula</p>
                  <p className="text-xs text-muted-foreground">5% have this trait</p>
                </div>
                <div className="border rounded-lg p-3 text-center bg-muted/20">
                  <p className="text-xs text-muted-foreground uppercase">Dimension</p>
                  <p className="font-medium">4D</p>
                  <p className="text-xs text-muted-foreground">3% have this trait</p>
                </div>
                <div className="border rounded-lg p-3 text-center bg-muted/20">
                  <p className="text-xs text-muted-foreground uppercase">Rarity</p>
                  <p className="font-medium">Legendary</p>
                  <p className="text-xs text-muted-foreground">2% have this trait</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>From</TableHead>
                    <TableHead>To</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {nft.history.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.event}</TableCell>
                      <TableCell>{item.price > 0 ? `${item.price} ${nft.currency}` : "-"}</TableCell>
                      <TableCell>
                        <Link href="#" className="hover:underline">
                          {item.from}
                        </Link>
                      </TableCell>
                      <TableCell>
                        {item.to ? (
                          <Link href="#" className="hover:underline">
                            {item.to}
                          </Link>
                        ) : (
                          "-"
                        )}
                      </TableCell>
                      <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

