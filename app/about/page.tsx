import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
import { ShieldCheck, Brain, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNav />

      <main className="flex-1">
        <div className="container px-4 sm:px-6 py-8 sm:py-12 max-w-3xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
              About X Trader
            </h1>
          </div>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">What is X Trader?</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                X Trader is a structured learning platform designed to help aspiring futures traders build a solid
                foundation before risking real capital. The interactive knowledge map guides you through essential
                concepts in the optimal order, ensuring you don&apos;t skip crucial fundamentals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you&apos;re completely new to futures or looking to fill gaps in your knowledge, X Trader
                provides a clear path from basic concepts through advanced execution strategies.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Learning Philosophy</h2>
            <div className="grid gap-4 sm:gap-6">
              <div className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Risk First</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Before learning any entry strategies, you must understand risk management. Position sizing, stops,
                    and capital preservation come before exciting setups.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-chart-2/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-chart-2" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Psychology Matters</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Trading psychology is introduced early and reinforced throughout. Understanding your own behavior is
                    just as important as understanding the markets.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Progressive Complexity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Topics unlock based on prerequisites. You can&apos;t skip ahead to order flow without understanding
                    basic market structure. This ensures a solid foundation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-lg p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Important Disclaimer</h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                X Trader is for educational purposes only. Nothing on this platform constitutes financial advice,
                trading recommendations, or investment guidance.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Futures trading involves substantial risk of loss and is not suitable for all investors. Past
                performance is not indicative of future results. You should only trade with capital you can afford to
                lose.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Always do your own research and consider consulting with a qualified financial professional before
                making any trading decisions.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
