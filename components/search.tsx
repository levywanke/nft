"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export function Search() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would navigate to search results
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search items, collections, and accounts"
        className="w-full bg-background pl-8"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}

