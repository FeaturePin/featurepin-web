const { useEffect, useState } = React;

const PAGES = {
  "all-features": {
    title: "All FeaturePin Features | In-App Announcements and Nudges",
    description: "Every FeaturePin feature in one place: in-app announcements, behavioral nudges, no-code targeting, and a lightweight SDK that installs in one snippet.",
    canonical: "https://featurepin.com/all-features/",
    kind: "Product",
    crumb: ["Product", "All features"],
    h1prefix: "Everything",
    h1accent: "FeaturePin does",
    lede: "Two jobs, done well. No product tours, no session replay, no NPS surveys. Just announcements and nudges, with the targeting and analytics you need to know they worked.",
    meta: [
      ["Updated", "May 2026"],
      ["For", "Product Managers, founders"],
      ["Setup", "5 minutes"],
    ],
    intro: "FeaturePin does two things and stops there. That is not a limitation — it is the product decision. Every feature listed here exists to help you launch updates inside your product and follow up with users who still have not acted on them. Nothing else ships until customers ask for it.",
    sections: [
      {
        id: "announce",
        title: "Announce mode",
        body: [
          { kind: "p", text: "Create an in-app message and launch it to your users without writing a line of code. Choose modal, banner, or tooltip depending on how much attention the update deserves." },
          { kind: "modular", items: [
            { num: "01", title: "Modal", body: "Full-focus overlay. Best for major releases, billing changes, or anything every active user must see once." },
            { num: "02", title: "Banner", body: "Persistent top bar. Best for broad visibility without interrupting the user mid-task." },
            { num: "03", title: "Tooltip", body: "Contextual pointer attached to a specific element. Best for feature-level hints tied to a button or section." },
          ]},
          { kind: "callout", title: "No engineering after install", text: "Once the SDK snippet is in your product, PMs write, target, and launch every campaign from the FeaturePin dashboard. Engineering is never on the critical path again." },
        ],
      },
      {
        id: "nudge",
        title: "Nudge mode",
        body: [
          { kind: "p", text: "A nudge is a conditional message that fires only when a user still has not tried a feature. Set the rule once. FeaturePin evaluates it automatically every 15 minutes." },
          { kind: "ol", items: [
            "Choose the feature area by URL pattern.",
            "Set the inactivity window (e.g. 14 days since last visit).",
            "Pick the message type and write the copy.",
            "Activate — FeaturePin handles the rest.",
          ]},
          { kind: "p", text: "Nudges stop showing the moment the user visits the feature. No repeated messages, no manual cleanup." },
        ],
      },
      {
        id: "targeting",
        title: "Targeting and segmentation",
        body: [
          { kind: "modular", items: [
            { num: "01", title: "All users", body: "Launch to everyone in your workspace at once. Good for launches and policy updates." },
            { num: "02", title: "URL-based", body: "Show the message only on specific pages or sections. No DOM selectors needed — FeaturePin uses URL patterns." },
            { num: "03", title: "Property-based", body: "Target by user properties you pass through the SDK: plan, role, signup date, or any custom attribute." },
            { num: "04", title: "Inactivity rule", body: "Trigger only for users who have not visited a section in N days. The core nudge condition." },
          ]},
        ],
      },
      {
        id: "sdk",
        title: "SDK and install",
        body: [
          { kind: "p", text: "One script tag. That is the entire install. The SDK is under 10KB gzip, loads asynchronously, and never blocks your page render." },
          { kind: "callout", title: "What the SDK does", text: "It identifies your users, polls for active campaigns every 30 seconds, renders the message when a rule matches, and sends impression, click, and dismiss events back in a batch." },
          { kind: "p", text: "Authentication uses your workspace ID — a public token that lives in the client. No secrets in the frontend." },
        ],
      },
      {
        id: "analytics",
        title: "Campaign analytics",
        body: [
          { kind: "p", text: "Every campaign tracks three events: impression (user saw it), click (user acted on the CTA), and dismiss (user closed it). That is enough to know whether the message worked." },
          { kind: "stat", num: "3", label: "events per campaign — impression, click, dismiss. Enough signal to measure adoption impact without a heavier analytics footprint." },
        ],
      },
      {
        id: "pricing",
        title: "Pricing model",
        body: [
          { kind: "p", text: "FeaturePin charges by monthly active users — the users your SDK identifies in a 30-day window. Free up to 1,000 MAU with FeaturePin branding. Grow removes branding at $29/month for up to 10,000 MAU. Scale covers up to 25,000 MAU at $79/month." },
          { kind: "p", text: "No trials. No demos. No negotiations. Start free and upgrade when you grow past the limit." },
          { kind: "solve" },
        ],
      },
    ],
    related: [
      { href: "/feature-adoption-nudges/", kind: "Use case", title: "Feature adoption nudges", desc: "Deep dive into the nudge rule engine and when to use it." },
      { href: "/in-app-announcements/", kind: "Use case", title: "In-app announcements", desc: "When to use modal, banner, or tooltip for your launch." },
      { href: "/resources/feature-adoption-guide/", kind: "Guide", title: "Feature adoption guide", desc: "The metrics and tactics behind a complete adoption strategy." },
    ],
  },
  "feature-adoption-nudges": {
    title: "Feature Adoption Nudges for SaaS | FeaturePin",
    description: "Learn how feature adoption nudges help SaaS teams get users to notice and try shipped features without engineering work every release.",
    canonical: "https://featurepin.com/feature-adoption-nudges/",
    kind: "Use case",
    crumb: ["Use cases", "Feature adoption nudges"],
    h1prefix: "Feature adoption",
    h1accent: "nudges",
    lede: "Reach users who still have not tried a feature, inside your product, at the exact moment a reminder can change the outcome.",
    meta: [
      ["Reading time", "6 min"],
      ["Updated", "May 2026"],
      ["For", "Product Managers, founders"],
    ],
    intro: "Most features do not fail because they are weak. They fail because the team ships them, posts a changelog, and assumes users will connect the dots on their own. A feature adoption nudge fixes that gap with one simple rule: when the right user misses the right feature, show a short in-app message and move them one step closer to first use.",
    sections: [
      {
        id: "what-it-is",
        title: "What a feature adoption nudge actually is",
        body: [
          { kind: "p", text: "A feature adoption nudge is a conditional in-app message tied to a specific user state. It can be a tooltip on a button, a banner on a page, or a modal after login. The important part is not the format. The important part is that it appears only when the user still has not tried the feature." },
          { kind: "p", text: "That makes nudges different from announcements. Announcements tell everyone that something exists. Nudges focus on the people who missed it." },
          { kind: "callout", title: "Simple rule, strong effect", text: "If a user has not visited a feature area in 14 days, remind them in context instead of waiting for them to discover it alone." },
        ],
      },
      {
        id: "why-teams-need-them",
        title: "Why SaaS teams need them",
        body: [
          { kind: "p", text: "Most SaaS teams track releases and revenue far better than they track whether new capabilities were actually adopted. By the time someone notices that a launch underperformed, the team has already moved on to the next sprint." },
          { kind: "stat", num: "14 days", label: "is the rough window after launch when a user either discovers a feature or starts ignoring it permanently." },
          { kind: "p", text: "A nudge gives you a second chance without asking engineering to hard-code custom prompts every time the roadmap ships something new." },
        ],
      },
      {
        id: "how-to-build-one",
        title: "How to build a nudge that gets used",
        body: [
          { kind: "ol", items: [
            "Pick a feature with low adoption but clear value.",
            "Define who should see the nudge and who should never see it.",
            "Choose one in-product surface close to the action.",
            "Write copy that is specific, short, and useful.",
          ]},
          { kind: "h3", text: "The rule is the product" },
          { kind: "p", text: "The best nudges are barely noticeable until they are needed. Example: if a user has not used exports after two weeks, show a tooltip on the export trigger the next time they are on the reporting page." },
          { kind: "solve" },
        ],
      },
      {
        id: "patterns",
        title: "Patterns worth copying",
        body: [
          { kind: "modular", items: [
            { num: "01", title: "The reactivation nudge", body: "For users who logged in several times since launch but still ignored the feature." },
            { num: "02", title: "The empty-state nudge", body: "For sections where an unused feature is the most obvious next action." },
            { num: "03", title: "The plan-aware nudge", body: "For paid capabilities where only eligible users should see the message." },
            { num: "04", title: "The context nudge", body: "For moments when a user is already doing the task your new feature improves." },
          ]},
        ],
      },
      {
        id: "mistakes",
        title: "Mistakes that make nudges annoying",
        body: [
          { kind: "ul", items: [
            "Showing the same nudge to users who already adopted the feature.",
            "Using modal copy for a tooltip and forcing users to read too much.",
            "Launching several nudges in the same session and competing with yourself.",
            "Treating every feature like a company-wide event.",
          ]},
          { kind: "blockquote", text: "If your nudge feels like marketing, it will be ignored like marketing.", cite: "FeaturePin rule of thumb" },
        ],
      },
    ],
    related: [
      { href: "/in-app-announcements/", kind: "Use case", title: "In-app announcements", desc: "When the message should go to everyone, not only non-adopters." },
      { href: "/featurepin-vs-userguiding/", kind: "Compare", title: "FeaturePin vs UserGuiding", desc: "What changes when you only need announcements and nudges." },
      { href: "/resources/feature-adoption-guide/", kind: "Guide", title: "Feature adoption guide", desc: "Definitions, benchmarks, and the four levers that move adoption." },
    ],
  },
  "in-app-announcements": {
    title: "In-App Announcements for SaaS Products | FeaturePin",
    description: "Use in-app announcements to ship updates where users actually see them, with modals, banners, and tooltips that do not require engineering for every launch.",
    canonical: "https://featurepin.com/in-app-announcements/",
    kind: "Use case",
    crumb: ["Use cases", "In-app announcements"],
    h1prefix: "In-app",
    h1accent: "announcements",
    lede: "Launch product updates inside your SaaS, where people are already working, instead of hoping they open an email or read a changelog later.",
    meta: [
      ["Reading time", "5 min"],
      ["Updated", "May 2026"],
      ["For", "Product, growth, customer success"],
    ],
    intro: "An in-app announcement is the fastest way to make a shipped feature visible. It meets the user inside the product, not in a crowded inbox, not in a release notes page, and not in a Slack thread your customers will never read. For small SaaS teams, that difference is usually what turns a launch from invisible into obvious.",
    sections: [
      {
        id: "why-it-works",
        title: "Why in-app announcements work better than email alone",
        body: [
          { kind: "p", text: "Users ignore a lot of product communication because it arrives outside the moment of use. In-app announcements fix that by showing the update while the user is already logged in and oriented inside your product." },
          { kind: "ul", items: [
            "Better visibility than email for routine product updates.",
            "Less friction than asking engineering to code launch-specific UI.",
            "Faster iteration when the copy or targeting needs to change.",
          ]},
        ],
      },
      {
        id: "choose-the-format",
        title: "Choose the right format",
        body: [
          { kind: "modular", items: [
            { num: "01", title: "Modal", body: "Best for major launches or changes every active user should see once." },
            { num: "02", title: "Banner", body: "Best for broad visibility without stopping the user mid-task." },
            { num: "03", title: "Tooltip", body: "Best for feature-level messages tied to a specific element or action." },
          ]},
          { kind: "p", text: "The wrong announcement format is often worse than no announcement. A modal for a tiny polish update creates friction. A tooltip for a critical billing change gets missed." },
        ],
      },
      {
        id: "copy",
        title: "How to write announcement copy",
        body: [
          { kind: "p", text: "State what changed, why it matters, and what to do next. That is enough. You do not need a launch speech." },
          { kind: "ol", items: [
            "Lead with the practical change.",
            "Keep the body to one short paragraph.",
            "Use one CTA if action matters, otherwise let users dismiss and continue.",
          ]},
        ],
      },
      {
        id: "when-to-announce",
        title: "When announcements are enough, and when they are not",
        body: [
          { kind: "p", text: "Announcements are ideal when everyone should hear the message. They are not enough when you care about the subset of users who still did nothing after seeing it." },
          { kind: "p", text: "That is where nudges take over. Announce first. Nudge later. The combination is usually stronger than either tactic alone." },
          { kind: "solve" },
        ],
      },
      {
        id: "examples",
        title: "Examples of solid in-app announcements",
        body: [
          { kind: "ul", items: [
            "A modal for a new billing export that saves finance teams manual work.",
            "A banner for pricing or policy updates that need broad awareness.",
            "A tooltip on a new sidebar section after a navigation redesign.",
          ]},
        ],
      },
    ],
    related: [
      { href: "/feature-adoption-nudges/", kind: "Use case", title: "Feature adoption nudges", desc: "The follow-up for users who saw the announcement and still did nothing." },
      { href: "/featurepin-vs-beamer/", kind: "Compare", title: "FeaturePin vs Beamer", desc: "How announcement-only tools compare when you also want nudges." },
      { href: "/resources/feature-adoption-guide/", kind: "Guide", title: "Feature adoption guide", desc: "A deeper read on why communication is the bottleneck." },
    ],
  },
  "featurepin-for-fintech-saas": {
    title: "FeaturePin for Fintech SaaS Teams",
    description: "Compliance-aware in-app announcements and nudges for fintech SaaS products, without heavyweight product adoption suites.",
    canonical: "https://featurepin.com/featurepin-for-fintech-saas/",
    kind: "Industry",
    crumb: ["Industries", "Fintech SaaS"],
    h1prefix: "FeaturePin for",
    h1accent: "fintech SaaS",
    lede: "In-app announcements and nudges for products that need adoption help without signing up for an invasive analytics platform.",
    meta: [
      ["Reading time", "5 min"],
      ["Updated", "May 2026"],
      ["For", "Heads of Product, founders"],
    ],
    intro: "Fintech teams do not have much patience for bloated SDKs, vague data collection policies, or long setup projects just to tell users that a feature launched. You still need product adoption. You just need a smaller surface area and a clearer story for security, compliance, and legal review.",
    sections: [
      {
        id: "why-fintech-is-different",
        title: "Why fintech has a different bar",
        body: [
          { kind: "p", text: "Fintech products operate in an environment where scripts get reviewed, access controls matter, and customer trust is fragile. That changes the evaluation criteria for any in-app messaging tool." },
          { kind: "ul", items: [
            "Security teams want a narrow implementation surface.",
            "Compliance teams want clarity on what data is collected.",
            "Product teams still need to improve feature discovery and rollout communication.",
          ]},
        ],
      },
      {
        id: "what-featurepin-does",
        title: "What FeaturePin does differently",
        body: [
          { kind: "p", text: "FeaturePin is intentionally narrow. It handles announcements and nudges. It is not trying to be a survey tool, knowledge base, product tour suite, or session replay product." },
          { kind: "callout", title: "Focused telemetry", text: "The core feedback loop is impressions, clicks, and dismissals, tied to the campaign. Enough to understand adoption, without dragging in a much larger analytics footprint." },
        ],
      },
      {
        id: "where-it-fits",
        title: "Where fintech teams use it",
        body: [
          { kind: "modular", items: [
            { num: "01", title: "KYC and onboarding", body: "Prompt users through the next step when a flow stalls." },
            { num: "02", title: "Plan-aware upgrades", body: "Show premium capabilities only to the customers who can act on them." },
            { num: "03", title: "Regulatory updates", body: "Communicate product changes that users need to acknowledge or understand." },
            { num: "04", title: "Reactivation prompts", body: "Bring users back to underused financial workflows after launch." },
          ]},
        ],
      },
      {
        id: "review-process",
        title: "What makes approval easier",
        body: [
          { kind: "p", text: "A smaller tool is easier to approve when the answer to 'what does this do?' is simple and consistent. FeaturePin exists to place in-app messages, target them sanely, and report basic campaign outcomes." },
          { kind: "p", text: "That clarity is often more valuable than an enormous feature list for teams that would never use most of the suite anyway." },
          { kind: "solve" },
        ],
      },
    ],
    related: [
      { href: "/in-app-announcements/", kind: "Use case", title: "In-app announcements", desc: "The simplest format for launch and compliance communication." },
      { href: "/featurepin-vs-userguiding/", kind: "Compare", title: "FeaturePin vs UserGuiding", desc: "When a broad platform is heavier than you need." },
      { href: "/resources/feature-adoption-guide/", kind: "Guide", title: "Feature adoption guide", desc: "A practical framework for deciding what to measure." },
    ],
  },
  "featurepin-vs-userguiding": {
    title: "FeaturePin vs UserGuiding",
    description: "Compare FeaturePin and UserGuiding for in-app announcements, nudges, pricing, complexity, and team fit.",
    canonical: "https://featurepin.com/featurepin-vs-userguiding/",
    kind: "Comparison",
    crumb: ["Compare", "FeaturePin vs UserGuiding"],
    h1prefix: "FeaturePin",
    h1accent: "vs UserGuiding",
    lede: "Both tools help you communicate inside the product. The real question is whether you need a platform with many jobs or a smaller tool with one clear job.",
    meta: [
      ["Reading time", "5 min"],
      ["Updated", "May 2026"],
      ["For", "SaaS teams under 80 people"],
    ],
    intro: "UserGuiding is broader. FeaturePin is narrower. That is not marketing spin, it is the whole buying decision. If your team wants tours, surveys, and a knowledge base, the answer may be UserGuiding. If you mainly need to announce releases and nudge non-adopters, the extra surface area can become cost and operational drag.",
    sections: [
      {
        id: "quick-answer",
        title: "The short answer",
        body: [
          { kind: "ul", items: [
            "Choose UserGuiding if you want a multi-feature product adoption suite.",
            "Choose FeaturePin if your primary problem is feature visibility and adoption.",
            "Choose neither if your product is too early for tooling and basic customer contact still works better than in-app systems.",
          ]},
        ],
      },
      {
        id: "overlap",
        title: "Where they overlap",
        body: [
          { kind: "p", text: "Both products cover modals, banners, tooltips, and targeting. Both can help a product manager launch messages without engineering for every campaign." },
          { kind: "stat", num: "$29", label: "is FeaturePin's Grow price for up to 10,000 MAU, aimed at teams that only want the announce-and-nudge layer." },
        ],
      },
      {
        id: "difference",
        title: "Where the difference shows up",
        body: [
          { kind: "modular", items: [
            { num: "01", title: "Scope", body: "UserGuiding offers tours, surveys, checklists, and more. FeaturePin stays on announcements and nudges." },
            { num: "02", title: "Complexity", body: "A narrower product usually means faster setup and less internal training." },
            { num: "03", title: "Cost discipline", body: "If you only use two features, paying for fifteen becomes hard to justify." },
          ]},
        ],
      },
      {
        id: "how-to-decide",
        title: "How to decide honestly",
        body: [
          { kind: "p", text: "Write down the workflows you will actually run in the next 90 days. If the list is announcements and behavioral nudges, a focused product is likely the better fit. If the list includes guided tours, onboarding checklists, and surveys, a broader suite may earn its place." },
          { kind: "solve" },
        ],
      },
    ],
    related: [
      { href: "/featurepin-vs-beamer/", kind: "Compare", title: "FeaturePin vs Beamer", desc: "A cleaner comparison if release communication is the main job." },
      { href: "/feature-adoption-nudges/", kind: "Use case", title: "Feature adoption nudges", desc: "The capability most small SaaS teams actually need after launch day." },
      { href: "/resources/feature-adoption-guide/", kind: "Guide", title: "Feature adoption guide", desc: "A better framework than feature-count shopping." },
    ],
  },
  "featurepin-vs-beamer": {
    title: "FeaturePin vs Beamer",
    description: "Compare FeaturePin and Beamer for product announcements, feature adoption nudges, and fit for SMB SaaS teams.",
    canonical: "https://featurepin.com/featurepin-vs-beamer/",
    kind: "Comparison",
    crumb: ["Compare", "FeaturePin vs Beamer"],
    h1prefix: "FeaturePin",
    h1accent: "vs Beamer",
    lede: "If your main job is product announcements, both tools are in the conversation. If you also want behavioral nudges, the split becomes clearer.",
    meta: [
      ["Reading time", "4 min"],
      ["Updated", "May 2026"],
      ["For", "PMs and founders comparing options"],
    ],
    intro: "Beamer is well known for changelog-style product communication. FeaturePin is built around the next step after the announcement: helping the people who still did not use the feature. That difference matters more than any visual polish or checklist of secondary options.",
    sections: [
      {
        id: "shared-ground",
        title: "What both products do well",
        body: [
          { kind: "p", text: "Both tools help SaaS teams communicate launches without rebuilding UI every time. Both reduce dependence on engineering for routine product messaging." },
        ],
      },
      {
        id: "where-featurepin-wins",
        title: "Where FeaturePin is stronger",
        body: [
          { kind: "ul", items: [
            "Behavioral nudges for users who did not adopt a feature after launch.",
            "A product position centered on announcements plus nudges, not just release broadcasting.",
            "A simpler buying story for teams that care more about adoption than changelog presentation.",
          ]},
        ],
      },
      {
        id: "where-beamer-fits",
        title: "Where Beamer may fit better",
        body: [
          { kind: "p", text: "If your main requirement is a strong release feed and announcement layer, and you do not care much about condition-based nudges after the fact, Beamer can still be a sensible fit." },
        ],
      },
      {
        id: "decision-rule",
        title: "A practical decision rule",
        body: [
          { kind: "p", text: "Ask one question: after users see the update, what happens if they still ignore the feature? If that question matters, choose the tool that handles the second move, not only the first." },
          { kind: "solve" },
        ],
      },
    ],
    related: [
      { href: "/in-app-announcements/", kind: "Use case", title: "In-app announcements", desc: "The common layer that both products cover." },
      { href: "/feature-adoption-nudges/", kind: "Use case", title: "Feature adoption nudges", desc: "The capability that creates separation after the announcement." },
      { href: "/featurepin-vs-userguiding/", kind: "Compare", title: "FeaturePin vs UserGuiding", desc: "A comparison against a broader adoption suite." },
    ],
  },
  "feature-adoption-guide": {
    title: "Feature Adoption Guide for SaaS Teams | FeaturePin",
    description: "A practical guide to feature adoption for SaaS teams, including definitions, benchmarks, and tactics that move usage after launch.",
    canonical: "https://featurepin.com/resources/feature-adoption-guide/",
    kind: "Guide",
    crumb: ["Resources", "Feature adoption guide"],
    h1prefix: "The practical guide to",
    h1accent: "feature adoption",
    lede: "How to define feature adoption, what numbers actually matter, and what to do when a launch gets seen by everyone except the users you built it for.",
    meta: [
      ["Reading time", "10 min"],
      ["Updated", "May 2026"],
      ["By", "FeaturePin"],
    ],
    intro: "Feature adoption is one of the most misunderstood product metrics in SaaS. Teams quote a percentage without defining eligibility, time window, or next action. Then they call the launch a success or failure based on a number nobody aligned on. This guide exists to clean that up.",
    sections: [
      {
        id: "definition",
        title: "Define the metric before you discuss the result",
        body: [
          { kind: "p", text: "Feature adoption is the percentage of eligible users who use a feature within a defined period after release. Eligibility matters because not every user can access every feature. The period matters because 7-day adoption and 90-day adoption answer different questions." },
          { kind: "p", text: "If you skip the definition, your dashboard becomes a debate instead of a tool." },
        ],
      },
      {
        id: "numbers",
        title: "Three numbers worth tracking",
        body: [
          { kind: "ol", items: [
            "Eligible-user adoption: who used it at least once.",
            "Time to first use: how long it took after launch.",
            "Repeat usage: whether the feature became part of the workflow.",
          ]},
        ],
      },
      {
        id: "why-adoption-stalls",
        title: "Why adoption stalls after launch",
        body: [
          { kind: "p", text: "In many SaaS products, weak adoption is not a feature-quality problem first. It is a distribution problem. Users do not notice the feature, do not understand why it matters, or do not encounter it in the right context." },
          { kind: "callout", title: "Common failure mode", text: "Teams ship a feature, send one email, and assume silence means understanding. Usually it means the update was missed." },
        ],
      },
      {
        id: "moves",
        title: "The four moves that improve adoption",
        body: [
          { kind: "modular", items: [
            { num: "01", title: "Announce in product", body: "Use a modal, banner, or tooltip where users already work." },
            { num: "02", title: "Nudge non-adopters", body: "Follow up with users who still did not try the feature." },
            { num: "03", title: "Use context", body: "Tie the message to the area or task the feature improves." },
            { num: "04", title: "Respect segments", body: "Do not show irrelevant or unavailable features to the wrong users." },
          ]},
          { kind: "solve" },
        ],
      },
      {
        id: "close",
        title: "What to do next",
        body: [
          { kind: "p", text: "Pick one shipped feature with disappointing usage. Define the audience. Announce it properly. Then nudge the users who still missed it. That one experiment will tell you whether your adoption problem is really a communication problem, which it often is." },
        ],
      },
    ],
    related: [
      { href: "/feature-adoption-nudges/", kind: "Use case", title: "Feature adoption nudges", desc: "The cleanest mechanism for the second move." },
      { href: "/in-app-announcements/", kind: "Use case", title: "In-app announcements", desc: "The launch-day layer for broad visibility." },
      { href: "/featurepin-for-fintech-saas/", kind: "Industry", title: "FeaturePin for fintech SaaS", desc: "A vertical example where approval and adoption both matter." },
    ],
  },
};

function getPage() {
  const slug = window.__SEO_PAGE__;
  return PAGES[slug] || PAGES["feature-adoption-nudges"];
}

function syncHead(page) {
  document.title = page.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", page.description);
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", page.canonical);
}

function ProseSection({ section }) {
  return (
    <section id={section.id}>
      <h2>{section.title}</h2>
      {section.body.map((block, index) => <Block key={index} block={block} />)}
    </section>
  );
}

function Block({ block }) {
  switch (block.kind) {
    case "p":
      return <p>{block.text}</p>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return <ul>{block.items.map((item, index) => <li key={index}>{item}</li>)}</ul>;
    case "ol":
      return <ol>{block.items.map((item, index) => <li key={index}>{item}</li>)}</ol>;
    case "blockquote":
      return <blockquote>{block.text}<cite>{block.cite}</cite></blockquote>;
    case "stat":
      return (
        <div className="callout-stat">
          <div className="num">{block.num}</div>
          <div className="label">{block.label}</div>
        </div>
      );
    case "callout":
      return (
        <aside className="callout">
          <div className="callout-icon"><SharedIc.info /></div>
          <div>
            <div className="callout-title">{block.title}</div>
            <p>{block.text}</p>
          </div>
        </aside>
      );
    case "modular":
      return (
        <div className="modular-grid">
          {block.items.map((item) => (
            <div key={item.num} className="modular-card">
              <h4><span className="num-tag">{item.num}</span> {item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      );
    case "solve":
      return <SolveBlock />;
    default:
      return null;
  }
}

function SolveBlock() {
  return (
    <div className="solve-block">
      <div className="solve-mark" aria-hidden="true"></div>
      <div>
        <div className="head">How FeaturePin solves it</div>
        <h4>Two features, one adoption job.</h4>
        <p>Announce releases inside your product. Nudge users who did not act. That is the whole system, and for small SaaS teams it is usually enough.</p>
        <div className="row">
          <a className="btn btn-primary" href="https://app.featurepin.com/signup">Start for free <span className="arr"><SharedIc.arr /></span></a>
          <a className="btn btn-ghost" href="/">See the product</a>
        </div>
      </div>
    </div>
  );
}

function TOC({ sections }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      let current = sections[0]?.id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        if (element.getBoundingClientRect().top < 140) current = section.id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <aside className="toc" aria-label="On this page">
      <div className="toc-label">On this page</div>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className={active === section.id ? "active" : ""}>{section.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function SEOHero({ page }) {
  return (
    <section className="seo-hero">
      <div className="grid-bg" aria-hidden="true"></div>
      <div className="rail">
        <div className="crumb">
          <a href="/">FeaturePin</a>
          <span className="sep">/</span>
          {page.crumb.slice(0, -1).map((crumb) => (
            <React.Fragment key={crumb}>
              <span>{crumb}</span>
              <span className="sep">/</span>
            </React.Fragment>
          ))}
          <span className="here">{page.crumb[page.crumb.length - 1]}</span>
        </div>
        <div style={{ marginTop: 22 }}>
          <span className="kind-pill"><span className="dot" style={{ width: 6, height: 6, borderRadius: 99, background: "var(--accent)" }}></span>{page.kind}</span>
        </div>
        <h1>{page.h1prefix} <span className="accent">{page.h1accent}</span>.</h1>
        <p className="lede">{page.lede}</p>
        <div className="meta">
          {page.meta.map(([label, value]) => (
            <span key={label}><strong>{label}</strong> · {value}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Related({ items, kind }) {
  return (
    <section className="related">
      <div className="rail">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="eyebrow">Keep reading</div>
          <h2 style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}>Related {kind === "Guide" ? "guides" : "pages"}.</h2>
        </div>
        <div className="related-grid">
          {items.map((item) => (
            <a key={item.href} className="related-card" href={item.href}>
              <div className="related-kind">{item.kind}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <div className="arr-row">Read <SharedIc.arr /></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SEOFinalCTA() {
  return (
    <section className="final" id="cta">
      <div className="rail final-inner">
        <h2>Your next feature deserves to be seen.</h2>
        <p>Start for free. No credit card required.</p>
        <a className="btn btn-primary btn-lg" href="https://app.featurepin.com/signup">Start for free <span className="arr"><SharedIc.arr /></span></a>
      </div>
    </section>
  );
}

function SEOApp() {
  const page = getPage();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.setAttribute("data-accent", "cyan");
    syncHead(page);
  }, [page]);

  return (
    <div data-screen-label={`SEO - ${page.kind}`}>
      <SharedNav />
      <main>
        <SEOHero page={page} />
        <div className="seo-body">
          <div className="rail seo-grid">
            <article className="prose">
              <p style={{ fontSize: "18.5px", color: "var(--fg)", lineHeight: 1.55, marginBottom: "2em" }}>
                {page.intro}
              </p>
              {page.sections.map((section) => <ProseSection key={section.id} section={section} />)}
            </article>
            <TOC sections={page.sections} />
          </div>
        </div>
        <Related items={page.related} kind={page.kind} />
        <SEOFinalCTA />
      </main>
      <SharedFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<SEOApp />);
