"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Compass, Map } from "lucide-react"

interface OnboardingModalProps {
  onStartHere: () => void
  onBrowseMap: () => void
}

export function OnboardingModal({ onStartHere, onBrowseMap }: OnboardingModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem("seenOnboarding")
    if (!hasSeenOnboarding) {
      setIsOpen(true)
    }
  }, [])

  const handleStartHere = () => {
    localStorage.setItem("seenOnboarding", "true")
    setIsOpen(false)
    onStartHere()
  }

  const handleBrowseMap = () => {
    localStorage.setItem("seenOnboarding", "true")
    setIsOpen(false)
    onBrowseMap()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Compass className="w-6 h-6 text-primary" />
            New to futures trading?
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed pt-2">
            Start with Foundations. Risk and structure first, so you don't blow up.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          <Button size="lg" className="w-full h-12 text-base font-semibold" onClick={handleStartHere}>
            Start Here
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full h-12 text-base gap-2 bg-transparent"
            onClick={handleBrowseMap}
          >
            <Map className="w-4 h-4" />
            Browse Map
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
