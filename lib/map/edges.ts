import type { MapEdge } from "./types"
import { mapNodes } from "./nodes"

// Generate edges from prereqs
export const mapEdges: MapEdge[] = mapNodes.flatMap((node) =>
  node.prereqs.map((prereqId) => ({
    id: `${prereqId}-${node.id}`,
    source: prereqId,
    target: node.id,
  })),
)
