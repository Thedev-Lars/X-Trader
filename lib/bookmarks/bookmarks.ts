const BOOKMARKS_KEY = "xtrader_bookmarks"

export function getBookmarkedNodeIds(): string[] {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem(BOOKMARKS_KEY)
  return stored ? JSON.parse(stored) : []
}

export function toggleBookmark(nodeId: string): boolean {
  const bookmarks = getBookmarkedNodeIds()
  const index = bookmarks.indexOf(nodeId)

  if (index === -1) {
    bookmarks.push(nodeId)
  } else {
    bookmarks.splice(index, 1)
  }

  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks))

  window.dispatchEvent(new Event("storage"))
  window.dispatchEvent(new Event("bookmarkChange"))

  return index === -1 // returns true if bookmark was added
}

export function isBookmarked(nodeId: string): boolean {
  return getBookmarkedNodeIds().includes(nodeId)
}

export function clearBookmarks(): void {
  localStorage.removeItem(BOOKMARKS_KEY)
  window.dispatchEvent(new Event("storage"))
  window.dispatchEvent(new Event("bookmarkChange"))
}
