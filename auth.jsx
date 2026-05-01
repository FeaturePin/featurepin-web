/* FeaturePin — Auth (login / signup) */
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
  lock: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="3" y="7" width="10" height="6.5" rx="1.2"/><path d="M5 7V5a3 3 0 016 0v2"/></svg>,
  user: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><circle cx="8" cy="6" r="2.6"/><path d="M3 13.5c0-2.5 2.2-4 5-4s5 1.5 5 4"/></svg>,
  building: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="3" y="2.5" width="10" height="11" rx="0.8"/><path d="M5.5 5.5h1M9.5 5.5h1M5.5 8h1M9.5 8h1M5.5 10.5h1M9.5 10.5h1"/></svg>,
  google: (p) => <svg viewBox="0 0 16 16" width="14" height="14" {...p}><path fill="#4285F4" d="M14.7 8.16c0-.5-.04-.98-.13-1.45H8v2.74h3.76a3.21 3.21 0 01-1.4 2.11v1.75h2.27c1.33-1.22 2.07-3.02 2.07-5.15z"/><path fill="#34A853" d="M8 15c1.89 0 3.48-.62 4.64-1.69l-2.27-1.75c-.63.42-1.43.67-2.37.67-1.83 0-3.37-1.23-3.92-2.88H1.74v1.81A7 7 0 008 15z"/><path fill="#FBBC05" d="M4.08 9.35a4.2 4.2 0 010-2.7V4.84H1.74a7 7 0 000 6.32l2.34-1.81z"/><path fill="#EA4335" d="M8 4.07c1.03 0 1.96.35 2.69 1.04L12.7 3.1A7 7 0 001.74 4.84l2.34 1.81C4.63 5 6.17 4.07 8 4.07z"/></svg>,
  github: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" {...p}><path d="M8 0a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.39v-1.4c-2.22.48-2.7-1.07-2.7-1.07-.36-.92-.88-1.17-.88-1.17-.72-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.71 1.22 1.86.87 2.32.66.07-.51.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.6 7.6 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.28.82 2.15 0 3.07-1.87 3.74-3.65 3.94.29.25.54.74.54 1.5v2.22c0 .22.15.46.55.39A8 8 0 008 0z"/></svg>,
};

function pwScore(pw) {
  if (!pw) return 0;
  let s = 0;
  if (pw.length >= 8) s++;
  if (pw.length >= 12) s++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;
  if (/[0-9]/.test(pw) || /[^A-Za-z0-9]/.test(pw)) s++;
  return Math.min(s, 4);
}

function App() {
  const [tweaks, setTweak] = useTweaks(AUTH_TWEAK_DEFAULTS);
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ company: "", name: "", email: "", password: "" });

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", tweaks.theme);
    document.documentElement.setAttribute("data-accent", tweaks.accent);
  }, [tweaks.theme, tweaks.accent]);

  const isSignup = PAGE_MODE === "signup";
  const otherHref = isSignup ? "FeaturePin Login.html" : "FeaturePin Signup.html";
  const score = pwScore(form.password);

  const upd = (k) => (e) => setForm({...form, [k]: e.target.value});
  const submit = (e) => { e.preventDefault(); /* demo */ };

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
              {isSignup ? "Log in" : "Sign up"}
            </a>
          </span>
        </div>

        <div className="auth-card">
          <div className="eyebrow">{isSignup ? "Get started" : "Welcome back"}</div>
          <h1>{isSignup ? "Create your account." : "Log in to FeaturePin."}</h1>
          <p className="sub">
            {isSignup
              ? "Free up to 1,000 monthly active users. No credit card required."
              : "Pick up where you left off. Your dashboard, your nudges."}
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

            <div className="field">
              <label htmlFor="password">
                <span>PASSWORD</span>
                {!isSignup && <a href="#" style={{color:"var(--accent)", textDecoration:"none", fontFamily:"var(--sans)", textTransform:"none", letterSpacing:0, fontSize:"12.5px"}}>Forgot?</a>}
              </label>
              <div className="field-input has-icon">
                <span className="lead"><Ic.lock/></span>
                <input id="password" name="password" type={showPw ? "text" : "password"} placeholder={isSignup ? "At least 8 characters" : "••••••••"} value={form.password} onChange={upd("password")} autoComplete={isSignup ? "new-password" : "current-password"} required minLength={isSignup ? 8 : 1}/>
                <button type="button" className="toggle-pw" onClick={()=>setShowPw(!showPw)} aria-label="Toggle password visibility">
                  {showPw ? "HIDE" : "SHOW"}
                </button>
              </div>
              {isSignup && (
                <>
                  <div className="pw-strength" aria-hidden="true">
                    {[1,2,3,4].map(i=>(
                      <span key={i} className={i <= score ? "on" : ""}/>
                    ))}
                  </div>
                  <span className="hint">
                    {form.password.length === 0 ? "8+ chars · mix letters and numbers" :
                     score <= 1 ? "Weak — keep going" :
                     score === 2 ? "Okay — add length or symbols" :
                     score === 3 ? "Good" : "Strong"}
                  </span>
                </>
              )}
            </div>

            {!isSignup && (
              <div className="auth-row">
                <label><input type="checkbox" defaultChecked/> Remember me on this device</label>
              </div>
            )}

            <button className="btn btn-primary auth-submit" type="submit">
              {isSignup ? "Create account" : "Log in"} <span className="arr"><Ic.arr/></span>
            </button>
          </form>

          <div className="auth-divider">or continue with</div>
          <div className="sso-row">
            <button type="button" className="sso-btn"><Ic.google/> Google</button>
            <button type="button" className="sso-btn"><Ic.github/> GitHub</button>
          </div>

          {isSignup ? (
            <p className="auth-legal">
              By creating an account you agree to our <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>. We'll never email you marketing without asking first.
            </p>
          ) : (
            <p className="auth-foot" style={{marginTop: 24}}>
              Don't have an account? <a href="FeaturePin Signup.html">Start for free →</a>
            </p>
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
