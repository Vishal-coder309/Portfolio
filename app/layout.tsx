import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'