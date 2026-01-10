export default function RiskRulesSummary() {
  return (
    <div className="my-8 rounded-lg border-2 border-red-500/50 bg-red-950/20 p-6">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
          <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-red-400">Non-Negotiable Risk Rules</h3>
      </div>
      <div className="space-y-3 text-base leading-relaxed">
        <div className="flex items-start gap-3">
          <span className="mt-1 text-red-400">•</span>
          <p>
            <strong className="text-red-300">Max risk per trade:</strong> 1-2% of account equity. Never more. One bad
            trade cannot hurt you.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="mt-1 text-red-400">•</span>
          <p>
            <strong className="text-red-300">Max trades per session:</strong> 3-5 trades maximum. More trades = more
            ways to make mistakes.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="mt-1 text-red-400">•</span>
          <p>
            <strong className="text-red-300">Max daily loss:</strong> 2-3% of account or 2-3x your average risk. Hit
            this limit? You're done for the day.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="mt-1 text-red-400">•</span>
          <p>
            <strong className="text-red-300">Mandatory stop placement logic:</strong> Every trade has a hard stop based
            on structure or ATR, placed before entry. No mental stops.
          </p>
        </div>
      </div>
      <div className="mt-6 rounded border border-red-500/30 bg-red-950/30 p-4">
        <p className="text-sm font-medium text-red-300">
          These rules aren't suggestions. They're physics. Break them, and you will lose your account. It's not if—it's
          when.
        </p>
      </div>
    </div>
  )
}
