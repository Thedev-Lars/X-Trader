"use client"

import type { MapNode, NodeLevel, NodeTag } from "@/lib/map/types"
import { phases } from "@/lib/map/types"
import { getNodeStatus } from "@/lib/progress/progress"
import { cn } from "@/lib/utils"
import { learningPaths } from "@/lib/paths/paths"
import { Bookmark, CheckCircle2, Circle, Lock, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface DesktopTimelineProps {
  nodes: MapNode[]
  completedSet: Set<string>
  selectedLevels: Set<NodeLevel>
  selectedTags: Set<NodeTag>
  showOnlyAvailable: boolean
  searchQuery: string
  selectedNodeId: string | null
  highlightedPath: string | null
  highlightedNodeId: string | null
  bookmarkedIds: Set<string>
  onToggleBookmark: (nodeId: string) => void
  onSelectNode: (node: MapNode) => void
}

const sortNodes = (a: MapNode, b: MapNode) => {
  if (a.position.y === b.position.y) return a.position.x - b.position.x
  return a.position.y - b.position.y
}

export function DesktopTimeline({
  nodes,
  completedSet,
  selectedLevels,
  selectedTags,
  showOnlyAvailable,
  searchQuery,
  selectedNodeId,
  highlightedPath,
  highlightedNodeId,
  bookmarkedIds,
  onToggleBookmark,
  onSelectNode,
}: DesktopTimelineProps) {
  const highlightedPathNodeIds = highlightedPath
    ? new Set(learningPaths.find((path) => path.id === highlightedPath)?.nodeIds || [])
    : new Set<string>()

  const filteredNodes = nodes.filter((node) => {
    const status = getNodeStatus(node, completedSet)

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const matchesSearch =
        node.title.toLowerCase().includes(query) ||
        node.summary.toLowerCase().includes(query) ||
        node.tags.some((t) => t.toLowerCase().includes(query))
      if (!matchesSearch) return false
    }

    if (selectedLevels.size > 0 && !selectedLevels.has(node.level)) return false
    if (selectedTags.size > 0 && !node.tags.some((t) => selectedTags.has(t))) return false
    if (showOnlyAvailable && status !== "available") return false

    return true
  })

  if (filteredNodes.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-muted-foreground">No lessons match your filters.</div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Knowledge Path</p>
          <h2 className="text-2xl font-semibold text-foreground">Structured learning, phase by phase.</h2>
        </div>

        <div className="space-y-8">
          {phases.map((phase) => {
            const phaseNodes = filteredNodes.filter((node) => node.phase === phase.id).sort(sortNodes)
            if (phaseNodes.length === 0) return null

            const completedCount = phaseNodes.filter((node) => completedSet.has(node.id)).length

            return (
              <section key={phase.id} className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{phase.title}</p>
                    <h3 className="text-lg font-semibold text-foreground">{phase.subtitle}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {completedCount}/{phaseNodes.length} complete
                  </span>
                </div>

                <div className="space-y-3">
                  {phaseNodes.map((node) => {
                    const status = getNodeStatus(node, completedSet)
                    const isSelected = selectedNodeId === node.id
                    const isHighlighted = highlightedNodeId === node.id || highlightedPathNodeIds.has(node.id)
                    const isBookmarked = bookmarkedIds.has(node.id)

                    return (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => onSelectNode(node)}
                        className={cn(
                          "w-full text-left rounded-2xl border px-5 py-4 transition shadow-sm",
                          isSelected
                            ? "border-primary/60 bg-primary/5"
                            : "border-border bg-card hover:border-primary/40 hover:bg-primary/5",
                          status === "locked" && "opacity-70",
                          isHighlighted && "ring-2 ring-primary/30",
                        )}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span
                              className={cn(
                                "flex h-9 w-9 items-center justify-center rounded-full border",
                                status === "completed"
                                  ? "border-completed bg-completed/20 text-completed-foreground"
                                  : status === "available"
                                    ? "border-primary/40 text-primary"
                                    : "border-muted text-muted-foreground",
                              )}
                            >
                              {status === "completed" ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : status === "available" ? (
                                <Circle className="h-3 w-3" />
                              ) : (
                                <Lock className="h-4 w-4" />
                              )}
                            </span>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-base font-semibold text-foreground">{node.title}</h4>
                                {isHighlighted && <Sparkles className="h-4 w-4 text-primary" />}
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-2">{node.summary}</p>
                              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                <span>{node.timeMinutes} min</span>
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
                                {node.tags.slice(0, 2).map((tag) => (
                                  <span key={tag} className="rounded-full bg-muted px-2 py-0.5">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-10 w-10"
                              onClick={(event) => {
                                event.stopPropagation()
                                onToggleBookmark(node.id)
                              }}
                              aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
                            >
                              <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-current text-primary")} />
                            </Button>
                            {status !== "locked" && (
                              <Button asChild size="sm" className="h-9">
                                <Link href={`/learn/${node.slug}`}>Open</Link>
                              </Button>
                            )}
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
