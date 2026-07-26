// Monochrome generative line-art covers for projects without live screenshots.
// One motif per project, keyed by slug.

const S = "rgba(250,250,250,0.5)"
const F = "rgba(250,250,250,0.14)"

function Waveform() {
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
          fill={i % 3 === 0 ? S : F}
          className="eq"
          style={{ animationDelay: `${(i % 8) * 110}ms` }}
        />
      ))}
    </svg>
  )
}

function DialFan() {
  const targets = [30, 62, 94, 126, 158, 190]
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden>
      {targets.map((y, i) => (
        <path
          key={i}
          d={`M 70 112 C 180 112, 220 ${y}, 330 ${y}`}
          fill="none"
          stroke={i % 2 ? F : S}
          strokeWidth={1.2}
          pathLength={1}
          className="draw"
          style={{ "--dd": `${i * 110}ms` } as React.CSSProperties}
        />
      ))}
      <circle cx={70} cy={112} r={7} fill="none" stroke={S} strokeWidth={1.5} />
      <circle cx={70} cy={112} r={2.5} fill={S} />
      {targets.map((y, i) => (
        <circle key={i} cx={330} cy={y} r={3.5} fill="none" stroke={i % 2 ? S : F} strokeWidth={1.2} />
      ))}
    </svg>
  )
}

function StreakChart() {
  const bars = [30, 42, 38, 56, 50, 68, 62, 84, 78, 96]
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden>
      {bars.map((h, i) => (
        <rect key={i} x={60 + i * 30} y={170 - h} width={12} height={h} rx={3} fill={i === bars.length - 1 ? S : F} />
      ))}
      <path
        d={`M 66 ${170 - 30} ${bars.map((h, i) => `L ${66 + i * 30} ${168 - h}`).join(" ")}`}
        fill="none"
        stroke={S}
        strokeWidth={1.2}
        pathLength={1}
        className="draw"
      />
    </svg>
  )
}

function Journal() {
  const lines = [
    [64, 250], [64, 300], [64, 210], [64, 280], [64, 180],
  ] as const
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden>
      <rect x={44} y={36} width={312} height={152} rx={10} fill="none" stroke={S} strokeWidth={1.4} />
      <circle cx={62} cy={52} r={3} fill={F} />
      <circle cx={74} cy={52} r={3} fill={F} />
      <circle cx={86} cy={52} r={3} fill={F} />
      <line x1={44} y1={66} x2={356} y2={66} stroke={F} strokeWidth={1} />
      {lines.map(([x, w], i) => (
        <line
          key={i}
          x1={x}
          y1={90 + i * 20}
          x2={x + w}
          y2={90 + i * 20}
          stroke={i === 0 ? S : F}
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

function FlightPath() {
  const waypoints = [
    [60, 170], [140, 90], [230, 140], [330, 56],
  ] as const
  return (
    <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden>
      <path d="M 60 170 Q 100 110 140 90 T 230 140 T 330 56" fill="none" stroke={S} strokeWidth={1.2} strokeDasharray="5 6" className="march" />
      {waypoints.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === waypoints.length - 1 ? 8 : 5} fill="none" stroke={i === waypoints.length - 1 ? S : F} strokeWidth={1.3} />
          <circle cx={x} cy={y} r={1.8} fill={S} />
        </g>
      ))}
    </svg>
  )
}

const covers: Record<string, () => JSX.Element> = {
  alvis: Waveform,
  sipdialler: DialFan,
  veer: StreakChart,
  summariser: Journal,
  dronops: FlightPath,
}

export default function ProjectCover({ slug }: { slug: string }) {
  const Cover = covers[slug]
  if (!Cover) return null
  return (
    <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(250,250,250,0.05),transparent_70%)]">
      <Cover />
    </div>
  )
}
