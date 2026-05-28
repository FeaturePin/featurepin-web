import type { Metadata } from 'next'
import { PAGES } from '@/data/seo-pages'
import SeoPageTemplate from '@/components/SeoPage'

const page = PAGES['feature-adoption-guide']

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.canonical },
}

export default function FeatureAdoptionGuidePage() {
  return <SeoPageTemplate page={page} />
}
