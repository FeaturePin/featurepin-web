export default function Nav() {
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
  )
}
