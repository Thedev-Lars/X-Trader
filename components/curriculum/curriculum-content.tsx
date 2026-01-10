"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { mapNodes } from "@/lib/map/nodes"
import { learningPaths } from "@/lib/paths/paths"
import { getCompletedNodeIds, getNodeStatus, getPhaseProgress, getCurrentPhase } from "@/lib/progress/progress"
import { getBookmarkedNodeIds, toggleBookmark } from "@/lib/bookmarks/bookmarks"
import type { NodeLevel, MapNode, NodeTag, Phase } from "@/lib/map/types"
import { phases } from "@/lib/map/types"
import { Check, Lock, ChevronRight, ChevronDown, Compass, Bookmark, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const allTags: NodeTag[] = ["Execution", "Risk", "Psychology", "Structure", "Journaling", "Order Flow"]

const levelStyles: Record<NodeLevel, string> = {
  Beginner: "border-green-500",
  Intermediate: "border-amber-500",
  Advanced: "border-red-500",
}

const phaseStyles: Record<Phase, string> = {
  foundations: "border-l-primary",
  execution: "border-l-amber-500",
  "order-flow": "border-l-emerald-500",
  mastery: "border-l-purple-500",
}

export function CurriculumContent() {
  const [completedIds, setCompletedIds] = useState<string[]>([])
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([])
  const [expandedPhases, setExpandedPhases] = useState<Set<Phase>>(
    new Set(["foundations", "execution", "order-flow", "mastery"]),
  )
  const [expandedLevels, setExpandedLevels] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<Set<NodeTag>>(new Set())

  useEffect(() => {
    setCompletedIds(getCompletedNodeIds())
    setBookmarkedIds(getBookmarkedNodeIds())

    const handleStorage = () => {
      setCompletedIds(getCompletedNodeIds())
      setBookmarkedIds(getBookmarkedNodeIds())
    }
    window.addEventListener("storage", handleStorage)
    return () => window.removeEventListener("storage", handleStorage)
  }, [])

  const completedSet = new Set(completedIds)
  const bookmarkedSet = new Set(bookmarkedIds)
  const currentPhase = getCurrentPhase(completedSet)

  const nodesInPaths = useMemo(() => {
    const set = new Set<string>()
    learningPaths.forEach((path) => {
      path.nodeIds.forEach((id) => set.add(id))
    })
    return set
  }, [])

  const filteredNodes = useMemo(() => {
    return mapNodes.filter((node) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch =
          node.title.toLowerCase().includes(query) ||
          node.summary.toLowerCase().includes(query) ||
          node.tags.some((t) => t.toLowerCase().includes(query))
        if (!matchesSearch) return false
      }

      if (selectedTags.size > 0 && !node.tags.some((t) => selectedTags.has(t))) {
        return false
      }

      return true
    })
  }, [searchQuery, selectedTags])

  const groupedByPhaseAndLevel = useMemo(() => {
    const result: Record<Phase, Record<NodeLevel, MapNode[]>> = {
      foundations: { Beginner: [], Intermediate: [], Advanced: [] },
      execution: { Beginner: [], Intermediate: [], Advanced: [] },
      "order-flow": { Beginner: [], Intermediate: [], Advanced: [] },
      mastery: { Beginner: [], Intermediate: [], Advanced: [] },
    }

    filteredNodes.forEach((node) => {
      result[node.phase][node.level].push(node)
    })

    return result
  }, [filteredNodes])

  const togglePhase = (phase: Phase) => {
    const newSet = new Set(expandedPhases)
    if (newSet.has(phase)) {
      newSet.delete(phase)
    } else {
      newSet.add(phase)
    }
    setExpandedPhases(newSet)
  }

  const toggleLevel = (key: string) => {
    const newSet = new Set(expandedLevels)
    if (newSet.has(key)) {
      newSet.delete(key)
    } else {
      newSet.add(key)
    }
    setExpandedLevels(newSet)
  }

  const handleTagToggle = (tag: NodeTag) => {
    const newSet = new Set(selectedTags)
    if (newSet.has(tag)) {
      newSet.delete(tag)
    } else {
      newSet.add(tag)
    }
    setSelectedTags(newSet)
  }

  const handleToggleBookmark = (nodeId: string) => {
    toggleBookmark(nodeId)
    setBookmarkedIds(getBookmarkedNodeIds())
  }

  const levels: NodeLevel[] = ["Beginner", "Intermediate", "Advanced"]

  return (
    <div className="container px-4 sm:px-6 py-8 sm:py-12 max-w-3xl pb-4 sm:pb-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
        Curriculum
      </h1>
      <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
        All topics organized by learning phase and level. Complete prerequisites to unlock new lessons.
      </p>

      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search lessons..."
            className="pl-10 pr-10 h-12 text-base"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10"
              onClick={() => setSearchQuery("")}
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          {allTags.map((tag) => (
            <label key={tag} className="flex items-center gap-2 cursor-pointer min-h-[44px] px-1">
              <Checkbox
                id={`curriculum-tag-${tag}`}
                checked={selectedTags.has(tag)}
                onCheckedChange={() => handleTagToggle(tag)}
                className="h-5 w-5"
              />
              <span className="text-sm text-muted-foreground select-none">{tag}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-6 pb-4 md:pb-0">
        {phases.map((phase) => {
          const phaseProgress = getPhaseProgress(phase.id, completedSet)
          const progressPercent =
            phaseProgress.total > 0 ? Math.round((phaseProgress.completed / phaseProgress.total) * 100) : 0
          const phaseNodes = groupedByPhaseAndLevel[phase.id]
          const totalInPhase = Object.values(phaseNodes).flat().length

          if (totalInPhase === 0) return null

          return (
            <Collapsible key={phase.id} open={expandedPhases.has(phase.id)} onOpenChange={() => togglePhase(phase.id)}>
              <CollapsibleTrigger asChild>
                <button
                  className={cn(
                    "flex items-center justify-between w-full text-lg sm:text-xl font-semibold text-foreground mb-2 border-l-4 pl-4 py-3 hover:bg-muted/30 rounded-r transition-colors min-h-[56px]",
                    phaseStyles[phase.id],
                    currentPhase === phase.id && "bg-muted/20",
                  )}
                >
                  <div className="flex flex-col items-start gap-1">
                    <span className="flex items-center gap-2">
                      {phase.title}
                      <span className="text-sm font-normal text-muted-foreground">({totalInPhase} lessons)</span>
                      <span
                        className={cn(
                          "text-xs px-2 py-0.5 rounded-full",
                          progressPercent === 100
                            ? "bg-completed/20 text-completed-foreground"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        {progressPercent}%
                      </span>
                    </span>
                    <span className="text-sm font-normal text-muted-foreground">{phase.description}</span>
                  </div>
                  {expandedPhases.has(phase.id) ? (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="pl-4 space-y-4">
                  {levels.map((level) => {
                    const levelNodes = phaseNodes[level]
                    if (levelNodes.length === 0) return null

                    const levelKey = `${phase.id}-${level}`

                    return (
                      <Collapsible
                        key={levelKey}
                        open={expandedLevels.has(levelKey)}
                        onOpenChange={() => toggleLevel(levelKey)}
                        defaultOpen={true}
                      >
                        <CollapsibleTrigger asChild>
                          <button
                            className={cn(
                              "flex items-center justify-between w-full text-base font-medium text-foreground mb-2 border-l-2 pl-3 py-2 hover:bg-muted/30 rounded-r transition-colors min-h-[44px]",
                              levelStyles[level],
                            )}
                          >
                            <span className="flex items-center gap-2">
                              {level}
                              <span className="text-sm font-normal text-muted-foreground">({levelNodes.length})</span>
                            </span>
                            {expandedLevels.has(levelKey) ? (
                              <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            )}
                          </button>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <div className="space-y-2 sm:space-y-3">
                            {levelNodes.map((node) => {
                              const status = getNodeStatus(node, completedSet)
                              const isLocked = status === "locked"
                              const isCompleted = status === "completed"
                              const isInPath = nodesInPaths.has(node.id)
                              const isBookmarked = bookmarkedSet.has(node.id)

                              return (
                                <div
                                  key={node.id}
                                  className={cn(
                                    "flex items-center justify-between p-4 rounded-lg border transition-all min-h-[72px]",
                                    isLocked
                                      ? "bg-muted/30 border-border"
                                      : "bg-card border-border hover:border-primary active:bg-muted/50",
                                  )}
                                >
                                  <Link
                                    href={isLocked ? "#" : `/learn/${node.slug}`}
                                    className={cn(
                                      "flex items-center gap-3 flex-1 min-w-0",
                                      isLocked && "cursor-not-allowed",
                                    )}
                                    onClick={(e) => isLocked && e.preventDefault()}
                                  >
                                    {isCompleted ? (
                                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-completed flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-completed-foreground" />
                                      </div>
                                    ) : isLocked ? (
                                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                                        <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                                      </div>
                                    ) : (
                                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-primary flex-shrink-0" />
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2">
                                        <h3
                                          className={cn(
                                            "font-medium text-sm sm:text-base truncate",
                                            isLocked ? "text-muted-foreground" : "text-foreground",
                                          )}
                                        >
                                          {node.title}
                                        </h3>
                                        {isInPath && (
                                          <Compass
                                            className="w-4 h-4 text-primary flex-shrink-0"
                                            title="Part of a recommended learning path"
                                          />
                                        )}
                                      </div>
                                      <p className="text-xs sm:text-sm text-muted-foreground">{node.timeMinutes} min</p>
                                    </div>
                                  </Link>

                                  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                                    {!isLocked && (
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-11 w-11"
                                        onClick={() => handleToggleBookmark(node.id)}
                                      >
                                        <Bookmark
                                          className={cn("w-5 h-5", isBookmarked && "fill-current text-primary")}
                                        />
                                      </Button>
                                    )}
                                    {!isLocked && (
                                      <Link href={`/learn/${node.slug}`}>
                                        <Button variant="ghost" size="icon" className="h-11 w-11">
                                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                        </Button>
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    )
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )
        })}
      </div>
    </div>
  )
}
