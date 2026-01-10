"use client"

import { cn } from "@/lib/utils"
import type { MapNode } from "@/lib/map/types"
import { Check, Lock } from "lucide-react"
import { BookmarkButton } from "./bookmark-button"

interface MapNodeCardProps {
  node: MapNode
  status: "locked" | "available" | "completed"
  isSelected: boolean
  onClick: () => void
  isSearchMatch?: boolean
  isBookmarked?: boolean
  isInHighlightedPath?: boolean
  isHighlightedNode?: boolean
  isGlowingNode?: boolean
  onToggleBookmark?: () => void
}

const levelColors = {
  Beginner: "border-l-green-500",
  Intermediate: "border-l-amber-500",
  Advanced: "border-l-red-500",
}

export function MapNodeCard({
  node,
  status,
  isSelected,
  onClick,
  isSearchMatch,
  isBookmarked,
  isInHighlightedPath,
  isHighlightedNode,
  isGlowingNode,
  onToggleBookmark,
}: MapNodeCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute w-64 p-5 rounded-xl border-l-4 text-left transition-all duration-300 touch-manipulation min-h-[72px]",
        "hover:scale-[1.03] active:scale-[0.98]",
        levelColors[node.level],
        status === "locked" && "bg-locked/30 border-locked/50 opacity-60 cursor-not-allowed hover:scale-100",
        status === "available" &&
          "bg-card border-border/60 hover:border-primary/70 hover:shadow-xl hover:shadow-primary/15 cursor-pointer",
        status === "completed" && "bg-completed/15 border-completed/60 hover:shadow-lg cursor-pointer",
        isSelected && "ring-2 ring-primary/60 shadow-xl shadow-primary/20 scale-[1.03]",
        isSearchMatch && "ring-2 ring-yellow-400 shadow-xl shadow-yellow-400/40 animate-pulse",
        isInHighlightedPath && !isSelected && !isSearchMatch && "ring-2 ring-primary/30 shadow-md shadow-primary/10",
        isHighlightedNode && !isSearchMatch && "ring-2 ring-primary/50 animate-pulse shadow-xl shadow-primary/30",
        isGlowingNode &&
          !isSelected &&
          !isHighlightedNode &&
          "ring-2 ring-amber-400/60 shadow-lg shadow-amber-400/30 animate-glow",
      )}
      style={{
        left: node.position.x,
        top: node.position.y,
        transform: "translate(-50%, -50%)",
      }}
      disabled={status === "locked"}
    >
      {isGlowingNode && (
        <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-amber-500 text-amber-950 text-[10px] font-bold uppercase tracking-wide shadow-md">
          Next
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <h3
          className={cn(
            "font-bold text-base leading-tight",
            status === "locked" ? "text-locked-foreground" : "text-foreground",
          )}
        >
          {node.title}
        </h3>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {status !== "locked" && onToggleBookmark && (
            <BookmarkButton isBookmarked={!!isBookmarked} onClick={onToggleBookmark} size="sm" />
          )}
          {status === "completed" && (
            <div className="w-7 h-7 rounded-full bg-completed flex items-center justify-center">
              <Check className="w-4 h-4 text-completed-foreground" />
            </div>
          )}
          {status === "locked" && <Lock className="w-6 h-6 text-locked-foreground" />}
        </div>
      </div>
      <p
        className={cn(
          "text-xs mt-2 line-clamp-2 leading-relaxed",
          status === "locked" ? "text-locked-foreground/80" : "text-muted-foreground/90",
        )}
      >
        {node.summary}
      </p>
      <div className="flex items-center gap-2 mt-3">
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full",
            status === "locked" ? "bg-locked/50 text-locked-foreground" : "bg-muted/60 text-muted-foreground",
          )}
        >
          {node.level}
        </span>
        <span
          className={cn("text-[10px]", status === "locked" ? "text-locked-foreground/60" : "text-muted-foreground/80")}
        >
          {node.timeMinutes} min
        </span>
      </div>
    </button>
  )
}
