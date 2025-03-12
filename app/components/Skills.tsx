"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "🔼" },
  { name: "Flutter", icon: "📱" },
  { name: "Java", icon: "☕" },
  { name: "SpringBoot", icon: "🍃" },
  { name: "MongoDB", icon: "🍀" },
  { name: "Microservices", icon: "🔌" },
  { name: "Git", icon: "🔀" },
  { name: "Responsive Design", icon: "📐" },
  { name: "UI/UX Design", icon: "🎭" },
  { name: "Problem Solving", icon: "🧩" },
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

