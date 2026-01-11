import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Users, MessageCircle, Video, ShieldCheck, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 border-b border-border">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Community & Mentorship
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Learn faster together
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                Join a free public Discord with serious futures traders. Share ideas, ask questions, and learn in
                public. Invite-only mentorship is available for traders who are ready for strict accountability.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="https://discord.gg/xtrader" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4" />
                    Join the Discord
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto bg-transparent">
                  Invite-only Mentorship
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Section */}
        <section className="py-12 sm:py-16">
          <div className="container px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Free Community */}
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Free Community</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-foreground">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Open Discord community with shared learning and accountability.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Access to Discord community</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Trade idea discussions</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Weekly market recaps</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Resource library access</span>
                  </li>
                </ul>

                <a href="https://discord.gg/xtrader" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full gap-2 bg-transparent">
                    <MessageCircle className="w-4 h-4" />
                    Join Discord
                  </Button>
                </a>
              </div>

              {/* Invite-only Mentorship */}
              <div className="relative bg-card border-2 border-primary rounded-xl p-6 sm:p-8">
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">Invite-only</Badge>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">Mentorship Program</h3>
                  <p className="text-sm text-muted-foreground">
                    Limited, invite-only accountability focused on execution, discipline, and risk control.
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Invite-only access</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Execution reviews and accountability loops</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Risk control enforcement and weekly check-ins</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Personalized execution plan</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Direct message accountability</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Limited seats to keep standards high</span>
                  </li>
                </ul>

                <Button className="w-full gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Request Invite
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What Mentorship Includes */}
        <section className="py-12 sm:py-16 border-t border-border">
          <div className="container px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">What mentorship includes</h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Video className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Focused Reviews</h3>
                <p className="text-sm text-muted-foreground">
                  Structured review sessions focused on execution quality and risk adherence.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Execution Plan</h3>
                <p className="text-sm text-muted-foreground">
                  A personalized plan tied to your current edge, routine, and risk constraints.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Accountability</h3>
                <p className="text-sm text-muted-foreground">
                  Direct message accountability so rules are followed between reviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 border-t border-border">
          <div className="container px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">Common questions</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Who is mentorship for?</h3>
                <p className="text-sm text-muted-foreground">
                  Traders who already follow the fundamentals and want strict accountability on execution and risk.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">How does the invite work?</h3>
                <p className="text-sm text-muted-foreground">
                  Mentorship is invite-only. Requests are reviewed based on consistency, risk control, and readiness to
                  follow a plan.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Is there pricing listed?</h3>
                <p className="text-sm text-muted-foreground">
                  No. Details are shared only after an invite is approved.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">What if I'm a complete beginner?</h3>
                <p className="text-sm text-muted-foreground">
                  Start with the free curriculum and Discord community. Once you have the fundamentals down, mentorship
                  will help you apply them effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 border-t border-border bg-muted/30">
          <div className="container px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Start with the free community</h2>
              <p className="text-muted-foreground mb-6">
                Not sure if mentorship is right for you? Join the Discord first, get to know the community, and apply
                when you're ready.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="https://discord.gg/xtrader" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 w-full sm:w-auto">
                    <MessageCircle className="w-4 h-4" />
                    Join Discord Free
                  </Button>
                </a>
                <Link href="/map">
                  <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto bg-transparent">
                    Explore Curriculum
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
