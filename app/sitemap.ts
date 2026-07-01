import type { MetadataRoute } from 'next'
import { LOCALES } from '@/content/types'
import { experiencesEn } from '@/content/experiences.en'
import { SITE_URL } from '@/lib/site'

// Emit a static sitemap.xml at build time (required with `output: export`).
export const dynamic = 'force-static'

// A route that exists once per locale. `path` is the suffix after /<locale>/
// (empty string = the localized homepage).
type Route = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const STATIC_ROUTES: Route[] = [
  { path: '', changeFrequency: 'monthly', priority: 1.0 },
  { path: 'vita', changeFrequency: 'monthly', priority: 0.8 },
  { path: 'approach', changeFrequency: 'monthly', priority: 0.8 },
  { path: 'questions', changeFrequency: 'monthly', priority: 0.8 },
  { path: 'inspiration', changeFrequency: 'monthly', priority: 0.6 },
  { path: 'legal/notice', changeFrequency: 'yearly', priority: 0.2 },
  { path: 'legal/privacy', changeFrequency: 'yearly', priority: 0.2 },
]

// The experiences database renders one page per slug in every locale.
const EXPERIENCE_ROUTES: Route[] = experiencesEn.map((exp) => ({
  path: `experiences/${exp.slug}`,
  changeFrequency: 'monthly',
  priority: 0.7,
}))

// Absolute, trailing-slashed URL matching next.config `trailingSlash: true`.
function url(locale: string, path: string): string {
  return `${SITE_URL}/${locale}${path ? `/${path}` : ''}/`
}

// hreflang cluster: every locale variant of a page plus an x-default → English.
function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const locale of LOCALES) languages[locale] = url(locale, path)
  languages['x-default'] = url('en', path)
  return languages
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [...STATIC_ROUTES, ...EXPERIENCE_ROUTES].flatMap(
    ({ path, changeFrequency, priority }) =>
      LOCALES.map((locale) => ({
        url: url(locale, path),
        lastModified,
        changeFrequency,
        priority,
        alternates: { languages: languageAlternates(path) },
      })),
  )
}
