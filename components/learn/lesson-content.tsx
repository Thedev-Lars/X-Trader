"use client"

import type React from "react"
import { lazy, Suspense } from "react"
import Link from "next/link"
import type { MapNode, Lesson } from "@/lib/map/types"
import { TagPills } from "@/components/tag-pills"
import { CalloutBox } from "@/components/callout-box"
import { QuizBlock } from "@/components/quiz-block"
import { Button } from "@/components/ui/button"
import RiskRulesSummary from "@/components/risk-rules-summary"
import { ArrowLeft, Check, Clock } from "lucide-react"

const AggressiveVsRestingDiagram = lazy(() =>
  import("@/components/diagrams/aggressive-vs-resting").then((m) => ({ default: m.AggressiveVsRestingDiagram })),
)
const AbsorptionPatternDiagram = lazy(() =>
  import("@/components/diagrams/absorption-pattern").then((m) => ({ default: m.AbsorptionPatternDiagram })),
)
const DeltaDivergenceDiagram = lazy(() =>
  import("@/components/diagrams/delta-divergence").then((m) => ({ default: m.DeltaDivergenceDiagram })),
)
const WhenNotToTradeDiagram = lazy(() =>
  import("@/components/diagrams/when-not-to-trade").then((m) => ({ default: m.WhenNotToTradeDiagram })),
)
const BreakoutDiagram = lazy(() =>
  import("@/components/diagrams/breakout-diagram").then((m) => ({ default: m.BreakoutDiagram })),
)
const PullbackDiagram = lazy(() =>
  import("@/components/diagrams/pullback-diagram").then((m) => ({ default: m.PullbackDiagram })),
)
const TradeManagementDiagram = lazy(() =>
  import("@/components/diagrams/trade-management-diagram").then((m) => ({ default: m.TradeManagementDiagram })),
)

const diagramComponents: Record<string, React.ComponentType> = {
  AggressiveVsRestingDiagram,
  AbsorptionPatternDiagram,
  DeltaDivergenceDiagram,
  WhenNotToTradeDiagram,
  BreakoutDiagram,
  PullbackDiagram,
  TradeManagementDiagram,
}

interface LessonContentProps {
  node: MapNode
  lesson: Lesson
  completed: boolean
  onQuizComplete: () => void
  showBackToMap?: boolean
  compact?: boolean
}

export function LessonContent({
  node,
  lesson,
  completed,
  onQuizComplete,
  showBackToMap = true,
  compact = false,
}: LessonContentProps) {
  const isRiskCritical = lesson.isRiskCritical || false

  return (
    <div className={compact ? "space-y-6" : "space-y-8"}>
      <header className={compact ? "mb-4" : "mb-6 sm:mb-8"}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          {showBackToMap && (
            <Link href="/map" className="w-full sm:w-auto">
              <Button variant="outline" className="gap-2 w-full sm:w-auto h-11 bg-transparent">
                <ArrowLeft className="w-4 h-4" />
                Back to Map
              </Button>
            </Link>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
          <span
            className={`text-sm font-medium px-3 py-1.5 rounded-full ${
              node.level === "Beginner"
                ? "bg-green-500/20 text-green-600 dark:text-green-400"
                : node.level === "Intermediate"
                  ? "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                  : "bg-red-500/20 text-red-600 dark:text-red-400"
            }`}
          >
            {node.level}
          </span>
          {isRiskCritical && (
            <span className="text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full bg-red-500/90 text-white border border-red-400">
              RISK-CRITICAL
            </span>
          )}
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{node.timeMinutes} min</span>
          </div>
          {completed && (
            <div className="flex items-center gap-1.5 text-sm text-completed">
              <Check className="w-4 h-4" />
              <span>Completed</span>
            </div>
          )}
        </div>
        <h1
          className={
            compact
              ? "text-2xl font-semibold text-foreground mb-3 text-balance leading-tight"
              : "text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight"
          }
        >
          {lesson.title}
        </h1>
        <TagPills tags={node.tags} />
      </header>

      <article className={compact ? "space-y-6" : "space-y-6 sm:space-y-8"}>
        {isRiskCritical && <RiskRulesSummary />}
        {lesson.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">{section.heading}</h2>
            <ul className="space-y-3 sm:space-y-4">
              {section.content.map((item, j) => (
                <li key={j} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1 flex-shrink-0 text-lg">•</span>
                  <span className="leading-relaxed text-base sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {lesson.diagrams && lesson.diagrams.length > 0 && (
          <div className="space-y-4">
            {lesson.diagrams.map((diagramName, i) => {
              const DiagramComponent = diagramComponents[diagramName]
              return DiagramComponent ? (
                <Suspense
                  key={i}
                  fallback={
                    <div className="w-full h-64 bg-muted rounded-lg animate-pulse flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Loading diagram...</span>
                    </div>
                  }
                >
                  <DiagramComponent />
                </Suspense>
              ) : null
            })}
          </div>
        )}
        <div className="space-y-4">
          {lesson.callouts.map((callout, i) => (
            <CalloutBox key={i} type={callout.type} content={callout.content} />
          ))}
        </div>
        <section className="bg-card border border-border rounded-lg p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Key Takeaways</h2>
          <ul className="space-y-3 sm:space-y-4">
            {lesson.takeaways.map((takeaway, i) => (
              <li key={i} className="flex gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-base">{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>
        <QuizBlock questions={lesson.quiz} onComplete={onQuizComplete} />
      </article>
    </div>
  )
}
