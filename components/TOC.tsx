'use client'

import { useState, useEffect } from 'react'
import type { Section } from '@/data/seo-pages'

export default function TOC({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    const onScroll = () => {
      let current = sections[0]?.id
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (!el) continue
        if (el.getBoundingClientRect().top < 140) current = section.id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  return (
    <aside className="toc" aria-label="On this page">
      <div className="toc-label">On this page</div>
      <ul>
        {sections.map(s => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={active === s.id ? 'active' : ''}>{s.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
