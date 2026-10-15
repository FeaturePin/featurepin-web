import fs from 'node:fs'
import { checkPublicFiles, sitemapPaths } from './site-quality.mjs'

const read = (name) => fs.readFileSync(`public/${name}`, 'utf8')
const files = { robots: read('robots.txt'), sitemap: read('sitemap.xml'), llms: read('llms.txt') }
const errors = checkPublicFiles(files)
const routes = new Set(sitemapPaths(files.sitemap).paths)
for (const route of ['/', '/help/', '/privacy/', '/terms/', '/resources/getting-started/']) {
  if (!routes.has(route)) errors.push(`sitemap omits ${route}`)
}
const source = ['app/page.tsx', 'components/CookieConsent.tsx', 'components/GoogleAdsTag.tsx']
  .map((file) => fs.readFileSync(file, 'utf8')).join('\n')
for (const claim of ['Up to 1K MAU', 'Up to 10K MAU', 'Up to 25K MAU', '$29', '$79']) {
  if (!source.includes(claim)) errors.push(`pricing claim missing: ${claim}`)
}
if (!source.includes('cookieConsentUpdated') || !source.includes('hasAnalyticsConsent()')) errors.push('analytics consent gate missing')
if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}
console.log(`Public source checks passed (${routes.size} sitemap routes)`)
