"use client"

import { phases, type Phase } from "@/lib/map/types"
import { cn } from "@/lib/utils"

interface PhaseTabsProps {
  selectedPhase: Phase | null
  onPhaseSelect: (phase: Phase | null) => void
  phaseProgress: Record<Phase, { completed: number; total: number }>
}

export function PhaseTabs({ selectedPhase, onPhaseSelect, phaseProgress }: PhaseTabsProps) {
  return (
    <div className="flex items-center gap-1 p-1 bg-muted/50 rounded-lg border border-border">
      <button
        onClick={() => onPhaseSelect(null)}
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
            onClick={() => onPhaseSelect(phase.id)}
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
  )
}
