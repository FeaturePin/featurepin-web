import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PAGES, SEO_SLUGS } from '@/data/seo-pages'
import SeoPageTemplate from '@/components/SeoPage'

export function generateStaticParams() {
  return SEO_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = PAGES[slug]
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.canonical },
  }
}

export default async function SeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = PAGES[slug]
  if (!page) notFound()
  return <SeoPageTemplate page={page} />
}
