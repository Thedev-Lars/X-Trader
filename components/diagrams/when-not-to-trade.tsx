export function WhenNotToTradeDiagram() {
  return (
    <div className="my-6 p-4 bg-card border border-border rounded-lg">
      <h3 className="text-sm font-semibold text-foreground mb-4">Conditions Where Order Flow Fails</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Low Liquidity */}
        <div className="p-4 bg-muted/50 rounded-lg border border-border">
          <div className="flex items-center justify-center mb-3">
            <svg viewBox="0 0 80 80" className="w-16 h-16">
              {/* Thin order book representation */}
              <rect x="10" y="20" width="25" height="8" fill="#22c55e" opacity="0.3" />
              <rect x="10" y="32" width="15" height="8" fill="#22c55e" opacity="0.3" />
              <rect x="10" y="44" width="10" height="8" fill="#22c55e" opacity="0.3" />
              <rect x="45" y="20" width="20" height="8" fill="#ef4444" opacity="0.3" />
              <rect x="45" y="32" width="12" height="8" fill="#ef4444" opacity="0.3" />
              <rect x="45" y="44" width="8" height="8" fill="#ef4444" opacity="0.3" />
              {/* Gap in middle */}
              <text x="40" y="65" textAnchor="middle" className="text-[8px] fill-muted-foreground">
                Thin Book
              </text>
            </svg>
          </div>
          <h4 className="text-sm font-semibold text-foreground mb-1 text-center">Low Liquidity</h4>
          <p className="text-xs text-muted-foreground text-center">Overnight, pre-market, holidays</p>
          <div className="mt-2 px-2 py-1 bg-amber-500/20 rounded text-center">
            <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">AVOID</span>
          </div>
        </div>

        {/* News Spike */}
        <div className="p-4 bg-muted/50 rounded-lg border border-border">
          <div className="flex items-center justify-center mb-3">
            <svg viewBox="0 0 80 80" className="w-16 h-16">
              {/* Chaotic spike pattern */}
              <path
                d="M 10 50 L 20 48 L 25 52 L 30 45 L 35 15 L 40 60 L 45 20 L 50 55 L 55 40 L 60 42 L 70 45"
                stroke="#ef4444"
                strokeWidth="2"
                fill="none"
              />
              {/* Exclamation mark */}
              <circle cx="35" cy="8" r="6" fill="#ef4444" opacity="0.3" />
              <text x="35" y="12" textAnchor="middle" className="text-[10px] fill-red-500 font-bold">
                !
              </text>
              <text x="40" y="75" textAnchor="middle" className="text-[8px] fill-muted-foreground">
                FOMC / NFP
              </text>
            </svg>
          </div>
          <h4 className="text-sm font-semibold text-foreground mb-1 text-center">News Events</h4>
          <p className="text-xs text-muted-foreground text-center">FOMC, NFP, CPI releases</p>
          <div className="mt-2 px-2 py-1 bg-red-500/20 rounded text-center">
            <span className="text-xs text-red-600 dark:text-red-400 font-medium">HIGH RISK</span>
          </div>
        </div>

        {/* Chop Zone */}
        <div className="p-4 bg-muted/50 rounded-lg border border-border">
          <div className="flex items-center justify-center mb-3">
            <svg viewBox="0 0 80 80" className="w-16 h-16">
              {/* Sideways choppy pattern */}
              <path
                d="M 10 40 L 18 35 L 26 45 L 34 38 L 42 42 L 50 36 L 58 44 L 66 39 L 70 41"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-muted-foreground"
              />
              {/* Range boundaries */}
              <line
                x1="10"
                y1="30"
                x2="70"
                y2="30"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3,3"
                className="text-muted-foreground/50"
              />
              <line
                x1="10"
                y1="50"
                x2="70"
                y2="50"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3,3"
                className="text-muted-foreground/50"
              />
              <text x="40" y="75" textAnchor="middle" className="text-[8px] fill-muted-foreground">
                No Direction
              </text>
            </svg>
          </div>
          <h4 className="text-sm font-semibold text-foreground mb-1 text-center">Chop Zones</h4>
          <p className="text-xs text-muted-foreground text-center">Tight ranges, no follow-through</p>
          <div className="mt-2 px-2 py-1 bg-amber-500/20 rounded text-center">
            <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">FALSE SIGNALS</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-4 leading-relaxed text-center">
        Order flow analysis requires sufficient liquidity, stable conditions, and directional bias. Without these,
        signals become noise.
      </p>
    </div>
  )
}
