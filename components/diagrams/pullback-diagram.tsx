export function PullbackDiagram() {
  return (
    <div className="my-6 p-4 bg-card border border-border rounded-lg">
      <h3 className="text-sm font-semibold text-foreground mb-4">Pullback Entry: Joining Trend After Expansion</h3>
      <svg viewBox="0 0 600 320" className="w-full h-auto">
        {/* Trend leg up */}
        <path
          d="M 80 250 Q 120 200 160 180 Q 200 160 240 100"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-primary"
        />
        <text x="130" y="140" className="text-xs fill-primary font-medium">
          Impulse Leg
        </text>

        {/* Pullback zone */}
        <rect
          x="240"
          y="140"
          width="100"
          height="60"
          fill="#f59e0b"
          opacity="0.2"
          stroke="#f59e0b"
          strokeWidth="1"
          strokeDasharray="4,4"
        />
        <text x="250" y="175" className="text-xs fill-amber-500 font-medium">
          Pullback Zone
        </text>

        {/* Pullback price action */}
        <path
          d="M 240 100 Q 260 120 280 150 Q 300 170 320 165"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-foreground"
        />

        {/* Entry area marker */}
        <circle cx="320" cy="165" r="8" fill="#22c55e" opacity="0.8" />
        <text x="335" y="168" className="text-xs fill-green-500 font-bold">
          ENTRY
        </text>

        {/* Invalidation level */}
        <line x1="240" y1="200" x2="400" y2="200" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" />
        <text x="245" y="218" className="text-xs fill-red-500 font-medium">
          Invalidation (stop below)
        </text>

        {/* Continuation move */}
        <path
          d="M 320 165 Q 360 140 400 100 Q 440 60 500 40"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
          strokeDasharray="4,4"
        />

        {/* Target area */}
        <circle cx="500" cy="40" r="6" fill="none" stroke="#22c55e" strokeWidth="2" />
        <text x="460" y="35" className="text-xs fill-green-500 font-medium">
          Target
        </text>

        {/* Pullback types annotation */}
        <rect x="400" y="130" width="180" height="80" fill="none" stroke="#6b7280" strokeWidth="1" rx="4" />
        <text x="410" y="150" className="text-xs fill-foreground font-semibold">
          Pullback Quality:
        </text>
        <text x="410" y="168" className="text-xs fill-muted-foreground">
          • Shallow (38-50%) = strong
        </text>
        <text x="410" y="184" className="text-xs fill-muted-foreground">
          • Deep (61-78%) = weaker
        </text>
        <text x="410" y="200" className="text-xs fill-muted-foreground">
          • Speed: Slow grind = healthy
        </text>

        {/* Key levels */}
        <text x="80" y="280" className="text-xs fill-muted-foreground">
          Entry: Structure reclaim or swing failure
        </text>
        <text x="80" y="298" className="text-xs fill-muted-foreground">
          Stop: Below pullback low | Target: Prior high or measured move
        </text>
      </svg>
      <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
        Enter pullbacks after an impulse leg shows trend direction. Quality pullbacks are shallow, slow, and hold
        structure. Deep, fast pullbacks often signal trend exhaustion.
      </p>
    </div>
  )
}
