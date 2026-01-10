import type { MapEdge } from "./types"
import { mapNodes } from "./nodes"

// Generate edges from prereqs
export const mapEdges: MapEdge[] = mapNodes.flatMap((node) =>
  node.prereqs.flatMap((prereqId) =>
    prereqId.split("|").map((resolvedId) => ({
      id: `${resolvedId}-${node.id}`,
      source: resolvedId,
      target: node.id,
    })),
  ),
)
