// Monochrome-dark line-art covers for projects without live screenshots.
// Per-project hues: violet = on-device AI, mint = live voice, honey = journal/desktop.

type Hue = { s: string; f: string; glow: string }

const HUES: Record<string, Hue> = {
  grape: { s: "rgba(167,139,250,0.8)", f: "rgba(167,139,250,0.22)", glow: "rgba(167,139,250,0.10)" },
  mint: { s: "rgba(52,211,153,0.8)", f: "rgba(52,211,153,0.22)", glow: "rgba(52,211,153,0.10)" },
  honey: { s: "rgba(251,191,36,0.8)", f: "rgba(251,191,36,0.22)", glow: "rgba(251,191,36,0.10)" },
  signal: { s: "rgba(56,189,248,0.8)", f: "rgba(56,189,248,0.22)", glow: "rgba(56,189,248,0.10)" },
}

function Waveform({ s, f }: Hue) {
  // ponytail: deterministic pseudo-waveform, heights hand-picked
  const bars = [12, 28, 18, 44, 60, 38, 74, 52, 88, 64, 40, 70, 92, 58, 80, 46, 66, 34, 54, 24, 40, 16, 28, 10]
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={38 + i * 14}
          y={112 - h / 2}
          width={5}
          height={h}
          rx={2.5}
          fill={i % 3 === 0 ? s : f}
          className="eq"
          style={{ animationDelay: `${(i % 8) * 110}ms` }}
        />
      ))}
    </svg>
  )
}

function DialFan({ s, f }: Hue) {
  const targets = [30, 62, 94, 126, 158, 190]
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden>
      {targets.map((y, i) => (
        <path
          key={i}
          d={`M 70 112 C 180 112, 220 ${y}, 330 ${y}`}
          fill="none"
          stroke={i % 2 ? f : s}
          strokeWidth={1.2}
          pathLength={1}
          className="draw"
          style={{ "--dd": `${i * 110}ms` } as React.CSSProperties}
        />
      ))}
      <circle cx={70} cy={112} r={7} fill="none" stroke={s} strokeWidth={1.5} />
      <circle cx={70} cy={112} r={2.5} fill={s} />
      {targets.map((y, i) => (
        <circle key={i} cx={330} cy={y} r={3.5} fill="none" stroke={i % 2 ? s : f} strokeWidth={1.2} />
      ))}
    </svg>
  )
}

function StreakChart({ s, f }: Hue) {
  const bars = [30, 42, 38, 56, 50, 68, 62, 84, 78, 96]
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden>
      {bars.map((h, i) => (
        <rect key={i} x={60 + i * 30} y={170 - h} width={12} height={h} rx={3} fill={i === bars.length - 1 ? s : f} />
      ))}
      <path
        d={`M 66 ${170 - 30} ${bars.map((h, i) => `L ${66 + i * 30} ${168 - h}`).join(" ")}`}
        fill="none"
        stroke={s}
        strokeWidth={1.2}
        pathLength={1}
        className="draw"
      />
    </svg>
  )
}

function Journal({ s, f }: Hue) {
  const lines = [
    [64, 250], [64, 300], [64, 210], [64, 280], [64, 180],
  ] as const
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden>
      <rect x={44} y={36} width={312} height={152} rx={10} fill="none" stroke={s} strokeWidth={1.4} />
      <circle cx={62} cy={52} r={3} fill={f} />
      <circle cx={74} cy={52} r={3} fill={f} />
      <circle cx={86} cy={52} r={3} fill={f} />
      <line x1={44} y1={66} x2={356} y2={66} stroke={f} strokeWidth={1} />
      {lines.map(([x, w], i) => (
        <line
          key={i}
          x1={x}
          y1={90 + i * 20}
          x2={x + w}
          y2={90 + i * 20}
          stroke={i === 0 ? s : f}
          strokeWidth={4}
          strokeLinecap="round"
          pathLength={1}
          className="draw"
          style={{ "--dd": `${i * 130}ms` } as React.CSSProperties}
        />
      ))}
    </svg>
  )
}

function FlightPath({ s, f }: Hue) {
  const waypoints = [
    [60, 170], [140, 90], [230, 140], [330, 56],
  ] as const
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden>
      <path d="M 60 170 Q 100 110 140 90 T 230 140 T 330 56" fill="none" stroke={s} strokeWidth={1.2} strokeDasharray="5 6" className="march" />
      {waypoints.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === waypoints.length - 1 ? 8 : 5} fill="none" stroke={i === waypoints.length - 1 ? s : f} strokeWidth={1.3} />
          <circle cx={x} cy={y} r={1.8} fill={s} />
        </g>
      ))}
    </svg>
  )
}

function Query({ s, f }: Hue) {
  // NL question in, result rows out
  const rows = [200, 260, 170, 230]
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden>
      <rect x={44} y={38} width={312} height={34} rx={17} fill="none" stroke={s} strokeWidth={1.4} />
      <line
        x1={62}
        y1={55}
        x2={220}
        y2={55}
        stroke={f}
        strokeWidth={4}
        strokeLinecap="round"
        pathLength={1}
        className="draw"
      />
      <circle cx={336} cy={55} r={6} fill="none" stroke={s} strokeWidth={1.4} />
      <line x1={340} y1={60} x2={346} y2={66} stroke={s} strokeWidth={1.4} strokeLinecap="round" />
      {rows.map((w, i) => (
        <line
          key={i}
          x1={64}
          y1={102 + i * 24}
          x2={64 + w}
          y2={102 + i * 24}
          stroke={i === 0 ? s : f}
          strokeWidth={5}
          strokeLinecap="round"
          pathLength={1}
          className="draw"
          style={{ "--dd": `${(i + 1) * 130}ms` } as React.CSSProperties}
        />
      ))}
    </svg>
  )
}

function Chunks({ s, f }: Hue) {
  // chunks in, ranked passages out
  const ranks = [130, 104, 80, 56]
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden>
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`${r}${c}`}
            x={58 + c * 28}
            y={62 + r * 28}
            width={20}
            height={20}
            rx={4}
            fill="none"
            stroke={(r + c) % 3 === 0 ? s : f}
            strokeWidth={1.3}
            pathLength={1}
            className="draw"
            style={{ "--dd": `${(r * 3 + c) * 60}ms` } as React.CSSProperties}
          />
        )),
      )}
      <path d="M 158 112 H 208" fill="none" stroke={s} strokeWidth={1.3} strokeDasharray="4 5" className="march" />
      <path d="M 202 106 l 8 6 -8 6" fill="none" stroke={s} strokeWidth={1.3} />
      {ranks.map((w, i) => (
        <line
          key={i}
          x1={232}
          y1={78 + i * 26}
          x2={232 + w}
          y2={78 + i * 26}
          stroke={i === 0 ? s : f}
          strokeWidth={6}
          strokeLinecap="round"
          pathLength={1}
          className="draw"
          style={{ "--dd": `${500 + i * 120}ms` } as React.CSSProperties}
        />
      ))}
    </svg>
  )
}

const covers: Record<string, { Cover: (h: Hue) => JSX.Element; hue: Hue }> = {
  rag: { Cover: Chunks, hue: HUES.grape },
  alvis: { Cover: Waveform, hue: HUES.grape },
  bos: { Cover: Query, hue: HUES.signal },
  sipdialler: { Cover: DialFan, hue: HUES.mint },
  veer: { Cover: StreakChart, hue: HUES.mint },
  summariser: { Cover: Journal, hue: HUES.honey },
  dronops: { Cover: FlightPath, hue: HUES.signal },
}

export default function ProjectCover({ slug }: { slug: string }) {
  const entry = covers[slug]
  if (!entry) return null
  const { Cover, hue } = entry
  return (
    <div
      className="h-full w-full"
      style={{ background: `radial-gradient(ellipse at center, ${hue.glow}, transparent 70%)` }}
    >
      <Cover {...hue} />
    </div>
  )
}
