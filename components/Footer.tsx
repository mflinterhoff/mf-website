import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import type { SiteContent, Locale } from '@/content/types'
import { LOCALES, LOCALE_LABELS, LOCALE_FLAGS } from '@/content/types'
import { localeHref, swapLocaleInPath } from '@/lib/i18n'
import { renderInline } from './RichText'

export function Footer({ content, locale }: { content: SiteContent; locale: Locale }) {
  const { footer, nav, home } = content
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-paper-soft dark:border-paper/10 dark:bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <img src="/logo.png" alt="Matthias Flinterhoff" className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-sm/6 text-ink/60 dark:text-paper/60">{footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold tracking-wider text-ink/50 uppercase dark:text-paper/50">
              {footer.exploreTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.key}>
                  <Link
                    href={localeHref(locale, item.href)}
                    className="text-sm text-ink/70 transition hover:text-accent dark:text-paper/70"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold tracking-wider text-ink/50 uppercase dark:text-paper/50">
              {footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${home.contact.email}`}
                  className="inline-flex items-center gap-2 text-ink/70 transition hover:text-accent dark:text-paper/70"
                >
                  <EnvelopeIcon aria-hidden="true" className="size-4" />
                  {home.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${home.contact.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 text-ink/70 transition hover:text-accent dark:text-paper/70"
                >
                  <PhoneIcon aria-hidden="true" className="size-4" />
                  {home.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={footer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink/70 transition hover:text-accent dark:text-paper/70"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold tracking-wider text-ink/50 uppercase dark:text-paper/50">
              {footer.languagesTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {LOCALES.map((l) => (
                <li key={l}>
                  <Link
                    href={swapLocaleInPath(`/${locale}`, l)}
                    className={`inline-flex items-center gap-2 transition hover:text-accent ${
                      l === locale ? 'font-semibold text-accent' : 'text-ink/70 dark:text-paper/70'
                    }`}
                  >
                    <span aria-hidden="true">{LOCALE_FLAGS[l]}</span>
                    {LOCALE_LABELS[l]}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-mono text-xs font-semibold tracking-wider text-ink/50 uppercase dark:text-paper/50">
              {footer.legalTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href={localeHref(locale, '/legal/notice')}
                  className="text-ink/70 transition hover:text-accent dark:text-paper/70"
                >
                  {content.legal.notice.title}
                </Link>
              </li>
              <li>
                <Link
                  href={localeHref(locale, '/legal/privacy')}
                  className="text-ink/70 transition hover:text-accent dark:text-paper/70"
                >
                  {content.legal.privacy.title}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-ink/10 pt-8 text-sm text-ink/50 dark:border-paper/10 dark:text-paper/50">
          © {year} Matthias Flinterhoff. {renderInline(footer.rights)}
        </div>
      </div>
    </footer>
  )
}
