"use client"

import { useEffect, useState } from "react"

const ACTIONS: Record<string, string> = {
  "1": "work",
  "2": "experience",
  "3": "contact",
  "0": "resume",
}

const PAD = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"]

const PAD_LABEL: Record<string, string> = {
  "1": "Go to work (press 1)",
  "2": "Go to experience (press 2)",
  "3": "Go to contact (press 3)",
  "0": "Open résumé PDF (press 0)",
}

function act(key: string) {
  const target = ACTIONS[key]
  if (!target) return
  if (target === "resume") {
    window.open("/resume.pdf", "_blank", "noopener")
    return
  }
  const el = document.getElementById(target)
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  el?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
}

export default function IvrConsole() {
  const [pressed, setPressed] = useState<string | null>(null)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (!(e.key in ACTIONS)) return
      press(e.key)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  function press(key: string) {
    setPressed(key)
    setTimeout(() => setPressed(null), 200)
    act(key)
  }

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <div
      className="glass hero-rise rounded-xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-md"
      style={{ "--d": "420ms" } as React.CSSProperties}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-[11px] text-dim">vishal.exchange · IVR</span>
        <span className="ml-auto font-mono text-[11px] tabular-nums text-mint" aria-hidden>
          ● {mm}:{ss}
        </span>
      </div>

      <div className="space-y-2 px-4 py-4 font-mono text-xs leading-relaxed" aria-hidden>
        <p>
          <span className="type text-mint" style={{ "--n": "20ch", "--d": "400ms" } as React.CSSProperties}>
            ● incoming call ···
          </span>
        </p>
        <p>
          <span className="type text-ink/90" style={{ "--n": "25ch", "--d": "1300ms" } as React.CSSProperties}>
            Welcome to Vishal Yadav.
          </span>
        </p>
        <p>
          <span className="type text-ink/90" style={{ "--n": "33ch", "--d": "2300ms" } as React.CSSProperties}>
            Press 1 for work · 2 for career
          </span>
        </p>
        <p className="caret">
          <span className="type text-ink/90" style={{ "--n": "34ch", "--d": "3300ms" } as React.CSSProperties}>
            Press 3 to reach me · 0 for CV
          </span>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-1.5 border-t border-white/10 p-4" role="group" aria-label="Dial pad navigation">
        {PAD.map((k) => {
          const active = k in ACTIONS
          return (
            <button
              key={k}
              type="button"
              disabled={!active}
              tabIndex={active ? 0 : -1}
              aria-label={PAD_LABEL[k]}
              onClick={() => press(k)}
              className={`rounded-md py-2 font-mono text-sm transition-colors duration-150 motion-reduce:transition-none ${
                pressed === k
                  ? "bg-signal text-canvas"
                  : active
                    ? "bg-signal/10 text-signal hover:bg-signal/20 cursor-pointer"
                    : "bg-white/[0.02] text-white/20"
              }`}
            >
              {k}
            </button>
          )
        })}
      </div>
    </div>
  )
}
