import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ShieldAlert, Target } from "lucide-react"

export default function MentorshipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNav />

      <main className="flex-1">
        <div className="container px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Mentorship
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Mentorship is invite-only and intentionally limited. It is designed for traders who have completed the
            fundamentals and want direct accountability on execution, risk control, and consistency.
          </p>

          <section className="mb-10">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">What it focuses on</h2>
            <div className="grid gap-4 sm:gap-6">
              <div className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Execution discipline</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We focus on repeatable routines: pre-market plan, defined triggers, and post-trade review. The goal
                    is to trade the plan regardless of noise.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-chart-2/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Accountability loops</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Journals are reviewed for rule adherence, not P&L. The work is to identify leaks, fix them, and
                    measure progress over time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Risk control first</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every decision is filtered through risk limits. If the trade breaks your plan, the answer is no.
                    We protect capital so you can stay in the game long enough to build skill.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Who it is not for</h2>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                Traders looking for signals, shortcuts, or guarantees.
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                Anyone unwilling to journal, review, and follow risk rules.
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                Beginners who have not completed the risk and psychology foundations in the map.
              </li>
            </ul>
          </section>

          <section className="bg-card border border-border rounded-lg p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">Apply when you are ready</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              If you have the fundamentals in place and want structured accountability, you can request an invite. No
              pricing is listed here, and no results are promised. This is a commitment to process.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="mailto:hello@xtrader.io?subject=Mentorship%20Application">Apply for Mentorship</Link>
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
