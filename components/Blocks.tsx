import { InformationCircleIcon } from '@heroicons/react/24/outline'
import type { CaseBlock } from '@/content/types'
import { renderInline } from './RichText'

/** Renders the rich CaseBlock[] used by case studies and legal pages. */
export function Blocks({ blocks }: { blocks: CaseBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case 'subheading':
            return (
              <h4
                key={i}
                className="pt-2 font-mono text-xs font-semibold tracking-wider text-accent uppercase"
              >
                {block.text}
              </h4>
            )
          case 'paragraph':
            return (
              <p key={i} className="text-base/7 text-ink/75 dark:text-paper/75">
                {renderInline(block.text)}
              </p>
            )
          case 'bullets':
            return (
              <ul key={i} className="space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base/7 text-ink/75 dark:text-paper/75">
                    <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            )
          case 'note':
            return (
              <div
                key={i}
                className="flex gap-3 rounded-xl bg-accent/10 p-4 text-sm/6 text-ink/80 dark:text-paper/80"
              >
                <InformationCircleIcon aria-hidden="true" className="size-5 shrink-0 text-accent" />
                <p>{renderInline(block.text)}</p>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
