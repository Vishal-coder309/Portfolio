export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Alvis — On-Device AI Assistant (Android)",
    description:
      "A fully on-device Android AI assistant built with Kotlin and Jetpack Compose. Runs LLM inference 100% locally with zero cloud dependency, encrypted storage via SQLCipher and Android Keystore, voice input, and an iOS-inspired design system. No analytics, no telemetry — privacy by architecture.",
    tags: ["Kotlin", "Jetpack Compose", "On-Device LLM", "SQLCipher", "Privacy-First"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "SIP Dialler — Outbound Voice Platform",
    description:
      "Enterprise-grade outbound-voice telecom platform architected for 100M dial attempts/day. Multi-node FreeSWITCH with Kamailio, channel-aware pacing engine, Go microservices (Fiber, gRPC), PostgreSQL + ClickHouse CDR pipeline, Redis-driven pacing, and Kafka event streams — designed hexagonal, event-driven, and horizontally scalable.",
    tags: ["Go", "FreeSWITCH", "Kamailio", "PostgreSQL", "ClickHouse", "Kafka", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    link: "https://github.com/Vishal-coder309/Sip-Dialler",
  },
  {
    id: 3,
    title: "Job Hunter — Job Aggregation Platform",
    description:
      "Daily job-search platform for the Indian market aggregating Adzuna and Google for Jobs (LinkedIn, Naukri, Indeed). Next.js job board with hourly refresh, email digests via SMTP, hand-rolled auth (email OTP, scrypt hashing, HMAC sessions — no auth library), and resume-based personalization that maps an uploaded PDF to role buckets with shared caching to stay inside free API quotas.",
    tags: ["Next.js", "MongoDB", "Python", "REST APIs", "Vercel"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
    link: "https://jobhunter.vishalyadav.live/",
  },
  {
    id: 4,
    title: "Veer — SSC CGL Study Tracker (PWA)",
    description:
      "Offline-capable progressive web app for SSC CGL aspirants. Study timer with subject/topic tracking across a pre-loaded 120+ topic syllabus, mock-test score management, streak dashboard, and Chart.js analytics with weekly and monthly breakdowns. JWT auth with bcrypt, service-worker offline mode, and installable PWA manifest.",
    tags: ["React", "Node.js", "Express", "MongoDB", "PWA", "Chart.js"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/Vishal-coder309/Veer",
  },
  {
    id: 5,
    title: "Voice Console — CPaaS UI Redesign",
    description:
      "Ground-up redesign of a CPaaS customer console in Next.js 15 and React 19. Features a visual IVR flow builder with nested DTMF trees, campaign composer, TTS template management, and agent-group routing — complex telecom workflows distilled into a clean, scannable interface.",
    tags: ["Next.js 15", "React 19", "UI/UX", "IVR Builder", "CPaaS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "https://ui.vishalyadav.live/",
  },
  {
    id: 6,
    title: "Work Summariser — AI Desktop Companion",
    description:
      "Windows desktop app built with Tauri 2 and Rust that chats through a local Ollama LLM, manages tasks, and auto-writes a daily work journal by extracting activity from developer tool transcripts on a nightly schedule. Fully local and free — no cloud APIs, no telemetry — with a macOS-style frameless UI in vanilla JS.",
    tags: ["Tauri 2", "Rust", "Ollama", "Local LLM", "Windows"],
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2031&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "DronOps — Drone Fleet Management",
    description:
      "Drone fleet management platform with real-time tracking, mission planning, and automated alerts. Interactive analytics dashboard with live status monitoring and maintenance scheduling.",
    tags: ["Next.js", "Node.js", "MongoDB", "Real-time"],
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/Vishal-coder309/Fleet-Management-System",
  },
]
