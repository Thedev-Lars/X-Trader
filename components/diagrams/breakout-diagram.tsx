export function BreakoutDiagram() {
  return (
    <div className="my-6 p-4 bg-card border border-border rounded-lg">
      <h3 className="text-sm font-semibold text-foreground mb-4">
        Breakout Structure: Compression → Expansion → Acceptance
      </h3>
      <svg viewBox="0 0 600 320" className="w-full h-auto">
        {/* Range box */}
        <rect
          x="80"
          y="100"
          width="180"
          height="80"
          fill="none"
          stroke="#6b7280"
          strokeWidth="2"
          strokeDasharray="4,4"
        />
        <text x="130" y="145" className="text-xs fill-muted-foreground font-medium">
          Compression Zone
        </text>

        {/* Resistance level */}
        <line x1="50" y1="100" x2="400" y2="100" stroke="#ef4444" strokeWidth="2" />
        <text x="55" y="93" className="text-xs fill-red-500 font-medium">
          Resistance 4520
        </text>

        {/* Support level */}
        <line x1="50" y1="180" x2="260" y2="180" stroke="#22c55e" strokeWidth="2" />
        <text x="55" y="197" className="text-xs fill-green-500 font-medium">
          Support 4500
        </text>

        {/* Price action in range */}
        <path
          d="M 90 140 L 120 160 L 150 120 L 180 150 L 210 130 L 240 140"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-foreground"
        />

        {/* Breakout candle */}
        <rect x="270" y="85" width="12" height="35" fill="#22c55e" />
        <line x1="276" y1="120" x2="276" y2="140" stroke="#22c55e" strokeWidth="2" />
        <text x="290" y="108" className="text-xs fill-primary font-bold">
          TRIGGER
        </text>

        {/* Acceptance zone */}
        <rect x="300" y="60" width="140" height="40" fill="#22c55e" opacity="0.2" stroke="#22c55e" strokeWidth="1" />
        <text x="330" y="82" className="text-xs fill-green-500 font-medium">
          Acceptance Zone
        </text>

        {/* Price holding above */}
        <path
          d="M 282 90 L 320 75 L 360 80 L 400 70 L 440 65"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
        />

        {/* Invalid zone label */}
        <rect x="300" y="105" width="80" height="25" fill="#ef4444" opacity="0.2" />
        <text x="305" y="122" className="text-xs fill-red-500 font-medium">
          INVALID
        </text>
        <text x="305" y="150" className="text-xs fill-muted-foreground">
          If price reclaims
        </text>
        <text x="305" y="162" className="text-xs fill-muted-foreground">
          back below range
        </text>

        {/* Annotations */}
        <text x="80" y="230" className="text-xs fill-muted-foreground">
          1. Wait for compression (tight range)
        </text>
        <text x="80" y="250" className="text-xs fill-muted-foreground">
          2. Trigger = close above resistance with volume
        </text>
        <text x="80" y="270" className="text-xs fill-muted-foreground">
          3. Valid = price holds above (acceptance)
        </text>
        <text x="80" y="290" className="text-xs fill-muted-foreground">
          4. Invalid = price falls back into range
        </text>
      </svg>
      <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
        Valid breakouts show compression before expansion, a clear trigger through the level, and acceptance (holding
        above). If price quickly re-enters the range, the breakout has failed.
      </p>
    </div>
  )
}
