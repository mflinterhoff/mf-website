import { LOCALES, type Locale, type SiteContent } from '@/content/types'
import en from '@/content/en'
import es from '@/content/es'
import de from '@/content/de'

const CONTENT: Record<Locale, SiteContent> = { en, es, de }

export function getContent(locale: Locale): SiteContent {
  return CONTENT[locale]
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value)
}

/** Prefix an in-app path (e.g. "/vita" or "/#experiences") with the locale. */
export function localeHref(locale: Locale, path: string): string {
  if (/^https?:\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path
  }
  if (path === '/' || path === '') return `/${locale}/`
  if (path.startsWith('/#')) return `/${locale}/${path.slice(1)}`
  return `/${locale}${path}`
}

/** Build the equivalent path in another locale (used by the language switcher). */
export function swapLocaleInPath(path: string, target: Locale): string {
  const segments = path.split('/').filter(Boolean)
  if (segments.length === 0) return `/${target}`
  segments[0] = target
  return '/' + segments.join('/') + (path.endsWith('/') ? '/' : '')
}

export { LOCALES, type Locale }
