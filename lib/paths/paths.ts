import type { LearningPath } from "../map/types"

export const learningPaths: LearningPath[] = [
  {
    id: "foundations",
    title: "Start Here: Futures Foundations",
    description: "Build correct habits from day one",
    nodeIds: [
      "futures-basics",
      "tick-values",
      "risk-fundamentals",
      "market-structure",
      "trading-psychology-intro",
      "stop-placement",
      "position-sizing",
    ],
  },
  {
    id: "execution",
    title: "Execution: From Setup to Management",
    description: "Execution-focused path",
    nodeIds: [
      "position-sizing",
      "stop-placement",
      "breakout-entries",
      "pullback-entries",
      "trade-management",
      "order-flow-basics",
      "playbook-building",
      "advanced-review",
    ],
  },
  {
    id: "order-flow",
    title: "Order Flow Mastery",
    description: "Master real-time supply & demand analysis",
    nodeIds: ["trade-management", "order-flow-fundamentals", "footprint-delta", "order-flow-strategies"],
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
      "journaling-basics",
      "journaling-accountability",
      "overtrading-revenge",
      "revenge-trading",
      "advanced-review",
    ],
  },
]

export function getPathById(id: string): LearningPath | undefined {
  return learningPaths.find((p) => p.id === id)
}
