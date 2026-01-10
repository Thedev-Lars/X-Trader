"use client"

import type { MapNode, Phase } from "../map/types"
import { mapNodes } from "../map/nodes"
import { learningPaths } from "../paths/paths"

const PROGRESS_KEY = "xtrader_progress"
const QUIZ_KEY = "xtrader_quizzes"

interface Progress {
  completedNodeIds: string[]
  completedQuizSlugs: string[]
}

function getStoredProgress(): Progress {
  if (typeof window === "undefined") {
    return { completedNodeIds: [], completedQuizSlugs: [] }
  }

  try {
    const stored = localStorage.getItem(PROGRESS_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.error("Error reading progress", e)
  }

  return { completedNodeIds: [], completedQuizSlugs: [] }
}

function saveProgress(progress: Progress): void {
  if (typeof window === "undefined") return
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
}

export function getProgress(): Progress {
  return getStoredProgress()
}

export function getCompletedNodeIds(): string[] {
  return getStoredProgress().completedNodeIds
}

export function getCompletedQuizSlugs(): string[] {
  return getStoredProgress().completedQuizSlugs
}

export function markNodeComplete(nodeId: string): void {
  const progress = getStoredProgress()
  if (!progress.completedNodeIds.includes(nodeId)) {
    progress.completedNodeIds.push(nodeId)
    saveProgress(progress)
  }
}

export function markQuizComplete(slug: string): void {
  const progress = getStoredProgress()
  if (!progress.completedQuizSlugs.includes(slug)) {
    progress.completedQuizSlugs.push(slug)
    saveProgress(progress)
  }
}

export function isNodeCompleted(nodeId: string): boolean {
  return getStoredProgress().completedNodeIds.includes(nodeId)
}

export function resetProgress(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(PROGRESS_KEY)
  localStorage.removeItem(QUIZ_KEY)
}

export function isNodeAvailable(node: MapNode, completedSet: Set<string>): boolean {
  if (node.prereqs.length === 0) return true
  return node.prereqs.every((prereqId) => completedSet.has(prereqId))
}

export function getNodeStatus(node: MapNode, completedSet: Set<string>): "locked" | "available" | "completed" {
  if (completedSet.has(node.id)) return "completed"
  if (isNodeAvailable(node, completedSet)) return "available"
  return "locked"
}

export function getNextRecommendedNode(pathId: string, completedSet: Set<string>): MapNode | null {
  const path = learningPaths.find((p) => p.id === pathId)
  if (!path) return null

  for (const nodeId of path.nodeIds) {
    const node = mapNodes.find((n) => n.id === nodeId)
    if (node && !completedSet.has(node.id) && isNodeAvailable(node, completedSet)) {
      return node
    }
  }

  for (const node of mapNodes) {
    if (!completedSet.has(node.id) && isNodeAvailable(node, completedSet)) {
      return node
    }
  }

  return null
}

export function getTotalNodes(): number {
  return mapNodes.length
}

export function getLastCompletedNode(completedIds: string[]): MapNode | null {
  if (completedIds.length === 0) return null
  const lastCompletedId = completedIds[completedIds.length - 1]
  return mapNodes.find((n) => n.id === lastCompletedId) || null
}

export function getPhaseProgress(phase: Phase, completedSet: Set<string>): { completed: number; total: number } {
  const phaseNodes = mapNodes.filter((n) => n.phase === phase)
  const completed = phaseNodes.filter((n) => completedSet.has(n.id)).length
  return { completed, total: phaseNodes.length }
}

export function getCurrentPhase(completedSet: Set<string>): Phase {
  const foundationsProgress = getPhaseProgress("foundations", completedSet)
  const executionProgress = getPhaseProgress("execution", completedSet)

  if (foundationsProgress.total > 0 && foundationsProgress.completed / foundationsProgress.total < 0.5) {
    return "foundations"
  }

  if (executionProgress.total > 0 && executionProgress.completed / executionProgress.total < 0.5) {
    return "execution"
  }

  return "mastery"
}

export function getNextRecommendedNodeInPhase(phase: Phase, completedSet: Set<string>): MapNode | null {
  const phaseNodes = mapNodes.filter((n) => n.phase === phase)

  for (const node of phaseNodes) {
    if (!completedSet.has(node.id) && isNodeAvailable(node, completedSet)) {
      return node
    }
  }

  return null
}
