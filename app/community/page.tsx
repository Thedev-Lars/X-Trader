import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Users, MessageCircle, ShieldCheck, Scale } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNav />

      <main className="flex-1">
        <section className="py-12 sm:py-20 border-b border-border">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Free & Open Community
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                A collaborative, grounded space for traders.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                The Community is a free, open group for traders who want to learn in public, compare notes, and improve
                decision-making through shared discussion and support.
              </p>
              <a href="https://discord.gg/xtrader" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4" />
                  Join the Community
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">What the Community includes</h2>
              <p className="text-sm text-muted-foreground">
                A focused space for discussion, learning support, and weekly reflections.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Trader discussion</h3>
                <p className="text-sm text-muted-foreground">
                  Conversations around structure, risk, and decision quality.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Weekly recaps</h3>
                <p className="text-sm text-muted-foreground">
                  Regular summaries of what mattered and what to improve.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Resource sharing</h3>
                <p className="text-sm text-muted-foreground">
                  Checklists, templates, and routines that support consistency.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Learning support</h3>
                <p className="text-sm text-muted-foreground">
                  Ask questions and get feedback on process-focused topics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-border">
          <div className="container px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">
              What the Community does NOT include
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">No 1:1 calls</p>
                  <p className="text-muted-foreground">
                    This is a group discussion space, not private coaching.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">No signals</p>
                  <p className="text-muted-foreground">
                    We do not provide trade calls or alerts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">No model access</p>
                  <p className="text-muted-foreground">
                    Proprietary models are reserved for mentorship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-border">
          <div className="container px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">Community standards</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Process over outcomes</p>
                  <p className="text-muted-foreground">
                    Share reasoning, not screenshots. Context matters more than PnL.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Respectful critique</p>
                  <p className="text-muted-foreground">
                    Keep feedback specific, honest, and helpful.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">No hype or guru behavior</p>
                  <p className="text-muted-foreground">
                    We keep the tone professional and grounded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-border bg-muted/30">
          <div className="container px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Join the Community</h2>
              <p className="text-muted-foreground mb-6">
                Join the free Community to learn with other traders in a grounded, collaborative environment.
              </p>
              <a href="https://discord.gg/xtrader" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4" />
                  Join the Community
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-border">
          <div className="container px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Invite-only Mentorship
              </Badge>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">$75/month, by invitation</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Mentorship is for traders who have completed the Foundations phase and want guided execution feedback.
                It is invite-only and focused on implementation, accountability, and decision quality.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">1:1 calls</h3>
                <p className="text-sm text-muted-foreground">Private sessions to review execution and routines.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Validated trading models</h3>
                <p className="text-sm text-muted-foreground">Frameworks used to guide structure, entries, and risk.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Live execution guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time reasoning and decision context. Not for mirroring.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Accountability and review</h3>
                <p className="text-sm text-muted-foreground">Honest review to build consistency and discipline.</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto space-y-3 text-sm mb-8">
              <h3 className="font-semibold text-foreground text-center">This is NOT for you if...</h3>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">You want signals, trade calls, or copy-trading.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">You are looking for guarantees, income promises, or shortcuts.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">You are not willing to follow a routine or document decisions.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">You have not completed the Foundations phase.</p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                Apply for Mentorship
              </Button>
              <p className="text-xs text-muted-foreground mt-3">
                Risk disclaimer: Trading involves substantial risk. Mentorship is educational and provides no profit
                guarantees.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
