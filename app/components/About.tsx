"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-center">
           Engineer turned Product Lead with 1.5+ years building and shipping production communication systems on Spring Boot and microservices. I currently lead the voice marketing product at Biocipher Technology, owning roadmap and delivery for a team of 5 engineers while building AI-powered agentic voice calling, IVR, and campaign systems. I blend hands-on backend depth — REST APIs, Redis, big-data query optimization on 1.7 billion+ records, CI/CD — with product ownership across roadmap, delivery, and customer success. On the side, I build privacy-first AI tools that run entirely on-device.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

