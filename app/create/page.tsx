"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Upload, Image, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function CreatePage() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)

      // Create preview URL
      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target?.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Create New Item</h1>
          <p className="text-muted-foreground">Create and mint your NFT to the blockchain</p>
        </div>

        {!isConnected && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Wallet not connected</AlertTitle>
            <AlertDescription>
              Please connect your wallet to create an NFT.
              <Button variant="outline" className="ml-2" onClick={() => setIsConnected(true)}>
                Connect Wallet
              </Button>
            </AlertDescription>
          </Alert>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="md:order-2">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>This is how your NFT will look like</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center border rounded-lg aspect-square bg-muted/40">
                {preview ? (
                  <img
                    src={preview || "/placeholder.svg"}
                    alt="Preview"
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-muted-foreground p-8 text-center">
                    <Image className="h-12 w-12 mb-2" />
                    <p>Upload a file to preview your NFT</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 md:order-1">
            <Card>
              <CardHeader>
                <CardTitle>Upload File</CardTitle>
                <CardDescription>
                  Supported file types: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="nft-file">File</Label>
                    <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12 cursor-pointer hover:bg-muted/50 transition-colors">
                      <input
                        id="nft-file"
                        type="file"
                        className="hidden"
                        accept="image/*,video/*,audio/*,.glb,.gltf"
                        onChange={handleFileChange}
                        disabled={!isConnected}
                      />
                      <label htmlFor="nft-file" className="cursor-pointer text-center">
                        <Upload className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-1">Drag and drop or click to upload</p>
                        <p className="text-xs text-muted-foreground">Max size: 100 MB</p>
                      </label>
                    </div>
                  </div>

                  <Tabs defaultValue="single">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="single">Single Item</TabsTrigger>
                      <TabsTrigger value="collection" disabled={!isConnected}>
                        Collection
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="single" className="space-y-4 mt-4">
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Item name" disabled={!isConnected} />
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Provide a detailed description of your item"
                          className="resize-none"
                          rows={4}
                          disabled={!isConnected}
                        />
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="category">Category</Label>
                        <Select disabled={!isConnected}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="art">Art</SelectItem>
                            <SelectItem value="collectibles">Collectibles</SelectItem>
                            <SelectItem value="music">Music</SelectItem>
                            <SelectItem value="photography">Photography</SelectItem>
                            <SelectItem value="sports">Sports</SelectItem>
                            <SelectItem value="utility">Utility</SelectItem>
                            <SelectItem value="virtual-worlds">Virtual Worlds</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="blockchain">Blockchain</Label>
                        <Select disabled={!isConnected}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select blockchain" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ethereum">Ethereum</SelectItem>
                            <SelectItem value="polygon">Polygon</SelectItem>
                            <SelectItem value="solana">Solana</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
                <CardDescription>Set the price and royalties for your NFT</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="price">Price</Label>
                    <div className="flex gap-2">
                      <Input id="price" type="number" placeholder="0.00" min="0" step="0.01" disabled={!isConnected} />
                      <Select disabled={!isConnected}>
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="ETH" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eth">ETH</SelectItem>
                          <SelectItem value="matic">MATIC</SelectItem>
                          <SelectItem value="sol">SOL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="royalties">Royalties (%)</Label>
                    <Input
                      id="royalties"
                      type="number"
                      placeholder="10"
                      min="0"
                      max="50"
                      step="1"
                      disabled={!isConnected}
                    />
                    <p className="text-xs text-muted-foreground">
                      Royalties allow you to earn a percentage of the sale price each time your NFT is sold
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="unlockable-content" disabled={!isConnected} />
                    <Label htmlFor="unlockable-content">Include unlockable content</Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  disabled={!isConnected}
                >
                  Create NFT
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

