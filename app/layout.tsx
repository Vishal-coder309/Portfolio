import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Vishal Yadav — Product Lead & Full Stack Engineer",
  description:
    "Product Lead & Full Stack Engineer building CPaaS voice platforms, Spring Boot microservices, and on-device AI products. Java, Spring Boot, React, Next.js, Kotlin.",
  keywords: [
    "Vishal Yadav",
    "Product Lead",
    "Full Stack Engineer",
    "Spring Boot",
    "Java",
    "CPaaS",
    "VoIP",
    "Next.js",
    "React",
    "Gurugram",
  ],
  openGraph: {
    title: "Vishal Yadav — Product Lead & Full Stack Engineer",
    description:
      "Building CPaaS voice platforms, Spring Boot microservices, and on-device AI products.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
