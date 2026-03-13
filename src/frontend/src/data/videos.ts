export type VideoCategory = "beginner" | "intermediate" | "pro";

export interface Video {
  id: string;
  title: string;
  channel: string;
  category: VideoCategory;
  description?: string;
}

export const videos: Video[] = [
  // ---- BEGINNER ----
  {
    id: "ZZ5LpwO-An4",
    title: "Stock Market for Complete Beginners",
    channel: "Andrei Jikh",
    category: "beginner",
    description: "What is the stock market and how does it work",
  },
  {
    id: "p7HKvqRI_Bo",
    title: "How to Invest in Stocks for Beginners",
    channel: "ClearValue Tax",
    category: "beginner",
    description: "Step-by-step guide to buying your first stock",
  },
  {
    id: "cdiD-9MMpb0",
    title: "How to Read Candlestick Charts",
    channel: "Chart School",
    category: "beginner",
    description: "Understanding candlestick patterns from scratch",
  },
  {
    id: "v-rbomo-Xqg",
    title: "Risk Management Basics",
    channel: "Trade Safe",
    category: "beginner",
    description: "Protect your capital with these essential rules",
  },
  {
    id: "tgbNymZ7vqY",
    title: "Understanding Support & Resistance",
    channel: "TA Basics",
    category: "beginner",
    description: "The foundation of technical analysis",
  },
  {
    id: "JGwWNGJdvx8",
    title: "Moving Averages Explained Simply",
    channel: "Indicator Hub",
    category: "beginner",
    description: "How to use moving averages to spot trends",
  },

  // ---- INTERMEDIATE ----
  {
    id: "eVTXPUF4Oz4",
    title: "Technical Analysis Intermediate Course",
    channel: "Trading with Tom",
    category: "intermediate",
    description: "Chart patterns, indicators, and setups",
  },
  {
    id: "GNgT4JpREqo",
    title: "Swing Trading Strategy Guide",
    channel: "Market Masters",
    category: "intermediate",
    description: "Hold positions for days and weeks for bigger moves",
  },
  {
    id: "YwTKNXMIIaI",
    title: "How to Read Stock Charts Like a Pro",
    channel: "Swing Trader",
    category: "intermediate",
    description: "Volume, price action, and pattern recognition",
  },
  {
    id: "NXxFlMmQfIg",
    title: "Position Sizing & Portfolio Management",
    channel: "Scalp Master",
    category: "intermediate",
    description: "Allocate capital wisely across multiple trades",
  },
  {
    id: "fJ9rUzIMcZQ",
    title: "Fundamental Analysis: Reading Earnings Reports",
    channel: "Value Invest",
    category: "intermediate",
    description: "Understand financials to pick winning stocks",
  },
  {
    id: "3fumBcKC6RE",
    title: "Day Trading vs Swing Trading vs Investing",
    channel: "Day Trade King",
    category: "intermediate",
    description: "Find the trading style that suits you",
  },

  // ---- PRO ----
  {
    id: "M7lc1UVf-VE",
    title: "Options Trading: Full Masterclass",
    channel: "Options Pro",
    category: "pro",
    description: "Calls, puts, spreads, and advanced strategies",
  },
  {
    id: "9bZkp7q19f0",
    title: "Algorithmic Trading & Automation",
    channel: "CryptoAlpha",
    category: "pro",
    description: "Build trading bots and automate your strategy",
  },
  {
    id: "2vjPBrBU-TM",
    title: "Advanced Risk-Reward & Trade Management",
    channel: "Elite Trader",
    category: "pro",
    description: "Scale in, scale out, and manage winners",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Institutional Order Flow & Market Structure",
    channel: "Trading with Tom",
    category: "pro",
    description: "Trade like institutions using order flow",
  },
  {
    id: "ystkVXXmEoY",
    title: "Short Selling Strategies & Risk Control",
    channel: "Market Masters",
    category: "pro",
    description: "Profit from falling stocks safely",
  },
  {
    id: "wIBSCGlcMSU",
    title: "Building a Trading Business & Tax Strategy",
    channel: "Elite Trader",
    category: "pro",
    description: "Treat trading as a professional business",
  },
];

export const beginnerVideos = videos.filter((v) => v.category === "beginner");
export const intermediateVideos = videos.filter(
  (v) => v.category === "intermediate",
);
export const proVideos = videos.filter((v) => v.category === "pro");
