import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LOCALES, type Locale } from '@/content/types'
import { getContent, isLocale } from '@/lib/i18n'
import { SITE_URL } from '@/lib/site'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LangSync } from '@/components/LangSync'

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const { meta } = getContent(locale)
  return {
    // `default` is used by the homepage (it inherits this layout's title), so it
    // shows the full localized title without being doubled by a template.
    // `template` re-applies the "| Matthias Flinterhoff" suffix to subpages.
    title: { default: meta.title, template: '%s | Matthias Flinterhoff' },
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', es: '/es', de: '/de' },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${locale}`,
      siteName: 'Matthias Flinterhoff',
      locale,
      type: 'website',
      images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Matthias Flinterhoff' }],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const content = getContent(locale as Locale)

  // Structured data (schema.org) describing the existing content in a form
  // search engines and answer engines can parse. All values are derived from
  // the localized content — nothing new is asserted here.
  const jobTitle = content.meta.title.split('|')[1]?.trim() ?? content.meta.title
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: 'Matthias Flinterhoff',
        url: `${SITE_URL}/${locale}/`,
        image: `${SITE_URL}/profile.jpg`,
        jobTitle,
        description: content.meta.description,
        email: 'mailto:hi@mflinterhoff.com',
        telephone: '+49 156 78402395',
        sameAs: ['https://www.linkedin.com/in/mflinterhoff/'],
        knowsLanguage: ['en', 'de', 'es'],
        knowsAbout: content.experiences.map((exp) => exp.name),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: 'Matthias Flinterhoff',
        description: content.meta.description,
        inLanguage: locale,
        author: { '@id': `${SITE_URL}/#person` },
        publisher: { '@id': `${SITE_URL}/#person` },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LangSync locale={locale as Locale} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {content.ui.skipToContent}
      </a>
      <div className="flex min-h-screen flex-col">
        <Header content={content} locale={locale as Locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer content={content} locale={locale as Locale} />
      </div>
    </>
  )
}
