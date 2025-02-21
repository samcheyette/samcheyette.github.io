import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Analytics from '@/components/analytics'

export const metadata: Metadata = {
  title: "Samuel Cheyette - Academic Portfolio",
  description: "Academic portfolio of Samuel Cheyette, Postdoctoral Researcher at MIT"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'