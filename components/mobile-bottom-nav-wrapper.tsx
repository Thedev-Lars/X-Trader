"use client"

import { usePathname } from "next/navigation"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"

export function MobileBottomNavWrapper() {
  const pathname = usePathname()

  if (pathname === "/") {
    return null
  }

  return (
    <>
      {pathname !== "/map" && <div className="md:hidden h-16 safe-area-inset-bottom" aria-hidden="true" />}
      <MobileBottomNav />
    </>
  )
}
