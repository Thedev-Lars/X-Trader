import Link from "next/link"
import { MessageCircle, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand - rebranded to X Trader */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-lg font-bold text-foreground">X Trader</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              A structured learning system for futures traders. Risk first. Psychology second. Setups last.
            </p>
            <a
              href="https://discord.gg/xtrader"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Join Discord
            </a>
          </div>

          {/* Learn */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Learn</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/map" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Knowledge Map
              </Link>
              <Link href="/why-this-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Why This Works
              </Link>
              <Link href="/curriculum" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Curriculum
              </Link>
            </nav>
          </div>

          {/* Trade */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Trade</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/mentorship" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Mentorship
              </Link>
              <Link href="/tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tools & Resources
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Company</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <a
                href="mailto:hello@xtrader.io"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} X Trader. For educational purposes only. Not financial advice.
          </p>
          <p className="text-xs text-muted-foreground">Affiliate links may earn commissions. See disclosures.</p>
        </div>
      </div>
    </footer>
  )
}
