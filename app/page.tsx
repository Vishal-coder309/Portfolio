import Image from "next/image"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { projects } from "./data/projects"
import ProjectCover from "./components/ProjectCover"
import Reveal from "./components/Reveal"

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

const termLines: Array<{ text: string; cmd?: boolean; caret?: boolean; d: number }> = [
  { text: "$ whoami", cmd: true, d: 400 },
  { text: "product-lead · full-stack engineer", d: 1400 },
  { text: "$ tail -f voice-platform.log", cmd: true, d: 2400 },
  { text: "records: 1.7B+ · dials: 100M/day design", d: 3400 },
  { text: "$ status", cmd: true, d: 4400 },
  { text: "● shipping weekly", caret: true, d: 5100 },
]

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4" data-reveal>
      <h2 className="font-mono text-sm text-ink">{label}</h2>
      <span className="h-px flex-1 bg-white/10" aria-hidden />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Reveal />

      {/* Glass nav */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-canvas/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#" className="font-mono text-sm font-semibold tracking-tight text-ink">
            vishal@yadav<span className="text-dim">:~</span>
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#work" className="hidden text-slate transition-colors hover:text-ink sm:block">
              Work
            </a>
            <a href="#experience" className="hidden text-slate transition-colors hover:text-ink sm:block">
              Experience
            </a>
            <a href="#contact" className="hidden text-slate transition-colors hover:text-ink sm:block">
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-ink backdrop-blur transition-colors hover:bg-white/10"
            >
              Résumé
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6">
        {/* Hero */}
        <section className="grid items-center gap-10 pt-32 sm:pt-40 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p
              className="hero-rise mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-xs text-slate backdrop-blur"
              style={{ "--d": "0ms" } as React.CSSProperties}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/50 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
              </span>
              open to new opportunities
            </p>
            <h1
              className="hero-rise text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl"
              style={{ "--d": "60ms" } as React.CSSProperties}
            >
              Vishal
              <br />
              Yadav<span className="text-dim">.</span>
            </h1>
            <p
              className="hero-rise mt-5 text-lg text-ink/90"
              style={{ "--d": "120ms" } as React.CSSProperties}
            >
              Product Lead &amp; Full Stack Engineer
            </p>
            <p
              className="hero-rise mt-4 max-w-md leading-relaxed"
              style={{ "--d": "220ms" } as React.CSSProperties}
            >
              I build voice communication platforms at carrier scale at{" "}
              <a
                href="https://biocipher.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
              >
                Biocipher Technology
              </a>{" "}
              — and privacy-first AI tools that run entirely on-device.
            </p>
            <div
              className="hero-rise mt-7 flex items-center gap-5"
              style={{ "--d": "320ms" } as React.CSSProperties}
            >
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-dim transition-colors hover:text-ink"
                >
                  <Icon size={20} />
                </a>
              ))}
              <span className="font-mono text-xs text-dim">Gurugram, India</span>
            </div>
          </div>

          {/* Live terminal */}
          <div
            className="hero-rise rounded-xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-md"
            style={{ "--d": "420ms" } as React.CSSProperties}
            aria-hidden
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="ml-3 font-mono text-[11px] text-dim">vishal@prod: ~</span>
            </div>
            <div className="space-y-2 px-4 py-4 font-mono text-xs leading-relaxed">
              {termLines.map(({ text, cmd, caret, d }) => (
                <p key={text} className={caret ? "caret" : undefined}>
                  <span
                    className={`type ${cmd ? "text-dim" : "text-ink/90"}`}
                    style={{ "--n": `${text.length + 1}ch`, "--d": `${d}ms` } as React.CSSProperties}
                  >
                    {text}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-24 pt-24 sm:pt-32">
          <SectionHeading label="~/work" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {projects.map((project, i) => {
              const inner = (
                <>
                  <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-canvas/60">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover object-top opacity-90 grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0 motion-reduce:transition-none"
                      />
                    ) : (
                      <ProjectCover slug={project.slug} />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-medium leading-snug text-ink">{project.title}</h3>
                      {project.link ? (
                        <ArrowUpRight
                          size={16}
                          className="mt-1 shrink-0 text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink motion-reduce:transition-none"
                        />
                      ) : (
                        <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-wide text-dim">
                          private
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed">{project.description}</p>
                    <p className="mt-auto pt-4 font-mono text-xs text-dim">{project.tags.join(" · ")}</p>
                  </div>
                </>
              )
              const cardClass = `group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 motion-reduce:transition-none ${
                project.link
                  ? "hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-black/40"
                  : ""
              } ${i === 0 ? "sm:col-span-2" : ""}`
              const delay = { "--d": `${(i % 2) * 90}ms` } as React.CSSProperties
              return project.link ? (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                  data-reveal
                  style={delay}
                >
                  {inner}
                </a>
              ) : (
                <div key={project.id} className={cardClass} data-reveal style={delay}>
                  {inner}
                </div>
              )
            })}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 pt-24 sm:pt-32">
          <SectionHeading label="~/experience" />
          <ol className="mt-2 divide-y divide-white/10">
            {experience.map((job) => (
              <li key={`${job.role}-${job.period}`} className="py-7" data-reveal>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-medium text-ink">
                    {job.role}{" "}
                    <span className="text-slate">
                      ·{" "}
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-ink"
                        >
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </span>
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-dim">{job.period}</span>
                </div>
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
            <span className="underline decoration-white/30 underline-offset-4 transition-colors group-hover:decoration-white">
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
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-12"
            data-reveal
          >
            <p className="font-mono text-xs text-dim">$ open mailto</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Let&apos;s talk.
            </h2>
            <p className="mt-3 max-w-md leading-relaxed">
              A product to lead, a platform to scale, or a conversation about
              voice tech and on-device AI — my inbox is open.
            </p>
            <a
              href="mailto:vishalyadav68948@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-all hover:-translate-y-0.5 hover:opacity-90 motion-reduce:transition-none"
            >
              <Mail size={16} />
              vishalyadav68948@gmail.com
            </a>
          </div>
        </section>

        <footer className="flex items-center justify-between py-12 font-mono text-xs text-dim">
          <span>© 2026 Vishal Yadav</span>
          <span>Next.js · Tailwind · Vercel</span>
        </footer>
      </main>
    </>
  )
}
