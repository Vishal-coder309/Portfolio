import { ArrowUpRight, Bot, Cloud, Database, Github, Linkedin, Mail, Server } from "lucide-react"
import IvrConsole from "./components/IvrConsole"
import Reveal from "./components/Reveal"
import WorkGrid from "./components/WorkGrid"

const capabilities = [
  {
    title: "GenAI & LLM Orchestration",
    Icon: Bot,
    color: "text-grape",
    items: [
      "RAG pipelines: hybrid search, re-ranking, chunking",
      "Vector DBs: pgvector, Pinecone, Qdrant",
      "Agentic voice & chat agents in production",
      "On-device LLMs & Ollama inference pipelines",
      "AI-native dev: Claude Code & agent workflows",
    ],
  },
  {
    title: "Backend & Microservices",
    Icon: Server,
    color: "text-signal",
    items: [
      "Spring Boot APIs serving live voice traffic",
      "Spring Security, JWT, Redis caching",
      "Event-driven services in Java & Go",
      "REST design across CPaaS products",
    ],
  },
  {
    title: "Cloud & DevOps",
    Icon: Cloud,
    color: "text-mint",
    items: [
      "Docker & Kubernetes deployments",
      "Jenkins & GitHub Actions CI/CD",
      "Zero-downtime release pipelines",
      "AWS, production monitoring & uptime",
    ],
  },
  {
    title: "High-Throughput Data",
    Icon: Database,
    color: "text-honey",
    items: [
      "1.7B+ record query optimization",
      "Indexing & tuning at big-data scale",
      "CDR pipelines, ClickHouse analytics",
      "NL-driven querying (BOS platform)",
    ],
  },
]

const experience = [
  {
    period: "2026 — Now",
    role: "Product Lead",
    company: "Biocipher Technology",
    url: "https://biocipher.in/",
    description:
      "Leading the voice marketing product and a team of 5 — AI agentic voice calling, IVR, and OBD campaigns shipped weekly on the CPaaS panel behind pixabits.ai. Cut customer resolution time 30% at a 95% on-time release rate.",
  },
  {
    period: "2025 — 26",
    role: "System Engineer",
    company: "Biocipher Technology",
    url: "https://biocipher.in/",
    description:
      "Tuned queries on a 1.7B+ record system, built Spring Boot APIs 15% faster with Redis caching, and kept production voice infrastructure up through critical incidents.",
  },
  {
    period: "2024",
    role: "Software Engineer Intern",
    company: "Evren Global Solutions",
    url: "",
    description:
      "Spring Boot REST APIs with JWT auth; Jenkins + Docker CI/CD pipeline that cut deployment time 10%.",
  },
  {
    period: "2023",
    role: "Frontend Developer Intern",
    company: "Opt2Deal",
    url: "",
    description:
      "Responsive React components and client-side validation for an e-commerce platform.",
  },
]

const socials = [
  { label: "GitHub", href: "https://github.com/Vishal-coder309", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vishal-yadav-aa962b21b", Icon: Linkedin },
  { label: "Email", href: "mailto:vishalyadav68948@gmail.com", Icon: Mail },
]

const stack = [
  "RAG", "Hybrid Search", "pgvector", "Prompt Engineering", "Agentic AI",
  "LLM Orchestration", "Ollama", "Claude Code", "Java 17", "Spring Boot",
  "Microservices", "Redis", "MySQL", "MongoDB", "Kotlin", "Go", "TypeScript",
  "React", "Next.js", "Docker", "Kubernetes", "AWS", "Jenkins",
  "GitHub Actions", "FreeSWITCH", "Kamailio", "CI/CD",
]

function SectionHeading({ num, label, color }: { num: string; label: string; color: string }) {
  return (
    <div className="flex items-center gap-4" data-reveal>
      <h2 className="font-mono text-sm text-ink">
        <span className={color}>{num}</span> — {label}
      </h2>
      <span className="rule h-px flex-1 bg-white/10" aria-hidden />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Reveal />

      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
      >
        Skip to content
      </a>

      {/* Glass nav */}
      <nav className="nav-drop fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-canvas/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#" className="font-mono text-sm font-semibold tracking-tight text-ink">
            vishal@yadav<span className="text-dim">:~</span>
          </a>
          <div className="flex items-center gap-4 text-xs sm:gap-6 sm:text-sm">
            <a href="#work" className="navlink text-slate transition-colors hover:text-signal">
              Work
            </a>
            <a
              href="#experience"
              className="navlink hidden text-slate transition-colors hover:text-signal min-[420px]:block"
            >
              Experience
            </a>
            <a href="#contact" className="navlink text-slate transition-colors hover:text-signal">
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-signal/40 bg-signal/10 px-4 py-1.5 text-xs text-signal backdrop-blur transition-colors hover:bg-signal/20"
            >
              Résumé
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero — bento console */}
        <section className="grid gap-4 pt-28 sm:pt-32 lg:grid-cols-12">
          <div className="glass flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10 lg:col-span-7">
            <p
              className="hero-rise mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-xs text-slate backdrop-blur"
              style={{ "--d": "0ms" } as React.CSSProperties}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
              </span>
              building GenAI &amp; RAG solutions
            </p>
            <h1
              className="hero-rise text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl"
              style={{ "--d": "60ms" } as React.CSSProperties}
            >
              Vishal
              <br />
              Yadav<span className="text-signal">.</span>
            </h1>
            <p
              className="hero-rise mt-5 text-lg text-ink/90"
              style={{ "--d": "120ms" } as React.CSSProperties}
            >
              GenAI Software Engineer &amp; Systems Architect
            </p>
            <p
              className="hero-rise mt-4 max-w-md leading-relaxed"
              style={{ "--d": "220ms" } as React.CSSProperties}
            >
              Building production-grade AI systems — LLM orchestration, RAG
              optimization, and AI-driven dev tooling on backend infrastructure
              that runs at carrier scale at{" "}
              <a
                href="https://biocipher.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-signal/50 underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
              >
                Biocipher Technology
              </a>
              . Reliable AI in production, not API demos.
            </p>
            <ul
              className="hero-rise mt-6 flex flex-wrap gap-2"
              style={{ "--d": "300ms" } as React.CSSProperties}
              aria-label="Core stack"
            >
              {[
                ["RAG / LLMs", "border-grape/40 text-grape"],
                ["Vector DBs", "border-grape/40 text-grape"],
                ["Claude Code", "border-honey/40 text-honey"],
                ["Spring Boot", "border-mint/40 text-mint"],
                ["Kubernetes", "border-signal/40 text-signal"],
                ["TypeScript", "border-signal/40 text-signal"],
              ].map(([label, cls]) => (
                <li
                  key={label}
                  className={`rounded-full border bg-white/[0.03] px-3 py-1 font-mono text-[11px] transition-transform hover:-translate-y-0.5 motion-reduce:transition-none ${cls}`}
                >
                  {label}
                </li>
              ))}
            </ul>
            <div
              className="hero-rise mt-6 flex flex-wrap items-center gap-3"
              style={{ "--d": "360ms" } as React.CSSProperties}
            >
              <a
                href="#work"
                className="rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-canvas transition-all hover:-translate-y-0.5 hover:bg-signal/90 hover:shadow-lg hover:shadow-signal/20 motion-reduce:transition-none"
              >
                Explore AI systems
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-ink transition-colors hover:bg-white/10"
              >
                Get in touch
              </a>
            </div>
            <div
              className="hero-rise mt-7 flex items-center gap-5"
              style={{ "--d": "420ms" } as React.CSSProperties}
            >
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-dim transition-colors hover:text-signal"
                >
                  <Icon size={20} />
                </a>
              ))}
              <span className="font-mono text-xs text-dim">Gurugram, India</span>
            </div>
          </div>

          {/* IVR console — his product domain, live: digits 1/2/3/0 navigate */}
          <div className="lg:col-span-5">
            <IvrConsole />
          </div>

          {/* Operator readout */}
          <div
            className="glass hero-rise grid grid-cols-2 divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm sm:grid-cols-4 sm:divide-x lg:col-span-12"
            style={{ "--d": "520ms" } as React.CSSProperties}
          >
            {[
              { v: "1.7B+", l: "records optimized", c: "text-signal" },
              { v: "100M/day", l: "dial capacity designed", c: "text-mint" },
              { v: "3+", l: "AI products in production", c: "text-grape" },
              { v: "5", l: "engineers led", c: "text-honey" },
            ].map(({ v, l, c }) => (
              <div key={l} className="px-6 py-5">
                <p className={`font-mono text-xl font-semibold tabular-nums ${c}`}>{v}</p>
                <p className="mt-1 font-mono text-[11px] text-dim">{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech marquee */}
        <div className="marquee mt-20 border-y border-white/10 py-4 sm:mt-28" aria-hidden>
          <div className="marquee-track font-mono text-xs text-dim">
            {[...stack, ...stack].map((s, i) => (
              <span key={i} className="flex items-center whitespace-nowrap">
                <span className="px-5">{s}</span>
                <span className="text-white/20">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <section id="capabilities" className="scroll-mt-24 pt-24 sm:pt-32">
          <SectionHeading num="*" label="capabilities" color="text-grape" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ title, Icon, color, items }, i) => (
              <div
                key={title}
                className="glass rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
                data-reveal
                style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
              >
                <Icon size={20} className={color} aria-hidden />
                <h3 className="mt-3 font-medium text-ink">{title}</h3>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed">
                  {items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-24 pt-24 sm:pt-32">
          <SectionHeading num="1" label="work" color="text-signal" />
          <WorkGrid />
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 pt-24 sm:pt-32">
          <SectionHeading num="2" label="experience" color="text-mint" />
          <ol className="mt-8 border-l border-white/10 pl-8">
            {experience.map((job, i) => (
              <li key={`${job.role}-${job.period}`} className="relative pb-10 last:pb-0" data-reveal>
                <span
                  className={`absolute -left-[2.42rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-canvas ${
                    i === 0 ? "bg-mint" : "bg-white/25"
                  }`}
                  aria-hidden
                >
                  {i === 0 && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint/50 motion-reduce:hidden" />
                  )}
                </span>
                <p className="font-mono text-xs text-dim">
                  {job.period}
                  {i === 0 && <span className="ml-2 text-mint">● current</span>}
                </p>
                <h3 className="mt-1.5 font-medium text-ink">
                  {job.role}{" "}
                  <span className="text-slate">
                    ·{" "}
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-mint"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </span>
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed">{job.description}</p>
              </li>
            ))}
          </ol>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex items-center text-sm font-medium text-ink"
            data-reveal
          >
            <span className="underline decoration-mint/50 underline-offset-4 transition-colors group-hover:text-mint group-hover:decoration-mint">
              View full résumé
            </span>
            <ArrowUpRight
              size={15}
              className="ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </a>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 pt-24 sm:pt-32">
          <div
            className="glass rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-12"
            data-reveal
          >
            <p className="font-mono text-xs text-dim">
              <span className="text-honey">3</span> — <span className="text-mint">●</span> line open
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Let&apos;s talk.
            </h2>
            <p className="mt-3 max-w-md leading-relaxed">
              A product to lead, a platform to scale, or a conversation about
              voice tech and on-device AI — my inbox is open.
            </p>
            <a
              href="mailto:vishalyadav68948@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-medium text-canvas transition-all hover:-translate-y-0.5 hover:bg-signal/90 hover:shadow-lg hover:shadow-signal/20 motion-reduce:transition-none"
            >
              <Mail size={16} />
              vishalyadav68948@gmail.com
            </a>
          </div>
        </section>

        <footer className="flex items-center justify-between py-12 font-mono text-xs text-dim">
          <span>© 2026 Vishal Yadav</span>
          <span className="flex items-center gap-5">
            <span className="hidden sm:inline">Next.js · Tailwind · Vercel</span>
            <a href="#" className="navlink transition-colors hover:text-signal">
              ↑ top
            </a>
          </span>
        </footer>
      </main>
    </>
  )
}
