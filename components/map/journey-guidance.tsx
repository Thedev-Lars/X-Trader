"use client"

import { phases, type Phase } from "@/lib/map/types"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { HelpCircle } from "lucide-react"

interface JourneyGuidanceProps {
  currentPhase: Phase
  phaseProgress: { completed: number; total: number }
}

export function JourneyGuidance({ currentPhase, phaseProgress }: JourneyGuidanceProps) {
  const phase = phases.find((p) => p.id === currentPhase)
  if (!phase) return null

  const progressPercent =
    phaseProgress.total > 0 ? Math.round((phaseProgress.completed / phaseProgress.total) * 100) : 0

  return (
    <div className="px-4 py-3 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Current Phase</span>
            <span className="text-xs text-muted-foreground">{progressPercent}% complete</span>
          </div>
          <h2 className="text-lg font-semibold text-foreground">{phase.title}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-foreground">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm">Why this order?</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Why This Learning Order?</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Futures rewards restraint. We build risk and structure first so execution doesn't turn into gambling.
              </p>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-muted/50">
                  <h4 className="font-medium text-foreground mb-1">1. Foundations (Survival)</h4>
                  <p>
                    Learn to protect capital before learning to grow it. Most traders blow up because they skip this.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <h4 className="font-medium text-foreground mb-1">2. Execution (Consistency)</h4>
                  <p>Once you can survive, learn to execute with a repeatable process. Quality over quantity.</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <h4 className="font-medium text-foreground mb-1">3. Mastery (Self-Control)</h4>
                  <p>The final edge is emotional. Reduce mistakes, stick to the plan, and compound your results.</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Progress bar */}
      <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progressPercent}%` }} />
      </div>
    </div>
  )
}
