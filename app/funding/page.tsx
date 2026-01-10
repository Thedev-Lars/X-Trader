import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Check, ArrowRight, TrendingUp, Shield, DollarSign } from "lucide-react"
import Link from "next/link"

const propFirms = [
  {
    name: "MyFundedFutures",
    description: "Industry-leading payouts with no scaling required. Get funded in as little as one day.",
    highlights: [
      "Up to 90% profit split",
      "No daily drawdown on funded accounts",
      "One-step evaluation",
      "Same-day payouts available",
    ],
    accountSizes: ["$50K", "$100K", "$150K"],
    bestFor: "Traders who want fast funding with generous rules",
    ctaLink: "https://myfundedfutures.com",
    featured: true,
  },
  {
    name: "Apex Trader Funding",
    description: "One of the most popular prop firms with straightforward rules and frequent promotions.",
    highlights: ["100% of first $25K profits", "90% profit split after", "No daily drawdown", "Trade any style"],
    accountSizes: ["$25K", "$50K", "$100K", "$250K"],
    bestFor: "Beginners looking for flexible evaluation rules",
    ctaLink: "https://apextraderfunding.com",
    featured: false,
  },
  {
    name: "Topstep",
    description: "The original futures prop firm with a proven track record and strong community.",
    highlights: [
      "90% profit split",
      "Trading Combine evaluation",
      "Coaching and education included",
      "Established since 2012",
    ],
    accountSizes: ["$50K", "$100K", "$150K"],
    bestFor: "Traders who value community and education support",
    ctaLink: "https://topstep.com",
    featured: false,
  },
  {
    name: "Earn2Trade",
    description: "Flexible evaluation programs with both fast-track and traditional paths to funding.",
    highlights: [
      "80% profit split",
      "Gauntlet Mini for fast funding",
      "Virtual trading floor access",
      "Scaling plan available",
    ],
    accountSizes: ["$25K", "$50K", "$100K"],
    bestFor: "Traders who want multiple evaluation options",
    ctaLink: "https://earn2trade.com",
    featured: false,
  },
]

export default function FundingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 border-b border-border">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                Get Funded
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Trade with prop firm capital
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                Pass an evaluation, prove your skills, and trade with up to $250K in funded capital. Keep up to 90% of
                your profits without risking your own money.
              </p>
            </div>
          </div>
        </section>

        {/* Why Prop Trading Section */}
        <section className="py-12 sm:py-16 border-b border-border">
          <div className="container px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">
              Why trade with a prop firm?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">No Personal Risk</h3>
                <p className="text-sm text-muted-foreground">
                  Trade with the firm's capital. Your only cost is the evaluation fee.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Scale Faster</h3>
                <p className="text-sm text-muted-foreground">Access $50K-$250K accounts without years of saving.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Prove Your Edge</h3>
                <p className="text-sm text-muted-foreground">The evaluation process validates your strategy works.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prop Firms Grid */}
        <section className="py-12 sm:py-16">
          <div className="container px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-2">Recommended Prop Firms</h2>
            <p className="text-muted-foreground text-center mb-8 max-w-xl mx-auto">
              We've partnered with the most reputable futures prop firms. Use our links to support X Trader.
            </p>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {propFirms.map((firm) => (
                <div
                  key={firm.name}
                  className={`relative bg-card border rounded-xl p-6 sm:p-8 transition-all hover:border-primary/50 ${
                    firm.featured ? "border-primary ring-1 ring-primary/20" : "border-border"
                  }`}
                >
                  {firm.featured && (
                    <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">Top Pick</Badge>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{firm.name}</h3>
                      <p className="text-muted-foreground text-sm">{firm.description}</p>
                    </div>
                    <a href={firm.ctaLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                      <Button className="gap-2 w-full sm:w-auto">
                        Get Started
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-3">Highlights</h4>
                      <ul className="space-y-2">
                        {firm.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-3">Account Sizes</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {firm.accountSizes.map((size) => (
                          <Badge key={size} variant="secondary">
                            {size}
                          </Badge>
                        ))}
                      </div>
                      <h4 className="text-sm font-medium text-foreground mb-1">Best For</h4>
                      <p className="text-sm text-muted-foreground">{firm.bestFor}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 border-t border-border bg-muted/30">
          <div className="container px-4 sm:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Not ready for an evaluation yet?</h2>
              <p className="text-muted-foreground mb-6">
                Master the fundamentals first. Our structured curriculum will prepare you to pass any prop firm
                evaluation.
              </p>
              <Link href="/map">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  Start Learning
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
