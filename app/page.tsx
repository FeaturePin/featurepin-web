'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const Ic = {
  arr: (p: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" {...p}><path d="M3 8h10M9 4l4 4-4 4"/></svg>,
  pin: (p: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="3.2" y="3.2" width="9.6" height="9.6" rx="1.6" transform="rotate(45 8 8)"/><circle cx="8" cy="8" r="1.6" fill="currentColor" stroke="none"/></svg>,
  modal: (p: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="2.5" y="3.5" width="11" height="9" rx="1.2"/><path d="M2.5 6.5h11"/></svg>,
  banner: (p: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="2" y="4" width="12" height="3" rx="0.6"/><rect x="2" y="9" width="8" height="1.4" rx="0.4" fill="currentColor" stroke="none"/><rect x="2" y="11.5" width="11" height="1.4" rx="0.4" fill="currentColor" stroke="none"/></svg>,
  tip: (p: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><path d="M3 4.5h10v6H8.5L6 13v-2.5H3z"/></svg>,
  target: (p: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="3"/><circle cx="8" cy="8" r="0.8" fill="currentColor"/></svg>,
  check: (p: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" {...p}><path d="M3 8.5l3 3 7-7"/></svg>,
}

function Hero() {
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
            Most features go unnoticed — not because they&apos;re bad, but because nobody told your users. FeaturePin fixes that in 5 minutes.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary btn-lg" href="https://app.featurepin.com/signup">Start for free <span className="arr"><Ic.arr/></span></a>
            <a className="btn btn-ghost btn-lg" href="#how">See how it works</a>
          </div>
          <div className="hero-foot">
            <span className="dot"></span>
            <span>No credit card required.</span>
          </div>
        </div>
        <div>
          <HeroMockup/>
        </div>
      </div>
    </section>
  )
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
          <p className="pin-title">Bulk export, finally.</p>
          <p>Select up to 1,000 records and export as CSV in one click.</p>
          <div className="row">
            <button className="pin-btn-primary">Try it</button>
            <button className="pin-btn-ghost">Later</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Pain() {
  const bars = [22, 14, 9, 11, 13, 10, 12, 11, 13, 10, 12, 11]
  const max = 30
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
      </div>
    </section>
  )
}

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
            <p>Tell your users what&apos;s new. Modal, banner, or tooltip. No engineering required.</p>
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
            <p>Detect users who haven&apos;t tried a feature and reach them automatically. Set the rule once, FeaturePin does the rest.</p>
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
  )
}

function How() {
  const [seg, setSeg] = useState("all")
  return (
    <section className="how" id="how">
      <div className="rail">
        <div className="section-head">
          <div className="eyebrow">How it works</div>
          <h2>Up and running in 5 minutes.</h2>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-num">01 · INSTALL</div>
            <h3>Paste one snippet. Engineering involvement: 60 seconds.</h3>
            <p>One line of JavaScript. Same model as Intercom. Your dev does it once and never touches it again.</p>
            <div className="step-visual">
              <pre className="code"><span className="c">{"// add to <head>"}</span>{"\n"}<span className="k">{"<script "}</span>src=<span className="s">"https://sdk.featurepin.com/fp.js"</span>{" "}data-workspace-id=<span className="s">"YOUR_ID"</span><span className="k">{"></script>"}</span></pre>
            </div>
          </div>
          <div className="step">
            <div className="step-num">02 · CREATE</div>
            <h3>Drop your features URL. Get 10 ready-to-launch drafts.</h3>
            <p>Give us your changelog or features page. We generate 10 announcement drafts instantly. Pick, edit, done.</p>
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
            <div className="step-num">03 · SHIP</div>
            <h3>Launch to all users or a specific segment.</h3>
            <p>Watch the adoption move. Impressions, clicks, dismissals, all in one place.</p>
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
  )
}

function Pricing() {
  const plans = [
    { name: "Free",       price: "$0",         per: "forever",   cta: "Start for free", primary: false,
      items: ["Up to 1K MAU", "1 team member", "FeaturePin branding"] },
    { name: "Grow",       price: "$29",        per: "per month", cta: "Get started",    primary: true, ribbon: "Recommended",
      items: ["Up to 10K MAU", "5 team members", "Custom branding"] },
    { name: "Scale",      price: "$79",        per: "per month", cta: "Get started",    primary: false,
      items: ["Up to 25K MAU", "10 team members", "Custom branding"] },
    { name: "Enterprise", price: "Let's talk", per: "",          cta: "Contact us",     primary: false,
      items: ["Unlimited MAU", "Unlimited members", "Custom terms"] },
  ]
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
              <ul className="plan-items">
                {p.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <div className="plan-cta">
                <a className={"btn " + (p.primary?"btn-primary":"btn-ghost")} href="https://app.featurepin.com/signup">{p.cta}</a>
              </div>
            </div>
          ))}
        </div>
        <p className="pricing-foot">
          No trials. No demos. No negotiations. Start free, upgrade when you grow.
        </p>
      </div>
    </section>
  )
}

function FAQ() {
  const items = [
    { q: "What's a MAU?", a: "A monthly active user is anyone who loads a page in your product with FeaturePin installed — once in the last 30 days. Anonymous users count too." },
    { q: "Do I need to involve engineering?", a: "Just once, to paste a one-line snippet. After that, you're on your own." },
    { q: "Can I cancel anytime?", a: "Yes. No contracts, no commitments." },
    { q: "What happens if I exceed my MAU limit?", a: "We'll let you know. You won't get cut off without warning." },
    { q: "Why not build it ourselves with AI?", a: "You could. It would take 3 to 4 weeks of engineering time, and then someone has to maintain it. FeaturePin is running in 5 minutes — and every time you ship a feature, you spend zero minutes on tooling and all of them on the message." },
  ]
  const [open, setOpen] = useState(0)
  return (
    <section className="faq" id="faq">
      <div className="rail faq-grid">
        <div>
          <div className="eyebrow" style={{marginBottom: 16}}>FAQ</div>
          <h2>Questions.</h2>
          <p className="lede" style={{marginTop: 22}}>
            Five short answers. If something&apos;s missing, email us. We answer within a day.
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
  )
}

function FinalCTA() {
  return (
    <section className="final" id="cta">
      <div className="rail final-inner">
        <h2>Your next feature deserves to be seen.</h2>
        <p>Start for free. No credit card required.</p>
        <a className="btn btn-primary btn-lg" href="https://app.featurepin.com/signup">Start for free <span className="arr"><Ic.arr/></span></a>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Nav/>
      <main>
        <Hero/>
        <Pain/>
        <Solution/>
        <How/>
        <Pricing/>
        <FAQ/>
        <FinalCTA/>
      </main>
      <Footer/>
    </>
  )
}
