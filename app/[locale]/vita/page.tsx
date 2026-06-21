import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  AcademicCapIcon,
  LanguageIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import { LOCALES, type Locale } from '@/content/types'
import { getContent, isLocale } from '@/lib/i18n'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { Accordion, type AccordionItem } from '@/components/Accordion'
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
  return { title: getContent(locale).vita.title }
}

export default async function VitaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const content = getContent(locale as Locale)
  const { vita, ui } = content

  const glossaryItems: AccordionItem[] = vita.glossary.map((g, i) => ({
    id: `g-${i}`,
    title: g.term,
    content: (
      <div className="space-y-3">
        <p className="text-base/7">{g.definition}</p>
        <p className="text-sm/6 text-ink/60 italic dark:text-paper/60">{g.sample}</p>
      </div>
    ),
  }))

  return (
    <article className="pb-24 sm:pb-32">
      <PageHeader locale={locale as Locale} backLabel={ui.backToHome} title={vita.title} />

      <Container size="narrow" className="mt-14 space-y-20">
        {/* Professional experience */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-paper">{vita.experienceTitle}</h2>
          <div className="mt-8 space-y-8 border-l border-ink/10 pl-6 dark:border-paper/10">
            {vita.positions.map((pos, i) => (
              <div key={i} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[1.6rem] size-3 rounded-full bg-accent ring-4 ring-paper dark:ring-ink"
                />
                <p className="font-mono text-sm text-accent">{pos.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-ink dark:text-paper">{pos.role}</h3>
                <p className="text-sm font-medium text-accent-strong dark:text-accent">{pos.org}</p>
                <p className="mt-2 text-base/7 text-ink/70 dark:text-paper/70">{pos.description}</p>
                {pos.note ? (
                  <div className="mt-4 rounded-xl bg-accent/10 p-4">
                    <p className="text-sm font-semibold text-ink dark:text-paper">{pos.note.title}</p>
                    <p className="mt-1 text-sm/6 text-ink/70 dark:text-paper/70">{pos.note.text}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm/6 text-ink/60 italic dark:text-paper/60">
            {renderInline(vita.experienceFootnote)}
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-paper">{vita.educationTitle}</h2>
          <div className="mt-8 space-y-8">
            {vita.education.map((edu, i) => (
              <div key={i}>
                <h3 className="text-base font-semibold text-ink dark:text-paper">{edu.degree}</h3>
                <p className="mt-2 text-sm/6 text-accent-strong dark:text-accent">{edu.focus}</p>
                <p className="mt-1 text-sm/6 text-ink/65 dark:text-paper/65">{edu.activities}</p>
                <p className="mt-1 text-sm/6 text-ink/55 dark:text-paper/55">{edu.school}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Assets */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-paper">{vita.assetsTitle}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {/* Key skills */}
            <AssetCard icon={<SparklesIcon className="size-5" />} title={vita.skills.title} note={vita.skills.note}>
              <div className="mt-4 flex flex-wrap gap-2">
                {vita.skills.items.split(',').map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent-strong dark:text-accent"
                  >
                    {skill.trim()}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm/6 text-ink/55 italic dark:text-paper/55">
                {renderInline(vita.skills.footnote)}
              </p>
            </AssetCard>

            {/* Languages */}
            <AssetCard icon={<LanguageIcon className="size-5" />} title={vita.languages.title}>
              <ul className="mt-4 space-y-2">
                {vita.languages.items.map((lang) => (
                  <li key={lang} className="text-sm/6 text-ink/75 dark:text-paper/75">
                    {lang}
                  </li>
                ))}
              </ul>
            </AssetCard>

            {/* Tools */}
            <AssetCard
              className="sm:col-span-2"
              icon={<WrenchScrewdriverIcon className="size-5" />}
              title={vita.tools.title}
              note={vita.tools.note}
            >
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {vita.tools.groups.map((group) => (
                  <div key={group.label}>
                    <h4 className="font-mono text-xs font-semibold tracking-wider text-ink/50 uppercase dark:text-paper/50">
                      {group.label}
                    </h4>
                    <p className="mt-2 text-sm/6">
                      {group.tools.map((tool, j) => (
                        <span key={tool.name}>
                          <a
                            href={tool.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`underline-offset-2 hover:underline ${
                              tool.primary
                                ? 'font-semibold text-accent-strong dark:text-accent'
                                : 'text-ink/65 dark:text-paper/65'
                            }`}
                          >
                            {tool.name}
                          </a>
                          {j < group.tools.length - 1 ? <span className="text-ink/30 dark:text-paper/30">, </span> : null}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </AssetCard>

            {/* Connections */}
            <AssetCard className="sm:col-span-2" icon={<UserGroupIcon className="size-5" />} title={vita.connections.title} note={vita.connections.note}>
              <p className="mt-4 text-base/7 font-medium text-ink dark:text-paper">{vita.connections.areas}</p>
              <p className="mt-4 text-sm/6 text-ink/55 italic dark:text-paper/55">
                {renderInline(vita.connections.footnote)}
              </p>
            </AssetCard>
          </div>
        </section>

        {/* Glossary */}
        <section>
          <div className="flex items-center gap-3">
            <AcademicCapIcon aria-hidden="true" className="size-6 text-accent" />
            <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-paper">{vita.glossaryTitle}</h2>
          </div>
          <div className="mt-8">
            <Accordion items={glossaryItems} />
          </div>
        </section>
      </Container>
    </article>
  )
}

function AssetCard({
  icon,
  title,
  note,
  children,
  className = '',
}: {
  icon: React.ReactNode
  title: string
  note?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-2xl bg-paper-soft p-6 ring-1 ring-ink/10 dark:bg-ink-soft dark:ring-paper/10 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent">{icon}</span>
        <h3 className="text-lg font-semibold text-ink dark:text-paper">{title}</h3>
      </div>
      {note ? <p className="mt-3 text-sm/6 text-ink/55 dark:text-paper/55">{note}</p> : null}
      {children}
    </div>
  )
}
