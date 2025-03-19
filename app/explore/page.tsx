import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeaturedNFTs } from "@/components/featured-nfts"
import { Search } from "@/components/search"
import { Filter, Grid3X3, GridIcon, SlidersHorizontal } from "lucide-react"

export default function ExplorePage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Explore NFTs</h1>
          <p className="text-muted-foreground">Browse and discover NFTs from creators around the world</p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Search />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Sort
            </Button>
            <div className="flex items-center rounded-md border bg-background">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <GridIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Grid3X3 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start overflow-auto py-1">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="art">Art</TabsTrigger>
            <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="photography">Photography</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
            <TabsTrigger value="utility">Utility</TabsTrigger>
            <TabsTrigger value="virtual-worlds">Virtual Worlds</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-8">
              <FeaturedNFTs />
            </div>
          </TabsContent>
          <TabsContent value="art" className="mt-6">
            <div className="grid gap-8">
              <FeaturedNFTs category="art" />
            </div>
          </TabsContent>
          <TabsContent value="collectibles" className="mt-6">
            <div className="grid gap-8">
              <FeaturedNFTs category="collectibles" />
            </div>
          </TabsContent>
          <TabsContent value="music" className="mt-6">
            <div className="grid gap-8">
              <FeaturedNFTs category="music" />
            </div>
          </TabsContent>
          <TabsContent value="photography" className="mt-6">
            <div className="grid gap-8">
              <FeaturedNFTs category="photography" />
            </div>
          </TabsContent>
          <TabsContent value="sports" className="mt-6">
            <div className="grid gap-8">
              <Card className="p-12 text-center">
                <CardContent>
                  <p className="text-muted-foreground">No sports NFTs available at the moment</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="utility" className="mt-6">
            <div className="grid gap-8">
              <Card className="p-12 text-center">
                <CardContent>
                  <p className="text-muted-foreground">No utility NFTs available at the moment</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="virtual-worlds" className="mt-6">
            <div className="grid gap-8">
              <Card className="p-12 text-center">
                <CardContent>
                  <p className="text-muted-foreground">No virtual world NFTs available at the moment</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-8">
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </div>
  )
}

