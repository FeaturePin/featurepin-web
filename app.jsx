/* FeaturePin — landing page */
const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "cyan",
  "heroVariant": "mockup"
}/*EDITMODE-END*/;

/* ---------- tiny inline icons (sharp, geometric — never illustrative) ---------- */
const Ic = {
  arr: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" {...p}><path d="M3 8h10M9 4l4 4-4 4"/></svg>,
  pin: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="3.2" y="3.2" width="9.6" height="9.6" rx="1.6" transform="rotate(45 8 8)"/><circle cx="8" cy="8" r="1.6" fill="currentColor" stroke="none"/></svg>,
  modal: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="2.5" y="3.5" width="11" height="9" rx="1.2"/><path d="M2.5 6.5h11"/></svg>,
  banner: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="2" y="4" width="12" height="3" rx="0.6"/><rect x="2" y="9" width="8" height="1.4" rx="0.4" fill="currentColor" stroke="none"/><rect x="2" y="11.5" width="11" height="1.4" rx="0.4" fill="currentColor" stroke="none"/></svg>,
  tip: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 4.5h10v6H8.5L6 13v-2.5H3z"/></svg>,
  bolt: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" {...p}><path d="M9 1L3 9h4l-1 6 6-8H8l1-6z"/></svg>,
  target: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="3"/><circle cx="8" cy="8" r="0.8" fill="currentColor"/></svg>,
  check: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" {...p}><path d="M3 8.5l3 3 7-7"/></svg>,
};

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="nav">
      <div className="rail nav-inner">
        <a href="#top" className="logo">
          <span className="logo-mark" aria-hidden="true"></span>
          <span>FeaturePin</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a className="nav-link" href="#pricing">Pricing</a>
          <a className="btn btn-primary" href="#cta">Start for free</a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero({ variant }) {
  return (
    <section className="hero" id="top">
      <div className="grid-bg" aria-hidden="true"></div>
      <div className="rail hero-grid">
        <div>
          <div className="eyebrow">In-app announcements &amp; nudges</div>
          <h1 style={{ marginTop: 18 }}>
            You shipped it.<br/>
            <span className="accent">Now make sure they use it.</span>
          </h1>
          <p className="lede hero-sub">
            Most features go unnoticed — not because they're bad, but because nobody told your users. FeaturePin fixes that in 5 minutes.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary btn-lg" href="#cta">Start for free <span className="arr"><Ic.arr/></span></a>
            <a className="btn btn-ghost btn-lg" href="#how">See how it works</a>
          </div>
          <div className="hero-foot">
            <span className="dot"></span>
            <span>No credit card required.</span>
          </div>
        </div>

        <div>
          {variant === "mockup" ? <HeroMockup/> : variant === "stat" ? <HeroStat/> : <HeroNudge/>}
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="mockup" role="img" aria-label="Product mockup showing an in-app announcement">
      <div className="mockup-bar">
        <span className="tl"></span><span className="tl"></span><span className="tl"></span>
        <span className="mockup-url">app.yoursaas.com/dashboard</span>
      </div>
      <div className="mockup-body">
        <div className="fake-app">
          <div className="fake-side">
            <div className="item active" style={{width:"80%"}}/>
            <div className="item" style={{width:"60%"}}/>
            <div className="item" style={{width:"75%"}}/>
            <div className="item" style={{width:"50%"}}/>
            <div className="item" style={{width:"65%"}}/>
          </div>
          <div className="fake-main">
            <div className="fake-row" style={{width:"40%", height: 16}}/>
            <div className="fake-row tall"/>
            <div className="fake-row short"/>
            <div className="fake-row" style={{width:"80%"}}/>
            <div className="fake-row short"/>
          </div>
        </div>

        <div className="pin-modal">
          <span className="pin-tag"><Ic.pin/> New</span>
          <h4>Bulk export, finally.</h4>
          <p>Select up to 1,000 records and export as CSV in one click.</p>
          <div className="row">
            <button className="pin-btn-primary">Try it</button>
            <button className="pin-btn-ghost">Later</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroStat() {
  return (
    <div className="mockup" role="img" aria-label="Stat card">
      <div className="mockup-bar">
        <span className="tl"></span><span className="tl"></span><span className="tl"></span>
        <span className="mockup-url">amplitude.com / feature-x</span>
      </div>
      <div className="mockup-body" style={{padding: 36}}>
        <div className="amp-title" style={{marginBottom: 8}}>Adoption — feature_x</div>
        <div className="amp-stat" style={{alignItems: "baseline", marginTop: 12}}>
          <div className="amp-num">12<span className="pct">%</span></div>
        </div>
        <div className="amp-sub">3 weeks since launch · 88% never opened it</div>
        <div className="amp-bars" style={{marginTop: 24}}>
          {[14,18,11,15,9,12,10,13,8,11,12,12].map((h,i)=>(
            <div key={i} style={{height: h+"%"}}/>
          ))}
        </div>
        <div style={{marginTop: 18, display:"flex", alignItems:"center", gap: 10}}>
          <span className="pin-tag" style={{margin: 0}}><Ic.pin/> Pin it</span>
          <span style={{fontSize: 13, color: "var(--fg-muted)"}}>→ adoption climbs to 47% in 9 days</span>
        </div>
      </div>
    </div>
  );
}

function HeroNudge() {
  return (
    <div className="mockup" role="img" aria-label="Nudge tooltip mockup">
      <div className="mockup-bar">
        <span className="tl"></span><span className="tl"></span><span className="tl"></span>
        <span className="mockup-url">app.yoursaas.com/billing</span>
      </div>
      <div className="mockup-body">
        <div className="fake-app">
          <div className="fake-side">
            <div className="item" style={{width:"80%"}}/>
            <div className="item" style={{width:"60%"}}/>
            <div className="item active" style={{width:"75%"}}/>
            <div className="item" style={{width:"50%"}}/>
          </div>
          <div className="fake-main">
            <div className="fake-row" style={{width:"40%", height: 16}}/>
            <div className="fake-row tall"/>
            <div className="fake-row short"/>
            <div className="fake-row"/>
          </div>
        </div>
        <div className="nudge-tip">
          You haven't tried bulk export yet. 30 seconds — promise.
        </div>
      </div>
    </div>
  );
}

/* ---------- Pain ---------- */
function Pain() {
  return (
    <section className="pain">
      <div className="rail pain-grid">
        <div>
          <div className="eyebrow" style={{marginBottom: 16}}>The problem</div>
          <h2>Sound familiar?</h2>
          <p className="pain-body" style={{marginTop: 28}}>
            You open Amplitude three weeks after launch.{" "}
            <span className="bad">Feature adoption: 12%.</span>{" "}
            Your team spent a month on it. Nobody knows it exists.
          </p>
        </div>
        <AmpCard/>
      </div>
    </section>
  );
}

function AmpCard() {
  // 12 weekly bars with low adoption pattern
  const bars = [22, 14, 9, 11, 13, 10, 12, 11, 13, 10, 12, 11];
  const max = 30;
  return (
    <div className="amp-card">
      <div className="amp-head">
        <div className="amp-title">analytics / feature_x</div>
        <div className="amp-pill">3 WEEKS</div>
      </div>
      <div className="amp-stat">
        <div className="amp-num">12<span className="pct">%</span></div>
        <div className="amp-delta">↓ vs goal 60%</div>
      </div>
      <div className="amp-sub">Adoption rate · weekly · last 12 weeks</div>
      <div className="amp-bars">
        {bars.map((b,i)=>(
          <div key={i} style={{
            height: (b/max*100)+"%",
            background: i === bars.length-1 ? "var(--accent)" : undefined,
          }}/>
        ))}
      </div>
    </div>
  );
}

/* ---------- Solution ---------- */
function Solution() {
  return (
    <section className="solution" id="solution">
      <div className="rail">
        <div className="section-head">
          <div className="eyebrow">What it does</div>
          <h2>FeaturePin does two things.<br/>Both matter.</h2>
        </div>

        <div className="two-col">
          <div className="feat-card">
            <div className="feat-head">
              <span className="feat-icon"><Ic.pin/></span>
              <h3>Announce</h3>
            </div>
            <p>Tell your users what's new. Modal, banner, or tooltip. No engineering required.</p>
            <div className="feat-visual">
              <div className="types-row">
                <div className="type-chip active">
                  <span className="badge"><Ic.modal/></span>
                  <span>Modal · centered with overlay</span>
                </div>
                <div className="type-chip">
                  <span className="badge"><Ic.banner/></span>
                  <span>Banner · top of viewport</span>
                </div>
                <div className="type-chip">
                  <span className="badge"><Ic.tip/></span>
                  <span>Tooltip · anchored to element</span>
                </div>
              </div>
            </div>
          </div>

          <div className="feat-card">
            <div className="feat-head">
              <span className="feat-icon"><Ic.target/></span>
              <h3>Nudge</h3>
            </div>
            <p>Detect users who haven't tried a feature and reach them automatically. Set the rule once, FeaturePin does the rest.</p>
            <div className="feat-visual">
              <div className="rule">
                <span className="op">if</span>
                <span className="tk">user</span>
                <span className="op">has not visited</span>
                <span className="tk acc">/billing/exports</span>
                <span className="op">in</span>
                <span className="tk">14 days</span>
                <br/>
                <span className="op">→ show</span>
                <span className="tk acc">tooltip</span>
                <span className="op">on</span>
                <span className="tk">#export-button</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
function How() {
  const [seg, setSeg] = useState("all");
  return (
    <section className="how" id="how">
      <div className="rail">
        <div className="section-head">
          <div className="eyebrow">How it works</div>
          <h2>Up and running in 5 minutes.</h2>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-num">01 · SEE IT WORK</div>
            <h3>Drop a URL. Get 10 ready announcements.</h3>
            <p>Give us your features or pricing page URL. We generate 10 ready-to-publish announcements and nudges instantly.</p>
            <div className="step-visual">
              <div style={{display:"flex", gap:8, alignItems:"center"}}>
                <div className="code" style={{flex: 1, padding: "8px 10px", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis"}}>
                  <span className="c">https://</span>yoursaas.com/whats-new
                </div>
                <span className="pin-btn-primary" style={{padding:"8px 12px", cursor:"default", userSelect:"none"}}>Generate</span>
              </div>
              <div style={{marginTop: 12, display:"flex", flexDirection:"column", gap: 6}}>
                {["Bulk export, finally.", "Custom roles for your team.", "Slack integration is here."].map((t, i)=>(
                  <div key={i} style={{display:"flex", alignItems:"center", gap:8, fontSize: 12.5, color: "var(--fg-muted)"}}>
                    <span style={{color:"var(--accent)"}}><Ic.check/></span>
                    {t}
                  </div>
                ))}
                <div style={{fontSize: 11.5, color:"var(--fg-dim)", fontFamily:"var(--mono)", marginTop: 4}}>+ 7 more</div>
              </div>
            </div>
          </div>

          <div className="step">
            <div className="step-num">02 · INSTALL</div>
            <h3>Paste one snippet into your product. That's it.</h3>
            <p>One line of JavaScript. Same model as Intercom. Engineering involvement: 60 seconds.</p>
            <div className="step-visual">
              <pre className="code"><span className="c">{"// add to <head>"}</span>{"\n"}<span className="k">{"<script "}</span>src=<span className="s">"https://cdn.featurepin.com/v1.js"</span>{" "}data-key=<span className="s">"pk_live_…"</span><span className="k">{"></script>"}</span></pre>
            </div>
          </div>

          <div className="step">
            <div className="step-num">03 · SHIP</div>
            <h3>Launch to all users or a specific segment.</h3>
            <p>Watch the adoption move. Impressions, clicks, dismissals — in one place.</p>
            <div className="step-visual">
              <div className="seg" style={{marginBottom: 14}}>
                <div className={seg==="all"?"on":""} onClick={()=>setSeg("all")}>All users</div>
                <div className={seg==="paid"?"on":""} onClick={()=>setSeg("paid")}>Paid plans</div>
                <div className={seg==="new"?"on":""} onClick={()=>setSeg("new")}>Signed up &lt; 30d</div>
              </div>
              <div className="adoption-line">
                <span>adoption</span>
                <span className="num">{seg==="all"?"47%":seg==="paid"?"62%":"31%"}</span>
                <span>↑ in 9 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  const plans = [
    { name: "Free",    price: "$0",   per: "forever",   mau: "Up to 1,000 monthly active users.\nAll features.\nFeaturePin branding.", cta: "Start for free", primary: false },
    { name: "Grow",    price: "$29",  per: "per month", mau: "Up to 10,000 monthly active users.\nNo branding.", cta: "Start for free", primary: true,  ribbon: "Recommended" },
    { name: "Scale",   price: "$79",  per: "per month", mau: "Up to 25,000 monthly active users.", cta: "Start for free", primary: false },
    { name: "Enterprise", price: "Let's talk", per: "", mau: "25,000+ monthly active users.\nCustom terms.", cta: "Get in touch", primary: false },
  ];
  return (
    <section className="pricing" id="pricing">
      <div className="rail">
        <div className="section-head">
          <div className="eyebrow">Pricing</div>
          <h2>Honest pricing. No surprises.</h2>
        </div>

        <div className="plans">
          {plans.map((p)=>(
            <div key={p.name} className={"plan" + (p.primary?" featured":"")}>
              {p.ribbon && <span className="ribbon">{p.ribbon}</span>}
              <div className="plan-name">{p.name}</div>
              <div className="plan-price">
                <span className="amt">{p.price}</span>
                {p.per && <span className="per">{p.per}</span>}
              </div>
              <div className="plan-mau">
                {p.mau.split("\n").map((l,i)=>(<div key={i}>{l}</div>))}
              </div>
              <div className="plan-cta">
                <a className={"btn " + (p.primary?"btn-primary":"btn-ghost")} href="#cta">{p.cta}</a>
              </div>
            </div>
          ))}
        </div>

        <p className="pricing-foot">
          No trials. No demos. No negotiations. Start free, upgrade when you grow.
        </p>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    { q: "What's a MAU?", a: "A monthly active user is anyone who logs into your product at least once a month." },
    { q: "Do I need to involve engineering?", a: "Just once, to paste a one-line snippet. After that, you're on your own." },
    { q: "Can I cancel anytime?", a: "Yes. No contracts, no commitments." },
    { q: "What happens if I exceed my MAU limit?", a: "We'll let you know. You won't get cut off without warning." },
    { q: "Why not build it ourselves with AI?", a: "You could. It would take 3 to 4 weeks of engineering time, and then someone has to maintain it. FeaturePin is running in 5 minutes — and comes with something you can't build alone: adoption benchmarks by industry vertical, so you know if your 12% is good or terrible compared to products like yours." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="faq" id="faq">
      <div className="rail faq-grid">
        <div>
          <div className="eyebrow" style={{marginBottom: 16}}>FAQ</div>
          <h2>Questions.</h2>
          <p className="lede" style={{marginTop: 22}}>
            Five short answers. If something's missing, email us. We answer within a day.
          </p>
        </div>
        <div className="faq-list">
          {items.map((it, i)=>(
            <div key={i} className={"faq-item" + (open === i ? " open" : "")}>
              <button className="faq-q" onClick={()=> setOpen(open===i ? -1 : i)} aria-expanded={open===i}>
                <span>{it.q}</span>
                <span className="plus" aria-hidden="true">+</span>
              </button>
              <div className="faq-a"><div style={{paddingTop: 4}}>{it.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="final" id="cta">
      <div className="rail final-inner">
        <h2>Your next feature deserves to be seen.</h2>
        <p>Start for free. No credit card required.</p>
        <a className="btn btn-primary btn-lg" href="#cta">Start for free <span className="arr"><Ic.arr/></span></a>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="rail footer-inner">
        <div className="logo" style={{fontSize: 14}}>
          <span className="logo-mark" aria-hidden="true"></span>
          <span>FeaturePin</span>
        </div>
        <div>© 2026 FeaturePin. All rights reserved.</div>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#docs">Docs</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- App ---------- */
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", tweaks.theme);
    document.documentElement.setAttribute("data-accent", tweaks.accent);
  }, [tweaks.theme, tweaks.accent]);

  return (
    <div data-screen-label="Landing">
      <Nav/>
      <main>
        <Hero variant={tweaks.heroVariant}/>
        <Pain/>
        <Solution/>
        <How/>
        <Pricing/>
        <FAQ/>
        <FinalCTA/>
      </main>
      <Footer/>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Theme">
          <TweakRadio value={tweaks.theme} onChange={(v)=>setTweak("theme", v)}
            options={[{value:"dark", label:"Dark"}, {value:"light", label:"Light"}]} />
        </TweakSection>
        <TweakSection title="Accent">
          <TweakRadio value={tweaks.accent} onChange={(v)=>setTweak("accent", v)}
            options={[{value:"green", label:"Green"}, {value:"cyan", label:"Cyan"}, {value:"orange", label:"Orange"}]} />
        </TweakSection>
        <TweakSection title="Hero visual">
          <TweakRadio value={tweaks.heroVariant} onChange={(v)=>setTweak("heroVariant", v)}
            options={[{value:"mockup", label:"Modal"}, {value:"nudge", label:"Nudge"}, {value:"stat", label:"Stat"}]} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
