/* FeaturePin — Auth (login / signup) — magic link */
const { useState, useEffect } = React;

const AUTH_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "cyan"
}/*EDITMODE-END*/;

// Page mode is set per-HTML-file via window.__AUTH_MODE ("login" | "signup")
const PAGE_MODE = window.__AUTH_MODE || "signup";

const Ic = {
  arr: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" {...p}><path d="M3 8h10M9 4l4 4-4 4"/></svg>,
  check: (p) => <svg viewBox="0 0 12 12" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" {...p}><path d="M2 6.5l2.5 2.5L10 3"/></svg>,
  mail: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="2" y="3.5" width="12" height="9" rx="1.5"/><path d="M2.5 4.5l5.5 4 5.5-4"/></svg>,
  user: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="8" cy="6" r="2.6"/><path d="M3 13.5c0-2.5 2.2-4 5-4s5 1.5 5 4"/></svg>,
  building: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="3" y="2.5" width="10" height="11" rx="0.8"/><path d="M5.5 5.5h1M9.5 5.5h1M5.5 8h1M9.5 8h1M5.5 10.5h1M9.5 10.5h1"/></svg>,
  inbox: (p) => <svg viewBox="0 0 16 16" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.2" {...p}><rect x="2" y="2.5" width="12" height="11" rx="1.5"/><path d="M2 9.5h3.5l1 2h3l1-2H14"/></svg>,
};

function App() {
  const [tweaks, setTweak] = useTweaks(AUTH_TWEAK_DEFAULTS);
  const [form, setForm] = useState({ company: "", name: "", email: "" });
  const [sent, setSent] = useState(false);

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", tweaks.theme);
    document.documentElement.setAttribute("data-accent", tweaks.accent);
  }, [tweaks.theme, tweaks.accent]);

  const isSignup = PAGE_MODE === "signup";
  const otherHref = isSignup ? "FeaturePin Login.html" : "FeaturePin Signup.html";

  const upd = (k) => (e) => setForm({...form, [k]: e.target.value});
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="auth-shell" data-screen-label={"Auth — " + (isSignup ? "Signup" : "Login")}>
      {/* Left: brand + pitch */}
      <aside className="auth-aside">
        <div className="grid-bg" aria-hidden="true"></div>
        <a href="FeaturePin Landing.html" className="auth-brand">
          <span className="logo-mark" aria-hidden="true"></span>
          <span>FeaturePin</span>
        </a>

        <div className="auth-aside-center">
          <div className="auth-pitch">
            <div className="eyebrow">In-app messaging for SaaS</div>
            <h2>Two things. <em>Done well.</em></h2>
            <p>Tell your users what's new. Nudge the ones who didn't notice. Running in 5 minutes — no sales call, no negotiation.</p>
            <ul className="auth-bullets">
              <li><Ic.check/><span>Free up to 1,000 monthly active users.</span></li>
              <li><Ic.check/><span>One snippet to install. Same model as Intercom.</span></li>
              <li><Ic.check/><span>Cancel anytime. No contracts, no commitments.</span></li>
            </ul>
          </div>

          <blockquote className="auth-quote">
            "We replaced Userguiding in an afternoon. Adoption on our last release jumped from 14% to 48% in nine days."
            <span className="who">— Maya R., Head of Product · Lattic.io</span>
          </blockquote>
        </div>
      </aside>

      {/* Right: form */}
      <main className="auth-main">
        <div className="auth-top">
          <a className="mobile-brand" href="FeaturePin Landing.html">
            <span className="logo-mark" aria-hidden="true"></span>
            <span>FeaturePin</span>
          </a>
          <span style={{marginLeft: "auto"}}>
            {isSignup ? "Already have an account?" : "New to FeaturePin?"}{" "}
            <a href={otherHref} style={{color:"var(--accent)", fontWeight: 500}}>
              {isSignup ? "Log in" : "Sign up free"}
            </a>
          </span>
        </div>

        <div className="auth-card">
          {sent ? (
            /* ── Check your email state ── */
            <div style={{textAlign: "center", padding: "12px 0 8px"}}>
              <div style={{color: "var(--accent)", marginBottom: 20}}>
                <Ic.inbox/>
              </div>
              <h1 style={{marginBottom: 12}}>Check your email.</h1>
              <p className="sub" style={{maxWidth: 340, margin: "0 auto 28px"}}>
                We've sent a magic link to <strong>{form.email}</strong>. Click it to {isSignup ? "activate your account" : "log in"}.
              </p>
              <p style={{fontSize: "13px", color: "var(--fg-muted)"}}>
                Didn't get it?{" "}
                <button type="button" onClick={()=>setSent(false)} style={{background:"none", border:"none", color:"var(--accent)", cursor:"pointer", fontWeight:500, fontSize:"13px", padding:0}}>
                  Send again
                </button>
              </p>
            </div>
          ) : (
            /* ── Form ── */
            <>
              <div className="eyebrow">{isSignup ? "Get started" : "Welcome back"}</div>
              <h1>{isSignup ? "Create your account." : "Log in to FeaturePin."}</h1>
              <p className="sub">
                {isSignup
                  ? "Free up to 1,000 monthly active users. No credit card required."
                  : "Enter your email and we'll send you a magic link."}
              </p>

              <form className="auth-form" onSubmit={submit} autoComplete="on" style={{marginTop: 28}}>
                {isSignup && (
                  <div className="field-row">
                    <div className="field">
                      <label htmlFor="company">COMPANY</label>
                      <div className="field-input has-icon">
                        <span className="lead"><Ic.building/></span>
                        <input id="company" name="company" type="text" placeholder="Acme Inc." value={form.company} onChange={upd("company")} autoComplete="organization" required/>
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="name">NAME</label>
                      <div className="field-input has-icon">
                        <span className="lead"><Ic.user/></span>
                        <input id="name" name="name" type="text" placeholder="Maya Reeves" value={form.name} onChange={upd("name")} autoComplete="name" required/>
                      </div>
                    </div>
                  </div>
                )}

                <div className="field">
                  <label htmlFor="email">EMAIL</label>
                  <div className="field-input has-icon">
                    <span className="lead"><Ic.mail/></span>
                    <input id="email" name="email" type="email" placeholder="you@company.com" value={form.email} onChange={upd("email")} autoComplete="email" required/>
                  </div>
                </div>

                <button className="btn btn-primary auth-submit" type="submit">
                  {isSignup ? "Create account" : "Send magic link"} <span className="arr"><Ic.arr/></span>
                </button>
              </form>

              {isSignup && (
                <p className="auth-legal">
                  By creating an account you agree to our <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>. We'll never email you marketing without asking first.
                </p>
              )}
            </>
          )}
        </div>

        <div className="auth-bottom-bar">
          <span>© 2026 FeaturePin</span>
          <span style={{display:"flex", gap: 18}}>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#docs">Docs</a>
          </span>
        </div>
      </main>

      <TweaksPanel title="Tweaks">
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

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
