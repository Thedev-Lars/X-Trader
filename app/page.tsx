import Link from "next/link"
import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, Brain, TrendingUp, Shield, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      {/* Subtle grid background */}
      <div className="fixed inset-0 map-grid-bg opacity-50 pointer-events-none" />

      <AppNav />

      <main className="flex-1 relative">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl" />

          <div className="container px-4 sm:px-6 relative">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-completed animate-pulse" />
                  <span className="text-xs font-medium text-muted-foreground">27 lessons. Zero fluff.</span>
                </div>
              </div>

              {/* Main headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-[1.1] tracking-tight">
                <span className="text-foreground">Stop gambling.</span>
                <br />
                <span className="gradient-text">Start trading.</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground text-center mb-8 max-w-2xl mx-auto leading-relaxed">
                A structured learning system for futures traders. Risk management first. Psychology second. Setups last.
                The order matters.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/map">
                  <Button size="lg" className="gap-2 h-12 px-6 text-base font-semibold">
                    <Zap className="w-4 h-4" />
                    Open Knowledge Map
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/curriculum">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-6 text-base bg-transparent border-border hover:bg-card"
                  >
                    View Curriculum
                  </Button>
                </Link>
              </div>

              {/* Stats row */}
              <div className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">27</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Lessons</div>
                </div>
                <div className="text-center border-x border-border">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">3</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Learning Phases</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Free</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 sm:py-24 border-t border-border relative">
          <div className="container px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                {/* Problem */}
                <div>
                  <div className="text-xs font-mono text-destructive mb-3 uppercase tracking-wider">The Problem</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Most traders learn backwards</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      They chase setups before understanding risk
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      They skip psychology until they blow an account
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      They watch random YouTube videos with no structure
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      They pay $5k for courses that could be a PDF
                    </li>
                  </ul>
                </div>

                {/* Solution */}
                <div>
                  <div className="text-xs font-mono text-completed mb-3 uppercase tracking-wider">The Solution</div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Learn in the right order</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-completed mt-2 flex-shrink-0" />
                      Start with risk rules that protect your capital
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-completed mt-2 flex-shrink-0" />
                      Build market structure understanding
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-completed mt-2 flex-shrink-0" />
                      Then learn entries and order flow
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-completed mt-2 flex-shrink-0" />
                      Progress is tracked. Prerequisites enforced.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Phases Section */}
        <section className="py-16 sm:py-24 border-t border-border">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12">
              <div className="text-xs font-mono text-primary mb-3 uppercase tracking-wider">The Curriculum</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Three phases. One path.</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Phase 1 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card border border-border rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mb-2">Phase 1</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Foundations</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Risk management, position sizing, market structure. The boring stuff that keeps you alive.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-chart-2/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card border border-border rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-chart-2/20 flex items-center justify-center mb-4">
                    <Target className="w-5 h-5 text-chart-2" />
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mb-2">Phase 2</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Execution</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Order flow, entries, trade management. Where the edge actually lives.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-chart-3/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-card border border-border rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-chart-3/20 flex items-center justify-center mb-4">
                    <Brain className="w-5 h-5 text-chart-3" />
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mb-2">Phase 3</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Mastery</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Psychology, journaling, playbook building. From trader to professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 sm:py-24 border-t border-border">
          <div className="container px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="p-5 rounded-xl border border-border bg-card/50">
                <TrendingUp className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1 text-sm">Progress Tracking</h3>
                <p className="text-xs text-muted-foreground">See exactly where you are and what's next.</p>
              </div>
              <div className="p-5 rounded-xl border border-border bg-card/50">
                <Shield className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1 text-sm">Prerequisites</h3>
                <p className="text-xs text-muted-foreground">Can't skip ahead. Learn in the right order.</p>
              </div>
              <div className="p-5 rounded-xl border border-border bg-card/50">
                <Zap className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1 text-sm">Interactive Quizzes</h3>
                <p className="text-xs text-muted-foreground">Reinforce concepts before moving on.</p>
              </div>
              <div className="p-5 rounded-xl border border-border bg-card/50">
                <Users className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1 text-sm">Community</h3>
                <p className="text-xs text-muted-foreground">Learn alongside other serious traders.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 border-t border-border">
          <div className="container px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to learn properly?
              </h2>
              <p className="text-muted-foreground mb-8">No signup required. No credit card. Just start learning.</p>
              <Link href="/map">
                <Button size="lg" className="gap-2 h-12 px-8 text-base font-semibold">
                  Start Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
