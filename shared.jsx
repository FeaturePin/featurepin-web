const SharedIc = {
  arr: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" {...p}><path d="M3 8h10M9 4l4 4-4 4"/></svg>,
  pin: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="3.2" y="3.2" width="9.6" height="9.6" rx="1.6" transform="rotate(45 8 8)"/><circle cx="8" cy="8" r="1.6" fill="currentColor" stroke="none"/></svg>,
  info: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><circle cx="8" cy="8" r="6"/><path d="M8 7v4M8 5v0.5"/></svg>,
};

const SEO_FOOTER_LINKS = [
  { href: "/feature-adoption-nudges/", label: "Feature adoption nudges" },
  { href: "/in-app-announcements/", label: "In-app announcements" },
  { href: "/featurepin-vs-userguiding/", label: "FeaturePin vs UserGuiding" },
  { href: "/featurepin-vs-beamer/", label: "FeaturePin vs Beamer" },
  { href: "/featurepin-for-fintech-saas/", label: "FeaturePin for fintech SaaS" },
  { href: "/resources/feature-adoption-guide/", label: "Feature adoption guide" },
];

function SharedNav() {
  return (
    <header className="nav">
      <div className="rail nav-inner">
        <a href="/" className="logo">
          <span className="logo-mark" aria-hidden="true"></span>
          <span>FeaturePin</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a className="nav-link" href="/#pricing">Pricing</a>
          <a className="nav-link" href="/resources/feature-adoption-guide/">Resources</a>
          <a className="nav-link" href="https://app.featurepin.com/login">Log in</a>
          <a className="btn btn-primary" href="https://app.featurepin.com/signup">Start for free</a>
        </nav>
      </div>
    </header>
  );
}

function SharedFooter() {
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
            <a href="/#pricing">Pricing</a>
          </div>
          <div className="footer-group">
            <div className="footer-label">Industries</div>
            <a href="/featurepin-for-fintech-saas/">Fintech SaaS</a>
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
          </div>
        </div>
        <div className="footer-meta">© 2026 FeaturePin. All rights reserved.</div>
      </div>
    </footer>
  );
}

Object.assign(window, { SharedNav, SharedFooter, SharedIc, SEO_FOOTER_LINKS });
