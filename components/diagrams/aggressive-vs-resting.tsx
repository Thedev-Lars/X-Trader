export function AggressiveVsRestingDiagram() {
  return (
    <div className="my-6 p-4 bg-card border border-border rounded-lg">
      <h3 className="text-sm font-semibold text-foreground mb-4">Aggressive Buyers vs Resting Sellers</h3>
      <svg viewBox="0 0 600 300" className="w-full h-auto">
        {/* Price axis */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="250"
          stroke="currentColor"
          strokeWidth="2"
          className="text-muted-foreground"
        />

        {/* Price levels */}
        <text x="30" y="80" className="text-xs fill-muted-foreground">
          4025
        </text>
        <text x="30" y="130" className="text-xs fill-muted-foreground">
          4024
        </text>
        <text x="30" y="180" className="text-xs fill-muted-foreground">
          4023
        </text>
        <text x="30" y="230" className="text-xs fill-muted-foreground">
          4022
        </text>

        {/* Resting sell orders (red, left side) */}
        <rect x="60" y="70" width="80" height="20" fill="#ef4444" opacity="0.6" />
        <text x="100" y="85" className="text-xs fill-white font-medium">
          500 @ Ask
        </text>

        <rect x="60" y="120" width="100" height="20" fill="#ef4444" opacity="0.6" />
        <text x="110" y="135" className="text-xs fill-white font-medium">
          750 @ Ask
        </text>

        {/* Aggressive buy orders (green, arrows pointing up/right) */}
        <path d="M 200 200 L 150 150" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrowGreen)" />
        <text x="210" y="205" className="text-xs fill-primary font-medium">
          Market Buy
        </text>
        <text x="210" y="220" className="text-xs fill-muted-foreground">
          300 contracts
        </text>

        <path d="M 250 220 L 150 170" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrowGreen)" />
        <text x="260" y="225" className="text-xs fill-primary font-medium">
          Market Buy
        </text>
        <text x="260" y="240" className="text-xs fill-muted-foreground">
          200 contracts
        </text>

        {/* Arrow markers */}
        <defs>
          <marker
            id="arrowGreen"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#22c55e" />
          </marker>
        </defs>

        {/* Labels */}
        <text x="300" y="30" className="text-sm fill-foreground font-semibold">
          Price moves UP when
        </text>
        <text x="300" y="50" className="text-xs fill-muted-foreground">
          aggressive buyers overwhelm
        </text>
        <text x="300" y="65" className="text-xs fill-muted-foreground">
          resting sell orders
        </text>
      </svg>
      <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
        Market orders (aggressive) consume liquidity from limit orders (resting). When buyers are more aggressive than
        available sellers, price rises.
      </p>
    </div>
  )
}
