import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FeaturedNFTs } from "@/components/featured-nfts"
import { TrendingCollections } from "@/components/trending-collections"
import { WalletConnect } from "@/components/wallet-connect"
import { Search } from "@/components/search"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background to-background/80">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative size-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-blue-500">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">N</div>
              </div>
              <span className="hidden font-bold sm:inline-block">NFTverse</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/explore"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Explore
              </Link>
              <Link
                href="/stats"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Stats
              </Link>
              <Link
                href="/create"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Create
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block w-72">
              <Search />
            </div>
            <WalletConnect />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                    Discover, Collect, and Sell Extraordinary NFTs
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    NFTverse is the world's first and largest NFT marketplace with everything for everyone
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/explore">
                    <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">Explore</Button>
                  </Link>
                  <Link href="/create">
                    <Button variant="outline">Create</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md overflow-hidden rounded-xl border-0 bg-background/50 backdrop-blur-sm shadow-xl">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-xl">
                      <img
                        src="/placeholder.svg?height=500&width=500"
                        alt="Featured NFT"
                        className="object-cover"
                        width={500}
                        height={500}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <div className="space-y-1 text-white">
                          <h3 className="font-semibold">Neon Dreams #4269</h3>
                          <p className="text-sm opacity-90">by @cryptoartist</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Current bid</p>
                          <p className="text-xl font-bold">2.5 ETH</p>
                        </div>
                        <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">Place bid</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured NFTs</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the most sought-after digital collectibles in the NFT space
                </p>
              </div>
            </div>
            <Tabs defaultValue="all" className="mt-8">
              <div className="flex justify-center">
                <TabsList className="bg-background/50 backdrop-blur-sm">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="art">Art</TabsTrigger>
                  <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
                  <TabsTrigger value="music">Music</TabsTrigger>
                  <TabsTrigger value="photography">Photography</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-6">
                <FeaturedNFTs />
              </TabsContent>
              <TabsContent value="art" className="mt-6">
                <FeaturedNFTs category="art" />
              </TabsContent>
              <TabsContent value="collectibles" className="mt-6">
                <FeaturedNFTs category="collectibles" />
              </TabsContent>
              <TabsContent value="music" className="mt-6">
                <FeaturedNFTs category="music" />
              </TabsContent>
              <TabsContent value="photography" className="mt-6">
                <FeaturedNFTs category="photography" />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trending Collections</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The hottest collections across multiple blockchains
                </p>
              </div>
            </div>
            <div className="mt-8">
              <TrendingCollections />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Create and sell your NFTs</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join thousands of artists and collectors in the world's largest NFT marketplace
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      1
                    </div>
                    <span>Set up your wallet and connect it to NFTverse</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      2
                    </div>
                    <span>Create your collection and mint your NFTs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      3
                    </div>
                    <span>List your NFTs for sale and earn royalties</span>
                  </li>
                </ul>
                <div>
                  <Link href="/create">
                    <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">Start Creating</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -left-4 -top-4 h-72 w-72 rounded-lg bg-purple-500/20 blur-3xl"></div>
                  <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-lg bg-blue-500/20 blur-3xl"></div>
                  <Card className="relative overflow-hidden rounded-xl border-0 bg-background/50 backdrop-blur-sm shadow-xl">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold">Supported Blockchains</h3>
                          <p className="text-sm text-muted-foreground">
                            NFTverse supports multiple blockchains for minting and trading NFTs
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="flex flex-col items-center justify-center rounded-lg bg-background p-4">
                            <div className="size-12 rounded-full bg-muted flex items-center justify-center mb-2">
                              <span className="font-bold">ETH</span>
                            </div>
                            <span className="text-xs">Ethereum</span>
                          </div>
                          <div className="flex flex-col items-center justify-center rounded-lg bg-background p-4">
                            <div className="size-12 rounded-full bg-muted flex items-center justify-center mb-2">
                              <span className="font-bold">MATIC</span>
                            </div>
                            <span className="text-xs">Polygon</span>
                          </div>
                          <div className="flex flex-col items-center justify-center rounded-lg bg-background p-4">
                            <div className="size-12 rounded-full bg-muted flex items-center justify-center mb-2">
                              <span className="font-bold">SOL</span>
                            </div>
                            <span className="text-xs">Solana</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/80 backdrop-blur-sm">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:py-12">
          <div className="flex-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative size-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-blue-500">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">N</div>
              </div>
              <span className="font-bold">NFTverse</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The world's first and largest NFT marketplace with everything for everyone
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Marketplace</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    All NFTs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Art
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Collectibles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Music
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">My Account</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Favorites
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Watchlist
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    My Collections
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Platform Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Ventures
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="container flex flex-col gap-4 py-6 md:flex-row md:items-center">
            <p className="text-xs text-muted-foreground md:order-2 md:ml-auto">
              &copy; {new Date().getFullYear()} NFTverse. All rights reserved.
            </p>
            <div className="flex gap-4 md:order-1">
              <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

