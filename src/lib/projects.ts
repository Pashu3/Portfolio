export type Decision = { n: string; title: string; body: string };
export type Tradeoff = { cost: string; detail: string };
export type Failure = { title: string; body: string };
export type Feature = { title: string; body: string };
export type SDK = {
  name: string;
  install: string;
  url: string;
  badge?: string; // e.g. "drop-in"
};
export type ExternalLink = { label: string; href: string };

export type Project = {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  year: string;
  liveUrl?: string;

  // For the work-grid card on the home page
  card: {
    problem: string;
    built: string;
    tech: string[];
  };

  // Case study sections
  meta: {
    role: string;
    period: string;
    status: string;
  };
  problem: string;
  architecture?: { text: string; diagram?: string };
  features?: Feature[];
  decisions: Decision[];
  tradeoffs: Tradeoff[];
  failures: Failure[];
  stack: string[];
  sdks?: SDK[];
  externalLinks?: ExternalLink[];
  next?: string;
};

const ROUTEPLEX_DIAGRAM = `
   ┌─────────────┐                ┌────────────────────────┐
   │             │   POST /v1/    │       gateway          │
   │  app        │   chat,        │  ┌──────────────────┐  │
   │  any sdk    │ ─────────────► │  │  router          │  │
   │             │   completions  │  │  ├ health check  │  │
   └─────────────┘                │  │  ├ cost / speed  │  │
                                  │  │  └ failover      │  │
                                  │  └──────────────────┘  │
                                  │           │            │
                                  │           ▼            │
                                  │  ┌──────────────────┐  │
                                  │  │  providers       │  │
                                  │  │  ├ openai        │  │
                                  │  │  ├ anthropic     │  │
                                  │  │  ├ gemini        │  │
                                  │  │  └ +27 more      │  │
                                  │  └──────────────────┘  │
                                  │           │            │
                                  │           ▼            │
                                  │  ┌──────────────────┐  │
                                  │  │  ledger          │  │
                                  │  │  ├ logs          │  │
                                  │  │  └ billing/caps  │  │
                                  │  └──────────────────┘  │
                                  └────────────────────────┘
`;

const CLARITYHUB_DIAGRAM = `
   ┌─────────────┐    upload     ┌────────────────────────┐
   │             │   csv (any   │       fastapi backend  │
   │   browser   │   shape)     │  ┌──────────────────┐  │
   │   client    │ ────────────►│  │  ingest          │  │
   │             │              │  │  ├ parse/validate│  │
   └─────────────┘              │  │  ├ store (s3)    │  │
                                │  │  └ enqueue job   │  │
                                │  └──────────────────┘  │
                                │           │            │
                                │           ▼            │
                                │  ┌──────────────────┐  │
                                │  │  llm worker      │  │
                                │  │  ├ summarize     │  │
                                │  │  └ persist       │  │
                                │  └──────────────────┘  │
                                │           │            │
                                │           ▼            │
                                │   postgres · stripe    │
                                └────────────────────────┘
`;

export const PROJECTS: Project[] = [
  {
    slug: "routeplex",
    num: "01",
    title: "RoutePlex",
    tagline: "One API on top of every model that matters.",
    year: "2025",
    liveUrl: "https://routeplex.com",
    card: {
      problem: "Model providers fail differently.",
      built:
        "An AI gateway that handles routing, fallback, and cost predictability across 30+ models — exposed through a single OpenAI-compatible API.",
      tech: ["Next.js", "TypeScript", "FastAPI", "Postgres", "Redis"],
    },
    meta: {
      role: "solo · design + build",
      period: "2025 — now",
      status: "live",
    },
    problem:
      "Every model provider has a different SDK, different error semantics, and different pricing. Switching providers means rewriting integration code. Outages mean rewriting it again under pressure. There was no thin layer that let an app stay code-stable while routing decisions and the provider mix changed underneath.",
    architecture: {
      text: "One OpenAI-compatible endpoint sits between the app and the providers. The router picks per-request based on health, cost, and quality. The ledger keeps everything observable.",
      diagram: ROUTEPLEX_DIAGRAM,
    },
    features: [
      {
        title: "Smart routing",
        body: "Analyzes the prompt and picks the best model. Cost, speed, quality, or balanced — pick the strategy or let it auto.",
      },
      {
        title: "Automatic failover",
        body: "If a provider returns 5xx or stalls, RoutePlex silently retries with the next-best model. Streaming and tool calls included.",
      },
      {
        title: "Web-augmented AI",
        body: "Prompts are auto-analyzed for search intent and URLs. Real-time web results and page content are fetched and injected into context.",
      },
      {
        title: "Built-in safety",
        body: "Three-layer moderation pipeline: pattern detection, AI classification, and URL blocklist. On by default, off behind a flag.",
      },
      {
        title: "Cost governance",
        body: "Real-time tracking with micro-cent precision. Daily spending caps and budget alerts. No surprise invoices.",
      },
      {
        title: "Real-time analytics",
        body: "Live dashboards for requests, tokens, latency, and error rates. Drill into a single trace; export the rest.",
      },
    ],
    decisions: [
      {
        n: "01",
        title: "OpenAI-compatible API. Not a proprietary one.",
        body: "Every alternative I considered traded migration cost for design purity. The bet here is the opposite: zero migration. Swap your base URL, you're done. Adoption ceiling matters more than schema elegance.",
      },
      {
        n: "02",
        title: "Health checks are in-band, not background.",
        body: "A provider's 'I'm up' status from five seconds ago is meaningless when this request fails. Routing decisions are made per-request from the most recent observed signal — failures are first-class data, not noise to filter out.",
      },
      {
        n: "03",
        title: "Failover replays in-flight tool calls.",
        body: "Silent failover that drops a tool result is worse than a clean error. Replaying costs a round-trip. Dropping costs trust. The default is replay; opt out per-route if you really need it.",
      },
      {
        n: "04",
        title: "Cost data is real-time, not nightly.",
        body: "Budget caps that only kick in tomorrow morning are not budget caps. Per-request accounting on the hot path, async aggregation off it. The Postgres write load is a real cost — paying it was the right call.",
      },
      {
        n: "05",
        title: "Thin schema. No provider quirks baked in.",
        body: "Every 'smart' abstraction I drafted ended up tying users to one provider's behavior. The current layer is intentionally thin so providers can be added or dropped without a schema migration.",
      },
    ],
    tradeoffs: [
      {
        cost: "an extra hop",
        detail:
          "~6–8ms p50 latency added on top of the provider's own. In return: zero downtime when a single provider goes hard-down.",
      },
      {
        cost: "streaming complexity",
        detail:
          "SSE through a proxy is the kind of thing that 'just works' in dev and breaks in prod. There's more code on the gateway side to keep the upstream shape boring.",
      },
      {
        cost: "constant write load",
        detail:
          "Real-time accounting means a small but constant Postgres write per request. Worth it — billing surprises are worse than a slightly hotter DB.",
      },
    ],
    failures: [
      {
        title: "Tried failover at the SDK layer first.",
        body: "The Python SDK had retry/failover baked in. After watching three different apps reimplement the same logic at the call site, I rewrote it as a server-side gateway. Same behavior, one place to maintain it.",
      },
      {
        title: "First routing strategy was too clever.",
        body: "'Cheapest provider that meets a quality threshold.' Sounded great. In practice, quality thresholds drift and 'cheapest' rotates faster than any cache can keep up with. Switched to a moving-window weighted score — boring, predictable, easier to reason about.",
      },
      {
        title: "Web-augmented results: default-on was wrong.",
        body: "Live search injection looked great in demos. Most apps wanted predictability over occasional better answers. Default flipped to off; available behind one flag for the apps that actually want it.",
      },
    ],
    stack: ["TypeScript", "Node", "FastAPI", "Python", "PostgreSQL", "Redis", "Edge runtime", "Next.js"],
    sdks: [
      {
        name: "Python",
        install: "pip install routeplex",
        url: "https://pypi.org/project/routeplex/",
      },
      {
        name: "Node.js",
        install: "npm install @routeplex/node",
        url: "https://www.npmjs.com/package/@routeplex/node",
      },
      {
        name: "OpenAI SDK",
        install: "swap your base URL — no code change",
        url: "https://routeplex.com/docs/quick-start",
        badge: "drop-in",
      },
    ],
    externalLinks: [
      { label: "docs", href: "https://routeplex.com/docs" },
      { label: "api reference", href: "https://routeplex.com/api-reference" },
      { label: "playground", href: "https://routeplex.com/playground" },
      {
        label: "examples on github",
        href: "https://github.com/routeplex/routeplex-examples",
      },
    ],
    next: "Per-tenant routing policies. Better observability around long-tail provider failures. A small CLI for replaying yesterday's traffic against a new strategy before shipping it.",
  },

  {
    slug: "clarityhub",
    num: "02",
    title: "ClarityHub",
    tagline: "Plain-English answers from messy spreadsheets.",
    year: "Mar 2025",
    card: {
      problem: "People sit on CSVs they don't have time to read.",
      built:
        "An AI SaaS that turns uploaded CSVs into plain-English insights. Freemium with Stripe billing, OAuth, admin dashboards, FastAPI backend.",
      tech: ["Next.js", "TypeScript", "FastAPI", "Stripe", "PostgreSQL"],
    },
    meta: {
      role: "solo · full-stack",
      period: "Q1 2025",
      status: "complete",
    },
    problem:
      "Most teams sit on CSVs they never get around to reading. The data exists; the bandwidth to interpret it doesn't. The brief was simple: upload a sheet, get an actually useful summary back, without first becoming a data analyst.",
    architecture: {
      text: "Browser uploads through a Next.js app. The FastAPI backend parses, stores, and queues an LLM job. A worker writes results back to Postgres. Stripe handles billing on the side; everything else stays straightforward.",
      diagram: CLARITYHUB_DIAGRAM,
    },
    decisions: [
      {
        n: "01",
        title: "FastAPI for the backend, not Django.",
        body: "Django brings opinions I didn't need for an API-first product. FastAPI's Pydantic models double as the contract with the frontend, and the dev loop is faster when there's no template layer to fight.",
      },
      {
        n: "02",
        title: "A simple Postgres-backed job queue, not Celery.",
        body: "Three workers, a `jobs` table, `SKIP LOCKED` for picking. Fewer moving parts, easier to reason about, no Redis Sentinel pages at 2am. Celery is the right answer at a different scale; not this one.",
      },
      {
        n: "03",
        title: "Stripe webhooks idempotent from day one.",
        body: "Every webhook handler keys on Stripe's `event.id`. Duplicate deliveries become no-ops. Learned this the hard way (see failures) — never again.",
      },
      {
        n: "04",
        title: "OAuth and magic links, both.",
        body: "OAuth removes friction for new users. Magic links are the fallback for everyone whose Google account is at a domain they no longer use. Picking one was wrong; offering both costs almost nothing.",
      },
      {
        n: "05",
        title: "Object storage past 5MB.",
        body: "Started with CSV blobs in Postgres. Worked fine until a customer uploaded a 40MB file and the backup story got loud. Moved file bytes to S3, kept metadata in Postgres.",
      },
    ],
    tradeoffs: [
      {
        cost: "unpredictable response time",
        detail:
          "LLM calls take whatever they take. The UI compensates with aggressive progress states and always-visible cancel buttons.",
      },
      {
        cost: "free tier costs real money",
        detail:
          "Tight rate limits on the free plan. Hard cap on file size. Honest about the cost story rather than burning through credits.",
      },
      {
        cost: "no 'build your own dashboard'",
        detail:
          "Users wanted answers, not graphs. Skipping a configurable dashboard saved months. The two charts that ship are the two anyone actually used.",
      },
    ],
    failures: [
      {
        title: "Assumed Stripe webhooks fire once.",
        body: "They don't. Network blips, retries, the occasional outage. A duplicate-charge incident in week three rewrote my mental model. Idempotency keys are now a habit, not a feature.",
      },
      {
        title: "The first prompt was 3000 tokens.",
        body: "It was 'thorough.' It also produced worse output than an 800-token version. Tightened the system prompt, added small examples, results jumped. Bigger prompts are not better prompts.",
      },
      {
        title: "Skipped a 'cancel job' button at first.",
        body: "Long-running jobs that users couldn't cancel piled up costs and frustration in equal measure. Added cancel + refund-on-cancel. Should have been there on day one.",
      },
    ],
    stack: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Stripe", "OAuth", "S3", "Tailwind"],
    next: "Open to picking it back up if the right team wants a starting point. Otherwise the codebase stays tidy, the lessons live in everything I've built since.",
  },

  {
    slug: "ecommerce-dashboard",
    num: "03",
    title: "E-commerce Dashboard",
    tagline: "Real-time clarity for shops that were flying blind.",
    year: "Jan 2025",
    card: {
      problem: "Online retailers were flying blind across orders, stock, and sales.",
      built:
        "An admin dashboard with real-time analytics, inventory management, and order processing. Charts that don't lag at scale.",
      tech: ["React", "Redux", "D3.js", "Node"],
    },
    meta: {
      role: "lead engineer · 2-person team",
      period: "Late 2024 — early 2025",
      status: "shipped",
    },
    problem:
      "The client was running three separate systems for orders, inventory, and analytics. Every decision required cross-referencing dashboards. Most decisions didn't get made on time. The brief: one place to look, fast enough to use during a busy hour, honest about the data behind it.",
    decisions: [
      {
        n: "01",
        title: "Redux Toolkit for client state.",
        body: "The data shape was genuinely deep — orders related to line items related to inventory related to suppliers — and the team needed something predictable. RTK Query handled the server cache; the boilerplate paid for itself the first time we needed time-travel debugging.",
      },
      {
        n: "02",
        title: "D3, not a pre-built chart library.",
        body: "Charts had product-specific requirements: overlay sales periods, annotate stockouts, drill into a single SKU's history. Off-the-shelf libraries fight you on every one of those. D3 is more rope, but the rope was the point.",
      },
      {
        n: "03",
        title: "Server-driven pagination from day one.",
        body: "The 'load more' infinite-scroll for orders looked great in demos. It also melted the database the first time a real customer with 60,000 orders opened the page. Pagination, indexes, sane defaults — boring, fast, scales.",
      },
      {
        n: "04",
        title: "Soft-deletes for orders.",
        body: "The customer's accounting team needed an audit trail. Hard deletes would have felt cleaner; they would also have lost data the business legally couldn't lose. Soft-deleted rows, indexed `deleted_at`, scoped queries by default.",
      },
    ],
    tradeoffs: [
      {
        cost: "D3 learning curve",
        detail:
          "Shipped slower in week one, faster from week three. The chart code is now small, custom, and easy to extend. Worth it.",
      },
      {
        cost: "real-time over websocket",
        detail:
          "More infrastructure to babysit than polling. Justified for the inventory tab specifically — knowing about a sold-out SKU 30 seconds late has a real cost.",
      },
      {
        cost: "redux boilerplate",
        detail:
          "Real lines of code. Accepted because the data model genuinely earned them; would have used Zustand or Jotai for a flatter shape.",
      },
    ],
    failures: [
      {
        title: "Live-updated the chart on every event.",
        body: "Re-renders killed mobile. Throttled to 1-second windows; the chart still feels live, the laptop fans calm down. A good lesson on 'real-time' as a UX promise rather than a literal one.",
      },
      {
        title: "Filter UX let users build queries that timed out the DB.",
        body: "Six filter chips combined into a query nobody had imagined. Added a complexity budget client-side, with a quiet hint when a user was approaching it. Better than either silent timeouts or arbitrary limits.",
      },
      {
        title: "Built a 'settings' tab nobody opened.",
        body: "It existed because a stakeholder asked for it. Killed it in v2 once analytics confirmed zero opens in two months. Removing features is a feature.",
      },
    ],
    stack: ["React", "Redux Toolkit", "D3.js", "Node", "PostgreSQL", "WebSocket", "Tailwind"],
  },

  {
    slug: "budget-tracker",
    num: "04",
    title: "Budget Tracker",
    tagline: "Where my money actually goes — auto-categorized.",
    year: "Apr 2024",
    card: {
      problem: "Wanted to see where money actually goes — auto, not on a spreadsheet.",
      built:
        "A real-time expense tracker with auto-categorization, smart filtering, and visual reports. My first proper full-stack project.",
      tech: ["React", "Node", "MongoDB"],
    },
    meta: {
      role: "solo · weekend project",
      period: "Apr 2024",
      status: "personal",
    },
    problem:
      "I wanted to see my spending without keeping a spreadsheet. None of the budget apps let me categorize the way my brain wanted to categorize. The fastest way to learn full-stack was to build the thing I'd actually use.",
    decisions: [
      {
        n: "01",
        title: "MongoDB while the model was still wobbly.",
        body: "Schema flexibility mattered while I was figuring out what the data actually looked like. In hindsight, Postgres with a JSONB column would have served me better — the relations between accounts, transactions, and categories settled fast.",
      },
      {
        n: "02",
        title: "Plaid for transactions, not manual entry.",
        body: "Manual entry is where every budget app I've ever used quietly died. Plugging into Plaid removed the entire surface where my motivation would fail.",
      },
      {
        n: "03",
        title: "Keyword rules + user feedback. No ML.",
        body: "Auto-categorization didn't need a model. Simple rules with a 'wrong category? tell me why' button got me to 95% accuracy in a week. The smartest version of this isn't always the most ML-shaped.",
      },
      {
        n: "04",
        title: "Charts kept deliberately minimal.",
        body: "The point was decisions, not dashboards. Two charts: spend by category over time, and a single number that asked, 'is this month higher or lower than last?' Everything else got cut.",
      },
    ],
    tradeoffs: [
      {
        cost: "wrong DB choice",
        detail:
          "MongoDB was a bad fit once relations between accounts, transactions, and categories hardened. Lived with it. Would not pick it again for this shape.",
      },
      {
        cost: "plaid sandbox vs. prod",
        detail:
          "Sandbox responses are clean. Real bank data is messier than the docs imply — duplicate transactions, transitions between pending and posted, weird symbols in merchant names. Two-week reality check.",
      },
      {
        cost: "no goals or projections",
        detail:
          "Felt like feature creep before the core was tight. Better to ship one job well than three jobs half-done.",
      },
    ],
    failures: [
      {
        title: "Stored amounts as floating-point.",
        body: "The budget summary was off by cents on every page reload. Spent half a day staring at the wrong fix before remembering: never store money as a float. Switched everything to integer cents and the bug evaporated.",
      },
      {
        title: "Categorization rules were case-sensitive.",
        body: "'Amazon' and 'AMAZON' got different categories. Broken on shipping day, embarrassing in front of a friend. Lower-case the world before you compare it.",
      },
      {
        title: "Tried to roll my own auth.",
        body: "Cost me a week. The week I should have spent on the app, I spent reinventing password reset flows. Every project since uses a battle-tested auth library.",
      },
    ],
    stack: ["React", "Node", "Express", "MongoDB", "Plaid", "Chart.js"],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
