import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm shadow-sm mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-foreground/80">© 2025 Vishal Yadav. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Vishal-coder309/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-yadav-aa962b21b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  )
}

