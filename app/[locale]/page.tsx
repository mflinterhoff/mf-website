import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import {
  EnvelopeIcon,
  PhoneIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
  Squares2X2Icon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  ArrowsRightLeftIcon,
  ClipboardDocumentCheckIcon,
  BoltIcon,
} from '@heroicons/react/24/outline'
import { notFound } from 'next/navigation'
import { type Locale } from '@/content/types'
import { getContent, isLocale, localeHref } from '@/lib/i18n'
import { Container } from '@/components/Container'
import { Button, Eyebrow, SectionHeading } from '@/components/ui'
import { Paragraphs, renderInline } from '@/components/RichText'
import { ExperienceSection } from '@/components/ExperienceSection'
import { VideoPlayer } from '@/components/VideoPlayer'
import { getIcon } from '@/components/icons'

// Icons for the Monami AI feature listing, in content order.
const freshFeatureIcons = [
  Squares2X2Icon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  ArrowsRightLeftIcon,
  ClipboardDocumentCheckIcon,
  BoltIcon,
]

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
          <div className="grid items-center gap-20 lg:grid-cols-2 lg:gap-16">
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
            {home.aboutTitle}
          </h2>
          <div className="mt-8">
            <Paragraphs items={home.intro} className="text-lg/8 text-ink/75 dark:text-paper/75" />
          </div>
        </Container>
      </section>

      {/* Fresh out of the oven — Monami AI showcase */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        {/* Subdued tri-color wash: Skill blue, Persona orange, Legend purple */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(55% 45% at 12% 8%, rgba(88,172,228,0.16), transparent 70%),' +
              'radial-gradient(50% 45% at 88% 14%, rgba(144,88,228,0.14), transparent 72%),' +
              'radial-gradient(48% 50% at 62% 104%, rgba(228,143,88,0.12), transparent 70%)',
          }}
        />
        <Container size="wide">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 font-mono text-xs font-medium tracking-wide text-accent-strong uppercase dark:text-accent-soft">
              <SparklesIcon aria-hidden="true" className="size-4" />
              {home.fresh.label}
            </span>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl dark:text-paper">
              {home.fresh.title}
            </h2>
            <p className="mt-5 text-lg/8 text-ink/70 dark:text-paper/70">{home.fresh.description}</p>
            <div className="mt-8">
              <Button href={home.fresh.href}>
                {home.fresh.cta}
                <ArrowTopRightOnSquareIcon aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </div>
        </Container>

        <div className="relative pt-16">
          <Container size="wide">
            <VideoPlayer
              src="/monami-demo.mp4"
              poster="/monami-demo-poster.jpg"
              ariaLabel={home.fresh.videoLabel}
              restartLabel={home.fresh.restartLabel}
              width={1512}
              height={830}
              className="mx-auto max-w-5xl"
              videoClassName="w-full rounded-2xl shadow-2xl ring-1 ring-ink/10 dark:ring-paper/10"
            />
          </Container>
        </div>

        <Container size="wide" className="mt-28 sm:mt-32">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-ink/70 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-y-16 dark:text-paper/70">
            {home.fresh.features.map((feature, i) => {
              const Icon = freshFeatureIcons[i] ?? SparklesIcon
              return (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-ink dark:text-paper">
                    <Icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-accent" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              )
            })}
          </dl>
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

      {/* Contact — inverted accent banner to highlight the call to action */}
      <section id="contact" className="scroll-mt-24 bg-accent-strong py-24 sm:py-32">
        <Container size="narrow" className="text-center">
          <div className="mx-auto max-w-2xl">
            <p className="font-mono text-sm font-medium tracking-wide text-white/80 uppercase">{ui.contactCta}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              {home.contact.title}
            </h2>
            <p className="mt-4 text-lg/8 text-white/85">{renderInline(home.contact.body)}</p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={`mailto:${home.contact.email}`} variant="onAccent">
              <EnvelopeIcon aria-hidden="true" className="size-4" />
              {home.contact.emailCta}
            </Button>
            <Button href={`tel:${home.contact.phone.replace(/\s/g, '')}`} variant="onAccentSecondary">
              <PhoneIcon aria-hidden="true" className="size-4" />
              {home.contact.phoneCta}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
