import { Suspense } from "react"
import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
import { CurriculumContent } from "@/components/curriculum/curriculum-content"

export default function CurriculumPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNav />
      <main className="flex-1">
        <Suspense fallback={null}>
          <CurriculumContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
