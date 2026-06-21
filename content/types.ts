// Shared content model for all three locales. Strings may contain a small subset
// of inline markdown — **bold**, *italic*, `code`, and [label](href) — which is
// rendered by components/RichText.tsx.

export type Locale = 'en' | 'es' | 'de'
export const LOCALES: Locale[] = ['en', 'es', 'de']
export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
}

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  de: '🇩🇪',
}

export type Area = 'corporate' | 'it' | 'marketing'

// ---- Experiences (services database) -------------------------------------

export type CaseBlock =
  | { kind: 'subheading'; text: string }
  | { kind: 'paragraph'; text: string }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'note'; text: string }

export type CaseStudy = {
  title: string
  blocks: CaseBlock[]
}

export type PlaybookSection = {
  title: string
  intro?: string
  items?: string[]
}

export type Experience = {
  slug: string
  area: Area
  icon: string // key into components/icons.ts ICONS registry
  name: string
  claim: string
  description: string[]
  note?: string
  playbook: PlaybookSection[]
  caseStudies: CaseStudy[]
}

// ---- Sub-page content models ---------------------------------------------

export type VitaPosition = {
  period: string
  role: string
  org: string
  description: string
  note?: { title: string; text: string }
}

export type Education = {
  degree: string
  focus: string
  activities: string
  school: string
}

export type ToolLink = { name: string; href: string; primary?: boolean }
export type ToolGroup = { label: string; tools: ToolLink[] }

export type GlossaryEntry = { term: string; definition: string; sample: string }

export type VitaContent = {
  title: string
  experienceTitle: string
  positions: VitaPosition[]
  experienceFootnote: string
  educationTitle: string
  education: Education[]
  assetsTitle: string
  skills: { title: string; note?: string; items: string; footnote: string }
  languages: { title: string; items: string[] }
  tools: { title: string; note: string; groups: ToolGroup[] }
  connections: { title: string; note: string; areas: string; footnote: string }
  glossaryTitle: string
  glossary: GlossaryEntry[]
}

export type LegalContent = {
  title: string
  blocks: CaseBlock[]
}

// ---- Top-level site content ----------------------------------------------

export type NavItem = { key: string; label: string; href: string; icon: string }

export type SiteContent = {
  locale: Locale
  meta: { title: string; description: string }
  nav: NavItem[]
  ui: {
    skipToContent: string
    home: string
    languageLabel: string
    toggleTheme: string
    openMenu: string
    closeMenu: string
    backToHome: string
    learnMore: string
    onThisPage: string
    contactCta: string
    playbook: string
    caseStudy: string
    caseStudies: string
  }
  home: {
    quote: string
    heroLead: string
    eyebrow: string
    introTitle: string
    intro: string[]
    fresh: { label: string; title: string; description: string; cta: string; href: string }
    sideProjects: { title: string; items: string[] }
    explore: {
      title: string
      subtitle: string
      cards: { key: string; title: string; description: string; href: string; icon: string }[]
    }
    experiences: {
      title: string
      subtitle: string
      areaLabels: Record<Area, string>
    }
    contact: {
      title: string
      body: string
      email: string
      phone: string
      emailCta: string
      phoneCta: string
    }
  }
  inspiration: { title: string; intro: string; lead: string; items: string[] }
  approach: {
    title: string
    intro: string
    quote: { text: string; author: string }
    quoteFollow: string
    sections: { title: string; body: string; tagline: string }[]
  }
  questions: {
    title: string
    intro: string[]
    items: { q: string; a: string[] }[]
  }
  vita: VitaContent
  legal: { notice: LegalContent; privacy: LegalContent }
  experiences: Experience[]
  footer: {
    tagline: string
    legalTitle: string
    languagesTitle: string
    exploreTitle: string
    contactTitle: string
    rights: string
    linkedin: string
  }
}
