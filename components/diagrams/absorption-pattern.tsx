export function AbsorptionPatternDiagram() {
  return (
    <div className="my-6 p-4 bg-card border border-border rounded-lg">
      <h3 className="text-sm font-semibold text-foreground mb-4">Absorption at Support Level</h3>
      <svg viewBox="0 0 600 300" className="w-full h-auto">
        {/* Support level */}
        <line x1="50" y1="200" x2="550" y2="200" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5" />
        <text x="460" y="195" className="text-xs fill-primary font-medium">
          Support 4020
        </text>

        {/* Price movement - coming down */}
        <path
          d="M 100 80 Q 200 100 250 150 Q 300 180 350 195"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-foreground"
        />

        {/* Aggressive sellers (red arrows pointing down) */}
        <path d="M 320 160 L 340 190" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)" />
        <text x="250" y="155" className="text-xs fill-red-500 font-medium">
          Aggressive Selling
        </text>

        {/* Large buy orders absorbing (green block at support) */}
        <rect x="350" y="190" width="120" height="20" fill="#22c55e" opacity="0.7" />
        <text x="360" y="205" className="text-xs fill-white font-semibold">
          5000+ contracts
        </text>

        {/* Price reversal */}
        <path
          d="M 350 195 Q 400 190 450 150 Q 480 120 520 90"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-primary"
          strokeDasharray="4,4"
        />
        <text x="480" y="110" className="text-xs fill-primary font-medium">
          Reversal
        </text>

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrowRed"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
          </marker>
        </defs>

        {/* Annotation */}
        <text x="200" y="250" className="text-xs fill-muted-foreground">
          High volume, minimal price progress =
        </text>
        <text x="200" y="270" className="text-xs fill-muted-foreground font-semibold">
          Large player defending the level
        </text>
      </svg>
      <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
        Absorption occurs when limit orders at a level "absorb" aggressive orders without much price movement. This
        signals strong defense and often precedes reversals.
      </p>
    </div>
  )
}
