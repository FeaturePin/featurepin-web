import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ALTERNATIVE_PAGES, ALTERNATIVE_SLUGS } from '@/data/seo-pages'
import SeoPageTemplate from '@/components/SeoPage'

export function generateStaticParams() {
  return ALTERNATIVE_SLUGS.map(competitor => ({ competitor }))
}

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }): Promise<Metadata> {
  const { competitor } = await params
  const page = ALTERNATIVE_PAGES[competitor]
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.canonical },
  }
}

export default async function AlternativePage({ params }: { params: Promise<{ competitor: string }> }) {
  const { competitor } = await params
  const page = ALTERNATIVE_PAGES[competitor]
  if (!page) notFound()
  return <SeoPageTemplate page={page} />
}
