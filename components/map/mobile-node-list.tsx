"use client"

import type { MapNode } from "@/lib/map/types"
import { phases } from "@/lib/map/types"
import { getNodeStatus } from "@/lib/progress/progress"
import { cn } from "@/lib/utils"
import { Check, Lock, ChevronRight, Bookmark, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useMemo } from "react"

interface MobileNodeListProps {
  nodes: MapNode[]
  completedSet: Set<string>
  bookmarkedIds: Set<string>
  onToggleBookmark: (nodeId: string) => void
  searchQuery: string
  nextNode: MapNode | null
}

export function MobileNodeList({
  nodes,
  completedSet,
  bookmarkedIds,
  onToggleBookmark,
  searchQuery,
  nextNode,
}: MobileNodeListProps) {
  // Filter nodes based on search
  const filteredNodes = useMemo(() => {
    return nodes.filter((node) => {
      if (!searchQuery) return true
      const query = searchQuery.toLowerCase()
      return (
        node.title.toLowerCase().includes(query) ||
        node.summary.toLowerCase().includes(query) ||
        node.tags.some((t) => t.toLowerCase().includes(query))
      )
    })
  }, [nodes, searchQuery])

  // Group by phase for better organization
  const groupedByPhase = useMemo(() => {
    const groups: Record<string, MapNode[]> = {}
    filteredNodes.forEach((node) => {
      if (!groups[node.phase]) groups[node.phase] = []
      groups[node.phase].push(node)
    })
    return groups
  }, [filteredNodes])

  if (filteredNodes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-6 py-12">
        <p className="text-muted-foreground">No lessons found</p>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto pb-16">
      <div className="divide-y divide-border">
        {nextNode && (
          <div className="px-4 py-3 bg-primary/5 border-b border-primary/20">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">Next Recommended</p>
                <p className="text-sm font-semibold text-foreground truncate">{nextNode.title}</p>
                <p className="text-xs text-muted-foreground truncate">{nextNode.summary}</p>
              </div>
              <Link href={`/learn/${nextNode.slug}`} className="flex-shrink-0">
                <Button size="sm" className="h-8 px-3 text-xs">
                  Start
                  <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        )}
        {phases.map((phase) => {
          const phaseNodes = groupedByPhase[phase.id]
          if (!phaseNodes || phaseNodes.length === 0) return null

          const completedCount = phaseNodes.filter((n) => completedSet.has(n.id)).length

          return (
            <div key={phase.id}>
              {/* Phase header - only show if viewing all phases */}
              {nodes.length > phaseNodes.length && (
                <div className="sticky top-0 z-10 px-4 py-2 bg-muted/80 backdrop-blur-sm border-b border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">{phase.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {completedCount}/{phaseNodes.length} done
                    </span>
                  </div>
                </div>
              )}

              {/* Node list */}
              <div className="divide-y divide-border/50">
                {phaseNodes.map((node) => {
                  const status = getNodeStatus(node, completedSet)
                  const isBookmarked = bookmarkedIds.has(node.id)
                  const isLocked = status === "locked"
                  const isCompleted = status === "completed"

                  return (
                    <div
                      key={node.id}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 transition-colors",
                        isLocked ? "opacity-60" : "active:bg-muted/50",
                      )}
                    >
                      {/* Status indicator */}
                      <div className="flex-shrink-0">
                        {isCompleted ? (
                          <div className="w-8 h-8 rounded-full bg-completed flex items-center justify-center">
                            <Check className="w-4 h-4 text-completed-foreground" />
                          </div>
                        ) : isLocked ? (
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                            <Lock className="w-4 h-4 text-muted-foreground" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full border-2 border-primary bg-primary/10" />
                        )}
                      </div>

                      {/* Content */}
                      <Link
                        href={isLocked ? "#" : `/learn/${node.slug}`}
                        onClick={(e) => isLocked && e.preventDefault()}
                        className={cn("flex-1 min-w-0", isLocked && "cursor-not-allowed")}
                      >
                        <h3
                          className={cn(
                            "font-medium text-[15px] leading-tight mb-0.5",
                            isLocked ? "text-muted-foreground" : "text-foreground",
                          )}
                        >
                          {node.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {node.timeMinutes}m
                          </span>
                          <span>•</span>
                          <span
                            className={cn(
                              node.level === "Beginner" && "text-green-600 dark:text-green-400",
                              node.level === "Intermediate" && "text-amber-600 dark:text-amber-400",
                              node.level === "Advanced" && "text-red-600 dark:text-red-400",
                            )}
                          >
                            {node.level}
                          </span>
                        </div>
                      </Link>

                      {/* Actions */}
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {!isLocked && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              onToggleBookmark(node.id)
                            }}
                          >
                            <Bookmark
                              className={cn(
                                "w-5 h-5",
                                isBookmarked ? "fill-current text-primary" : "text-muted-foreground",
                              )}
                            />
                          </Button>
                        )}
                        {!isLocked && (
                          <Link href={`/learn/${node.slug}`}>
                            <Button variant="ghost" size="icon" className="h-10 w-10">
                              <ChevronRight className="w-5 h-5 text-muted-foreground" />
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
