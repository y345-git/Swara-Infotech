import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Swara Software Solutions - Internship Solutions for Computer Engineering Students",
  description:
    "Professional internship programs for Diploma in Computer Engineering students. Bridge the gap between academic learning and industry requirements with Swara Software Solutions.",
  keywords: "internship, computer engineering, diploma, training, placement, career, software solutions",
  generator: 'Yash Ajitkumar Patil',
  icons: {
    icon: "/favicon.ico"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">  
      <body className={`${inter.className} antialiased`}>
        <ParticleBackground />
        <div className="relative z-10">
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
