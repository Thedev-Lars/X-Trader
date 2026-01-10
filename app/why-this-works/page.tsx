import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
import { Brain, ShieldCheck, Sigma } from "lucide-react"

export default function WhyThisWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNav />

      <main className="flex-1">
        <div className="container px-4 sm:px-6 py-8 sm:py-12 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Why This Works
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Most trading education fails because it starts with tactics instead of fundamentals. The map reverses that
            order. It prioritizes survival skills, then decision quality, then execution. This page explains the logic
            behind the sequence and why the focus stays on process, not profits.
          </p>

          <section className="mb-10">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Why most traders fail</h2>
            <div className="grid gap-4 sm:gap-6">
              <div className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Risk is ignored or misunderstood</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Leverage makes small mistakes expensive. Many traders size based on emotion or margin requirements
                    instead of a defined risk plan, which turns normal variance into account-ending drawdowns.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-chart-2/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Psychology breaks consistency</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The market amplifies emotion. Fear, impatience, and the urge to make losses back lead to rule breaks
                    that compound quickly. Without journaling and review, these patterns never change.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Sigma className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Randomness is underestimated</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Even good setups lose. Traders who believe every loss is a mistake start changing systems or forcing
                    trades. The result is a cycle of inconsistent inputs and inconsistent outcomes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Why the map follows a specific order</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The map begins with risk fundamentals because any strategy can fail without defined loss limits. Next,
                it introduces psychology and journaling so you can measure and correct behavior before scaling size or
                complexity. Only after those foundations are stable do you move into market structure, execution, and
                tools.
              </p>
              <p>
                This order mirrors how professional desks train: define risk, build repeatable routines, then layer in
                tactics. It reduces the chance of learning the wrong lesson from a random streak of wins or losses.
              </p>
            </div>
          </section>

          <section className="bg-card border border-border rounded-lg p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-foreground mb-3">Process over profits</h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Profits are an outcome, not a method. The process is what you can control: position sizing, pre-trade
                checks, journaling, and execution discipline. When the process is consistent, the results become
                measurable and improvable.
              </p>
              <p>
                This platform is designed to keep attention on those controllables. The goal is not to promise returns;
                it is to build competence that survives variance.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
