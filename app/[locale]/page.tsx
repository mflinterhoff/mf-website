import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { EnvelopeIcon, PhoneIcon, ArrowTopRightOnSquareIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { notFound } from 'next/navigation'
import { type Locale } from '@/content/types'
import { getContent, isLocale, localeHref } from '@/lib/i18n'
import { Container } from '@/components/Container'
import { Button, Eyebrow, SectionHeading } from '@/components/ui'
import { Paragraphs, renderInline } from '@/components/RichText'
import { ExperienceSection } from '@/components/ExperienceSection'
import { getIcon } from '@/components/icons'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const content = getContent(locale as Locale)
  const { home, ui } = content
  const l = locale as Locale

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 -z-10 size-[36rem] rounded-full bg-accent/15 blur-3xl"
        />
        <Container size="wide" className="py-20 sm:py-28 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>{home.introTitle}</Eyebrow>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl dark:text-paper">
                {home.quote}
              </h1>
              <p className="mt-6 max-w-xl text-lg/8 text-ink/70 dark:text-paper/70">{home.heroLead}</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href={localeHref(l, '/#contact')}>{ui.contactCta}</Button>
                <Button href={localeHref(l, '/#experiences')} variant="secondary">
                  {home.experiences.title}
                  <ArrowRightIcon aria-hidden="true" className="size-4" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rotate-3 rounded-[2rem] bg-cover bg-center opacity-90 shadow-xl"
                style={{ backgroundImage: 'url(/cover.jpg)' }}
              />
              <img
                src="/profile.jpg"
                alt="Matthias Flinterhoff"
                className="aspect-square w-full max-w-md rounded-[1.5rem] object-cover ring-1 ring-ink/10 dark:ring-paper/10"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* About — Operator & Technologist */}
      <section className="border-y border-ink/5 bg-paper-soft py-24 sm:py-32 dark:border-paper/5 dark:bg-ink-soft">
        <Container size="narrow">
          <Eyebrow>{home.eyebrow}</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl dark:text-paper">
            {home.introTitle}
          </h2>
          <div className="mt-8">
            <Paragraphs items={home.intro} className="text-lg/8 text-ink/75 dark:text-paper/75" />
          </div>
        </Container>
      </section>

      {/* Fresh out of the oven + Side projects */}
      <section className="py-24 sm:py-32">
        <Container size="wide">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Fresh card */}
            <a
              href={home.fresh.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-ink p-8 text-paper ring-1 ring-ink/10 transition hover:-translate-y-0.5 dark:bg-ink-soft dark:ring-paper/10 sm:p-10"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-accent/30 blur-3xl"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 font-mono text-xs font-medium tracking-wide text-accent-soft uppercase">
                  <SparklesIcon aria-hidden="true" className="size-4" />
                  {home.fresh.label}
                </span>
                <h3 className="mt-6 text-3xl font-semibold tracking-tight">{home.fresh.title}</h3>
                <p className="mt-3 max-w-md text-paper/70">{home.fresh.description}</p>
              </div>
              <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-soft">
                {home.fresh.cta}
                <ArrowTopRightOnSquareIcon aria-hidden="true" className="size-4 transition group-hover:translate-x-0.5" />
              </span>
            </a>

            {/* Side projects */}
            <div className="flex flex-col justify-center rounded-3xl bg-paper-soft p-8 ring-1 ring-ink/10 dark:bg-ink-soft dark:ring-paper/10 sm:p-10">
              <h3 className="text-xl font-semibold text-ink dark:text-paper">{home.sideProjects.title}</h3>
              <Paragraphs items={home.sideProjects.items} className="text-base/7 text-ink/70 dark:text-paper/70" />
            </div>
          </div>
        </Container>
      </section>

      {/* Explore / sub-pages */}
      <section className="border-t border-ink/5 bg-paper-soft py-24 sm:py-32 dark:border-paper/5 dark:bg-ink-soft">
        <Container size="wide">
          <SectionHeading eyebrow={home.explore.title} title={home.explore.subtitle} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.explore.cards.map((card) => {
              const Icon = getIcon(card.icon)
              return (
                <Link
                  key={card.key}
                  href={localeHref(l, card.href)}
                  className="group flex flex-col rounded-2xl bg-paper p-6 ring-1 ring-ink/10 transition hover:-translate-y-0.5 hover:ring-accent/40 dark:bg-ink dark:ring-paper/10 dark:hover:ring-accent/40"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-ink dark:text-paper">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm/6 text-ink/65 dark:text-paper/65">{card.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    {ui.learnMore}
                    <ArrowRightIcon aria-hidden="true" className="size-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Experiences */}
      <ExperienceSection content={content} locale={l} />

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t border-ink/5 py-24 sm:py-32 dark:border-paper/5">
        <Container size="narrow" className="text-center">
          <SectionHeading center eyebrow={ui.contactCta} title={home.contact.title} subtitle={home.contact.body} />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={`mailto:${home.contact.email}`}>
              <EnvelopeIcon aria-hidden="true" className="size-4" />
              {home.contact.emailCta}
            </Button>
            <Button href={`tel:${home.contact.phone.replace(/\s/g, '')}`} variant="secondary">
              <PhoneIcon aria-hidden="true" className="size-4" />
              {home.contact.phoneCta}
            </Button>
          </div>
          <p className="mt-8 font-mono text-sm text-ink/60 dark:text-paper/60">
            {renderInline(`${home.contact.email}  ·  ${home.contact.phone}`)}
          </p>
        </Container>
      </section>
    </>
  )
}
