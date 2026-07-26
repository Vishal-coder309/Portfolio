"use client"

import { useEffect, useState } from "react"
import { Check, Copy } from "lucide-react"

const ACTIONS: Record<string, string> = {
  "1": "work",
  "2": "experience",
  "3": "contact",
  "*": "capabilities",
  "0": "resume",
}

const PAD = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"]

const PAD_LABEL: Record<string, string> = {
  "1": "Go to work (press 1)",
  "2": "Go to experience (press 2)",
  "3": "Go to contact (press 3)",
  "*": "Go to capabilities (press *)",
  "0": "Open résumé PDF (press 0)",
}

const SNIPPET = `const docs = await hybridSearch(query, {
  dense: embed(query),
  sparse: bm25(query),
})
const ctx = rerank(query, docs).top(5)
return llm.generate({ grounded: ctx, query })`

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
  const [tab, setTab] = useState<"ivr" | "code">("ivr")
  const [copied, setCopied] = useState(false)

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

  function copy() {
    navigator.clipboard.writeText(SNIPPET).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <div
      className="glass hero-rise rounded-xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/40 backdrop-blur-md"
      style={{ "--d": "420ms" } as React.CSSProperties}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex gap-1" role="tablist" aria-label="Console tabs">
          {(
            [
              ["ivr", "ivr.flow"],
              ["code", "rag.ts"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
              className={`rounded px-2 py-0.5 font-mono text-[11px] transition-colors ${
                tab === key ? "bg-white/10 text-ink" : "text-dim hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="ml-auto font-mono text-[11px] tabular-nums text-mint" aria-hidden>
          ● {mm}:{ss}
        </span>
      </div>

      {tab === "ivr" ? (
        <>
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

          <div
            className="grid grid-cols-3 gap-1.5 border-t border-white/10 p-4"
            role="group"
            aria-label="Dial pad navigation"
          >
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
        </>
      ) : (
        <div className="relative">
          <button
            type="button"
            onClick={copy}
            aria-label={copied ? "Copied" : "Copy code"}
            className="absolute right-3 top-3 rounded-md p-1.5 text-dim transition-colors hover:bg-white/10 hover:text-ink"
          >
            {copied ? <Check size={14} className="text-mint" /> : <Copy size={14} />}
          </button>
          <pre className="overflow-x-auto px-4 py-4 font-mono text-xs leading-[1.9]">
            <code>
              <span className="text-grape">const</span> <span className="text-ink">docs</span>{" "}
              <span className="text-dim">=</span> <span className="text-grape">await</span>{" "}
              <span className="text-signal">hybridSearch</span>
              <span className="text-dim">(query, {"{"}</span>
              {"\n"}
              {"  "}dense<span className="text-dim">:</span> <span className="text-signal">embed</span>
              <span className="text-dim">(query),</span>
              {"\n"}
              {"  "}sparse<span className="text-dim">:</span> <span className="text-signal">bm25</span>
              <span className="text-dim">(query),</span>
              {"\n"}
              <span className="text-dim">{"})"}</span>
              {"\n"}
              <span className="text-grape">const</span> <span className="text-ink">ctx</span>{" "}
              <span className="text-dim">=</span> <span className="text-signal">rerank</span>
              <span className="text-dim">(query, docs).</span>
              <span className="text-signal">top</span>
              <span className="text-dim">(</span>
              <span className="text-honey">5</span>
              <span className="text-dim">)</span>
              {"\n"}
              <span className="text-grape">return</span> <span className="text-ink">llm</span>
              <span className="text-dim">.</span>
              <span className="text-signal">generate</span>
              <span className="text-dim">({"{ "}</span>grounded<span className="text-dim">:</span> ctx
              <span className="text-dim">,</span> query <span className="text-dim">{"}"})</span>
            </code>
          </pre>
          <p className="border-t border-white/10 px-4 py-2.5 font-mono text-[11px] text-dim">
            <span className="text-mint">✓</span> hybrid retrieval · re-rank · grounded generation
          </p>
        </div>
      )}
    </div>
  )
}
