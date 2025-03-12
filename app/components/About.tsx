"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-center">
           I'm a passionate Full Stack Developer with experience in HTML, CSS, JavaScript, ReactJS, Java, Spring Boot, Flutter, and MongoDB. I specialize in building responsive, user-friendly web applications and optimizing backend performance. With a strong foundation in problem-solving and a keen eye for design, I strive to deliver high-quality, efficient, and visually appealing solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

