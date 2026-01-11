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
                Free Trader Community
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                A serious community for traders who value process.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                This is a free community built for discussion, accountability, and shared learning. The goal is to
                improve decision quality, not chase shortcuts.
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
            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Discussion</h3>
                <p className="text-sm text-muted-foreground">
                  Market discussion focused on structure, risk, and execution decisions.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Accountability</h3>
                <p className="text-sm text-muted-foreground">
                  Share process goals and review routines with other serious traders.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Shared learning</h3>
                <p className="text-sm text-muted-foreground">
                  Focus on what is working, what is not, and how to improve behavior.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-border">
          <div className="container px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">Community rules</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">No signals</p>
                  <p className="text-muted-foreground">
                    We discuss process and decision quality, not trade calls.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">No PnL flexing</p>
                  <p className="text-muted-foreground">
                    Results without context are noise. Share execution, not screenshots.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">No hype or guru behavior</p>
                  <p className="text-muted-foreground">
                    This is a professional learning environment. Keep it grounded and specific.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-border">
          <div className="container px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">What to expect weekly</h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Weekly recaps</h3>
                <p className="text-sm text-muted-foreground">
                  Structured recaps focused on process lessons and risk notes.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Market discussion</h3>
                <p className="text-sm text-muted-foreground">
                  Context and structure reviews, not trade calls.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Resource sharing</h3>
                <p className="text-sm text-muted-foreground">
                  Checklists, templates, and routines that improve consistency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-border bg-muted/30">
          <div className="container px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Join the Community</h2>
              <p className="text-muted-foreground mb-6">
                If you want a grounded space focused on process and accountability, you will fit in here.
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
      </main>

      <Footer />
    </div>
  )
}
