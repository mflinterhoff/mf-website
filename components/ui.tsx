import Link from 'next/link'
import type { ReactNode } from 'react'
import { renderInline } from './RichText'

function isExternal(href: string) {
  return /^https?:\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const variants = {
  primary: 'bg-accent text-white shadow-sm hover:bg-accent-strong',
  secondary:
    'text-ink ring-1 ring-ink/15 hover:bg-ink/5 dark:text-paper dark:ring-paper/20 dark:hover:bg-paper/10',
  ghost: 'text-accent hover:text-accent-strong',
} as const

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof variants
  className?: string
}) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-sm font-medium tracking-wide text-accent uppercase">{children}</p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl dark:text-paper">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg/8 text-ink/65 dark:text-paper/65">{renderInline(subtitle)}</p>
      ) : null}
    </div>
  )
}
