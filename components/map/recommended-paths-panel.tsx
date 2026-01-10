"use client"

import { Compass, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { learningPaths } from "@/lib/paths/paths"
import { cn } from "@/lib/utils"

interface RecommendedPathsPanelProps {
  completedSet: Set<string>
  highlightedPath: string | null
  onPathSelect: (pathId: string | null) => void
  onHighlightNextNode: (nodeId: string) => void
}

export function RecommendedPathsPanel({
  completedSet,
  highlightedPath,
  onPathSelect,
  onHighlightNextNode,
}: RecommendedPathsPanelProps) {
  return (
    <div className="border-t border-border pt-4">
      <div className="flex items-center gap-2 mb-4">
        <Compass className="w-4 h-4 text-muted-foreground" />
        <h3 className="text-sm font-medium text-foreground">Learning Paths</h3>
      </div>

      <div className="space-y-3">
        {learningPaths.map((path) => {
          const completedInPath = path.nodeIds.filter((id) => completedSet.has(id)).length
          const progress = Math.round((completedInPath / path.nodeIds.length) * 100)
          const isHighlighted = highlightedPath === path.id

          // Find next uncompleted node in path
          const nextNodeId = path.nodeIds.find((id) => !completedSet.has(id))

          return (
            <div
              key={path.id}
              className={cn(
                "p-3 rounded-lg border transition-all cursor-pointer",
                isHighlighted
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-card/50 hover:border-muted-foreground/30",
              )}
              onClick={() => onPathSelect(isHighlighted ? null : path.id)}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="text-sm font-medium text-foreground leading-tight">{path.title}</h4>
                {progress === 100 && <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />}
              </div>

              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{path.description}</p>

              <div className="flex items-center gap-2 mb-2">
                <Progress value={progress} className="h-1.5 flex-1" />
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {completedInPath}/{path.nodeIds.length}
                </span>
              </div>

              {nextNodeId && isHighlighted && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2 text-xs h-7 bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation()
                    onHighlightNextNode(nextNodeId)
                  }}
                >
                  Go to next lesson
                </Button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
