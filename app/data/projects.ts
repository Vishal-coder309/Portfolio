export interface Project {
  id: number
  slug: string
  title: string
  description: string
  tags: string[]
  image?: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "voiceconsole",
    title: "Voice Console — CPaaS UI Redesign",
    description:
      "Ground-up redesign of a CPaaS customer console in Next.js 15 and React 19. Visual IVR flow builder with nested DTMF trees, campaign composer, TTS template management, and agent-group routing — complex telecom workflows distilled into a clean, scannable interface.",
    tags: ["Next.js 15", "React 19", "UI/UX", "IVR Builder"],
    image: "/images/projects/voiceconsole.png",
    link: "https://ui.vishalyadav.live/",
  },
  {
    id: 2,
    slug: "jobhunter",
    title: "Job Hunter — Job Aggregation Platform",
    description:
      "Daily job-search platform for the Indian market aggregating Adzuna and Google for Jobs. Hourly-refreshed board, SMTP email digests, hand-rolled auth (email OTP, scrypt, HMAC sessions), and resume-based personalization with shared caching to stay inside free API quotas.",
    tags: ["Next.js", "MongoDB", "Python", "Vercel"],
    image: "/images/projects/jobhunter.png",
    link: "https://jobhunter.vishalyadav.live/",
  },
  {
    id: 3,
    slug: "alvis",
    title: "Alvis — On-Device AI Assistant",
    description:
      "A fully on-device Android AI assistant built with Kotlin and Jetpack Compose. Local LLM inference with zero cloud dependency, encrypted storage via SQLCipher and Android Keystore, and voice input. No analytics, no telemetry — privacy by architecture.",
    tags: ["Kotlin", "Jetpack Compose", "On-Device LLM", "SQLCipher"],
  },
  {
    id: 4,
    slug: "sipdialler",
    title: "SIP Dialler — Outbound Voice Platform",
    description:
      "Enterprise-grade outbound-voice telecom platform architected for 100M dial attempts/day. Multi-node FreeSWITCH with Kamailio, channel-aware pacing in Go, PostgreSQL + ClickHouse CDR pipeline, and Kafka event streams — hexagonal, event-driven, horizontally scalable.",
    tags: ["Go", "FreeSWITCH", "Kamailio", "ClickHouse", "Kafka"],
    link: "https://github.com/Vishal-coder309/Sip-Dialler",
  },
  {
    id: 5,
    slug: "veer",
    title: "Veer — SSC CGL Study Tracker",
    description:
      "Offline-capable PWA for exam aspirants: study timer across a pre-loaded 120+ topic syllabus, mock-test score tracking, streak dashboard, and Chart.js analytics. JWT auth, service-worker offline mode, installable manifest.",
    tags: ["React", "Node.js", "MongoDB", "PWA"],
    image: "/images/projects/veer.png",
    link: "https://veercgl.vercel.app/",
  },
  {
    id: 6,
    slug: "summariser",
    title: "Work Summariser — AI Desktop Companion",
    description:
      "Windows desktop app in Tauri 2 + Rust that chats through a local Ollama LLM, manages tasks, and auto-writes a daily work journal from developer-tool transcripts on a nightly schedule. Fully local and free.",
    tags: ["Tauri 2", "Rust", "Ollama", "Local LLM"],
  },
  {
    id: 7,
    slug: "dronops",
    title: "DronOps — Drone Fleet Management",
    description:
      "Drone fleet management platform with real-time tracking, mission planning, and automated alerts. Interactive analytics dashboard with live status monitoring and maintenance scheduling.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    image: "/images/projects/dronops.png",
    link: "https://droneops.vercel.app/",
  },
]
