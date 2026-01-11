import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const toolGroups = [
  {
    title: "Prop Firms",
    description: "Evaluation programs for traders who want capital access after proven discipline.",
    items: [
      {
        name: "MyFundedFutures",
        url: "https://myfundedfutures.com",
        bestFor: "Traders with a documented risk plan who want a structured evaluation environment.",
        notFor: "Anyone still changing strategies week to week or violating loss limits.",
        prereqs: ["Risk Fundamentals", "Stop-Loss & Risk-Reward", "Journaling Basics"],
        realityCheck:
          "Prop evaluations magnify execution mistakes. If your process is unstable, the rules will expose it quickly.",
      },
      {
        name: "Lucid Trading",
        url: "https://lucidtrading.co",
        bestFor: "Traders who can execute a simple playbook with low variance.",
        notFor: "High-frequency scalpers without stable execution metrics.",
        prereqs: ["Risk Fundamentals", "Trading Psychology Intro", "Journaling Accountability"],
        realityCheck:
          "Passing an evaluation requires repeatability, not creativity. Focus on rule adherence over trade count.",
      },
      {
        name: "Alpha Futures",
        url: "https://alphafutures.com",
        bestFor: "Traders who already follow a strict daily loss limit and sizing rules.",
        notFor: "Anyone who still sizes by gut feel or recent wins.",
        prereqs: ["Risk Fundamentals", "Position Sizing", "Trading Psychology Intro"],
        realityCheck:
          "Scaling capital only helps if your sizing discipline is already stable. Otherwise, variance grows with size.",
      },
      {
        name: "FundedNext",
        url: "https://fundednext.com",
        bestFor: "Traders with repeatable execution and a documented edge.",
        notFor: "Traders skipping reviews or without a consistent routine.",
        prereqs: ["Risk Fundamentals", "Journaling Basics", "Playbook Building"],
        realityCheck:
          "Evaluations reward consistency over aggression. Treat it like a process test, not a payout race.",
      },
    ],
  },
  {
    title: "Brokers & Platforms",
    description: "Execution and charting tools once risk rules are stable and documented.",
    items: [
      {
        name: "Tradovate (Futures)",
        url: "https://www.tradovate.com",
        bestFor: "Micros-first futures traders who want streamlined execution.",
        notFor: "Traders relying on broker margin instead of stop-based sizing.",
        prereqs: ["Risk Fundamentals", "Position Sizing", "Stop-Loss & Risk-Reward"],
        realityCheck:
          "Broker selection will not fix poor execution. A clean platform only helps if your risk rules are fixed.",
      },
      {
        name: "AMP (Futures)",
        url: "https://www.ampfutures.com",
        bestFor: "Traders who need stable data and execution for futures.",
        notFor: "Anyone without a defined pre-market routine.",
        prereqs: ["Market Structure", "Risk Management Tools"],
        realityCheck:
          "Data quality helps, but your routine matters more. Without prep, better data still leads to noise.",
      },
      {
        name: "HankoTrade (Forex/CFDs)",
        url: "https://www.hankotrade.com",
        bestFor: "Swing traders who can tolerate wider spreads.",
        notFor: "Scalpers or anyone sensitive to spread costs.",
        prereqs: ["Risk Fundamentals", "Position Sizing", "Trading Psychology Intro"],
        realityCheck:
          "Wide spreads change your break-even math. If you can’t hold for larger moves, it’s the wrong fit.",
      },
      {
        name: "TradingView",
        url: "https://www.tradingview.com",
        bestFor: "Execution-focused traders using clear structure-based plans.",
        notFor: "Anyone experimenting with new strategies each week.",
        prereqs: ["Market Structure", "Execution Basics"],
        realityCheck:
          "Charts don’t create an edge. Use them to document structure and follow your rules, not to chase signals.",
      },
      {
        name: "Tradovate (Tick Charts)",
        url: "https://www.tradovate.com",
        bestFor: "Traders using tick charts for precise execution context.",
        notFor: "Traders who trade order flow without higher timeframe bias.",
        prereqs: ["Order Flow Basics", "Risk Fundamentals"],
        realityCheck:
          "Tick charts amplify noise if you don’t have a higher-timeframe plan. Use them as confirmation only.",
      },
    ],
  },
  {
    title: "Journaling / Analysis Tools",
    description: "Tools to capture behavior, enforce accountability, and measure process quality.",
    items: [
      {
        name: "Tradesync",
        url: "https://tradesync.com",
        bestFor: "Traders tracking rule adherence and R-multiples.",
        notFor: "Anyone avoiding review or skipping trade notes.",
        prereqs: ["Journaling Basics", "Journaling Accountability"],
        realityCheck:
          "A journal only works if you review it weekly. Without review, data collection becomes busywork.",
      },
      {
        name: "TradeZella",
        url: "https://tradezella.com",
        bestFor: "Traders who want structured weekly reviews.",
        notFor: "Traders who only track P&L without context.",
        prereqs: ["Journaling Basics"],
        realityCheck:
          "Analytics won’t fix rule-breaking. Use the data to spot patterns, not to justify impulsive trades.",
      },
    ],
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNav />

      <main className="flex-1">
        <div className="container px-4 sm:px-6 py-8 sm:py-12 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
              Tools & Resources
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Tools are only useful after risk discipline is consistent. Use this list as a reference once your sizing,
              stops, and journaling habits are stable.
            </p>
          </div>

          <div className="space-y-10">
            {toolGroups.map((group) => (
              <section key={group.title} className="space-y-4">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{group.title}</h2>
                  <p className="text-sm text-muted-foreground">{group.description}</p>
                </div>

                <div className="grid gap-4">
                  {group.items.map((tool) => (
                    <div key={tool.name} className="bg-card border border-border rounded-lg p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-base font-semibold text-foreground">{tool.name}</h3>
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-muted-foreground hover:text-primary transition-colors"
                          >
                            {tool.url.replace("https://", "")}
                          </a>
                        </div>
                      </div>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Best for</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{tool.bestFor}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Not for</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{tool.notFor}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Map prerequisites</h4>
                          <ul className="text-sm text-muted-foreground leading-relaxed list-disc list-inside">
                            {tool.prereqs.map((prereq) => (
                              <li key={prereq}>{prereq}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Reality check</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{tool.realityCheck}</p>
                        </div>
                      </div>
                      <div className="mt-5">
                        <a href={tool.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="h-9 bg-transparent">
                            Visit site
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
            These are standard links to the tools mentioned above. No affiliate links are used on this page.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
