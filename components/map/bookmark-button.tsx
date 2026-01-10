"use client"

import { Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BookmarkButtonProps {
  isBookmarked: boolean
  onClick: () => void
  size?: "sm" | "default"
}

export function BookmarkButton({ isBookmarked, onClick, size = "default" }: BookmarkButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      className={cn(
        "transition-all hover:scale-110 active:scale-95", // Enhanced hover scale and added active state for "decisive" click feel
        size === "sm" ? "h-8 w-8 min-h-[44px] min-w-[44px]" : "h-11 w-11",
        isBookmarked && "text-primary",
      )}
      title={isBookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      <Bookmark
        className={cn(
          size === "sm" ? "w-5 h-5" : "w-6 h-6", // Increased bookmark icon size from w-4 to w-5 for better visibility
          isBookmarked && "fill-current animate-in zoom-in duration-200",
        )}
      />
    </Button>
  )
}
