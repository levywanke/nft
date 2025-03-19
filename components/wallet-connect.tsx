"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Wallet } from "lucide-react"

interface WalletOption {
  id: string
  name: string
  icon: string
  description: string
}

const walletOptions: WalletOption[] = [
  {
    id: "metamask",
    name: "MetaMask",
    icon: "M",
    description: "Connect to your MetaMask Wallet",
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    icon: "W",
    description: "Scan with WalletConnect to connect",
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    icon: "C",
    description: "Connect to your Coinbase Wallet",
  },
]

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [open, setOpen] = useState(false)

  const connectWallet = (walletId: string) => {
    // In a real implementation, this would connect to the actual wallet
    // For demo purposes, we're just simulating a connection
    const mockAddress = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
    setWalletAddress(mockAddress)
    setIsConnected(true)
    setOpen(false)
  }

  const disconnectWallet = () => {
    setWalletAddress("")
    setIsConnected(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={isConnected ? "outline" : "default"} className={isConnected ? "gap-2" : ""}>
          {isConnected ? (
            <>
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              {`${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`}
            </>
          ) : (
            <>
              <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isConnected ? "Wallet Connected" : "Connect Your Wallet"}</DialogTitle>
          <DialogDescription>
            {isConnected
              ? "Your wallet is connected to NFTverse"
              : "Connect your wallet to start minting, buying, and selling NFTs"}
          </DialogDescription>
        </DialogHeader>
        {isConnected ? (
          <div className="space-y-4 py-4">
            <div className="flex flex-col space-y-2 border rounded-lg p-4">
              <p className="text-sm font-medium">Connected Wallet</p>
              <p className="text-xs text-muted-foreground break-all">{walletAddress}</p>
            </div>
            <Button variant="destructive" onClick={disconnectWallet} className="w-full">
              Disconnect Wallet
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 py-4">
            {walletOptions.map((wallet) => (
              <Button
                key={wallet.id}
                variant="outline"
                className="justify-start gap-3 h-16"
                onClick={() => connectWallet(wallet.id)}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  {wallet.icon}
                </div>
                <div className="flex flex-col items-start">
                  <span>{wallet.name}</span>
                  <span className="text-xs text-muted-foreground">{wallet.description}</span>
                </div>
              </Button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

