export function DeltaDivergenceDiagram() {
  return (
    <div className="my-6 p-4 bg-card border border-border rounded-lg">
      <h3 className="text-sm font-semibold text-foreground mb-4">Delta Divergence at Highs</h3>
      <svg viewBox="0 0 600 300" className="w-full h-auto">
        {/* Grid */}
        <line
          x1="50"
          y1="250"
          x2="550"
          y2="250"
          stroke="currentColor"
          strokeWidth="1"
          className="text-muted-foreground"
        />
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="250"
          stroke="currentColor"
          strokeWidth="1"
          className="text-muted-foreground"
        />

        {/* Price line - making higher highs */}
        <path d="M 100 200 L 200 150 L 300 120 L 400 100 L 500 80" stroke="#3b82f6" strokeWidth="3" fill="none" />
        <circle cx="200" cy="150" r="4" fill="#3b82f6" />
        <circle cx="300" cy="120" r="4" fill="#3b82f6" />
        <circle cx="400" cy="100" r="4" fill="#3b82f6" />
        <circle cx="500" cy="80" r="4" fill="#3b82f6" />

        {/* Price labels */}
        <text x="460" y="70" className="text-xs fill-blue-500 font-medium">
          Price Higher High
        </text>
        <path d="M 460 75 L 490 80" stroke="#3b82f6" strokeWidth="1" />

        {/* Delta line - declining */}
        <path
          d="M 100 220 L 200 200 L 300 210 L 400 220 L 500 230"
          stroke="#22c55e"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5,5"
        />
        <circle cx="200" cy="200" r="4" fill="#22c55e" />
        <circle cx="300" cy="210" r="4" fill="#22c55e" />
        <circle cx="400" cy="220" r="4" fill="#22c55e" />
        <circle cx="500" cy="230" r="4" fill="#22c55e" />

        {/* Delta labels */}
        <text x="440" y="240" className="text-xs fill-primary font-medium">
          Cumulative Delta Lower
        </text>
        <path d="M 490 235 L 500 230" stroke="#22c55e" strokeWidth="1" />

        {/* Warning annotation */}
        <rect x="150" y="260" width="300" height="30" fill="#ef4444" opacity="0.1" rx="4" />
        <text x="160" y="278" className="text-xs fill-red-500 font-semibold">
          ⚠ Divergence = Weak Rally
        </text>
        <text x="340" y="278" className="text-xs fill-muted-foreground">
          - Potential Reversal
        </text>
      </svg>
      <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
        When price makes new highs but cumulative delta fails to confirm, it signals buying exhaustion. The rally lacks
        conviction and may reverse soon.
      </p>
    </div>
  )
}
