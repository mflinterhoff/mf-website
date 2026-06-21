'use client'

import type { ReactNode } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

export type AccordionItem = {
  id: string
  title: ReactNode
  content: ReactNode
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="divide-y divide-ink/10 rounded-2xl ring-1 ring-ink/10 dark:divide-paper/10 dark:ring-paper/10">
      {items.map((item) => (
        <Disclosure key={item.id} as="div" className="p-2">
          <DisclosureButton className="group flex w-full items-start justify-between gap-4 rounded-xl px-4 py-4 text-left transition hover:bg-ink/[0.03] dark:hover:bg-paper/[0.04]">
            <span className="text-base font-semibold text-ink dark:text-paper">{item.title}</span>
            <span className="mt-0.5 shrink-0 text-accent">
              <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
              <MinusIcon aria-hidden="true" className="size-5 not-group-data-open:hidden" />
            </span>
          </DisclosureButton>
          <DisclosurePanel className="px-4 pt-1 pb-5 text-ink/75 dark:text-paper/75">
            {item.content}
          </DisclosurePanel>
        </Disclosure>
      ))}
    </div>
  )
}
