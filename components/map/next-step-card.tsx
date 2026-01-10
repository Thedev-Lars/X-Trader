"use client"

import type { MapNode } from "@/lib/map/types"
import { phases } from "@/lib/map/types"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

interface NextStepCardProps {
  nextNode: MapNode | null
  onOpenLesson?: () => void
}

const nodeReasons: Record<string, string> = {
  "futures-basics": "Every journey starts here—understand what you're trading.",
  "tick-values": "Know your numbers before risking real money.",
  "margin-leverage": "Leverage can make or break you. Learn it now.",
  "market-structure": "See the market clearly before making decisions.",
  "session-timing": "Trade when the market is actually moving.",
  "risk-fundamentals": "This is the lesson that saves accounts.",
  "trading-psychology-intro": "Your mind is your biggest edge—or your biggest enemy.",
  "position-sizing": "Size your trades to survive the bad days.",
  "stop-placement": "Bad stops kill good trades. Get this right.",
  "breakout-entries": "Your first real execution strategy.",
  "pullback-entries": "Better entries, better risk-reward.",
  "trade-management": "Entries are easy. Management is where money is made.",
  "journaling-basics": "Track everything. Improve everything.",
  "order-flow-basics": "See what other traders are actually doing.",
  "playbook-building": "Turn your best setups into repeatable processes.",
}

export function NextStepCard({ nextNode, onOpenLesson }: NextStepCardProps) {
  if (!nextNode) return null

  const phaseInfo = phases.find((p) => p.id === nextNode.phase)
  const reason = nodeReasons[nextNode.id] || `Continue your ${phaseInfo?.title || "learning"} journey.`

  return (
    <div className="mx-4 mt-3 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-primary/20 flex-shrink-0">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-primary uppercase tracking-wide">Next Step</span>
            {phaseInfo && <span className="text-xs text-muted-foreground">• {phaseInfo.title}</span>}
          </div>
          <h3 className="font-semibold text-foreground mb-1 truncate">{nextNode.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-1">{reason}</p>
        </div>
        <Link href={`/learn/${nextNode.slug}`} className="flex-shrink-0">
          <Button size="sm" className="gap-1.5 h-9" onClick={onOpenLesson}>
            Open
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
