export function TradeManagementDiagram() {
  return (
    <div className="my-6 p-4 bg-card border border-border rounded-lg">
      <h3 className="text-sm font-semibold text-foreground mb-4">Trade Management: Entry → Partial → Trail → Exit</h3>
      <svg viewBox="0 0 600 320" className="w-full h-auto">
        {/* Entry point */}
        <circle cx="80" cy="220" r="10" fill="#22c55e" />
        <text x="65" y="248" className="text-xs fill-green-500 font-bold">
          ENTRY
        </text>
        <text x="55" y="262" className="text-xs fill-muted-foreground">
          4500.00
        </text>

        {/* Initial stop */}
        <line x1="60" y1="260" x2="120" y2="260" stroke="#ef4444" strokeWidth="3" />
        <text x="125" y="264" className="text-xs fill-red-500 font-medium">
          Initial Stop (4492)
        </text>
        <text x="125" y="278" className="text-xs fill-muted-foreground">
          -8 pts = 1R
        </text>

        {/* Price path up */}
        <path
          d="M 80 220 Q 140 180 180 160 Q 220 140 260 120"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
        />

        {/* 1R level - partial */}
        <line x1="220" y1="160" x2="320" y2="160" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4" />
        <circle cx="260" cy="120" r="8" fill="#f59e0b" />
        <text x="275" y="125" className="text-xs fill-amber-500 font-bold">
          1R PARTIAL
        </text>
        <text x="275" y="140" className="text-xs fill-muted-foreground">
          50% off @ 4508
        </text>

        {/* Move stop to breakeven */}
        <line x1="200" y1="220" x2="320" y2="220" stroke="#22c55e" strokeWidth="2" strokeDasharray="4,4" />
        <text x="325" y="224" className="text-xs fill-green-500 font-medium">
          Stop → B/E
        </text>

        {/* Continuation */}
        <path
          d="M 260 120 Q 320 90 380 70 Q 440 50 500 40"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
        />

        {/* Trail stop steps */}
        <line x1="340" y1="100" x2="400" y2="100" stroke="#22c55e" strokeWidth="2" strokeDasharray="2,2" />
        <text x="405" y="104" className="text-xs fill-green-500">
          Trail 1
        </text>

        <line x1="420" y1="70" x2="480" y2="70" stroke="#22c55e" strokeWidth="2" strokeDasharray="2,2" />
        <text x="485" y="74" className="text-xs fill-green-500">
          Trail 2
        </text>

        {/* Runner exit */}
        <circle cx="500" cy="40" r="10" fill="#22c55e" />
        <text x="470" y="25" className="text-xs fill-green-500 font-bold">
          RUNNER EXIT
        </text>
        <text x="470" y="60" className="text-xs fill-muted-foreground">
          4524 (+3R)
        </text>

        {/* Management rules box */}
        <rect x="80" y="290" width="500" height="25" fill="none" stroke="#6b7280" strokeWidth="1" rx="4" />
        <text x="90" y="307" className="text-xs fill-muted-foreground">
          Rule: 50% off at 1R → Move stop to B/E → Trail below structure on runner
        </text>
      </svg>
      <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
        Systematic trade management: Take partials at 1R to lock profit, move stop to breakeven to eliminate risk, then
        trail the runner below swing lows until stopped out or target hit.
      </p>
    </div>
  )
}
