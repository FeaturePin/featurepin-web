import Nav from './Nav'
import Footer from './Footer'
import TOC from './TOC'
import type { SeoPage, Block } from '@/data/seo-pages'

const InfoIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="8" r="6"/>
    <path d="M8 7v4M8 5v0.5"/>
  </svg>
)

const ArrIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
)

function RenderBlock({ block }: { block: Block }) {
  switch (block.kind) {
    case 'p': return <p>{block.text}</p>
    case 'h3': return <h3>{block.text}</h3>
    case 'ul': return <ul>{block.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    case 'ol': return <ol>{block.items.map((item, i) => <li key={i}>{item}</li>)}</ol>
    case 'blockquote': return <blockquote>{block.text}<cite>{block.cite}</cite></blockquote>
    case 'stat': return (
      <div className="callout-stat">
        <div className="num">{block.num}</div>
        <div className="label">{block.label}</div>
      </div>
    )
    case 'callout': return (
      <aside className="callout">
        <div className="callout-icon"><InfoIcon /></div>
        <div>
          <div className="callout-title">{block.title}</div>
          <p>{block.text}</p>
        </div>
      </aside>
    )
    case 'modular': return (
      <div className="modular-grid">
        {block.items.map(item => (
          <div key={item.num} className="modular-card">
            <h4><span className="num-tag">{item.num}</span> {item.title}</h4>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    )
    case 'solve': return (
      <div className="solve-block">
        <div className="solve-mark" aria-hidden="true"></div>
        <div>
          <div className="head">How FeaturePin solves it</div>
          <h4>Two features, one adoption job.</h4>
          <p>Announce releases inside your product. Nudge users who did not act. That is the whole system, and for small SaaS teams it is usually enough.</p>
          <div className="row">
            <a className="btn btn-primary" href="https://app.featurepin.com/signup">Start for free <span className="arr"><ArrIcon /></span></a>
            <a className="btn btn-ghost" href="/">See the product</a>
          </div>
        </div>
      </div>
    )
    default: return null
  }
}

export default function SeoPageTemplate({ page }: { page: SeoPage }) {
  return (
    <>
      <Nav />
      <main>
        <section className="seo-hero">
          <div className="grid-bg" aria-hidden="true"></div>
          <div className="rail">
            <div className="crumb">
              <a href="/">FeaturePin</a>
              <span className="sep">/</span>
              {page.crumb.slice(0, -1).map(c => (
                <span key={c}>{c}<span className="sep">/</span></span>
              ))}
              <span className="here">{page.crumb[page.crumb.length - 1]}</span>
            </div>
            <div style={{ marginTop: 22 }}>
              <span className="kind-pill">
                <span className="dot" style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--accent)', display: 'inline-block', marginRight: 6 }}></span>
                {page.kind}
              </span>
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

        <div className="seo-body">
          <div className="rail seo-grid">
            <article className="prose">
              <p style={{ fontSize: '18.5px', color: 'var(--fg)', lineHeight: 1.55, marginBottom: '2em' }}>
                {page.intro}
              </p>
              {page.sections.map(section => (
                <section key={section.id} id={section.id}>
                  <h2>{section.title}</h2>
                  {section.body.map((block, i) => <RenderBlock key={i} block={block} />)}
                </section>
              ))}
            </article>
            <TOC sections={page.sections} />
          </div>
        </div>

        <section className="related">
          <div className="rail">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <div className="eyebrow">Keep reading</div>
              <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 40px)' }}>
                Related {page.kind === 'Guide' ? 'guides' : 'pages'}.
              </h2>
            </div>
            <div className="related-grid">
              {page.related.map(item => (
                <a key={item.href} className="related-card" href={item.href}>
                  <div className="related-kind">{item.kind}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <div className="arr-row">Read <ArrIcon /></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="final" id="cta">
          <div className="rail final-inner">
            <h2>Your next feature deserves to be seen.</h2>
            <p>Start for free. No credit card required.</p>
            <a className="btn btn-primary btn-lg" href="https://app.featurepin.com/signup">
              Start for free <span className="arr"><ArrIcon /></span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
