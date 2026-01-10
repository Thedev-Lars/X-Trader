import type { Lesson } from "@/lib/map/types"

export const lessons: Record<string, Lesson> = {
  "futures-basics": {
    title: "Futures Basics",
    overview:
      "Futures are standardized agreements to buy or sell an asset at a set price on a future date, and traders use them to speculate on price movement. ES and NQ index futures are highly liquid, which makes execution and risk control easier for newer traders. Futures trade in ticks and are margined, so small price moves can have big account impact. The same risk logic applies to forex even though the contract structure differs.",
    objectives: [
      "Define what a futures contract is and why it trades like a derivative.",
      "Identify the core traits of ES/NQ contracts that matter to day traders.",
      "Explain how leverage and margin change risk compared to spot markets.",
      "Choose an appropriate contract size for practice trading.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Futures are exchange-traded contracts tied to an underlying index, commodity, or rate.",
          "They are standardized, which keeps liquidity concentrated and spreads tight in products like ES and NQ.",
          "You can go long or short with the same mechanics, making them flexible for trend or mean-reversion setups.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Pick one contract and learn its tick size, tick value, and margin requirements.",
          "Use micros (MES/MNQ) to match risk to account size while keeping the same price behavior.",
          "Know the active contract month and avoid trading the old front month near rollover.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Plan entries around liquid windows like the cash open to reduce slippage.",
          "Use limit orders for precise entries and market orders only when speed matters.",
          "Always log your contract, entry, stop, and target in points and dollars.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Margin lets you control large notional size, but losses still hit your account dollar-for-dollar.",
          "A small ES move can be larger than your planned risk if you size too big.",
          "Treat futures like leveraged forex: define a hard stop before entry.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Assuming futures are like stocks and ignoring the leverage effect.",
          "Trading thin contracts or expired months where spreads widen and fills slip.",
          "Skipping contract specs and guessing P&L after the fact.",
        ],
      },
    ],
    whenNotToTrade: [
      "When you cannot state the tick value and point value from memory.",
      "During contract rollover if you do not know which month is most active.",
      "When your margin buffer is tight and a single loss could trigger liquidation.",
    ],
    diagram: "Futures Contract Snapshot\nUnderlying → Contract Size → Tick Size → Tick Value → Margin",
    takeaways: [
      "Futures are standardized derivatives with centralized liquidity.",
      "ES and NQ offer tight spreads and fast fills for day trading.",
      "Leverage magnifies outcomes, so position size must be intentional.",
      "Micros let you practice the same market behavior at lower risk.",
      "Always know specs before you place the first order.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Treating a futures contract like a stock share hides the leverage risk and leads to outsized drawdowns even when your entry is correct.",
      },
      {
        type: "tip",
        content:
          "Start with MES or MNQ and graduate to ES/NQ only after you can follow your stop rules for 20 consecutive trades.",
      },
    ],
    quiz: [
      {
        id: "fb-q1",
        question: "Why are futures considered derivatives?",
        options: [
          "They trade only during cash hours",
          "Their value is linked to an underlying asset",
          "They do not use margin",
          "They are only for hedgers",
        ],
        correctIndex: 1,
        explanation: "A futures price is derived from the underlying asset (like the S&P 500 for ES), which is the definition of a derivative.",
      },
      {
        id: "fb-q2",
        question: "What is the main practical advantage of micros (MES/MNQ)?",
        options: ["They move less", "They require smaller risk per trade", "They are only for swing trades", "They have no margin"],
        correctIndex: 1,
        explanation: "Micros track the same price movement as standard contracts but with 1/10th the dollar value, making risk control easier.",
      },
      {
        id: "fb-q3",
        question: "What should you confirm before trading a futures contract month?",
        options: ["Broker name", "Active front month", "News headlines", "Indicator settings"],
        correctIndex: 1,
        explanation: "Liquidity concentrates in the front month, so you should trade the most active contract to avoid poor fills.",
      },
    ],
  },
  "tick-values": {
    title: "Tick Values & Contract Specs",
    overview:
      "Ticks are the minimum price changes for a contract, and their dollar value determines your real risk. ES and NQ move in 0.25-point ticks, which is why a small chart move can still be a meaningful dollar swing. Understanding ticks lets you size trades and targets precisely. This logic maps directly to forex pip values when you convert to account currency.",
    objectives: [
      "Calculate tick value and point value for common contracts.",
      "Convert price movement into dollar P&L quickly.",
      "Use tick math to size positions responsibly.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "A tick is the smallest price increment allowed by the exchange.",
          "Tick value tells you how much one tick is worth per contract.",
          "Point value is the dollar move for a full point in ES or NQ.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Memorize ES and NQ tick values before you trade live.",
          "Know the micro equivalents so you can scale risk without changing the setup.",
          "Check contract specs when you add a new market like CL or GC.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Translate your stop distance into ticks, then into dollars.",
          "Set targets in points or ticks, not in vague dollar goals.",
          "Log P&L by ticks to spot execution drift over time.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "If the dollar risk per contract is too high, reduce size or skip the trade.",
          "Wide stops on NQ can exceed risk limits fast; calculate first.",
          "Pip value in forex is the same concept—calculate it in your account currency.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Mixing ticks and points and underestimating true risk.",
          "Rounding tick value or stop distance to make a trade seem affordable.",
          "Ignoring contract specs after a rollover or product switch.",
        ],
      },
    ],
    whenNotToTrade: [
      "When you cannot convert your stop distance into dollars within a few seconds.",
      "When switching to a new market without confirming tick size and value.",
      "When your broker margin hides the true risk per contract.",
    ],
    diagram: "Tick Math\nStop (ticks) × Tick Value × Contracts = Dollar Risk",
    takeaways: [
      "Tick value determines your true dollar exposure.",
      "Point value is just tick value multiplied by ticks per point.",
      "Micros allow precise sizing without changing the chart behavior.",
      "Always calculate risk before you click buy or sell.",
      "Pips in forex are the same concept—convert them to dollars.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Confusing tick size with tick value leads to trades that are twice the risk you intended, even if the setup looks perfect.",
      },
      {
        type: "tip",
        content:
          "Keep a one-line cheat sheet next to your monitor with ES, NQ, MES, and MNQ tick values.",
      },
    ],
    quiz: [
      {
        id: "tv-q1",
        question: "What does tick value tell you?",
        options: ["The time between trades", "The dollar value of one tick", "The margin required", "The contract expiration"],
        correctIndex: 1,
        explanation: "Tick value is the dollar amount gained or lost for a one-tick move per contract.",
      },
      {
        id: "tv-q2",
        question: "If ES moves 4 points, what is the P&L per ES contract?",
        options: ["$100", "$200", "$400", "$800"],
        correctIndex: 2,
        explanation: "ES is $50 per point, so 4 points × $50 = $200.",
      },
      {
        id: "tv-q3",
        question: "Why are micro contracts useful for new traders?",
        options: ["They have no commissions", "They allow smaller dollar risk", "They trade only in Asia", "They are less volatile"],
        correctIndex: 1,
        explanation: "Micros reduce dollar exposure while keeping the same price movement as the standard contract.",
      },
    ],
  },
  "margin-leverage": {
    title: "Margin & Leverage",
    overview:
      "Margin is the deposit required to control a futures contract, and it creates leverage. Leverage lets small price moves translate into meaningful gains or losses, which is why a tight risk plan matters. Brokers often advertise low intraday margin, but that does not reduce actual risk. The same leverage mindset applies to forex, where position size drives exposure.",
    objectives: [
      "Explain the difference between initial, maintenance, and intraday margin.",
      "Identify how leverage affects real dollar risk.",
      "Choose position size that fits your account without relying on margin limits.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Margin is not a down payment; it is a performance bond on the full contract value.",
          "Leverage magnifies outcomes because you control more notional than you deposit.",
          "Your P&L still moves tick-for-tick regardless of margin discounts.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Know your broker’s initial and maintenance margin for ES and NQ.",
          "Decide a personal max risk that is independent of broker margin offers.",
          "Use micros if your risk plan does not fit the standard contract.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Calculate risk by stop distance, not by the margin shown on the ticket.",
          "Avoid holding positions overnight unless you can meet the higher margin.",
          "Treat leverage like a tool, not a free pass to size up.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "A small adverse move can exceed your daily loss limit if you oversize.",
          "Margin calls are forced risk management—don’t wait for them.",
          "Forex traders face the same issue when using high lot sizes.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Sizing trades to max margin instead of max risk.",
          "Confusing low intraday margin with low volatility.",
          "Holding a day trade overnight without enough capital.",
        ],
      },
    ],
    whenNotToTrade: [
      "When you are tempted to size up just because margin allows it.",
      "When you cannot cover overnight margin but are considering holding.",
      "When volatility is elevated and your normal stop distance doubles.",
    ],
    diagram: "Leverage Flow\nNotional Size → Margin Posted → Tick Moves → Account P&L",
    takeaways: [
      "Margin is a deposit, not a limit on losses.",
      "Leverage increases both upside and downside equally.",
      "Your stop distance defines real risk, not broker margin.",
      "Use micros to align leverage with account size.",
      "Avoid overnight holds unless your margin buffer is large.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Sizing to the maximum margin available is how traders survive a good day and then blow out on the first fast reversal.",
      },
      {
        type: "tip",
        content:
          "Set a personal leverage cap (like 5x) and never exceed it, even if your broker allows more.",
      },
    ],
    quiz: [
      {
        id: "ml-q1",
        question: "What does margin represent in futures trading?",
        options: ["The total contract value", "A performance bond", "Guaranteed profit", "A stop-loss"],
        correctIndex: 1,
        explanation: "Margin is a deposit that secures the position; you still control the full contract value.",
      },
      {
        id: "ml-q2",
        question: "Why is leverage called a double-edged sword?",
        options: ["It lowers commissions", "It magnifies gains and losses", "It guarantees fills", "It fixes bad entries"],
        correctIndex: 1,
        explanation: "Leverage amplifies outcomes in both directions, which increases risk if you oversize.",
      },
      {
        id: "ml-q3",
        question: "What should determine your position size?",
        options: ["Broker margin", "Stop-based dollar risk", "Yesterday’s P&L", "Current news"],
        correctIndex: 1,
        explanation: "Your stop distance and planned dollar risk should drive size, not the margin shown by the broker.",
      },
    ],
  },
  "market-structure": {
    title: "Market Structure Basics",
    overview:
      "Market structure is the sequence of highs and lows that defines trend, range, or transition. Understanding structure keeps you trading with context instead of reacting to every candle. ES and NQ are clean examples because their liquidity creates clearer swings, but the same structure logic applies to forex pairs. Structure tells you where trades make sense and where they do not.",
    objectives: [
      "Identify higher highs, higher lows, lower highs, and lower lows.",
      "Distinguish trending, ranging, and transitioning markets.",
      "Use structure to place entries and stops at logical levels.",
      "Avoid trading into obvious structural support or resistance.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Trends are defined by higher highs and higher lows (uptrend) or lower highs and lower lows (downtrend).",
          "Ranges form when price fails to make progress beyond a clear ceiling and floor.",
          "Transitions show up as a break of structure followed by a retest.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Mark the most recent swing high and swing low on your execution timeframe.",
          "Align your trade direction with the higher timeframe structure first.",
          "Use a simple swing definition (e.g., two-bar confirmation) to stay consistent.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "In an uptrend, look for buys at higher low zones or break-and-retest areas.",
          "In a range, trade edges with tighter targets or stand aside.",
          "Let structure guide where you take profit rather than arbitrary numbers.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Stops should sit beyond the structural level that invalidates your thesis.",
          "Do not add size into a structure break without confirmation.",
          "Forex pairs can have wider noise bands, so adjust stops accordingly.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Calling a trend after one higher high without a higher low.",
          "Trading a breakout directly into a higher timeframe level.",
          "Ignoring context and scalping in the middle of a range.",
        ],
      },
    ],
    whenNotToTrade: [
      "When the market is in the middle of a well-defined range.",
      "When a major higher timeframe level is one or two ticks away.",
      "When you cannot identify a clear swing structure on your chart.",
    ],
    diagram: "Structure Map\nHH/HL → Uptrend | LH/LL → Downtrend | Equal highs/lows → Range",
    takeaways: [
      "Structure defines whether the market is trending or ranging.",
      "Trade direction should align with higher timeframe structure.",
      "Stops belong beyond structure, not inside it.",
      "Clear structure reduces random trades.",
      "The same swing logic applies to forex charts.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Labeling every push as a trend leads to chasing moves that are already exhausted and sitting at resistance.",
      },
      {
        type: "tip",
        content:
          "Use one consistent swing rule and stick to it so you’re not redrawing structure every candle.",
      },
    ],
    quiz: [
      {
        id: "ms-q1",
        question: "What defines an uptrend in market structure?",
        options: ["Lower highs and lower lows", "Higher highs and higher lows", "Equal highs only", "Random swings"],
        correctIndex: 1,
        explanation: "An uptrend requires both higher highs and higher lows.",
      },
      {
        id: "ms-q2",
        question: "Where should you place a stop in a trend trade?",
        options: ["Inside the structure", "Beyond the invalidation level", "At a random dollar value", "At the entry"],
        correctIndex: 1,
        explanation: "Stops should be placed beyond the structural level that invalidates your trade thesis.",
      },
      {
        id: "ms-q3",
        question: "What is a common sign of a range?",
        options: ["Consistent higher lows", "Price trapped between clear highs and lows", "Steady higher highs", "Only one swing"],
        correctIndex: 1,
        explanation: "Ranges are defined by repeated tests of a ceiling and floor without follow-through.",
      },
    ],
  },
  "session-timing": {
    title: "Session Timing",
    overview:
      "Trading results are heavily influenced by when you trade. ES and NQ have their best liquidity during the US morning, while forex often moves most during the London and New York overlap. Timing determines volatility, spread, and follow-through. If you trade the wrong window for your strategy, you are fighting the market instead of working with it.",
    objectives: [
      "Identify the most liquid windows for ES/NQ and forex pairs.",
      "Match your strategy to the volatility profile of the session.",
      "Avoid low-volume periods that produce choppy price action.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Liquidity clusters around session opens and overlap periods.",
          "Higher volume usually means tighter spreads and better follow-through.",
          "Low-volume hours can be slow and mean-reverting.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "For futures, focus on the US cash open and first two hours.",
          "For forex, prioritize London open and the London/New York overlap.",
          "Mark major economic releases that can override normal session behavior.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Plan your trades around a defined time block to reduce fatigue.",
          "Adjust targets and stops based on expected session volatility.",
          "If the session is slow, trade less or reduce size.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Choppy sessions increase stop-outs, so reduce frequency or stand aside.",
          "News events can widen spreads and cause slippage.",
          "Overtrading outside your best hours erodes your edge.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Trading the lunch hour and expecting trend strength.",
          "Ignoring the economic calendar and getting hit by sudden volatility.",
          "Assuming all sessions behave the same across ES and forex.",
        ],
      },
    ],
    whenNotToTrade: [
      "During thin lunchtime ranges if your strategy needs momentum.",
      "Minutes before high-impact news if you have not planned for volatility.",
      "When your session does not align with your strategy’s average move.",
    ],
    diagram: "Session Flow\nAsia → London → NY Open → NY Midday → Close",
    takeaways: [
      "Liquidity and volatility are session-dependent.",
      "Trade the window that matches your strategy’s rhythm.",
      "US mornings are best for ES/NQ; London/NY overlap is best for forex.",
      "Avoid low-volume chop when possible.",
      "Use the economic calendar every day.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Trading midday chop as if it were a trend session is a reliable way to grind your account down slowly.",
      },
      {
        type: "tip",
        content:
          "Define a hard trading window and stop when it ends—consistency beats screen time.",
      },
    ],
    quiz: [
      {
        id: "st-q1",
        question: "When is ES/NQ typically most liquid?",
        options: ["Asian session", "US cash open and early morning", "Late US afternoon", "Sunday evening"],
        correctIndex: 1,
        explanation: "US cash open and the first two hours have the highest participation and volume for ES/NQ.",
      },
      {
        id: "st-q2",
        question: "Why is the London/NY overlap important for forex?",
        options: ["It has the lowest volume", "It often has the highest liquidity and movement", "It is always a range", "It closes markets"],
        correctIndex: 1,
        explanation: "The overlap brings the most global participation, which increases liquidity and movement.",
      },
      {
        id: "st-q3",
        question: "What is a common risk of trading during low-volume periods?",
        options: ["Tighter spreads", "Choppy price action", "More trend strength", "Guaranteed fills"],
        correctIndex: 1,
        explanation: "Low volume often leads to chop and false moves, which increases stop-outs.",
      },
    ],
  },
  "risk-fundamentals": {
    title: "Risk Fundamentals",
    isRiskCritical: true,
    overview:
      "Risk control is the only reason you get to trade tomorrow. Your edge can be small, but it will survive if your losses are capped and consistent. ES and NQ move fast, so a single oversized trade can erase a week of progress. Forex is no different—size and stops decide your survival.",
    objectives: [
      "Set a maximum risk per trade and per day.",
      "Use risk-to-reward to evaluate trades before entry.",
      "Avoid emotional changes to stops and size.",
      "Track drawdown limits and enforce them.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Your job is to control loss size, not predict every move.",
          "Risk rules keep you in the game during inevitable losing streaks.",
          "Consistency in risk builds confidence and clearer decision-making.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Define max risk per trade (often 1% or less) and a daily loss limit.",
          "Calculate dollar risk before every entry using your stop distance.",
          "Write the rule down and keep it visible during the session.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "If the setup requires more risk than allowed, skip it.",
          "Target at least a 2:1 reward-to-risk when the market structure supports it.",
          "Do not widen stops after entry—accept the loss and move on.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "A 2:1 reward-to-risk can be profitable even with a lower win rate.",
          "Large losses break the math; small losses keep your edge alive.",
          "Use a daily loss limit to prevent emotional overtrading.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Increasing risk after a win to make more instead of following your plan.",
          "Ignoring the daily loss limit because the next trade looks perfect.",
          "Averaging down to avoid taking a planned stop.",
        ],
      },
    ],
    whenNotToTrade: [
      "After hitting your daily loss limit.",
      "When a single trade would exceed your max risk per trade.",
      "When you are trying to win back losses quickly.",
    ],
    diagram: "Risk Ladder\nMax Trade Risk → Max Daily Loss → Weekly Drawdown",
    takeaways: [
      "Risk control is the foundation of longevity.",
      "Set risk per trade and enforce it every time.",
      "Use reward-to-risk to filter low-quality trades.",
      "Small losses protect your edge over time.",
      "Daily loss limits stop emotional spirals.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Letting one oversized trade slip through your rules is how a good week turns into a blown account.",
      },
      {
        type: "tip",
        content:
          "Decide your max loss before the session and stop trading once it is hit, no exceptions.",
      },
    ],
    quiz: [
      {
        id: "rf-q1",
        question: "Why is a daily loss limit important?",
        options: ["It guarantees profit", "It prevents emotional overtrading", "It increases leverage", "It avoids taxes"],
        correctIndex: 1,
        explanation: "A daily loss limit stops you from chasing losses when decision quality drops.",
      },
      {
        id: "rf-q2",
        question: "What does a 2:1 reward-to-risk ratio mean?",
        options: ["Risk is twice reward", "Reward is twice the risk", "Risk equals reward", "Risk is zero"],
        correctIndex: 1,
        explanation: "A 2:1 ratio targets two units of reward for every one unit of risk.",
      },
      {
        id: "rf-q3",
        question: "What should you do if a trade requires more risk than allowed?",
        options: ["Take it anyway", "Reduce size or skip the trade", "Move your stop wider", "Add to the position"],
        correctIndex: 1,
        explanation: "Proper risk management requires you to size down or pass if the trade breaks your risk rule.",
      },
    ],
  },
  "trading-psychology-intro": {
    title: "Trading Psychology Intro",
    overview:
      "Most traders lose not because their strategy is bad, but because they break it under pressure. Emotions show up as overtrading, revenge trades, and moving stops. ES and NQ move fast, which exposes weak discipline quickly. The same emotional traps exist in forex when trades move against you.",
    objectives: [
      "Identify the most common psychological errors in trading.",
      "Build a pre-trade routine that reduces impulsive decisions.",
      "Recognize emotional triggers and step away when needed.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Trading decisions are a mix of strategy and emotional control.",
          "Fear and greed typically show up as missed entries or oversized trades.",
          "Awareness is the first step to correcting bad behavior.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Create a short checklist you must complete before placing any trade.",
          "Define what a valid setup looks like and what it does not.",
          "Track your emotional state in your journal after each session.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Take only the trades that meet your written criteria.",
          "If you feel urgency, pause and re-check your plan before clicking.",
          "Keep position size consistent so emotions do not spike.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Emotional trading often leads to bigger losses than technical errors.",
          "A pre-defined stop reduces the temptation to bail out early.",
          "If your mind is not calm, your risk is higher regardless of setup.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Revenge trading after a loss instead of resetting.",
          "Skipping the checklist because you feel a strong hunch.",
          "Changing strategy mid-trade due to fear or hope.",
        ],
      },
    ],
    whenNotToTrade: [
      "After a loss that triggers anger or urgency.",
      "When you are tired, distracted, or rushing.",
      "When you feel the need to make back money quickly.",
    ],
    diagram: "Decision Cycle\nPlan → Execute → Review → Reset",
    takeaways: [
      "Discipline is what makes a strategy work over time.",
      "A checklist reduces impulsive mistakes.",
      "Emotional trades usually violate your rules first.",
      "Consistency in size keeps emotions stable.",
      "Step away when your mindset is compromised.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Thinking you are immune to trading psychology is a fast way to ignore the behaviors that are draining your account.",
      },
      {
        type: "tip",
        content:
          "Add one sentence to your journal after every session: “What emotion showed up most today?”",
      },
    ],
    quiz: [
      {
        id: "tp-q1",
        question: "What is revenge trading?",
        options: ["Trading only at night", "Trying to win back losses immediately", "Trading the trend", "Using limit orders"],
        correctIndex: 1,
        explanation: "Revenge trading is the impulse to get back losses quickly, often by breaking your plan.",
      },
      {
        id: "tp-q2",
        question: "Why use a pre-trade checklist?",
        options: ["It guarantees profit", "It reduces impulsive decisions", "It changes the market", "It increases leverage"],
        correctIndex: 1,
        explanation: "Checklists help you slow down and verify the setup before entering.",
      },
      {
        id: "tp-q3",
        question: "What should you do if you feel emotionally compromised?",
        options: ["Increase size", "Take a break", "Ignore the feeling", "Trade more"],
        correctIndex: 1,
        explanation: "Stepping away protects you from decisions that are driven by emotion rather than process.",
      },
    ],
  },
  "overtrading-revenge": {
    title: "Overtrading vs Revenge Trading",
    overview:
      "Overtrading is taking too many trades or too much size beyond your plan, while revenge trading is a reactive burst of rule-breaking after a loss. Both feel urgent, but overtrading is volume-driven and revenge trading is emotion-driven. This lesson clarifies the difference, maps the trigger chain that causes it, and installs simple rules to stop the spiral.",
    objectives: [
      "Define overtrading and revenge trading in practical terms.",
      "Recognize the trigger chain from loss to rule break.",
      "Apply prevention rules and a 2-loss protocol to stop escalation.",
    ],
    sections: [
      {
        heading: "Definitions",
        content: [
          "Overtrading = too many trades or too much size beyond your plan or time window.",
          "Revenge trading = trading to “get it back” right after a loss, usually by breaking rules.",
          "Overtrading can happen after wins or boredom; revenge trading is usually loss-driven.",
        ],
      },
      {
        heading: "Trigger Chain",
        content: [
          "Loss → emotion spike (anger, urgency).",
          "Emotion → impulse (must trade now).",
          "Impulse → rule break (size up, skip stop, trade B setups).",
        ],
      },
      {
        heading: "Prevention Rules (5)",
        content: [
          "Cap trades per session and stop when the cap is hit.",
          "Trade only your A+ setup; everything else is a pass.",
          "Keep size fixed for the entire session—no scaling up.",
          "Hard stop after a rule break; reset before next trade.",
          "Use a 2-loss protocol to force a pause and review.",
        ],
      },
      {
        heading: "2-Loss Protocol Checklist",
        content: [
          "Stop trading immediately after the second loss.",
          "Screenshot and tag both trades in your journal.",
          "Write one sentence: “Was the plan followed?”",
          "Step away for 20 minutes or until calm.",
          "Return only if your checklist is fully met.",
        ],
      },
    ],
    whenNotToTrade: [
      "After two losses in a row.",
      "When you feel an urgent need to trade to feel better.",
      "When you are tempted to “make up” for a slow day.",
    ],
    diagram: "Spiral Trigger\nLoss → Emotion → Impulse → Rule Break",
    takeaways: [
      "Overtrading is volume-based; revenge trading is loss-triggered.",
      "Most spirals follow a predictable trigger chain.",
      "Prevention rules remove discretion when emotions spike.",
      "A 2-loss protocol protects you from escalation.",
      "Fewer, higher-quality trades preserve edge.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Treating “one more trade” as harmless is how overtrading turns a small loss into a large drawdown.",
      },
      {
        type: "tip",
        content:
          "Write your 2-loss protocol on a sticky note and place it on your monitor.",
      },
    ],
    quiz: [
      {
        id: "ot-q1",
        question: "What best defines revenge trading?",
        options: [
          "Taking many trades in a choppy market",
          "Trading to win back losses immediately",
          "Switching from micros to minis",
          "Trading only one setup",
        ],
        correctIndex: 1,
        explanation: "Revenge trading is the urge to get losses back quickly, often by breaking rules.",
      },
      {
        id: "ot-q2",
        question: "Which sequence describes the trigger chain for emotional spirals?",
        options: [
          "Win → confidence → patience → rule adherence",
          "Loss → emotion → impulse → rule break",
          "News → volatility → profit → rest",
          "Setup → entry → target → exit",
        ],
        correctIndex: 1,
        explanation: "Loss triggers emotion, which creates impulse, which then leads to rule breaking.",
      },
      {
        id: "ot-q3",
        question: "What is the purpose of a 2-loss protocol?",
        options: [
          "To increase size after two losses",
          "To force a pause and review after consecutive losses",
          "To skip journaling",
          "To trade only during lunch",
        ],
        correctIndex: 1,
        explanation: "A 2-loss protocol prevents escalation by enforcing a pause and review.",
      },
    ],
  },
  "revenge-trading": {
    title: "Revenge Trading Reset",
    overview:
      "Revenge trading is a response to an identity threat: “I need it back now.” It feels like urgency, but it is actually a loss of process control. This lesson shows the chart behaviors that reveal revenge trading and gives you an interruption script plus a five-minute reset routine to break the pattern.",
    objectives: [
      "Explain why revenge trading is tied to identity threat.",
      "Spot revenge trading behaviors directly on the chart.",
      "Use a script and reset routine to interrupt the impulse.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Revenge trading is the urge to restore identity after a loss—“I need it back now.”",
          "It is less about money and more about proving competence.",
          "The faster you act, the more likely you ignore your plan.",
        ],
      },
      {
        heading: "How It Shows on Charts",
        content: [
          "Chasing price after the move already happened.",
          "Increasing size to “make it back faster.”",
          "Skipping or widening stops because “it has to work.”",
        ],
      },
      {
        heading: "Interruption Script",
        content: [
          "Say out loud: “This is a recovery trade. My job is to follow process, not fix the loss.”",
          "Repeat: “One good trade > one fast trade.”",
          "Ask: “Would I take this trade if I were flat today?”",
        ],
      },
      {
        heading: "5-Minute Hard Reset Routine",
        content: [
          "Step away from the screen and stand up.",
          "Do 10 slow breaths: 4 seconds in, 6 seconds out.",
          "Review your checklist and mark yes/no quickly.",
          "Set a 1-trade limit for the next attempt.",
          "Return only if you can explain the setup in one sentence.",
        ],
      },
    ],
    whenNotToTrade: [
      "When you feel the urge to win it back immediately.",
      "When you are increasing size to recover losses.",
      "When you are skipping or widening stops.",
    ],
    diagram: "Revenge Loop\nLoss → Threat → Urgency → Chase → Bigger Loss",
    takeaways: [
      "Revenge trading is an identity threat, not a strategy.",
      "Chasing, bigger size, and no stop are the warning signs.",
      "A short script interrupts the impulse.",
      "A five-minute reset lowers urgency and restores process.",
      "You only need one clean trade, not a fast one.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Trying to “fix” a loss with the next trade often creates a second, larger loss.",
      },
      {
        type: "tip",
        content:
          "Write your interruption script on a note and read it before every new trade after a loss.",
      },
    ],
    quiz: [
      {
        id: "rt-q1",
        question: "What is the core driver of revenge trading?",
        options: ["Boredom", "Identity threat after a loss", "News volatility", "Too many indicators"],
        correctIndex: 1,
        explanation: "Revenge trading is a response to feeling threatened or wrong after a loss.",
      },
      {
        id: "rt-q2",
        question: "Which chart behavior most clearly signals revenge trading?",
        options: ["Waiting for a pullback", "Chasing price with bigger size", "Taking profits early", "Using a stop"],
        correctIndex: 1,
        explanation: "Chasing price with larger size shows urgency and is a classic revenge behavior.",
      },
      {
        id: "rt-q3",
        question: "What is the goal of a 5-minute hard reset routine?",
        options: ["Enter faster", "Lower urgency and return to process", "Find a new strategy", "Increase win rate immediately"],
        correctIndex: 1,
        explanation: "The reset routine reduces emotional intensity so you can follow your plan again.",
      },
    ],
  },
  "drawdown-recovery": {
    title: "Drawdown Recovery Plan",
    overview:
      "Drawdowns require a recovery mode that protects capital and rebuilds confidence through process. The goal is not to “make it back fast,” but to stabilize execution so your edge can reappear. This lesson gives a simple recovery framework and a two-week checklist.",
    objectives: [
      "Apply the recovery framework to reduce risk and mistakes.",
      "Focus on process goals instead of P&L.",
      "Use a structured two-week plan to reset performance.",
    ],
    sections: [
      {
        heading: "Recovery Framework",
        content: [
          "Reduce size immediately to lower emotional pressure.",
          "Trade only one setup that you can explain clearly.",
          "Stop after one loss to prevent compounding.",
          "Set process goals (checklist, execution, journaling) over profit goals.",
        ],
      },
      {
        heading: "2-Week Recovery Plan Checklist",
        content: [
          "Week 1: Trade micros or half size only.",
          "Week 1: One setup, max 2 trades per day.",
          "Week 1: Stop after the first loss each day.",
          "Week 2: Keep size reduced; add a second trade only if Week 1 was clean.",
          "Week 2: Review rule breaks daily and fix one issue at a time.",
        ],
      },
      {
        heading: "Process Goals Examples",
        content: [
          "Complete pre-trade checklist before every entry.",
          "Log emotions after each trade in one sentence.",
          "Follow stop placement rules 100% of the time.",
        ],
      },
    ],
    whenNotToTrade: [
      "When you are increasing size to recover losses.",
      "When you cannot define your one allowed setup.",
      "When you are ignoring your stop-after-one-loss rule.",
    ],
    diagram: "Recovery Ladder\nReduce Size → One Setup → One Loss Stop → Process Goals",
    takeaways: [
      "Recovery is about stabilizing process, not racing for profit.",
      "Reduced size lowers emotional load and improves discipline.",
      "Limiting setups and losses prevents further damage.",
      "Process goals rebuild confidence faster than P&L goals.",
      "Two-week structure keeps recovery measurable and calm.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Trying to earn back a drawdown quickly usually deepens it because it forces impulsive trades.",
      },
      {
        type: "tip",
        content:
          "Print your two-week checklist and check off each day to track recovery discipline.",
      },
    ],
    quiz: [
      {
        id: "dr-q1",
        question: "What is the first step in the recovery framework?",
        options: ["Increase size", "Reduce size", "Add more setups", "Trade more hours"],
        correctIndex: 1,
        explanation: "Reducing size lowers pressure and stabilizes decision-making.",
      },
      {
        id: "dr-q2",
        question: "Why use process goals during recovery?",
        options: [
          "They guarantee profits",
          "They keep focus on controllable actions",
          "They remove the need for a stop",
          "They increase leverage",
        ],
        correctIndex: 1,
        explanation: "Process goals are controllable and help rebuild discipline without chasing P&L.",
      },
      {
        id: "dr-q3",
        question: "What is the rule about losses during the recovery phase?",
        options: ["Stop after one loss", "Double down after two losses", "Ignore losses", "Trade until green"],
        correctIndex: 0,
        explanation: "Stopping after one loss prevents compounding errors during recovery.",
      },
    ],
  },
  "advanced-review": {
    title: "Advanced Review & Weekly Ritual",
    overview:
      "An athlete-style review treats trading like performance training: review the process, classify outcomes, and make one focused adjustment. This lesson shows how to label trades, run a weekly ritual, and use a printable checklist to keep review consistent.",
    objectives: [
      "Classify trades as good, bad, or unlucky.",
      "Run a weekly review using objective metrics.",
      "Use a printable checklist to keep reviews consistent.",
    ],
    sections: [
      {
        heading: "Athlete-Style Review",
        content: [
          "Review like a coach: focus on process, not ego.",
          "Separate decisions from outcomes to avoid biased conclusions.",
          "Make one change at a time so improvements are measurable.",
        ],
      },
      {
        heading: "Trade Classification",
        content: [
          "Good trade = followed the plan, regardless of outcome.",
          "Bad trade = broke a rule (entry, size, stop, or management).",
          "Unlucky trade = plan was right, but outcome was a loss.",
        ],
      },
      {
        heading: "Weekly Ritual Metrics",
        content: [
          "Win rate (%).",
          "Average R per trade.",
          "Number of rule breaks.",
          "Best-performing setup.",
          "One change to test next week.",
        ],
      },
      {
        heading: "Printable Review Checklist",
        content: [
          "Classify every trade: good, bad, or unlucky.",
          "Count rule breaks and list the most common one.",
          "Calculate win rate and average R.",
          "Identify the best setup and why it worked.",
          "Write one behavior change for next week.",
        ],
      },
    ],
    whenNotToTrade: [
      "When you have not completed the weekly review.",
      "When a rule break pattern is still unresolved.",
      "When you cannot explain your one change for the week.",
    ],
    diagram: "Review Loop\nExecute → Log → Classify → Adjust",
    takeaways: [
      "Athlete-style review focuses on process first.",
      "Good trades are defined by rule adherence, not outcome.",
      "Weekly metrics make progress measurable.",
      "One change per week prevents over-adjusting.",
      "A checklist makes review consistent and repeatable.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Changing multiple variables after one bad week makes it impossible to learn what actually works.",
      },
      {
        type: "tip",
        content:
          "Print the checklist and keep it in your journal to enforce the weekly ritual.",
      },
    ],
    quiz: [
      {
        id: "ar-q1",
        question: "How is a good trade defined in the review system?",
        options: ["It made money", "It followed the plan", "It used a tight stop", "It was fast"],
        correctIndex: 1,
        explanation: "A good trade is defined by rule adherence, regardless of the outcome.",
      },
      {
        id: "ar-q2",
        question: "What is an unlucky trade?",
        options: [
          "A trade that broke a rule",
          "A trade taken without a stop",
          "A trade that followed the plan but lost",
          "A trade that was late",
        ],
        correctIndex: 2,
        explanation: "An unlucky trade followed the plan but still lost due to normal variance.",
      },
      {
        id: "ar-q3",
        question: "What is the weekly ritual designed to produce?",
        options: [
          "A new strategy every week",
          "One focused change for the next week",
          "More trades per day",
          "Higher leverage",
        ],
        correctIndex: 1,
        explanation: "The ritual should lead to one focused adjustment to test next week.",
      },
    ],
  },
  "position-sizing": {
    title: "Position Sizing",
    isRiskCritical: true,
    overview:
      "Position sizing turns a good setup into a survivable trade. The same ES move can be a small loss or a large drawdown depending on size. Proper sizing keeps you aligned with your risk rules and prevents emotional swings. This is identical to choosing lot size in forex.",
    objectives: [
      "Calculate position size using account risk and stop distance.",
      "Apply micro contracts to fit smaller accounts.",
      "Avoid rounding up size just to take a trade.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Position size should be driven by risk per trade, not by potential profit.",
          "Size is determined by stop distance and dollar risk allowed.",
          "Consistent sizing makes performance data reliable.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Decide your max risk per trade in dollars.",
          "Calculate stop distance in points or ticks.",
          "Divide dollar risk by risk per contract to get your size.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Round down to the nearest whole contract, never up.",
          "If size is zero, skip the trade or use a micro contract.",
          "Keep size consistent across similar setups for clean data.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Oversizing makes small errors fatal.",
          "Sizing down is a strength, not a weakness.",
          "In forex, lot size works the same way—convert pip value to dollars.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Rounding up because the setup “looks good.”",
          "Changing size randomly based on mood or recent wins.",
          "Ignoring stop distance and sizing based on account balance alone.",
        ],
      },
    ],
    whenNotToTrade: [
      "When the math says the correct size is zero contracts.",
      "When you cannot calculate risk per contract quickly.",
      "When you feel tempted to increase size to recover losses.",
    ],
    diagram: "Sizing Formula\nAccount Risk ÷ (Stop Distance × Point Value) = Contracts",
    takeaways: [
      "Position size is a risk calculation, not a confidence vote.",
      "Round down to protect your account.",
      "Micros help align size with smaller balances.",
      "Consistent sizing makes your results measurable.",
      "Forex lot sizing follows the same logic.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Rounding up size because you are close to the next contract converts a controlled plan into a guess.",
      },
      {
        type: "tip",
        content:
          "Build a simple spreadsheet or calculator that outputs size after you enter stop distance and risk.",
      },
    ],
    quiz: [
      {
        id: "ps-q1",
        question: "What determines your position size?",
        options: ["Confidence level", "Stop-based dollar risk", "Time of day", "Last trade"],
        correctIndex: 1,
        explanation: "Position size should be derived from your allowed dollar risk and the stop distance.",
      },
      {
        id: "ps-q2",
        question: "How should you round your position size?",
        options: ["Round up", "Round down", "Round to nearest", "Never round"],
        correctIndex: 1,
        explanation: "Rounding down keeps you within your risk limits.",
      },
      {
        id: "ps-q3",
        question: "What do micro contracts help you do?",
        options: ["Increase leverage", "Reduce dollar risk per trade", "Avoid stops", "Trade only overnight"],
        correctIndex: 1,
        explanation: "Micros let you take the same setup with less dollar exposure.",
      },
    ],
  },
  "stop-placement": {
    title: "Stop-Loss Placement",
    isRiskCritical: true,
    overview:
      "A stop-loss defines where your trade idea is proven wrong. Without it, you cannot measure risk or size properly. ES and NQ move fast, so a well-placed stop protects you from sudden spikes. This same logic applies to forex, where spreads and volatility can widen.",
    objectives: [
      "Place stops at structural invalidation levels.",
      "Avoid using arbitrary dollar stops with no chart logic.",
      "Keep stops consistent with your risk plan.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "A stop is the price where your trade thesis is invalidated.",
          "Stops allow you to define risk before you enter.",
          "The stop location is more important than the entry precision.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Identify the structural level that proves your idea wrong.",
          "Measure the stop distance in points or ticks.",
          "Confirm the stop fits your dollar risk limits.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Place the stop immediately after entry or use a bracket order.",
          "Avoid moving the stop further away once in the trade.",
          "Use wider stops only when the structure justifies it.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Tight stops reduce loss size but increase stop-outs if placed in noise.",
          "Wide stops increase risk and reduce size; adjust accordingly.",
          "In forex, spreads can widen during news, so buffer your stop location.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Placing a stop at a round number with no structural reason.",
          "Moving the stop to avoid taking a loss.",
          "Using the same stop distance for every setup.",
        ],
      },
    ],
    whenNotToTrade: [
      "When the required stop distance exceeds your risk limit.",
      "When volatility is so high that structure is unclear.",
      "When you are tempted to trade without a stop.",
    ],
    diagram: "Stop Logic\nEntry → Invalidation Level → Stop Placement",
    takeaways: [
      "Stops must be placed where the trade thesis fails.",
      "Define stops before entry to measure risk accurately.",
      "Never move a stop further away to avoid a loss.",
      "Stop distance drives position size.",
      "Buffer for volatility and spreads when needed.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Moving your stop further away turns a planned loss into a hope trade, which usually ends worse.",
      },
      {
        type: "tip",
        content:
          "Use a bracket order so your stop and target are in place the moment you enter.",
      },
    ],
    quiz: [
      {
        id: "sp-q1",
        question: "What should a stop-loss represent?",
        options: ["A random dollar amount", "The invalidation level of your idea", "Your profit target", "A trailing indicator"],
        correctIndex: 1,
        explanation: "A stop belongs where the trade thesis is no longer valid.",
      },
      {
        id: "sp-q2",
        question: "What is a common stop-loss mistake?",
        options: ["Using a bracket order", "Moving a stop further away", "Calculating stop distance", "Sizing down"],
        correctIndex: 1,
        explanation: "Moving a stop further away increases risk and usually breaks your plan.",
      },
      {
        id: "sp-q3",
        question: "How should stop distance affect position size?",
        options: ["It should not", "Wider stops mean smaller size", "Wider stops mean larger size", "Stops are optional"],
        correctIndex: 1,
        explanation: "Larger stop distances increase per-contract risk, so size should be reduced.",
      },
    ],
  },
  "diversification-position-sizing": {
    title: "Diversification & Position Sizing",
    isRiskCritical: true,
    overview:
      "Sizing is not just math; it is how you keep risk consistent while avoiding overexposure. The same ES move can be survivable or account-ending depending on size, and stacking correlated positions (like ES + NQ) silently multiplies risk. This lesson covers fixed-dollar and fixed-percent sizing methods, plus how to avoid correlation traps.",
    objectives: [
      "Calculate size using fixed-dollar risk and fixed-percent risk methods.",
      "Work through an ES sizing example using the $12.50 tick value.",
      "Apply diversification logic to avoid correlated overexposure.",
      "Use quick sizing references without breaking risk rules.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Fixed $ risk keeps losses consistent by capping each trade at a set dollar amount.",
          "Fixed % risk scales with your account size by risking the same percentage each trade.",
          "Diversification means you avoid stacking correlated exposure (ES + NQ often move together).",
        ],
      },
      {
        heading: "Fixed $ Risk Method",
        content: [
          "Choose a dollar amount you are willing to lose per trade (ex: $50).",
          "Calculate risk per contract using stop ticks × tick value.",
          "Contracts = Fixed $ Risk ÷ Risk per Contract (round down).",
        ],
      },
      {
        heading: "Fixed % Risk Method",
        content: [
          "Pick a percentage of account size to risk (ex: 1%).",
          "Dollar Risk = Account Balance × Risk %. Example: $2,000 × 1% = $20.",
          "Contracts = Dollar Risk ÷ Risk per Contract (round down).",
        ],
      },
      {
        heading: "ES Example (Tick Value = $12.50)",
        content: [
          "Assume a stop of 8 ticks (2 points). Risk per ES contract = 8 × $12.50 = $100.",
          "Account A ($2,000 at 1% risk): $2,000 × 1% = $20 → $20 ÷ $100 = 0.2 → 0 ES contracts (use a micro instead).",
          "Account B ($10,000 at 1% risk): $10,000 × 1% = $100 → $100 ÷ $100 = 1 ES contract.",
        ],
      },
      {
        heading: "Sizing Cheat Sheet (Example)",
        content: [
          "Assume fixed $100 risk per trade on ES.",
          "| Stop (ticks) | Risk/Contract | Max ES Contracts |",
          "| 4 | $50 | 2 |",
          "| 8 | $100 | 1 |",
          "| 12 | $150 | 0 |",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Taking ES and NQ at the same time and doubling correlated risk.",
          "Sizing by account balance alone without stop distance.",
          "Rounding up because you are close to another contract.",
        ],
      },
    ],
    whenNotToTrade: [
      "When the correct size is zero and you refuse to downshift to a micro contract.",
      "When you already have correlated exposure (ex: ES + NQ) and the total risk exceeds plan.",
      "When you cannot calculate risk per contract quickly.",
    ],
    diagram: "Sizing Stack\nAccount Risk → Stop Ticks → $/Contract → Contracts → Correlation Check",
    takeaways: [
      "Fixed $ risk keeps losses consistent across trades.",
      "Fixed % risk scales with account size while keeping discipline.",
      "ES sizing depends on stop ticks × $12.50 tick value.",
      "Round down and use micros when necessary.",
      "Avoid stacking correlated exposure like ES + NQ.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Taking ES and NQ simultaneously without reducing size doubles your exposure to the same market move.",
      },
      {
        type: "tip",
        content:
          "Build a quick sizing calculator that lets you toggle between fixed-$ and fixed-% methods.",
      },
    ],
    quiz: [
      {
        id: "dps-q1",
        question: "What is the primary advantage of fixed % risk sizing?",
        options: [
          "It ignores account size changes",
          "It automatically scales risk as your account grows or shrinks",
          "It guarantees profits",
          "It removes the need for stop-losses",
        ],
        correctIndex: 1,
        explanation: "Fixed % risk keeps your risk proportional to your account size, so it adjusts as your balance changes.",
      },
      {
        id: "dps-q2",
        question: "If your ES stop is 8 ticks, what is the risk per ES contract?",
        options: ["$50", "$80", "$100", "$125"],
        correctIndex: 2,
        explanation: "8 ticks × $12.50 per tick = $100 risk per ES contract.",
      },
      {
        id: "dps-q3",
        question: "Why is holding ES and NQ simultaneously risky?",
        options: [
          "They are uncorrelated and cancel each other out",
          "They often move together, increasing total exposure",
          "They are illegal to trade together",
          "They trade at different times",
        ],
        correctIndex: 1,
        explanation: "ES and NQ are highly correlated, so holding both can double exposure to the same market move.",
      },
    ],
  },
  "stop-loss-risk-reward": {
    title: "Stop-Loss & Risk-Reward",
    isRiskCritical: true,
    overview:
      "Stops are not about pain tolerance; they define where your idea is invalid. Pairing a clean invalidation stop with a realistic target creates a repeatable risk-reward framework. This lesson covers structure-based stops, volatility-aware placement, and how R multiples drive expectancy.",
    objectives: [
      "Place stops at invalidation levels, not at random dollar amounts.",
      "Use structure and volatility to determine stop distance.",
      "Calculate R multiples and expectancy with a simple example.",
      "Apply a minimum R:R policy and know when to skip a trade.",
    ],
    sections: [
      {
        heading: "Stops = Invalidation",
        content: [
          "A stop marks the price where your setup is proven wrong, not where you feel discomfort.",
          "If the stop does not invalidate the idea, it is a random number.",
          "Structure should come first, then sizing adjusts to fit the risk.",
        ],
      },
      {
        heading: "Structure + Volatility Placement",
        content: [
          "Place stops below a meaningful swing, range edge, or structural level.",
          "Use a volatility buffer (like a few extra ticks) to avoid noise stops.",
          "If volatility makes the stop too wide, reduce size or skip the trade.",
        ],
      },
      {
        heading: "R Multiples & Expectancy",
        content: [
          "R is your unit of risk. If you risk $100, then 1R = $100.",
          "Example: Target 2R ($200) with a 40% win rate → expectancy = (0.4 × 2R) - (0.6 × 1R) = +0.2R.",
          "Positive expectancy comes from combining edge with consistent R multiples.",
        ],
      },
      {
        heading: "Minimum R:R Policy",
        content: [
          "Set a minimum R:R (ex: 2R) before you enter.",
          "If the next structure target cannot reach your minimum R:R, skip the trade.",
          "Higher R:R does not fix a weak setup—quality still matters.",
        ],
      },
      {
        heading: "Common Stop Mistakes",
        content: [
          "Placing stops too tight in noise zones.",
          "Moving a stop wider after entry to avoid taking a loss.",
          "Using obvious levels where liquidity hunts often occur.",
        ],
      },
    ],
    whenNotToTrade: [
      "When you cannot define a clear invalidation level.",
      "When the setup does not offer your minimum R:R.",
      "When you feel tempted to widen the stop after entry.",
    ],
    diagram: "Risk-Reward Map\nEntry → Stop (1R) → Target (2R+)",
    takeaways: [
      "Stops should reflect invalidation, not pain tolerance.",
      "Structure and volatility determine stop distance.",
      "R multiples make reward-to-risk measurable.",
      "Minimum R:R rules keep low-quality trades out.",
      "Avoid common stop mistakes that quietly increase risk.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Moving a stop wider after entry turns a defined risk trade into an undefined loss.",
      },
      {
        type: "tip",
        content:
          "Define your stop and target before you click—if the math is not there, pass.",
      },
    ],
    quiz: [
      {
        id: "srr-q1",
        question: "What should a stop-loss represent?",
        options: [
          "A random dollar amount",
          "The invalidation level of your trade idea",
          "Your profit target",
          "The bid-ask spread",
        ],
        correctIndex: 1,
        explanation: "Stops belong where the setup fails, not where you feel uncomfortable.",
      },
      {
        id: "srr-q2",
        question: "What does 1R mean if you risk $100 on a trade?",
        options: ["$50", "$100", "$150", "$200"],
        correctIndex: 1,
        explanation: "R is the unit of risk, so 1R equals the amount you risk ($100 in this example).",
      },
      {
        id: "srr-q3",
        question: "When should you skip a trade based on R:R policy?",
        options: [
          "When the target cannot reach your minimum R:R",
          "When the setup looks perfect",
          "When the market is trending",
          "When your stop is under structure",
        ],
        correctIndex: 0,
        explanation: "If the trade cannot hit your minimum R:R at a realistic target, the math is not in your favor.",
      },
    ],
  },
  "risk-management-tools": {
    title: "Risk Management Tools",
    isRiskCritical: true,
    overview:
      "Risk tools are your guardrails: they prevent a bad day from becoming a blown account. Daily max loss limits, trade caps, and cooldown rules keep decision quality high. This lesson also covers a practical daily checklist and how prop-style drawdown limits work.",
    objectives: [
      "Set daily max loss, max trades per day, and cooldown rules.",
      "Use a daily risk checklist before trading.",
      "Understand prop-style drawdown limits conceptually.",
      "Know when not to trade based on risk triggers.",
    ],
    sections: [
      {
        heading: "Daily Guardrails",
        content: [
          "Set a daily max loss that stops trading for the day once hit.",
          "Cap the number of trades per day to avoid overtrading (ex: 3–5 trades).",
          "Use a cooldown rule after a loss streak (ex: stop for 30 minutes after two losses).",
        ],
      },
      {
        heading: "Prop-Style Drawdown (Concept)",
        content: [
          "Some accounts enforce a drawdown line that moves up with profits or stays static.",
          "The idea is simple: stay above the drawdown line or the account is closed.",
          "Treat drawdown like a hard floor—do not let a bad day erase the buffer.",
        ],
      },
      {
        heading: "Daily Risk Checklist (10 Items)",
        content: [
          "Did I sleep enough to make clear decisions?",
          "Do I know my max loss for today in dollars?",
          "Do I know my max trades for today?",
          "Is my per-trade risk defined and written down?",
          "Have I checked the high-impact news calendar?",
          "Is my bias and top-level plan written?",
          "Is the market liquid (session window confirmed)?",
          "Have I confirmed stop and target placement rules?",
          "Have I checked for correlated exposure (ES + NQ, etc.)?",
          "Is my journal ready for entries after each trade?",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Ignoring daily max loss because the next setup looks perfect.",
          "Taking more trades to “make back” a loss.",
          "Skipping cooldown and trading while emotions are high.",
        ],
      },
    ],
    whenNotToTrade: [
      "After hitting your daily max loss.",
      "When you are sleep deprived or mentally foggy.",
      "When you feel a revenge impulse after a loss.",
    ],
    diagram: "Daily Guardrails\nMax Loss → Max Trades → Cooldown → Checklist",
    takeaways: [
      "Daily max loss stops bad days from spiraling.",
      "Trade caps protect against impulsive overtrading.",
      "Cooldown rules reset decision quality after losses.",
      "Prop-style drawdowns are hard floors—protect the buffer.",
      "A consistent checklist reduces preventable mistakes.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Ignoring a max loss rule is the fastest way to turn a small drawdown into a blown account.",
      },
      {
        type: "tip",
        content:
          "Set an alarm or platform lockout after max loss to remove the temptation to keep trading.",
      },
    ],
    quiz: [
      {
        id: "rmt-q1",
        question: "What is the purpose of a daily max loss limit?",
        options: [
          "To guarantee profits",
          "To stop trading when decision quality drops",
          "To increase leverage",
          "To avoid paying commissions",
        ],
        correctIndex: 1,
        explanation: "A daily max loss protects you from emotional overtrading after losses.",
      },
      {
        id: "rmt-q2",
        question: "What is a cooldown rule intended to do?",
        options: [
          "Force more trades",
          "Give the market time to move",
          "Pause trading after losses to reset focus",
          "Increase your target size",
        ],
        correctIndex: 2,
        explanation: "Cooldowns create a pause after losses so you do not trade while emotional.",
      },
      {
        id: "rmt-q3",
        question: "How should you treat drawdown limits?",
        options: [
          "As a suggestion",
          "As a hard floor you must stay above",
          "As a profit target",
          "As a trailing stop only for winners",
        ],
        correctIndex: 1,
        explanation: "Drawdown limits are hard floors—crossing them usually ends the account.",
      },
    ],
  },
  "order-flow-fundamentals": {
    title: "Order Flow Fundamentals",
    overview:
      "Order flow looks at how buyers and sellers interact in real time. In futures, tools like DOM and footprint charts make this visible, while in forex you infer it through price reaction at liquidity zones. The goal is to understand who is in control and where aggressive orders are failing. Done correctly, order flow is a confirmation tool, not a prediction tool.",
    objectives: [
      "Differentiate between aggressive and passive orders.",
      "Identify areas where liquidity is likely to sit.",
      "Use order flow as confirmation rather than a standalone signal.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Aggressive orders cross the spread and move price; passive orders provide liquidity.",
          "Order flow helps you see absorption, exhaustion, and initiative buying or selling.",
          "The best read combines order flow with structure and context.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Define key levels where orders are likely to cluster (prior highs/lows, value areas).",
          "Prepare a bias from structure before checking order flow.",
          "Use ES or NQ during liquid hours for cleaner order flow signals.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Wait for aggressive buying or selling to fail at your level.",
          "Use the order flow shift as confirmation, not the sole reason to enter.",
          "Keep entries simple: level → confirmation → trigger.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Order flow can be noisy in thin markets; reduce size or skip those periods.",
          "Use structural stops even when order flow looks strong.",
          "Forex traders can apply the same principles with price reaction to liquidity pools.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Treating every footprint imbalance as a trade signal.",
          "Ignoring structure and trading order flow in the middle of a range.",
          "Forcing entries when the tape is fast and unclear.",
        ],
      },
    ],
    whenNotToTrade: [
      "When liquidity is thin and the tape is erratic.",
      "When you have no structural level to anchor the read.",
      "When order flow contradicts your higher timeframe bias.",
    ],
    diagram: "Flow Read\nLevel → Aggressive Push → Absorption/Failure → Entry",
    takeaways: [
      "Order flow shows who is aggressive and who is absorbing.",
      "Structure comes first; order flow confirms.",
      "Best reads happen at obvious liquidity zones.",
      "Thin markets reduce signal quality.",
      "Forex traders can apply the same logic with price reaction.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Chasing every footprint signal without a structural level turns order flow into noise instead of edge.",
      },
      {
        type: "tip",
        content:
          "Pick one or two order flow signals and master them instead of collecting more tools.",
      },
    ],
    quiz: [
      {
        id: "of-q1",
        question: "What do aggressive orders do?",
        options: ["Provide liquidity", "Cross the spread and move price", "Settle contracts", "Reduce volatility"],
        correctIndex: 1,
        explanation: "Aggressive orders cross the spread to take liquidity, which is what moves price.",
      },
      {
        id: "of-q2",
        question: "What should come first: structure or order flow?",
        options: ["Order flow", "Structure", "Indicators", "News"],
        correctIndex: 1,
        explanation: "Structure provides context; order flow is best used as confirmation.",
      },
      {
        id: "of-q3",
        question: "When is order flow least reliable?",
        options: ["During liquid hours", "In thin markets", "Near key levels", "After a trend"],
        correctIndex: 1,
        explanation: "Thin markets produce noisy order flow that is harder to interpret.",
      },
    ],
  },
  "mindset-discipline": {
    title: "Mindset & Discipline",
    overview:
      "A simple strategy fails without disciplined execution. Mindset is about staying consistent through wins and losses and following your plan without exceptions. ES and NQ can move fast, which makes discipline easier to break when emotions spike. Strong routines create stability across futures and forex alike.",
    objectives: [
      "Build routines that reduce emotional decision-making.",
      "Recognize the behaviors that lead to rule-breaking.",
      "Maintain consistency across different market conditions.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Discipline is the ability to execute the plan regardless of recent outcomes.",
          "Mindset is trained through routines, not motivation.",
          "Consistency produces the data you need to improve.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Create a short pre-market routine that sets your bias and risk limits.",
          "Define your maximum number of trades per session.",
          "Write down the specific setups you are allowed to trade.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Follow the plan even after a loss; do not change it mid-session.",
          "Stop trading when your rules say you are done.",
          "Review each trade to reinforce process, not just outcome.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Discipline reduces variance by preventing unplanned trades.",
          "Breaking rules often leads to oversized losses.",
          "Mindset slips compound faster in fast markets like NQ.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Changing strategies after a single loss.",
          "Trading outside your plan because you feel bored.",
          "Ignoring your daily stop because the market is moving.",
        ],
      },
    ],
    whenNotToTrade: [
      "When you have already broken your rules once during the session.",
      "When boredom or fear is driving your decision-making.",
      "When you are outside your planned trading window.",
    ],
    diagram: "Discipline Loop\nRoutine → Execute → Review → Adjust",
    takeaways: [
      "Discipline is trained through routine, not willpower.",
      "Consistency builds reliable performance data.",
      "Rule-breaking increases drawdown more than a bad setup.",
      "Fast markets demand stronger discipline.",
      "Stop trading when your plan says stop.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Breaking your rules once makes it easier to break them again, which is how small mistakes turn into a pattern.",
      },
      {
        type: "tip",
        content:
          "Create a simple “hard stop” rule like: two rule breaks equals the session is over.",
      },
    ],
    quiz: [
      {
        id: "md-q1",
        question: "What is the main benefit of disciplined execution?",
        options: ["More trades", "Lower variance", "Guaranteed wins", "No losses"],
        correctIndex: 1,
        explanation: "Discipline reduces random, unplanned trades that increase variance and drawdown.",
      },
      {
        id: "md-q2",
        question: "What should you do after a rule break?",
        options: ["Double size", "Pause and reset or stop trading", "Ignore it", "Change strategy"],
        correctIndex: 1,
        explanation: "Pausing or ending the session prevents one mistake from cascading into more.",
      },
      {
        id: "md-q3",
        question: "Why are routines useful?",
        options: ["They make you trade more", "They reduce emotional decisions", "They add indicators", "They predict price"],
        correctIndex: 1,
        explanation: "Routines standardize your process so emotions have less room to interfere.",
      },
    ],
  },
  "journaling-basics": {
    title: "Journaling Basics",
    overview:
      "Journaling is performance tracking, not a diary. The goal is to capture repeatable data about your setups, decisions, and outcomes so you can improve the process that creates results.",
    objectives: [
      "Define the minimum fields every trade journal should include.",
      "Use a simple template that captures both process and outcome.",
      "Apply a lazy-friendly minimum journaling standard that keeps data consistent.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "A trading journal is a performance log that measures execution quality.",
          "Your journal is only useful if it captures the same fields every time.",
          "Track the key inputs: setup, entry reason, stop logic, result in R, emotions, and rule breaks.",
        ],
      },
      {
        heading: "Template",
        content: [
          "Template (copy/paste):\n| Setup | Entry reason | Stop logic | Result (R) | Emotions | Rule breaks |\n| --- | --- | --- | --- | --- | --- |\n| Opening range breakout | Took A+ pullback after 5-min breakout | Stop below OR low | +1.8R | Calm, focused | None |",
          "Keep entries short and factual so you can scan them quickly during reviews.",
        ],
      },
      {
        heading: "Minimum Journaling Standard",
        content: [
          "Minimum journaling standard (lazy-friendly): record setup name, entry reason, stop logic, and R result in under 60 seconds.",
          "If you are too busy, skip the essay and just capture the four mandatory fields plus a one-word emotion.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Journal immediately after the trade, not hours later.",
          "Use R multiples so wins and losses are comparable across sizes.",
          "Mark any rule break clearly so it stands out in reviews.",
        ],
      },
    ],
    whenNotToTrade: [
      "When you refuse to journal because the last loss felt embarrassing.",
      "When you cannot define your setup or stop logic before entry.",
      "When you are too distracted to log the trade within the same session.",
    ],
    diagram: "Journaling Feedback Loop\nPlan → Trade → Journal → Review → Adjust",
    takeaways: [
      "Journaling is objective performance tracking, not storytelling.",
      "Consistent fields make your data usable.",
      "The minimum standard keeps you logging even on busy days.",
      "R-based results make comparisons fair across trades.",
      "Rule breaks must be explicit or they will repeat.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Writing long narratives but skipping the hard fields (stop logic, R, rule breaks) creates a journal you cannot analyze.",
      },
      {
        type: "tip",
        content:
          "Build a one-minute template and copy it before each session so journaling stays frictionless.",
      },
    ],
    quiz: [
      {
        id: "jb-q1",
        question: "What is the primary purpose of a trading journal?",
        options: ["Tell your story", "Track performance inputs and outcomes", "Log market news", "Store screenshots only"],
        correctIndex: 1,
        explanation: "A trading journal exists to track process and results so you can improve performance.",
      },
      {
        id: "jb-q2",
        question: "Which field is required for comparing trades fairly?",
        options: ["Account balance", "Result in R", "Market headline", "Indicator settings"],
        correctIndex: 1,
        explanation: "R multiples normalize outcomes so different sizes and markets are comparable.",
      },
      {
        id: "jb-q3",
        question: "What is the minimum journaling standard focused on?",
        options: ["Long reflections", "Four core fields plus emotion", "Saving charts only", "Posting to social media"],
        correctIndex: 1,
        explanation: "The minimum standard keeps logging simple: setup, entry reason, stop logic, R, and a quick emotion tag.",
      },
    ],
  },
  "journaling-accountability": {
    title: "Journaling Accountability",
    overview:
      "Accountability turns a journal into a behavior change tool. By scoring rule adherence and reviewing weekly patterns, you can spot the leaks that cause drawdowns and reinforce what already works.",
    objectives: [
      "Apply a 0–10 accountability score to every trade.",
      "Use weekly reviews to select one leak to fix and one strength to repeat.",
      "Identify revenge trading patterns from journal fields.",
    ],
    sections: [
      {
        heading: "Accountability Score (0–10)",
        content: [
          "Score each trade on rule adherence, not P&L.",
          "Rubric:\n10 = all rules followed with full process\n7–9 = minor timing or execution slip, no rule breaks\n4–6 = one clear rule break (early entry, late exit, or sizing)\n1–3 = multiple rule breaks or impulsive trade\n0 = no setup, no stop, or revenge trade",
        ],
      },
      {
        heading: "Weekly Review System",
        content: [
          "Review the last 5–20 trades and calculate your average accountability score.",
          "Choose 1 leak to fix (the most common rule break) and 1 strength to repeat (the highest-scoring behavior).",
          "Write a one-sentence action for each so the next week has a clear focus.",
        ],
      },
      {
        heading: "Spotting Revenge Trading",
        content: [
          "Look for sequences where emotions shift to angry/urgent and the next trade ignores stop logic.",
          "Red flags: entry reason like “make it back,” sizing above plan, or rule breaks immediately after a loss.",
          "If the journal shows a loss → rule break → oversized trade pattern, mark it as revenge trading.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Score trades right after journaling so the grade is honest.",
          "Keep the rubric visible at your desk to reduce debate.",
          "Track your weekly average; the goal is a rising score, not a perfect P&L.",
        ],
      },
    ],
    whenNotToTrade: [
      "After a low-score trade if you feel urgency to “fix” the day.",
      "When you cannot explain why the last trade scored below 7.",
      "When a loss triggers a strong emotional spike in your journal.",
    ],
    diagram: "Accountability Feedback Loop\nTrade → Score → Review → One Fix → Repeat",
    takeaways: [
      "Accountability scores measure process, not profit.",
      "Weekly review keeps focus on one leak and one strength.",
      "Revenge trading shows up as emotional spikes plus rule breaks.",
      "Raising your average score is the fastest path to consistency.",
      "A clear rubric removes ambiguity and excuses.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Only reviewing big wins and losses hides the daily process errors that actually compound into drawdown.",
      },
      {
        type: "tip",
        content:
          "If your accountability score is under 7, reduce size until the process is stable again.",
      },
    ],
    quiz: [
      {
        id: "ja-q1",
        question: "What does the accountability score measure?",
        options: ["Profit size", "Rule adherence", "Market volatility", "News impact"],
        correctIndex: 1,
        explanation: "The score is based on how well you followed your rules, not on P&L.",
      },
      {
        id: "ja-q2",
        question: "What is the weekly review focus?",
        options: ["Add more setups", "Choose one leak and one strength", "Increase leverage", "Change indicators"],
        correctIndex: 1,
        explanation: "Weekly reviews should target one fix and one repeatable strength to keep improvement focused.",
      },
      {
        id: "ja-q3",
        question: "Which pattern most suggests revenge trading?",
        options: ["Calm emotions after a loss", "Loss → rule break → oversized trade", "Missing a trade", "Following the plan"],
        correctIndex: 1,
        explanation: "Revenge trading usually shows an emotional spike that leads to a rule break and increased size.",
      },
    ],
  },
  "playbook-building": {
    title: "Playbook Building",
    overview:
      "A playbook is your top 1–3 setups only, distilled into repeatable rules. If you have 10 setups, you have zero. The goal is to document the trades that actually deliver positive R with clean execution.",
    objectives: [
      "Build a playbook from a 20-trade sample.",
      "Measure average R and rule breaks to rank setups.",
      "Document a clear template for each approved setup.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Your playbook is a short list of highest-performing setups, not a catalog of ideas.",
          "Rank setups by average R and rule adherence to find the real winners.",
          "Only include setups you can define in one sentence.",
        ],
      },
      {
        heading: "Build From 20 Trades",
        content: [
          "Collect 20 recent trades and label each by setup name.",
          "Cluster similar trades together, then measure average R and the number of rule breaks per cluster.",
          "Keep the top 1–3 clusters with positive average R and the fewest rule breaks.",
        ],
      },
      {
        heading: "Playbook Template",
        content: [
          "Template:\n- Conditions (market context)\n- Trigger (entry criteria)\n- Invalidation (stop logic)\n- Targets (profit plan)\n- When not to take it (filters)",
          "Store one page per setup so you can review it before each session.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Trade only playbook setups during live sessions.",
          "If a trade does not match the template, label it as “off-playbook.”",
          "Review playbook performance monthly and update only with data.",
        ],
      },
    ],
    whenNotToTrade: [
      "When you want to test a new idea without tracking it separately.",
      "When a setup is unclear or takes more than a sentence to describe.",
      "When the trade requires breaking a playbook rule to make it work.",
    ],
    diagram: "Playbook Feedback Loop\nTrade → Journal → Cluster → Refine → Playbook",
    takeaways: [
      "A playbook is a short list of your best setups only.",
      "Twenty trades is enough data to cluster and rank setups.",
      "Average R and rule breaks reveal true performance.",
      "Templates keep setups precise and repeatable.",
      "Off-playbook trades should be rare and labeled.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Adding new setups before the current ones show consistent positive R turns the playbook into noise.",
      },
      {
        type: "tip",
        content:
          "Print your top setup template and keep it next to your monitor as a pre-trade checklist.",
      },
    ],
    quiz: [
      {
        id: "pb-q1",
        question: "How many setups should a playbook contain?",
        options: ["As many as possible", "Top 1–3 setups only", "At least 10", "One per indicator"],
        correctIndex: 1,
        explanation: "A playbook focuses on your top 1–3 setups so they stay repeatable and measurable.",
      },
      {
        id: "pb-q2",
        question: "What should you measure when clustering 20 trades?",
        options: ["Social media likes", "Average R and rule breaks", "Broker fees only", "Number of indicators"],
        correctIndex: 1,
        explanation: "Average R and rule breaks identify which setups perform best and which are executed cleanly.",
      },
      {
        id: "pb-q3",
        question: "What is an off-playbook trade?",
        options: ["A trade that matches the template", "A trade taken outside your defined setups", "A trade with a small win", "A trade during high volume"],
        correctIndex: 1,
        explanation: "Off-playbook trades do not match your documented setup rules and should be labeled.",
      },
    ],
  },
  "order-flow-basics": {
    title: "Order Flow Basics",
    overview:
      "Order flow basics focus on how aggressive buying and selling move price. In ES and NQ, this is visible on a DOM or footprint chart, while in forex you infer it from fast price response at liquidity. The goal is to understand which side is driving and whether they are getting follow-through. This lesson builds a foundation for more advanced order flow concepts.",
    objectives: [
      "Explain the difference between aggressive and passive orders.",
      "Spot simple signs of initiative buying or selling.",
      "Use order flow to time entries around key levels.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Aggressive buyers lift offers; aggressive sellers hit bids.",
          "Passive orders create liquidity and can absorb aggressive flow.",
          "Price moves when aggressive orders overwhelm passive liquidity.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Identify a key level using structure first.",
          "Watch the tape or footprint for signs of initiative at that level.",
          "In forex, look for fast rejection or continuation from liquidity zones.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Enter when aggressive flow aligns with your level and bias.",
          "Avoid entering mid-swing without context.",
          "Keep the entry trigger simple and repeatable.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Order flow is most reliable during liquid sessions.",
          "Avoid oversized trades just because the tape looks strong.",
          "Stops should still be placed at structural invalidation.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Trading the tape without a level or bias.",
          "Confusing speed with strength.",
          "Entering because you see one big print.",
        ],
      },
    ],
    whenNotToTrade: [
      "When the tape is fast but directionless.",
      "When you have no structural level to anchor the trade.",
      "When you are trading outside liquid hours.",
    ],
    diagram: "Order Flow Basics\nAggressive Flow + Level = Entry",
    diagrams: ["AggressiveVsRestingDiagram"],
    takeaways: [
      "Aggressive orders move price; passive orders absorb.",
      "Use order flow to confirm trades at key levels.",
      "Context matters more than raw speed.",
      "Liquid sessions provide cleaner signals.",
      "Stops remain structural even with order flow entries.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Jumping in because the tape looks fast usually means you are late rather than early.",
      },
      {
        type: "tip",
        content:
          "Combine one clean level with one clear order flow signal and ignore everything else.",
      },
    ],
    quiz: [
      {
        id: "ofb-q1",
        question: "What moves price in order flow terms?",
        options: ["Passive orders", "Aggressive orders", "Indicators", "News only"],
        correctIndex: 1,
        explanation: "Aggressive orders take liquidity, which moves price.",
      },
      {
        id: "ofb-q2",
        question: "What should come before an order flow entry?",
        options: ["A random print", "A structural level", "A big candle", "A news headline"],
        correctIndex: 1,
        explanation: "A structural level provides context; order flow confirms the entry.",
      },
      {
        id: "ofb-q3",
        question: "When is order flow signal quality highest?",
        options: ["Thin markets", "High-liquidity sessions", "Holiday trading", "End of day"],
        correctIndex: 1,
        explanation: "High liquidity creates cleaner, more reliable order flow signals.",
      },
    ],
  },
  "absorption-rejection": {
    title: "Absorption & Rejection",
    overview:
      "Absorption happens when aggressive orders hit a level but price fails to move, signaling strong passive interest. Rejection is the quick response away from that level, often starting a reversal or continuation. ES and NQ show this clearly on footprint or DOM, and forex traders see it as sharp wicks at liquidity zones. Understanding these patterns helps you avoid chasing failed moves.",
    objectives: [
      "Define absorption and rejection in practical terms.",
      "Identify absorption at key levels before entering.",
      "Use rejection as an entry trigger with structure.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Absorption is heavy aggressive flow that does not move price through a level.",
          "Rejection is the immediate move away after absorption is confirmed.",
          "These patterns show who is defending a level.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Mark a key level (prior high/low, value area, or session extreme).",
          "Wait for aggressive flow to push into the level.",
          "Look for stalled price and a quick rejection back inside the range.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Enter after rejection confirms the level is holding.",
          "Keep the stop just beyond the defended level.",
          "Target the opposite side of the range or next structure level.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Absorption can fail—always respect the stop.",
          "Trade this setup only at meaningful levels, not mid-range.",
          "Forex wicks can be deceptive during news, so avoid those periods.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Calling absorption without enough evidence of stalled price.",
          "Entering before rejection confirms the defense.",
          "Trading absorption in illiquid times with unreliable signals.",
        ],
      },
    ],
    whenNotToTrade: [
      "When the level has already broken cleanly once.",
      "When absorption appears in the middle of a range with no context.",
      "During high-impact news when liquidity is chaotic.",
    ],
    diagram: "Absorption Pattern\nAggressive Push → Stalled Price → Rejection",
    diagrams: ["AbsorptionPatternDiagram"],
    takeaways: [
      "Absorption shows passive strength at a level.",
      "Rejection is the trigger, not the first sign of pressure.",
      "Best signals occur at key structural levels.",
      "Stops belong just beyond the defended level.",
      "Avoid noisy periods where absorption is unreliable.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Seeing a single stalled candle and calling it absorption leads to premature entries without real confirmation.",
      },
      {
        type: "tip",
        content:
          "Wait for a clear rejection back inside the range before entering; it keeps you on the right side of the defense.",
      },
    ],
    quiz: [
      {
        id: "ar-q1",
        question: "What is absorption?",
        options: ["Price moving quickly through a level", "Aggressive flow fails to move price through a level", "A strong breakout", "A stop run"],
        correctIndex: 1,
        explanation: "Absorption occurs when aggressive orders hit a level but price does not move through it.",
      },
      {
        id: "ar-q2",
        question: "What is the confirmation for an absorption trade?",
        options: ["A news spike", "Rejection away from the level", "A random tick", "A moving average"],
        correctIndex: 1,
        explanation: "Rejection away from the level confirms the absorption and provides the entry trigger.",
      },
      {
        id: "ar-q3",
        question: "Where should your stop be placed?",
        options: ["At the middle of the range", "Just beyond the defended level", "At a fixed dollar amount", "No stop needed"],
        correctIndex: 1,
        explanation: "A stop should sit just beyond the level that invalidates the absorption thesis.",
      },
    ],
  },
  "delta-imbalance": {
    title: "Delta Imbalance",
    overview:
      "Delta measures the difference between aggressive buying and selling at each price. A delta imbalance shows where one side is overwhelming the other. In ES and NQ, this is visible on footprint charts; in forex you infer it through rapid directional pushes and failed pullbacks. Use delta to confirm a move, not to predict one.",
    objectives: [
      "Define delta and delta imbalance in trading terms.",
      "Use delta as confirmation at key levels.",
      "Avoid trading delta signals in isolation.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Delta is the net difference between aggressive buys and sells.",
          "Imbalance shows one side is in control at a specific price level.",
          "Strong delta without follow-through can signal exhaustion.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Mark a structural level where a response is likely.",
          "Watch for delta to surge as price approaches the level.",
          "Look for confirmation: follow-through or failure.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Enter only when delta aligns with structure and price follows through.",
          "If delta spikes but price stalls, prepare for a reversal setup.",
          "Keep your entry trigger simple and repeatable.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Delta can be misleading in thin markets or during news spikes.",
          "Use structural stops, not delta-based stops.",
          "Forex traders can mirror this by watching for failed aggressive pushes.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Trading every delta spike without context.",
          "Assuming large delta guarantees continuation.",
          "Ignoring price response at key levels.",
        ],
      },
    ],
    whenNotToTrade: [
      "When delta spikes in the middle of a range.",
      "When liquidity is thin and prints are noisy.",
      "When price is already extended far from structure.",
    ],
    diagram: "Delta Read\nImbalance → Price Response → Confirm or Fade",
    diagrams: ["DeltaDivergenceDiagram"],
    takeaways: [
      "Delta shows aggressive order dominance.",
      "Use delta as confirmation, not prediction.",
      "Watch for follow-through or failure at structure.",
      "Thin markets distort delta signals.",
      "Stops should still be structural.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Assuming a big delta print equals a guaranteed trend keeps you buying tops and selling bottoms.",
      },
      {
        type: "tip",
        content:
          "If delta surges but price does not move, treat it as a warning rather than a green light.",
      },
    ],
    quiz: [
      {
        id: "di-q1",
        question: "What does delta measure?",
        options: ["Volatility", "Net aggressive buying versus selling", "Time of day", "Open interest"],
        correctIndex: 1,
        explanation: "Delta is the difference between aggressive buys and sells at a price level.",
      },
      {
        id: "di-q2",
        question: "How should delta be used in a trade?",
        options: ["As the only entry signal", "As confirmation with structure", "As a stop level", "As a profit target"],
        correctIndex: 1,
        explanation: "Delta is most useful as confirmation when aligned with structure.",
      },
      {
        id: "di-q3",
        question: "What can a delta spike without price movement indicate?",
        options: ["Guaranteed continuation", "Potential exhaustion or absorption", "No meaningful info", "A forced breakout"],
        correctIndex: 1,
        explanation: "If price does not follow the delta, it can signal absorption or exhaustion.",
      },
    ],
  },
  "when-not-order-flow": {
    title: "When NOT to Trade Order Flow",
    overview:
      "Order flow is powerful, but it is not always the right tool. Thin liquidity, choppy ranges, and news spikes can produce misleading signals. ES and NQ are clean during peak hours, while off-hours often distort the tape. This lesson teaches you when to step back and rely on simpler structure-based trading.",
    objectives: [
      "Recognize market conditions where order flow loses reliability.",
      "Avoid trading order flow during news-driven volatility.",
      "Use simple structure or skip trades when signals are noisy.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Order flow is information about participation, not a guarantee of direction.",
          "Signal quality depends on liquidity and context.",
          "Sometimes the best trade is no trade.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Check the session for liquidity: avoid thin hours and holidays.",
          "Identify if the market is range-bound and unresponsive to flow.",
          "Know the economic calendar and plan around high-impact events.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "If the tape is noisy, shift to structure-based levels or stand aside.",
          "Avoid chasing prints during fast, erratic spikes.",
          "Keep entries only when flow aligns with higher timeframe bias.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "False signals are more frequent in low-liquidity conditions.",
          "News events can override normal order flow dynamics.",
          "Overtrading order flow increases costs without improving accuracy.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Forcing order flow trades when liquidity is low.",
          "Using order flow to justify trades that lack structure.",
          "Ignoring higher timeframe context during fast markets.",
        ],
      },
    ],
    whenNotToTrade: [
      "During thin overnight sessions or holiday markets.",
      "Minutes before major economic releases.",
      "When price is trapped in a tight range with no response to flow.",
    ],
    diagram: "Order Flow Filter\nLiquidity Check → News Check → Structure Check",
    diagrams: ["WhenNotToTradeDiagram"],
    takeaways: [
      "Order flow is unreliable in thin markets.",
      "News spikes can invalidate flow signals.",
      "Structure should still anchor every trade.",
      "Skipping bad conditions preserves capital and focus.",
      "Use order flow selectively, not constantly.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Using order flow during low-liquidity hours creates false confidence because the signals look strong but are easily reversed.",
      },
      {
        type: "tip",
        content:
          "If the tape feels chaotic, step back and trade clean structure later or skip the session.",
      },
    ],
    quiz: [
      {
        id: "wnof-q1",
        question: "When is order flow least reliable?",
        options: ["During liquid hours", "During thin or holiday markets", "At key levels", "During trends"],
        correctIndex: 1,
        explanation: "Low-liquidity conditions distort order flow and create false signals.",
      },
      {
        id: "wnof-q2",
        question: "How should you handle major news events?",
        options: ["Trade aggressively", "Avoid or plan specifically for them", "Ignore them", "Increase size"],
        correctIndex: 1,
        explanation: "High-impact news can override normal order flow, so you should avoid or plan carefully.",
      },
      {
        id: "wnof-q3",
        question: "What should anchor an order flow trade?",
        options: ["A random footprint", "Structure and context", "A moving average", "A gut feeling"],
        correctIndex: 1,
        explanation: "Structure provides the context that makes order flow meaningful.",
      },
    ],
  },
  "breakout-entries": {
    title: "Breakout Entries",
    overview:
      "Breakouts work when price moves beyond a level and holds, not when it spikes and reverses. ES and NQ breakouts often show clear follow-through during high volume, while forex breakouts need confirmation from session momentum. The goal is to filter false breaks and enter when continuation is likely. This lesson covers two practical breakout models.",
    objectives: [
      "Identify high-quality breakout levels.",
      "Use break-and-hold and break-pullback-continue models.",
      "Avoid chasing false breakout spikes.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "A true breakout clears a level and holds above or below it.",
          "False breakouts usually fail quickly and return to the range.",
          "Volume and context increase breakout reliability.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Define the level clearly (range high/low, previous day high/low).",
          "Check for compression or multiple tests of the level.",
          "Confirm the session has enough volume for follow-through.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Break-and-hold: enter after price clears and holds above the level.",
          "Break-pullback-continue: wait for a retest before entry.",
          "Use the level as your stop reference.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Breakouts fail often; keep stops tight and position size appropriate.",
          "Avoid breakouts directly into higher timeframe resistance.",
          "Forex breakouts need session momentum—avoid dead hours.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Chasing the first spike without confirmation.",
          "Ignoring context and trading breakouts in low volume.",
          "Using stops that are too tight for the breakout structure.",
        ],
      },
    ],
    whenNotToTrade: [
      "When the breakout occurs during low-volume sessions.",
      "When the level sits directly under a higher timeframe barrier.",
      "When price is already extended far beyond the breakout point.",
    ],
    diagram: "Breakout Models\nBreak + Hold | Break + Pullback + Continue",
    diagrams: ["BreakoutDiagram"],
    takeaways: [
      "A breakout is valid only if price holds beyond the level.",
      "Use the level as both confirmation and stop reference.",
      "Break-pullback-continue reduces false entry risk.",
      "Context and volume are essential for breakouts.",
      "Avoid chasing extended moves.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Entering the first spike is how you end up buying the top of a failed breakout.",
      },
      {
        type: "tip",
        content:
          "Wait for a hold or a pullback; if you miss the move, there will be another setup tomorrow.",
      },
    ],
    quiz: [
      {
        id: "be-q1",
        question: "What confirms a true breakout?",
        options: ["A quick spike", "A move and hold beyond the level", "A large candle only", "A moving average cross"],
        correctIndex: 1,
        explanation: "A breakout is confirmed when price clears a level and holds beyond it.",
      },
      {
        id: "be-q2",
        question: "What is a break-pullback-continue entry?",
        options: ["Entry before the break", "Entry after a retest of the level", "Entry at the session close", "Entry on a random tick"],
        correctIndex: 1,
        explanation: "This model waits for a breakout and then a pullback to the level before entering.",
      },
      {
        id: "be-q3",
        question: "Why avoid breakouts in low volume?",
        options: ["They move too fast", "They have higher false-break risk", "They are illegal", "They have tighter spreads"],
        correctIndex: 1,
        explanation: "Low volume increases the chance of false breaks without follow-through.",
      },
    ],
  },
  "pullback-entries": {
    title: "Pullback Entries",
    overview:
      "Pullbacks offer entries in the direction of the trend after price pauses. ES and NQ trends often give clean pullbacks to prior structure, and forex pairs do the same during active sessions. The key is to define where a pullback ends and continuation begins. This lesson covers two practical pullback models and how to manage them.",
    objectives: [
      "Identify high-quality pullback areas in a trend.",
      "Use structure to define the pullback end.",
      "Avoid chasing price after the move has already resumed.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "A pullback is a temporary counter-move within a larger trend.",
          "The best pullbacks return to prior structure or value zones.",
          "Entries should align with the dominant trend.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Identify the trend direction using higher highs/lows.",
          "Mark the last broken structure or demand/supply zone.",
          "Wait for price to pull back into that area.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Enter on confirmation: a rejection candle, absorption, or higher low.",
          "Place stops beyond the pullback low/high that invalidates the trend.",
          "Target the prior swing high/low or measured move.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Pullbacks can deepen into reversals; keep stops logical.",
          "Avoid taking pullbacks into major higher timeframe resistance.",
          "Forex pullbacks can be deeper during low liquidity—size down if needed.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Entering before the pullback completes.",
          "Taking pullbacks against a higher timeframe trend.",
          "Chasing after the trend already resumed.",
        ],
      },
    ],
    whenNotToTrade: [
      "When the pullback violates the prior swing structure.",
      "When the market is ranging rather than trending.",
      "When the pullback forms during a low-liquidity session.",
    ],
    diagram: "Pullback Model\nTrend → Pullback → Confirmation → Continuation",
    diagrams: ["PullbackDiagram"],
    takeaways: [
      "Pullbacks are trend entries, not countertrend trades.",
      "Use structure to define pullback zones.",
      "Wait for confirmation before entering.",
      "Stops belong beyond the pullback extreme.",
      "Avoid pullbacks in non-trending markets.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Entering before the pullback is complete is how you get trapped in a deeper reversal.",
      },
      {
        type: "tip",
        content:
          "If the pullback does not show a clear rejection signal, skip it and wait for the next one.",
      },
    ],
    quiz: [
      {
        id: "pe-q1",
        question: "What is the core idea of a pullback entry?",
        options: ["Trade against the trend", "Enter with the trend after a pause", "Trade during low volume", "Only trade news"],
        correctIndex: 1,
        explanation: "Pullback entries aim to join the trend after a temporary retracement.",
      },
      {
        id: "pe-q2",
        question: "Where should a pullback stop be placed?",
        options: ["Inside the pullback", "Beyond the pullback extreme", "At a random number", "No stop needed"],
        correctIndex: 1,
        explanation: "The stop should sit beyond the pullback extreme that invalidates the trend.",
      },
      {
        id: "pe-q3",
        question: "When should you avoid pullback trades?",
        options: ["During a trend", "In a range", "After confirmation", "When volume is strong"],
        correctIndex: 1,
        explanation: "Pullbacks are trend strategies and are less effective in choppy ranges.",
      },
    ],
  },
  "trade-management": {
    title: "Trade Management",
    overview:
      "Trade management determines how you exit, protect profits, and control risk after entry. Even a good entry can turn into a bad trade without a clear plan. ES and NQ move quickly, so decisions must be predefined. The same principles apply to forex: manage the trade or it will manage you.",
    objectives: [
      "Plan exits before entry, including targets and stops.",
      "Use partials and trailing stops responsibly.",
      "Avoid emotional exits and premature profit taking.",
    ],
    sections: [
      {
        heading: "Concept",
        content: [
          "Trade management is about controlling outcomes after the entry.",
          "You need a plan for partials, trailing stops, and full exits.",
          "Consistency in management builds reliable performance data.",
        ],
      },
      {
        heading: "Setup",
        content: [
          "Define your initial target based on structure or measured moves.",
          "Decide if and where you will take partial profits.",
          "Set rules for when you will trail your stop.",
        ],
      },
      {
        heading: "Execution",
        content: [
          "Follow your management plan without changing it mid-trade.",
          "Move stops only based on predefined rules, not fear.",
          "Let strong trades run when the market confirms continuation.",
        ],
      },
      {
        heading: "Risk",
        content: [
          "Taking profits too early can ruin the reward side of the equation.",
          "Not protecting profits can give back large gains quickly.",
          "Balance risk by scaling out or trailing in logical increments.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Taking profit at the first green tick without a plan.",
          "Moving stops to break-even too early.",
          "Closing winners because of fear instead of a rule.",
        ],
      },
    ],
    whenNotToTrade: [
      "When you have no exit plan before entering.",
      "When you feel the urge to micro-manage every tick.",
      "When volatility is so high that targets are unclear.",
    ],
    diagram: "Management Plan\nEntry → Partial → Trail → Final Exit",
    diagrams: ["TradeManagementDiagram"],
    takeaways: [
      "A management plan is part of the trade, not optional.",
      "Define targets and stop rules before entry.",
      "Partials and trailing stops should follow clear rules.",
      "Emotional exits reduce reward-to-risk.",
      "Consistent management builds long-term edge.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Closing winners out of fear usually cuts off the very trades that make your month profitable.",
      },
      {
        type: "tip",
        content:
          "Write a simple exit plan (target, partial, trail) and stick to it for at least 20 trades before changing it.",
      },
    ],
    quiz: [
      {
        id: "tm-q1",
        question: "When should you plan your exits?",
        options: ["After you enter", "Before you enter", "Only after profit", "Never"],
        correctIndex: 1,
        explanation: "Exit planning should be done before entry so decisions are not emotional.",
      },
      {
        id: "tm-q2",
        question: "Why can moving to break-even too early be a mistake?",
        options: ["It increases risk", "It can stop you out before the move continues", "It guarantees profit", "It reduces slippage"],
        correctIndex: 1,
        explanation: "Early break-even moves often get you stopped out by normal noise before the trend plays out.",
      },
      {
        id: "tm-q3",
        question: "What is the main goal of trade management?",
        options: ["Predict the market", "Control outcomes after entry", "Avoid stops", "Trade more"],
        correctIndex: 1,
        explanation: "Trade management is about controlling risk and reward after you are in the trade.",
      },
    ],
  },
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons[slug]
}
