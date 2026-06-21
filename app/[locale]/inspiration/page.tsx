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
  return { title: getContent(locale).inspiration.title }
}

export default async function InspirationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const content = getContent(locale as Locale)
  const { inspiration, ui } = content

  return (
    <article className="pb-24 sm:pb-32">
      <PageHeader locale={locale as Locale} backLabel={ui.backToHome} title={inspiration.title} intro={inspiration.intro} />
      <Container size="narrow" className="mt-10">
        <img
          src="/cover.jpg"
          alt="Artwork by Kassandra Flinterhoff"
          className="aspect-[16/8] w-full rounded-2xl object-cover ring-1 ring-ink/10 dark:ring-paper/10"
        />
        <p className="mt-12 text-lg font-medium text-ink dark:text-paper">{inspiration.lead}</p>
        <ul className="mt-6 space-y-5">
          {inspiration.items.map((item, i) => (
            <li key={i} className="flex gap-4 text-base/7 text-ink/75 dark:text-paper/75">
              <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-accent" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      </Container>
    </article>
  )
}
