import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import type { Locale } from '@/content/types'
import { localeHref } from '@/lib/i18n'
import { Container } from './Container'
import { Eyebrow } from './ui'
import { renderInline } from './RichText'

export function PageHeader({
  locale,
  backLabel,
  backHref = '/',
  eyebrow,
  title,
  intro,
}: {
  locale: Locale
  backLabel: string
  backHref?: string
  eyebrow?: string
  title: string
  intro?: string
}) {
  return (
    <Container size="narrow" className="pt-12 pb-2 sm:pt-16">
      <Link
        href={localeHref(locale, backHref)}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/60 transition hover:text-accent dark:text-paper/60"
      >
        <ArrowLeftIcon aria-hidden="true" className="size-4" />
        {backLabel}
      </Link>
      {eyebrow ? <div className="mt-8">{<Eyebrow>{eyebrow}</Eyebrow>}</div> : <div className="mt-8" />}
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl dark:text-paper">
        {title}
      </h1>
      {intro ? <p className="mt-6 text-lg/8 text-ink/70 dark:text-paper/70">{renderInline(intro)}</p> : null}
    </Container>
  )
}
