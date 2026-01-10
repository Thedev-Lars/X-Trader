"use client"

import type React from "react"

import { useRef, useState, useCallback, useEffect } from "react"
import type { MapNode, MapEdge, NodeLevel, NodeTag } from "@/lib/map/types"
import { MapNodeCard } from "./map-node-card"
import { getNodeStatus } from "@/lib/progress/progress"
import { learningPaths } from "@/lib/paths/paths"

interface MapCanvasProps {
  nodes: MapNode[]
  edges: MapEdge[]
  completedSet: Set<string>
  selectedNode: MapNode | null
  selectedLevels: Set<NodeLevel>
  selectedTags: Set<NodeTag>
  showOnlyAvailable: boolean
  onNodeSelect: (node: MapNode) => void
  searchQuery: string
  bookmarkedIds: Set<string>
  onToggleBookmark: (nodeId: string) => void
  highlightedPath: string | null
  highlightedNodeId: string | null
  glowingNodeId?: string | null
}

export function MapCanvas({
  nodes,
  edges,
  completedSet,
  selectedNode,
  selectedLevels,
  selectedTags,
  showOnlyAvailable,
  onNodeSelect,
  searchQuery,
  bookmarkedIds,
  onToggleBookmark,
  highlightedPath,
  highlightedNodeId,
  glowingNodeId,
}: MapCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [hasInitializedPosition, setHasInitializedPosition] = useState(false)

  // Get highlighted path node IDs
  const highlightedPathNodeIds = highlightedPath
    ? new Set(learningPaths.find((p) => p.id === highlightedPath)?.nodeIds || [])
    : new Set<string>()

  // Filter nodes based on selected filters and search
  const filteredNodes = nodes.filter((node) => {
    const status = getNodeStatus(node, completedSet)

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const matchesSearch =
        node.title.toLowerCase().includes(query) ||
        node.summary.toLowerCase().includes(query) ||
        node.tags.some((t) => t.toLowerCase().includes(query))
      if (!matchesSearch) return false
    }

    if (selectedLevels.size > 0 && !selectedLevels.has(node.level)) return false
    if (selectedTags.size > 0 && !node.tags.some((t) => selectedTags.has(t))) return false
    if (showOnlyAvailable && status !== "available") return false

    return true
  })

  // Filter edges to only show connections between visible nodes
  const filteredNodeIds = new Set(filteredNodes.map((n) => n.id))
  const filteredEdges = edges.filter((edge) => filteredNodeIds.has(edge.source) && filteredNodeIds.has(edge.target))

  useEffect(() => {
    if (!hasInitializedPosition && containerRef.current) {
      const startNode = nodes.find((n) => n.id === "futures-basics")
      if (startNode) {
        const containerRect = containerRef.current.getBoundingClientRect()
        // Center the start node with slight offset to the left to show progression
        const centerX = containerRect.width * 0.3
        const centerY = containerRect.height / 2
        setOffset({
          x: centerX - startNode.position.x * scale,
          y: centerY - startNode.position.y * scale,
        })
        setHasInitializedPosition(true)
      }
    }
  }, [nodes, scale, hasInitializedPosition])

  useEffect(() => {
    if (highlightedNodeId) {
      const node = nodes.find((n) => n.id === highlightedNodeId)
      if (node && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const centerX = containerRect.width / 2
        const centerY = containerRect.height / 2
        setOffset({
          x: centerX - node.position.x * scale,
          y: centerY - node.position.y * scale,
        })
      }
    }
  }, [highlightedNodeId, nodes, scale])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === containerRef.current || (e.target as HTMLElement).classList.contains("map-grid-bg")) {
        setIsDragging(true)
        setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y })
      }
    },
    [offset],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        setOffset({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        })
      }
    },
    [isDragging, dragStart],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setScale((s) => Math.min(Math.max(0.5, s * delta), 2))
  }, [])

  // Get node positions for edges
  const getNodePosition = (nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId)
    return node?.position || { x: 0, y: 0 }
  }

  const calculateEdgePath = (sourcePos: { x: number; y: number }, targetPos: { x: number; y: number }) => {
    const dx = targetPos.x - sourcePos.x
    const dy = targetPos.y - sourcePos.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    // Offset start/end points to avoid node overlap (node width ~224px / 2 = 112px)
    const nodeRadius = 112
    const startOffset = nodeRadius / distance
    const endOffset = nodeRadius / distance

    const startX = sourcePos.x + dx * startOffset
    const startY = sourcePos.y + dy * startOffset
    const endX = targetPos.x - dx * endOffset
    const endY = targetPos.y - dy * endOffset

    return { startX, startY, endX, endY }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden bg-background map-grid-bg cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent via-50% to-primary/12 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-orange-500/8 opacity-40" />
      </div>

      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: 1300, height: 1000 }}>
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="oklch(0.5 0 0)" />
            </marker>
            <marker id="arrowhead-active" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="oklch(0.72 0.18 160)" />
            </marker>
            <marker id="arrowhead-completed" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="oklch(0.65 0.15 145)" />
            </marker>
          </defs>
          {filteredEdges.map((edge) => {
            const sourcePos = getNodePosition(edge.source)
            const targetPos = getNodePosition(edge.target)
            const sourceStatus = getNodeStatus(nodes.find((n) => n.id === edge.source)!, completedSet)
            const targetStatus = getNodeStatus(nodes.find((n) => n.id === edge.target)!, completedSet)

            const isCompleted = sourceStatus === "completed" && targetStatus === "completed"
            const isActive = sourceStatus === "completed" && targetStatus === "available"
            const isInHighlightedPath =
              highlightedPath && highlightedPathNodeIds.has(edge.source) && highlightedPathNodeIds.has(edge.target)

            const { startX, startY, endX, endY } = calculateEdgePath(sourcePos, targetPos)

            // Calculate midpoint for label
            const midX = (startX + endX) / 2
            const midY = (startY + endY) / 2

            return (
              <g key={edge.id}>
                <line
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke={
                    isInHighlightedPath
                      ? "oklch(0.72 0.18 160)"
                      : isCompleted
                        ? "oklch(0.65 0.15 145)"
                        : isActive
                          ? "oklch(0.72 0.18 160)"
                          : "oklch(0.3 0 0)"
                  }
                  strokeWidth={isInHighlightedPath ? 3 : 2}
                  strokeDasharray={isCompleted || isActive || isInHighlightedPath ? "none" : "4 4"}
                  opacity={isCompleted || isActive || isInHighlightedPath ? 1 : 0.5}
                  markerEnd={
                    isCompleted
                      ? "url(#arrowhead-completed)"
                      : isActive || isInHighlightedPath
                        ? "url(#arrowhead-active)"
                        : "url(#arrowhead)"
                  }
                />
                <g transform={`translate(${midX}, ${midY})`}>
                  <rect x="-24" y="-10" width="48" height="20" rx="4" fill="oklch(0.15 0 0)" opacity="0.95" />
                  <text
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="10"
                    fill={isInHighlightedPath || isActive ? "oklch(0.72 0.18 160)" : "oklch(0.6 0 0)"}
                    className="select-none font-medium"
                  >
                    requires
                  </text>
                </g>
              </g>
            )
          })}
        </svg>

        {/* Render nodes */}
        {filteredNodes.map((node) => {
          const status = getNodeStatus(node, completedSet)
          const isSearchMatch =
            searchQuery &&
            (node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              node.summary.toLowerCase().includes(searchQuery.toLowerCase()))
          const isInHighlightedPath = highlightedPathNodeIds.has(node.id)
          const isHighlightedNode = highlightedNodeId === node.id
          const isGlowingNode = glowingNodeId === node.id

          return (
            <MapNodeCard
              key={node.id}
              node={node}
              status={status}
              isSelected={selectedNode?.id === node.id}
              isSearchMatch={!!isSearchMatch}
              isBookmarked={bookmarkedIds.has(node.id)}
              isInHighlightedPath={isInHighlightedPath}
              isHighlightedNode={isHighlightedNode}
              isGlowingNode={isGlowingNode}
              onClick={() => onNodeSelect(node)}
              onToggleBookmark={() => onToggleBookmark(node.id)}
            />
          )
        })}
      </div>
    </div>
  )
}
