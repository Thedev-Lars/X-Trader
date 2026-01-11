import Link from "next/link"
import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Brain, ShieldCheck, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNav />

      <main className="flex-1">
        <section className="container px-4 sm:px-6 py-10 sm:py-16 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Futures Education</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance">
                A calm, structured path for traders who want process first.
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                X Trader is an education system built around risk control, psychology, and execution. The map guides
                you in the right order so you build skill without chasing hype.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="h-12">
                  <Link href="/map">
                    Open the Map
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 bg-transparent">
                  <Link href="/mentorship">Mentorship Overview</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Risk-first curriculum</p>
                  <p className="text-xs text-muted-foreground">Loss limits before setups.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-chart-2/15 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-chart-2" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Psychology built in</p>
                  <p className="text-xs text-muted-foreground">Track behavior, not just P&L.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Execution discipline</p>
                  <p className="text-xs text-muted-foreground">Repeatable routines over guesses.</p>
                </div>
              </div>
              <div className="pt-2">
                <Link href="/map" className="text-sm text-primary hover:underline inline-flex items-center gap-2">
                  Start with the knowledge map
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card/40">
          <div className="container px-4 sm:px-6 py-10 sm:py-14 max-w-5xl space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">Why it works</h2>
              <p className="text-muted-foreground leading-relaxed">
                Most traders fail for three reasons: risk is undefined, psychology is unmanaged, and randomness is
                misunderstood. Our map addresses them in order, with calm, repeatable steps.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Risk comes first",
                  description: "Position sizing, stops, and daily loss limits anchor every decision.",
                },
                {
                  title: "Psychology is trained",
                  description: "Journaling and review build awareness and accountability.",
                },
                {
                  title: "Randomness is expected",
                  description: "Process quality matters more than any single outcome.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-background p-5">
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container px-4 sm:px-6 py-10 sm:py-14 max-w-5xl space-y-6">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">Learning order that compounds</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Foundations",
                description: "Contracts, risk, and structure so you can survive variance.",
              },
              {
                title: "Execution",
                description: "Entry models and trade management once risk is stable.",
              },
              {
                title: "Order Flow",
                description: "Advanced confirmation only after structure is clear.",
              },
              {
                title: "Mastery",
                description: "Review loops, playbooks, and accountability.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-card/40">
          <div className="container px-4 sm:px-6 py-10 sm:py-14 max-w-5xl grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">Process over profits</h2>
              <p className="text-muted-foreground leading-relaxed">
                This is education, not promises. The process is what you can control: risk, routines, and execution.
                When the process is consistent, results become measurable and improvable.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-5 space-y-3 text-sm text-muted-foreground">
              <p>✓ Define risk before entry</p>
              <p>✓ Follow the same routine every session</p>
              <p>✓ Review outcomes weekly, not hourly</p>
              <Button asChild className="w-full h-11 mt-2">
                <Link href="/map">Start the Map</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
