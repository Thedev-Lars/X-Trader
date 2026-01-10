"use client"

import type { MapNode, Phase } from "@/lib/map/types"
import { phases } from "@/lib/map/types"
import { TagPills } from "@/components/tag-pills"
import { Button } from "@/components/ui/button"
import { X, Clock, Lock, AlertCircle } from "lucide-react"
import { mapNodes } from "@/lib/map/nodes"
import Link from "next/link"
import { BookmarkButton } from "./bookmark-button"

interface NodeDetailsPanelProps {
  node: MapNode
  status: "locked" | "available" | "completed"
  completedSet: Set<string>
  onClose: () => void
  isBookmarked?: boolean
  onToggleBookmark?: () => void
  currentPhase?: Phase
  phaseProgress?: { completed: number; total: number }
}

export function NodeDetailsPanel({
  node,
  status,
  completedSet,
  onClose,
  isBookmarked,
  onToggleBookmark,
  currentPhase,
  phaseProgress,
}: NodeDetailsPanelProps) {
  const missingPrereqs = node.prereqs.filter((id) => !completedSet.has(id))
  const prereqNodes = node.prereqs.map((id) => mapNodes.find((n) => n.id === id)).filter(Boolean) as MapNode[]

  const foundationsProgressPercent =
    phaseProgress && phaseProgress.total > 0 ? (phaseProgress.completed / phaseProgress.total) * 100 : 0

  const showPeekWarning =
    currentPhase === "foundations" &&
    foundationsProgressPercent < 50 &&
    (node.phase === "execution" || node.phase === "mastery") &&
    status !== "locked"

  const nodePhaseInfo = phases.find((p) => p.id === node.phase)

  return (
    <div className="w-80 h-full border-l border-border bg-card p-4 overflow-y-auto">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              node.level === "Beginner"
                ? "bg-green-500/20 text-green-400"
                : node.level === "Intermediate"
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-red-500/20 text-red-400"
            }`}
          >
            {node.level}
          </span>
          {nodePhaseInfo && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
              {nodePhaseInfo.title}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          {onToggleBookmark && (
            <BookmarkButton isBookmarked={!!isBookmarked} onClick={onToggleBookmark} size="default" />
          )}
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <h2 className="text-xl font-bold text-foreground mb-2">{node.title}</h2>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{node.summary}</p>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Clock className="w-4 h-4" />
        <span>{node.timeMinutes} min</span>
      </div>

      <div className="mb-4">
        <TagPills tags={node.tags} size="sm" />
      </div>

      {showPeekWarning && (
        <div className="mb-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-amber-600 dark:text-amber-400 leading-relaxed">
              You can peek, but this will click after you finish the Foundations path.
            </p>
          </div>
        </div>
      )}

      {prereqNodes.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-foreground mb-2">Prerequisites</h3>
          <ul className="space-y-1">
            {prereqNodes.map((prereq) => (
              <li key={prereq.id} className="flex items-center gap-2 text-sm">
                {completedSet.has(prereq.id) ? (
                  <span className="w-4 h-4 rounded-full bg-completed flex items-center justify-center">
                    <span className="w-2 h-2 bg-completed-foreground rounded-full" />
                  </span>
                ) : (
                  <span className="w-4 h-4 rounded-full border border-muted-foreground" />
                )}
                <span className={completedSet.has(prereq.id) ? "text-muted-foreground" : "text-foreground"}>
                  {prereq.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === "locked" ? (
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <div className="flex items-center gap-2 text-amber-400 mb-2">
            <Lock className="w-4 h-4" />
            <span className="font-medium text-sm">Locked</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Complete the following to unlock:{" "}
            {missingPrereqs.map((id) => mapNodes.find((n) => n.id === id)?.title).join(", ")}
          </p>
        </div>
      ) : (
        <Link href={`/learn/${node.slug}`}>
          <Button className="w-full h-11">{status === "completed" ? "Continue Lesson" : "Start Lesson"}</Button>
        </Link>
      )}
    </div>
  )
}
