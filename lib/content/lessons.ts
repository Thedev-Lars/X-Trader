import type { Lesson } from "@/lib/map/types"

export const lessons: Record<string, Lesson> = {
  "futures-basics": {
    title: "Futures Basics",
    sections: [
      {
        heading: "What Are Futures Contracts?",
        content: [
          "A futures contract is a legal agreement to buy or sell an asset at a predetermined price at a specified time in the future.",
          "Unlike stocks, futures are derivatives - their value is derived from an underlying asset like crude oil, gold, or stock indices.",
          "As a retail trader, you are speculating on price movement, not taking delivery of the actual commodity.",
        ],
      },
      {
        heading: "Key Characteristics",
        content: [
          "Standardized: Contract specifications (size, expiration) are set by the exchange.",
          "Leverage: You only need to put up a fraction of the contract value (margin).",
          "Two-sided: You can go long (buy) or short (sell) with equal ease.",
          "Expiration: Contracts have expiration dates, though most day traders close positions same-day.",
        ],
      },
      {
        heading: "Popular Futures Markets",
        content: [
          "ES (E-mini S&P 500): Most liquid equity index future.",
          "NQ (E-mini Nasdaq 100): Tech-heavy index future.",
          "CL (Crude Oil): High volatility commodity.",
          "GC (Gold): Safe-haven metal future.",
        ],
      },
    ],
    takeaways: [
      "Futures are standardized contracts to buy/sell assets at future dates",
      "They offer leverage, liquidity, and the ability to go short easily",
      "Most retail traders focus on index futures like ES and NQ",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Do not confuse futures with options - futures obligate you to the trade, while options give you the right but not the obligation.",
      },
      {
        type: "tip",
        content: "Start with micro contracts (MES, MNQ) which are 1/10th the size of standard E-mini contracts.",
      },
    ],
    quiz: [
      {
        id: "fb-q1",
        question: "What makes futures a derivative instrument?",
        options: [
          "They are traded on exchanges",
          "Their value is derived from an underlying asset",
          "They require margin to trade",
          "They can be traded 24 hours",
        ],
        correctIndex: 1,
      },
      {
        id: "fb-q2",
        question: "Which of these is NOT a characteristic of futures contracts?",
        options: [
          "Standardized specifications",
          "Built-in leverage",
          "Unlimited loss protection",
          "Ability to go short easily",
        ],
        correctIndex: 2,
      },
      {
        id: "fb-q3",
        question: "What is ES in futures trading?",
        options: ["European Stock futures", "E-mini S&P 500 futures", "Energy Sector futures", "Exchange Settlement"],
        correctIndex: 1,
      },
    ],
  },
  "tick-values": {
    title: "Tick Values & Contract Specs",
    sections: [
      {
        heading: "Understanding Ticks",
        content: [
          "A tick is the minimum price movement for a futures contract.",
          "Different contracts have different tick sizes and values.",
          "Knowing your tick value is essential for calculating risk and P&L.",
        ],
      },
      {
        heading: "Common Contract Specifications",
        content: [
          "ES: Tick size = 0.25 points, Tick value = $12.50, Point value = $50",
          "NQ: Tick size = 0.25 points, Tick value = $5.00, Point value = $20",
          "CL: Tick size = 0.01, Tick value = $10.00",
          "MES (Micro): Tick value = $1.25 (1/10th of ES)",
        ],
      },
      {
        heading: "Calculating P&L",
        content: [
          "P&L = (Exit Price - Entry Price) x Point Value x Number of Contracts",
          "For ES: A 10-point move = $500 per contract",
          "For NQ: A 10-point move = $200 per contract",
          "Always know your dollar risk before entering a trade.",
        ],
      },
    ],
    takeaways: [
      "Each futures contract has specific tick sizes and values",
      "Tick value determines your dollar risk per price movement",
      "Micro contracts allow you to trade with smaller position sizes",
    ],
    callouts: [
      {
        type: "mistake",
        content: "Confusing tick size with tick value leads to incorrect risk calculations.",
      },
      {
        type: "tip",
        content: "Memorize the tick values for your primary markets before trading live.",
      },
    ],
    quiz: [
      {
        id: "tv-q1",
        question: "What is the tick value for ES (E-mini S&P 500)?",
        options: ["$5.00", "$10.00", "$12.50", "$50.00"],
        correctIndex: 2,
      },
      {
        id: "tv-q2",
        question: "If ES moves 4 points, what is your P&L on 1 contract?",
        options: ["$50", "$100", "$200", "$400"],
        correctIndex: 2,
      },
      {
        id: "tv-q3",
        question: "How does MES tick value compare to ES?",
        options: ["Same value", "Half the value", "1/10th the value", "Double the value"],
        correctIndex: 2,
      },
    ],
  },
  "margin-leverage": {
    title: "Margin & Leverage",
    sections: [
      {
        heading: "Understanding Margin",
        content: [
          "Margin is the deposit required to open and maintain a futures position.",
          "Initial margin is required to open a position; maintenance margin keeps it open.",
          "If your account drops below maintenance margin, you will receive a margin call.",
        ],
      },
      {
        heading: "Types of Margin",
        content: [
          "Initial Margin: Required to open a new position (set by exchange).",
          "Maintenance Margin: Minimum required to keep position open.",
          "Day Trading Margin: Often lower than overnight margin requirements.",
          "Intraday margins can be as low as $500 for ES with some brokers.",
        ],
      },
      {
        heading: "Leverage Double-Edged Sword",
        content: [
          "Leverage amplifies both gains AND losses.",
          "A small price move can result in large percentage gains or losses on your margin.",
          "New traders should use smaller position sizes until they understand the leverage impact.",
        ],
      },
    ],
    takeaways: [
      "Margin is a good-faith deposit, not a down payment",
      "Leverage magnifies both profits and losses",
      "Always maintain adequate margin to avoid forced liquidation",
    ],
    callouts: [
      {
        type: "mistake",
        content: "Using maximum leverage because you can is the fastest way to blow up an account.",
      },
      {
        type: "tip",
        content: "Trade as if you have 2-3x the margin requirement to give yourself a buffer.",
      },
    ],
    quiz: [
      {
        id: "ml-q1",
        question: "What happens when your account falls below maintenance margin?",
        options: ["Nothing", "You receive a margin call", "Your position automatically profits", "Leverage increases"],
        correctIndex: 1,
      },
      {
        id: "ml-q2",
        question: "Why is leverage described as a double-edged sword?",
        options: [
          "It only works on certain contracts",
          "It amplifies both gains and losses",
          "It requires two accounts",
          "It only works during market hours",
        ],
        correctIndex: 1,
      },
      {
        id: "ml-q3",
        question: "What is day trading margin typically compared to overnight margin?",
        options: ["Higher", "Lower", "The same", "Not applicable"],
        correctIndex: 1,
      },
    ],
  },
  "market-structure": {
    title: "Market Structure Basics",
    sections: [
      {
        heading: "Understanding Trends",
        content: [
          "An uptrend consists of higher highs and higher lows.",
          "A downtrend consists of lower highs and lower lows.",
          "Identifying the trend is the first step in any trading decision.",
        ],
      },
      {
        heading: "Support and Resistance",
        content: [
          "Support is a price level where buying pressure tends to overcome selling pressure.",
          "Resistance is a price level where selling pressure tends to overcome buying pressure.",
          "These levels become more significant the more times they are tested.",
        ],
      },
      {
        heading: "Key Price Levels",
        content: [
          "Previous day high/low are important reference points.",
          "Opening range often sets the tone for the day.",
          "Round numbers (4000, 4500) often act as psychological levels.",
        ],
      },
    ],
    takeaways: [
      "Trends are defined by the pattern of highs and lows",
      "Support and resistance are key decision points",
      "Context from higher timeframes helps inform lower timeframe decisions",
    ],
    callouts: [
      {
        type: "mistake",
        content: "Fighting a strong trend by constantly looking for reversals is a losing strategy.",
      },
      {
        type: "tip",
        content: "Mark the previous day high, low, and close on your chart before the session starts.",
      },
    ],
    quiz: [
      {
        id: "ms-q1",
        question: "What defines an uptrend?",
        options: [
          "Price is going up",
          "Higher highs and higher lows",
          "Volume is increasing",
          "Moving averages are green",
        ],
        correctIndex: 1,
      },
      {
        id: "ms-q2",
        question: "What is support?",
        options: [
          "A price level where selling overcomes buying",
          "A price level where buying overcomes selling",
          "The highest price of the day",
          "The opening price",
        ],
        correctIndex: 1,
      },
      {
        id: "ms-q3",
        question: "Why are round numbers significant?",
        options: [
          "They are easier to calculate",
          "They act as psychological levels",
          "Exchanges prefer them",
          "They have lower fees",
        ],
        correctIndex: 1,
      },
    ],
  },
  "session-timing": {
    title: "Session Timing & Market Hours",
    sections: [
      {
        heading: "Understanding Trading Sessions",
        content: [
          "Futures trade nearly 24 hours, but not all hours are equal.",
          "The US session (9:30 AM - 4:00 PM ET) has the highest volume for index futures.",
          "Different sessions have different characteristics and volatility profiles.",
        ],
      },
      {
        heading: "Key Time Periods",
        content: [
          "Pre-market (4:00 AM - 9:30 AM ET): Lower volume, can set up the day.",
          "Market Open (9:30 AM - 10:30 AM ET): Highest volatility, most opportunity.",
          "Midday (11:30 AM - 1:30 PM ET): Often choppy, lower volume.",
          "Power Hour (3:00 PM - 4:00 PM ET): Increased activity as traders close positions.",
        ],
      },
      {
        heading: "Economic Events",
        content: [
          "Major economic releases can cause significant volatility.",
          "FOMC announcements, jobs reports, and CPI are major market movers.",
          "Check the economic calendar before trading each day.",
        ],
      },
    ],
    takeaways: [
      "Different sessions have different characteristics",
      "The first and last hours tend to have more opportunity",
      "Be aware of the economic calendar",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Trading during midday chop expecting trending conditions is a common way to give back morning profits.",
      },
      {
        type: "tip",
        content: "Create a schedule for when you will trade based on your strategy and the sessions that suit it.",
      },
    ],
    quiz: [
      {
        id: "st-q1",
        question: "Which session typically has the highest volume for index futures?",
        options: ["Asian", "European", "US", "All equally"],
        correctIndex: 2,
      },
      {
        id: "st-q2",
        question: "What time period is often described as choppy for day traders?",
        options: ["Market open", "Midday (11:30 AM - 1:30 PM ET)", "Last hour", "After hours"],
        correctIndex: 1,
      },
      {
        id: "st-q3",
        question: "Why should you check the economic calendar?",
        options: [
          "To find holidays",
          "Major releases can cause significant volatility",
          "To see what stocks to buy",
          "It is not important for futures",
        ],
        correctIndex: 1,
      },
    ],
  },
  "risk-fundamentals": {
    title: "Risk Fundamentals",
    isRiskCritical: true,
    sections: [
      {
        heading: "The First Rule of Trading",
        content: [
          "Protecting capital is more important than making money.",
          "You cannot make money if you have no capital to trade with.",
          "Risk management is not optional - it is the foundation of longevity.",
        ],
      },
      {
        heading: "The 1-2% Rule",
        content: [
          "Never risk more than 1-2% of your account on a single trade.",
          "For a $10,000 account, max risk per trade = $100-$200.",
          "This ensures you can survive a string of losses without significant damage.",
        ],
      },
      {
        heading: "Risk-Reward Ratio",
        content: [
          "Always aim for trades where potential reward exceeds potential risk.",
          "A 2:1 ratio means you target $2 profit for every $1 risked.",
          "With a 2:1 ratio, you can be profitable winning only 40% of trades.",
        ],
      },
    ],
    takeaways: [
      "Capital preservation is the number one priority",
      "Risk 1-2% maximum per trade",
      "Aim for at least 2:1 reward-to-risk ratio",
    ],
    callouts: [
      {
        type: "mistake",
        content: "Risking 5% or more because you feel confident is how disciplined traders become gamblers.",
      },
      {
        type: "tip",
        content: "Write your risk limits on a sticky note and place it on your monitor before every session.",
      },
    ],
    quiz: [
      {
        id: "rf-q1",
        question: "What is the recommended max risk per trade?",
        options: ["5-10%", "3-5%", "1-2%", "As much as you can afford"],
        correctIndex: 2,
      },
      {
        id: "rf-q2",
        question: "With a 2:1 risk-reward ratio, what win rate makes you profitable?",
        options: ["60%", "50%", "40%", "33%"],
        correctIndex: 2,
      },
      {
        id: "rf-q3",
        question: "Why is capital preservation the top priority?",
        options: [
          "It impresses other traders",
          "You cannot make money without capital",
          "It is required by regulations",
          "It is not actually that important",
        ],
        correctIndex: 1,
      },
    ],
  },
  "trading-psychology-intro": {
    title: "Trading Psychology Introduction",
    sections: [
      {
        heading: "The Mental Game",
        content: [
          "Trading is 80% psychology and 20% strategy.",
          "Your biggest enemy in trading is yourself.",
          "Emotions like fear and greed can override logical decision-making.",
        ],
      },
      {
        heading: "Common Psychological Pitfalls",
        content: [
          "Fear of Missing Out (FOMO): Chasing trades after they have moved.",
          "Revenge Trading: Trying to make back losses immediately.",
          "Overconfidence: Increasing size after a winning streak.",
          "Analysis Paralysis: Unable to pull the trigger on valid setups.",
        ],
      },
      {
        heading: "Building Mental Discipline",
        content: [
          "Follow your trading plan without exception.",
          "Accept that losses are part of the game.",
          "Take breaks when emotionally compromised.",
        ],
      },
    ],
    takeaways: [
      "Psychology is the most underrated aspect of trading",
      "Self-awareness is the first step to improvement",
      "A trading plan helps remove emotion from decisions",
    ],
    callouts: [
      {
        type: "mistake",
        content: "Thinking you are immune to psychological biases is the first sign you are not.",
      },
      {
        type: "tip",
        content: "Keep a psychological journal alongside your trade journal to track your emotional state.",
      },
    ],
    quiz: [
      {
        id: "tp-q1",
        question: "What percentage of trading success is attributed to psychology?",
        options: ["20%", "40%", "60%", "80%"],
        correctIndex: 3,
      },
      {
        id: "tp-q2",
        question: "What is revenge trading?",
        options: [
          "Trading against a specific person",
          "Trying to make back losses immediately",
          "A profitable strategy",
          "Trading during news events",
        ],
        correctIndex: 1,
      },
      {
        id: "tp-q3",
        question: "What helps remove emotion from trading decisions?",
        options: ["Trading more", "Following a trading plan", "Ignoring losses", "Using more leverage"],
        correctIndex: 1,
      },
    ],
  },
  "position-sizing": {
    title: "Position Sizing",
    isRiskCritical: true,
    sections: [
      {
        heading: "The Position Sizing Formula",
        content: [
          "Position Size = (Account Risk) / (Trade Risk per Contract)",
          "Account Risk = Account Size x Risk Percentage (1-2%)",
          "Trade Risk = Stop Distance in Points x Point Value",
        ],
      },
      {
        heading: "Worked Example",
        content: [
          "Account: $10,000, Risk: 1% = $100 max risk",
          "ES trade with 4-point stop: 4 x $50 = $200 risk per contract",
          "$100 / $200 = 0.5 contracts - so trade 0 contracts (cannot take this trade)",
          "With MES: 4 x $5 = $20 per contract, $100 / $20 = 5 micro contracts",
        ],
      },
      {
        heading: "Key Principles",
        content: [
          "Always round DOWN, never up.",
          "If the math says you cannot take the trade, do not take it.",
          "Micro contracts allow proper position sizing with smaller accounts.",
        ],
      },
    ],
    takeaways: [
      "Position size is calculated from risk, not from how much you want to make",
      "Always round down on position size",
      "Use micro contracts if standard contracts create too much risk",
    ],
    callouts: [
      {
        type: "mistake",
        content: "Rounding up position size because it is close enough is how disciplined traders become gamblers.",
      },
      {
        type: "tip",
        content: "Create a position sizing calculator in a spreadsheet to remove mental math errors.",
      },
    ],
    quiz: [
      {
        id: "ps-q1",
        question: "What determines your position size?",
        options: ["How confident you feel", "Your risk parameters", "The current price", "Time of day"],
        correctIndex: 1,
      },
      {
        id: "ps-q2",
        question: "Should you round position size up or down?",
        options: ["Up", "Down", "To nearest whole number", "It does not matter"],
        correctIndex: 1,
      },
      {
        id: "ps-q3",
        question: "Why are micro contracts useful for smaller accounts?",
        options: [
          "They are easier to understand",
          "They allow proper position sizing with less capital",
          "They have better fills",
          "They are more liquid",
        ],
        correctIndex: 1,
      },
    ],
  },
  "stop-placement": {
    title: "Stop-Loss Placement",
    isRiskCritical: true,
    sections: [
      {
        heading: "Why Stops Matter",
        content: [
          "A stop-loss is your predefined exit point if the trade goes against you.",
          "It limits your loss to a known amount before you enter.",
          "Trading without stops is gambling, not trading.",
        ],
      },
      {
        heading: "Where to Place Stops",
        content: [
          "Place stops at a level where your trade thesis is invalidated.",
          "Behind support for long trades, above resistance for shorts.",
          "Give enough room to avoid getting stopped out by normal noise.",
        ],
      },
      {
        heading: "Stop Placement Methods",
        content: [
          "Structure-based: Below swing lows or above swing highs.",
          "ATR-based: 1-2x Average True Range from entry.",
          "Fixed dollar: Based on maximum acceptable loss.",
        ],
      },
    ],
    takeaways: [
      "Every trade must have a predefined stop-loss",
      "Stops should be placed at logical invalidation points",
      "Never move a stop further away from your entry",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Moving your stop further away when price approaches it is emotional trading disguised as flexibility.",
      },
      {
        type: "tip",
        content: "Decide your stop location BEFORE entering, not after.",
      },
    ],
    quiz: [
      {
        id: "sp-q1",
        question: "What determines where your stop should be placed?",
        options: [
          "How much you want to make",
          "Where your trade thesis is invalidated",
          "A random number",
          "Your broker's recommendation",
        ],
        correctIndex: 1,
      },
      {
        id: "sp-q2",
        question: "Should you move your stop further from entry if price approaches it?",
        options: [
          "Yes, to give it more room",
          "No, that is emotional trading",
          "Only on winning trades",
          "Only on Fridays",
        ],
        correctIndex: 1,
      },
      {
        id: "sp-q3",
        question: "When should you decide your stop location?",
        options: ["After entering", "Before entering", "When in profit", "At end of day"],
        correctIndex: 1,
      },
    ],
  },
  "order-flow-fundamentals": {
    title: "Order Flow Fundamentals",
    sections: [
      {
        heading: "What is Order Flow?",
        content: [
          "Order flow is the study of actual buying and selling activity in real-time.",
          "It shows you WHO is trading (aggressive buyers/sellers) not just price movement.",
          "Understanding order flow gives you insight into supply and demand dynamics.",
        ],
      },
      {
        heading: "Aggressive vs Passive Orders",
        content: [
          "Aggressive orders: Market orders that cross the spread to get filled immediately.",
          "Passive orders: Limit orders that rest on the order book waiting to be filled.",
          "Aggressive buying lifts the offer; aggressive selling hits the bid.",
        ],
      },
      {
        heading: "Why Order Flow Matters",
        content: [
          "Price can move on low volume (weak move) or high volume (strong move).",
          "Order flow helps you distinguish between real breakouts and false ones.",
          "It provides context that price charts alone cannot show.",
        ],
      },
    ],
    takeaways: [
      "Order flow reveals the actual buying and selling activity",
      "Aggressive orders move price; passive orders absorb it",
      "Volume context helps validate price movements",
    ],
    callouts: [
      {
        type: "mistake",
        content: "Relying solely on price charts without understanding volume context leads to false signals.",
      },
      {
        type: "tip",
        content: "Start by simply watching time and sales to get a feel for order flow before using advanced tools.",
      },
    ],
    quiz: [
      {
        id: "of-q1",
        question: "What is order flow?",
        options: [
          "A type of chart pattern",
          "The study of actual buying and selling activity",
          "A moving average indicator",
          "A trading platform",
        ],
        correctIndex: 1,
      },
      {
        id: "of-q2",
        question: "What is an aggressive order?",
        options: [
          "A limit order on the book",
          "A market order that crosses the spread",
          "A canceled order",
          "An order with a long duration",
        ],
        correctIndex: 1,
      },
      {
        id: "of-q3",
        question: "Why does volume context matter?",
        options: [
          "It determines commission rates",
          "It helps distinguish real moves from false ones",
          "It is required by regulators",
          "It only matters for stocks",
        ],
        correctIndex: 1,
      },
    ],
  },
  "mindset-discipline": {
    title: "Mindset & Discipline",
    sections: [
      {
        heading: "The Disciplined Trader",
        content: [
          "Discipline is doing what your plan says, even when you do not feel like it.",
          "Consistency in execution is more important than being right.",
          "Every deviation from your plan is a data point about your psychology.",
        ],
      },
      {
        heading: "Building Good Habits",
        content: [
          "Create a pre-trade checklist and use it every single time.",
          "Review your trades daily - wins and losses.",
          "Set process goals (follow the plan) not outcome goals (make $X).",
        ],
      },
      {
        heading: "Handling Drawdowns",
        content: [
          "Drawdowns are inevitable - even the best traders have them.",
          "Reduce size during drawdowns, do not increase it.",
          "Focus on execution quality, not P&L, during difficult periods.",
        ],
      },
    ],
    takeaways: [
      "Discipline means following your plan regardless of feelings",
      "Process goals are more controllable than outcome goals",
      "Reduce size during drawdowns to protect capital",
    ],
    callouts: [
      {
        type: "mistake",
        content: "Increasing position size during a drawdown to make back losses faster usually makes things worse.",
      },
      {
        type: "tip",
        content: "Judge your trading by whether you followed your plan, not by whether you made money.",
      },
    ],
    quiz: [
      {
        id: "md-q1",
        question: "What is discipline in trading?",
        options: [
          "Making money every day",
          "Following your plan even when you do not feel like it",
          "Trading without stops",
          "Never taking losses",
        ],
        correctIndex: 1,
      },
      {
        id: "md-q2",
        question: "What should you do during a drawdown?",
        options: ["Increase size", "Reduce size", "Stop trading forever", "Change strategies immediately"],
        correctIndex: 1,
      },
      {
        id: "md-q3",
        question: "Which goal type is more controllable?",
        options: ["Outcome goals", "Process goals", "Profit goals", "Random goals"],
        correctIndex: 1,
      },
    ],
  },
  "order-flow-basics": {
    title: "Order Flow Basics",
    diagrams: ["AggressiveVsRestingDiagram"],
    sections: [
      {
        heading: "What Problem This Solves",
        content: [
          "Price charts show you WHAT happened but not WHY it happened. Order flow reveals the underlying cause of price movement.",
          "Without order flow, you cannot distinguish between a weak breakout driven by a few retail traders and a strong move backed by institutional buying.",
          "Order flow helps you understand the intent behind price action, turning reactive trading into proactive decision-making.",
          "Many traders lose money chasing moves that look strong on a chart but have no real buying or selling pressure behind them.",
        ],
      },
      {
        heading: "What Traders Are Actually Doing",
        content: [
          "Every price movement requires one side to be aggressive - willing to pay the spread to get filled immediately via market orders.",
          "Aggressive buyers hit the ask (offer) price, lifting price up. Aggressive sellers hit the bid, pushing price down.",
          "Passive traders place limit orders that sit on the order book, waiting for aggressive traders to trade with them.",
          "The battle between aggressive and passive orders determines whether price breaks through a level or reverses.",
          "Large institutions often use passive orders to accumulate positions without moving price, then aggressive orders to trigger momentum.",
        ],
      },
      {
        heading: "What You See on the Chart",
        content: [
          "On a footprint chart, you see the actual number of contracts traded at each price level.",
          "Green numbers typically show buying activity at the ask; red numbers show selling activity at the bid.",
          "Large imbalances (one side significantly larger) indicate strong directional pressure at that price.",
          "Volume at price shows where the most trading activity occurred - these levels often become future support or resistance.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Assuming all volume is equal - volume during consolidation means something different than volume during a breakout.",
          "Ignoring context - high volume selling in an uptrend might be profit-taking, not a reversal signal.",
          "Over-complicating the analysis - start with simple concepts before adding advanced indicators.",
          "Trading order flow signals without confirming structure and context from higher timeframes.",
        ],
      },
      {
        heading: "When NOT to Use This",
        content: [
          "In overnight sessions or low-liquidity periods when volume is too thin to be meaningful.",
          "During major news events when order flow becomes chaotic and unpredictable.",
          "If you do not have access to proper order flow tools - guessing at order flow is worse than not using it.",
          "When you are a complete beginner - master basic price action and risk management first.",
        ],
      },
    ],
    takeaways: [
      "Order flow shows WHO is trading (aggressive vs passive) not just price movement",
      "Aggressive orders cross the spread and move price; passive orders absorb and defend levels",
      "Volume context distinguishes strong moves from weak ones that are likely to fail",
      "Always combine order flow with structure - neither works well in isolation",
      "Start simple: watch time and sales before using advanced footprint tools",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Jumping into order flow analysis without first mastering basic market structure is like trying to read a foreign language without learning the alphabet. The signals will overwhelm you and lead to worse decisions than simpler approaches.",
      },
      {
        type: "tip",
        content:
          "Begin by watching time and sales for 15 minutes at the open without trading. Notice how aggressive buying clusters look different from passive absorption. This observation builds intuition faster than any course.",
      },
    ],
    quiz: [
      {
        id: "ofb-q1",
        question: "What does order flow reveal that price charts cannot?",
        options: [
          "Future price targets",
          "Whether moves are driven by aggressive or passive orders",
          "Which stocks to buy",
          "The best time to trade",
        ],
        correctIndex: 1,
      },
      {
        id: "ofb-q2",
        question: "What happens when aggressive buyers hit the ask?",
        options: ["Price drops", "Price rises as they lift the offer", "Nothing happens", "Volume decreases"],
        correctIndex: 1,
      },
      {
        id: "ofb-q3",
        question: "When should you NOT rely on order flow signals?",
        options: [
          "During the market open",
          "In low-liquidity overnight sessions",
          "When price is trending",
          "At support and resistance levels",
        ],
        correctIndex: 1,
      },
    ],
  },
  "absorption-rejection": {
    title: "Absorption and Rejection",
    diagrams: ["AbsorptionPatternDiagram"],
    sections: [
      {
        heading: "What Problem This Solves",
        content: [
          "Traditional support and resistance levels break all the time - absorption patterns tell you when a level is actually being defended.",
          "Without understanding absorption, you cannot distinguish between a level that is about to break and one where large players are accumulating.",
          "This concept prevents you from getting trapped in false breakouts that immediately reverse.",
          "Absorption reveals institutional activity that is invisible on standard price charts.",
        ],
      },
      {
        heading: "What Traders Are Actually Doing",
        content: [
          "At key levels, large traders place massive limit orders that absorb aggressive selling or buying without price moving much.",
          "When you see high volume but minimal price progress, someone is actively defending that level with passive orders.",
          "These defenders are often institutions building positions - they WANT price to stay at that level while they accumulate.",
          "Rejection occurs when the defenders have absorbed all the aggression and aggressive traders on the other side take over.",
          "The shift from absorption to rejection is often marked by a sudden increase in opposite-direction aggressive orders.",
        ],
      },
      {
        heading: "What You See on the Chart",
        content: [
          "High volume bars with small bodies or long wicks - lots of trading but little price movement.",
          "On footprint charts: large numbers on one side being matched by equally large numbers on the other side at the same price.",
          "Multiple attempts to break a level that keep getting pushed back - each failure shows absorption at work.",
          "The rejection candle: after absorption, a strong candle in the opposite direction signals the level held.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Confusing low volume consolidation with high volume absorption - they look similar on price charts but mean opposite things.",
          "Trading the first sign of absorption instead of waiting for the rejection confirmation.",
          "Ignoring the trend context - absorption in a strong trend may just pause price temporarily before continuation.",
          "Setting stops too tight at absorption levels - price often tests the level multiple times before rejection.",
        ],
      },
      {
        heading: "When NOT to Use This",
        content: [
          "In strongly trending markets where levels break easily regardless of absorption attempts.",
          "At minor levels with no historical significance - absorption at random prices is not meaningful.",
          "When volume is thin - you need sufficient activity to identify real absorption patterns.",
          "If you cannot see time and sales or footprint data - standard candle charts do not show absorption clearly.",
        ],
      },
    ],
    takeaways: [
      "Absorption occurs when limit orders defend a level by absorbing aggressive orders without price moving",
      "High volume with minimal price progress signals someone is actively defending that level",
      "Wait for the rejection candle to confirm absorption before entering trades",
      "Absorption at key levels often precedes significant reversals",
      "Never trade absorption patterns without volume data to confirm the signal",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Trading the moment you see absorption without waiting for the rejection signal is premature. Absorption can continue for extended periods, and you will get stopped out multiple times before the actual reversal occurs.",
      },
      {
        type: "tip",
        content:
          "Mark levels where you see absorption on your chart. Even if you do not trade them immediately, tracking how they resolve over time builds pattern recognition that becomes invaluable.",
      },
    ],
    quiz: [
      {
        id: "ar-q1",
        question: "What characterizes absorption at a price level?",
        options: [
          "Low volume and big price moves",
          "High volume with minimal price progress",
          "Price breaking through cleanly",
          "No trading activity",
        ],
        correctIndex: 1,
      },
      {
        id: "ar-q2",
        question: "What should you wait for before trading an absorption pattern?",
        options: ["A news event", "The market open", "Rejection confirmation", "More absorption"],
        correctIndex: 2,
      },
      {
        id: "ar-q3",
        question: "Who is typically responsible for absorption at key levels?",
        options: [
          "Retail day traders",
          "Institutions building positions",
          "Market makers only",
          "Algorithmic traders exclusively",
        ],
        correctIndex: 1,
      },
    ],
  },
  "delta-imbalance": {
    title: "Delta and Imbalance",
    diagrams: ["DeltaDivergenceDiagram"],
    sections: [
      {
        heading: "What Problem This Solves",
        content: [
          "Volume alone does not tell you direction - delta shows you the net aggression (buyers minus sellers) at each bar or price level.",
          "Price can make new highs while delta is declining, warning of exhaustion before the reversal appears on the chart.",
          "Without delta analysis, you cannot see when a move is running out of aggressive participation.",
          "Delta divergence catches trend exhaustion often 2-5 bars before price confirms the reversal.",
        ],
      },
      {
        heading: "What Traders Are Actually Doing",
        content: [
          "Delta measures aggressive buying volume minus aggressive selling volume for a period.",
          "Positive delta means more aggressive buyers; negative delta means more aggressive sellers dominated.",
          "Cumulative delta tracks the running total over time, showing the overall bias of aggressive activity.",
          "When price rises but delta is flat or declining, buyers are losing conviction - late longs are getting trapped.",
          "Imbalances occur when one side significantly dominates at a specific price - these become footprints of institutional activity.",
        ],
      },
      {
        heading: "What You See on the Chart",
        content: [
          "Delta bars below price: green bars show net buying, red bars show net selling for each candle.",
          "Divergence: price making higher highs while delta makes lower highs - a warning sign.",
          "Stacked imbalances on footprint: multiple consecutive price levels where one side dominates by 3:1 or more.",
          "Delta spikes often mark the end of moves - when everyone is aggressively buying, there is no one left to buy.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Using delta as a standalone signal without price structure confirmation.",
          "Expecting divergence to work immediately - it is a warning sign, not a precise timing signal.",
          "Ignoring cumulative delta context - a single bar delta can be misleading without the bigger picture.",
          "Looking for divergence in every move instead of focusing on key levels and extended trends.",
        ],
      },
      {
        heading: "When NOT to Use This",
        content: [
          "In choppy, range-bound markets where delta oscillates without meaningful trends.",
          "During news events when delta readings become erratic and unreliable.",
          "On higher timeframes where delta aggregation loses its precision and usefulness.",
          "If your platform calculates delta incorrectly - verify your tools before relying on them.",
        ],
      },
    ],
    takeaways: [
      "Delta shows net aggression: aggressive buying minus aggressive selling",
      "Price making new highs with declining delta warns of exhaustion",
      "Stacked imbalances on footprint charts reveal institutional activity",
      "Delta divergence is a warning sign, not a precise entry signal",
      "Combine delta with structure - divergence at resistance is more significant than divergence mid-trend",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Shorting every time you see bearish delta divergence will destroy your account. Divergence can persist for many bars in strong trends. Always require a structure break or other confirmation before acting on divergence signals.",
      },
      {
        type: "tip",
        content:
          "Pay special attention to delta divergence when price approaches a key level from your pre-market analysis. The combination of structure and order flow divergence is more powerful than either signal alone.",
      },
    ],
    quiz: [
      {
        id: "di-q1",
        question: "What does positive delta indicate?",
        options: [
          "Price is going up",
          "More aggressive buying than selling",
          "The market is bullish long-term",
          "Volume is increasing",
        ],
        correctIndex: 1,
      },
      {
        id: "di-q2",
        question: "What is delta divergence?",
        options: [
          "Delta and volume moving together",
          "Price making new highs while delta makes lower highs",
          "Delta spiking on news",
          "Two charts showing different data",
        ],
        correctIndex: 1,
      },
      {
        id: "di-q3",
        question: "How should you treat delta divergence signals?",
        options: [
          "As immediate entry signals",
          "As warning signs requiring confirmation",
          "As signals to exit all positions",
          "As signs to double your position",
        ],
        correctIndex: 1,
      },
    ],
  },
  "when-not-order-flow": {
    title: "When Not to Trade Order Flow",
    diagrams: ["WhenNotToTradeDiagram"],
    sections: [
      {
        heading: "What Problem This Solves",
        content: [
          "Order flow analysis is powerful but not universal - using it in the wrong conditions leads to false signals and losses.",
          "Many traders lose money by applying order flow concepts during conditions where the data is unreliable or meaningless.",
          "Knowing when NOT to use a tool is as important as knowing how to use it.",
          "This lesson protects you from over-relying on order flow in conditions where simpler approaches work better.",
        ],
      },
      {
        heading: "What Traders Are Actually Doing",
        content: [
          "During low liquidity sessions, the small orders that move price do not represent meaningful institutional activity.",
          "During major news events, order flow becomes chaotic as algorithms react and liquidity disappears briefly.",
          "In choppy, range-bound conditions, order flow signals constantly whipsaw because there is no directional conviction.",
          "Smart traders recognize these conditions and either sit out or switch to simpler price-based approaches.",
          "The best order flow traders are often not trading - they wait for conditions where their edge actually exists.",
        ],
      },
      {
        heading: "What You See on the Chart",
        content: [
          "Low liquidity: thin order books, wide spreads, erratic price jumps on small volume.",
          "News spikes: massive volume bars with large wicks, immediate reversal of moves.",
          "Chop zones: price oscillating in a tight range with no follow-through on any move.",
          "Holiday or pre-holiday sessions: reduced volume, unusual patterns as major players are absent.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Trading order flow signals in the overnight session when volume is a fraction of the regular session.",
          "Trying to read order flow during FOMC announcements or NFP releases when the data is noise.",
          "Forcing order flow analysis on choppy days when there is no directional bias to exploit.",
          "Not adjusting expectations for reduced liquidity around holidays.",
        ],
      },
      {
        heading: "When NOT to Use This",
        content: [
          "This lesson IS about when not to trade order flow, so apply it always as a filter.",
          "If you find yourself trying to trade order flow in these conditions, step back and reassess.",
          "The discipline to NOT trade is often more profitable than forcing trades in poor conditions.",
          "Your journal should track conditions as much as it tracks setups.",
        ],
      },
    ],
    takeaways: [
      "Order flow is unreliable during low liquidity sessions like overnight or pre-market",
      "Major news events make order flow chaotic and unpredictable - sit out or use tight stops",
      "Choppy, range-bound conditions produce constant false signals from order flow",
      "The best order flow traders know when NOT to trade",
      "Track market conditions in your journal to recognize when your edge disappears",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "Trading order flow signals during major economic releases like FOMC or NFP is gambling. The market moves 20+ points in seconds, order flow data lags, and you are competing against algorithms designed for these moments. Step aside.",
      },
      {
        type: "tip",
        content:
          "Create a simple checklist before each session: Is it a major news day? Is volume at normal levels? Is price trending or chopping? If two or more conditions are unfavorable, either skip order flow analysis or reduce size significantly.",
      },
    ],
    quiz: [
      {
        id: "wnof-q1",
        question: "Why is order flow unreliable during overnight sessions?",
        options: [
          "The exchanges are closed",
          "Volume is too thin to be meaningful",
          "Prices do not move",
          "Charts are not available",
        ],
        correctIndex: 1,
      },
      {
        id: "wnof-q2",
        question: "What should you do during major news events?",
        options: [
          "Double your position size for the volatility",
          "Sit out or use much tighter risk management",
          "Only trade order flow signals",
          "Ignore the news and trade normally",
        ],
        correctIndex: 1,
      },
      {
        id: "wnof-q3",
        question: "What characterizes choppy market conditions?",
        options: [
          "Strong trending moves",
          "Price oscillating without follow-through",
          "Very low volume",
          "Clear support and resistance",
        ],
        correctIndex: 1,
      },
    ],
  },
  "breakout-entries": {
    title: "Breakout Entries",
    sections: [
      {
        heading: "Overview",
        content: [
          "Most traders lose money on breakouts because they chase the first candle through a level.",
          "A valid breakout is not just price crossing a line - it requires compression, expansion, and acceptance.",
          "This lesson teaches you two breakout models that filter out false moves: Break-and-Hold and Break-Pullback-Continue.",
          "You will learn specific entry rules, stop placement logic, and when to avoid breakouts entirely.",
        ],
      },
      {
        heading: "Learning Objectives",
        content: [
          "Define what makes a breakout 'valid' using market structure language.",
          "Execute two breakout models: Break-and-Hold (acceptance) and Break-Pullback-Continue (retest).",
          "Place stops logically below structure rather than arbitrary tick distances.",
          "Identify conditions when breakouts are likely to fail.",
          "Apply a pre-trade checklist before every breakout attempt.",
        ],
      },
      {
        heading: "Concept: What Is a Valid Breakout?",
        content: [
          "A valid breakout has three phases: Compression (price coils in a tight range), Expansion (price breaks through the level with momentum), and Acceptance (price holds above/below the level).",
          "Compression signals building pressure - buyers and sellers are in equilibrium. Without compression, breakouts lack the fuel for follow-through.",
          "Expansion is the actual break - a strong candle through resistance or support, ideally with above-average volume.",
          "Acceptance is the confirmation - price must hold above the breakout level for 2-3 candles minimum. Quick re-entry into the range invalidates the trade.",
          "In ES terms: If 4520 is resistance and price breaks to 4525 but immediately falls to 4518, that is NOT acceptance. Wait for price to hold 4522+ for several candles.",
        ],
      },
      {
        heading: "Setup: Two Breakout Models",
        content: [
          "Model A - Break-and-Hold (Acceptance): Enter after the breakout candle closes AND the next candle holds above the level. Entry is at the close of the confirmation candle or a small pullback to the breakout level.",
          "Model B - Break-Pullback-Continue: Wait for breakout, then wait for price to pull back and retest the broken level as new support/resistance. Enter when price rejects off that level and shows continuation.",
          "Break-and-Hold is faster but has more false signals. Break-Pullback-Continue is slower but higher probability.",
          "Entry Checklist (5 items): 1) Is there prior compression? 2) Is volume above average on the break? 3) Is there acceptance (holding above/below)? 4) Is stop placement logical? 5) Is R:R at least 1.5:1?",
          "Pre-Trade Checklist (5 items): 1) No major news in next 30 min? 2) Not during lunch chop (11:30-1:30 ET)? 3) Volume is normal for this session? 4) Not breaking into a liquidity void? 5) Trend context supports direction?",
        ],
      },
      {
        heading: "Execution: ES Example",
        content: [
          "Scenario: ES has been consolidating between 4500-4520 for 45 minutes (compression). You are watching for a breakout above 4520.",
          "The 9:45 AM candle closes at 4524 with strong delta (+800 contracts). This is the expansion phase - your trigger.",
          "For Break-and-Hold: Wait for the next candle. It opens at 4523, dips to 4521, then closes at 4526. Price is holding above 4520 - this is acceptance. Enter long at 4526.",
          "Stop placement: Below the breakout level structure at 4518 (8 ticks below the 4520 level). Not arbitrary - based on the level that must hold.",
          "Target: Measured move equals the range width (20 pts), so target is 4540. Risk is 8 pts, reward is 14 pts = 1.75R.",
          "For Break-Pullback-Continue: After the breakout to 4524, wait for pullback. Price dips to 4521-4522, finds buyers, and bounces. Enter on the rejection candle at 4523. Stop at 4518, same target.",
        ],
      },
      {
        heading: "Risk: Stop Placement and R:R",
        content: [
          "Stop placement on breakouts must be below structure, not arbitrary ticks. The level that broke is your reference point.",
          "For long breakouts: Stop goes below the breakout level minus a buffer (2-4 ticks for ES). If 4520 broke, stop at 4516-4518.",
          "For short breakdowns: Stop goes above the breakdown level plus buffer. If 4500 broke down, stop at 4502-4504.",
          "Minimum R:R policy: Never take a breakout trade below 1.5:1 R:R. Breakouts have maybe 50-60% win rate at best - you need good R:R to be profitable.",
          "If the math does not work (target too close, stop too far), skip the trade. Not every breakout is tradeable.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Chasing the first candle: Entering the moment price crosses the level without waiting for acceptance. This is how you get trapped in false breakouts.",
          "No compression = no fuel: Trading breakouts from levels without prior compression. These have low follow-through because there is no pent-up energy.",
          "Arbitrary stops: Placing stops 10 ticks away because that feels right rather than below actual structure.",
          "Ignoring context: Taking long breakouts when the higher timeframe is in a downtrend. You are fighting the tide.",
          "Overtrading breakouts: Not every range produces a tradeable breakout. Many just expand slightly and chop. Selectivity matters.",
        ],
      },
      {
        heading: "When NOT to Trade This",
        content: [
          "Choppy ranges without clear compression: If price is sloppy and overlapping, there is no clean level to break.",
          "Lunch hours (11:30 AM - 1:30 PM ET): Volume dies, breakouts fail constantly. Wait for afternoon session.",
          "Low volume sessions: Overnight, pre-market, or holiday trading. Breakouts need volume to sustain.",
          "Breaking into a liquidity void: If there is no price history above the breakout level (gap up situation), targets are unclear and moves can reverse sharply.",
          "Major news within 30 minutes: FOMC, NFP, CPI days - breakouts before news are gambling. Wait for the dust to settle.",
          "When you have already lost 2+ breakout trades today: Stop. The market may be in chop mode. Reassess.",
        ],
      },
    ],
    takeaways: [
      "Valid breakouts require compression, expansion, and acceptance - not just price crossing a line.",
      "Two models: Break-and-Hold (faster, riskier) and Break-Pullback-Continue (slower, higher probability).",
      "Stops go below structure (the breakout level), not arbitrary tick distances.",
      "Minimum 1.5:1 R:R required. If the math does not work, skip the trade.",
      "Avoid breakouts during lunch hours, low volume, news events, and into liquidity voids.",
      "Use both entry checklist and pre-trade checklist before every breakout attempt.",
      "Most breakouts fail because traders chase - patience for acceptance is the edge.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "The most common breakout mistake is entering the instant price crosses the level. You see green, you click buy, and 30 seconds later price is back inside the range. This is not trading - it is reacting. Wait for the breakout candle to CLOSE, then watch the NEXT candle for acceptance. If price holds above the level for 2-3 candles, NOW you have something. Patience on breakouts is not optional.",
      },
      {
        type: "tip",
        content:
          "The best breakouts come from extended compression. If ES has been grinding in a 10-point range for 2+ hours with decreasing volatility (smaller candles), that is pressure building. When it finally breaks, the move tends to be explosive and sustained. Short, sloppy ranges produce short, sloppy breakouts. Look for the coil.",
      },
    ],
    quiz: [
      {
        id: "be-q1",
        question: "What are the three phases of a valid breakout?",
        options: [
          "Entry, Stop, Target",
          "Compression, Expansion, Acceptance",
          "Support, Resistance, Breakout",
          "Volume, Price, Time",
        ],
        correctIndex: 1,
      },
      {
        id: "be-q2",
        question: "Where should you place your stop on a long breakout above 4520?",
        options: [
          "10 ticks below entry",
          "Below the breakout level structure (4516-4518)",
          "At the previous day low",
          "Wherever your risk tolerance allows",
        ],
        correctIndex: 1,
      },
      {
        id: "be-q3",
        question: "Which condition makes breakout trading unreliable?",
        options: [
          "High volume expansion",
          "Extended compression before the move",
          "Lunch hour low liquidity",
          "Price holding above the breakout level",
        ],
        correctIndex: 2,
      },
    ],
    diagrams: ["BreakoutDiagram"],
  },
  "pullback-entries": {
    title: "Pullback Entries",
    sections: [
      {
        heading: "Overview",
        content: [
          "Pullback trading is joining a trend after an expansion move - buying the dip in an uptrend or selling the rally in a downtrend.",
          "Unlike breakouts, pullbacks work WITH momentum rather than anticipating it. The trend has already shown its hand.",
          "This lesson covers two pullback models, quality assessment rules, and precise entry mechanics without indicator dependency.",
          "You will learn when pullbacks are high-probability and when they are traps.",
        ],
      },
      {
        heading: "Learning Objectives",
        content: [
          "Understand pullbacks as trend continuation opportunities, not reversal bets.",
          "Execute two pullback models: Shallow Pullback (trend strength) and Deep Pullback (S/R flip).",
          "Assess pullback quality using depth, speed, and overlap criteria.",
          "Enter pullbacks at structure reclaim or swing failure without requiring indicators.",
          "Identify when pullbacks are traps rather than opportunities.",
        ],
      },
      {
        heading: "Concept: What Is a Pullback?",
        content: [
          "A pullback is a temporary retracement against the prevailing trend. In an uptrend, price dips before continuing higher. In a downtrend, price bounces before continuing lower.",
          "Pullbacks occur because traders take profits and counter-trend players try to fade the move. A healthy pullback shows the trend is intact but needs to breathe.",
          "Key insight: You are not predicting the trend - it has already shown you direction. You are waiting for a better entry price.",
          "The impulse leg (the strong move) shows trend direction. The pullback (the weak move) offers your entry. The continuation (the next impulse) is your profit.",
          "Example: ES rallies from 4500 to 4540 (impulse), then pulls back to 4520 (pullback). If the uptrend is intact, price will continue toward 4560+ (continuation).",
        ],
      },
      {
        heading: "Setup: Two Pullback Models",
        content: [
          "Model A - Shallow Pullback (38-50% retracement): Price retraces less than half of the impulse leg. This signals strong trend and aggressive buyers/sellers. Entry is on the first sign of trend resumption.",
          "Model B - Deep Pullback (61-78% retracement): Price retraces into a prior support/resistance level. This is a support/resistance flip setup. Entry is on the bounce/rejection from that level.",
          "Shallow pullbacks are higher probability but give less room for stops. Deep pullbacks offer better R:R but may indicate trend weakness.",
          "Pullback Quality Assessment: Depth (how far), Speed (how fast), Overlap (how clean). Ideal: Shallow depth, slow speed, minimal overlap with impulse candles.",
          "A fast, deep, overlapping pullback often signals trend exhaustion rather than healthy retracement. Be cautious.",
        ],
      },
      {
        heading: "Execution: Entry Mechanics",
        content: [
          "Entry Option 1 - Structure Reclaim: Wait for price to pull back, then watch for a candle that closes back above a minor structure level (prior swing low in uptrend). This is your trigger.",
          "Entry Option 2 - Swing Failure: Price makes a lower low in the pullback but immediately reverses. The failure to continue lower signals trapped sellers. Enter on the reversal candle.",
          "Entry Option 3 - Confirmation Candle: After pullback reaches your zone, wait for a strong candle in the trend direction (engulfing, strong close). Enter at close or on small retrace.",
          "ES Example: Price rallied 4500 → 4540. Pullback to 4518 (55% retrace). 4520 was prior resistance, now should be support (S/R flip). Price dips to 4517, then a strong green candle closes at 4524. Enter 4524, stop 4514, target 4550.",
          "No indicators required. You are reading price structure: prior levels, swing points, and candle behavior.",
        ],
      },
      {
        heading: "Risk: Stop Placement and Position Management",
        content: [
          "Stop placement: Below the pullback low (for longs) or above the pullback high (for shorts). The pullback low is your invalidation point.",
          "Buffer your stop: Do not put it exactly at the low. Add 2-4 ticks buffer for ES. If pullback low is 4517, stop at 4514-4515.",
          "Partials vs full exits: Consider taking 50% off at 1R and letting the rest run with a trailing stop below swing lows.",
          "Do NOT move stop to breakeven too early. Give the trade room to work. Only move stop after price has made a clear new swing in your direction.",
          "If price makes a new higher low (in uptrend) after your entry, you can trail stop below that new higher low.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "Catching falling knives: Entering pullbacks in the middle of the move rather than waiting for signs of reversal. Pullbacks can extend further than expected.",
          "Ignoring trend quality: Taking pullback entries in weak, sloppy trends. If the impulse leg was weak, the pullback is not worth trading.",
          "Entering on depth alone: Just because price pulled back 50% does not mean it will bounce. You need a trigger (reclaim, rejection, confirmation candle).",
          "Fighting higher timeframe: Taking long pullbacks when the daily chart is in a clear downtrend. The higher timeframe usually wins.",
          "Moving stops too early: Price wiggles after entry and you panic-move your stop to breakeven. Then get stopped out right before the move happens.",
        ],
      },
      {
        heading: "When NOT to Trade This",
        content: [
          "Weak or unclear trend: If you cannot clearly identify an impulse leg, there is no trend to join. Skip it.",
          "Sloppy, overlapping pullback: If the pullback is as volatile as the impulse, the trend may be over. Clean pullbacks are smaller and slower than impulses.",
          "Pullback during macro news: FOMC, NFP, CPI - pullbacks before news are unreliable. Wait for after.",
          "Pullback into higher timeframe resistance/support: If the pullback entry puts you long right into daily resistance, you are fighting a wall. Check the bigger picture.",
          "Third or fourth pullback in a move: Trends exhaust. The first and second pullbacks are usually best. By the third or fourth, the move is often tired.",
          "When you are trying to call the bottom/top: Pullback trading is about joining trends, not picking reversals. If you are hoping this is THE bottom, you are doing it wrong.",
        ],
      },
    ],
    takeaways: [
      "Pullbacks let you join a trend at a better price after the direction is established.",
      "Two models: Shallow (38-50%, strong trend) and Deep (61-78%, S/R flip).",
      "Assess quality: ideal pullback is shallow, slow, and has minimal overlap.",
      "Enter on structure reclaim, swing failure, or confirmation candle - no indicators needed.",
      "Stop goes below the pullback low with a buffer. Do not move to breakeven too early.",
      "Skip pullbacks in weak trends, during news, into HTF walls, or on the 3rd+ pullback.",
      "The best pullbacks feel boring - a slow grind against the trend before continuation.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "The biggest pullback mistake is entering in the middle of the move. You see price pulling back and think 'discount!' so you buy. But the pullback extends another 20 ticks and stops you out. Then it reverses. You were right on direction but wrong on timing. Always wait for a trigger: a reclaim, a rejection candle, something that says the pullback is DONE. Patience is the difference between catching the move and catching a falling knife.",
      },
      {
        type: "tip",
        content:
          "The best pullbacks are boring. They grind slowly against the trend with small candles and decreasing volume. This shows sellers (in an uptrend) are exhausted and not aggressive. When you see a fast, volatile pullback with big red candles, that is not profit-taking - that is real selling. Be very selective with those. The slow grind pullback into a prior S/R level is your bread and butter setup.",
      },
    ],
    quiz: [
      {
        id: "pe-q1",
        question: "What characterizes a healthy pullback in an uptrend?",
        options: [
          "Fast, deep, high volume",
          "Slow, shallow, decreasing volume",
          "Equal size to the impulse leg",
          "Breaking below the prior swing low",
        ],
        correctIndex: 1,
      },
      {
        id: "pe-q2",
        question: "What is the key difference between shallow and deep pullback models?",
        options: [
          "Shallow is for beginners, deep is for experts",
          "Shallow retraces 38-50% (trend strength), deep retraces 61-78% (S/R flip)",
          "Shallow uses indicators, deep uses price action",
          "Shallow is for longs, deep is for shorts",
        ],
        correctIndex: 1,
      },
      {
        id: "pe-q3",
        question: "When should you NOT trade a pullback entry?",
        options: [
          "When the impulse leg was strong and clear",
          "When price reaches a prior support/resistance flip level",
          "When it is the third or fourth pullback in an extended move",
          "When the pullback is slow and orderly",
        ],
        correctIndex: 2,
      },
    ],
    diagrams: ["PullbackDiagram"],
  },
  "trade-management": {
    title: "Trade Management",
    sections: [
      {
        heading: "Overview",
        content: [
          "Trade management is everything that happens between entry and exit - and it is where most traders lose their edge.",
          "A good entry with poor management becomes a losing trade. A mediocre entry with excellent management can still be profitable.",
          "This lesson teaches you a systematic approach to exits, partials, trailing stops, and emotional control mid-trade.",
          "You will also learn what NOT to do - the management mistakes that turn winners into losers.",
        ],
      },
      {
        heading: "Learning Objectives",
        content: [
          "Implement a risk-first, plan-first trade management system.",
          "Execute three exit styles: fixed targets, scaling/partials, and structure-based trailing.",
          "Apply a simple partial-taking rule that locks in profit while allowing runners.",
          "Manage emotions during trade wiggles without panic-adjusting.",
          "Document trades immediately in a post-trade review loop.",
        ],
      },
      {
        heading: "Concept: Risk-First, Plan-First",
        content: [
          "Before entering any trade, you must know: Where is my stop? Where is my target? How will I manage partials? Write it down before clicking.",
          "Risk-first means your stop is non-negotiable. It is set based on structure and your maximum dollar risk. You do not move it wider.",
          "Plan-first means you have a management script before the trade. 'I will take 50% at 1R, move stop to breakeven, and trail the rest.' No improvising.",
          "The market will try to make you deviate from your plan. Price wiggles, you feel fear, you want to do something. Having a pre-written plan removes emotion from decisions.",
          "Your trade plan is your contract with yourself. Breaking it is the fastest way to destroy consistency.",
        ],
      },
      {
        heading: "Setup: Three Exit Styles",
        content: [
          "Style 1 - Fixed Targets: Set a target at a specific level (prior high, measured move) and exit 100% there. Simple, clear, no decisions needed. Best for beginners.",
          "Style 2 - Scaling/Partials: Take partial profit at 1R (or a structure level), then manage the rest. Example: 50% off at 1R, remaining 50% trails to 2-3R or gets stopped at breakeven.",
          "Style 3 - Trailing Stop (Structure-Based): No fixed target. Trail your stop below each new swing low (longs) or above each new swing high (shorts). Let the market tell you when the move is done.",
          "The partial system (Style 2) is recommended for most traders. It locks profit, reduces stress, and still captures runners.",
          "Key rule for partials: 50% off at 1R, move stop to breakeven (or small profit) on remainder. This makes the trade 'risk-free' while keeping upside.",
        ],
      },
      {
        heading: "Execution: The Management Sequence",
        content: [
          "Step 1 - Entry Executed: Immediately set your stop loss at the pre-planned level. Do not negotiate with yourself.",
          "Step 2 - Price Moves to 1R: Take off 50% of position. This is profit in the bank. Set alert for remaining position.",
          "Step 3 - Move Stop: After partial, move stop to breakeven (entry price) or 2-3 ticks in profit. Worst case now is a small win or scratch.",
          "Step 4 - Trail the Runner: As price makes new swings in your direction, trail stop below each new swing low (longs). Give it room - do not trail too tight.",
          "Step 5 - Final Exit: Either hit your ultimate target, get stopped out on trail, or exit at end of session. Document the trade.",
          "ES Example: Long entry 4500, stop 4492 (8 pts = 1R). Price hits 4508 (+1R) → take 50% off, move stop to 4500. Price continues to 4520 → trail stop to 4512. Price reverses, stopped at 4512. Result: 50% at +8 pts, 50% at +12 pts.",
        ],
      },
      {
        heading: "Risk: What NOT to Do",
        content: [
          "Do NOT move your stop randomly: If your plan says stop at 4492, keep it at 4492 until the trade hits 1R. Moving it because price is wiggling is fear-based, not logic-based.",
          "Do NOT widen your stop: 'I will give it more room' is how small losses become big losses. Your initial stop was based on structure. Respect it.",
          "Do NOT revenge re-entry: You got stopped out and price immediately moves in your direction. Do NOT just jump back in. That is revenge trading. Reassess, find a new setup if there is one.",
          "Do NOT move stop to breakeven too early: Wait until price has clearly moved in your favor (1R minimum). Moving stop too early gets you stopped on normal wiggles.",
          "Do NOT average down: Adding to a losing position is how traders blow up. If your stop is hit, you were wrong. Accept it.",
        ],
      },
      {
        heading: "Common Mistakes",
        content: [
          "No plan before entry: Deciding what to do while in the trade. This leads to emotional, inconsistent decisions.",
          "Closing winners too early: Price moves 5 ticks in your favor and you grab profit because you are scared of giving it back. This destroys R:R.",
          "Holding losers too long: The opposite - you give losers 'room to work' but cut winners short. This is how you lose slowly.",
          "Trail too tight: Moving your trailing stop after every tick. You get stopped on normal retracements that would have continued.",
          "Trail too loose: Never trailing at all and watching a 3R winner turn into a 0.5R winner. Use structure, not hope.",
        ],
      },
      {
        heading: "Managing Emotions Mid-Trade",
        content: [
          "The trade is on. Price is wiggling. You feel the urge to DO something. Here is what to do instead:",
          "Step 1 - Breathe: Seriously. Take 3 slow breaths. Your body is in fight-or-flight mode. Calm the nervous system first.",
          "Step 2 - Check your plan: Read what you wrote before entry. Does price action invalidate your thesis? If no, do nothing.",
          "Step 3 - Zoom out: Switch to a higher timeframe. The wiggle on 1-minute is often invisible on 15-minute. Perspective matters.",
          "Step 4 - Walk away: If you cannot stop watching, leave the screen. Set alerts for your key levels. The trade does not need you to stare at it.",
          "Rule: If your stop is not hit and your plan is intact, DO NOTHING. Most mid-trade mistakes come from doing something when nothing was required.",
        ],
      },
      {
        heading: "Post-Trade Review Loop",
        content: [
          "Immediately after closing a trade (win or lose), document it. Not at the end of the day - right now, while it is fresh.",
          "What to record: Entry reason, entry price, stop level, target level, actual exit, P&L, screenshot of chart at entry and exit.",
          "Questions to answer: Did I follow my plan? What grade would I give execution (A-F)? What would I do differently?",
          "The goal is pattern recognition. After 20-30 documented trades, you will see your tendencies: where you deviate, where you excel.",
          "A trade journal is not about tracking P&L - it is about tracking behavior. The P&L is a result; the behavior is the cause.",
        ],
      },
      {
        heading: "When NOT to Trail",
        content: [
          "Choppy conditions: If price is oscillating without clear direction, trailing gets you whipsawed. Use fixed targets or exit at resistance.",
          "Low liquidity: Overnight or pre-market, spreads widen and stops can get run. Use wider stops or avoid trailing entirely.",
          "Mean-reverting markets: If the market is range-bound and mean-reverting, trailing makes no sense. Price will pull back to the middle. Take profits at range edges.",
          "After news: Post-FOMC, post-NFP - the market is chaotic. Trailing in chaos is gambling. Take what the market gives and step away.",
          "When you are already at a solid target: If you are at 2R and your original target was 2R, take it. Do not get greedy and trail for more unless there is a clear reason.",
        ],
      },
    ],
    takeaways: [
      "Trade management is where most traders destroy their edge - even with good entries.",
      "Risk-first, plan-first: Know your stop, target, and partial plan BEFORE entering.",
      "Three exit styles: Fixed targets (simple), partials (recommended), trailing (advanced).",
      "Partial rule: 50% off at 1R, move stop to breakeven, trail the runner below structure.",
      "Do NOT move stops randomly, widen stops, revenge re-enter, or average down.",
      "When price wiggles: Breathe, check plan, zoom out, walk away. Do nothing if plan is intact.",
      "Document every trade immediately in a post-trade review loop. Track behavior, not just P&L.",
    ],
    callouts: [
      {
        type: "mistake",
        content:
          "The deadliest trade management mistake is moving your stop wider. The trade goes against you, and instead of accepting the loss, you think 'I will give it more room.' Now your 1R loss is a 2R loss. And if it keeps going? 3R, 4R. This is how traders blow up. Your initial stop was set based on structure and logic. If that level is hit, you were wrong - period. Accept it, learn from it, move on. The small loss you take now saves you from the catastrophic loss you take later.",
      },
      {
        type: "tip",
        content:
          "The partial system (50% at 1R, trail the rest) solves most management problems. At 1R, you have locked in profit and the trade is now 'free' from a risk perspective. Psychologically, this changes everything. You can hold the runner without fear because you have already won. The worst case is a small win. This simple rule has saved more traders than any indicator ever invented.",
      },
    ],
    quiz: [
      {
        id: "tm-q1",
        question: "When should you move your stop to breakeven?",
        options: [
          "Immediately after entry",
          "After price moves 5 ticks in your favor",
          "After taking partial profit at 1R",
          "Never - always hold original stop",
        ],
        correctIndex: 2,
      },
      {
        id: "tm-q2",
        question: "What is the biggest trade management mistake?",
        options: [
          "Taking profits too early",
          "Widening your stop as the trade goes against you",
          "Using a trailing stop",
          "Trading with a fixed target",
        ],
        correctIndex: 1,
      },
      {
        id: "tm-q3",
        question: "When should you NOT trail your stop?",
        options: [
          "In a strong trending market",
          "When price is making new highs/lows",
          "In choppy, mean-reverting conditions",
          "After taking a partial profit",
        ],
        correctIndex: 2,
      },
    ],
    diagrams: ["TradeManagementDiagram"],
  },
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons[slug]
}
