"use client"

import { motion } from "framer-motion"
import { ModeToggle } from "./ModeToggle"
import { Link as ScrollLink } from "react-scroll"

export default function Header() {
  return (
    <motion.header
      className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <ScrollLink to="hero" smooth={true} duration={500} className="text-2xl font-bold text-primary cursor-pointer">
            Vishal Yadav
          </ScrollLink>
        </motion.div>
        <ul className="flex space-x-4 items-center">
          {["about", "skills", "projects", "resume", "contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <ScrollLink
                to={item}
                smooth={true}
                duration={500}
                className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            </motion.li>
          ))}
          <ModeToggle />
        </ul>
      </nav>
    </motion.header>
  )
}

