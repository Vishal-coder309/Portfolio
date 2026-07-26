import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Vishal Yadav — Product Lead · Full Stack & GenAI Engineer",
  description:
    "Product Lead and Full Stack & GenAI Engineer building agentic voice AI, CPaaS platforms, and on-device LLM products. Java, Spring Boot, React, Next.js, Kotlin, Ollama.",
  keywords: [
    "Vishal Yadav",
    "Product Lead",
    "GenAI Engineer",
    "Full Stack Engineer",
    "Agentic AI",
    "LLM",
    "Spring Boot",
    "Java",
    "CPaaS",
    "VoIP",
    "Next.js",
    "React",
    "Gurugram",
  ],
  openGraph: {
    title: "Vishal Yadav — Product Lead · Full Stack & GenAI Engineer",
    description:
      "Building agentic voice AI, CPaaS platforms, and on-device LLM products.",
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
