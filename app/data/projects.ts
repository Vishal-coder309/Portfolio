export interface CaseStudy {
  problem: string
  architecture: string
  outcome: string
}

export interface Project {
  id: number
  slug: string
  title: string
  description: string
  tags: string[]
  image?: string
  link?: string
  caseStudy?: CaseStudy
}

export const projects: Project[] = [
  {
    id: 3,
    slug: "alvis",
    title: "Alvis — On-Device AI Assistant",
    description:
      "A fully on-device Android AI assistant built with Kotlin and Jetpack Compose. Local LLM inference with zero cloud dependency, encrypted storage via SQLCipher and Android Keystore, and voice input. No analytics, no telemetry — privacy by architecture.",
    tags: ["Kotlin", "Jetpack Compose", "On-Device LLM", "SQLCipher"],
    caseStudy: {
      problem:
        "Cloud assistants ship everything you say to someone else's servers. The goal: a genuinely capable AI assistant where no byte ever leaves the phone.",
      architecture:
        "Kotlin + Jetpack Compose app running quantized LLMs entirely on-device. SQLCipher with Android Keystore for encrypted storage, on-device speech for voice input, and a strict no-network policy — the only outbound call permitted is Gmail sync over an allowlisted domain.",
      outcome:
        "A working assistant with zero cloud inference, zero analytics, zero telemetry. Privacy enforced by architecture, not by a settings toggle.",
    },
  },
  {
    id: 8,
    slug: "bos",
    title: "BOS — Business Operating System",
    description:
      "Big-data platform enabling natural-language, requirement-driven database querying over a 1.7B+ record store. Business teams ask questions; the platform plans, optimizes, and runs the queries.",
    tags: ["Java", "Big Data", "Query Optimization", "NL Querying"],
    caseStudy: {
      problem:
        "Business teams needed answers from a 1.7-billion-record store, but every question meant writing SQL by hand and waiting on an engineer.",
      architecture:
        "A requirement-driven query layer that turns plain-language asks into optimized queries — backed by targeted indexing, query tuning, and a caching tier over the big-data store.",
      outcome:
        "Self-serve data answers at scale. Query latency dropped through index design instead of hardware, and engineers stopped being a reporting bottleneck.",
    },
  },
  {
    id: 1,
    slug: "voiceconsole",
    title: "Voice Console — CPaaS UI Redesign",
    description:
      "Ground-up redesign of a CPaaS customer console in Next.js 15 and React 19. Visual IVR flow builder with nested DTMF trees, campaign composer, TTS template management, and agent-group routing — complex telecom workflows distilled into a clean, scannable interface.",
    tags: ["Next.js 15", "React 19", "UI/UX", "IVR Builder"],
    image: "/images/projects/voiceconsole.png",
    link: "https://ui.vishalyadav.live/",
    caseStudy: {
      problem:
        "Telecom operator consoles are dense, hostile, and slow to learn — campaign setup took support tickets instead of clicks.",
      architecture:
        "Next.js 15 + React 19 rebuild with a visual IVR tree builder (nested DTMF levels, per-action field matrices), campaign composer, TTS template management, and agent-group routing.",
      outcome:
        "Complex outbound campaign flows became composable in minutes by non-engineers, with the IVR tree readable at a glance.",
    },
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
    caseStudy: {
      problem:
        "Indian job listings fragment across LinkedIn, Naukri, Indeed, and Shine — and every board buries junior roles under senior-lead noise.",
      architecture:
        "Aggregation over Adzuna + JSearch APIs with dedupe, a resume-to-role-bucket keyword extractor for personalization, auth built from primitives (email OTP, scrypt, HMAC cookies), and bucket-level caching shared across users so free API quotas don't scale with user count.",
      outcome:
        "A daily personalized job digest that runs entirely on free-tier infrastructure, refreshed hourly.",
    },
  },
  {
    id: 4,
    slug: "sipdialler",
    title: "SIP Dialler — Outbound Voice Platform",
    description:
      "Enterprise-grade outbound-voice telecom platform architected for 100M dial attempts/day. Multi-node FreeSWITCH with Kamailio, channel-aware pacing in Go, PostgreSQL + ClickHouse CDR pipeline, and Kafka event streams — hexagonal, event-driven, horizontally scalable.",
    tags: ["Go", "FreeSWITCH", "Kamailio", "ClickHouse", "Kafka"],
    link: "https://github.com/Vishal-coder309/Sip-Dialler",
    caseStudy: {
      problem:
        "Commercial dialers cap out on throughput and lock pacing logic away — the target was 100 million dial attempts per day with full control.",
      architecture:
        "Multi-node FreeSWITCH behind Kamailio, a channel-aware pacing engine in Go (Fiber, gRPC, Asynq), PostgreSQL as source of truth with ClickHouse for the CDR pipeline, Redis for pacing state, and Kafka event streams. Hexagonal, event-driven, stateless services under Kubernetes.",
      outcome:
        "An architecture validated for 100M dials/day with zero-downtime deploys — every layer horizontally scalable and observable by default.",
    },
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
    caseStudy: {
      problem:
        "SSC CGL aspirants study a 120+ topic syllabus for months with no structured way to track coverage, streaks, or mock performance.",
      architecture:
        "React + Express + MongoDB PWA: study timer bound to a pre-loaded syllabus tree, streak and accuracy analytics with Chart.js, JWT auth with bcrypt, and a service worker for full offline capability.",
      outcome:
        "An installable, offline-first tracker — daily study logging, mock-score trends, and a streak dashboard that keeps aspirants accountable.",
    },
  },
  {
    id: 6,
    slug: "summariser",
    title: "Work Summariser — AI Desktop Companion",
    description:
      "Windows desktop app in Tauri 2 + Rust that chats through a local Ollama LLM, manages tasks, and auto-writes a daily work journal from developer-tool transcripts on a nightly schedule. Fully local and free.",
    tags: ["Tauri 2", "Rust", "Ollama", "Local LLM"],
    caseStudy: {
      problem:
        "A day of engineering work vanishes into tool logs — nobody remembers what shipped, and standup prep means archaeology.",
      architecture:
        "Tauri 2 + Rust shell with a vanilla-JS UI, chatting through local Ollama models. A nightly scheduled extractor parses developer-tool transcripts and writes a plain-markdown daily journal. No cloud APIs, no telemetry, keeps working when Ollama is down.",
      outcome:
        "An automatic work journal that writes itself every night at 23:00 — fully local, fully free.",
    },
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
    caseStudy: {
      problem:
        "Drone survey operations juggle fleets, missions, and maintenance across spreadsheets — with no live picture of what's in the air.",
      architecture:
        "Next.js + Node.js + MongoDB platform: real-time fleet tracking, mission planning with type/status breakdowns, automated maintenance alerts, and an analytics dashboard for success rates and flight hours.",
      outcome:
        "One dashboard for the whole operation — live fleet status, mission success metrics, and maintenance flagged before it grounds a drone.",
    },
  },
]
