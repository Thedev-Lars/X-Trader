"use client"

import type React from "react"
import { useEffect, useState, lazy, Suspense } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
import { TagPills } from "@/components/tag-pills"
import { CalloutBox } from "@/components/callout-box"
import { QuizBlock } from "@/components/quiz-block"
import { Button } from "@/components/ui/button"
import { getNodeBySlug, mapNodes } from "@/lib/map/nodes"
import { getLessonBySlug } from "@/lib/content/lessons"
import {
  markNodeComplete,
  markQuizComplete,
  isNodeCompleted,
  getCompletedNodeIds,
  getNextRecommendedNode,
} from "@/lib/progress/progress"
import { ArrowLeft, ArrowRight, Check, Clock, Home, Lock } from "lucide-react"
import RiskRulesSummary from "@/components/risk-rules-summary"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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

export default function LearnPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const [completed, setCompleted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const node = getNodeBySlug(slug)
  const lesson = getLessonBySlug(slug)

  useEffect(() => {
    if (node) {
      setCompleted(isNodeCompleted(node.id))
    }
  }, [node])

  if (!node || !lesson) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <AppNav />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Lesson Not Found</h1>
            <Link href="/map">
              <Button className="h-11">Back to Map</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleMarkComplete = () => {
    markNodeComplete(node.id)
    setCompleted(true)
  }

  const handleQuizComplete = () => {
    markQuizComplete(slug)
    setQuizCompleted(true)
  }

  const completedSet = new Set(getCompletedNodeIds())
  completedSet.add(node.id)

  const currentIndex = ORDER_FLOW_SEQUENCE.indexOf(slug)
  const isOrderFlowLesson = currentIndex !== -1
  let nextOrderFlowLesson: { slug: string; title: string; isLocked: boolean; missingPrereq?: string } | null = null

  if (isOrderFlowLesson && currentIndex < ORDER_FLOW_SEQUENCE.length - 1) {
    const nextSlug = ORDER_FLOW_SEQUENCE[currentIndex + 1]
    const nextNode = getNodeBySlug(nextSlug)
    if (nextNode) {
      const missingPrereqs = nextNode.prereqs.filter((prereq) => {
        if (prereq.includes("|")) {
          return !prereq.split("|").some((id) => completedSet.has(id))
        }
        return !completedSet.has(prereq)
      })
      const missingPrereqTitle = missingPrereqs.length
        ? missingPrereqs[0]
            .split("|")
            .map((id) => mapNodes.find((n) => n.id === id)?.title)
            .filter(Boolean)
            .join(" or ")
        : undefined
      nextOrderFlowLesson = {
        slug: nextSlug,
        title: nextNode.title,
        isLocked: missingPrereqs.length > 0,
        missingPrereq: missingPrereqTitle,
      }
    }
  }

  // Fallback to general next recommendation if not in Order Flow sequence
  const nextNode = !isOrderFlowLesson ? getNextRecommendedNode("foundations", completedSet) : null

  const diagramComponents: Record<string, React.ComponentType> = {
    AggressiveVsRestingDiagram,
    AbsorptionPatternDiagram,
    DeltaDivergenceDiagram,
    WhenNotToTradeDiagram,
    BreakoutDiagram,
    PullbackDiagram,
    TradeManagementDiagram,
  }

  const isRiskCritical = lesson.isRiskCritical || false

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNav />

      <main className="flex-1 pb-6 sm:pb-8">
        <div className="container px-4 sm:px-6 py-6 sm:py-8 max-w-3xl">
          {/* Breadcrumb - touch-friendly */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4 sm:mb-6 overflow-x-auto touch-compact">
            <Link href="/" className="hover:text-primary transition-colors p-1 min-h-[44px] flex items-center">
              <Home className="w-4 h-4" />
            </Link>
            <span>/</span>
            <Link
              href="/map"
              className="hover:text-primary transition-colors p-1 min-h-[44px] flex items-center whitespace-nowrap"
            >
              Map
            </Link>
            <span>/</span>
            <span className="text-foreground truncate">{lesson.title}</span>
          </nav>

          {/* Lesson Header */}
          <header className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <Link href="/map" className="w-full sm:w-auto">
                <Button variant="outline" className="gap-2 w-full sm:w-auto h-11 bg-transparent">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Map
                </Button>
              </Link>
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance leading-tight">
              {lesson.title}
            </h1>
            <TagPills tags={node.tags} />
          </header>

          {/* Lesson Content */}
          <article className="space-y-6 sm:space-y-8">
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
            {/* Callouts */}
            <div className="space-y-4">
              {lesson.callouts.map((callout, i) => (
                <CalloutBox key={i} type={callout.type} content={callout.content} />
              ))}
            </div>
            {/* Key Takeaways */}
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
            {/* Quiz */}
            <QuizBlock questions={lesson.quiz} onComplete={handleQuizComplete} />
          </article>

          {/* Bottom Action Bar */}
          <div className="mt-8 sm:mt-12 pt-6 border-t border-border mb-20 sm:mb-0">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <Link href="/map" className="order-2 sm:order-1">
                <Button variant="outline" className="gap-2 bg-transparent w-full sm:w-auto h-12 text-base">
                  <ArrowLeft className="w-5 h-5" />
                  Back to Map
                </Button>
              </Link>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 order-1 sm:order-2">
                {!completed && (
                  <Button onClick={handleMarkComplete} className="gap-2 h-12 text-base">
                    <Check className="w-5 h-5" />
                    Mark Complete
                  </Button>
                )}

                {nextOrderFlowLesson && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        {nextOrderFlowLesson.isLocked ? (
                          <Button
                            variant="outline"
                            className="gap-2 w-full sm:w-auto h-12 text-base opacity-60 cursor-not-allowed bg-transparent"
                            disabled
                          >
                            <Lock className="w-4 h-4" />
                            Next: {nextOrderFlowLesson.title}
                          </Button>
                        ) : (
                          <Link href={`/learn/${nextOrderFlowLesson.slug}`}>
                            <Button
                              variant={completed ? "default" : "outline"}
                              className="gap-2 w-full sm:w-auto h-12 text-base"
                            >
                              Next: {nextOrderFlowLesson.title}
                              <ArrowRight className="w-5 h-5" />
                            </Button>
                          </Link>
                        )}
                      </TooltipTrigger>
                      {nextOrderFlowLesson.isLocked && (
                        <TooltipContent>
                          <p>Complete "{nextOrderFlowLesson.missingPrereq}" first</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                )}

                {/* Fallback for non-Order Flow lessons */}
                {nextNode && !isOrderFlowLesson && (
                  <Link href={`/learn/${nextNode.slug}`}>
                    <Button
                      variant={completed ? "default" : "outline"}
                      className="gap-2 w-full sm:w-auto h-12 text-base"
                    >
                      Next Lesson
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

const ORDER_FLOW_SEQUENCE = ["order-flow-basics", "absorption-rejection", "delta-imbalance", "when-not-order-flow"]
