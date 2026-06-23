import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LOCALES, type Locale } from '@/content/types'
import { getContent, isLocale } from '@/lib/i18n'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { renderInline } from '@/components/RichText'

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
  return { title: getContent(locale).approach.title }
}

export default async function ApproachPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const content = getContent(locale as Locale)
  const { approach, ui } = content

  return (
    <article className="pb-24 sm:pb-32">
      <PageHeader locale={locale as Locale} backLabel={ui.backToHome} title={approach.title} intro={approach.intro} />
      <Container size="narrow" className="mt-12">
        <figure className="rounded-2xl border-l-4 border-accent bg-paper-soft p-6 dark:bg-ink-soft sm:p-8">
          <blockquote className="text-xl font-medium text-balance text-ink italic dark:text-paper">
            “{approach.quote.text}”
          </blockquote>
          <figcaption className="mt-3 font-mono text-sm text-ink/60 dark:text-paper/60">
            {approach.quote.author}
          </figcaption>
        </figure>
        <p className="mt-6 text-base/7 text-ink/75 dark:text-paper/75">{approach.quoteFollow}</p>

        <div className="mt-14 space-y-12">
          {approach.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-paper">{section.title}</h2>
              <p className="mt-4 text-base/7 text-ink/75 dark:text-paper/75">{renderInline(section.body)}</p>
              {section.tagline ? (
                <p className="mt-4 text-base/7 font-medium text-ink dark:text-paper">{renderInline(section.tagline)}</p>
              ) : null}
            </section>
          ))}
        </div>
      </Container>
    </article>
  )
}
