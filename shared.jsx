/* Shared components: Nav, Footer, Icons */
const SharedIc = {
  arr: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" {...p}><path d="M3 8h10M9 4l4 4-4 4"/></svg>,
  pin: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}><rect x="3.2" y="3.2" width="9.6" height="9.6" rx="1.6" transform="rotate(45 8 8)"/><circle cx="8" cy="8" r="1.6" fill="currentColor" stroke="none"/></svg>,
  bolt: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" {...p}><path d="M9 1L3 9h4l-1 6 6-8H8l1-6z"/></svg>,
  info: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}><circle cx="8" cy="8" r="6"/><path d="M8 7v4M8 5v0.5"/></svg>,
  check: (p) => <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" {...p}><path d="M3 8.5l3 3 7-7"/></svg>,
};

function SharedNav({ activePath = "/" }) {
  return (
    <header className="nav">
      <div className="rail nav-inner">
        <a href="FeaturePin Landing.html" className="logo">
          <span className="logo-mark" aria-hidden="true"></span>
          <span>FeaturePin</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a className="nav-link" href="FeaturePin Landing.html#pricing">Pricing</a>
          <a className="nav-link" href="#docs">Docs</a>
          <a className="btn btn-primary" href="#cta">Start for free</a>
        </nav>
      </div>
    </header>
  );
}

function SharedFooter() {
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

Object.assign(window, { SharedNav, SharedFooter, SharedIc });
