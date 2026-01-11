import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function MentorshipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNav />

      <main className="flex-1">
        <section className="py-12 sm:py-20 border-b border-border">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Invite-only Mentorship
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                A focused program for traders who want execution feedback and accountability.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                Mentorship is invite-only and $75/month. It is designed for traders who have completed the Foundations
                phase and want implementation support, clearer routines, and honest feedback. It is not a signals group
                and does not promise results.
              </p>
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                Apply for Mentorship
              </Button>
              <p className="text-xs text-muted-foreground mt-3">Cancel anytime. Limited seats to keep feedback real.</p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">What mentorship is</h2>
              <p className="text-sm text-muted-foreground">
                A guided execution program focused on implementation support, accountability, and practical feedback.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Implementation support</h3>
                <p className="text-sm text-muted-foreground">
                  Translate your plan into repeatable actions and routines that you can follow daily.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Accountability</h3>
                <p className="text-sm text-muted-foreground">
                  Build consistency with clear standards, check-ins, and review of execution.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Execution feedback</h3>
                <p className="text-sm text-muted-foreground">
                  Honest, practical feedback on decision quality, risk control, and process adherence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-border">
          <div className="container px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">What is included</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">1:1 calls</p>
                  <p className="text-muted-foreground">
                    Scheduled sessions to review execution and align on your routine.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Access to validated trading models</p>
                  <p className="text-muted-foreground">
                    Learn the frameworks used to guide structure, entries, and risk.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Live execution guidance with real-time reasoning</p>
                  <p className="text-muted-foreground">
                    Educational walkthroughs of decisions and risk logic. Not for mirroring.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Accountability and review</p>
                  <p className="text-muted-foreground">
                    Review sessions that highlight habits, mistakes, and corrective actions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-border">
          <div className="container px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">This is NOT for you if...</h2>
            <div className="max-w-3xl mx-auto space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">
                  You want a signals group, copy trades, or rely on someone else to make decisions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">
                  You are looking for quick wins, guaranteed outcomes, or income promises.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">
                  You are not willing to follow a routine or document your decisions consistently.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">
                  You are not ready for direct feedback on risk management and execution discipline.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">
                  You have not completed the Foundations phase or are skipping the basics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-border bg-muted/30">
          <div className="container px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">$75/month</h2>
              <p className="text-muted-foreground mb-6">Invite-only. Cancel anytime.</p>
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                Apply for Mentorship
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-border">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Risk and no-profit disclaimer</h2>
              <p className="text-sm text-muted-foreground">
                Trading futures and derivatives involves substantial risk and is not suitable for every investor. This
                mentorship is educational and does not provide investment advice, trade recommendations, or guarantees
                of performance or profits. You are responsible for your own decisions and risk management.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
