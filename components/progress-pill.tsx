interface ProgressPillProps {
  completed: number
  total: number
}

export function ProgressPill({ completed, total }: ProgressPillProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border">
      <div className="relative w-24 h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-primary rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm font-medium text-foreground">
        {completed} / {total}
      </span>
    </div>
  )
}
