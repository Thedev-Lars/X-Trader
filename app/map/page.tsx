"use client"

import { useState, useEffect, useCallback } from "react"
import { AppNav } from "@/components/app-nav"
import { ProgressPill } from "@/components/progress-pill"
import { FiltersSidebar } from "@/components/map/filters-sidebar"
import { MobileNodeList } from "@/components/map/mobile-node-list"
import { DesktopTimeline } from "@/components/map/desktop-timeline"
import { DependencyPanel } from "@/components/map/dependency-panel"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { OnboardingModal } from "@/components/map/onboarding-modal"
import { mapNodes } from "@/lib/map/nodes"
import type { MapNode, NodeLevel, NodeTag, Phase } from "@/lib/map/types"
import { phases } from "@/lib/map/types"
import {
  getCompletedNodeIds,
  getNextRecommendedNode,
  resetProgress,
  getNodeStatus,
  getLastCompletedNode,
  getPhaseProgress,
  getCurrentPhase,
  getNextRecommendedNodeInPhase,
} from "@/lib/progress/progress"
import { getBookmarkedNodeIds, toggleBookmark } from "@/lib/bookmarks/bookmarks"
import { Button } from "@/components/ui/button"
import { Play, Filter, Bookmark, Map, Clock, Lock, ChevronRight, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { useSearchParams } from "next/navigation"

const allLevels: NodeLevel[] = ["Beginner", "Intermediate", "Advanced"]
const allTags: NodeTag[] = ["Execution", "Risk", "Psychology", "Structure", "Journaling", "Order Flow"]

const nodeReasons: Record<string, string> = {
  "futures-basics": "Every journey starts here",
  "tick-values": "Know your numbers first",
  "margin-leverage": "Leverage makes or breaks you",
  "market-structure": "See the market clearly",
  "session-timing": "Trade when it matters",
  "risk-fundamentals": "This saves accounts",
  "trading-psychology-intro": "Your mind is your edge",
  "position-sizing": "Survive the bad days",
  "stop-placement": "Bad stops kill good trades",
  "breakout-entries": "Your first real strategy",
  "pullback-entries": "Better entries, better R:R",
  "trade-management": "Where money is made",
  "journaling-basics": "Track to improve",
  "order-flow-basics": "See what others are doing",
  "playbook-building": "Make setups repeatable",
}

export default function MapPage() {
  const searchParams = useSearchParams()
  const [completedIds, setCompletedIds] = useState<string[]>([])
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([])
  const [selectedNode, setSelectedNode] = useState<MapNode | null>(null)
  const [selectedLevels, setSelectedLevels] = useState<Set<NodeLevel>>(new Set())
  const [selectedTags, setSelectedTags] = useState<Set<NodeTag>>(new Set())
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [highlightedPath, setHighlightedPath] = useState<string | null>(null)
  const [highlightedNodeId, setHighlightedNodeId] = useState<string | null>(null)
  const [mobileViewMode, setMobileViewMode] = useState<"list" | "map">("list")
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null)
  const [glowingNodeId, setGlowingNodeId] = useState<string | null>(null)

  const initialTab = searchParams.get("tab") === "bookmarks" ? "bookmarks" : "map"
  const [activeTab, setActiveTab] = useState(initialTab)

  const loadProgress = useCallback(() => {
    setCompletedIds(getCompletedNodeIds())
    setBookmarkedIds(getBookmarkedNodeIds())
  }, [])

  useEffect(() => {
    loadProgress()
    const handleStorage = () => loadProgress()
    window.addEventListener("storage", handleStorage)
    return () => window.removeEventListener("storage", handleStorage)
  }, [loadProgress])

  useEffect(() => {
    const handleBookmarkChange = () => {
      setBookmarkedIds(getBookmarkedNodeIds())
    }
    window.addEventListener("bookmarkChange", handleBookmarkChange)
    return () => window.removeEventListener("bookmarkChange", handleBookmarkChange)
  }, [])

  const completedSet = new Set(completedIds)
  const bookmarkedSet = new Set(bookmarkedIds)

  const currentPhase = getCurrentPhase(completedSet)
  const currentPhaseProgress = getPhaseProgress(currentPhase, completedSet)
  const nextNode =
    getNextRecommendedNodeInPhase(currentPhase, completedSet) || getNextRecommendedNode("foundations", completedSet)
  const lastCompletedNode = getLastCompletedNode(completedIds)

  const phaseProgress: Record<Phase, { completed: number; total: number }> = {
    foundations: getPhaseProgress("foundations", completedSet),
    execution: getPhaseProgress("execution", completedSet),
    "order-flow": getPhaseProgress("order-flow", completedSet),
    mastery: getPhaseProgress("mastery", completedSet),
  }

  const filteredByPhase = selectedPhase ? mapNodes.filter((n) => n.phase === selectedPhase) : mapNodes

  const bookmarkedNodes = mapNodes.filter((node) => bookmarkedSet.has(node.id))

  const handleLevelToggle = (level: NodeLevel) => {
    const newSet = new Set(selectedLevels)
    if (newSet.has(level)) {
      newSet.delete(level)
    } else {
      newSet.add(level)
    }
    setSelectedLevels(newSet)
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

  const handleResetProgress = () => {
    if (confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      resetProgress()
      setCompletedIds([])
      setSelectedNode(null)
    }
  }

  const handleToggleBookmark = (nodeId: string) => {
    toggleBookmark(nodeId)
    setBookmarkedIds(getBookmarkedNodeIds())
  }

  const handleHighlightNextNode = (nodeId: string) => {
    setHighlightedNodeId(nodeId)
    setActiveTab("map")
    setMobileViewMode("map")
    setTimeout(() => setHighlightedNodeId(null), 3000)
  }

  const handleResumeClick = () => {
    if (nextNode) {
      setHighlightedNodeId(nextNode.id)
      setSelectedNode(nextNode)
      setActiveTab("map")
      setMobileViewMode("map")
      setTimeout(() => setHighlightedNodeId(null), 3000)
    }
  }

  const handleOnboardingStartHere = () => {
    setSelectedPhase("foundations")
    setMobileViewMode("list")
    setActiveTab("map")
    const firstFoundationsNode = mapNodes.find((n) => n.id === "futures-basics")
    if (firstFoundationsNode) {
      setHighlightedNodeId(firstFoundationsNode.id)
      setSelectedNode(firstFoundationsNode)
      if (nextNode && nextNode.id !== firstFoundationsNode.id) {
        setGlowingNodeId(nextNode.id)
      }
      setTimeout(() => {
        setHighlightedNodeId(null)
        setGlowingNodeId(null)
      }, 5000)
    }
  }

  const handleOnboardingBrowseMap = () => {
    setActiveTab("map")
    setMobileViewMode("list")
  }

  const filterProps = {
    levels: allLevels,
    tags: allTags,
    selectedLevels,
    selectedTags,
    showOnlyAvailable,
    onLevelToggle: handleLevelToggle,
    onTagToggle: handleTagToggle,
    onAvailableToggle: () => setShowOnlyAvailable(!showOnlyAvailable),
    onResetProgress: handleResetProgress,
    searchQuery,
    onSearchChange: setSearchQuery,
    completedSet,
    highlightedPath,
    onPathSelect: setHighlightedPath,
    onHighlightNextNode: handleHighlightNextNode,
  }

  const currentPhaseInfo = phases.find((p) => p.id === currentPhase)
  const progressPercent =
    currentPhaseProgress.total > 0 ? Math.round((currentPhaseProgress.completed / currentPhaseProgress.total) * 100) : 0

  return (
    <div className="h-screen flex flex-col bg-background">
      <AppNav />

      <OnboardingModal onStartHere={handleOnboardingStartHere} onBrowseMap={handleOnboardingBrowseMap} />

      <div className="md:hidden">
        {/* Compact progress header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-foreground">Learn</h1>
            <ProgressPill completed={completedIds.length} total={mapNodes.length} />
          </div>
          <div className="flex items-center gap-2">
            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10 bg-transparent">
                  <Filter className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 overflow-y-auto">
                <FiltersSidebar {...filterProps} />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Scrollable phase filter pills */}
        <div className="px-3 py-2 border-b border-border overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setSelectedPhase(null)}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-full transition-all whitespace-nowrap",
                selectedPhase === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80",
              )}
            >
              All ({mapNodes.length})
            </button>
            {phases.map((phase) => {
              const progress = phaseProgress[phase.id]
              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhase(phase.id)}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-full transition-all whitespace-nowrap flex items-center gap-1.5",
                    selectedPhase === phase.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80",
                  )}
                >
                  {phase.title}
                  <span className="text-xs opacity-75">
                    {progress.completed}/{progress.total}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Desktop header - hidden on mobile */}
      <div className="hidden md:block">
        {/* Journey guidance - desktop only */}
        <div className="px-4 py-3 border-b border-border bg-card/80 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-primary uppercase tracking-wide">
                  {currentPhaseInfo?.title || "Foundations"}
                </span>
                <span className="text-xs text-muted-foreground">{progressPercent}% complete</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden max-w-xs">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
            {nextNode && (
              <Button
                size="default"
                className="gap-2 h-auto py-2 px-4 bg-primary hover:bg-primary/90"
                onClick={handleResumeClick}
              >
                <Play className="w-4 h-4 flex-shrink-0" />
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-sm font-semibold leading-none">
                    {completedIds.length === 0 ? "Start Learning" : `Continue: ${nextNode.title}`}
                  </span>
                </div>
              </Button>
            )}
          </div>
        </div>

        {/* Next step card - desktop */}
        {nextNode && (
          <div className="mx-4 mt-3 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/20 flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">Next Step</span>
                  {currentPhaseInfo && (
                    <span className="text-xs text-muted-foreground">• {currentPhaseInfo.title}</span>
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-1 truncate">{nextNode.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-1">
                  {nodeReasons[nextNode.id] || "Continue your learning journey"}
                </p>
              </div>
              <Link href={`/learn/${nextNode.slug}`} className="flex-shrink-0">
                <Button size="sm" className="gap-1.5 h-9">
                  Open
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Desktop header bar */}
        <div className="flex items-center justify-between px-4 py-3 gap-3 border-b border-border bg-card">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-foreground">Knowledge Map</h1>
            <ProgressPill completed={completedIds.length} total={mapNodes.length} />
          </div>
        </div>

        {/* Phase tabs - desktop */}
        <div className="px-4 py-2 border-b border-border bg-card/50 overflow-x-auto">
          <div className="flex items-center gap-1 p-1 bg-muted/50 rounded-lg border border-border w-fit">
            <button
              onClick={() => setSelectedPhase(null)}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-all min-h-[40px]",
                selectedPhase === null
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50",
              )}
            >
              All
            </button>
            {phases.map((phase) => {
              const progress = phaseProgress[phase.id]
              const percent = progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0
              return (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhase(phase.id)}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-all min-h-[40px] flex items-center gap-2",
                    selectedPhase === phase.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50",
                  )}
                >
                  <span>{phase.title}</span>
                  <span
                    className={cn(
                      "text-xs px-1.5 py-0.5 rounded-full",
                      percent === 100 ? "bg-completed/20 text-completed-foreground" : "bg-muted text-muted-foreground",
                    )}
                  >
                    {percent}%
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden pb-16 md:pb-0">
        <div className="hidden lg:block">
          <FiltersSidebar {...filterProps} />
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
            <div className="border-b border-border bg-card/50 px-4 hidden md:block">
              <TabsList className="bg-transparent h-14">
                <TabsTrigger value="map" className="gap-2 h-11 px-4 data-[state=active]:bg-muted">
                  <Map className="w-4 h-4" />
                  <span>Map</span>
                </TabsTrigger>
                <TabsTrigger value="bookmarks" className="gap-2 h-11 px-4 data-[state=active]:bg-muted">
                  <Bookmark className="w-4 h-4" />
                  <span>Bookmarks</span>
                  {bookmarkedNodes.length > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-primary text-primary-foreground">
                      {bookmarkedNodes.length}
                    </span>
                  )}
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="map" className="flex-1 m-0 relative overflow-hidden">
              <div className="md:hidden h-full">
                <MobileNodeList
                  nodes={filteredByPhase}
                  completedSet={completedSet}
                  bookmarkedIds={bookmarkedSet}
                  onToggleBookmark={handleToggleBookmark}
                  searchQuery={searchQuery}
                  nextNode={nextNode}
                />
              </div>
              <div className="hidden md:block h-full">
                <div className="flex h-full bg-background">
                  <DesktopTimeline
                    nodes={filteredByPhase}
                    completedSet={completedSet}
                    selectedLevels={selectedLevels}
                    selectedTags={selectedTags}
                    showOnlyAvailable={showOnlyAvailable}
                    searchQuery={searchQuery}
                    selectedNodeId={selectedNode?.id ?? null}
                    highlightedPath={highlightedPath}
                    highlightedNodeId={highlightedNodeId}
                    bookmarkedIds={bookmarkedSet}
                    onToggleBookmark={handleToggleBookmark}
                    onSelectNode={setSelectedNode}
                  />
                  <div
                    className="hidden xl:flex w-[560px] min-w-[420px] max-w-[720px] flex-col border-l border-border bg-card/60 scrollbar-hide"
                    style={{ resize: "horizontal", overflow: "auto" }}
                  >
                    <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Lesson Preview</p>
                        <p className="text-sm font-semibold text-foreground">
                          {selectedNode ? selectedNode.title : "Select a lesson"}
                        </p>
                      </div>
                      {selectedNode && (
                        <Link
                          href={`/learn/${selectedNode.slug}`}
                          className="text-xs text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                        >
                          Open full lesson
                        </Link>
                      )}
                    </div>
                    <div className="flex-1 overflow-hidden scrollbar-hide">
                      {selectedNode ? (
                        <iframe
                          title={`${selectedNode.title} lesson`}
                          src={`/learn/${selectedNode.slug}`}
                          className="h-full w-full border-0"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-sm text-muted-foreground px-6 text-center">
                          Choose a lesson to preview it here without leaving the map.
                        </div>
                      )}
                    </div>
                  </div>
                  <DependencyPanel
                    node={selectedNode}
                    completedSet={completedSet}
                    onClose={() => setSelectedNode(null)}
                    isBookmarked={selectedNode ? bookmarkedSet.has(selectedNode.id) : false}
                    onToggleBookmark={() => selectedNode && handleToggleBookmark(selectedNode.id)}
                    currentPhase={currentPhase}
                    phaseProgress={currentPhaseProgress}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bookmarks" className="flex-1 m-0 overflow-auto p-4">
              {bookmarkedNodes.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <Bookmark className="w-12 h-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">No bookmarks yet</h3>
                  <p className="text-muted-foreground max-w-sm leading-relaxed">
                    Tap the bookmark icon on any lesson to save it here for quick access.
                  </p>
                </div>
              ) : (
                <div className="grid gap-3 max-w-2xl mx-auto pb-4">
                  {bookmarkedNodes.map((node) => {
                    const status = getNodeStatus(node, completedSet)
                    return (
                      <div
                        key={node.id}
                        className={cn(
                          "flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-lg border transition-all min-h-[88px]",
                          status === "locked"
                            ? "bg-muted/30 border-border"
                            : "bg-card border-border hover:border-primary hover:shadow-md",
                        )}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-2">
                            <h3 className="font-semibold text-foreground flex-1">{node.title}</h3>
                            <span
                              className={cn(
                                "text-xs font-medium px-2 py-1 rounded-full flex-shrink-0",
                                node.level === "Beginner"
                                  ? "bg-green-500/20 text-green-600 dark:text-green-400"
                                  : node.level === "Intermediate"
                                    ? "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                                    : "bg-red-500/20 text-red-600 dark:text-red-400",
                              )}
                            >
                              {node.level}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-2 leading-relaxed">
                            {node.summary}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {node.timeMinutes} min
                            </span>
                            {status === "completed" && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-completed/20 text-completed-foreground">
                                Completed
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:flex-col sm:items-stretch sm:w-auto">
                          {status === "locked" ? (
                            <Button
                              variant="outline"
                              disabled
                              className="flex-1 sm:flex-none h-11 gap-2 bg-transparent"
                            >
                              <Lock className="w-4 h-4" />
                              <span>Locked</span>
                            </Button>
                          ) : (
                            <Link href={`/learn/${node.slug}`} className="flex-1 sm:flex-none">
                              <Button className="w-full h-11 gap-2">
                                <span>{status === "completed" ? "Review" : "Open"}</span>
                                <ChevronRight className="w-4 h-4" />
                              </Button>
                            </Link>
                          )}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-11 w-11 flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleToggleBookmark(node.id)
                            }}
                            title="Remove bookmark"
                          >
                            <Bookmark className="w-5 h-5 fill-current text-primary" />
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

      </div>

      <MobileBottomNav />
    </div>
  )
}
