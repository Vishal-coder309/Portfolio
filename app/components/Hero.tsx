"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"

export default function Hero() {
  return (
    <section id="hero" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Vishal Yadav</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-4">Full Stack Developer</h2>
            <div className="text-xl text-foreground/80 mb-8 h-20">
              <TypeAnimation
                sequence={[
                  "Experienced in HTML, CSS, JavaScript",
                  1000,
                  "Skilled in React, Next.js & Flutter",
                  1000,
                  "Backend with Java & SpringBoot",
                  1000,
                  "Creating responsive web applications",
                  1000,
                  "Strong problem-solving skills",
                  1000,
                ]}
                wrapper="p"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button size="lg" className="mr-4">
                  Get in Touch
                </Button>
              </ScrollLink>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profeesional%20photo.jpg-mXwAXFryBtVjJeVINB4ytcmGPKhU2m.jpeg"
                alt="Vishal Yadav"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <motion.div
              className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground rounded-full p-4 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                <path d="M19 3v4"></path>
                <path d="M21 5h-4"></path>
              </svg>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground rounded-full p-4 shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                <path d="M5 3v4"></path>
                <path d="M19 17v4"></path>
                <path d="M3 5h4"></path>
                <path d="M17 19h4"></path>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

