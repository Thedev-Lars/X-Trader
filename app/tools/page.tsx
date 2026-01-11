import { AppNav } from "@/components/app-nav"
import { Footer } from "@/components/footer"

const toolGroups = [
  {
    title: "Prop Firms",
    description: "Evaluation programs for traders who want capital access after proven discipline.",
    items: [
      {
        name: "Prop Firm A",
        bestFor: "Traders with a consistent risk plan and a proven journaled edge.",
        notGoodFor: "Anyone still changing strategies or violating daily loss limits.",
        prereqs: ["Risk Fundamentals", "Stop-Loss & Risk-Reward", "Journaling Basics"],
      },
      {
        name: "Prop Firm B",
        bestFor: "Traders who can execute a simple playbook with low variance.",
        notGoodFor: "High-frequency scalpers without stable execution metrics.",
        prereqs: ["Risk Fundamentals", "Trading Psychology Intro", "Journaling Accountability"],
      },
    ],
  },
  {
    title: "Brokers",
    description: "Direct market access and execution infrastructure once risk rules are stable.",
    items: [
      {
        name: "Broker A",
        bestFor: "Micros-first traders who want tight risk control.",
        notGoodFor: "Traders relying on broker margin instead of stop-based sizing.",
        prereqs: ["Risk Fundamentals", "Position Sizing", "Stop-Loss & Risk-Reward"],
      },
      {
        name: "Broker B",
        bestFor: "Traders who need consistent data and reliable fills.",
        notGoodFor: "Anyone without a defined pre-market routine.",
        prereqs: ["Market Structure", "Risk Management Tools"],
      },
    ],
  },
  {
    title: "Journals",
    description: "Tools to capture behavior and enforce accountability loops.",
    items: [
      {
        name: "Journal A",
        bestFor: "Traders tracking rule adherence and R-multiples.",
        notGoodFor: "Anyone avoiding review or skipping trade notes.",
        prereqs: ["Journaling Basics", "Journaling Accountability"],
      },
      {
        name: "Journal B",
        bestFor: "Traders who want structured weekly reviews.",
        notGoodFor: "Traders who only track P&L without context.",
        prereqs: ["Journaling Basics"],
      },
    ],
  },
  {
    title: "Platforms",
    description: "Charting and execution interfaces to match your method and risk plan.",
    items: [
      {
        name: "Platform A",
        bestFor: "Execution-focused traders using clear structure-based plans.",
        notGoodFor: "Anyone experimenting with new strategies each week.",
        prereqs: ["Market Structure", "Execution Basics"],
      },
      {
        name: "Platform B",
        bestFor: "Traders using order flow as confirmation with defined levels.",
        notGoodFor: "Traders who trade order flow without higher timeframe bias.",
        prereqs: ["Order Flow Basics", "Risk Fundamentals"],
      },
    ],
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AppNav />

      <main className="flex-1">
        <div className="container px-4 sm:px-6 py-8 sm:py-12 max-w-5xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Tools & Resources
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Tools only work when the foundation is solid. Each recommendation below includes who it fits, who it does
            not, and the map prerequisites that should be completed first.
          </p>

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
                        <h3 className="text-base font-semibold text-foreground">{tool.name}</h3>
                        <span className="text-xs text-muted-foreground">Affiliate link placeholder</span>
                      </div>
                      <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Best for</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{tool.bestFor}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Not good for</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{tool.notGoodFor}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">Map prerequisites</h4>
                          <ul className="text-sm text-muted-foreground leading-relaxed list-disc list-inside">
                            {tool.prereqs.map((prereq) => (
                              <li key={prereq}>{prereq}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
