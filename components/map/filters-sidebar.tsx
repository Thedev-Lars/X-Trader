"use client"

import { useState } from "react"
import type { NodeLevel, NodeTag } from "@/lib/map/types"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronDown } from "lucide-react"
import { SearchBar } from "./search-bar"
import { RecommendedPathsPanel } from "./recommended-paths-panel"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { mapNodes } from "@/lib/map/nodes"

interface FiltersSidebarProps {
  levels: NodeLevel[]
  tags: NodeTag[]
  selectedLevels: Set<NodeLevel>
  selectedTags: Set<NodeTag>
  showOnlyAvailable: boolean
  onLevelToggle: (level: NodeLevel) => void
  onTagToggle: (tag: NodeTag) => void
  onAvailableToggle: () => void
  onResetProgress: () => void
  searchQuery: string
  onSearchChange: (query: string) => void
  completedSet: Set<string>
  highlightedPath: string | null
  onPathSelect: (pathId: string | null) => void
  onHighlightNextNode: (nodeId: string) => void
}

export function FiltersSidebar({
  levels,
  tags,
  selectedLevels,
  selectedTags,
  showOnlyAvailable,
  onLevelToggle,
  onTagToggle,
  onAvailableToggle,
  onResetProgress,
  searchQuery,
  onSearchChange,
  completedSet,
  highlightedPath,
  onPathSelect,
  onHighlightNextNode,
}: FiltersSidebarProps) {
  const [tagSearch, setTagSearch] = useState("")

  const progressPercent = Math.round((completedSet.size / mapNodes.length) * 100)

  const getProgressMessage = () => {
    if (progressPercent === 0) return "You're just getting started"
    if (progressPercent < 25) return "Building foundations"
    if (progressPercent < 50) return "Making solid progress"
    if (progressPercent < 75) return "You're well on your way"
    if (progressPercent < 100) return "Almost there!"
    return "All lessons completed!"
  }

  const filteredTags = tags.filter((tag) => tag.toLowerCase().includes(tagSearch.toLowerCase()))

  return (
    <div className="w-64 h-full border-r border-border/50 bg-card p-4 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-sm font-medium text-muted-foreground mb-2">Your Progress</h2>
        <p className="text-base font-semibold text-foreground mb-3 leading-tight">{getProgressMessage()}</p>
        <Progress value={progressPercent} className="h-2.5 mb-2" />
        <p className="text-xs text-muted-foreground">
          {completedSet.size} of {mapNodes.length} lessons
        </p>
      </div>

      <div className="mb-4">
        <SearchBar value={searchQuery} onChange={onSearchChange} placeholder="Search nodes..." />
      </div>

      <div className="mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between bg-transparent">
              <span className="text-sm">Filter Topics</span>
              <div className="flex items-center gap-2">
                {(selectedLevels.size > 0 || selectedTags.size > 0 || showOnlyAvailable) && (
                  <span className="px-1.5 py-0.5 text-xs rounded-full bg-primary text-primary-foreground">
                    {selectedLevels.size + selectedTags.size + (showOnlyAvailable ? 1 : 0)}
                  </span>
                )}
                <ChevronDown className="w-4 h-4" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuLabel>Level</DropdownMenuLabel>
            {levels.map((level) => (
              <DropdownMenuCheckboxItem
                key={level}
                checked={selectedLevels.has(level)}
                onCheckedChange={() => onLevelToggle(level)}
              >
                {level}
              </DropdownMenuCheckboxItem>
            ))}

            <DropdownMenuSeparator />

            <DropdownMenuLabel>Tags</DropdownMenuLabel>
            <div className="px-2 py-1.5">
              <input
                type="text"
                placeholder="Search tags..."
                value={tagSearch}
                onChange={(e) => setTagSearch(e.target.value)}
                className="w-full px-2 py-1 text-sm border border-input rounded bg-background"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            {filteredTags.length === 0 ? (
              <div className="px-2 py-2 text-sm text-muted-foreground text-center">No tags found</div>
            ) : (
              filteredTags.map((tag) => (
                <DropdownMenuCheckboxItem
                  key={tag}
                  checked={selectedTags.has(tag)}
                  onCheckedChange={() => onTagToggle(tag)}
                >
                  {tag}
                </DropdownMenuCheckboxItem>
              ))
            )}

            <DropdownMenuSeparator />

            <DropdownMenuCheckboxItem checked={showOnlyAvailable} onCheckedChange={onAvailableToggle}>
              Show only Available
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <RecommendedPathsPanel
        completedSet={completedSet}
        highlightedPath={highlightedPath}
        onPathSelect={onPathSelect}
        onHighlightNextNode={onHighlightNextNode}
      />
    </div>
  )
}
