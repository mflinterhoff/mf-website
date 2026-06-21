import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LOCALES, type Locale } from '@/content/types'
import { getContent, isLocale } from '@/lib/i18n'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { Blocks } from '@/components/Blocks'

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
  return { title: getContent(locale).legal.notice.title }
}

export default async function NoticePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const content = getContent(locale as Locale)
  const { notice } = content.legal

  return (
    <article className="pb-24 sm:pb-32">
      <PageHeader locale={locale as Locale} backLabel={content.ui.backToHome} title={notice.title} />
      <Container size="narrow" className="mt-10">
        <Blocks blocks={notice.blocks} />
      </Container>
    </article>
  )
}
