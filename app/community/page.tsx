import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Users, MessageCircle, Video, Calendar, ArrowRight } from "lucide-react"
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
                Join a community of serious futures traders. Get your questions answered, share ideas, and accelerate
                your learning with direct mentorship.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
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
                    Connect with other traders and access community resources.
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

              {/* Paid Mentorship */}
              <div className="relative bg-card border-2 border-primary rounded-xl p-6 sm:p-8">
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">Most Popular</Badge>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">1-on-1 Mentorship</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-foreground">$299</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Personal guidance to accelerate your trading journey.</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Everything in Free, plus:</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>2-3 private video calls</strong> per month (45 min each)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Trade review and feedback</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Personalized learning plan</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Direct message access</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Priority support</span>
                  </li>
                </ul>

                <a
                  href="https://calendly.com/xtrader/mentorship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Discovery Call
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-12 sm:py-16 border-t border-border">
          <div className="container px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">What mentorship includes</h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Video className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Private Video Calls</h3>
                <p className="text-sm text-muted-foreground">
                  2-3 focused 45-minute sessions per month. Screen share your charts, review trades, and get real-time
                  feedback.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Personalized Plan</h3>
                <p className="text-sm text-muted-foreground">
                  Get a custom learning roadmap based on your experience level, goals, and available trading time.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Ongoing Support</h3>
                <p className="text-sm text-muted-foreground">
                  Direct message access between calls. Ask questions, share setups, and get guidance when you need it.
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
                  Traders who are serious about improving and want personalized guidance. Whether you're struggling to
                  be consistent or want to level up your execution, mentorship accelerates your progress.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">How do the calls work?</h3>
                <p className="text-sm text-muted-foreground">
                  We meet via Zoom. You can share your screen to review charts, trades, or your journal. Sessions are
                  recorded so you can rewatch them.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Can I cancel anytime?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes. Mentorship is month-to-month with no long-term commitment. Cancel anytime before your next
                  billing date.
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
                Not sure if mentorship is right for you? Join the Discord first, get to know the community, and upgrade
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
