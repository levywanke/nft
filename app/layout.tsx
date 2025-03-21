import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NFT',
  description: 'non fungible tokens',
  creator: 'levy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
