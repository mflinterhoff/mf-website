import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import type { SiteContent, Locale, Area } from '@/content/types'
import { localeHref } from '@/lib/i18n'
import { getIcon, AREA_ICONS } from './icons'
import { Container } from './Container'
import { SectionHeading } from './ui'

const AREA_ORDER: Area[] = ['corporate', 'it', 'marketing']

export function ExperienceSection({ content, locale }: { content: SiteContent; locale: Locale }) {
  const { experiences, home, ui } = content
  const byArea = AREA_ORDER.map((area) => ({
    area,
    label: home.experiences.areaLabels[area],
    items: experiences.filter((e) => e.area === area),
  })).filter((g) => g.items.length > 0)

  return (
    <section id="experiences" className="scroll-mt-24 py-24 sm:py-32">
      <Container size="wide">
        <SectionHeading
          eyebrow={home.experiences.title}
          title={home.experiences.subtitle}
        />

        <div className="mt-16 space-y-16">
          {byArea.map((group) => {
            const AreaIcon = AREA_ICONS[group.area]
            return (
              <div key={group.area}>
                <div className="flex items-center gap-3">
                  <AreaIcon aria-hidden="true" className="size-5 text-accent" />
                  <h3 className="font-mono text-sm font-semibold tracking-wider text-ink/60 uppercase dark:text-paper/60">
                    {group.label}
                  </h3>
                  <div className="h-px flex-1 bg-ink/10 dark:bg-paper/10" />
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((exp) => {
                    const Icon = getIcon(exp.icon)
                    return (
                      <Link
                        key={exp.slug}
                        href={localeHref(locale, `/experiences/${exp.slug}`)}
                        className="group flex flex-col rounded-2xl bg-paper-soft p-6 ring-1 ring-ink/10 transition hover:-translate-y-0.5 hover:ring-accent/40 dark:bg-ink-soft dark:ring-paper/10 dark:hover:ring-accent/40"
                      >
                        <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          <Icon aria-hidden="true" className="size-6" />
                        </span>
                        <h4 className="mt-5 text-base font-semibold text-ink dark:text-paper">{exp.name}</h4>
                        <p className="mt-2 flex-1 text-sm/6 text-ink/65 dark:text-paper/65">{exp.claim}</p>
                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                          {ui.learnMore}
                          <ArrowRightIcon
                            aria-hidden="true"
                            className="size-4 transition group-hover:translate-x-0.5"
                          />
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
