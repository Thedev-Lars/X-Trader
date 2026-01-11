"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
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
import { ArrowLeft, ArrowRight, Check, Home, Lock } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { LessonContent } from "@/components/learn/lesson-content"


export default function LearnPage() {
  const params = useParams()
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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNav />

      <main className="flex-1 pb-6 sm:pb-8">
        <div className="container px-4 sm:px-6 py-6 sm:py-8 max-w-3xl mx-auto">
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

          <LessonContent node={node} lesson={lesson} completed={completed} onQuizComplete={handleQuizComplete} />

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
