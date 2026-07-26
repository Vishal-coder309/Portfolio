import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Vishal Yadav — GenAI & Backend Systems Engineer",
  description:
    "GenAI & Backend Systems Engineer building production-grade AI systems — LLM orchestration, RAG optimization, agentic voice AI, and AI-driven dev tooling on carrier-scale backend infrastructure.",
  keywords: [
    "Vishal Yadav",
    "GenAI Engineer",
    "Systems Architect",
    "RAG",
    "LLM Orchestration",
    "Vector Databases",
    "Agentic AI",
    "Product Lead",
    "Spring Boot",
    "Java",
    "Kubernetes",
    "CPaaS",
    "Next.js",
    "Gurugram",
  ],
  openGraph: {
    title: "Vishal Yadav — GenAI & Backend Systems Engineer",
    description:
      "Building production-grade AI systems: LLM orchestration, RAG optimization, and AI-driven dev tooling on carrier-scale infrastructure.",
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
