import CookieSettingsLink from './CookieSettingsLink'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="rail footer-shell">
        <div className="footer-brand">
          <div className="logo" style={{ fontSize: 14 }}>
            <span className="logo-mark" aria-hidden="true"></span>
            <span>FeaturePin</span>
          </div>
          <p>The in-app announcement and nudge tool for SaaS teams that want adoption without enterprise bloat.</p>
        </div>
        <div className="footer-nav">
          <div className="footer-group">
            <div className="footer-label">Product</div>
            <a href="/all-features/">All features</a>
            <a href="/feature-adoption-nudges/">Feature adoption nudges</a>
            <a href="/in-app-announcements/">In-app announcements</a>
            <a href="/campaign-analytics/">Campaign analytics</a>
            <a href="/#pricing">Pricing</a>
          </div>
          <div className="footer-group">
            <div className="footer-label">Industries</div>
            <a href="/featurepin-for-fintech-saas/">Fintech SaaS</a>
            <a href="/featurepin-for-hr-saas/">HR SaaS</a>
            <a href="/featurepin-for-marketing-saas/">Marketing SaaS</a>
            <a href="/featurepin-for-devtools/">DevTools</a>
          </div>
          <div className="footer-group">
            <div className="footer-label">Resources</div>
            <a href="/featurepin-vs-userguiding/">FeaturePin vs UserGuiding</a>
            <a href="/featurepin-vs-beamer/">FeaturePin vs Beamer</a>
            <a href="/resources/feature-adoption-guide/">Feature adoption guide</a>
          </div>
          <div className="footer-group">
            <div className="footer-label">Company</div>
            <a href="https://app.featurepin.com/login">Log in</a>
            <a href="https://app.featurepin.com/signup">Start for free</a>
            <a href="/privacy/">Privacy</a>
            <a href="/terms/">Terms</a>
            <CookieSettingsLink />
          </div>
        </div>
        <div className="footer-meta">© 2026 FeaturePin. All rights reserved.</div>
      </div>
    </footer>
  )
}
