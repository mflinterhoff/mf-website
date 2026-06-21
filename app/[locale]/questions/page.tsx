import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LOCALES, type Locale } from '@/content/types'
import { getContent, isLocale } from '@/lib/i18n'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { Accordion, type AccordionItem } from '@/components/Accordion'

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
  return { title: getContent(locale).questions.title }
}

export default async function QuestionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const content = getContent(locale as Locale)
  const { questions, ui } = content

  const items: AccordionItem[] = questions.items.map((item, i) => ({
    id: `q-${i}`,
    title: (
      <span className="flex gap-3">
        <span className="font-mono text-accent">{i + 1}.</span>
        <span>{item.q}</span>
      </span>
    ),
    content: (
      <ul className="space-y-3">
        {item.a.map((answer, j) => (
          <li key={j} className="flex gap-3 text-base/7">
            <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{answer}</span>
          </li>
        ))}
      </ul>
    ),
  }))

  return (
    <article className="pb-24 sm:pb-32">
      <PageHeader locale={locale as Locale} backLabel={ui.backToHome} title={questions.title} />
      <Container size="narrow" className="mt-6">
        <div className="space-y-4">
          {questions.intro.map((p, i) => (
            <p key={i} className="text-base/7 text-ink/70 dark:text-paper/70">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-12">
          <Accordion items={items} />
        </div>
      </Container>
    </article>
  )
}
