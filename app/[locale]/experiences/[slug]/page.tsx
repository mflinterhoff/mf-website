import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LOCALES, type Locale } from '@/content/types'
import { getContent, isLocale } from '@/lib/i18n'
import { experiencesEn } from '@/content/experiences.en'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { Accordion, type AccordionItem } from '@/components/Accordion'
import { Blocks } from '@/components/Blocks'
import { Paragraphs } from '@/components/RichText'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => experiencesEn.map((exp) => ({ locale, slug: exp.slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const exp = getContent(locale).experiences.find((e) => e.slug === slug)
  return exp ? { title: exp.name, description: exp.claim } : {}
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const content = getContent(locale as Locale)
  const exp = content.experiences.find((e) => e.slug === slug)
  if (!exp) notFound()

  const areaLabel = content.home.experiences.areaLabels[exp.area]
  const caseItems: AccordionItem[] = exp.caseStudies.map((cs, i) => ({
    id: `cs-${i}`,
    title: cs.title,
    content: <Blocks blocks={cs.blocks} />,
  }))

  return (
    <article className="pb-24 sm:pb-32">
      <PageHeader locale={locale as Locale} backLabel={content.ui.backToHome} eyebrow={areaLabel} title={exp.name} />
      <Container size="narrow">
        <p className="mt-4 text-lg/8 font-medium text-accent-strong dark:text-accent">{exp.claim}</p>

        <div className="mt-10">
          <Paragraphs items={exp.description} className="text-lg/8 text-ink/75 dark:text-paper/75" />
        </div>

        {exp.note ? (
          <div className="mt-8 flex gap-3 rounded-xl bg-accent/10 p-4 text-sm/6 text-ink/80 dark:text-paper/80">
            <InformationCircleIcon aria-hidden="true" className="size-5 shrink-0 text-accent" />
            <p>{exp.note}</p>
          </div>
        ) : null}

        {/* Playbook */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-paper">{content.ui.playbook}</h2>
          <div className="mt-8 space-y-6">
            {exp.playbook.map((section, i) => (
              <div
                key={i}
                className="rounded-2xl bg-paper-soft p-6 ring-1 ring-ink/10 dark:bg-ink-soft dark:ring-paper/10"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-base font-semibold text-ink dark:text-paper">{section.title}</h3>
                </div>
                {section.intro ? (
                  <p className="mt-3 text-base/7 text-ink/70 dark:text-paper/70">{section.intro}</p>
                ) : null}
                {section.items && section.items.length > 0 ? (
                  <ul className="mt-3 space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-base/7 text-ink/70 dark:text-paper/70">
                        <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* Case studies */}
        {caseItems.length > 0 ? (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-paper">
              {exp.caseStudies.length > 1 ? content.ui.caseStudies : content.ui.caseStudy}
            </h2>
            <div className="mt-8">
              <Accordion items={caseItems} />
            </div>
          </section>
        ) : null}
      </Container>
    </article>
  )
}
