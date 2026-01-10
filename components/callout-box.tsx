import { cn } from "@/lib/utils"
import { AlertTriangle, Lightbulb } from "lucide-react"

interface CalloutBoxProps {
  type: "mistake" | "tip"
  content: string
}

export function CalloutBox({ type, content }: CalloutBoxProps) {
  return (
    <div
      className={cn(
        "flex gap-3 p-4 rounded-lg border",
        type === "mistake"
          ? "bg-red-500/10 border-red-500/30 text-red-200"
          : "bg-primary/10 border-primary/30 text-primary",
      )}
    >
      {type === "mistake" ? (
        <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
      ) : (
        <Lightbulb className="h-5 w-5 flex-shrink-0 mt-0.5" />
      )}
      <div>
        <p className="font-semibold mb-1">{type === "mistake" ? "Common Mistake" : "Pro Tip"}</p>
        <p className="text-sm opacity-90">{content}</p>
      </div>
    </div>
  )
}
