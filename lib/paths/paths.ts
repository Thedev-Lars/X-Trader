import type { LearningPath } from "../map/types"

export const learningPaths: LearningPath[] = [
  {
    id: "foundations",
    title: "Start Here: Futures Foundations",
    description: "Build correct habits from day one",
    nodeIds: [
      "futures-basics",
      "tick-values",
      "margin-leverage",
      "session-timing",
      "market-structure",
      "risk-fundamentals",
      "stop-placement",
      "position-sizing",
      "diversification-position-sizing",
      "stop-loss-risk-reward",
      "trading-psychology-intro",
    ],
  },
  {
    id: "execution",
    title: "Execution: From Setup to Management",
    description: "Execution-focused path",
    nodeIds: [
      "breakout-entries",
      "pullback-entries",
      "trade-management",
      "playbook-building",
      "risk-management-tools",
      "journaling-basics",
      "journaling-accountability",
    ],
  },
  {
    id: "order-flow",
    title: "Order Flow Mastery",
    description: "Master real-time supply & demand analysis",
    nodeIds: ["order-flow-basics", "absorption-rejection", "delta-imbalance", "when-not-order-flow"],
  },
  {
    id: "risk-management",
    title: "Risk Management Deep Dive",
    description: "Protect your capital systematically",
    nodeIds: [
      "risk-fundamentals",
      "position-sizing",
      "diversification-position-sizing",
      "stop-loss-risk-reward",
      "risk-management-tools",
      "drawdown-recovery",
    ],
  },
  {
    id: "trading-psychology",
    title: "Trading Psychology & Journaling",
    description: "Psychology mastery",
    nodeIds: [
      "trading-psychology-intro",
      "mindset-discipline",
      "overtrading-revenge",
      "revenge-trading",
      "drawdown-recovery",
      "advanced-review",
    ],
  },
]

export function getPathById(id: string): LearningPath | undefined {
  return learningPaths.find((p) => p.id === id)
}
