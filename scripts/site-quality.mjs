import fs from 'node:fs'
import path from 'node:path'

export const origin = 'https://featurepin.com'

export function sitemapPaths(xml) {
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
  const errors = []
  if (!locations.length) errors.push('sitemap has no URLs')
  if (new Set(locations).size !== locations.length) errors.push('sitemap has duplicate URLs')
  for (const location of locations) {
    if (!location.startsWith(`${origin}/`)) errors.push(`foreign sitemap URL: ${location}`)
  }
  return { paths: locations.map((location) => location.slice(origin.length)), errors }
}

export function checkPublicFiles(files) {
  const errors = []
  if (!/User-agent:\s*\*/i.test(files.robots) || !/Allow:\s*\//i.test(files.robots)) errors.push('robots.txt blocks discovery')
  if (!files.robots.includes(`Sitemap: ${origin}/sitemap.xml`)) errors.push('robots.txt sitemap is missing')
  if (!files.llms.includes(`${origin}/`)) errors.push('llms.txt has no home link')
  const sitemap = sitemapPaths(files.sitemap)
  return [...errors, ...sitemap.errors]
}

export function checkCommercialClaims(html) {
  const visible = html.replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ')
  const errors = []
  for (const claim of ['Up to 1K MAU', 'Up to 10K MAU', 'Up to 25K MAU', '$29', '$79']) {
    if (!visible.includes(claim)) errors.push(`home: pricing claim missing: ${claim}`)
  }
  return errors
}

export function checkHtml(html, route, knownPaths, publicDir) {
  const errors = []
  if (html.includes('googletagmanager.com/gtag/js')) errors.push(`${route}: analytics loader prerendered before consent`)
  const visible = html.replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '')
  const count = (pattern) => [...visible.matchAll(pattern)].length
  for (const [name, pattern] of [
    ['title', /<title\b/gi], ['description', /<meta\s+name="description"/gi],
    ['main', /<main\b/gi], ['h1', /<h1\b/gi], ['canonical', /<link\s+rel="canonical"/gi],
  ]) {
    if (count(pattern) !== 1) errors.push(`${route}: expected one ${name}`)
  }
  const canonical = visible.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)?.[1]
  if (canonical !== `${origin}${route}`) errors.push(`${route}: wrong canonical ${canonical ?? 'missing'}`)
  if (/<p\b[^>]*>(?:(?!<\/p>)[\s\S])*<p\b/i.test(visible)) errors.push(`${route}: nested paragraph`)
  if (/<a\b[^>]*>(?:(?!<\/a>)[\s\S])*<a\b/i.test(visible)) errors.push(`${route}: nested link`)
  for (const [, href] of visible.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue
    const url = new URL(href, origin)
    if (url.origin !== origin) continue
    const linkedPath = url.pathname
    if (!knownPaths.has(linkedPath) && !fs.existsSync(path.join(publicDir, linkedPath)) && linkedPath !== '/icon.svg' && !linkedPath.startsWith('/_next/')) {
      errors.push(`${route}: broken internal link ${href}`)
    }
  }
  for (const [tag] of visible.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt="[^"]*"/.test(tag)) errors.push(`${route}: image without alt`)
  }
  const ids = [...visible.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
  for (const id of new Set(ids.filter((value, index) => ids.indexOf(value) !== index))) {
    errors.push(`${route}: duplicate id ${id}`)
  }
  return errors
}
