"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "Java 17", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "Spring Security", icon: "🔐" },
  { name: "Microservices", icon: "🔌" },
  { name: "REST APIs", icon: "🔗" },
  { name: "JavaScript", icon: "📜" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "🔼" },
  { name: "Kotlin / Android", icon: "📱" },
  { name: "MySQL", icon: "🐬" },
  { name: "MongoDB", icon: "🍀" },
  { name: "Redis", icon: "⚡" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Jenkins CI/CD", icon: "🔧" },
  { name: "Git", icon: "🔀" },
  { name: "VoIP / CPaaS", icon: "📞" },
  { name: "AI-Assisted Development", icon: "🤖" },
  { name: "Product Management", icon: "🧭" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <span className="mr-2">{skill.icon}</span>
                {skill.name}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

