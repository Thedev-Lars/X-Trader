"use client"

import type { MapNode, Phase } from "@/lib/map/types"
import { phases } from "@/lib/map/types"
import { mapNodes } from "@/lib/map/nodes"
import { mapEdges } from "@/lib/map/edges"
import { getNodeStatus } from "@/lib/progress/progress"
import { cn } from "@/lib/utils"
import { Bookmark, Clock, Lock, Route, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface DependencyPanelProps {
  node: MapNode | null
  completedSet: Set<string>
  onClose: () => void
  isBookmarked: boolean
  onToggleBookmark: () => void
  currentPhase: Phase
  phaseProgress: { completed: number; total: number }
}

export function DependencyPanel({
  node,
  completedSet,
  onClose,
  isBookmarked,
  onToggleBookmark,
  currentPhase,
  phaseProgress,
}: DependencyPanelProps) {
  if (!node) {
    return (
      <aside className="w-96 border-l border-border bg-card/60 p-6">
        <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
          <Route className="mb-3 h-8 w-8" />
          <h3 className="text-lg font-semibold text-foreground">Select a lesson</h3>
          <p className="text-sm">Choose a lesson to see prerequisites, unlocks, and the next steps.</p>
        </div>
      </aside>
    )
  }

  const status = getNodeStatus(node, completedSet)
  const prereqGroups = node.prereqs.map((id) => id.split("|"))
  const prereqDetails = prereqGroups.map((group) => {
    const nodes = group.map((id) => mapNodes.find((n) => n.id === id)).filter(Boolean) as MapNode[]
    const met = group.some((id) => completedSet.has(id))
    return { nodes, met }
  })
  const missingPrereqTitles = prereqDetails
    .filter((prereq) => !prereq.met)
    .map((prereq) => prereq.nodes.map((nodeItem) => nodeItem.title).join(" or "))
    .join(", ")

  const phaseInfo = phases.find((p) => p.id === node.phase)
  const foundationsProgressPercent = phaseProgress.total > 0 ? (phaseProgress.completed / phaseProgress.total) * 100 : 0
  const showPeekWarning =
    currentPhase === "foundations" &&
    foundationsProgressPercent < 50 &&
    (node.phase === "execution" || node.phase === "order-flow" || node.phase === "mastery") &&
    status !== "locked"

  const outgoingNodes = mapEdges
    .filter((edge) => edge.source === node.id)
    .map((edge) => mapNodes.find((n) => n.id === edge.target))
    .filter(Boolean) as MapNode[]

  return (
    <aside className="w-96 border-l border-border bg-card/60 p-6 overflow-y-auto">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Lesson Details</p>
          <h3 className="text-xl font-semibold text-foreground">{node.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-10 w-10" onClick={onToggleBookmark}>
            <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-current text-primary")} />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{node.summary}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span className="rounded-full bg-muted px-2 py-0.5">{node.level}</span>
        {phaseInfo && <span className="rounded-full bg-muted px-2 py-0.5">{phaseInfo.title}</span>}
        <span className="flex items-center gap-1 rounded-full bg-muted px-2 py-0.5">
          <Clock className="h-3 w-3" />
          {node.timeMinutes} min
        </span>
      </div>

      {showPeekWarning && (
        <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-600 dark:text-amber-400">
          You can peek, but Foundations should be finished first for context.
        </div>
      )}

      {prereqDetails.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-foreground mb-2">Prerequisites</h4>
          <ul className="space-y-2">
            {prereqDetails.map((prereq) => (
              <li key={prereq.nodes.map((nodeItem) => nodeItem.id).join("|")} className="text-sm text-muted-foreground">
                <span className={cn("mr-2 inline-block h-2 w-2 rounded-full", prereq.met ? "bg-completed" : "bg-muted")}></span>
                {prereq.nodes.map((nodeItem) => nodeItem.title).join(" or ")}
              </li>
            ))}
          </ul>
        </div>
      )}

      {outgoingNodes.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-foreground mb-2">Unlocks next</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {outgoingNodes.map((nodeItem) => (
              <li key={nodeItem.id}>{nodeItem.title}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        {status === "locked" ? (
          <div className="rounded-lg border border-border bg-muted/50 p-3 text-xs text-muted-foreground">
            <div className="mb-2 flex items-center gap-2 text-amber-500">
              <Lock className="h-4 w-4" />
              <span className="text-sm font-medium">Locked</span>
            </div>
            Complete the following to unlock: {missingPrereqTitles}
          </div>
        ) : (
          <Button asChild className="w-full h-11">
            <Link href={`/learn/${node.slug}`}>{status === "completed" ? "Continue Lesson" : "Start Lesson"}</Link>
          </Button>
        )}
      </div>
    </aside>
  )
}
