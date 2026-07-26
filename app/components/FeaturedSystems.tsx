// Featured engineering systems — structured diagrams instead of abstract art.

const MONO = { fontFamily: "var(--font-mono), monospace" }

function BosDiagram() {
  return (
    <svg viewBox="0 0 340 190" className="h-auto w-full" aria-label="Natural language to SQL flow diagram">
      {/* NL question bubble */}
      <rect x={16} y={14} width={190} height={30} rx={15} fill="none" stroke="rgba(56,189,248,0.7)" strokeWidth={1.2} />
      <text x={32} y={33} fontSize={11} fill="#A1A1AA" style={MONO}>
        &quot;q3 revenue by region?&quot;
      </text>
      <path d="M 110 44 v 16" stroke="rgba(56,189,248,0.5)" strokeWidth={1.2} strokeDasharray="3 4" className="march" />
      {/* LLM + schema box */}
      <rect x={30} y={62} width={160} height={32} rx={7} fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.6)" strokeWidth={1.2} />
      <text x={48} y={82} fontSize={11} fill="#C4B5FD" style={MONO}>
        LLM + schema context
      </text>
      <path d="M 110 94 v 16" stroke="rgba(167,139,250,0.5)" strokeWidth={1.2} strokeDasharray="3 4" className="march" />
      {/* SQL box */}
      <rect x={16} y={112} width={190} height={30} rx={7} fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.55)" strokeWidth={1.2} />
      <text x={32} y={131} fontSize={11} fill="#6EE7B7" style={MONO}>
        SELECT region, SUM(rev)
      </text>
      {/* result table */}
      <path d="M 206 127 h 24" stroke="rgba(52,211,153,0.5)" strokeWidth={1.2} strokeDasharray="3 4" className="march" />
      <rect x={238} y={96} width={86} height={62} rx={7} fill="none" stroke="rgba(250,250,250,0.25)" strokeWidth={1.2} />
      {[112, 126, 140].map((y, i) => (
        <line
          key={y}
          x1={248}
          y1={y}
          x2={i === 0 ? 314 : 296 - i * 8}
          y2={y}
          stroke={i === 0 ? "rgba(250,250,250,0.5)" : "rgba(250,250,250,0.18)"}
          strokeWidth={4}
          strokeLinecap="round"
        />
      ))}
      <text x={240} y={174} fontSize={10} fill="#71717A" style={MONO}>
        sub-200ms
      </text>
    </svg>
  )
}

function PipelineDiagram() {
  const stages = [
    { x: 10, label: "actions" },
    { x: 92, label: "build" },
    { x: 174, label: "deploy" },
  ]
  return (
    <svg
      viewBox="0 0 340 110"
      className="h-auto w-full"
      aria-label="CI/CD pipeline flow: GitHub Actions to build to Kubernetes rollout"
    >
      {stages.map(({ x, label }) => (
        <g key={label}>
          <rect x={x} y={38} width={66} height={30} rx={7} fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.55)" strokeWidth={1.2} />
          <text x={x + 33} y={57} fontSize={11} fill="#6EE7B7" textAnchor="middle" style={MONO}>
            {label}
          </text>
        </g>
      ))}
      <path d="M 76 53 h 16 M 158 53 h 16" stroke="rgba(52,211,153,0.5)" strokeWidth={1.2} strokeDasharray="3 4" className="march" />
      <path d="M 240 53 h 16" stroke="rgba(52,211,153,0.5)" strokeWidth={1.2} strokeDasharray="3 4" className="march" />
      {/* k8s pods */}
      {[
        [278, 40],
        [310, 40],
        [278, 68],
        [310, 68],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={11} fill="none" stroke={i === 3 ? "rgba(56,189,248,0.7)" : "rgba(250,250,250,0.3)"} strokeWidth={1.2} />
          <circle cx={cx} cy={cy} r={3} fill={i === 3 ? "rgba(56,189,248,0.9)" : "rgba(250,250,250,0.35)"} />
        </g>
      ))}
      <text x={294} y={99} fontSize={9} fill="#71717A" textAnchor="middle" style={MONO}>
        rolling update
      </text>
    </svg>
  )
}

const voiceMetrics = [
  { v: "100M/day", l: "dial capacity design", c: "text-signal" },
  { v: "1.7B+", l: "CDRs tracked", c: "text-honey" },
  { v: "IVR·OBD·OTP", l: "products live", c: "text-mint" },
  { v: "weekly", l: "release cadence", c: "text-grape" },
]

export default function FeaturedSystems() {
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      {/* BOS — hero card */}
      <div
        className="glass grid items-center gap-8 rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-signal/50 sm:grid-cols-2 sm:p-8 lg:col-span-2"
        data-reveal
      >
        <div>
          <p className="font-mono text-xs text-signal">featured system</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">BOS — AI Data Query Engine</h3>
          <p className="mt-3 text-sm leading-relaxed">
            Natural-language-to-SQL over a 1.7B+ record enterprise store. An LLM
            planning layer receives the relevant schema context, generates
            validated SQL, and runs it against an index-tuned big-data tier —
            business teams pull answers without writing a line of SQL.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Key metrics">
            {[
              ["Sub-200ms DB queries", "border-signal/40 text-signal"],
              ["Zero-code data retrieval", "border-mint/40 text-mint"],
              ["1.7B+ records", "border-honey/40 text-honey"],
            ].map(([label, cls]) => (
              <li key={label} className={`rounded-full border bg-white/[0.03] px-3 py-1 font-mono text-[11px] ${cls}`}>
                {label}
              </li>
            ))}
          </ul>
        </div>
        <BosDiagram />
      </div>

      {/* K8s CI/CD */}
      <div
        className="glass rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-mint/50"
        data-reveal
      >
        <p className="font-mono text-xs text-mint">deployment pipeline</p>
        <h3 className="mt-2 font-semibold tracking-tight text-ink">Zero-Downtime Kubernetes CI/CD</h3>
        <div className="mt-4">
          <PipelineDiagram />
        </div>
        <p className="mt-3 text-sm leading-relaxed">
          GitHub Actions workflows building and rolling microservices onto
          Kubernetes with health-gated rolling updates — voice traffic never
          drops mid-deploy.
        </p>
        <p className="mt-3 inline-block rounded-full border border-mint/40 bg-mint/5 px-3 py-1 font-mono text-[11px] text-mint">
          zero-downtime updates
        </p>
      </div>

      {/* Voice ops */}
      <div
        className="glass rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-honey/50"
        data-reveal
        style={{ "--d": "90ms" } as React.CSSProperties}
      >
        <p className="font-mono text-xs text-honey">voice ops at scale</p>
        <h3 className="mt-2 font-semibold tracking-tight text-ink">High-Scale Voice Campaign Engine</h3>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {voiceMetrics.map(({ v, l, c }) => (
            <div key={l} className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
              <p className={`font-mono text-sm font-semibold tabular-nums ${c}`}>{v}</p>
              <p className="mt-0.5 font-mono text-[10px] text-dim">{l}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed">
          Asterisk &amp; FreeSWITCH campaign infrastructure behind pixabits.ai —
          agentic voice calling, IVR trees, OBD campaigns, and voice OTP in
          production.
        </p>
      </div>
    </div>
  )
}
