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
      {
        id: "measuring",
        title: "Measuring whether a nudge worked",
        body: [
          { kind: "p", text: "A nudge works if it increases the rate at which non-adopters become first-time users. FeaturePin tracks three events per campaign: impression, click, and dismiss. Click-through rate is the primary signal. A click means the user went to the feature." },
          { kind: "p", text: "A well-targeted tooltip nudge on a specific feature page typically sees click-through rates between 15 and 35 percent — several times higher than email for the same message. If your nudge shows lower than 10 percent CTR, the usual culprits are: targeting too broad, message not matching the context, or the user has no immediate reason to try the feature right now." },
          { kind: "h3", text: "The right comparison" },
          { kind: "p", text: "Compare first-use rates between the cohort who received the nudge and an equivalent cohort who did not. That delta is the nudge's real impact. Click-through rate alone does not capture users who saw the nudge, dismissed it, and then tried the feature on their own shortly after — which happens more often than you might expect." },
        ],
      },
    ],
      {
        id: "faq-nudges",
        title: "Common questions about nudges",
        body: [
          { kind: "h3", text: "How is a nudge different from an announcement?" },
          { kind: "p", text: "An announcement fires once to a defined audience regardless of their behavior. A nudge fires conditionally: only to users who have not yet done a specific thing. Announcements are broadcasts. Nudges are follow-ups. Both are useful, and the most effective product communication strategies use both in sequence." },
          { kind: "h3", text: "Will nudges annoy my users?" },
          { kind: "p", text: "Only if you target them badly. A nudge shown to a user who already uses the feature is annoying. A nudge shown to a user who has not found something genuinely useful to them is a helpful reminder. The condition is everything. FeaturePin automatically stops showing the nudge once the user visits the relevant section — you never have to manually retire them." },
          { kind: "h3", text: "How many nudges should I run at once?" },
          { kind: "p", text: "Most teams start with one or two. Running more than four or five active nudges at the same time creates the risk of users seeing multiple messages in the same session, which trains them to dismiss everything. Prioritize nudges by feature value and adoption gap. The features with the highest value and the lowest adoption are the right place to start." },
          { kind: "h3", text: "How long should I leave a nudge active?" },
          { kind: "p", text: "Leave it active until the adoption gap closes or you are satisfied with the result. FeaturePin's analytics will show you whether the CTR is still generating meaningful conversions. If impressions are dropping — meaning fewer users are hitting the non-adoption condition — that is a sign the nudge has done its job and you can archive it or replace it with a new campaign for a different feature." },
        ],
      },
    related: [
      { href: "/in-app-announcements/", kind: "Use case", title: "In-app announcements", desc: "When the message should go to everyone, not only non-adopters." },
      { href: "/campaign-analytics/", kind: "Product", title: "Campaign analytics", desc: "How to measure whether your nudges and announcements converted." },
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
        id: "targeting-announcements",
        title: "Targeting your announcements",
        body: [
          { kind: "p", text: "Not every announcement should go to every user. A new billing export feature is useful for admins and finance users, not for end users who never see the billing section. A feature behind a paid plan should be announced only to users who can access it." },
          { kind: "p", text: "FeaturePin targeting lets you filter by user properties you pass through the SDK: plan, role, signup date, or custom attributes. You can also scope announcements to specific URLs, which is useful for feature-level messages that are only relevant in a particular section of the product." },
          { kind: "p", text: "Broad announcements tend to generate lower engagement because the message is relevant to fewer of the people who see it. Targeted announcements outperform them on click-through rate because the right users see the right message at the right time." },
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
            "A modal for a new billing export that saves finance teams manual work. Targeted to admins and billing contacts only. CTA goes directly to the export section.",
            "A banner for pricing or policy updates that need broad awareness. No CTA required — the message itself is the value.",
            "A tooltip on a new sidebar section after a navigation redesign. Fires once per user, disappears after dismiss.",
            "A modal for a major feature launch. Disappears after one impression — never shown twice to the same user.",
            "A banner for a limited-time promotional offer. Stays visible until the deadline passes or the user dismisses it.",
          ]},
        ],
      },
      {
        id: "lifecycle",
        title: "Managing announcements over time",
        body: [
          { kind: "p", text: "Announcements are not permanent. A modal that made sense at launch becomes noise after every active user has seen it. FeaturePin tracks impressions per user, so a campaign that has reached full saturation stops generating new impressions — but it stays active until you pause or archive it." },
          { kind: "p", text: "Good campaign hygiene means reviewing active campaigns monthly and retiring ones that have served their purpose. An active campaign list with 20 stale items creates confusion for whoever manages the account next. Archive aggressively. Keep the active list to the campaigns that are still running for a reason." },
          { kind: "h3", text: "When to update versus when to replace" },
          { kind: "p", text: "If a campaign is performing but the copy needs a small fix, update it in place. The campaign retains its impression history and targeting. If the message is fundamentally about a different update or a different audience, create a new campaign. Mixing data from two different launches in one campaign history makes it harder to evaluate either." },
        ],
      },
      {
        id: "combine-announce-nudge",
        title: "Combine announcements with nudges for higher adoption",
        body: [
          { kind: "p", text: "The standard adoption playbook is two moves: announce on launch day, nudge two weeks later. The announcement creates broad awareness. The nudge follows up with the specific cohort of users who saw it but still have not tried the feature." },
          { kind: "p", text: "This combination works because it respects user timing. Not every user is ready to try a new feature the day it launches. They may be mid-project, on vacation, or simply busy. The nudge catches them when they are back and in the relevant section of the product — which is a much better moment than the original launch day." },
          { kind: "p", text: "Teams that run both moves consistently report significantly higher 30-day adoption rates than teams that only announce. The announcement gets you to 30 to 40 percent. The nudge can push that number to 60 to 70 percent of eligible users over time." },
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
        id: "fintech-data-and-compliance",
        title: "Data collection and compliance posture",
        body: [
          { kind: "p", text: "The two questions that come up most in fintech security reviews are: what data does this collect, and who can see it? FeaturePin collects impressions, clicks, and dismissals keyed to an end-user identifier your team provides. It does not fingerprint devices, read DOM content, track navigation history, or collect financial data of any kind." },
          { kind: "p", text: "The end-user identifier you pass through featurepin.identify() can be a pseudonymous ID. Nothing in the implementation requires passing a name, email address, or account number. Your compliance team can verify the actual traffic by inspecting the SDK calls directly — there are no undocumented collection points." },
          { kind: "ul", items: [
            "Data collected: end-user ID, campaign ID, event type (impression/click/dismiss), timestamp, URL.",
            "Data not collected: names, email addresses, financial data, device fingerprints, DOM snapshots.",
            "Storage: events are retained in your workspace only, no third-party analytics pipeline.",
          ]},
        ],
      },
      {
        id: "fintech-setup-and-approval",
        title: "What a typical approval process looks like",
        body: [
          { kind: "p", text: "For fintech teams, getting a new script approved typically involves security review, compliance sign-off, and sometimes legal review. FeaturePin is designed to make that process as short as possible." },
          { kind: "p", text: "The integration is a single script tag pointing to a small JavaScript file. The file can be reviewed statically. The API calls made at runtime are limited to one config fetch and one event batch endpoint. The full network surface is readable in under an hour by anyone doing the review." },
          { kind: "p", text: "Teams that have gone through this review often find that having something simple and auditable is more valuable than a longer feature list. A tool with ten data collection vectors is harder to approve than one with two, regardless of how the privacy policy reads." },
          { kind: "callout", title: "Security review checklist", text: "FeaturePin uses no eval(), no inline code injection, no cross-origin cookies, and no third-party analytics aggregation. The SDK is served from a CDN but the source is publicly inspectable. Subresource Integrity (SRI) hashes are available on request for teams that require it." },
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
        id: "pricing-ug",
        title: "Pricing: what you are actually paying for",
        body: [
          { kind: "p", text: "UserGuiding's pricing starts at $174 per month for basic plans and scales with MAU and features. FeaturePin starts free for up to 1,000 MAU and grows to $29 per month on the Grow plan (10,000 MAU) and $79 per month on Scale (25,000 MAU)." },
          { kind: "stat", num: "6x", label: "is the rough pricing multiple between UserGuiding's entry plan and FeaturePin's Grow plan at similar MAU levels." },
          { kind: "p", text: "The pricing gap is significant, but the question is not just cost — it is cost relative to what you use. If you are actively running guided tours, onboarding checklists, surveys, and a knowledge base alongside your announcements, UserGuiding's higher price may be justified by the breadth. If you are primarily running announcements and nudges, paying for a suite you use at 20 percent of capacity is a harder case to make internally." },
        ],
      },
      {
        id: "when-userguiding-wins",
        title: "When UserGuiding is the better choice",
        body: [
          { kind: "p", text: "UserGuiding makes more sense when guided onboarding is a core part of your product experience. If new user activation depends on walking users through a multi-step setup, and you need that to happen automatically for every new signup, a guided tour builder earns its place." },
          { kind: "p", text: "It also makes more sense when you want a single tool that covers surveys, knowledge base, and announcements, and you have a dedicated team member who will actively configure and maintain all those features. Breadth becomes an advantage when the team has the capacity to leverage it." },
        ],
      },
      {
        id: "setup-and-ongoing-maintenance",
        title: "Setup, onboarding, and ongoing maintenance",
        body: [
          { kind: "p", text: "One difference that shows up after the purchase decision is how much ongoing work the tool requires. Broader platforms with more features also have more configuration, more content to maintain, and more places where things can break. A product tour that worked last quarter may need updating when the UI changes. A survey that fires on a now-deleted page generates errors. Each feature is also a maintenance surface." },
          { kind: "p", text: "FeaturePin's scope is intentionally narrow: announcements and nudges. That means the ongoing work is launching campaigns and reviewing adoption results. There is no tour library to maintain, no knowledge base to keep current, no survey logic to audit. For teams with one or two people owning the product communication layer, that reduction in surface area is meaningful." },
          { kind: "p", text: "If you have a dedicated product growth or user research team member who will actively use every feature in a broader platform, the maintenance cost is distributed and the investment pays off. If you have a PM who also owns three other priorities and needs the tool to work without constant upkeep, a simpler tool finishes the job." },
          { kind: "stat", num: "15 min", label: "is typically all it takes to create, target, and launch a campaign in FeaturePin — from blank slate to live in product." },
        ],
      },
      {
        id: "how-to-decide",
        title: "How to decide honestly",
        body: [
          { kind: "p", text: "Write down the workflows you will actually run in the next 90 days. Be specific: 'Announce the export feature to admin users', 'Nudge users who have not visited the analytics section in two weeks', 'Run an NPS survey at day 30'. If the list is announcements and behavioral nudges, a focused product is likely the better fit. If it includes guided tours and surveys, a broader suite may earn its place — but only if you will actually use those features." },
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
        id: "pricing-comparison",
        title: "Pricing comparison",
        body: [
          { kind: "p", text: "Beamer's pricing starts around 49 EUR per month for basic plans and scales with usage. FeaturePin starts free for up to 1,000 MAU, with the Grow plan at $29 per month for up to 10,000 MAU." },
          { kind: "p", text: "At similar usage levels, FeaturePin is typically less expensive. The more meaningful comparison is value relative to what you actually use: if you need only announcements, Beamer's core plan may be competitive. If you also need behavioral nudges and want to keep tooling costs low, FeaturePin is the more efficient option." },
        ],
      },
      {
        id: "where-beamer-fits",
        title: "When Beamer may still fit better",
        body: [
          { kind: "p", text: "If your main requirement is a strong release feed and announcement layer, and you specifically want the changelog widget pattern embedded in your product, Beamer remains a sensible choice. Some user bases — developer tools, productivity apps — actively expect a changelog feed." },
          { kind: "p", text: "If your users do not engage with changelog-style feeds and you care more about whether they actually used a feature, the changelog format becomes a secondary concern and nudges matter more." },
        ],
      },
      {
        id: "beamer-feature-comparison",
        title: "What each tool covers",
        body: [
          { kind: "modular", items: [
            { num: "01", title: "Announcements", body: "Both tools handle in-app announcements. Beamer's changelog-style widget is well-polished. FeaturePin uses modals, banners, and tooltips — the same formats that work inside the product UI rather than in a side panel." },
            { num: "02", title: "Behavioral nudges", body: "FeaturePin has rule-based nudges: show a message when a user has not visited a section in N days. Beamer focuses on announcement delivery, not behavioral triggers." },
            { num: "03", title: "Targeting", body: "Both tools offer basic targeting. FeaturePin's property-based targeting is designed for SDK-level integration — pass user properties at identify time and target by any attribute your product already tracks." },
            { num: "04", title: "Analytics", body: "Both show impression and click data per campaign. FeaturePin's campaign analytics page is built around adoption measurement, not just delivery metrics." },
          ]},
        ],
      },
      {
        id: "beamer-migration",
        title: "Switching from Beamer",
        body: [
          { kind: "p", text: "If you are currently using Beamer and considering a switch, the migration is straightforward. FeaturePin uses a similar snippet-based integration: add the script, call featurepin.identify() with your user data, and active campaigns start appearing." },
          { kind: "p", text: "The main difference in setup is the property identification step. Beamer can work without user identification for public changelogs. FeaturePin requires user identification to enable targeting and nudges — which is also what makes the behavioral trigger features possible. The setup takes less than an hour for most integrations." },
          { kind: "p", text: "Existing campaign content does not transfer automatically, but for most teams the announcement library is a short list of recent updates. Rebuilding it in a new tool is typically a few minutes of copy-paste, not a migration project. What matters more is whether the new tool handles your next 12 months better, not whether it imports the last 12." },
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
        id: "common-mistakes-metrics",
        title: "Common mistakes when measuring adoption",
        body: [
          { kind: "p", text: "Even teams that have a defined metric often make measurement mistakes that produce misleading numbers. These are the most common ones." },
          { kind: "ul", items: [
            "Including all users in the denominator instead of eligible users. If a feature is admin-only and your user base is 80 percent non-admins, your adoption rate will look artificially low.",
            "Measuring first use but not repeat use. A feature that every user tries once and abandons is not adopted. It is merely noticed. Adoption means the feature becomes part of the workflow.",
            "Using a fixed calendar month as the window instead of a rolling period from each user's first exposure. Users who signed up mid-month had less time to discover the feature.",
            "Not controlling for users who were not active during the measurement window. If a user did not log in during the period, their non-adoption is not a signal about your feature — it is a signal about their engagement with the product overall.",
          ]},
          { kind: "p", text: "None of these are hard to fix. They just require the team to agree on the definition before the launch, not after. The post-launch debate about what the numbers mean is usually a symptom of a pre-launch conversation that did not happen." },
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
        id: "distribution-failure",
        title: "The three distribution failures",
        body: [
          { kind: "p", text: "Most adoption problems are distribution problems, not product problems. The feature works. Users just never found it, did not understand it when they saw the announcement, or were not in the right context to act on it when the message arrived. Each failure mode has a different fix." },
          { kind: "ul", items: [
            "Awareness failure: the user does not know the feature exists. Fix with in-app announcements at launch. Email alone will miss 70 percent of your active users.",
            "Understanding failure: the user saw the announcement but did not understand why the feature matters to them specifically. Fix with more specific copy and tighter targeting. The more relevant the message feels, the higher the read rate.",
            "Timing failure: the user heard about the feature but was not ready to try it when the message arrived. Fix with nudges that fire later, when the user is in the relevant section of the product.",
          ]},
          { kind: "p", text: "Diagnosing which failure mode applies to your specific launch tells you which lever to pull. If impressions are high but CTR is low, the problem is likely understanding. If impressions are low, the problem is awareness. If CTR is reasonable but repeat usage is low, the problem is timing or fit." },
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
        id: "benchmarks",
        title: "What good adoption looks like",
        body: [
          { kind: "p", text: "Benchmarks vary widely by product type and feature complexity, but these ranges are representative of healthy B2B SaaS products." },
          { kind: "ul", items: [
            "Day-7 adoption for a major feature: 25 to 50 percent of eligible active users.",
            "Day-30 adoption with an active nudge campaign: 50 to 75 percent.",
            "Repeat usage within 30 days among first-time users: 40 to 70 percent for habitual features.",
            "In-app modal CTR for a well-targeted launch: 25 to 45 percent.",
            "Tooltip nudge CTR in the right context: 15 to 35 percent.",
          ]},
          { kind: "p", text: "If your numbers are significantly below these ranges, the problem is almost always distribution, not feature quality. If your feature-quality reviews look strong in user research, prioritize the communication layer before blaming the product." },
        ],
      },
      {
        id: "close",
        title: "What to do this week",
        body: [
          { kind: "p", text: "Pick one shipped feature with disappointing usage. Define the eligible audience and the time window. Announce it properly with in-product messaging. Two weeks later, identify non-adopters and nudge them in context. Measure the delta." },
          { kind: "p", text: "That one experiment will tell you whether your adoption problem is really a communication problem, which it often is. Most teams run this experiment and are surprised by how much of the gap closes from better distribution alone, with no changes to the feature itself." },
        ],
      },
    ],
    related: [
      { href: "/feature-adoption-nudges/", kind: "Use case", title: "Feature adoption nudges", desc: "The cleanest mechanism for the second move." },
      { href: "/in-app-announcements/", kind: "Use case", title: "In-app announcements", desc: "The launch-day layer for broad visibility." },
      { href: "/campaign-analytics/", kind: "Product", title: "Campaign analytics", desc: "How to measure adoption impact from your campaigns." },
    ],
  },
  "campaign-analytics": {
    title: "Campaign Analytics for In-App Messages | FeaturePin",
    description: "Track impressions, click-through rates, and dismiss rates for every in-app announcement and nudge campaign. Know what worked and what to improve.",
    canonical: "https://featurepin.com/campaign-analytics/",
    kind: "Product",
    crumb: ["Product", "Campaign analytics"],
    h1prefix: "Campaign",
    h1accent: "analytics",
    lede: "Know whether your in-app messages actually worked. Every campaign tracks impressions, clicks, and dismissals — enough signal to measure adoption without a heavier analytics stack.",
    meta: [
      ["Updated", "May 2026"],
      ["For", "Product Managers, founders"],
      ["Included in", "All plans"],
    ],
    intro: "Launching an announcement or nudge is only half the job. The other half is knowing whether it worked. FeaturePin tracks the three events that matter for every campaign — impression, click, dismiss — and presents them in a dashboard designed for product decisions, not data engineering. No SQL, no event schemas to define, no analytics setup beyond the SDK you already installed.",
    sections: [
      {
        id: "three-events",
        title: "The three events that matter",
        body: [
          { kind: "p", text: "FeaturePin tracks three events per campaign. That is a deliberate constraint, not a limitation. More events create more noise. Three events create three clear questions: did the user see it, did the user act on it, and did the user close it without acting?" },
          { kind: "modular", items: [
            { num: "01", title: "Impression", body: "The campaign was rendered and visible to the user. Logged once per user per campaign — repeat views do not inflate the count." },
            { num: "02", title: "Click", body: "The user clicked the primary CTA button. For nudges, this is the key conversion signal: the user is going to try the feature." },
            { num: "03", title: "Dismiss", body: "The user closed the message without clicking the CTA. Useful for understanding awareness without conversion, and for diagnosing copy or targeting problems." },
          ]},
          { kind: "p", text: "The ratio between these three events tells you most of what you need to know. High impressions with low clicks suggests a copy or relevance problem. High dismissals relative to clicks suggests the message is being seen by users who are not ready to act. If impressions are much lower than expected, the targeting condition may be too narrow or the campaign may not be reaching your most active users." },
        ],
      },
      {
        id: "dashboard",
        title: "The analytics dashboard",
        body: [
          { kind: "p", text: "The analytics view in FeaturePin shows impression volume over time, click-through rate, and dismiss rate for each campaign. You can filter by date range — 7, 30, or 90 days — and toggle between the overall summary and a daily breakdown chart." },
          { kind: "p", text: "The dashboard is designed for product decisions. You should be able to open it, see whether a campaign is performing, and decide in under a minute whether to keep it active, adjust the copy, or pause it. There is no setup required — analytics are on by default for every campaign from the moment it goes live." },
          { kind: "callout", title: "No extra SDK calls", text: "Analytics events are batched by the SDK and sent automatically. You do not need to instrument anything beyond the initial featurepin.identify() call. Every campaign launched from the dashboard gets full tracking without any additional configuration." },
        ],
      },
      {
        id: "benchmarks",
        title: "What good numbers look like",
        body: [
          { kind: "p", text: "Benchmarks vary by format and context, but these ranges are representative of healthy campaigns in typical SaaS products." },
          { kind: "modular", items: [
            { num: "01", title: "Modal impressions", body: "70 to 90 percent of active users within the first week for a well-targeted campaign on a major release." },
            { num: "02", title: "Banner impressions", body: "60 to 80 percent of active users, depending on how often they log in during the campaign window." },
            { num: "03", title: "Tooltip nudge CTR", body: "15 to 35 percent for a well-targeted, contextually placed nudge. If you are below 10 percent, review targeting first." },
            { num: "04", title: "Modal CTR", body: "20 to 40 percent for an actionable CTA on a relevant launch. Lower for informational-only announcements." },
          ]},
          { kind: "p", text: "These are diagnostic ranges, not targets. If your numbers fall well below them, it usually points to a targeting problem — the message is shown to users for whom it is not relevant — or a copy problem — the message does not communicate a clear reason to act. If your numbers are above the top of the range, you have a well-matched message and audience." },
        ],
      },
      {
        id: "improving",
        title: "How to improve campaign performance",
        body: [
          { kind: "p", text: "Analytics are useful only if they inform a next action. Here are the most common improvement levers." },
          { kind: "ol", items: [
            "Narrow the audience. The more specific the targeting, the higher the click-through rate. If you are targeting all users, try narrowing to users who have visited the relevant section at least once in the last 30 days.",
            "Move the format. A tooltip fires in the right context. A modal fires on login. If the feature is specific to a section, a tooltip in that section will outperform a modal on the dashboard.",
            "Shorten the copy. If users are dismissing quickly, they are probably not reading the body. Cut the message to two sentences and test whether CTR improves.",
            "Check the CTA label. Specific labels outperform generic ones. 'Try the export feature' converts better than 'Learn more'.",
            "Review the inactivity window for nudges. A 14-day window may include users who are just infrequent. Try 21 or 30 days for features users only need occasionally.",
          ]},
        ],
      },
      {
        id: "workspace-analytics",
        title: "Workspace-level analytics",
        body: [
          { kind: "p", text: "Beyond individual campaign analytics, FeaturePin shows a workspace summary: total MAU for the current 30-day window, impression volume across all active campaigns, and the top five campaigns by impression count. This gives you a quick read on overall product communication health without opening each campaign individually." },
          { kind: "p", text: "The MAU counter is also the billing metric. It updates daily and reflects the rolling 30-day count of unique users your SDK identified. You can see the current count, the plan limit, and how many days are left in the current window from the Settings section. Limits come with a seven-day grace period before the account is locked." },
          { kind: "solve" },
        ],
      },
    ],
    related: [
      { href: "/feature-adoption-nudges/", kind: "Use case", title: "Feature adoption nudges", desc: "The campaigns that generate the most interesting analytics signal." },
      { href: "/in-app-announcements/", kind: "Use case", title: "In-app announcements", desc: "The other campaign type, alongside nudges." },
      { href: "/resources/feature-adoption-guide/", kind: "Guide", title: "Feature adoption guide", desc: "A framework for defining and measuring adoption beyond clicks." },
    ],
  },
  "featurepin-for-hr-saas": {
    title: "FeaturePin for HR SaaS Teams",
    description: "In-app announcements and nudges for HR software products. Help HR managers discover and adopt new features without overwhelming them with notifications.",
    canonical: "https://featurepin.com/featurepin-for-hr-saas/",
    kind: "Industry",
    crumb: ["Industries", "HR SaaS"],
    h1prefix: "FeaturePin for",
    h1accent: "HR SaaS",
    lede: "HR teams are busy. Your product communication needs to reach them in the product, at the right moment, without adding to the noise.",
    meta: [
      ["Reading time", "6 min"],
      ["Updated", "May 2026"],
      ["For", "Heads of Product, founders"],
    ],
    intro: "HR software products face a specific adoption challenge: the people using the tool are HR managers, people ops teams, and finance departments that bought the product to solve a problem, not to explore a feature set. They log in, complete specific tasks, and leave. That means new features sit unused for months unless someone surfaces them in the right moment. FeaturePin is built for exactly that problem: reaching the right user, in the right section of the product, at the right time.",
    sections: [
      {
        id: "hr-adoption-problem",
        title: "The HR software adoption pattern",
        body: [
          { kind: "p", text: "HR SaaS buyers are often evaluating tools on behalf of an organization, not just for personal use. When a new feature launches, the evaluation question shifts: not just 'is the feature useful?' but also 'will it change how my team works?' and 'do I need to communicate this to managers?'. That changes how you need to announce it." },
          { kind: "p", text: "HR software often has a long tail of features that users have not discovered. Onboarding workflows, automated approval chains, performance review templates, compliance report exports — each was built because someone asked for it, but few users explore the product deeply enough to find them unprompted." },
          { kind: "callout", title: "The task-based user problem", text: "HR users log in to complete a task: process payroll, update a policy, run a report. They are not browsing. They are not exploring. In-app nudges reach them during the task they are already doing — which is the only moment when a feature discovery message has a real chance of landing." },
        ],
      },
      {
        id: "use-cases-hr",
        title: "Where HR teams use FeaturePin",
        body: [
          { kind: "modular", items: [
            { num: "01", title: "Policy update acknowledgments", body: "Announce policy changes or compliance-required updates with a modal. Show it once to active users and retire it automatically after one impression." },
            { num: "02", title: "New workflow discovery", body: "When you add a new approval chain or automated workflow, nudge the HR admins who manage those processes. Show the message in the section they are already using." },
            { num: "03", title: "Compliance feature adoption", body: "Features built for compliance purposes — audit logs, access control updates, GDPR exports — often have low adoption because users did not know they were needed. A targeted announcement reaches the right admins." },
            { num: "04", title: "Self-service expansion", body: "When you add self-service capabilities that reduce HR team workload, announce them to the managers who benefit most. Fewer tickets, fewer manual processes." },
          ]},
        ],
      },
      {
        id: "hr-specific-targeting",
        title: "Targeting in multi-role HR products",
        body: [
          { kind: "p", text: "Most HR SaaS products have multiple user types: HR admins, managers, and employees. Each group has different feature access and different adoption priorities. A feature relevant to an HR admin is invisible to an employee, and vice versa." },
          { kind: "p", text: "FeaturePin's property-based targeting is designed for exactly this scenario. Pass the user's role through featurepin.identify() when they log in, and every campaign can be scoped to only the users for whom it is relevant. Employees never see HR admin announcements. Managers only see the features they can use." },
          { kind: "p", text: "This is especially important for compliance-related announcements, where showing the wrong message to the wrong user creates confusion or raises unnecessary concern. Targeting by role removes that risk entirely and keeps the signal-to-noise ratio high for every user type." },
        ],
      },
      {
        id: "hr-roi",
        title: "The adoption ROI for HR teams",
        body: [
          { kind: "p", text: "For HR software, poor feature adoption has two costs. The first is churn risk: a customer who does not use the features they paid for is a customer who does not renew. The second is support load: users who cannot find a feature submit a support ticket instead of self-serving." },
          { kind: "p", text: "In-app nudges reduce both costs. A nudge that brings a user to a self-service feature for the first time can eliminate a recurring support ticket permanently. An announcement that correctly surfaces a compliance export feature can prevent a churn conversation from starting." },
          { kind: "p", text: "HR teams also tend to evaluate tools on breadth of use, not depth. A product that the whole HR team uses for multiple workflows is safer from competitive displacement than one that only the admin uses for one task. Feature adoption nudges are the lowest-friction way to expand usage across the team." },
          { kind: "solve" },
        ],
      },
    ],
    related: [
      { href: "/in-app-announcements/", kind: "Use case", title: "In-app announcements", desc: "The format for compliance and policy communication." },
      { href: "/feature-adoption-nudges/", kind: "Use case", title: "Feature adoption nudges", desc: "How to surface underused features to the right users." },
      { href: "/resources/feature-adoption-guide/", kind: "Guide", title: "Feature adoption guide", desc: "How to define and measure adoption in a multi-role product." },
    ],
  },
  "featurepin-for-marketing-saas": {
    title: "FeaturePin for Marketing SaaS Teams",
    description: "In-app announcements and behavioral nudges for marketing tools. Keep users activated on new automation features, reporting dashboards, and integrations.",
    canonical: "https://featurepin.com/featurepin-for-marketing-saas/",
    kind: "Industry",
    crumb: ["Industries", "Marketing SaaS"],
    h1prefix: "FeaturePin for",
    h1accent: "marketing SaaS",
    lede: "Marketing tools ship fast and have high feature turnover. Make sure your users actually see and use what you build.",
    meta: [
      ["Reading time", "6 min"],
      ["Updated", "May 2026"],
      ["For", "Heads of Product, founders"],
    ],
    intro: "Marketing SaaS products have a distinct rhythm: fast release cycles, a user base that expects new features regularly, and a competitive environment where activation and retention are closely tied to how well users adopt the full product. The challenge is not building features — it is making sure users discover and use them before switching to a competitor that did a better job of surfacing the same capability.",
    sections: [
      {
        id: "marketing-saas-challenge",
        title: "The marketing tool adoption challenge",
        body: [
          { kind: "p", text: "Marketing tools often have a power-user problem: 20 percent of users use 80 percent of the features, while the remaining 80 percent stick to the handful of workflows they learned at onboarding. New features go unnoticed by this majority, which suppresses the product's perceived value and increases churn risk when a competitor offers a similar baseline at a lower price." },
          { kind: "p", text: "The users who do not explore the product are not disengaged — they are simply busy. They log in to run a campaign, pull a report, or check a metric. They are not browsing for improvements. In-app nudges reach them in the moment they are working, which is the only time a feature discovery message has real relevance." },
          { kind: "callout", title: "Shipped but not seen", text: "A new automation template that took three weeks to build can sit at zero usage for months if the announcement was an email that 70 percent of users did not open. One in-app nudge to users who run that workflow manually can change that within days." },
        ],
      },
      {
        id: "use-cases-marketing",
        title: "Where marketing tool teams use FeaturePin",
        body: [
          { kind: "modular", items: [
            { num: "01", title: "New automation features", body: "When you add a workflow automation or trigger, nudge users who still run that workflow manually. Show the message in the automation section while they are already in context." },
            { num: "02", title: "Reporting dashboards", body: "New analytics and reporting features often go unused because users do not realize they were added. A modal or banner on the first login after release creates awareness quickly." },
            { num: "03", title: "Integrations and connections", body: "New integrations are invisible until someone discovers them in settings. Announce them to the segment most likely to benefit, based on what they already use in the product." },
            { num: "04", title: "AI and smart features", body: "AI-powered features have high potential value but low initial adoption. Users are skeptical until they try it. A nudge that fires when a user is doing the manual version of the task converts skeptics into believers." },
          ]},
        ],
      },
      {
        id: "targeting-marketers",
        title: "Targeting marketing tool users effectively",
        body: [
          { kind: "p", text: "Marketing tool users often self-segment by what they use the product for: email marketing, social scheduling, SEO tracking, paid ads reporting. Targeting nudges by usage pattern is more effective than targeting by account tier alone." },
          { kind: "p", text: "Use property-based targeting to pass through the user's primary use case or the features they have already activated. Then show feature announcements only to users for whom the new feature is an extension of something they already do — not a cold introduction to a workflow they have never tried." },
          { kind: "p", text: "This approach converts significantly better than broad announcements. A user who runs email campaigns manually every week is a much better audience for an email automation feature than a user who only uses the product for social scheduling. The same feature, the same message, but a different audience converts at completely different rates." },
        ],
      },
      {
        id: "marketing-saas-retention",
        title: "How activation affects retention in marketing SaaS",
        body: [
          { kind: "p", text: "In marketing SaaS, the correlation between feature activation depth and retention is consistently strong. Users who actively use three or more core features are significantly less likely to churn than users who stick to one workflow. The job of in-app communication is to move users up that activation ladder." },
          { kind: "p", text: "Each nudge that successfully brings a user to a new feature is not just a conversion event — it is a retention investment. A user who discovers and adopts your reporting dashboard is harder to displace with a competitor than one who only uses the product for email sends." },
          { kind: "solve" },
        ],
      },
    ],
    related: [
      { href: "/feature-adoption-nudges/", kind: "Use case", title: "Feature adoption nudges", desc: "The core mechanism for moving users from awareness to adoption." },
      { href: "/campaign-analytics/", kind: "Product", title: "Campaign analytics", desc: "How to measure activation impact from your campaigns." },
      { href: "/resources/feature-adoption-guide/", kind: "Guide", title: "Feature adoption guide", desc: "A framework for measuring and improving adoption in any SaaS." },
    ],
  },
  "featurepin-for-devtools": {
    title: "FeaturePin for Developer Tool Companies",
    description: "In-app announcements and nudges for developer tools and dev-facing SaaS. Reach devs where they work without intrusive product tours.",
    canonical: "https://featurepin.com/featurepin-for-devtools/",
    kind: "Industry",
    crumb: ["Industries", "DevTools"],
    h1prefix: "FeaturePin for",
    h1accent: "devtools",
    lede: "Developer tools need a light touch. Reach your users with contextual nudges that feel like documentation, not marketing.",
    meta: [
      ["Reading time", "6 min"],
      ["Updated", "May 2026"],
      ["For", "Heads of Product, developer advocates"],
    ],
    intro: "Developer tools have a uniquely skeptical user base. Developers notice and dislike intrusive in-app messages, guided tours, and anything that feels like it is slowing them down to sell them something. At the same time, devtools products have the same adoption problem as any other SaaS: features get shipped and go undiscovered. FeaturePin offers a way to surface new capabilities with the minimal footprint that developer audiences expect.",
    sections: [
      {
        id: "devtools-audience",
        title: "What makes developer tool users different",
        body: [
          { kind: "p", text: "Developers read the documentation before they use a feature. They explore by clicking and reading, not by being guided. They have high tolerance for complexity and low tolerance for interruption. They will close a product tour on reflex and never think about it again." },
          { kind: "p", text: "This does not mean in-app communication does not work for developer tools. It means it needs to be done differently. The formats that convert for developer users are: a small tooltip that points at a new feature in the exact place they encounter it, and a brief banner that announces a capability without requiring interaction." },
          { kind: "callout", title: "Less is more for devs", text: "A single tooltip that says 'New: debug logs now available in the sidebar' shown to a developer who is actively debugging converts at a high rate. The same message as a full-screen modal converts near zero and generates negative sentiment." },
        ],
      },
      {
        id: "devtools-use-cases",
        title: "Where devtools companies use FeaturePin",
        body: [
          { kind: "modular", items: [
            { num: "01", title: "New dashboard features", body: "When a dashboard feature mirrors something that previously only existed in the CLI, announce it to users who actively use the CLI-facing section. Developers are often the last to discover UI improvements." },
            { num: "02", title: "API updates and new endpoints", body: "When a new API capability ships, nudge developers who are already using related endpoints. Show the announcement in the docs section or API playground if your product has one." },
            { num: "03", title: "Deprecations and migrations", body: "Use a persistent banner to communicate upcoming deprecations with a deadline. Forced migrations go smoother when awareness is built early and the message is specific about timing." },
            { num: "04", title: "Pricing tier capabilities", body: "Nudge free-tier developers when they approach a usage limit where a paid feature would unblock them. Show the message in the section where they are hitting the constraint." },
          ]},
        ],
      },
      {
        id: "sdk-fit-devtools",
        title: "Why the SDK fits developer tool stacks",
        body: [
          { kind: "p", text: "Developers on your team will review the FeaturePin SDK before you add it to a product. The review is straightforward: a single script tag, a public workspace ID, three event types collected. Under 10 KB gzip. No session recording, no form value capture, no fingerprinting beyond the user ID you pass in featurepin.identify()." },
          { kind: "p", text: "This passes the internal review that developer advocates and platform engineers typically apply to third-party scripts. The data model is simple enough to document in a paragraph, and the SDK source is readable." },
          { kind: "p", text: "Developer tool companies often have internal engineers who are also users of the product. These are the people most likely to notice and critique a clunky in-app message. FeaturePin's minimal format options — tooltip, banner, modal — keep the output clean and hard to get wrong." },
        ],
      },
      {
        id: "devtools-tone",
        title: "Writing for a developer audience",
        body: [
          { kind: "p", text: "The copy that works for developers is the same copy that works in good documentation: direct, specific, and free of marketing language. State what is new. State what it does. Link to where they can try it or read more." },
          { kind: "p", text: "Avoid: 'Exciting new feature', 'We are thrilled to announce', 'Next-generation experience'. These phrases are filtered as noise before the user finishes the first clause. Write it the way a senior developer would write a Slack message to their team about the same update." },
          { kind: "p", text: "One sentence is usually enough. 'Debug logs are now accessible directly in the sidebar — no need to open the terminal.' That message, shown via a tooltip in the sidebar during a debug session, will reach every developer it needs to reach." },
          { kind: "solve" },
        ],
      },
    ],
    related: [
      { href: "/feature-adoption-nudges/", kind: "Use case", title: "Feature adoption nudges", desc: "The format that works best with developer tool users." },
      { href: "/in-app-announcements/", kind: "Use case", title: "In-app announcements", desc: "Banners and tooltips: the right formats for developer audiences." },
      { href: "/featurepin-vs-userguiding/", kind: "Compare", title: "FeaturePin vs UserGuiding", desc: "Why a narrower tool fits better in a devtools context." },
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
