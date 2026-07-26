"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, X } from "lucide-react"
import { projects, type Project } from "../data/projects"
import ProjectCover from "./ProjectCover"

const EASE = [0.22, 1, 0.36, 1] as const

export default function WorkGrid() {
  const [open, setOpen] = useState<Project | null>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.07 } },
  }
  const item = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  }

  return (
    <>
      <motion.div
        className="mt-8 grid gap-4 sm:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {projects.map((project, i) => {
          const featured = i === 0
          return (
            <motion.article
              key={project.slug}
              variants={item}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ duration: 0.25, ease: EASE }}
              className={`glass group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors hover:border-signal/30 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-signal/5 ${
                featured ? "sm:col-span-2" : ""
              }`}
              role="button"
              tabIndex={0}
              aria-label={`Open case study: ${project.title}`}
              onClick={() => setOpen(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  setOpen(project)
                }
              }}
            >
              {project.image ? (
                <div className="border-b border-white/10">
                  <div className="flex items-center gap-1.5 border-b border-white/10 bg-canvas/80 px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                    <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
                    <span className="h-2 w-2 rounded-full bg-[#28C840]" />
                    <span className="ml-2 truncate font-mono text-[10px] text-dim">
                      {project.link ? project.link.replace(/^https?:\/\//, "").replace(/\/$/, "") : project.slug}
                    </span>
                  </div>
                  <div className="relative aspect-video w-full overflow-hidden bg-canvas/60">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top opacity-95 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100 motion-reduce:transition-none"
                    />
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-canvas/60">
                  <ProjectCover slug={project.slug} />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-medium leading-snug text-ink transition-colors group-hover:text-signal">
                    {project.title}
                  </h3>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live`}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-1 shrink-0 text-dim transition-all hover:-translate-y-0.5 hover:translate-x-0.5 hover:text-signal motion-reduce:transition-none"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-wide text-honey">
                      private
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed">{project.description}</p>
                {project.metrics && (
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label="Impact metrics">
                    {project.metrics.map((m) => (
                      <li
                        key={m}
                        className="rounded border border-mint/20 bg-mint/10 px-2 py-0.5 font-mono text-[11px] text-mint"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                )}
                <ul className="mt-auto flex flex-wrap gap-2 pt-4" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-signal/10 px-2.5 py-0.5 font-mono text-[11px] text-signal">
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-[11px] text-dim">
                  case study <span className="text-signal">→</span>
                </p>
              </div>
            </motion.article>
          )
        })}
      </motion.div>

      {/* Case-study modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8">
            <motion.button
              type="button"
              aria-label="Close case study"
              className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${open.title} case study`}
              className="glass relative max-h-[85dvh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/15 bg-[#111114] p-6 shadow-2xl shadow-black/60 sm:p-8"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{open.title}</h3>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpen(null)}
                  className="rounded-md p-1.5 text-dim transition-colors hover:bg-white/10 hover:text-ink"
                >
                  <X size={18} />
                </button>
              </div>

              {open.caseStudy ? (
                <div className="mt-5 space-y-5">
                  {(
                    [
                      ["problem", open.caseStudy.problem, "text-honey"],
                      ["architecture", open.caseStudy.architecture, "text-signal"],
                      ["outcome", open.caseStudy.outcome, "text-mint"],
                    ] as const
                  ).map(([label, text, color]) => (
                    <div key={label}>
                      <p className={`font-mono text-xs uppercase tracking-wide ${color}`}>{label}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate">{text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-5 text-sm leading-relaxed">{open.description}</p>
              )}

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {open.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-signal/10 px-2.5 py-0.5 font-mono text-[11px] text-signal">
                    {tag}
                  </li>
                ))}
              </ul>

              {open.link && (
                <a
                  href={open.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-signal px-4 py-2 text-sm font-medium text-canvas transition-colors hover:bg-signal/90"
                >
                  Visit live <ArrowUpRight size={15} />
                </a>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
