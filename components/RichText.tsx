import { Fragment, type ReactNode } from 'react'

// Matches, in priority order: [label](href), **bold**, *italic*, `code`.
const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`/g

function isExternal(href: string) {
  return /^https?:\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')
}

/** Render a single string with a small subset of inline markdown. */
export function renderInline(text: string): ReactNode {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let key = 0
  let match: RegExpExecArray | null

  TOKEN.lastIndex = 0
  while ((match = TOKEN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>)
    }
    const [, linkLabel, linkHref, bold, italic, code] = match
    if (linkLabel && linkHref) {
      const external = isExternal(linkHref)
      nodes.push(
        <a
          key={key++}
          href={linkHref}
          className="link-accent"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {linkLabel}
        </a>,
      )
    } else if (bold) {
      nodes.push(
        <strong key={key++} className="font-semibold text-ink dark:text-paper">
          {bold}
        </strong>,
      )
    } else if (italic) {
      nodes.push(
        <em key={key++} className="italic">
          {italic}
        </em>,
      )
    } else if (code) {
      nodes.push(
        <code key={key++} className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[0.85em] dark:bg-paper/10">
          {code}
        </code>,
      )
    }
    lastIndex = TOKEN.lastIndex
  }
  if (lastIndex < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>)
  }
  return nodes
}

export function RichText({ text, className }: { text: string; className?: string }) {
  return <span className={className}>{renderInline(text)}</span>
}

/** Render an array of paragraph strings. */
export function Paragraphs({
  items,
  className = 'text-base/7 text-ink/70 dark:text-paper/70',
  spacing = 'mt-6 first:mt-0',
}: {
  items: string[]
  className?: string
  spacing?: string
}) {
  return (
    <>
      {items.map((p, i) => (
        <p key={i} className={`${spacing} ${className}`}>
          {renderInline(p)}
        </p>
      ))}
    </>
  )
}
