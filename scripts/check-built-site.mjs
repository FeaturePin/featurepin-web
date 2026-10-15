import fs from 'node:fs'
import path from 'node:path'
import { checkCommercialClaims, checkHtml, sitemapPaths } from './site-quality.mjs'

const output = '.next/server/app'
if (!fs.existsSync(output)) throw new Error('Production HTML missing; run npm run build')
const xml = fs.readFileSync('public/sitemap.xml', 'utf8')
const knownPaths = new Set(sitemapPaths(xml).paths)
const errors = []
for (const route of knownPaths) {
  const relative = route === '/' ? 'index.html' : `${route.slice(1, -1)}.html`
  const file = path.join(output, relative)
  if (!fs.existsSync(file)) {
    errors.push(`${route}: prerendered HTML missing`)
    continue
  }
  const html = fs.readFileSync(file, 'utf8')
  errors.push(...checkHtml(html, route, knownPaths, 'public'))
  if (route === '/') errors.push(...checkCommercialClaims(html))
}
if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
console.log(`Built HTML checks passed (${knownPaths.size} routes)`)
