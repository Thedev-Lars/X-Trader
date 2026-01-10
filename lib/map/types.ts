export type NodeLevel = "Beginner" | "Intermediate" | "Advanced"

export type NodeTag = "Execution" | "Risk" | "Psychology" | "Structure" | "Journaling" | "Order Flow"

export type Phase = "foundations" | "execution" | "order-flow" | "mastery"

export interface PhaseInfo {
  id: Phase
  title: string
  description: string
}

export const phases: PhaseInfo[] = [
  {
    id: "foundations",
    title: "Foundations (Survival)",
    description: "Protect capital first. Learn what actually moves futures price.",
  },
  {
    id: "execution",
    title: "Execution (Consistency)",
    description: "Take fewer, higher-quality trades with a repeatable process.",
  },
  {
    id: "order-flow",
    title: "Order Flow (Advanced Execution)",
    description: "Read aggressive vs passive participation to refine entries.",
  },
  {
    id: "mastery",
    title: "Mastery (Self-Control)",
    description: "Reduce emotional mistakes. Trade the plan, not the moment.",
  },
]

export interface MapNode {
  id: string
  title: string
  slug: string
  level: NodeLevel
  tags: NodeTag[]
  summary: string
  prereqs: string[]
  timeMinutes: number
  pathIds: string[]
  position: { x: number; y: number }
  phase: Phase // Added phase field
}

export interface MapEdge {
  id: string
  source: string
  target: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface LessonSection {
  heading: string
  content: string[]
}

export interface Callout {
  type: "mistake" | "tip"
  content: string
}

export interface Lesson {
  title: string
  overview: string
  objectives: string[]
  sections: LessonSection[]
  whenNotToTrade: string[]
  diagram: string
  takeaways: string[]
  callouts: Callout[]
  quiz: QuizQuestion[]
  diagrams?: string[] // Optional array of diagram component names
  isRiskCritical?: boolean // Optional flag for risk-critical lessons
}

export interface LearningPath {
  id: string
  title: string
  description: string
  nodeIds: string[]
}
