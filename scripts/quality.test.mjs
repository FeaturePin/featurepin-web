import test from 'node:test'
import assert from 'node:assert/strict'
import { checkPublicFiles, checkHtml, sitemapPaths } from './site-quality.mjs'

test('sitemap rejects foreign and duplicate routes', () => {
  const xml = '<loc>https://featurepin.com/</loc><loc>https://featurepin.com/</loc><loc>https://bad.example/</loc>'
  assert.match(sitemapPaths(xml).errors.join(' '), /duplicate/)
  assert.match(sitemapPaths(xml).errors.join(' '), /foreign/)
})

test('public files reject missing robots sitemap and llms context', () => {
  const errors = checkPublicFiles({ robots: 'Disallow: /', sitemap: '', llms: '' })
  assert(errors.some((error) => error.includes('robots')))
  assert(errors.some((error) => error.includes('llms')))
})

test('built HTML catches canonical, structure and broken local links', () => {
  const html = '<title>Home</title><meta name="description" content="x"><main><h1>Hi</h1><a href="/missing/">Bad</a></main><link rel="canonical" href="https://featurepin.com/wrong/">'
  const errors = checkHtml(html, '/', new Set(['/']), 'public')
  assert(errors.some((error) => error.includes('canonical')))
  assert(errors.some((error) => error.includes('broken internal link')))
})

test('built HTML catches early analytics and repeated IDs', () => {
  const html = '<main id="copy"><h1 id="copy">Hi</h1></main><script src="https://www.googletagmanager.com/gtag/js?id=test"></script>'
  const errors = checkHtml(html, '/', new Set(['/']), 'public')
  assert(errors.some((error) => error.includes('before consent')))
  assert(errors.some((error) => error.includes('duplicate id')))
})
