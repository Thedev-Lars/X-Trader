import { cn } from "@/lib/utils"
import type { NodeTag } from "@/lib/map/types"

interface TagPillsProps {
  tags: NodeTag[]
  size?: "sm" | "md"
}

const tagColors: Record<NodeTag, string> = {
  Execution: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Risk: "bg-red-500/20 text-red-400 border-red-500/30",
  Psychology: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Structure: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Journaling: "bg-green-500/20 text-green-400 border-green-500/30",
  "Order Flow": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
}

export function TagPills({ tags, size = "md" }: TagPillsProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "rounded-full border font-medium",
            tagColors[tag],
            size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm",
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
