/* FeaturePin — SEO page template */
const { useState, useEffect, useRef } = React;

const SEO_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accent": "green",
  "pageType": "use-case",
  "format": "long-form"
}/*EDITMODE-END*/;

/* ---------- Page content for each type ---------- */
/* Each entry is the realistic copy for one SEO page in that category.
   Sections are an array of {id, title, body} blocks rendered as prose. */

const PAGES = {
  "use-case": {
    kind: "Use case",
    crumb: ["Use cases", "Feature adoption nudges"],
    h1prefix: "Feature adoption",
    h1accent: "nudges",
    lede: "Detect users who haven't tried a feature and reach them automatically — inside your product, without writing code or shipping releases.",
    meta: [
      ["Reading time", "6 min"],
      ["Updated", "Apr 2026"],
      ["For", "Product Managers, CEOs"],
    ],
    intro: "Half the features your team ships will never be discovered. Not because they're bad — because nobody walked your users to the door. A nudge is the smallest possible thing that can change that: one in-app message, shown to one user, at the moment they need it.",
    sections: [
      {
        id: "what-is-a-nudge",
        title: "What a nudge actually is",
        body: [
          { kind: "p", text: "A nudge is a tiny, conditional in-app message: a tooltip, a banner, a modal — triggered when a specific user does (or doesn't do) something. It is not an email. It is not a release note. It happens inside your product, at the exact moment a user could benefit from it." },
          { kind: "p", text: "The key word is conditional. A broadcast announcement reaches everyone equally; a nudge only reaches users who haven't yet tried the thing. That's the entire point." },
          { kind: "callout", title: "The 14-day rule", text: "If a user hasn't touched a feature 14 days after launch, they are statistically unlikely to ever try it on their own. A nudge is what closes that gap." },
        ],
      },
      {
        id: "why-it-matters",
        title: "Why feature adoption is the metric nobody watches",
        body: [
          { kind: "p", text: "Engineering tracks ship velocity. Sales tracks revenue. Support tracks tickets. The number of users who actually adopt a new feature gets buried in a dashboard nobody opens — until a quarterly review, when someone asks why the latest big release didn't move retention." },
          { kind: "stat", num: "12%", label: "is the median feature adoption rate three weeks post-launch across SaaS products under 80 employees. The top quartile sits at 47%. The difference is almost always communication, not product." },
          { kind: "p", text: "The features themselves are usually fine. What's missing is the part where you tell your users they exist, then remind the users who didn't notice." },
        ],
      },
      {
        id: "how-it-works",
        title: "How a nudge gets built",
        body: [
          { kind: "p", text: "There are three honest ways to do this:" },
          { kind: "ol", items: [
            "Have engineering build it custom every time. Three to four weeks per feature, plus maintenance. Most teams do this once, regret it, and stop.",
            "Buy an enterprise platform. You get nudges, plus session replay, knowledge base, AI assistant, and a $1,500/month bill. The PM uses 8% of it.",
            "Define the rule once and let a small tool do the rest. This is what FeaturePin does.",
          ]},
          { kind: "h3", text: "The rule" },
          { kind: "p", text: "A nudge rule is one sentence: if a user has not visited /billing/exports in 14 days, show a tooltip on #export-button. You write it once. The tool watches. When the condition is true, the nudge fires." },
          { kind: "solve" },
        ],
      },
      {
        id: "examples",
        title: "Three nudges worth stealing",
        body: [
          { kind: "p", text: "Patterns that consistently outperform — across analytics, billing, and collaboration tools." },
          { kind: "modular", items: [
            { num: "01", title: "The reactivator", body: "Shown to users who logged in but skipped the new feature for 14 days. Inline tooltip on the relevant nav item. Median lift: +28%." },
            { num: "02", title: "The contextual hint", body: "Fires when a user is doing the thing the new feature improves. Example: showing 'Try bulk export' the moment a user selects 6+ rows." },
            { num: "03", title: "The empty-state push", body: "When a user lands on a section that's empty, suggest the feature that fills it. High intent, low intrusion." },
            { num: "04", title: "The plan-aware nudge", body: "Show only to users on plans where the feature is available. Don't tease. Don't frustrate paid users with locked CTAs." },
          ]},
        ],
      },
      {
        id: "anti-patterns",
        title: "What not to do",
        body: [
          { kind: "ul", items: [
            "Don't show every announcement as a modal. Modals interrupt. Most updates deserve a banner or a tooltip.",
            "Don't fire nudges to users who are clearly already using the feature. Check the condition, then check it again.",
            "Don't stack four messages in one session. Pick one. The rest can wait a week.",
            "Don't write copy in marketing voice. Users are inside your product, mid-task. Be brief, be useful, get out.",
          ]},
          { kind: "blockquote", text: "If the user has to read your nudge twice, the nudge is too long.", cite: "— Internal rule" },
        ],
      },
      {
        id: "getting-started",
        title: "Getting started in 5 minutes",
        body: [
          { kind: "p", text: "There's no faster way to validate this than to try it on one feature you already shipped. Pick a feature with low adoption. Define one rule. Watch what happens to the number." },
          { kind: "p", text: "If the number doesn't move, the feature was the problem. If it does, you just bought yourself a tool that compounds every time you ship." },
        ],
      },
    ],
  },

  "industry": {
    kind: "Industry",
    crumb: ["Industries", "Fintech SaaS"],
    h1prefix: "FeaturePin for",
    h1accent: "fintech SaaS",
    lede: "Compliance-aware in-app messaging for fintech products. No tracking pixels in your UI, no third-party cookies, no surprise GDPR fire drills.",
    meta: [
      ["Reading time", "5 min"],
      ["Updated", "Apr 2026"],
      ["For", "Heads of Product at fintech SaaS"],
    ],
    intro: "Fintech products live and die by trust. Every script you load gets reviewed. Every cookie gets logged. So why does your in-app messaging tool still ship like it's 2017? FeaturePin runs as a single SDK, no third-party cookies, no behavioural tracking by default.",
    sections: [
      {
        id: "the-fintech-problem",
        title: "Why fintech teams hate most adoption tools",
        body: [
          { kind: "p", text: "The standard playbook from Userguiding and Pendo: drop a heavy script, log every click, route everything through their cloud, then sell the resulting analytics back to you. For a B2C app that's a tradeoff. For a fintech onboarding flow under PSD2 review, it's a non-starter." },
          { kind: "ul", items: [
            "Compliance teams reject scripts that fire third-party cookies.",
            "Security teams reject scripts that beacon DOM events without explicit consent.",
            "Product teams need to ship adoption messaging anyway, because banks have features too.",
          ]},
        ],
      },
      {
        id: "what-changes",
        title: "What FeaturePin does differently",
        body: [
          { kind: "p", text: "We are an in-app messaging tool, not an analytics suite. The SDK ships announcements and nudges. It does not record sessions. It does not fingerprint users. It does not build behavioral profiles you didn't ask for." },
          { kind: "callout", title: "What we collect", text: "Impressions, clicks, dismissals — per message, anonymized by default. That's the entire telemetry surface. You can disable it if your DPO insists." },
          { kind: "solve" },
        ],
      },
      {
        id: "common-uses",
        title: "What fintech teams ship with FeaturePin",
        body: [
          { kind: "modular", items: [
            { num: "01", title: "Onboarding nudges", body: "Walk new business accounts through KYC, document upload, and first transaction without three engineering tickets." },
            { num: "02", title: "Regulatory announcements", body: "PSD2, MiCA, jurisdictional changes — communicated in-product, dated, dismissible, archived." },
            { num: "03", title: "Feature gating by plan", body: "Show an upgrade nudge only to users whose tier doesn't include the feature. No false positives." },
            { num: "04", title: "Re-verification flows", body: "Trigger a tooltip on the user's profile when their KYC documents are 11 months old." },
          ]},
        ],
      },
      {
        id: "compliance",
        title: "Compliance posture",
        body: [
          { kind: "p", text: "We sign DPAs. We host in the EU. We do not subprocess your end-user data to advertising networks. The full list of subprocessors is on a public page that updates the same day a vendor changes." },
          { kind: "ul", items: [
            "GDPR-compliant by default. SCCs available for non-EU customers.",
            "SOC 2 Type II in progress (target Q4 2026). Until then: detailed control documentation on request.",
            "No third-party cookies. No fingerprinting. No advertising integrations.",
          ]},
        ],
      },
      {
        id: "ship",
        title: "Shipping a first nudge",
        body: [
          { kind: "p", text: "If your security review takes six weeks for any new SDK, this one will be the easiest one this year. Single endpoint, single domain, content-security-policy friendly. The full review usually finishes inside a week." },
        ],
      },
    ],
  },

  "comparison": {
    kind: "Comparison",
    crumb: ["Compare", "FeaturePin vs Userguiding"],
    h1prefix: "FeaturePin",
    h1accent: "vs Userguiding",
    lede: "Both ship in-app messages. One does it for $174/month with 47 features. The other does it for $29/month with two. Pick based on what you'll actually use.",
    meta: [
      ["Reading time", "4 min"],
      ["Updated", "Apr 2026"],
      ["For", "Product Managers evaluating tools"],
    ],
    intro: "Userguiding is a real product used by real teams. This page is not a takedown. It's a straight read on what each tool does well, where they overlap, and which one fits which team.",
    sections: [
      {
        id: "tldr",
        title: "Short version",
        body: [
          { kind: "ul", items: [
            "Userguiding does more. Product tours, surveys, knowledge base, AI assistant, checklists.",
            "FeaturePin does less. Announcements and behavioral nudges. Faster to install, cheaper to run.",
            "If your team will use a knowledge base and surveys, Userguiding earns its price.",
            "If you only want announcements and nudges, FeaturePin is the same job at one-sixth the cost.",
          ]},
        ],
      },
      {
        id: "what-they-share",
        title: "Where they overlap",
        body: [
          { kind: "p", text: "Both tools let you create modals, banners, and tooltips without engineering. Both support targeting by user property. Both report impressions, clicks, and dismissals. If you only need this overlap, the deciding factor is price and install time." },
          { kind: "stat", num: "5×", label: "the difference in monthly cost between Userguiding's entry plan and FeaturePin's Grow plan, for the same MAU bracket and the same announce-and-nudge feature set." },
        ],
      },
      {
        id: "feature-fit",
        title: "How to choose",
        body: [
          { kind: "modular", items: [
            { num: "01", title: "Choose Userguiding if…", body: "You want product tours, in-product surveys, and a built-in knowledge base alongside announcements. You have a Customer Success team that will operate it." },
            { num: "02", title: "Choose FeaturePin if…", body: "You only want announcements and behavioral nudges. You're a small team. You don't want a tool that takes a week to learn." },
            { num: "03", title: "Choose neither if…", body: "Your product is mobile-only, or you have under 100 active users. The investment in either tool will outweigh the gain." },
          ]},
          { kind: "solve" },
        ],
      },
      {
        id: "switching",
        title: "If you're switching from Userguiding",
        body: [
          { kind: "p", text: "Most teams that switch keep their announcements as-is and rebuild only the nudges. Tours don't migrate, because we don't ship tours — but we will say honestly that for the messages you actually need, the rebuild takes about an afternoon." },
        ],
      },
    ],
  },

  "resource": {
    kind: "Guide",
    crumb: ["Resources", "Guide to feature adoption"],
    h1prefix: "The honest guide to",
    h1accent: "feature adoption",
    lede: "What feature adoption is, why it's the metric nobody watches until it's too late, and the four moves that fix it without buying a $20K platform.",
    meta: [
      ["Reading time", "12 min"],
      ["Updated", "Apr 2026"],
      ["By", "FeaturePin team"],
    ],
    intro: "This is a long-form piece. It is not a sales pitch with a thin layer of advice on top. The thesis is simple: feature adoption is mostly a communication problem, and most teams solve it backwards by shipping more features instead of telling users about the ones they already have.",
    sections: [
      {
        id: "definitions",
        title: "What feature adoption actually means",
        body: [
          { kind: "p", text: "Feature adoption is the percentage of eligible users who use a specific feature within a defined window after release. Eligible matters: a user on a Free plan can't adopt a feature gated to Scale. The window matters too: 7-day adoption tells a different story than 90-day." },
          { kind: "p", text: "The number people quote — 'feature adoption is X%' — is almost always one specific definition. Pick yours and write it down. Defending a number that means three different things to three people is how you lose the room in a planning meeting." },
        ],
      },
      {
        id: "why-low",
        title: "Why most features adopt poorly",
        body: [
          { kind: "p", text: "There are four common reasons. In our experience, the first one explains most of it." },
          { kind: "ol", items: [
            "Nobody told the users. The release went out, the changelog updated, an email was sent — that's it. The user, mid-task, never saw any of it.",
            "The feature solves a problem the user didn't know they had. This is rare for SaaS, common for new categories.",
            "The feature is gated behind a flow the user won't take. Three clicks deep, requires a settings change.",
            "The feature is bad. This happens. It's the least common cause and the one teams blame first.",
          ]},
          { kind: "stat", num: "67%", label: "of low-adoption features in our sample improved by more than 2× when the team added a single in-app nudge — without changing the feature itself." },
        ],
      },
      {
        id: "measuring",
        title: "Measuring without lying to yourself",
        body: [
          { kind: "p", text: "Pick three numbers and watch them per release. Don't pick more. The dashboard with 20 KPIs is the dashboard nobody opens." },
          { kind: "h3", text: "Number one — eligible-user adoption" },
          { kind: "p", text: "Of users who could use the feature, what percentage did, in the first 30 days. This is the headline." },
          { kind: "h3", text: "Number two — repeat usage" },
          { kind: "p", text: "Of users who tried the feature once, what percentage came back within 14 days. If number one is high but two is low, the feature is discoverable but not sticky." },
          { kind: "h3", text: "Number three — time to first use" },
          { kind: "p", text: "Median days between feature release and a user's first interaction. A 3-day median is healthy. A 30-day median means your release process broke somewhere between the engineering team and the user." },
        ],
      },
      {
        id: "the-four-moves",
        title: "The four moves that move adoption",
        body: [
          { kind: "p", text: "Across the products we've seen, four interventions consistently lift adoption without requiring you to rebuild the feature." },
          { kind: "modular", items: [
            { num: "01", title: "Announce in-product", body: "Not just email. Not just changelog. A modal, banner, or tooltip inside the product, the next time the user logs in. Median lift: +18 percentage points." },
            { num: "02", title: "Nudge non-adopters", body: "Two weeks after release, target users who haven't touched the feature with one contextual message. Median lift: +12 points on top of the announcement." },
            { num: "03", title: "Empty-state suggestions", body: "When a user is in the area the feature affects, surface it. Empty states are free real estate." },
            { num: "04", title: "Segment by plan", body: "Don't show paid features to free users. Don't tease. The frustration costs more than the conversion gains." },
          ]},
          { kind: "solve" },
        ],
      },
      {
        id: "vertical-benchmarks",
        title: "Adoption benchmarks by vertical",
        body: [
          { kind: "p", text: "12% sounds low until you see what verticals actually achieve. The number that matters is whether you're above or below median for products like yours." },
          { kind: "ul", items: [
            "Analytics & BI: median 22%, top quartile 51%.",
            "Project management: median 18%, top quartile 44%.",
            "Fintech SaaS: median 9%, top quartile 31% — gated by compliance flows.",
            "Developer tools: median 28%, top quartile 60% — engaged audience.",
          ]},
          { kind: "callout", title: "Caveat", text: "These numbers are from products under 80 employees with active user bases between 500 and 10,000 MAU. Enterprise products and consumer apps follow different curves." },
        ],
      },
      {
        id: "wrap",
        title: "Wrap",
        body: [
          { kind: "p", text: "If you remember one thing: the best time to communicate about a feature is when the user is using your product, not when they're checking email. Almost everything else follows from there." },
          { kind: "blockquote", text: "Ship less. Make it matter.", cite: "— FeaturePin manifesto" },
        ],
      },
    ],
  },
};

const RELATED = {
  "use-case": [
    { kind: "Use case", title: "In-app onboarding", desc: "Walk new users through your product without writing flow code." },
    { kind: "Use case", title: "Plan upgrade prompts", desc: "Surface the right upsell at the right moment, only to the right users." },
    { kind: "Guide",    title: "How to measure feature adoption", desc: "The three numbers worth tracking. Skip the rest." },
  ],
  "industry": [
    { kind: "Industry", title: "FeaturePin for analytics SaaS", desc: "Drive feature usage in tools where users live in dashboards all day." },
    { kind: "Industry", title: "FeaturePin for dev tools", desc: "Reach developers without breaking their flow." },
    { kind: "Guide",    title: "Compliance-friendly in-app messaging", desc: "What to ask your DPO before installing any SDK." },
  ],
  "comparison": [
    { kind: "Compare",  title: "FeaturePin vs Pendo", desc: "When the enterprise option is overkill." },
    { kind: "Compare",  title: "FeaturePin vs Beamer", desc: "Beamer announces. We also nudge." },
    { kind: "Use case", title: "Feature adoption nudges", desc: "The half of the job most tools skip." },
  ],
  "resource": [
    { kind: "Guide",    title: "The 14-day rule", desc: "Why feature adoption stalls after two weeks, and what to do about it." },
    { kind: "Guide",    title: "Writing in-app copy that works", desc: "Eight lines on tone and length, with examples." },
    { kind: "Use case", title: "Feature adoption nudges", desc: "The mechanic at the heart of this guide." },
  ],
};

/* ---------- Section renderer ---------- */
function ProseSection({ section }) {
  return (
    <section id={section.id}>
      <h2>{section.title}</h2>
      {section.body.map((b, i) => <Block key={i} block={b} />)}
    </section>
  );
}

function Block({ block }) {
  switch (block.kind) {
    case "p": return <p>{block.text}</p>;
    case "h3": return <h3>{block.text}</h3>;
    case "ul": return <ul>{block.items.map((t, i) => <li key={i}>{t}</li>)}</ul>;
    case "ol": return <ol>{block.items.map((t, i) => <li key={i}>{t}</li>)}</ol>;
    case "blockquote": return <blockquote>{block.text}<cite>{block.cite}</cite></blockquote>;
    case "stat": return (
      <div className="callout-stat">
        <div className="num">{block.num}</div>
        <div className="label">{block.label}</div>
      </div>
    );
    case "callout": return (
      <aside className="callout">
        <div className="callout-icon"><SharedIc.info/></div>
        <div>
          <div className="callout-title">{block.title}</div>
          <p>{block.text}</p>
        </div>
      </aside>
    );
    case "modular": return (
      <div className="modular-grid">
        {block.items.map((it, i) => (
          <div key={i} className="modular-card">
            <h4><span className="num-tag">{it.num}</span> {it.title}</h4>
            <p>{it.body}</p>
          </div>
        ))}
      </div>
    );
    case "solve": return <SolveBlock />;
    default: return null;
  }
}

function SolveBlock() {
  return (
    <div className="solve-block">
      <div className="solve-mark" aria-hidden="true"></div>
      <div>
        <div className="head">How FeaturePin solves it</div>
        <h4>Two things, both fast.</h4>
        <p>Announce releases inside your product. Nudge users who didn't notice. Set the rule once, paste a snippet, ship in an afternoon.</p>
        <div className="row">
          <a className="btn btn-primary" href="#cta">Start for free <span className="arr"><SharedIc.arr/></span></a>
          <a className="btn btn-ghost" href="FeaturePin Landing.html">See how it works</a>
        </div>
      </div>
    </div>
  );
}

/* ---------- Modular variant: same content, but each section as a card stack ---------- */
function ModularSection({ section }) {
  return (
    <section id={section.id} className="modular-section">
      <div className="eyebrow" style={{color: "var(--accent)", marginBottom: 10}}>
        {section.title}
      </div>
      <h2 style={{fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-0.02em", marginBottom: 20}}>
        {section.body.find(b=>b.kind==="p")?.text?.split(".")[0] || section.title}.
      </h2>
      {section.body.filter(b=>b.kind!=="p" || section.body.indexOf(b)>0).map((b,i)=><Block key={i} block={b}/>)}
    </section>
  );
}

/* ---------- TOC with active section ---------- */
function TOC({ sections }) {
  const [active, setActive] = useState(sections[0]?.id);
  useEffect(()=>{
    const handler = () => {
      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < 140) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [sections]);

  return (
    <aside className="toc" aria-label="On this page">
      <div className="toc-label">On this page</div>
      <ul>
        {sections.map(s => (
          <li key={s.id}>
            <a href={"#"+s.id} className={active===s.id ? "active" : ""}>{s.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/* ---------- SEO Hero ---------- */
function SEOHero({ page }) {
  return (
    <section className="seo-hero">
      <div className="grid-bg" aria-hidden="true"></div>
      <div className="rail">
        <div className="crumb">
          <a href="FeaturePin Landing.html">FeaturePin</a>
          <span className="sep">/</span>
          {page.crumb.slice(0, -1).map((c, i) => (
            <React.Fragment key={i}>
              <a href="#">{c}</a>
              <span className="sep">/</span>
            </React.Fragment>
          ))}
          <span className="here">{page.crumb[page.crumb.length-1]}</span>
        </div>
        <div style={{marginTop: 22}}>
          <span className="kind-pill"><span className="dot" style={{width: 6, height: 6, borderRadius: 99, background: "var(--accent)"}}></span>{page.kind}</span>
        </div>
        <h1>{page.h1prefix} <span className="accent">{page.h1accent}</span>.</h1>
        <p className="lede">{page.lede}</p>
        <div className="meta">
          {page.meta.map(([k, v], i) => (
            <span key={i}><strong>{k}</strong> · {v}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Related ---------- */
function Related({ items, kind }) {
  return (
    <section className="related">
      <div className="rail">
        <div className="section-head" style={{marginBottom: 0}}>
          <div className="eyebrow">Keep reading</div>
          <h2 style={{fontSize: "clamp(28px, 3.4vw, 40px)"}}>Related {kind === "Guide" ? "guides" : "pages"}.</h2>
        </div>
        <div className="related-grid">
          {items.map((r, i) => (
            <a key={i} className="related-card" href="#">
              <div className="related-kind">{r.kind}</div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
              <div className="arr-row">Read <SharedIc.arr/></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA (compact) ---------- */
function SEOFinalCTA() {
  return (
    <section className="final" id="cta">
      <div className="rail final-inner">
        <h2>Your next feature deserves to be seen.</h2>
        <p>Start for free. No credit card required.</p>
        <a className="btn btn-primary btn-lg" href="#cta">Start for free <span className="arr"><SharedIc.arr/></span></a>
      </div>
    </section>
  );
}

/* ---------- App ---------- */
function SEOApp() {
  const [tweaks, setTweak] = useTweaks(SEO_TWEAK_DEFAULTS);

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", tweaks.theme);
    document.documentElement.setAttribute("data-accent", tweaks.accent);
  }, [tweaks.theme, tweaks.accent]);

  const page = PAGES[tweaks.pageType] || PAGES["use-case"];
  const related = RELATED[tweaks.pageType] || RELATED["use-case"];
  const Section = tweaks.format === "modular" ? ModularSection : ProseSection;

  // Force long-form for "resource" — modular doesn't make sense for an article
  const effectiveSection = tweaks.pageType === "resource" ? ProseSection : Section;

  return (
    <div data-screen-label={"SEO — " + page.kind}>
      <SharedNav/>
      <main>
        <SEOHero page={page}/>
        <div className="seo-body">
          <div className="rail seo-grid">
            <article className="prose">
              <p style={{fontSize: "18.5px", color: "var(--fg)", lineHeight: 1.55, marginBottom: "2em"}}>
                {page.intro}
              </p>
              {page.sections.map(s => React.createElement(effectiveSection, { key: s.id, section: s }))}
            </article>
            <TOC sections={page.sections}/>
          </div>
        </div>
        <Related items={related} kind={page.kind}/>
        <SEOFinalCTA/>
      </main>
      <SharedFooter/>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Page type">
          <TweakRadio value={tweaks.pageType} onChange={(v)=>setTweak("pageType", v)}
            options={[
              {value:"use-case", label:"Use case"},
              {value:"industry", label:"Industry"},
              {value:"comparison", label:"Compare"},
              {value:"resource", label:"Guide"},
            ]} />
        </TweakSection>
        <TweakSection title="Format">
          <TweakRadio value={tweaks.format} onChange={(v)=>setTweak("format", v)}
            options={[
              {value:"long-form", label:"Long-form"},
              {value:"modular", label:"Modular"},
            ]} />
        </TweakSection>
        <TweakSection title="Theme">
          <TweakRadio value={tweaks.theme} onChange={(v)=>setTweak("theme", v)}
            options={[{value:"dark", label:"Dark"}, {value:"light", label:"Light"}]} />
        </TweakSection>
        <TweakSection title="Accent">
          <TweakRadio value={tweaks.accent} onChange={(v)=>setTweak("accent", v)}
            options={[{value:"green", label:"Green"}, {value:"cyan", label:"Cyan"}, {value:"orange", label:"Orange"}]} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<SEOApp/>);
